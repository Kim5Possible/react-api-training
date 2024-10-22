import { Button } from "antd";
import { useEffect, useState } from "react";

const count = 4;

const dataUrl = `https://api.jikan.moe/v4/top/anime`;

export function useFetchData({ filter }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [prevFilter, setPrevFilter] = useState(filter);

  useEffect(() => {
    const fetchData = async () => {
      if (filter !== prevFilter) {
        setInitLoading(true);
        setPrevFilter(filter);
      }
      try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        const filteredData = data.data.filter(
          (item) =>
            item.status === filter ||
            filter === "All" ||
            item.genres.some((genre) => genre.name.includes(filter))
        );
        setData(filteredData);
        setList(filteredData.slice(0, Math.min(count, filteredData.length)));
      } catch (error) {
        setError(error);
      } finally {
        setInitLoading(false);
      }
    };
    fetchData();
  }, [filter]);

  const onLoadMore = () => {
    setLoading(true);
    const nextData = data.slice(list.length, list.length + 4);
    setList([...list, ...nextData]);
    setLoading(false);
    window.dispatchEvent(new Event("resize"));
  };
  const loadMore =
    !initLoading && !loading && list.length < data.length ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          marginRight: 40,
        }}
      >
        <Button onClick={onLoadMore}>LOAD MORE</Button>
      </div>
    ) : (
      ""
    );

  return [loadMore, initLoading, list, error];
}

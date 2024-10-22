import { useFetchData } from "../../../../hooks/useFetchData";
import { Button, Card, Flex, Typography, List, Popover } from "antd";
import { StarTwoTone } from "@ant-design/icons";
import { useState } from "react";

function ListNow({ filter }) {
  const [loadMore, initLoading, list, error] = useFetchData({ filter });
  const [open, setOpen] = useState(false);

  const handleOpenChange = (id) => {
    setOpen((prevOpen) => ({ ...prevOpen, [id]: !prevOpen[id] }));
  };

  return (
    <section>
      <Typography.Title level={2}>Top Anime</Typography.Title>
      {error ? (
        <div>Something went wrong! Please try again</div>
      ) : (
        <List
          grid={{ column: 2 }}
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={
            (item) => (
              <List.Item key={item.mal_id}>
                <Card
                  hoverable
                  style={{ width: 480 }}
                  className="flex flex-col justify-center h-72"
                >
                  <Flex gap="middle">
                    <img
                      src={item.images.jpg.image_url}
                      alt={item.title}
                      className="rounded-lg"
                      style={{ width: 170 }}
                    />
                    <Flex vertical align="start" justify="space-between">
                      <div>
                        <Typography.Text
                          type={`${
                            item.status === "Finished Airing"
                              ? "success"
                              : item.status === "Not yet aired"
                              ? "danger"
                              : "warning"
                          }`}
                          className={` border px-1 rounded-lg ${
                            item.status === "Finished Airing"
                              ? "border-green-300 bg-green-50"
                              : item.status === "Not yet aired"
                              ? "border-red-300 bg-red-50"
                              : "border-orange-300 bg-orange-50"
                          } `}
                        >
                          {item.status}
                        </Typography.Text>
                        <Typography.Text type="secondary" className="block">
                          {`${
                            item.season
                              ? item.season +
                                "-" +
                                item.year +
                                `${item.episodes ? "•" : ""}`
                              : ""
                          }`}
                          {`${
                            item.episodes ? item.episodes + " episodes" : ""
                          }`}
                        </Typography.Text>
                      </div>
                      <Typography.Title level={5} strong style={{ margin: 0 }}>
                        {item.title_english}
                      </Typography.Title>
                      <div>
                        <Flex className="gap-16">
                          <Typography.Text strong>
                            <StarTwoTone
                              twoToneColor="#ffc400"
                              className="mr-1"
                            />
                            {item.score}
                          </Typography.Text>
                          <Typography.Text strong>
                            # {item.rank}
                          </Typography.Text>
                        </Flex>
                        <Flex className="gap-9">
                          <Typography.Text type="secondary" className="text-xs">
                            {item.scored_by} users
                          </Typography.Text>
                          <Typography.Text type="secondary" className="text-xs">
                            Ranking
                          </Typography.Text>
                        </Flex>
                      </div>
                      <div>
                        {item.genres.map(
                          (genre) =>
                            genre && (
                              <Typography.Text key={genre.mal_id} code>
                                {genre.name}{" "}
                              </Typography.Text>
                            )
                        )}
                      </div>
                      <Popover
                        content={
                          <div className="text-xs max-w-2xl">
                            {item.synopsis}
                          </div>
                        }
                        title={
                          <Typography.Title level={5} style={{ margin: 0 }}>
                            Synopsis {item.title_english}
                          </Typography.Title>
                        }
                        trigger="click"
                        open={open[item.mal_id]}
                        onOpenChange={() => handleOpenChange(item.mal_id)}
                      >
                        <Button type="primary">Synopsis</Button>
                      </Popover>
                    </Flex>
                  </Flex>
                </Card>
              </List.Item>
            )
            // ) : null
          }
        />
      )}
    </section>
  );
}

export default ListNow;

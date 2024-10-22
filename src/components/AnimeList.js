import Navbar from "./components/Navbar";
import { Layout } from "antd";
import SiderMenu from "./components/SiderMenu";
import List from "./components/List/List";
import { useState } from "react";

function AnimeList() {
  const [filter, setFilter] = useState("All");
  return (
    <Layout>
      <Navbar />
      <Layout>
        <SiderMenu setFilter={setFilter} />
        <List filter={filter} />
      </Layout>
    </Layout>
  );
}

export default AnimeList;

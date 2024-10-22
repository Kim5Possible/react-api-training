import { Layout, Menu } from "antd";
import {
  BookOutlined,
  PlayCircleOutlined,
  ForwardOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

export default function SiderMenu({ setFilter }) {
  return (
    <Sider style={{ height: "100vh", position: "sticky", top: 0 }}>
      <Menu
        mode="inline"
        className="h-full pt-10 flex flex-col gap-3"
        items={[
          {
            key: "0",
            icon: <BookOutlined />,

            label: "Top All",
            onClick: () => setFilter("All"),
          },
          {
            key: "1",
            icon: <PlayCircleOutlined />,
            label: "Finished",
            onClick: () => setFilter("Finished Airing"),
          },
          {
            key: "2",
            icon: <ForwardOutlined />,
            label: "Ongoing",
            onClick: () => setFilter("Currently Airing"),
          },
        ]}
      />
    </Sider>
  );
}

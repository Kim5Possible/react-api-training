import { Layout } from "antd";
import ListTop from "./components/ListTop";
const { Content } = Layout;

export default function List({ filter }) {
  return (
    <Layout>
      <Content className="p-10">
        <ListTop filter={filter} />
      </Content>
    </Layout>
  );
}

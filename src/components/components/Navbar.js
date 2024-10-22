import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";

import { Layout } from "antd";
const { Header } = Layout;

export default function Navbar() {
  return (
    <Header className="z-10 flex justify-between">
      <img src={image1} alt="logo" className="w-16 " />
      <img src={image2} alt="logo" className="w-16" />
    </Header>
  );
}

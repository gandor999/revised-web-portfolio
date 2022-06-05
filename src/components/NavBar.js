import { Menu } from "antd";
import {
  HomeOutlined,
  QuestionOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="font-link">
      <div className="menu fixed-top">
        <Menu
          mode="horizontal"
          className="justify-content-center align-items-center"
        >
          <Menu.Item
            key="home"
            className="d-flex align-items-center nav-text"
            icon={<HomeOutlined className="" />}
          >
            <Link to="/personal-web-portfolio/" className="pt-3">
              <strong>Home</strong>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="about"
            id="about-text"
            className="d-flex align-items-center nav-text"
            icon={<QuestionOutlined className="" />}
          >
            <Link to="/personal-web-portfolio/aboutme" className="pt-3">
              <strong>About Me</strong>
            </Link>
          </Menu.Item>

          <Menu.Item
            key="project"
            id="projects-text"
            className="d-flex align-items-center nav-text"
            icon={<AlertOutlined className="" />}
          >
            <Link to="/personal-web-portfolio/projects" className="pt-3">
              <strong>Projects</strong>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

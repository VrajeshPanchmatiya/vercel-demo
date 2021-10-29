import { Carousel, Image, Row, Col, Card, Button } from "antd";
import "./home.css";
import img1 from "./img/jpg.jpg";
import img2 from "./img/image.jpg";
import img3 from "./img/website.jpg";
import img4 from "./img/india.jpg";
import img5 from "./img/dubai.jpg";
import img6 from "./img/paris.jpg";
import {
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";
const Home = () => {
  let history = useHistory();
  const { Meta } = Card;
  const logoutbtn = () => {
    history.push("/");
  };
  return (
    <div>
      <div>
        <ul className="ul">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <Button
              className="bttn"
              type="text"
              htmlType="button"
              onClick={logoutbtn}
            >
              Logout
            </Button>
          </li>
        </ul>
      </div>
      <div>
        <Carousel effect="fade" autoplay>
          <div>
            <Image src={img1} width="1300px" height="500px" />
          </div>
          <div>
            <Image src={img2} width="1300px" height="500px" />
          </div>
          <div>
            <Image src={img3} width="1300px" height="500px" />
          </div>
        </Carousel>
      </div>
      <div>
        <Row>
          <Col span={6}>
            <Card
              style={{ margin: "24px" }}
              hoverable
              cover={<img alt="example" src={img4} height="600" />}
            >
              <Meta title="India Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              style={{ margin: "24px" }}
              hoverable
              cover={<img alt="example" src={img5} height="600" />}
            >
              <Meta title="Dubai Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              style={{ margin: "24px" }}
              hoverable
              cover={<img alt="example" src={img6} height="600" />}
            >
              <Meta title="Paris Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ margin: "24px" }}
              cover={
                <img
                  alt="example"
                  height="600"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="footer-basic">
        <div className="social">
          <a href="home">
            <InstagramOutlined />
          </a>
          <a href="home">
            <TwitterOutlined />
          </a>
          <a href="home">
            <FacebookOutlined />
          </a>
          <a href="home">
            <WhatsAppOutlined />
          </a>
        </div>
        <ul className="socal">
          <a href="home">Home</a>
          <a href="news">News</a>
          <a href="contact">Contact</a>
          <a href="about">About</a>
        </ul>
        <p className="copyright">Copyright @2021 | Designed by GreenApple</p>
      </div>
    </div>
  );
};
export default Home;

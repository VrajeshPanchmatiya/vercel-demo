import { Button, Input, Typography, Form } from "antd";
import React from "react";
import "./LoginDesign.css";
import { useHistory } from "react-router-dom";
const Login = () => {
  const { Title, Text } = Typography;
  let history = useHistory();
  const onFinish = (values) => {
    console.log("Success", values);
    alert(values.Email);
    // alert(localStorage.getItem("email"));
    if (
      window.localStorage.getItem("email") === values.Email &&
      window.localStorage.getItem("password") === values.password
    ) {
      history.push("/home");
    }
  };
  // const validateMessages = {
  //   required: "${label} is Required",
  //   types: {
  //     email: "${label} is not a valid number",
  //   },
  // };
  const RegisteredPage = () => {
    history.push("/SimpleForm");
  };
  return (
    <div className="d">
      <Title className="header" style={{ color: "white" }} underline={true}>
        Login
      </Title>
      <Form
        labelCol={{ span: 10 }}
        colon={false}
        wrapperCol={{ span: 4 }}
        onFinish={onFinish}
        // validateMessages={validateMessages}
      >
        <Form.Item
          label={<label style={{ color: "white" }}>Email</label>}
          name="Email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
          tooltip="Email is Required Field"
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          label={<label style={{ color: "white" }}>Password</label>}
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
          tooltip="Password is Required Field"
        >
          <Input.Password placeholder="password" />
        </Form.Item>
        <Button className="btton" htmlType="submit">
          Submit
        </Button>
      </Form>

      <Text style={{ color: "white" }}>
        Not Registered ?
        <Button style={{ color: "white" }} type="text" onClick={RegisteredPage}>
          Click Here !!!
        </Button>
      </Text>
    </div>
  );
};
export default Login;

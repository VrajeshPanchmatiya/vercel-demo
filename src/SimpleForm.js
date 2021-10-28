import {
  Form,
  Button,
  Radio,
  Input,
  Typography,
  Select,
  DatePicker,
} from "antd";
import React from "react";
import "antd/dist/antd.css";
import "./Form.css";
import { useHistory } from "react-router";
const SimpleForm = (props) => {
  const { Title } = Typography;
  const { Option } = Select;
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  let history = useHistory();
  // const validateMessages = {
  //   required: "${label} is required!",
  //   types: {
  //     email: "${label} is not a valid email!",
  //     number: "${label} is not a valid number!",
  //   },
  // };
  const onSearch = (val) => {
    console.log("search", val);
  };
  const onFocus = () => {
    console.log("Focus");
  };

  const onBlur = () => {
    console.log("Blur");
  };
  const onFinish = (values) => {
    let email = values.Email;
    let password = values.password;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    history.push("/");
  };
  return (
    <div className="dv">
      <Title className="header" style={{ color: "white" }} underline={true}>
        User Form
      </Title>
      <Form
        labelCol={{
          span: 10,
        }}
        colon={false}
        wrapperCol={{
          span: 4,
        }}
        onFinish={onFinish}
        // validateMessages={validateMessages}
      >
        <Form.Item
          label={<label style={{ color: "white" }}>First Name</label>}
          name="First Name"
          // label="Name"
          rules={[
            {
              required: true,
            },
          ]}
          tooltip="FirstName is a Required Field"
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          label={<label style={{ color: "white" }}>Last Name</label>}
          name="Last Name"
          rules={[
            {
              required: true,
            },
          ]}
          tooltip="LastName is a Required Field"
        >
          <Input placeholder="Last Name" />
        </Form.Item>
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
          label={<label style={{ color: "white" }}>Gender</label>}
          name="Gender"
          rules={[
            {
              required: true,
            },
          ]}
          tooltip="Gender is Required Field"
        >
          <Radio.Group>
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label={<label style={{ color: "white" }}>Mobile</label>}
          name="mobile"
          rules={[
            {
              required: true,
              message: "Please Input Your Phone Number",
            },
          ]}
          tooltip="Number is Required Field"
        >
          <Input placeholder="Mobile Number" />
        </Form.Item>
        <Form.Item
          label={<label style={{ color: "white" }}>Skills</label>}
          name="Skills"
          rules={[
            {
              required: true,
            },
          ]}
          tooltip="Skills is Required Field"
        >
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Select Skills"
            onChange={onChange}
            onSearch={onSearch}
            onFocus={onFocus}
            onBlur={onBlur}
          >
            <Option value="Reading">Reading</Option>
            <Option value="Dancing">Dancing</Option>
            <Option value="Playing">Playing</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label={<label style={{ color: "white" }}>Birth Date</label>}
          name="BirthDate"
          rules={[
            {
              required: true,
            },
          ]}
          tooltip="Birth Date is Required Field"
        >
          <DatePicker style={{ width: "100%" }} />
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
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Button className="btton" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default SimpleForm;

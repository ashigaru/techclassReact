import React from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Layout } from 'antd';
import { UnlockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './index.css';

const { Content } = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const InputForm = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Layout>

                <Content>
                    <Row>
                        <Col span={8} offset={8} className='inputFormCol'>
                            <Form className='inputForm'
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <h2 className='inputHeader'>Log in to your account</h2>
                                <Form.Item
                                    label= <UserOutlined />
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input placeholder='Username' />
            </Form.Item>

                            <Form.Item
                                label= <UnlockOutlined />
                name = "password"
    rules = {[{ required: true, message: 'Please input your password!' }]}
        >
        <Input.Password placeholder='Password' />
            </Form.Item >

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                <Link to="/cards">Submit</Link>
                            </Button>
                        </Form.Item>
        </Form ></Col>
                </Row>

        </Content>
            </Layout >
                    </>
    );
};

export default InputForm;
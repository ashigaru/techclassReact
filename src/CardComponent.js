import React, { Component } from 'react'
import { Card, Row, Col, Layout } from 'antd';
import './index.css';

const { Content } = Layout;

const onClose = (e) => {
    console.log(e, 'I was closed');
}

export default class CardComponent extends Component {
    render() {
        return (
            <Layout>

                <Content>
                    <Row>
                        <Col span={7} className='cardComponentCol'>
                            <Card closable onClose={onClose} title="Item 1" style={{ width: 500 }}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                <button className='deleteCardButton'>Delete</button>
                            </Card>
                        </Col>
                        <Col span={7} className='cardComponentCol'>
                            <Card title="Item 2" style={{ width: 500 }}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                <button className='deleteCardButton'>Delete</button>
                            </Card>
                        </Col>
                        <Col span={7} className='cardComponentCol'>
                            <Card title="Item 3" style={{ width: 500 }}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                <button className='deleteCardButton'>Delete</button>
                            </Card>
                        </Col>
                    </Row>

                </Content>
            </Layout>
        )
    }
}

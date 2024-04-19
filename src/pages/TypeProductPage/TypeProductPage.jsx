import React, { Fragment } from "react";
import NavbarComponent from "../../components/NavbarComponent/NavBarComponent";
import CardComponent from "../../components/CartComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";

const TypeProductPage = () => {
    const onChange = () => {}
    return (
            <div style={{padding:'0 120px', background:'#efefef'}}>
            <Row style={{flexWrap:'nowrap', paddingTop:'10px'}}>
                <WrapperNavbar >
                    <NavbarComponent />
                </WrapperNavbar>
                <Col span={20}>
                <WrapperProducts >
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </WrapperProducts>
                <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{textAlign:'center', marginTop:'10px'}} />
                </Col>
            </Row>
            </div>
            
    )
}

export default TypeProductPage
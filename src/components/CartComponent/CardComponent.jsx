import { Card } from "antd";
import React from "react";
import { StyleNameProduct, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from "./style";
import { StarFilled } from '@ant-design/icons'; // Fixed import statement
import logo from '../../assets/images/1be823299ae34c7ddcd922e73abd4909.png';


const CartComponent = () => {
    return (
        <Card
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://cf.shopee.vn/file/vn-11134207-7r98o-ll09iabokpu379" />} // Check image path
        >
            <img
                src={logo}
                style={{
                    width: '68px',
                    height: '14px',
                    position: 'absolute',
                    top: -1,
                    left: -1,
                    borderTopLeftRadius: '3px'
                }}
                alt="logo"
            />
            <StyleNameProduct>Khan giay</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>4.5</span><StarFilled style={{ fontSize: '10px', color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell> | Da ban 100+</WrapperStyleTextSell>
                </WrapperReportText>
                <WrapperPriceText>
                    <span style={{marginRight:'8px'}}>377.000d</span>
                    <WrapperDiscountText>
                        -5%
                    </WrapperDiscountText>
                </WrapperPriceText>
            
        </Card>
    )
}

export default CartComponent;

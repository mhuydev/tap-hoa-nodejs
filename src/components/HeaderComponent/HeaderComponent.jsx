import React from "react";
import { Badge, Col } from "antd";
import { WrapperHeader, WrapperHeaderAccout, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import { Input } from "antd";

import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

const { Search } = Input;

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader>
                <Col span={6}>
                    <WrapperTextHeader>Tạp Hóa PEWPEW</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch
                    size="large"
                    textButton="Tìm kiếm"
                    placeholder="Nhập tên sản phẩm"
                    // onSearch={onSearch}
                    />
                </Col>
                <Col span={6} style={{display:'flex', gap:'20px', alignItems:'center'}}>
                    <WrapperHeaderAccout>
                            <UserOutlined style={{fontSize: '30px'}} />
                        <div>
                            <WrapperTextHeaderSmall style={{fontSize: '12px'}}>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall style={{fontSize: '12px'}}>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccout>
                    <div>
                        <Badge count={5} size="small">
                            <ShoppingCartOutlined style={{fontSize: '30px', color:'#fff'}}/>
                        </Badge>
                        <WrapperTextHeaderSmall >Giỏ hàng</WrapperTextHeaderSmall>                        
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent;

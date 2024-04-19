import { Col, Image, Row } from 'antd';
import { StarFilled, PlusOutlined, MinusOutlined, InputNumber } from '@ant-design/icons';
import React from 'react';
import imageProduct from '../../assets/images/z5357040535514_d5f24e06d3757b3820cb78a366b49cc8.jpg';
import imageProductSmall from '../../assets/images/61656588_2037494259692970_7460046266857160704_n.jpg';
import { WrapperAddressProduct, WrapperBtnQualityProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ProductDetailsComponent = () => {
    const onChange = (value) => {
        console.log('changed', value);
      };
  return (
    <Row style={{padding:'16px', backgroundColor:'#fff', borderRadius:'4px'}}>
        <Col span={10} style={{borderRight:'1px solid #e5e5e5', paddingRight:'8px'}}>
            <Image src={imageProduct} alt="image product" preview={false}/>
            <Row style={{paddingTop:'10px', justifyContent:'space-between'}}>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/> 
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/> 
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/> 
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/> 
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/> 
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false}/> 
                </WrapperStyleColImage>
            </Row>
        </Col>
        <Col span={14} style={{paddingLeft:'10px'}}>
            <WrapperStyleNameProduct>Giấy ướt vệ sinh</WrapperStyleNameProduct>
            <div>
                <StarFilled style={{fontSize:'12px', color:'rgb(256, 216, 54)'}}/>
                <StarFilled style={{fontSize:'12px', color:'rgb(256, 216, 54)'}}/>
                <StarFilled style={{fontSize:'12px', color:'rgb(256, 216, 54)'}}/>
                <WrapperStyleTextSell> | Da ban +1000</WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
                <WrapperPriceTextProduct>377.000d</WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
                <span>Giao đến: </span>
                <span className='address'>Q.7,P.Tân Quy,Hồ Chí Minh</span>
                <span className='change-address'> Đổi địa chỉ</span>
            </WrapperAddressProduct>
            <div style={{margin:'10px 0 20px',padding:'10px 0', borderedTop:'1px solid #e5e5e5', borderedBottom:'1px solid #e5e5e5'}}>
                <div style={{marginBottom:'10px'}}>Số lượng</div>
                <WrapperQualityProduct>
                    <button style={{border:'none', background:'transparent'}}>
                        <MinusOutlined style={{color:'#000', fontSize:'10px'}} size="10"/>
                    </button>
                    <WrapperInputNumber defaultValue={3} onChange={onChange} size="small" />
                    <button style={{border:'none', background:'transparent'}}>
                        <PlusOutlined style={{color:'#000', fontSize:'10px'}} size="10"/>
                    </button>
                </WrapperQualityProduct>
            </div>
            <div>
                <ButtonComponent
                    bordered={false}
                    size={40}
                    styleButton={{
                        background: 'rgb(255, 57, 69)',
                        height: '48px',
                        width: '300px',
                        border:'none',
                        borderRadius:'4px'
                    }}
                    textButton={'chọn mua'}
                    styleTextButton={{color:'#fff', fontSize:'15px', fontWeight:'700'}}>                
                </ButtonComponent>
            </div>
        </Col>
    </Row>
  )
}

export default ProductDetailsComponent;

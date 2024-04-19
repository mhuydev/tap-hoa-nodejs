import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logo-login.png'
import { Divider, Image } from 'antd'
const SignInPage = () => {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', background:'#ccc', height:'100vh'}}>
      <div style={{width:'800px', height:'450px', borderRadius:'6px', backgroundColor:'#fff', display:'flex'}}>
      <WrapperContainerLeft>
        <h1>Hello</h1>
        <p>Dang ki va dang nhap</p>
        <InputForm style={{marginBottom:'10px'}} placeoder="Ten dang nhap"/>
        <InputForm  placeoder="Mat khau " />
        <ButtonComponent
                    bordered={false}
                    size={40}
                    styleButton={{
                        background: 'rgb(255, 57, 69)',
                        height: '48px',
                        width: '100%',
                        border:'none',
                        borderRadius:'4px',
                        margin: '26px 0 10px'
                    }}
                    textButton={'Dang nhap'}
                    styleTextButton={{color:'#fff', fontSize:'15px', fontWeight:'700'}}>                
                </ButtonComponent>
                <WrapperTextLight>Tao tai khoan</WrapperTextLight>
      </WrapperContainerLeft>
      <WrapperContainerRight>
        <Image src={imageLogo} preview={false } alt="imageLogo" height={203} width={203} />
      </WrapperContainerRight>
    </div>
    </div>
    
  )
}

export default SignInPage
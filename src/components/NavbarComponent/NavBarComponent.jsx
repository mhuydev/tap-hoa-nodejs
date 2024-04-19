import React from "react";
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from "./style";
import { Checkbox, Rate } from "antd";

 const NavbarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type){
            case 'text':
                return options.map((option) => {
                    return (
                            <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
                case'checkbox':
                    return  (
                    <Checkbox.Group style={{width: '100%', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option) =>{
                            return (
                                <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.lable}</Checkbox>
                            )
                        })}
                  </Checkbox.Group>
                    )
                    case'star':
                        return options.map((option) =>{
                            console.log('check', option)
                            return (
                                <div style={{ dispaly: 'flex', gap:'4px' }}>
                                    <Rate style={{ fontSize: '12px' }} disable defaultValue={option} />
                                    <span>{`Tu ${option} sao`}</span>
                                </div>
                                
                            )
                        })
                    case'price':
                        return options.map((option) =>{
                            return (
                                <div style={{padding:'4px', color:'rgb(56,56,60)', borderRadius:'10px', backgroundColor:'rgb(240,240,240)', width:'fit-content'}}>{option}</div>
                            )
                        })
            default:
                return{}
        }
    }

    return (
        <div style={{backgroundColor: '#fff'}}>
            <WrapperLableText>Lable</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['TV', 'Tu lanh', 'Laptop'])}
            </WrapperContent>          
        </div>
    )
 }

 export default NavbarComponent
import React, { useState } from 'react'
import { WrapperInputStyle } from './style'
import { Input } from 'antd'

const InputForm = (props) => {
    const { placeholder = 'Nhập text', ...rests } = props
    const [valueInput, setValueInput] = useState('')
    return (
        <>
        <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests} >

        </WrapperInputStyle>
        </>
    )
}

export default InputForm
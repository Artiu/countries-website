import { useState } from 'react';
import styled from 'styled-components';
import loupe from './loupe.svg';

const Container = styled.div`
    width:100%;
    height:10vh;
    padding:0 50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Input = styled.input.attrs({
    placeholder:"Search for a country...",
    type:"text"
})`
    width:90%;
    height:100%;
    border-radius:0 10px 10px 0;
    background-color:${props=>props.theme.firstBgColor};
    color:${props=>props.theme.textColor};
    border:0;
    &::placeholder
    {
        color:${props=>props.theme.textColor};
    }
`
const InputContainer = styled.div`
    width:20%;
    height:50%;
    border-radius:10px;
    background-color:${props=>props.theme.firstBgColor};
    color:${props=>props.theme.textColor};
    display:flex;
    align-items:center;
`
const Image = styled.img`
    width:10%;
    height:1rem;
    margin-left:5px;
`
const Select = styled.select`
    height:60%;
    width:15%;
    border-radius:10px;
    padding:15px;
    background-color:${props=>props.theme.firstBgColor};
    color:${props=>props.theme.textColor};
`
const Option = styled.option`

`
export default function SearchBar(props)
{
    const [value,setValue] = useState('');
    const queryChanged = (value) =>{
        props.onChange(value);
        setValue(value);
    }
    return(
        <Container>
            <InputContainer>
                <Image src={loupe} alt="loupe"></Image>
                <Input value={value} onChange={(e) => queryChanged(e.target.value)}/>
            </InputContainer>
            <Select>
                <Option>Filter by Region</Option>
                <Option>Africa</Option>
                <Option>America</Option>
                <Option>Asia</Option>
                <Option>Europe</Option>
                <Option>Oceania</Option>
            </Select>
        </Container>
    )
}
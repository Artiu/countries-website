import { useState } from 'react';
import styled from 'styled-components';
import loupe from './loupe.svg';
import arrow from './arrow.svg';

const Container = styled.div`
    width:100%;
    height:15vh;
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
    width:400px;
    height:3rem;
    border-radius:10px;
    background-color:${props=>props.theme.firstBgColor};
    color:${props=>props.theme.textColor};
    display:flex;
    align-items:center;
    box-shadow: 2px 2px 20px 5px rgba(0,0,0,0.1);
`
const Image = styled.img`
    width:10%;
    height:1rem;
    margin-left:5px;
`
const Select = styled.select`
    height:3rem;
    width:200px;
    border:none;
    border-radius:10px;
    padding-left:20px;
    color:${props=>props.theme.textColor};
    box-shadow: 2px 2px 20px 5px rgba(0,0,0,0.1);
    appearance:none;
    background:url(${arrow});
    background-repeat:no-repeat;
    background-size:5%;
    background-position:96% 50%;
    background-color:${props=>props.theme.firstBgColor};
`
const Option = styled.option`
`

export default function SearchBar(props)
{
    const [query,setQuery] = useState(props.firstQuery||'');
    const [option,setOption] = useState(props.firstOption||'');
    const filterChanged = (value,type) =>{
        if(type === "query")
        {
            setQuery(value);
            props.onChange(value,option);
        }
        if(type === "option")
        {
            setOption(value);
            props.onChange(query,value);
        }
    }
    return(
        <Container>
            <InputContainer>
                <Image src={loupe} alt="loupe"></Image>
                <Input value={query} onChange={(e) => filterChanged(e.target.value,"query")}/>
            </InputContainer>
            <Select value={option} onChange={(e)=> filterChanged(e.target.value,"option")}>
                <Option value="">Filter by Region</Option>
                <Option value="Africa">Africa</Option>
                <Option value="Americas">America</Option>
                <Option value="Asia">Asia</Option>
                <Option value="Europe">Europe</Option>
                <Option value="Oceania">Oceania</Option>
            </Select>
        </Container>
    )
}
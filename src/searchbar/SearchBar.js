import { useState } from 'react';
import styled from 'styled-components';
import arrow from './arrow.svg';

const Container = styled.div`
    width:100%;
    height:15vh;
    padding:0 50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (max-width:500px)
    {
        padding:0 10px;
    }
    @media (max-width:400px)
    {
        flex-direction:column;
        justify-content:space-around;
        height:20vh;
    }
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
    @media (max-width:400px)
    {
        width:300px;
    }
`
const Image = styled.svg`
    width:10%;
    height:1rem;
    margin-left:5px;
    fill:${props=>props.theme.textColor};
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
                <Image version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.005 512.005">
                <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
                S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
                c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
                M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/>
                </Image>
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
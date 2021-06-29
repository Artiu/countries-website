import { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "../country/Country";
import SearchBar from '../searchbar/SearchBar';

const Main = styled.div`
    min-height:90vh;
    width:100%;
    background-color:${props=>props.theme.secondBgColor};
`
const CountryContainer = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
`
export default function Content()
{
    const [countries, setCountries] = useState();
    const [isLoaded, setStatus] = useState(false);
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then((response)=>response.json())
        .then((res)=>{
            setCountries(res);
            setStatus(true);
        })
    },[]);
    if(isLoaded)
    {
        return(
            <Main>
                <SearchBar/>
                <CountryContainer>
                    {countries.map((item)=>(
                        <Country key={item.name} data={item}/>
                    ))}
                </CountryContainer>
            </Main>
        )
    }
    else
    {
        return (
            <Main>
                <h1>Ładowanie.....</h1>
            </Main>
        )
    }
}
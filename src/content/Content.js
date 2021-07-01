import { useEffect, useState } from "react";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Country from "../country/Country";
import SearchBar from '../searchbar/SearchBar';
import CountryDetails from "../country/CountryDetails";

const CountryContainer = styled.div`
    width:95%;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`
const StyledLink = styled(Link)`
    width:fit-content;
    margin-left:1%;
    margin-right:1%;
`
export function Countries(props)
{
    const [countriesToShow, setToShow] = useState(props.countries);
    const changeQuery = (query,option) =>
    {
        if(option)
        {
            setToShow(props.countries.filter((el)=> el.name.toLowerCase().startsWith(query.toLowerCase()) && el.region === option));
            props.setOption(option);
        }
        else
        {
            setToShow(props.countries.filter((el)=> el.name.toLowerCase().startsWith(query.toLowerCase())));
            props.setQuery(query);
            props.setOption(option);
        }
    }
    useEffect(()=>{
        if(props.optionValue)
        {
            setToShow(props.countries.filter((el)=> el.name.toLowerCase().startsWith(props.queryValue.toLowerCase()) && el.region === props.optionValue));
        }
        else
        {
            setToShow(props.countries.filter((el)=> el.name.toLowerCase().startsWith(props.queryValue.toLowerCase())));
        }
    },[props.countries,props.optionValue,props.queryValue])
    return(
    <>
        <SearchBar onChange={changeQuery} firstQuery={props.queryValue} firstOption={props.optionValue}/>
        <CountryContainer>
            {countriesToShow.map((item)=>(
            <StyledLink to={"country/"+item.name} key={item.name}>
            <Country data={item}/>
            </StyledLink>
            ))}
        </CountryContainer>
    </>
    )
}
export default function Content()
{
    const [allCountries, setCountries] = useState();
    const [isLoaded, setStatus] = useState(false);
    let queryValue = '';
    let optionValue = '';
    const setQueryValue = (value) =>
    {
        queryValue = value;
    }
    const setOptionValue = (value) =>
    {
        optionValue = value;
    }
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
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="" component={()=><Countries countries={allCountries} queryValue={queryValue} setQuery = {setQueryValue} optionValue = {optionValue} setOption = {setOptionValue}/>}/>
                    <Route path="country/:name" component={()=><CountryDetails countries={allCountries}/>} />
                </Switch>
            </Router>
        )
    }
    else
    {
        return (
            <>
                <h1>Loading.....</h1>
            </>
        )
    }
}
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Country from "../country/Country";
import SearchBar from '../searchbar/SearchBar';
import CountryDetails from "../country/CountryDetails";

const CountryContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
`
export function Countries(props)
{
    const [countriesToShow, setToShow] = useState(props.countries);
    const changeQuery = (query,option) =>
    {
        if(option) setToShow(props.countries.filter((el)=> el.name.toLowerCase().startsWith(query.toLowerCase()) && el.region === option));
        else setToShow(props.countries.filter((el)=> el.name.toLowerCase().startsWith(query.toLowerCase())))
    }
    return(
    <>
        <SearchBar onChange={changeQuery} />
        <CountryContainer>
            {countriesToShow.map((item)=>(
            <Link to={{
                pathname:"/country/"+item.name,
                    data: {item}
                }} key={item.name}>
            <Country data={item}/>
            </Link>
            ))}
        </CountryContainer>
    </>
    )
}
export default function Content()
{
    const [allCountries, setCountries] = useState();
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
            <Router>
                <Switch>
                    <Route exact path="/" component={()=><Countries countries={allCountries}/>}/>
                    <Route path="/country/:name" component={()=><CountryDetails countries={allCountries}/>} />
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
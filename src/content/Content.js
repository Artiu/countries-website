import { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Country from "../country/Country";
import SearchBar from '../searchbar/SearchBar';
import CountryDetails from "../country/CountryDetails";

const CountryContainer = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
`
export function Countries(props)
{
    return(
    <>
        <SearchBar onChange={props.onChange} />
        <CountryContainer>
            {props.countries.map((item)=>(
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
    const [countriesToShow, setToShow] = useState('');
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then((response)=>response.json())
        .then((res)=>{
            setCountries(res);
            setToShow(res);
            setStatus(true);
        })
    },[]);
    const changeQuery = (value) =>
    {
        setToShow(allCountries.filter((el)=> el.name.toLowerCase().startsWith(value) === true))
    }
    if(isLoaded)
    {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={()=><Countries countries={countriesToShow} onChange={changeQuery}/>}/>
                    <Route path="/country/:name" component={CountryDetails} />
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
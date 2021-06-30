import styled from "styled-components";

const CountryDiv = styled.div`
    width:300px;
    height:350px;
    margin-top:5vh;
    background-color:${props=>props.theme.firstBgColor};
    color:${props=>props.theme.textColor}; 
    box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.26);
`
const Flag = styled.img`
    width:100%;
    height:50%;
`
const Name = styled.p`
    font-size:1.2rem;
    padding:10px 20px;
    font-weight:bold;
`
const Header = styled.p`
    font-weight:bold;
    margin-left:20px;
`
const Text = styled.span`
    font-weight:100;
    font-size:1rem;
`
export default function Country(props)
{
    return(
        <CountryDiv>
            <Flag src={props.data.flag} alt="flag"/>
            <Name>{props.data.name}</Name>
            <Header>Population: <Text>{props.data.population}</Text></Header>
            <Header>Region: <Text>{props.data.region}</Text></Header>
            <Header>Capital: <Text>{props.data.capital}</Text></Header>
        </CountryDiv>
    )
}
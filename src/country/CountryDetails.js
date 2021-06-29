import { Link,useLocation } from "react-router-dom";
import styled from "styled-components";
import arrow from "./arrow.svg";

const Container = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-top:3%;
`
const StyledLink = styled(Link)`
    color:white;
    display:flex;
    align-items:center;
    padding:10px 30px;
    background-color:${props=>props.theme.firstBgColor};
    width:fit-content;
    margin:3% 0 0 10%;
`
const Flag = styled.img`
    width:30%;
    float:left;
`
const InfoContainer = styled.div`
    width:30%;
    color:${props=>props.theme.textColor}
`
const Name = styled.p`
    font-size:2rem;
    font-weight:bold;
    margin-bottom:2rem;
`
const SmallImage = styled.img`
    width:1rem;
    height:1rem;
    margin-right:10px;
`
const Data = styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
`
const Left = styled.div `

`
const Right = styled.div`

`
const Header = styled.p`
    line-height:2;
`
const Text = styled.span`
    font-weight:100;
    font-size:1rem;
`
const BorderCountries = styled.div`
    margin-top:10%;
    display:grid;
    grid-template-columns:1fr 25% 25% 25%;
    grid-auto-rows:40px;
`
const Country = styled(Link)`
    display:block;
    color:white;
    background-color:${props=>props.theme.firstBgColor};
    width:100px;
    height:30px;
    text-align:center;
    margin-left:20px;
    display:flex;
    align-items:center;
    justify-content:center;
`

export default function CountryDetails()
{
    let location = useLocation();
    let item = location.data.item;
    return(
        <>
            <StyledLink to="/"><SmallImage src={arrow}/>Back</StyledLink>
            <Container>
                <Flag src={item.flag} alt="flag"/>
                <InfoContainer>
                    <Name>{item.name}</Name>
                    <Data>
                        <Left>
                            <Header>Native Name: <Text>{item.nativeName}</Text></Header>
                            <Header>Population: <Text>{item.population}</Text></Header>
                            <Header>Region: <Text>{item.region}</Text></Header>
                            <Header>Sub Region: <Text>{item.subregion}</Text></Header>
                            <Header>Capital: <Text>{item.capital}</Text></Header>
                        </Left>
                        <Right>
                            <Header>Top Level Domain: <Text>{item.topLevelDomain}</Text></Header>
                            <Header>Currencies: <Text>{item.currencies.map((el)=>el.name).join(', ')}</Text></Header>
                            <Header>Languages: <Text>{item.languages.map((el)=>el.name).join(', ')}</Text></Header>
                        </Right>
                    </Data>
                    <BorderCountries>
                        <Header>Border Countries:</Header>{item.borders.map((el)=>{
                            return (
                                <Country to={"/country/"+item.name} key={item.name}>{el}</Country>
                            )
                        })}
                    </BorderCountries>
                </InfoContainer>
            </Container>
        </>
    )
}
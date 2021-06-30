import { Link,useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:fit-content;
    margin-top:3%;
    @media (max-width:900px)
    {
        flex-direction:column;
    }
`
const StyledLink = styled(Link)`
    color:${props=>props.theme.textColor};
    display:flex;
    align-items:center;
    padding:10px 30px;
    background-color:${props=>props.theme.firstBgColor};
    width:fit-content;
    margin:3% 0 0 10%;
    box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.26);
    border-radius:3px;
`
const Flag = styled.img`
    width:30%;
    @media (max-width:900px)
    {
        margin-top:5%;
        width:60%;
    }
`
const InfoContainer = styled.div`
    width:40%;
    color:${props=>props.theme.textColor};
    @media (max-width:900px)
    {
        width:90%;
    }
`
const Name = styled.p`
    font-size:2rem;
    font-weight:bold;
    margin-bottom:2rem;
    margin-left:20px;
    @media (max-width:900px)
    {
        margin-top:2rem;
    }
`
const SmallImage = styled.svg`
    width:1rem;
    height:1rem;
    margin-right:10px;
    fill:${props=>props.theme.textColor};
`
const Data = styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
    margin-left:20px;
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
    margin-top:5%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
`
const Country = styled(Link)`
    color:${props=>props.theme.textColor};
    background-color:${props=>props.theme.firstBgColor};
    width:150px;
    height:3rem;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.1);
    border-radius:3px;
    margin-top:1rem;
    margin-left:20px;
`
const FlexHeader = styled(Header)`
    width:150px;
    height:3rem;
    margin-top:1rem;
    margin-left:20px;
    display:flex;
    align-items:center;
    justify-content:center;
`

export default function CountryDetails(props)
{
    let {name} = useParams();
    let item = props.countries.find((el)=>el.name===name);
    return(
        <>
            <StyledLink to="/">
                <SmallImage version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                <g>
	                <g>
		                <path d="M492,236H68.442l70.164-69.824c7.829-7.792,7.859-20.455,0.067-28.284c-7.792-7.83-20.456-7.859-28.285-0.068 l-104.504,104c-0.007,0.006-0.012,0.013-0.018,0.019c-7.809,7.792-7.834,20.496-0.002,28.314c0.007,0.006,0.012,0.013,0.018,0.019
			            l104.504,104c7.828,7.79,20.492,7.763,28.285-0.068c7.792-7.829,7.762-20.492-0.067-28.284L68.442,276H492
			            c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
	                </g>
                </g>
                </SmallImage>Back</StyledLink>
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
                        <FlexHeader>Border Countries:</FlexHeader>
                        {item.borders.map((el)=>{
                                const object = props.countries.find((item)=>item.alpha3Code===el);
                                return (
                                    <Country to={"/country/"+object.name} key={object.name}>{object.name}</Country>
                                )
                        })}
                    </BorderCountries>
                </InfoContainer>
            </Container>
        </>
    )
}
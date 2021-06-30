import styled from 'styled-components';
import moon from './moon.svg';
import sun from './sun.svg';

const Nav = styled.div`
    position:sticky;
    width:100%;
    height:10vh;
    padding:0 50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:${props=>props.theme.firstBgColor};
    color:${props=>props.theme.textColor};
    box-shadow: 2px 2px 20px 5px rgba(0,0,0,0.1);
    @media (max-width:500px)
    {
        padding:0 10px;
    }
`
const Title = styled.p`
    font-size:1.5rem;
    font-weight:bold;
`
const Mode = styled.button`
    position:relative;
    background-color:transparent;
    border:0;
    font-size:1rem;
    cursor:pointer;
    color:${props=>props.theme.textColor};
    `
const Image = styled.img`
    width:1rem;
    height:1rem;
    position:absolute;
    top:0.25rem;
    left:-1.5rem;
`

export default function Navbar(props)
{
    return(
        <Nav>
            <Title>Where in the world?</Title>
            <Mode onClick={()=>{props.changeTheme()}}><Image src={props.theme ? moon : sun}/>{props.theme ? "Dark theme":"Light theme"}</Mode>
        </Nav>
    )
}
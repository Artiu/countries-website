import styled from 'styled-components';
import moon from './moon.svg';

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
    &::before
    {
        content:"";
        background:url(${moon});
        width:1rem;
        height:1rem;
        position:absolute;
        top:0.25rem;
        left:-1.5rem;
    }
    `

export default function Navbar()
{
    return(
        <Nav>
            <Title>Where in the world?</Title>
            <Mode>Dark mode</Mode>
        </Nav>
    )
}
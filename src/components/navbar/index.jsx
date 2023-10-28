import styled from "styled-components"
import MenuItem from "./menuitem"

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 2em;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(206,161,71,1) 100%);
    img {
        max-width: 300px;
    }    
    @media (max-width: 1050px) {
        justify-content: center
    }
`
const StyledMenu = styled.ul`
    font-family: 'Young Serif', serif;
    display: flex;
    * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
    }
    li {
    display: inline-block;
    list-style: outside none none;
    margin: 0 1em;
    padding: 0;
    font-size: 30px;
    }
    a {
    padding: 0.5em 0.8em;
    margin: 0.2em 0;
    display: block;
    color: rgba(255, 255, 255, 0.5);
    position: relative;
    text-decoration: none;
    }
    a:before,
    a:after {
    height: 14px;
    width: 14px;
    position: absolute;
    content: '';
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
    opacity: 0;
    }
    a:before {
    left: 0;
    top: 0;
    border-left: 5px solid #ffffff;
    border-top: 5px solid #ffffff;
    -webkit-transform: translate(100%, 50%);
    transform: translate(100%, 50%);
    }
    a:after {
    right: 0;
    bottom: 0;
    border-right: 5px solid #ffffff;
    border-bottom: 5px solid #ffffff;
    -webkit-transform: translate(-100%, -50%);
    transform: translate(-100%, -50%);
    }
    a:hover,
    .current a {
    color: #ffffff;
    }
    a:hover:before,
    .current a:before,
    a:hover:after,
    .current a:after {
    -webkit-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
    opacity: 1;
    }
    @media (max-width: 1050px) {
        display: none;
    }
`

const Navbar = () => {
    return(
    <StyledHeader>
        <img src="./public/logo-pedro-vitor.png" alt="Logo Pedro Vitor" />
        <StyledMenu>
            <MenuItem name={'Sobre Mim'} link={'#aboutme'}/>
            <MenuItem name={'Galeria'} link={'#gallery'}/>
            <MenuItem name={'Contato'} link={'#contact'}/>
        </StyledMenu>
    </StyledHeader>

    )
}

export default Navbar
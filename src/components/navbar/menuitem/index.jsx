import styled from "styled-components"

const StyledItem = styled.a`
    list-style: none;
    text-decoration: none;
    li{
        font-family: 'Young Serif', serif;
        color: #000000;
        font-size: 24px;


    }

`
const MenuItem = ({ name, link }) => {
    return(
        <StyledItem href={link}>
            <li>{name}</li>
        </StyledItem>
    )
}

export default MenuItem 
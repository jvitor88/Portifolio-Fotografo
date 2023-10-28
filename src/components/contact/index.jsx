import styled from "styled-components"
import Title from "../title"
import ContactCard from "./contactcard"

const StyledContact = styled.div`
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(206,161,71,1) 100%);
    padding: 2em;
`
const ContactInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 150px;
    @media (max-width: 630px) {
        gap: 40px;
    }
`
const ScrollToTop = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 200px;
    border: none;
    font-size: 30px;
    font-weight: 800;
    color: #ffffff;
    background-color: #0000007a;
    cursor: pointer;
`
const Development = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    font-style: italic;
    color: #000000;
    span{
        margin-right: 15px;
    }
    a{
        font-weight: 800;
        text-decoration: none;
        color: #000000;
        &:hover{
            text-decoration: underline;
        }
    }
`

const Contact = ({ contacts = [] }) => {
    return(
            <StyledContact id="contact">
                <Title>Contato</Title>
                <ContactInfo>
                    {contacts.map(contact => <ContactCard
                    key={contact.id} 
                    contact={contact}/>)}
                </ContactInfo>
                <ScrollToTop onClick={() => window.scrollTo(0,0)}>↑</ScrollToTop>
                <Development>
                    <span>
                        Projeto desenvolvido por
                        <a href="https://github.com/jvitor88" target="_blank"> José Vitor Silveira </a>
                    </span>
                    
                </Development>
            </StyledContact>

    )
}

export default Contact
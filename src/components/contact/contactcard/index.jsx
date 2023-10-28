import styled from "styled-components"

const StyledCard = styled.a`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #000000;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    img{
        width: 50px;
        margin-right: 10px;
    }
    h3{
        letter-spacing: .2rem;
    }
    p{
        font-size: 20px;
        letter-spacing: .1rem;
    }
`
const CardContainer = styled.div`
    &:hover{
        transform: scale(1.1)
    }
`

const ContactCard = ({ contact }) => {
    return(
            <CardContainer>
                <StyledCard href={contact.adress} target="_blank">
                    <img src={contact.icon} alt=""/>
                    <h3>{contact.titulo}</h3>
                    <p>{contact.info}</p>
                </StyledCard>
            </CardContainer>
    )
}

export default ContactCard
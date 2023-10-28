import styled from "styled-components"

const Figure = styled.figure `
    width: ${props => props.$expanded ? '90%' : '550px'};
    max-width: 100%;
    border-radius: 20px 20px 0px 0px;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
        cursor: pointer;
    }
    figcaption {
        display: flex;
        justify-content: space-between;
        color: #000000;
        background-color: #cea147;
        border-radius: 0px 0px 20px 20px;
        margin-top: -5px;
        padding: 10px;
        cursor: pointer;
    }
    button{
        font-size: 28px;
        color: #000000;
        background-color: #cea147;
        border: none;
        cursor: pointer;
    }
`
const Description = styled.div `
    background-color: #cea147;
    letter-spacing: .1rem;
`


const CardPhoto = ({ photo, expanded = false, whenZoomRequest }) => {
    return (
            <Figure 
                $expanded={expanded} 
                id={`foto-${photo.id}`} 
                onClick={() => {
                    if(window.outerWidth < 900) return;
                    whenZoomRequest(photo)
                    window.scrollTo(0,1900)
                }}>
                <img src={photo.path} alt={photo.titulo}/>
                <figcaption>
                    <Description>
                        <h3>{photo.titulo}</h3>
                        <p>Fonte: {photo.fonte}</p>
                    </Description>
                </figcaption>
            </Figure>
        )}

export default CardPhoto


// {!expanded && <button onClick={() => {
//     whenZoomRequest(photo) 
//     window.scrollTo(0,1500)}}>⤢</button>}
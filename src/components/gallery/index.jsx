import styled from "styled-components"
import Title from "../title"
import CardPhoto from "./CardPhoto"

const ContainerGallery = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    @media (max-width: 630px) {
        padding: 0px;
    }
`
const RenderPhoto = styled.div `
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    padding: 20px;
    @media (max-width: 630px) {
        width: 310px;
        padding: 10px;
    }
`

const Gallery = ({ photos = [], whenSelectedPhoto }) => {
    return(
        <>
            <ContainerGallery id="gallery">
                    <Title>Trabalhos Recentes</Title>
                    <RenderPhoto>
                        {photos.map(photo => <CardPhoto
                        whenZoomRequest={whenSelectedPhoto}
                        key={photo.id} 
                        photo={photo}/>)}
                    </RenderPhoto>
            </ContainerGallery>
        </>
    )

}

export default Gallery
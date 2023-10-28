import styled from "styled-components"
import Title from "../title"
import Tags from "./tags"


const AboutContainer = styled.div`
    background: linear-gradient(180deg, rgba(255,255,255,1) 6%, rgba(206,161,71,1) 50%, rgba(255,255,255,1) 99%);
    padding: 2em;
`
const SyledMe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    img{
        width: 400px;
        border-radius: 300px;
    }
    p{
        width: 600px;
        font-size: 22px;
        text-align: justify;
    }
    @media (max-width: 880px) {
        flex-direction: column;
        text-align: justify;
    }
    @media (max-width: 880px) {
        img{
            width: 340px;
        }
        p{
            width: 340px;
            text-align: center;
        }
    }
`

const AboutMe = () => {
    return(
        <>
            <AboutContainer id="aboutme">
                <Title>Sobre Mim</Title>
                <SyledMe>
                    <img src="./me.jpg" alt="Foto de Pedro Vitor" />
                    <p>
                        Meu nome é Pedro Vitor, e me interessei inicialmente pela fotografia como um hobby, mas, com o tempo, minha paixão por essa arte se desenvolveu em uma profissão concreta.<br/>
                        <br/>Ao longo desse percurso, acumulei valiosa experiência, inicialmente fazendo trabalhos gratuitos para ganhar experiência e compreendendo a importância de ouvir atentamente os desejos dos meus clientes para oferecer o meu melhor trabalho.<br/>
                        <br/>Muitos acontecimentos marcaram esses anos, mas todos os dias representam uma oportunidade de aprendizado, uma chance contínua de aprimoramento para entregar resultados de alta qualidade.
                    </p>
                </SyledMe>
            </AboutContainer>
            <Tags/>
        </>
    )
}

export default AboutMe
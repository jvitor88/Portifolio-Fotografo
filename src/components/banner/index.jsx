import styled from "styled-components"

const BannerStyled = styled.figure`
    background-image: url(./src/midia/banner-home.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: end;
    align-items: center;
    min-height: 500px;
    border-radius: 20px;
    max-width: 100%;
    margin: 2em;
    @media (max-width: 500px) {
        background-image: url(./src/midia/banner-home-mobile.jpg);
    }
`
const TitleStyled = styled.h2`
    font-family: 'Young Serif', serif;
    font-size: 46px;
    font-style: italic;
    line-height: 60px;
    color: #000000;
    max-width: 800px;
    padding: 0 64px;
    @media (max-width: 1300px) {
        font-size: 30px;
        max-width: 700px;
    }
    @media (max-width: 1200px) {
        font-size: 26px;
        max-width: 500px;
    }
    @media (max-width: 1000px) {
        display: none;
    }
`
const Banner = () => {
    return (
        <BannerStyled>
            <TitleStyled>Eternizando momentos em cliques e contando histórias através de álbuns!</TitleStyled>
        </BannerStyled>
    )
}

export default Banner
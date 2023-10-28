import styled from 'styled-components'
import tags from './tags.json'

const TagStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    padding: 2em;
    h3{
        font-family: 'Young Serif', serif;
        font-weight: 600;
        font-size: 30px;
        margin-right: 30px;
        text-align: center;
    }
    p{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-family: 'Young Serif', serif;
    font-size: 24px;
    font-weight: 600;
    padding: 5px;
    border: none;
    border-radius: 10px;
    width: 200px;
    color: #000000;
        img{
            width: 50px;
        }
    }
`

const Tags = () => {
    return (
        <TagStyled>
            <h3>Trabalhamos com:</h3>
            {tags.map(tag => <p key={tag.id}><img src={tag.icon} alt={tag.titulo}/>{tag.titulo}</p>)}
        </TagStyled>
    )

}

export default Tags



import styled from "styled-components"
import CardPhoto from "../gallery/CardPhoto"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const StyledDialog = styled.dialog`
    position: absolute;
    top: 2000px;
    left: 24em;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    @media (max-width: 1600px) {
        width: 1000px;
        left: 16em;
    }
    @media (max-width: 1300px) {
        width: 1000px;
        left: 10em;
    }
    @media (max-width: 1200px) {
        width: 900px;
        left: 8em;
    }
    @media (max-width: 1000px) {
        width: 800px;
        left: 6em;
    }
    form {
        button {
            position: relative;
            top: 20px;
            right: 40px;
            font-size: 22px;
            background-color: rgba(0, 0, 0, 0.8);
            color: #ffffff;
            border-radius: 10px;
            padding: 8px;
            border: 0;
            cursor: pointer;
        }
    }
`


const ModalZoom = ({ photo, onClose }) => {
    return(
        <>
            {photo && <> 
            <Overlay/>
            <StyledDialog open={!!photo} onClose={onClose}>
                <CardPhoto photo={photo} expanded={true}/>
                <form method="dialog">
                    <button formMethod="dialog">X</button>
                </form>
            </StyledDialog>
            </>}
        </>
    )
}

export default ModalZoom
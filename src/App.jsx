import { useState } from "react";

import styled from "styled-components";
import GlobalStyles from "./components/globalstyles";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import AboutMe from "./components/aboutme";
import Gallery from "./components/gallery";
import Contact from "./components/contact"
import ModalZoom from "./components/modalzoom";

import photos from './fotos.json'
import contacts from './contacts.json'


const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 100vw;
`

function App() {

  const GalleryPhotos = photos
  const MyContacts = contacts
  const [SelectedPhoto, setSelectedPhoto ] = useState(null)

  return (
    <>
      <GlobalStyles/>
      <AppContainer>
        <Navbar/>
        <Banner/>
        <AboutMe/>
        <Gallery 
        photos={GalleryPhotos}
        whenSelectedPhoto={photo => setSelectedPhoto(photo)} 
        />
        <Contact 
        contacts={MyContacts}
        />
      </AppContainer>
      <ModalZoom 
        photo={SelectedPhoto} 
        onClose={() => setSelectedPhoto(null)}
        />
    </>
  )
}

export default App

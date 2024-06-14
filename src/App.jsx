import { useState } from 'react'
import selectedState from "./atoms"
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import HeroSection from "./components/HeroSection.jsx"
import WhatWeDo from "./components/WhatWeDo/WhatWeDo.jsx"
import OurClients from "./components/OurClients.jsx"
import Projects from "./components/Project/Projects.jsx"
import Reviews from "./components/Review/Reviews.jsx"
import Aboutus from "./components/Aboutus.jsx"
import PopUp from "./components/PopUp.jsx"

function App() {
  
  return (
    <RecoilRoot>
      <HeroSection/>
      <OurClients/>
      <WhatWeDo/>
      <Projects/>
      <Reviews/>
      <Aboutus/>
    </RecoilRoot>
  )
}

export default App

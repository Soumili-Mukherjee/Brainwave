// import ButtonGradient from "./assets/svg/ButtonGradient";

// import Button from "./Components/Button";

// const App = () => {
//   return (
//     <>
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//         <Button className="mt-10" href="#login">
//           Login
//         </Button>
//       </div>
//       <ButtonGradient />
//     </>
//   );
// };

// // export default App;

import React from 'react'
import Button from "./Components/Button"
import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Benefit from './Components/Benefit'
import Collaboration from './Components/Collaboration'
import Services from './Components/Services'
import Pricing from './Components/Pricing'
import Roadmap from './Components/Roadmap'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Benefit/>
        <Collaboration/>
        <Services/>
        <Pricing/>
        <Roadmap/>
        <Footer/>
         
      </div>
      <ButtonGradient />
      
    </>
  )
}

export default App
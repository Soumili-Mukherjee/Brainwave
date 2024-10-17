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

function App() {
  return (
    <>
      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
         
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
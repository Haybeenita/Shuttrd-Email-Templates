import React from "react";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import VerifyEmail from "./Components/VerifyEmail";


const App = () => {
  return (
    <div className="bg-[#6B7280] h-screen flex items-center">

    <div className="bg-white w-full max-w-[37.5rem] flex flex-col justify-center mx-auto">
      <Header/>
      <VerifyEmail/>
      <Footer/>
    </div>
    </div>
  );
};

export default App;

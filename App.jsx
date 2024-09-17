import { useState } from "react";
import Header from "./Header";
import Educational from "./Education";
import Skill from "./skill";
import Projectss from "./Pro";
import Award from "./award";
import About from "./about";
import Sum from "./sum";
function App() {
  return (
    <>
      <Header />
      <Educational />
      <Skill/>
      <Projectss/>
      <Award/>
      <About/> 
    </>
  );
}

export default App;

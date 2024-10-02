/* eslint-disable react/jsx-no-undef */
import DemoWebsite from "./components/DemoWebsite";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Subscribe from "./components/Subscribe";
import TestNow from "./components/TestNow";

function App() {

  return (
    <div className="max-w-8xl mx-auto">
      <Navbar></Navbar>
      <Section></Section>
      <Description></Description>
      <DemoWebsite></DemoWebsite>
      <TestNow></TestNow>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App

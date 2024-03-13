import Future from "./Future";
import Campain from "./components/Campain";
import Community from "./components/Community";
import Footer from "./components/Footer";
import FundRaiser from "./components/FundRaiser";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Hunger } from "./components/Hunger";
import Volunteer from "./components/Volunteer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="mt-10">
        <FundRaiser />
      </div>
      <div className="mt-16">
        <Hunger />
      </div>
      <div className="mt-16">
        <Future />
      </div>
      <div className="md:mt-16 mt-[500px]">
        <Volunteer />
      </div>
      <div className="md:mt-10 mt-[500px]">
        <Community />
      </div>
      <div className="md:mt-10 mt-[500px]">
        <Campain />
      </div>
      <div className="md:mt-10 mt-[500px]">
        <Footer />
      </div>

    </>
  )
}
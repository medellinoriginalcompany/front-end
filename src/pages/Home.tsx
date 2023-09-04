import Header from "../components/Header";
import Hero from "../components/home/Hero";
import Releases from "../components/home/Releases/Releases";
import { Tshirts } from "../components/home/Tshirts/Tshirts";

const Home = () => {
  return (
    <>
      <Header />

      <Hero />
      <Releases />
      <Tshirts />
    </>
  )
}

export default Home
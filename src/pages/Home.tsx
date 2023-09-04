import Header from "../components/Header";
import Hero from "../components/home/Hero";
import Releases from "../components/home/Releases/Releases";
import Sweatshirts from "../components/home/Sweatshirts/Sweatshirts";
import { Tshirts } from "../components/home/Tshirts/Tshirts";

const Home = () => {
  return (
    <>
      <Header />

      <Hero />
      <Releases />
      <Tshirts />
      <Sweatshirts />
    </>
  )
}

export default Home
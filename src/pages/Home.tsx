import DefaultPage from "../components/home/DefaultPage";
import Hero from "../components/home/Hero";
import Releases from "../components/home/Releases/Releases";

const Home = () => {
  return (
    <DefaultPage>
      <Hero />
      <Releases />
    </DefaultPage>
  )
}

export default Home
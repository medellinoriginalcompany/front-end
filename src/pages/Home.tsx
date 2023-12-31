import DefaultPage from "../components/DefaultPage";
import Hero from "../components/home/Hero";
import Offers from "../components/home/Offers";
import PreFooter from "../components/home/PreFooter";
import Releases from "../components/home/Releases";

const Home = () => {
  return (
    <DefaultPage>
      <Hero />
      <Releases />
      <div className="max-w-5xl mx-auto"><hr className="border-neutral-400"/></div>
      <Offers />
      <PreFooter />
    </DefaultPage>
  )
}

export default Home
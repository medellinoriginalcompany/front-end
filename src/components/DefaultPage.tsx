import Footer from "./Footer"
import Header from "./Header"

type Props = {
  children: React.ReactNode,
}

const DefaultPage = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultPage
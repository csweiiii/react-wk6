import Header from '../components/Header'
import Footer from '../components/Footer'
import Productlist from '../components/Productlist'
function Home() {

  return (
    <div className="container mx-auto main-layout">
      <Header 
        title="Book Store"
        slogan=""
      />
      <Productlist/>
      <Footer/> 
    </div>
  )
}

export default Home
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

function App() {
 return (
    <>
      <Header />
      <Banner />
      <main className="gallery">
      <ProductList/>
        </main>
      <Footer />
    </>
  )
}

export default App

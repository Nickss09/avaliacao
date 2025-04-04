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
      <ProductList
        produto='Bolsa - Pochette Métis'
        descricao='R$ 18.300,00'
        link='https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bolsa-pochette-metis--M13481_PM2_Front%20view.png?wid=490&hei=490'
      />
      <ProductList
        produto='Bolsa - Neverfull MM'
        descricao='R$ 16.300,00'
        link='https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bolsa-neverfull-mm--M13758_PM2_Front%20view.png?wid=490&hei=490'
      />
      <ProductList
        produto='Bolsa - Pochette Félicie'
        descricao='R$ 10.400,00'
        link='https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bolsa-pochette-felicie--M82608_PM2_Front%20view.png?wid=2400&hei=2400'
      />
      <ProductList
        produto='Bolsa - OnTheGo MM'
        descricao='R$ 30.000,00'
        link='https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-x-tm-bolsa-onthego-mm--M13079_PM2_Front%20view.png?wid=490&hei=490'
      />
      <ProductList
        produto='Bolsa - Pochette Liv'
        descricao='R$ 15.300,00'
        link='https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bolsa-pochette-liv--M14159_PM2_Front%20view.png?wid=1090&hei=1090'
      />
        </main>
      <Footer />
    </>
  )
}

export default App

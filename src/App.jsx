import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

// import { products } from "./data/nails"


function App() {

  return (
    <div>
      <Header></Header>
      <div>
        hello wolrd
        <Home />
      </div>
      {/* <div>
        Teste data 
         <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price} €</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
        <div>

        </div>
      </div> */}
      <Footer></Footer>
    </div>
  )
}

export default App

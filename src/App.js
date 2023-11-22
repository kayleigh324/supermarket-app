import './App.css';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Basket from './Components/Basket/Basket';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductDetail />
      <ProductList />         
    </div>
  );
}

export default App;

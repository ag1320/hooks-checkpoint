import './App.css';
import { useEffect, useState } from 'react'
import ProductList from './components/ProductList.js';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://52.26.193.201:3000/products/list');
      const result = await response.json();
      setProducts(result);
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <ProductList products={products}/>
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react'
import ProductList from './components/ProductList.js';

function App() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(null)
  const [details, setDetails] = useState({})
  const [pic, setPic] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://52.26.193.201:3000/products/list');
      const result = await response.json();
      setProducts(result);
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let url = `http://52.26.193.201:3000/products/${id}`
      let response = await fetch(url);
      let result = await response.json();
      setDetails(result);

      url = `http://52.26.193.201:3000/products/${id}/styles`
      response = await fetch(url);
      result = await response.json();
      setPic(result);
    };
    
    fetchData();
  }, [id]);

  function handleClick (e) {
    e.preventDefault();
    setId(parseInt(e.target.dataset.key) + 1);
  }

  return (
    <div onClick ={handleClick}>
      <ProductList products={products} details={details} pic={pic}/>
    </div>
  );
}

export default App;

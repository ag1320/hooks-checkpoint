import './App.css';
import { useEffect, useState } from 'react'
import ProductList from './components/ProductList.js';

function App() {
  //define states
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(null)
  const [details, setDetails] = useState({})
  const [pic, setPic] = useState('')
  const [collapseFlag, setCollapseFlag] = useState(1);

  //componentDidMount API call
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://52.26.193.201:3000/products/list');
      const result = await response.json();
      setProducts(result);
    };
    
    fetchData();
  }, []);

  //get product data and image if new click
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
    if (collapseFlag === 0){
      fetchData()
    }
  }, [id]);

  //clicking the same product will collapse it by setting default states
  useEffect(() => {
    if (collapseFlag === 1){
      setDetails({});
      setPic('');
    }
  }, [collapseFlag]);

  //click event that sets the collapse flag and/or updates details about the product
  //fix this. if the item is expanded then collapsed, it cannot expand again until selecting another product
  //this is because setCollapseFlag(0) is async and happens after the if statement (sync) checking collapse flag in the useEffect that watches id
  function handleClick (e) {
    e.preventDefault();
    if (parseInt(e.target.dataset.key) + 1 === id && collapseFlag === 0){
      console.log('inside the if')
      setCollapseFlag(1);
    } else {
      console.log('inside the else')
      setCollapseFlag(0);
      setId(parseInt(e.target.dataset.key) + 1);
    }
  }

  //render
  return (
    <>
      <h1 className = 'header'>Click a products title to find out more!</h1>
      <div onClick ={handleClick} className = 'App-header'>
        <ProductList products={products} details={details} pic={pic}/>
      </div>
      <h1 className = 'header'>Click the title again to collapse!</h1>
    </>
  );
}

export default App;

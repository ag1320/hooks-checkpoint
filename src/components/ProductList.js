import Details from "./Details";
import Pic from "./Pic";
import Card from '@mui/material/Card'


const ProductList = ({products, details, pic}) => {
    let listProducts = products.map((product, index) => (
        <>
            <h3 data-key={index} key = {index}>
            {product.name}
            </h3>
            <Details details = {details} id = {index}/>
            <Pic pic = {pic} id = {index}/>
        </>
    ));
    return (
            listProducts
        )
  };

  export default ProductList;
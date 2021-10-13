import Details from "./Details";
import Pic from "./Pic";
import { Card, Grid, CardContent, CardActionArea} from '@mui/material/'
import './ProductList.css'


const ProductList = ({products, details, pic}) => {
    let listProducts = products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card variant = 'outlined' raised = {true} >
                <CardContent style={{ backgroundColor: "lightgrey"}}>
                    <CardActionArea>
                        <Grid container spacing = {4} justifyContent='center'>
                            <Grid item>
                                    <h2 data-key={index} key = {index} className = 'header'>
                                    {product.name}
                                    </h2>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                        <Grid item>
                            <Details details = {details} id = {index}/>
                        </Grid>
                        <Grid item>
                            <Pic pic = {pic} id = {index}/>
                        </Grid>
                </CardContent>
            </Card>
        </Grid>

    ));
    return (<Grid container spacing = {4} justifyContent='center'>{listProducts}</Grid>)
  };

  export default ProductList;
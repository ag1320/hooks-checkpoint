

const ProductList = ({products}) => {
    console.log(products)
    let listProducts = products.map((product, index) => (
    // <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Card variant="outlined" className="card">
    //     <CardContent style={{ backgroundColor: "lightgrey" }}>
            <p key={index}>
            {product.name}
            </p>
    //     </CardContent>
    //     </Card>
    //</Grid>
    ));
  
    // return (<Grid container spacing={4}>{listProducts}</Grid>);
    return (listProducts)
  };

  export default ProductList;
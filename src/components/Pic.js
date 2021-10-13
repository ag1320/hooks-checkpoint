const Pic = ({pic, id}) => {
    console.log('prodid', pic.product_id)
    console.log('id', id)
    if (id + 1 === parseInt(pic.product_id)){
      console.log('we made it here!')
      return (<img src = {pic.results[0].photos[0].thumbnail_url} alt = 'pic'></img>)
    } else {
      return <></>
    }
  };
  
export default Pic;
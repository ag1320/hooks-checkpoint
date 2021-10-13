import './Pics.css'

const Pic = ({pic, id}) => {
    if (id + 1 === parseInt(pic.product_id)){
      return (<img src = {pic.results[0].photos[0].thumbnail_url} alt = 'pic' className = 'pic'></img>)
    } else {
      return <></>
    }
  };
  
export default Pic;
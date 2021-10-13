import './Details.css'

const Details = ({details, id}) => {
  if (id + 1 === details.id){
    return (<div className = 'text'>{JSON.stringify(details, null, 4)}</div>)
  } else {
    return <></>
  }
};

  export default Details;
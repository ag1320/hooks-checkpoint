const Details = ({details, id}) => {
  if (id + 1 === details.id){
    return (<>{JSON.stringify(details, null, 4)}</>)
  } else {
    return <></>
  }
};

  export default Details;
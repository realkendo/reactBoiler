const Card = (props) =>{
  return(
    <>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.alt} />
      <p>{props.type}</p>
      <p>{props.email}</p>
    </>
  )
}

export default Card
const Card = ({name, img, type, email}) =>{
  return(
    <>
    <div className="bcard">
        <h2>{name}</h2>
        <img src={img} style={{width:"100px", height:"100px"}} />
        <p>{type}</p>
        <p>{email}</p>
      </div>
    </>
  )
}

export default Card
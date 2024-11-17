const Card = ({name, img, type, email}) =>{
  return(
    <>
    <div className="bcard">
        <h2>{name}</h2>
        <img src={img} style={{width:"200px", height:"150px"}} />
        <p>{type}</p>
        <p>{email}</p>
      </div>
    </>
  )
}

export default Card
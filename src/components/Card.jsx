const Card = ({name, img, type, email, colors}) =>{
  return(
    <>
    <div className="bcard">
      <div className={colors}>
        <h2>{name}</h2>
        <img src={img}/>
        <p>{type}</p>
        <p>{email}</p>
      </div>
    </div>
    </>
  )
}

export default Card
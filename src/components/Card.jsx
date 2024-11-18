import Avatar from "./Avatar"

const Card = ({name, type, email, colors, img}) =>{
  return(
    <>
    <div className="bcard">
      <div className={colors}>
        <h2>{name}</h2>
        <Avatar img={img}/>
        <p>{type}</p>
        <p>{email}</p>
      </div>
    </div>
    </>
  )
}

export default Card
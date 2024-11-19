import Avatar from "./Avatar"
import Details from "./Details"


const Card = ({name, type, site, colors, img}) =>{
  return(
    <>
      <div className="bcard">
        <div className={colors}>
          <h2>{name}</h2>
          <Avatar img={img} />
          <Details type={type} site={site} />
        </div>
      </div>
    </>
  )
}


export default Card;
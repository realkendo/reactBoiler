function Entry({id, emoji, name, meaning}){
  return(
    <>
      <dl>
        <div>
        <dt>
          <span>{emoji}</span>
          <span>{name}</span>
        </dt>
        <dd>{meaning}</dd>
        </div>
      </dl>
    </>
  )
}


export default Entry;
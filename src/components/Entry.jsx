function Entry({num, emoji, name, meaning}){
  return(
    <>
      <dl>
        <div>
        <dt>
          {num+'. '}
          <span>{emoji}</span>
        </dt>
        <dt>
          <span>{name}</span>
        </dt>
        <dd>{meaning}</dd>
        </div>
      </dl>
    </>
  )
}


export default Entry;
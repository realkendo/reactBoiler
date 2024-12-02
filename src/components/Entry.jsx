

function Entry({num, emoji, name, meaning}){
  return(
    <>
      <dl>
        <div className="bg-white shadow-lg rounded-lg p-4 b-5 w-64 text-center transform transition-transform hover:scale-105">
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
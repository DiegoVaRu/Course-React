import { useEffect, useState } from 'react'
import { CONST } from './const'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [factTrigger, setFactTrigger] = useState(false)

  const handleClick = () => setFactTrigger(!factTrigger)

  useEffect(() => { // TODO - make a custom hook for this useEffect()
    fetch(CONST.FACT_URL)
      .then(res => res.json())
      .then(data => {
        setFact(data.fact)
        const firstWord = data.fact.split(' ')[0]
        setImageUrl(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white`)
      })
  }, [factTrigger])

  return (
    <main>
      <h1>Gatitos <img src='../public/cat.svg' alt='cat' /></h1>
      {imageUrl && <img className='fetched-img' src={imageUrl} alt='Fetched Image' />}
      <button onClick={handleClick}>New Fact</button>
      <div className='fact-container'>
        {fact && <p>{fact}</p>}
      </div>
    </main>
  )
}

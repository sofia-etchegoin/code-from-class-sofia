import { useParams } from 'react-router-dom'

import birdFamiliesData from '../../data/birdFamilies'

export default function BirdFamily() {
  const params = useParams()
  const birdFam = params.familyName
  const thisBirdFam = birdFamiliesData[birdFam]
  console.log(thisBirdFam)
  return (
    <div>
      <h2>A bird family</h2>
      <img 
        src='/images/piwakawaka.jpg' 
        alt='piwakawaka bird' 
      />
    </div>
  )
}

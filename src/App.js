import React from 'react'
import ourSponsorData from './design-system/components/OurSponsors/Data'
import { OurSponsors } from './design-system/components/OurSponsors/OurSponsors'

import './design-system/main.css'

function App() {
  const ourSponsorDataList = ourSponsorData.map((item) => {
    return <OurSponsors alt={item.alt} src={item.img} key={item.id} />
  })

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>{ourSponsorDataList}</div>
  )
}

export default App

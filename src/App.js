import React from 'react'
import CreativeSpeakers from './design-system/components/CreativeSpeakers/CreativeSpeakers'
import speakerData from './design-system/components/CreativeSpeakers/Data'

function App() {
  const speakerDataList = speakerData.map((item) => {
    return (
      <CreativeSpeakers
        img={item.img}
        alt={item.alt}
        name={item.name}
        job={item.job}
        key={item.id}
      />
    )
  })

  return <div style={{ display: 'flex' }}>{speakerDataList}</div>
}

export default App

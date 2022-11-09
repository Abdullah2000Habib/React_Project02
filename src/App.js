import React from 'react'
import OurPrograms from './design-system/components/OurPrograms'
import ourProgramsData from './design-system/components/OurPrograms/Data'
import './design-system/main.css'

function App() {
  const ourProgramsDataList = ourProgramsData.map((item) => {
    return (
      <OurPrograms
        img={item.img}
        alt={item.alt}
        title={item.title}
        description={item.description}
        roomNumber={item.roomNumber}
        time={item.time}
        key={item.id}
        name={item.name}
      />
    )
  })

  return <div>{ourProgramsDataList}</div>
}

export default App

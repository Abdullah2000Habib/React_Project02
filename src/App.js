import React from 'react'
import Overview from './design-system/components/Overview'
import overviewData from './design-system/Data'

function App() {
  const overviewDataList = overviewData.map((item) => {
    return (
      <Overview
        icon={item.icon}
        title={item.title}
        key={item.id}
        description={item.Description}
      />
    )
  })

  return <div style={{ display: 'flex' }}>{overviewDataList}</div>
}

export default App

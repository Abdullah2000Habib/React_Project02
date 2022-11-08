import * as icons from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Overview from './design-system/components/Overview'

function App() {
  return (
    <Overview icon={icons.faUserGroup} title="650 participation">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
      similique vitae nisi laudantium esse veniam accusantium ab quae aliquam
      eveniet, doloremque, nostrum illum sapiente minus quod quibusdam provident
      soluta. Eius consectetur itaque sit eos.
    </Overview>
  )
}

export default App

// <Overview icon={icons.faClock} title="24 programs">
//       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
//       similique vitae nisi laudantium esse veniam accusantium ab quae aliquam
//       eveniet, doloremque, nostrum illum sapiente minus quod quibusdam
//       provident soluta. Eius consectetur itaque sit eos.
//     </Overview>

//     <Overview icon={icons.faMicrophone} title="11 Speakers">
//       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
//       similique vitae nisi laudantium esse veniam accusantium ab quae aliquam
//       venite, doloremque, nostrum illum sapiente minus quod quibusdam
//       provident soluta. Eius consectetur itaque sit eos.
//     </Overview>

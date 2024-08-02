import React from 'react'
import DAfooterOfficial from '../component/molecules/DAfooterOfficial'
import CardHolder from '../component/molecules/CardHolder'
import { data } from '../dataStorage/dataStorage'

function Match() {
  return (
    <div className=' w-full'>
      {/* <img
        className="absolute top-0 bg-cover bg-repeat w-full h-[122vh] z-[-1]"
        src="debug-images/bg-main.png"
        alt="bgMain"
      /> */}
      <div>
          <h1 className='squada-one-regular text-white'>
            Berita Harian
          </h1>
          <div className='w-[80%] mx-auto mb-10'>
            <CardHolder data={data} />
          </div>
      </div>
      <footer>
        <DAfooterOfficial align='left'/>
      </footer>
    </div>
  )
}

export default Match

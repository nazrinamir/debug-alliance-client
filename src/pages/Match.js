import React from 'react'
import DAfooterOfficial from '../component/molecules/DAfooterOfficial'
import CardHolder from '../component/molecules/CardHolder'
import { dataNews } from '../dataStorage/dataStorage'

function Match() {
  return (
    <div className='bg-[#700404]'>
      {/* <img
        className="absolute top-0 bg-cover bg-repeat w-full h-[122vh] z-[-1]"
        src="debug-images/bg-main.png"
        alt="bgMain"
      /> */}
      <div className="h-fit w-full">
          <h1 className='squada-one-regular text-white my-4'>
            Berita Harian
          </h1>
          <div className='w-[80%] mx-auto mb-10'>
            <CardHolder data={dataNews} />
          </div>
      </div>
      <footer className="mx-auto w-[80%] mt-20">
        <DAfooterOfficial align="left" />
      </footer>
    </div>
  )
}

export default Match

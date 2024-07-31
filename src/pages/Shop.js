import React from 'react'
import DAbtn from "../component/atom/DAbtn";
import DAfooterOfficial from '../component/molecules/DAfooterOfficial';

function Shop() {
  return (
    <div>
      <img
        className="absolute top-0 bg-cover bg-repeat w-full h-[122vh] z-[-1]"
        src="debug-images/bg-main.png"
        alt="bgMain"
      />
      <div className="bg-yellow-500 bg-cover bg-no-repeat bg-opacity-25">
        <h1 className='squada-one-regular text-white font-bold underline '>
          DEBUG ALLIANCE MERCHANDISE
        </h1>
        <div className="lg:flex w-[80%]  p-10 items-center justify-center mx-auto">
          <div className='lg:w-3/5 w-full'>
            <div className='w-3/5 mx-auto'>
              <img className='rounded-xl hover:shadow-lg' src="/resources/baju.jpeg" alt='DA_HK24'/>
            </div>
          </div>
          <div className='lg:w-2/5 w-full flex flex-col justify-end'>
            <div className='squada-one-regular text-white font-bold lg:text-[3.5rem] p-4'>
              DEBUG ALLIANCE <br/>HOME KIT 24'
            </div>
            <div className='squada-one-regular text-white font-bold lg:text-[1.5rem] p-4'>
              Opening purchase at 31 July 2024
            </div>
            <div className='w-full'>
              <DAbtn to={'https://google.com'} createTab={"ON"} label={'Purchase'} />
            </div>
          </div>
        </div>
      </div>
      <footer className="mx-auto w-[80%] mt-20">
        <DAfooterOfficial align="left" />
      </footer>
    </div>
  )
}

export default Shop

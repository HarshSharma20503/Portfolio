'use client';
import Sidebar from './Components/Sidebar'
import Mainbar from './Components/Mainbar'
import { ThemeProvider } from 'next-themes'
import {useState, useEffect} from 'react'


const page = () => {

  const [mounted,setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  },[]);
  if(!mounted){
    return null;
  }

  return (
    <ThemeProvider  defaultTheme='dark' attribute='class'>
      <div className='grid grid-cols-12 gap-6 px-5 mb-4 my-4 sm:my-4 sm:px-20 md:my-4  lg:my-16 md:px-32 lg:px-2 xl:px-28 2xl:px-40' >

        <div className='h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
          <Sidebar />
        </div>
        <div
          className='flex flex-col col-span-12 bg-white rounded-2xl dark:text-white lg:col-span-9 dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark mb-4 lg:mb-0'
          >
          <Mainbar />
        </div>

      </div>
    </ThemeProvider>
  )
}

export default page
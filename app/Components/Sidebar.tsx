import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { MdOutlineDocumentScanner } from "react-icons/md";
import { GoLocation } from 'react-icons/go'
import { Kaushan_Script } from 'next/font/google';
import { SiLeetcode } from "react-icons/si";
import EmailButton from '../Utility Components/EmailButton';
import ChangeThemeButton from '../Utility Components/ChangeThemeButton';

const inter = Kaushan_Script({ weight: '400', subsets: ['latin'], })

const Sidebar = () => {

    return (
        <>
            {/* Image */}
            <img src="https://jiitopticachapter.in/images/core%20team%20img/Harsh_Sharma.webp" alt="avatar of user" className='w-32 h-32 mx-auto border rounded-full ' />

            {/* Name and Designation*/}
            <h3 className={`my-4 text-3xl font-medium tracking-wider font-kaushan ${inter.className}`}>
                <span className='text-green '>Harsh</span> Sharma
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500'>
                Aspiring SDE
            </p>

            {/* Resume */}
            <a
                href='/Harsh_Sharma_Resume.pdf'
                download='Harsh Sharma Resume.pdf'
                className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-500'>
                <MdOutlineDocumentScanner className='w-6 h-6' />
                <span>Download Resume</span>
            </a>

            {/* Socials */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full '>
                <a href='https://leetcode.com/XoXoHarsh/' target='_blank'>
                    <SiLeetcode className='w-8 h-8 cursor-pointer' />
                </a>
                <a href='https://www.linkedin.com/in/harshsharma20503/' target='_blank'>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
                <a href='https://github.com/HarshSharma20503' target='_blank'>
                    <AiFillGithub className='w-8 h-8 cursor-pointer' />{' '}
                </a>
            </div>

            {/* Contacts */}
            <div
                className='py-4 my-5 bg-gray-200 dark:bg-black-500'
                style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex items-center justify-center'>
                    <GoLocation className='mr-2' /> <span>Greater Noida,India </span>
                </div>
                <p className='my-2 '> Harshsharma20503@gmail.com</p>
                <p className='my-2'> 8383936346 </p>
            </div>

            {/* Email Button */}
            <EmailButton/>

            {/* Change themes */}
            <ChangeThemeButton />            
        </>
    )
}

export default Sidebar
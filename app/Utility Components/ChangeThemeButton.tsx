'use client';
import { useTheme } from "next-themes";
const ChangeThemeButton = () => {
    const {theme,setTheme} = useTheme();

    const changeTheme = () =>{
        setTheme(theme === 'light'?'dark':'light');
    }
    return (
        <button 
            onClick={changeTheme}
            className='w-8/12 px-5 py-2 my-4 text-gray-800 dark:text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green-800 to-blue-400 focus:outline-none hover:scale-105 dark:from-green dark:to-blue-500'>
            {theme=='light'?"Dark":"Light"} Theme
        </button>
    )
}

export default ChangeThemeButton
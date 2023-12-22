'use client';

const EmailButton = () => {
    return (
        <button
            className='w-8/12 px-5 py-2 text-gray-800 dark:text-white dark:from-green dark:to-blue-500 bg-black rounded-full cursor-pointer bg-gradient-to-r from-green-800 to-blue-400 hover:scale-105 focus:outline-none'
            onClick={() => window.open('mailto:harshsharma20503@gmail.com')}
        >
            Email me
        </button>
    )
}

export default EmailButton
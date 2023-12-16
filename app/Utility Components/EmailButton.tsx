'use client';

const EmailButton = () => {
    return (
        <button
            className='w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green-500 to-blue-500 hover:scale-105 focus:outline-none'
            onClick={() => window.open('mailto:harshsharma20503@gmail.com')}
        >
            Email me
        </button>
    )
}

export default EmailButton
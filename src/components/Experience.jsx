import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import nextjs from '../assets/nextjs.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {
    const portfolio = [
        {
            id: 1,
            src: html,
            child: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            child: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            child: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: react,
            child: 'React',
            style: 'shadow-blue-500',
        },
        {
            id: 5,
            src: nextjs,
            child: 'Next JS',
            style: 'shadow-white',
        },
        {
            id: 6,
            src: tailwind,
            child: 'Tailwind',
            style: 'shadow-blue-500',
        },
    ]
    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Experience
                    </p>
                    <p className='py-6'>
                        these are the technologies I've worked with
                    </p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8 text-center'>
                    {portfolio.map(({ id, src, child, style}) => (
                        
                        // eslint-disable-next-line no-useless-concat
                        <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + ' ' + style}>
                            <img src={src} alt="" className='w-20 mx-auto duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <p>{child}</p>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
        </div>
    )
}

export default Experience
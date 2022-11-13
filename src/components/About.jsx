import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-8 md:mt-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dolore deserunt recusandae excepturi aliquid distinctio, consequuntur possimus modi eveniet id, nemo fugit sint ea vel voluptas? Labore voluptate modi doloribus placeat, dolorum est quia animi sed illum, eum sapiente, beatae quod voluptatem quas cum. Doloremque error distinctio animi corrupti harum.</p>
                <br />
                <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id consequatur rem maiores rerum veritatis voluptatem nemo quaerat unde qui minus.</p>
            </div>


        </div>
    )
}

export default About
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
    {
        id: 1,
        child: (
                <>LinkedIn <FaLinkedin size={30} />
                </>
            ),
        href: 'https://www.linkedin.com/in/sudhanshu-doble-a36a04210/?originalSubdomain=in',
        style: 'rounded-tr-md',
    },
    {
        id: 2,
        child: (
                <>GitHub <FaGithub size={30} />
                </>
            ),
        href: 'https://github.com/Sudhanshu842',
        
        
    },
    {
        id: 3,
        child: (<>Mail <HiOutlineMail size={30} />
            </>
            ),
        href: 'mailto: sudhanshudoble842@gmail.com',
        
    },
    {
        id: 4,
        child: (<>Resume <BsFillPersonLinesFill size={30} />
            </>
            ),
        href: '',
        style: 'rounded-br-md',
        download: true,
    },

    ]

return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({ id, child, href, style, download }) =>
            (   
                // eslint-disable-next-line no-useless-concat
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-2 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 duration-300' + ' ' + style }>
                    <a
                        href={href}
                        className='flex justify-between pl-2 items-center 
                        w-full text-white '
                        download={download}
                        target='blank'>
                        {child}
                    </a>
                </li>

            ))}


        </ul>
    </div>
)
}

export default SocialLinks
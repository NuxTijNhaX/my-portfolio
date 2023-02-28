import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa'
import {Link} from 'react-scroll'
const Navbar = () => {
    const [isMoblieNav, setIsMobileNav] = useState(false);
    const handleMobileNav = () => setIsMobileNav(!isMoblieNav);

    return (
        <div className='w-full h-20 bg-whtie flex justify-between items-center px-5'>
            
            {/* Navbar */}
            <div className='z-50'>
                <a href='/'>
                    <span className='font-bold text-4xl'>
                        <span className='text-[#345EDF]'>{"<"}</span>
                        thiennha.works
                        <span className='text-[#3180C5]'>{" />"}</span>
                    </span>
                </a>
            </div>

            <div className='hidden md:block'>
                <ul className='text-xl flex gap-10 xl:gap-16 cursor-pointer uppercase font-bold'>
                    <Link className=' hover:text-[#3180C5]' to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                    <Link className=' hover:text-[#3180C5]' to="about" smooth={true} duration={500}>
                        About
                    </Link>
                    {/* <Link className=' hover:text-[#3180C5]' to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                    <Link className=' hover:text-[#3180C5]' to="contact" smooth={true} duration={500}>
                        Contact
                    </Link> */}
                </ul>
            </div>

            {/* Mobile Navbar */}
            <div onClick={handleMobileNav} className='md:hidden text-3xl cursor-pointer z-50'>
                {isMoblieNav ? <FaTimes /> : <FaBars />} 
            </div>

            <div className={isMoblieNav ? 'absolute top-0 left-0 bg-gray-200 w-full h-screen pt-10' : 'hidden'}>
                <ul className='text-xl uppercase font-bold h-full flex flex-col justify-center items-center gap-16 cursor-pointer'>
                    <Link className=' hover:text-[#3180C5]' to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                    <Link className=' hover:text-[#3180C5]' to="about" smooth={true} duration={500}>
                        About
                    </Link>
                    <Link className=' hover:text-[#3180C5]' to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                    <Link className=' hover:text-[#3180C5]' to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </ul>
            </div>

            {/* Social */}
            <div className='fixed top-[35%] left-0 hidden md:block'>
                <ul>
                    <li className=' w-48 h-16 bg-[#0077b5] text-2xl -ml-32 hover:-ml-0 px-4 duration-300'>
                        <a className='h-full flex justify-between items-center text-white' href='https://www.linkedin.com/in/nhanguyen7901/' target='_blank' rel='noopener noreferrer'>
                            LinkedIn
                            <div>
                                <FaLinkedin color='white' size={35}/>
                            </div>
                        </a>
                    </li>
                    <li className=' w-48 h-16 bg-[#333] text-2xl -ml-32 hover:-ml-0 px-4 duration-300'>
                        <a className='h-full flex justify-between items-center text-white' href='https://github.com/NuxTijNhaX'>
                            Github
                            <div>
                                <FaGithub color='white' size={35}/>
                            </div>
                        </a>
                    </li>
                    <li className=' w-48 h-16 bg-[#FBBC05] text-2xl -ml-32 hover:-ml-0 px-4 duration-300'>
                        <a className='h-full flex justify-between items-center text-white' href='mailto:nhanguyen7901@gmail.com'>
                            Email
                            <div>
                                <FaEnvelope size={35}/>
                            </div>
                        </a>
                    </li>
                    <li className=' w-48 h-16 bg-[#F40F02] text-2xl -ml-32 hover:-ml-0 px-4 duration-300'>
                        <a className='h-full flex justify-between items-center text-white' href='https://rxresu.me/thiennha24568/thiennha-resume'>
                            Resume
                            <div>
                                <FaFilePdf color='white' size={35}/>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react'
import Avatar from '../assets/3davatar.png'
const Home = () => {
    return (
        <div name='home' className='home w-full h-screen'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center gap-8 h-full'>
                <p className='text-white font-bold'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white text-center'>
                    Nguyễn Thiện Nhã
                </h1>
                <h2 className='text-2xl sm:text-5xl font-bold text-white text-center'>
                    Fresher .NET Developer
                </h2>

                <div className='flex justify-center'>
                    <p className='text-white py-4 max-w-[700px] lg:max-w-none text-justify md:text-center'>
                        An ambitious software developer with strong command in 
                        <span className=' font-bold'> C#</span>, 
                        <span className=' font-bold'> {"ASP.NET Core { MVC, Web API }"}</span>, 
                        <span className=' font-bold'> SQL</span>,
                        <span className=' font-bold'> Javascript</span>, and 
                        <span className=' font-bold'> ReactJS</span>. Constant learner and ability to adapt to new technologies. Possess strong
                        communication and team management skills. Especially, robust business processes knowledge.
                    </p>
                </div>

                <div className='flex justify-center'>
                    <img className='avatar w-[50%] md:w-[35%]' src={Avatar} alt='Thien Nha Avatar'/>
                </div>
            </div>
        </div>
  )
}

export default Home
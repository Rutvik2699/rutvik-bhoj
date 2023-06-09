import React from 'react'
import bigboytoys from '../assets/portfolio/bigboytoys.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
const Portfolio = () => {

    const portfolios =[
        {
            id:1,
            src:bigboytoys,
            href1:' https://rutvik2699.github.io/Big-Boy-Toys/',
            demo:(<>Demo</>),
            href2:'https://github.com/Rutvik2699/Big-Boy-Toys',
            code:(<>Code</>),
        },
        {
            id:2,
            src:installNode,
            // demo:,
            // code:
        },
        {
            id:3,
            src:navbar,
            // demo:,
            // code:
        },
        {
            id:4,
            src:reactParallax,
            // demo:,
            // code:
        },
        {
            id:5,
            src:reactWeather,
            // demo:,
            // code:
        },
        {
            id:6,
            src:reactSmooth,
            // demo:,
            // code:
        },
    ]


  return (
    <div name="portfolio" 
        className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col jsutify-cen
         w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            
            <div 
                className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {portfolios.map(({id,src,demo,code,href1,href2})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img 
                    src={src} 
                    alt="" 
                    className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button href={href1} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>{demo}</button>
                        <button href={href2} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>{code}</button>
                    </div>
                </div>
                    ))}
                
                
            </div>
                
        </div>
    </div>
  )
}

export default Portfolio
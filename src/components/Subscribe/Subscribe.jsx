import React from 'react'
import Banner  from '../../assets/Banner.jpeg'


const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
}


export const Subscribe = () => {
  return (
    <div
    data-aos='zoom-in'
    className='mb-20 bg-gray-100 dark:bg-gray-800 dark:text-white'
    style={BannerImg}
    >
        <div className='container backdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 
                data-aos='fade-up'
                className='text-2xl !text-center
                sm:text-left sm:text-4xl font-semibold'>
                    Get notified about new Products
                </h1>
                <input
                data-aos="fade-up"
                type='text'
                placeholder='Enter your Email'
                className='w-full p-3 dark:text-white'
                >
                </input>
            </div>

        </div>
    </div>
  )
}

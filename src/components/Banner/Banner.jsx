import React from 'react'
import BannerImg from '../../assets/bannerImg.jpg'
import { GrOrderedList, GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiPayMoney } from 'react-icons/gi'

export const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                <div data-aos='zoom-in'>
                    <img
                    src={BannerImg}
                    alt=''
                    className='max-w-[400] h-[350] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover'
                    />
                </div>
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 data-aos='fade-up' className='text-3xl sm:text-4xl font-bold '>
                        Winter Sale up to 50% off
                    </h1>
                    <p data-aos='fade-up' className='text-sm text-gray-500 tracking-wide  leading-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Nulla laborum, nobis sit impedit consequuntur quaerat aliquid 
                         libero cupiditate numquam, quas deserunt unde repellat 
                         blanditiis tempore soluta! Libero totam tempora architecto.
                    </p>
                    <div className='flex flex-col gap-4'>
                        <div data-aos='fade-up' className='flex items-center gap-4'> 
                            <GrSecure  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                            bg-violet-100 dark:bg-violet-400'/>
                            <p>Quality products</p>
                        </div>
                        <div data-aos='fade-up' className='flex items-center gap-4'>
                            <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                            bg-violet-100 dark:bg-orange-400'/>
                            <p>
                                Fast Delivery
                            </p>
                        </div>
                        <div data-aos='fade-up' className='flex items-center gap-4'> 
                            <GiPayMoney  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                            bg-violet-100 dark:bg-green-400'/>
                            <p>Easy payment method</p>
                        </div>
                        <div data-aos='fade-up' className='flex items-center gap-4'>
                            <GrOrderedList className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                            bg-violet-100 dark:bg-yellow-400'/>
                            <p>
                                Get Offers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

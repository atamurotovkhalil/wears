import React from 'react'
import Img1 from '../../assets/Img6.jpg'
import Img2 from '../../assets/Img7.jpg'
import Img3 from '../../assets/Img8.jpg'
import { FaStar } from 'react-icons/fa6'


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.`,
    },
    {
        id: 2,
        img: Img2,
        title: "Printed Shirt",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.`,
    },
    {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.`,
    },
]

const TopProducts = ( {handleOrderPopup}) => {
  return (
    <div>
        <div className='container p-5'>
            <div className='text-left mb-24 '>
                <p data-aos='fade-up' className='text-sm text-orange-700'>Top Rated Products for you</p>
                <h1 data-aos='fade-up' className='text-3xl font-bold'>
                   Best Products
                </h1>
                <p data-aos='fade-up' className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Officia officiis sunt earum molestiae nam nostrum laborum, 
                    autem recusandae incidunt sequi voluptas sint exercitationem tempora.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 
            md:gap-5 place-items-center'>
                {ProductsData.map((data)=>(
                    <div 
                    data-aos="zoom-in"
                    className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80
                    dark:hover:bg-orange-600 hover:text-white relative shadow-xl duration-300
                    group max-w-[300px]'>
                        <div className='h-[100px]'>
                            <img
                            src={data.img}
                            alt=""
                            className='max-w-[200px] h-[190px] pt-2 block mx-auto transform
                            -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                            />
                        </div>
                        <div className='p-4 text-center'>
                            <div className='w-full flex items-center justify-center gap-1'>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-yellow-500'></FaStar>
                                <FaStar className='text-yellow-500'></FaStar>
                            </div>
                            <h1 className='text-xl font-bold dark:text-white'>
                                {data.title}
                            </h1>
                            <p className='text-gray-500  dark:text-white group-hover:text-white
                            duration-300 text-sm line-clamp-2'>
                                {data.description}
                            </p>
                            <button className='bg-orange-700 hover:scale-105 duration-300
                            text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
                            group-hover:text-orange-700'
                            onClick={handleOrderPopup}>
                                    Order now
                            </button>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TopProducts
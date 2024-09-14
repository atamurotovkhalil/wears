import React from 'react'
import Img1 from '../../assets/Img1.jpg'
import Img2 from '../../assets/Img2.jpg'
import Img3 from '../../assets/Img3.jpg'
import Img4 from '../../assets/Img4.jpg'
import Img5 from '../../assets/Img5.jpg'
import { FaStar } from 'react-icons/fa6'


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: 'Women 1',
        rating: 5.0,
        color: 'White',
        aosDelay: 0,
    },
    {
        id: 2,
        img: Img2,
        title: 'Women 2',
        rating: 4.5,
        color: 'Red',
        aosDelay: 200,
    },
    {
        id: 3,
        img: Img3,
        title: 'Women 3',
        rating: 4.7,
        color: 'Brown',
        aosDelay: 400,
    },
    {
        id: 4,
        img: Img4,
        title: 'Women 4',
        rating: 4.4,
        color: 'Red',
        aosDelay: 600,
    },
    {
        id: 5,
        img: Img5,
        title: 'Women 5',
        rating: 4.0,
        color: 'White',
        aosDelay: 800,
    },
]

export const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p 
                data-aos="fade-up"
                className='text-sm text-orange-700'>Top selling products for you</p>
                <h1 
                data-aos="fade-up"
                className='text-3xl font-bold'>
                    Products
                </h1>
                <p 
                data-aos="fade-up"
                className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Officia officiis sunt earum molestiae nam nostrum laborum, 
                    autem recusandae incidunt sequi voluptas sint exercitationem tempora.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
                place-items-center gap-5'>
                            {ProductsData.map((data)=>(
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={data.aosDelay} 
                                    key={data.id} 
                                    className='space-y-3'>
                                    
                                    <img 
                                    className='h-[220px] sm:w-[150px] w-[300px] object-cover rounded-md' 
                                    alt=''
                                    src={data.img}/>
                                    <div>
                                        <h3 className='font-semibold'>{data.title}</h3>
                                        <p className='text-sm text-gray-600'>
                                            {data.color}
                                        </p>
                                        <div className='flex items-center gap-1'>
                                            <FaStar className='text-yellow-400'></FaStar>
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>    
                                </div>
                                
                            ))}
                </div>
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-orange-700 text-white
                    py-1 px-5 rounded-md'>
                                View all Button
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

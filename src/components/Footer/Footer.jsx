import React from 'react'
import Banner from '../../assets/Banner.jpg'
import footerLogo from '../../assets/footerLogo.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';


const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width:'100%',
};
const FooterLinks = [
    {
      id:1,
      title:'Home'
    },
    {
      id:2,
      title:'About'
    },
    {
      id:3,
      title:'Contact'
    },
    {
      id:4,
      title:'Blog'
    },
]

export const Footer = () => {
  return (
    <div style={BannerImg} className='text-white'>
          <div className='container'>
            <div 
            data-aos='zoom-in'
            className='grid md:grid-cols-3 pb-44 pt-5'>
              <div className='py-8 px-4'>
                  <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3
                  flex items-center gap-3'>
                      <img
                      src={footerLogo} alt='' 
                      className='w-12'/>
                      WEARS
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Corporis quod sint id mollitia recusandae a nulla quibusdam 
                    assumenda veritatis modi similique vitae quasi 
                  </p>
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                <div >
                  <div className='py-8 px-4'>
                      <h1 className='sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3'>
                         Important Links
                      </h1>
                      <ul>
                        {FooterLinks.map((link)=>(
                          <li
                          className='cursor-pointer hover:text-orange-600 hover:translate-x-1
                          duration-300 text-gray-200 py-1'
                          key={link.title}>
                                <span>{link.title}</span>
                          </li>
                        ))}
                      </ul>
                  </div>
                  

                </div>
                <div >
                  <div className='py-8 px-4'>
                      <h1 className='sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3'>
                        Links
                      </h1>
                      <ul>
                        {FooterLinks.map((link)=>(
                          <li
                          className='cursor-pointer hover:text-orange-600 hover:translate-x-1
                          duration-300 text-gray-200 py-1'
                          key={link.title}>
                                <span>{link.title}</span>
                          </li>
                        ))}
                      </ul>
                  </div>
                  

                </div>
                <div>
                  <div className='flex items-center gap-3  mt-6'>
                        <a href='#'>
                          <FaInstagram className='text-3xl'/>
                        </a>
                        <a href='#'>
                          <FaFacebook className='text-3xl'/>
                        </a>
                        <a href='#'>
                          <FaLinkedin className='text-3xl'/>
                        </a>
                  </div>
                  <div className='mt-6'>
                        <div className='flex items-center gap-3'>
                              <FaLocationArrow/>
                              <p>Busan, South Korea</p>
                        </div>
                        <div className='flex items-center gap-3'>
                              <FaMobileAlt/>
                              <p>+821028301155</p>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

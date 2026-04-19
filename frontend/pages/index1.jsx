import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const index1 = () => {
  return (
    <>
    <section id='section1' className='bg-e-200 h-[100vh] w-full flex flex-col items-center justify-center'>
        <Header/>
        <div className="bg-emerald-300 w-full h-full flex ">
            <div className="left-content bg-yellow-100 flex-1">
                <h3 id="hero" className="font-[poppins-semibold] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 tracking-tighter">
                                    We are <br />
                                    <span className="text-[#C7740E] font-[poppins-extrabold] text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-widest">
                                        JAPO
                                    </span>,
                                </h3>
                                <h3 id="hero" className="font-[poppins-regular] text-lg sm:text-xl md:text-2xl mb-4">
                                    JAPO (<span className="text-[#1f7177] font-bold"><Link href="/about">JOURNAL & ARTICLE PUBLISING ORGANIZATION</Link></span>) is a leading academic organization dedicated to publishing high-quality journals and books across diverse disciplines. Committed to advancing research and knowledge dissemination, we also organize global conferences that bring together scholars, researchers, and industry experts to foster innovation and collaboration on an international scale.
                                </h3>
                                  <p id="hero" className="text-lg sm:text-xl mb-4">
                                    Explore our journals, access books, and join global conferences to enhance your research.
                                </p>
                                <Link href={'#section2'} className='herobutton' >
                                    <Button className=" herobutton bg-[#1f7177] hover:bg-[#298b92]" >
                                        Explore Us<ArrowRight />
                                    </Button>
                                </Link>
            </div>
             <div className="right-content flex justify-center items-center w-full sm:w-[90%] md:w-[50%] lg:w-[40%]">
                                <img src="/publish article offwhite bg.gif" alt="Hero" id="heroimg" className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-cover" />
                            </div>
        </div>
    </section>


    <section id='section2' className='bg-green-200 h-[100vh] w-full'>

    </section>


    <section id='section3' className='bg-blue-200 h-[100vh] w-full'>

    </section>
    </>
  )
}

export default index1
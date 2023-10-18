"use client";
import React from 'react'
import Header from '../Component/Header'
import Siderbar from '../Component/Sidebar'
import Footer from '../Component/Footer'



function page() {
    return (
        <>
            <Header></Header>
            <div className='flex mb-[1rem] pt-3 mobpage2'>
                <div name="main">
                    <div>Home/Clothing/<b>Apparel</b></div>
                    <br></br>
                    <div><h1>Apparel -<small>15346</small></h1></div>
                    <br></br>

                    <h1 className='pb-[8px]'>Filters</h1>



                </div>

                <div className='flex items-end justify-between  w-[90%] px-[8vmax]'>
                    <div className='flex gap-5' >
                        <div>
                            <select name="cars" id="cars">
                                <option value="volvo">Bundels</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <select name="cars" id="cars">
                                <option value="volvo">Country of Origin</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <select name="cars" id="cars">
                                <option value="volvo">Size</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <select name="cars" id="cars" className='border-2 border-gray-500 w-[120%]  p-[10px]'>
                            <option value="volvo">Short by: Recommended </option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>

                    </div>

                </div>






            </div>
            <div className='flex rimgaa' >
                <Siderbar />
                <div className=' w-[80%] border-t-2 border-gray-400 mainProduct'>
                    <div className='w-[100%] flex px-5 productPage '>
                        <div className='flex gap-8  w-[50%] productCat  '>


                        
                        <div className='w-[45%] my-4  '>
                            <div>
                                <a href='/Right'><img src="/Product2/pd1.webp" /></a>
                            </div>
                            <div className='flex flex-col gap-1 py-2 px-2 bg-white'>
                                <h1>Indo Era</h1>

                                <h3> Women Yoke Design Kurta</h3>

                                <span> <b>Rs.599</b> &nbsp;<strike><small>Rs.3999</small></strike> <small className='text-red-500'>(85% OFF)</small> </span>


                            </div>

                        </div>

                        <div className='w-[45%] my-4  '>
                            <div>
                                <a href='/Right'><img src="/Product2/pd4.webp" /></a>
                            </div>
                            <div className='flex flex-col gap-1 py-2 px-2 bg-white'>
                                <h1>Indo Era</h1>

                                <h3> Women Yoke Design Kurta</h3>

                                <span> <b>Rs.599</b> &nbsp;<strike><small>Rs.3999</small></strike> <small className='text-red-500'>(85% OFF)</small> </span>


                            </div>

                        </div>

                        </div>

                        <div className='flex gap-8  w-[50%] productCat'>

                       

                        <div className='w-[45%] my-4  '>
                            <div>
                                <a href='/Right'><img src="/Product2/pd2.webp" /></a>
                            </div>
                            <div className='flex flex-col gap-1 py-2 px-2 bg-white'>
                                <h1>Indo Era</h1>

                                <h3> Women Yoke Design Kurta</h3>

                                <span> <b>Rs.599</b> &nbsp;<strike><small>Rs.3999</small></strike> <small className='text-red-500'>(85% OFF)</small> </span>


                            </div>

                        </div>
                        <div className='w-[45%] my-4  '>
                            <div>
                                <a href='/Right'><img src="/Product2/pd3.webp" /></a>
                            </div>
                            <div className='flex flex-col gap-1 py-2 px-2 bg-white'>
                                <h1>Indo Era</h1>

                                <h3> Women Yoke Design Kurta</h3>

                                <span> <b>Rs.599</b> &nbsp;<strike><small>Rs.3999</small></strike> <small className='text-red-500'>(85% OFF)</small> </span>


                            </div>

                        </div>

                        </div>






                    </div>
                    <div className='w-[100%] flex px-5 productPage'>
                        <div className='flex gap-8  w-[50%] productCat '>


                        
                        <div className='w-[45%] my-4  '>
                            <div>
                                <a href='/Right'><img src="/Product2/pd1.webp" /></a>
                            </div>
                            <div className='flex flex-col gap-1 py-2 px-2 bg-white'>
                                <h1>Indo Era</h1>

                                <h3> Women Yoke Design Kurta</h3>

                                <span> <b>Rs.599</b> &nbsp;<strike><small>Rs.3999</small></strike> <small className='text-red-500'>(85% OFF)</small> </span>


                            </div>

                        </div>

                        <div className='w-[45%] my-4  '>
                            <div>
                                <a href='/Right'><img src="/Product2/pd4.webp" /></a>
                            </div>
                            <div className='flex flex-col gap-1 py-2 px-2 bg-white'>
                                <h1>Indo Era</h1>

                                <h3> Women Yoke Design Kurta</h3>

                                <span> <b>Rs.599</b> &nbsp;<strike><small>Rs.3999</small></strike> <small className='text-red-500'>(85% OFF)</small> </span>


                            </div>

                        </div>

                        </div>

                        <div className='flex gap-8  w-[50%] productCat'>

                       

                        <div className='w-[45%] my-4  '>
                            <div>
                                <a href='/Right'><img src="/Product2/pd2.webp" /></a>
                            </div>
                            <div className='flex flex-col gap-1 py-2 px-2 bg-white'>
                                <h1>Indo Era</h1>

                                <h3> Women Yoke Design Kurta</h3>

                                <span> <b>Rs.599</b> &nbsp;<strike><small>Rs.3999</small></strike> <small className='text-red-500'>(85% OFF)</small> </span>


                            </div>

                        </div>
                        <div className='w-[45%] my-4  '>
                            <div>
                                <a href='/Right'><img src="/Product2/pd3.webp" /></a>
                            </div>
                            <div className='flex flex-col gap-1 py-2 px-2 bg-white'>
                                <h1>Indo Era</h1>

                                <h3> Women Yoke Design Kurta</h3>

                                <span> <b>Rs.599</b> &nbsp;<strike><small>Rs.3999</small></strike> <small className='text-red-500'>(85% OFF)</small> </span>


                            </div>

                        </div>

                        </div>






                    </div>
                    <div className='w-[100%] flex px-5 productPage'>
                        <div className='flex gap-8  w-[50%] productCat '>


                        
                        <div className='w-[45%] my-4  '>
                            <div>
                                <a href='/Right'><img src="/Product2/pd1.webp" /></a>
                            </div>
                            <div className='flex flex-col gap-1 py-2 px-2 bg-white'>
                                <h1>Indo Era</h1>

                                <h3> Women Yoke Design Kurta</h3>

                                <span> <b>Rs.599</b> &nbsp;<strike><small>Rs.3999</small></strike> <small className='text-red-500'>(85% OFF)</small> </span>


                            </div>

                        </div>

                        <div className='w-[45%] my-4  '>
                            <div>
                                <a href='/Right'><img src="/Product2/pd4.webp" /></a>
                            </div>
                            <div className='flex flex-col gap-1 py-2 px-2 bg-white'>
                                <h1>Indo Era</h1>

                                <h3> Women Yoke Design Kurta</h3>

                                <span> <b>Rs.599</b> &nbsp;<strike><small>Rs.3999</small></strike> <small className='text-red-500'>(85% OFF)</small> </span>


                            </div>

                        </div>

                        </div>

                        <div className='flex gap-8  w-[50%] productCat'>

                       

                        <div className='w-[45%] my-4  '>
                            <div>
                                <a href='/Right'><img src="/Product2/pd2.webp" /></a>
                            </div>
                            <div className='flex flex-col gap-1 py-2 px-2 bg-white'>
                                <h1>Indo Era</h1>

                                <h3> Women Yoke Design Kurta</h3>

                                <span> <b>Rs.599</b> &nbsp;<strike><small>Rs.3999</small></strike> <small className='text-red-500'>(85% OFF)</small> </span>


                            </div>

                        </div>
                        <div className='w-[45%] my-4  '>
                            <div>
                                <a href='/Right'><img src="/Product2/pd3.webp" /></a>
                            </div>
                            <div className='flex flex-col gap-1 py-2 px-2 bg-white'>
                                <h1>Indo Era</h1>

                                <h3> Women Yoke Design Kurta</h3>

                                <span> <b>Rs.599</b> &nbsp;<strike><small>Rs.3999</small></strike> <small className='text-red-500'>(85% OFF)</small> </span>


                            </div>

                        </div>

                        </div>






                    </div>
                  

                    <div className='flex justify-between px-5 border-t border-gray-300  pt-5 navMainBtn'>
                        <div>
                            <h1>Page 1 of 31698</h1>
                        </div>
                        <div className='flex gap-3 navbtn'>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                            <button>10</button>
                        </div>
                        <div>
                            <button className='nxtbtn px-2 rounded'><h3>Next </h3></button>
                        </div>
                    </div>

                </div>




            </div>
            <div className='mt-10 bg-#FAFBFC'>

           <Footer/>
            </div>

        </>
    )
}

export default page
"use client";
import React, { useEffect } from 'react';
import Header from '../Component/Header'
import { BsFillStarFill,BsTruck } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { FcOk } from "react-icons/fc";
import { MdMobileFriendly } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Footer from '../Component/Footer';

function page() {
    useEffect(() => {
        // This code will run on the client side when the component is mounted
        const addtoBag = document.getElementById("addtoBag");
        
        addtoBag.addEventListener("click", function () {
          alert("Item added to the cart successfully");
        });
      }, []); 
  return (
    <>
    <Header></Header>
    <div className='py-[30px]'>
        <h1>Home / Clothing / Women Clothing / Kurta Sets / Indo Era Kurta Sets {'>'} More By Indo Era </h1>
    </div>

    <div name="main" className='h-[100vh] w-[100%] flex mobright'>
        <div name="img" className='w-[60%] h-[90vh] border-2 rimgaa '>
            <div className='flex gap-4 rimgaaInner1'>
            <div className='h-[50vh] w-[50%] overflow-hidden'>
                <img  src="/Product2/pbb1.webp" />
            </div>
            <div className='h-[50vh] w-[50%] overflow-hidden'>
            <img src="/Product2/pbb2.webp" />
            </div>

            </div>
            <div className='flex gap-4 mt-2 rimgaaInner2'>
            <div className='h-[50vh] w-[50%] overflow-hidden'>
                <img  src="/Product2/pbb3.webp" />
            </div>
            <div className='h-[50vh] w-[50%] overflow-hidden'>
            <img src="/Product2/pbb4.webp" />
            </div>

            </div>
            
        </div>
        <div name="rating"className='w-[40%] px-[10px] rating' >
            <div>
                <h1><b>Indo Era</b></h1>
                <div><h2>Women Purple Yoke Design Kurta with Palazzos & With Dupatta</h2>
                <div className='border-2 flex w-[30%] p-2 mt-2 star'>
                    4.3 &nbsp;<BsFillStarFill className='text-green-500'/> | 7.3k Ratings
                </div>
                </div>
            </div>

            <div className='border-t mt-5 pt-3 border-b pb-5'>
                <div>
                <b>₹599</b> &nbsp;  MRP<strike>3999</strike> &nbsp; <b className='text-orange-500'>(85% OFF)</b>  
                </div>
                <div className='mt-3'>
                <b className='text-green-500'>inclusive of all taxes </b>
                </div>
                <div className='mt-5'>
                    <b>SELECT SIZE &nbsp;&nbsp;&nbsp; <small className='text-pink-500 text-sm'>SIZE CHART {'>'}</small> </b>
                    </div>
 
                    <div className='flex gap-10 mt-3 csize'>
                        <div className='border  w-[50px] h-[50px] flex justify-center items-center rounded-full font-bold '>XS</div>
                        <div className='border  w-[50px] h-[50px] flex justify-center items-center rounded-full font-bold '>S</div>
                        <div className='border  w-[50px] h-[50px] flex justify-center items-center rounded-full font-bold '>M</div>
                        <div className='border  w-[50px] h-[50px] flex justify-center items-center rounded-full font-bold '>L</div>
                        <div className='border  w-[50px] h-[50px] flex justify-center items-center rounded-full font-bold '>XL</div>
                        <div className='border  w-[50px] h-[50px] flex justify-center items-center rounded-full font-bold '>XXL</div>
                    </div>

                    <div className='flex gap-8 mt-5 buyp'>
                        <div id='addtoBag' className='flex border bg-pink-500 text-white w-[30%] buyp1 items-center justify-center h-[3vmax] rounded'>
                           <HiShoppingBag className='text-white text-xl'/> &nbsp; ADD TO BAG
                        </div>

                        <div className='flex border bg-white text-black w-[30%] buyp2 items-center justify-center h-[3vmax] rounded'>
                           <AiOutlineHeart className='text-black text-xl'/> &nbsp; ADD TO BAG
                        </div>

                        <div></div>
                    </div>



            </div>

            <div className='px-5'>

            <div className='flex gap-3 mt-4' >
                <h1>DELIVERY OPTIONS</h1><BsTruck className='text-xl'/>
            </div>
            <div className='flex gap-10 border w-[40%] h-10 items-center px-[2px] rounded bg-pink-50'>
                400078 <FcOk/> <b className='text-pink-500'>Change</b>
            </div>

            <div className='flex flex-col gap-10' >
                <div className='flex gap-3 text-lg'><BsTruck className='text-xl '/> Get it by Wed, Oct 18</div>
                <div className='flex gap-3 text-lg'><MdMobileFriendly className='text-xl '/>Pay on delivery available</div>
                <div className='flex gap-3 text-lg'><FaArrowRightArrowLeft className='text-xl '/>Easy 14 days return & exchange available</div> 

            </div>


            </div>

        </div>
    </div>
    
    <hr></hr>
    <div className='mt-[10vh] pfotter '>

    <Footer/>
    </div>
    
    </>
   
  )
}

export default page

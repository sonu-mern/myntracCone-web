import React from 'react'

import { FiSearch } from 'react-icons/fi';


function Siderbar() {
    return (
        <>

           
      


            <div name="filter" className='w-[20%] h-[236vh] border-2 border-gray-300 mobsidbar '>

                <div name="gender" className='flex pl-[1vmax]  flex-col border-2 border-grey-500 pb-2 py-[5px] '>
                    <div >
                        <input type='radio' name='a' ></input> Male
                    </div>
                    <div>
                        <input type='radio' name='a'></input> Female
                    </div>
                    <div>
                        <input type='radio' name='a'></input> Boys
                    </div>
                    <div>
                        <input type='radio' name='a'></input> Girls
                    </div>

                </div>

                <div name="category" className='flex pl-[1vmax]  flex-col border-2 border-grey-500 pb-2 gap-2.5' >
                    <div className='flex justify-between pr-[1vmax] pt-[1vmax] '>
                        <h1><b>CATEGORIES</b></h1>

                        <div className='rounded-full  border-red-500  bg-gray-200 p-[0.5vmax]'>

                            <FiSearch />
                        </div>




                        </div>


                        <div >
                            <input type='checkbox' name='b'></input>Tshirts (215182)
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input> Shirts (129487)
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input> Sarees (117425)
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input> Dresses (116687)
                        </div>
                        <div >
                            <input type='checkbox' name='b'></input> Kurta Sets (113771)
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input> Tops (107071)
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input> Kurtas (98967)
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input> Sweatshirts (54878)
                        </div>

                        <div className='pl-[12px]'>
                            <h1><b className='text-pink-500'>+81 more</b></h1>
                        </div>





                </div>
                <div name="Brand" className='flex pl-[1vmax]  flex-col border-2 border-grey-500 pb-2 gap-2.5' >
                    <div className='flex justify-between pr-[1vmax] pt-[1vmax] '>
                        <h1><b>BRAND</b></h1>

                        <div className='rounded-full  border-red-500  bg-gray-200 p-[0.5vmax]'>

                            <FiSearch />
                        </div>




                        </div>


                        <div >
                            <input type='checkbox' name='b'></input>KALINI (215182)
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input> BAESD (129487)
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input> Roadster (117425)
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input> Mitera (116687)
                        </div>
                        <div >
                            <input type='checkbox' name='b'></input> V-Mart (113771)
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input> HERE&NOW (107071)
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input> max (98967)
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input> H&M (54878)
                        </div>
                        <div className='pl-[12px]'>
                            <h1><b className='text-pink-500'>+3656 more</b></h1>
                        </div>





                </div>
                <div name="Brand" className='flex pl-[1vmax]  flex-col border-2 border-grey-500 pb-2 gap-2.5' >
                    <div className='flex justify-between pr-[1vmax] pt-[1vmax] '>
                        <h1><b>Price</b></h1>

                        </div>


                        <div >
                            <input type='checkbox' name='b'></input>Rs. 83 to Rs. 33813 (1581801)
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input>Rs. 33813 to Rs. 67543
                        </div>
                        <div>
                            <input type='checkbox' name='b'></input> Rs. 67543 to Rs. 101273 (23)
                        </div>
                       
                        
                        




                </div>
                <div name="Color" className='flex pl-[1vmax]  flex-col border-2 border-grey-500 pb-2 gap-2.5' >
                    <div className='flex justify-between pr-[1vmax] pt-[1vmax] '>
                        <h1><b>COLOR</b></h1>

                        <div className='rounded-full  border-red-500  bg-gray-200 p-[0.5vmax]'>

                            <FiSearch />
                        </div>




                        </div>


                        <div className='flex gap-3' >
                            <input type='checkbox' name='b'></input><div className='h-[1.5vmax] w-[1.5vmax] bg-blue-500 rounded-full border-2 border-black-500'></div>Blue (215182)
                        </div>
                        <div className='flex gap-3'>
                            <input type='checkbox' name='b'></input> <div className='h-[1.5vmax] w-[1.5vmax] bg-green-500 rounded-full border-2 border-black-500'></div>Green (129487)
                        </div>
                        <div className='flex gap-3'>
                            <input type='checkbox' name='b'></input><div className='h-[1.5vmax] w-[1.5vmax] bg-black rounded-full border-2 border-black-500'></div> Black (117425)
                        </div>
                        <div className='flex gap-3'>
                            <input type='checkbox' name='b'></input><div className='h-[1.5vmax] w-[1.5vmax] bg-pink-500 rounded-full border-2 border-black-500'></div> Pink (116687)
                        </div>
                        <div className='flex gap-3' >
                            <input type='checkbox' name='b'></input><div className='h-[1.5vmax] w-[1.5vmax] bg-yellow-500 rounded-full border-2 border-black-500'></div> Yellow (113771)
                        </div>
                        <div className='flex gap-3'>
                            <input type='checkbox' name='b'></input><div className='h-[1.5vmax] w-[1.5vmax] bg-white rounded-full border-2 border-black-500'></div> White (107071)
                        </div>
                        <div className='flex gap-3'>
                        <input type='checkbox' name='b'></input><div className='h-[1.5vmax] w-[1.5vmax] bg-red-500 rounded-full border-2 border-black-500'></div> Red (107071)
                        </div>
                    
                        <div className='pl-[12px] pt-1'>
                            <h1><b className='text-pink-500'>+39 more</b></h1>
                        </div>





                </div>

                <div name="gender" className='flex pl-[1vmax] gap-3  flex-col pb-2 py-[5px] '>
            
                <h1 className='py-[5px]'><b>COLOR</b></h1>
   
                    <div >
                        <input type='radio' name='a' ></input> 10% and above
                    </div>
                    <div>
                        <input type='radio' name='a'></input> 20% and above
                    </div>
                    <div>
                        <input type='radio' name='a'></input> 30% and above
                    </div>
                    <div>
                        <input type='radio' name='a'></input> 40% and above
                    </div>
                    <div>
                        <input type='radio' name='a'></input> 50% and above
                    </div>
                    <div>
                        <input type='radio' name='a'></input> 60% and above
                    </div>
                    <div>
                        <input type='radio' name='a'></input> 70% and above
                    </div>
                    <div>
                        <input type='radio' name='a'></input> 80% and above
                    </div>
                    <div>
                        <input type='radio' name='a'></input> 90% and above
                    </div>

                </div>
                









            </div>
            
        </>
    )
}

export default Siderbar
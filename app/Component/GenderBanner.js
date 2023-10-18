"use client"
import React from 'react';
import Image from 'next/image';


export const GenderBanner = () => {
    return (
        <>
        <div className='h[10%] '>
          <img src="/OffBanner/b1.webp" alt="Gender Banner" />
        </div>

        <div className='flex h-[60fvh] w-[100%]'>
          <img className='w-[50%]' src="/Gender-card/female.webp" alt="Gender Banner" />
          <img className=' w-[50%]' src="/Gender-card/male.webp" alt="Gender Banner" />
        </div>
        <div>
            <img src="/OffBanner/b2.webp" alt="b2" />
        </div>
        </>
    );
}

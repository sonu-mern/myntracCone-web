"use client"
import React from 'react';
import Header from '../app/Component/Header.js';
 // Make sure this path is correct
import { GenderBanner } from '../app/Component/GenderBanner';
import { CuponCard } from '../app/Component/CuponCard';
import CategoryProduct from '../app/Component/CategoryProduct';
import Footer from '../app/Component/Footer';
// import 'font-awesome/css/font-awesome.min.css';

const Page = () => {
  return (
    <>
      <Header></Header>
      <GenderBanner></GenderBanner>
      <CuponCard></CuponCard>
      <CategoryProduct></CategoryProduct>
      <Footer></Footer>
    </>
  );
};

export default Page;

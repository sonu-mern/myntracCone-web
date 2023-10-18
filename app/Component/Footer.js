
"use client";
import React, { Component } from 'react';
import { FaYoutube,FaTwitter,FaFacebookSquare } from 'react-icons/fa';
import { TfiInstagram } from 'react-icons/tfi';



const textColorStyle = { color: '##696b79' };

export class Footer extends Component {
  render() {
    return (
      <div className='h-[100%]' suppressHydrationWarning>
        <footer>
          <div className='w-full flex mobilev'>
            <div className='w-[10%]'></div>
            <div className='flex w-[50%] moblevInner1 '>
            <div className='w-[50%]' style={textColorStyle}>
              <b>ONLINE SHOPPING</b>
              <br></br>
              <br></br>
              <h5>Men</h5>
              <h6>Women</h6>
              <h6>Kids</h6>
              <h6>Home&living</h6>
              <h6>Beauty</h6>
              <h6>Gift Card</h6>
              <h6>Myntra Insider</h6>
              <br></br>

              <b>USEFUL LINKS</b>
              <br></br>
              <br></br>
              <h6>Blog</h6>
              <h6>Careers</h6>
              <h6>Site Map</h6>
              <h6>Corporate Information</h6>
              <h6>Whitehat</h6>
            </div>

            <div className='w-[50%]' style={textColorStyle}>
              <b>CUSTOMER POLICIES</b>
              <br></br>
              <br></br>
              <h6>Contact Us</h6>
              <h6>FAQ</h6>
              <h6>Terms Of Use</h6>
              <h6>Track Orders</h6>
              <h6>Shipping</h6>
              <h6>Cancellation</h6>
              <h6>Returns</h6>
              <h6>Privacy policy</h6>
              <h6>Grievance Officer</h6>
            </div>
            </div> 

            <div className='flex w-[50%] moblevInner2'>
            <div className='w-[60%]' style={textColorStyle}>
              <b> EXPERIENCE MYNTRA APP ON MOBILE</b>
              <br></br>
              <br></br>
              <div className='flex gap-2 '>
                <img className='w-[11vmax]' src="/OffBanner/gp.png" alt="Google Play" />
                <img className='w-[11vmax]' src= '/OffBanner/as.png' alt="App Store" />
              </div>
              <br></br>
              <br></br>
              <b>KEEP IN TOUCH</b>
              <br></br>
              <br></br>
              <div className='flex gap-4 '>
                <FaFacebookSquare   style={{ fontSize: "30px",  }} />
                <FaTwitter   style={{ fontSize: "30px",  }} />
                <FaYoutube   style={{ fontSize: "30px",  }} />
                <TfiInstagram   style={{ fontSize: "30px",  }} />

                <i className="fa fa-facebook-square" ></i>
                <i className="fa fa-twitter" style={{ fontSize: "30px",  }}></i>
                <i className="fa fa-youtube" style={{ fontSize: "30px",  }}></i>
                <i className="fa fa-instagram" style={{ fontSize: "30px",  }}></i>
              </div>
            </div>
            <div className='w-[40%]'>
              <br></br>
              <div className='flex gap-2'>
                <img className='h-[3vmax]' src= '/OffBanner/og.png' alt="Original Guarantee" />
                <p>
                  <h6 style={textColorStyle}>
                    <b> 100% ORIGINAL </b>guarantee
                    <br></br> all products at myntra.com
                  </h6>
                </p>
              </div>
              <br></br>
              <br></br>
              <div className='flex gap-2'>
                <img className='h-[3vmax]' src= '/OffBanner/returnp.png' alt="Return Policy" />
                <p>
                  <b style={textColorStyle}>  Return within 14 days</b> Return within 14 days of
                  <br></br> receiving your order
                </p>
              </div>
            </div>
            </div>  
            <div className='w-[10%]'></div>
          </div>
          <div className='flex items-center gap-1'>
            <div className='w-[9.5%]'></div>
            <b style={textColorStyle}>POPULAR SEARCHES</b> <div className='w-[70%] h-[0px] border-2 border-#EAEAEC-500'></div>
          </div>
          <br></br>
          <div className='px-[10%] pb-10'>
            <p style={textColorStyle}>Makeup | Dresses For Girls I T-Shirts I Sandals I Headphones I Babydolls I Blazers For Men I Handbags I Ladies Watches I Bags I Sport Shoes I Reebok Shoes I Puma Shoes I
              Boxers I Wallets I Tops I Earrings I Fastrack Watches I Kurtis I Nike I Smart Watches I Titan Watches I Designer Blouse I Gowns I Rings I Cricket Shoes I Forever 21 | Eye
              Makeup I Photo Frames I Punjabi Suits I Bikini I Myntra Fashion Show I Lipstick I Saree IWatches I Dresses I Lehenga I Nike Shoes I Goggles I Bras I Suit I Chinos I Shoes I
              Adidas Shoes I Woodland Shoes I Jewellery I Designers Sarees
            
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
	
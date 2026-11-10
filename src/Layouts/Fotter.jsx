import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import foooterlogo from '../assets/footerlogo.png'
import { AiOutlineSend } from "react-icons/ai";
import scaner from '../assets/scaner.png'
import app from '../assets/app.png'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Fotter = () => {
    return (
        <footer className='bg-black pt-20 pb-15'>
            <Container>
                <Flex>
                    <div className='w-3/12 '>
                        <Image src={foooterlogo} />
                        <h2 className='text-xl text-whitetext font-normal pt-5'>Subscribe</h2>
                        <p className='text-whitetext text-sm pt-4 pb-4'>Get 10% off your first order</p>
                        <Flex className='relative items-center'>
                            <input className='placeholder:text-whitetext pl-2 text-white border border-[#FAFAFA] rounded-sm ' type="text" placeholder='Enter your email' />

                            <AiOutlineSend className='absolute left-[54%] text-whitetext  pr-4 text-4xl' />

                        </Flex>
                    </div>
                    <div className='w-2/12 '>
                        <h1 className='text-xl text-whitetext font-medium'>Support</h1>
                        <p className='text-whitetext text-sm pt-4 pb-4 w-[150px]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className='text-whitetext text-sm '>exclusive@gmail.com</p>
                        <p className='text-whitetext text-sm pt-4'>+88015-88888-9999</p>

                    </div>
                    <div className='w-2/12 '>
                        <h1 className='text-xl text-whitetext font-medium'>Account</h1>
                        <p className='text-whitetext text-sm pt-6'>My Account</p>
                        <p className='text-whitetext text-sm pt-4'>Login / Register</p>
                        <p className='text-whitetext text-sm pt-4'>Cart</p>
                        <p className='text-whitetext text-sm pt-4'>Wishlist</p>
                        <p className='text-whitetext text-sm pt-4'>Shop</p>

                    </div>
                    <div className='w-2/12 '>
                        <h1 className='text-xl text-whitetext font-medium'>Quick Link</h1>
                        <p className='text-whitetext text-sm pt-6'>Privacy Policy</p>
                        <p className='text-whitetext text-sm pt-4'>Terms Of Use</p>
                        <p className='text-whitetext text-sm pt-4'>FAQ</p>
                        <p className='text-whitetext text-sm pt-4'>Contact</p>

                    </div>
                    <div className='w-3/12'>
                        <h1 className='text-xl text-whitetext font-medium'>Download App</h1>
                        <p className='text-whitetext text-sm pt-6 pb-4'>Save $3 with App New User Only</p>

                        <Flex className='gap-x-4'>
                            <Image src={scaner} />
                            <div>
                                <Image src={app} />
                                <Image src={app} />
                            </div>
                        </Flex>

                        <Flex className='text-whitetext text-2xl pt-4 gap-x-5' >
                            <FaFacebookF />
                            <CiTwitter />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </footer>
    )
}

export default Fotter
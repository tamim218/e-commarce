import React from 'react'
import Container from '../Components/Container';
import Flex from '../Components/Flex';
import Image from '../Components/Image';
import Logo from "../assets/logo.png";
import Listitem from '../Components/Listitem';
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';



const Navber = () => {
  return (
    <nav className='pt-5 pb-4'>
      <Container>
        <Flex className="items-center justify-between">
          <div className='w-[3/12]!'>
            <Image src={Logo} alt="logo" />
          </div>
          <div className='w-[5/12]'>
            <ul className='flex gap-10'>
              <Link to="/">
                <Listitem text="Home" />
              </Link>
              <Link to="/contact">
                <Listitem text="Contact" />
              </Link>
              <Link to="/about">
                <Listitem text="About" />
              </Link>
              <Link to="/signup">
                <Listitem text="Sign Up" />
              </Link>
            </ul>
          </div>
          <div className='w-[4/12] flex items-center justify-end gap-5'>
            <div className='relative w-[283px] bg-[#F5F5F5]'>
              <input className=' w-full  pr-8 py-3 py-2 pl-3  placehoider:text-sm' type="text" placeholder='What are you looking for?' />
              <CiSearch className='absolute right-3 top-3 text-xl text-[#000000]' />
            </div>
            <IoIosHeartEmpty />
            <BsCart />



          </div>

        </Flex>
      </Container>
    </nav>
  )
}

export default Navber
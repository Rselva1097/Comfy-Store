import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import {Header,NavBar} from '../components/index'
const HomeLayout = () => {
   return <>
      <Header />
      <NavBar/>
      <section className='align-element py-20'>
      <Outlet/>
      </section>
   </>;
}

export default HomeLayout

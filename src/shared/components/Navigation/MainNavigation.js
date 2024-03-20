import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import { SideDrawer } from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'
import './MainNavigation.css'

export const MainNavigation = () => {
const [drawerIsOpen,setDrowerIsOpen]=useState(false);

const openDrawer=()=>{
  setDrowerIsOpen(true);
}
const closeDrower=()=>{
  setDrowerIsOpen(false);
}

  return <>
 {drawerIsOpen && <Backdrop onClick={closeDrower}/>}
  { drawerIsOpen && <SideDrawer className='.main-navigation__drawer-nav'>
    <NavLinks/>
  </SideDrawer> }
   <MainHeader>
    <button className='main-navigation__menu-btn' onClick={openDrawer}>
        <span/>
        <span/>
        <span/>
    </button>
    <h1 className='main-navigation__title'>
        <Link to='/'>Your places</Link> </h1>
    <nav className='main-navigation__header-nav'>
        <NavLinks/>
    </nav>
  </MainHeader>
  </>

}

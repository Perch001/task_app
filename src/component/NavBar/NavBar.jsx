import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

  return (
    <>
        <div className='NavBar'>
            <div className='logoIcon'></div>
            <div className='logo'>LOGO</div>
            <NavLink
                className='NavLink'
                to="/"
                style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C"} : {borderBottom: "none"}}    
            >Заявки</NavLink>
            <NavLink 
                className='NavLink'
                to="/notifications"
                style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C"} : {borderBottom: "none"}}
            >Уведомления</NavLink>
            <NavLink
                className='NavLink'
                to="/Analytics"
                style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C"} : {borderBottom: "none"}}    
            >Аналитика</NavLink>
            <NavLink 
                className='NavLink'
                to="/Residents"
                style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C"} : {borderBottom: "none"}}
            >Жители</NavLink>
            <NavLink
                className='NavLink'
                to="/Staff"
                style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C"} : {borderBottom: "none"}}    
            >Сотрудники</NavLink>
            <NavLink 
                className='NavLink'
                to="/AtHome"
                style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C"} : {borderBottom: "none"}}
            >Дома</NavLink>
            <NavLink
                className='NavLink'
                to="/UK"
                style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C"} : {borderBottom: "none"}}    
            >УК</NavLink>
            
        </div>
    </>
  )
}

export default NavBar
import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption'
import HomeIcon  from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
 
function Header() {
    return (
        <div className="header">

            <div className="header__left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1617551382~hmac=8760e989c0e86e643a749f26b07a9fd6" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>            
            
            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                {/* <HeaderOption title=""   Icon={SearchIcon}/> */}
            </div>            
        </div>
    )
}


export default Header

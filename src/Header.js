import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon  from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption'
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
 
function Header() {
    return (
        <div className="header">

            <div className="header__left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1618149352~hmac=8d4a87ef3fe6bb1ebd68f12fc5f466eb" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>            
            
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"  />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"  />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"  />
                <HeaderOption Icon={ChatIcon} title="Messaging"  />
                <HeaderOption Icon={NotificationsIcon} title="Notification"  />
                <HeaderOption avatar="https://i.pinimg.com/originals/32/3f/d8/323fd8b794e9c1ab4f52de7e6b018852.jpg" title="Me" />
                {/* <HeaderOption title=""   Icon={SearchIcon}/> */}
            </div>            
        </div>
    )
}

console.log({HomeIcon});

export default Header

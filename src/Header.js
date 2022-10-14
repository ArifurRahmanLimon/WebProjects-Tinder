import React, { Component } from 'react';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PeopleIcon from '@material-ui/icons/People';
import { IconButton } from '@material-ui/core'; 
import "./Header.css";

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className="header">
            <IconButton>
                <PeopleIcon fontSize='large' className='header_icon1'/>
            </IconButton>
            <EmojiPeopleIcon />

            <img className='header_logo' src='logo192.png' alt="sorry" />
             </div>
        );
    }
}
 
export default Header;
import React, { Component } from 'react';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PeopleIcon from '@material-ui/icons/People';
import { IconButton } from '@material-ui/core'; 
import "./Header.css";
import { ForumRounded } from '@material-ui/icons';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className="header">
            <IconButton>
                <PeopleIcon fontSize='large' className='header_icon1'/>
            </IconButton>
            <img className='header_logo' src='logo192.png' alt="sorry" />

            <IconButton>
               <ForumRounded fontSize='large' className='header_icon1'/>
            </IconButton>
             </div>
        );
    }
}
 
export default Header;
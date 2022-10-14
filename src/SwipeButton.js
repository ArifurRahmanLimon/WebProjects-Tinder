import React, { Component } from 'react';
import './SwipeButton.css'
import { ReplayRounded } from '@material-ui/icons';
import { CloseRounded } from '@material-ui/icons';
import { StarRateRounded } from '@material-ui/icons';
import { FavoriteRounded } from '@material-ui/icons';
import { FlashOnRounded } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function SwipeButton() {
    
    return (
        <div className='swipeButton'>
            <IconButton className='SwipeButtons_repeat'>
                <ReplayRounded fontSize='large'/>
            </IconButton>

            <IconButton className='SwipeButtons_left'>
                <CloseRounded fontSize='large'/>
            </IconButton>

            <IconButton className='SwipeButtons_star'>
                <StarRateRounded fontSize='large'/>
            </IconButton>
            <IconButton className='SwipeButtons_right'>
                <FavoriteRounded fontSize='large'/>
            </IconButton>

            <IconButton className='SwipeButtons_lighting'>
                <FlashOnRounded fontSize='large'/>
            </IconButton>
        </div>
    );
}

export default SwipeButton;
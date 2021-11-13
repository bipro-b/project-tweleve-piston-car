import { Grid } from '@mui/material';
import React from 'react';
import banner from '../../../images/banner.png';
import './Carshow.css'
const CarShow = () => {
    return (
        <Grid className="banner-container" item sm={12}>

            <img style={{ width: '50%' }} src={banner} alt="" />
        </Grid>
    );
};

export default CarShow;
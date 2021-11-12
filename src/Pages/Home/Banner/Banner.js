import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import banner from '../../../images/banner.jpg'


const Banner = () => {
    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item sm={12} md={5}>
                    <h3>Car store</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum magna a tempor placerat. Mauris eu felis vitae mi sodales tincidunt in sed mi. Curabitur varius aliquet lectus in rutrum. Aliquam neque est, maximus eu eros a, sagittis lacinia leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque egestas velit non quam auctor, quis congue diam vulputate. Nunc non condimentum felis, vitae interdum sem. </p>
                    <Button variant="contained">All Services</Button>
                </Grid>

                <Grid item sm={12} md={7}>

                    <img style={{ width: '100%' }} src={banner} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;
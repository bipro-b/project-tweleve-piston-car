import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Car = (props) => {
    const { img, name, description, price } = props.car;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 350, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent sx={{ textAlign: 'left' }}>

                    <Typography variant="h5" component="div">
                        Name: {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Price: ${price}
                    </Typography>
                </CardContent>
                <Button variant="contained">Buy Now</Button>
            </Card>
        </Grid>
    );
};

export default Car;
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Car = (props) => {
    const { img, name, description, price, _id } = props.car;
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
                <Link to={`/car/${_id}`}> <button style={{ alignItems: 'center', marginLeft: "40px", backgroundColor: 'lavender' }} className="btn btn-primary ms-40px">Buy Now</button></Link>
            </Card>
        </Grid>
    );
};

export default Car;
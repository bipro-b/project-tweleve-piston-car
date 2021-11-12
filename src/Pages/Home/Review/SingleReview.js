import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const singleReview = (props) => {
    const { name, comment, rating } = props.review;
    console.log(props.review)
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 350, border: 0, boxShadow: 0 }}>

                <CardContent sx={{ textAlign: 'left' }}>

                    <Typography variant="h5" component="div">
                        {name} ,
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {comment}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {rating}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default singleReview;
import { Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';


const SingleReview = (props) => {

    const { name, comment, rating } = props.review;
    const [value, setValue] = useState(rating);
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
                    <Typography variant="h5" component="legend">
                        <Rating
                            name="read-only"
                            value={value}
                            onChange={(event, rating) => {
                                setValue(rating);
                            }}
                            readOnly />

                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default SingleReview;
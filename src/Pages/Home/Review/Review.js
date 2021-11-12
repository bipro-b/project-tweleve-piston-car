import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    // console.log(reviews);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'success.main', m: 2 }} variant="h6" component="div">
                    Our Customer's Review
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <SingleReview key={review._id} review={review}>

                        </SingleReview>)

                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Review;
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'success.main', m: 2 }} variant="h6" component="div">
                    Our Top Services
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map((product, index) => {
                            if (index >= 6) return null;
                            return (
                                <Product key={product.name} product={product}></Product>
                            )
                        })

                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;


/*  {items.map((item, index) =>
    {
     return nothing, hence render nothing if more than 2 items.
     if(index >= 2) return null;

    return(
    <li key={item.id}>
      {item.name}
    </li>);
    }
  )} */
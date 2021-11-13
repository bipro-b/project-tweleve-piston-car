import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import Footer from '../../Shared/Footer/Footer';

const MyOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://peaceful-ridge-87447.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])

    // delete car 
    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?')
        if (proceed) {
            const url = `https://peaceful-ridge-87447.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted succesfully')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }

                })
        }
    }
    return (
        <>

            <div>
                <h3>My Orders</h3>
                {
                    orders.map(order => <div key={order._id}>
                        <Grid lg={10} sx={{ display: 'flex', width: '90%', }}>
                            <Grid sm={12} md={6} sx={{ border: '1px solid green', margin: '10px', backgroundColor: 'cyan' }}>
                                Ordered By: {order?.displayName} <br />
                                {order.name} <br />
                                {order.description}
                            </Grid>
                            <Grid sm={12} md={6} sx={{ m: '3' }}>
                                <Button onClick={() => handleDelete(order._id)} variant="contained">Delete</Button>
                            </Grid>
                        </Grid>

                    </div>)
                }
            </div>
            <Footer></Footer>
        </>
    );
};

export default MyOrder;

import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { carId } = useParams();
    const [details, setDetails] = useState([]);
    const [carDetails, setCarDetails] = useState({});

    useEffect(() => {
        fetch('https://peaceful-ridge-87447.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    useEffect(() => {
        const choosedCar = details.find(
            serv => serv._id === carId
        );
        setCarDetails(choosedCar);
    }, [details, carId])


    const onSubmit = data => {

        axios.post('https://peaceful-ridge-87447.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <>
            <Navbar></Navbar>
            <Grid sx={{ alignItems: 'center' }}>
                <Typography>
                    <img src={user.photoURL} alt="" />
                    <h2>Hey "{user?.displayName}" Welcome</h2>
                </Typography>
                <Typography sx={{ mx: 'auto' }}>
                    <img style={{ width: '50%' }} src={carDetails?.img} alt="" />

                </Typography>
                <Typography style={{ margin: '0 50px 0 50px', alignItems: 'center' }}>
                    Name: {carDetails?.name} <br />
                    Car details: {carDetails?.description}
                </Typography>
            </Grid>

            <div className="add-car">
                <h3>Fill the purchase form</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={carDetails?.name} {...register("name", { required: true })} />
                    <input defaultValue={carDetails?.description} {...register("description", { required: true })} />
                    <input defaultValue={user?.displayName} {...register("displayName", { required: true, maxLength: 20 })} />
                    <input defaultValue={user?.email} {...register("email", { required: true, maxLength: 50 })} />


                    <input type="address" {...register("address")} placeholder="address" />
                    <input type="address" {...register("city")} placeholder="city" />
                    <input type="number" {...register("phone")} placeholder="your phone number" />
                    <input type="submit" />
                </form>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Shipping;
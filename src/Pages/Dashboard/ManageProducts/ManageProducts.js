import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';

const ManageProducts = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    // delete car 
    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/cars/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted succesfully')
                        const remaining = cars.filter(car => car._id !== id);
                        setCars(remaining);
                    }

                })
        }
    }

    return (
        <>

            <div>
                <h3>Manage all cars</h3>
                {
                    cars.map(car => <div key={car._id}>
                        <h3>{car.name}</h3>
                        <Button onClick={() => handleDelete(car._id)} variant="contained">Delete</Button>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </>
    );
};

export default ManageProducts;
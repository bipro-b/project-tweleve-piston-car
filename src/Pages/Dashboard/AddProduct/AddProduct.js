import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/cars', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfullt');
                    reset();
                }
            })
    }
    return (
        <>

            <div className="add-spot">
                <h3>Add new Car</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="car name" />

                    <textarea {...register("description")} placeholder="description" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register('img')} placeholder="upload image" />
                    <input type="submit" />
                </form>

            </div>
            <Footer></Footer>
        </>
    );
};

export default AddProduct;
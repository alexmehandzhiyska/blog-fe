import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import { authService } from '../../../services/authService';

import './Register.css';
import { useState } from 'react';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const registerUser = (formData) => {
        console.log(formData);

        authService.register(formData)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <form method="POST" className="form" onSubmit={handleSubmit(registerUser)}>
            <h1 className="form-title">Create account</h1>
            
            <div className="form-group">
                <label htmlFor="first-name">First name</label>
                <input type="text" id="first-name" {...register('first_name', { required: true })} />
                {errors.first_name && <span className="error">First name is required!</span>}
            </div>

            <div className="form-group">
                <label htmlFor="last-name">Last name</label>
                <input type="text" id="last-name" {...register('last_name', { required: true })} />
                {errors.last_name && <span className="error">Last name is required!</span>}
            </div>

            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username"{...register('username', { required: true })} />
                {errors.username && <span className="error">Username is required!</span>}

            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register('email', { required: true })} />
                {errors.email && <span className="error">Email is required!</span>}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register('password', { required: true })} />
                {errors.password && <span className="error">Password is required!</span>}
            </div>


            <div className="form-group">
                <label htmlFor="confirm-password">Confirm password</label>
                <input type="password" id="confirm-password" {...register('confirm_password', { required: true })} />
                {errors.confirm_password && <span className="error">Confirm password is required!</span>}
            </div>

            {error && <span className="error">{error}</span>}
            
            <div className="btn-wrapper">
                <button className="btn btn-primary">Register</button>
            </div>
        </form>
    );
};

export default Register;
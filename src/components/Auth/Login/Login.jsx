import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import { authService } from '../../../services/authService';

import './Login.css';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const loginUser = (formData) => {
        authService.login(formData)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <form method="POST" className="form" onSubmit={handleSubmit(loginUser)}>
            <h1 className="form-title">Log In</h1>

            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register('username', { required: true })} />
                {errors.username && <span className="error">Username is required!</span>}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register('password', { required: true })} />
                {errors.password && <span className="error">Password is required!</span>}
            </div>

            {error && <span className="error">{error}</span>}

            <div className="btn-wrapper">
                <button className="btn btn-primary">Log In</button>
            </div>
        </form>
    );
};

export default Login;
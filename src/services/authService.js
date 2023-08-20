import { baseUrl } from '../constants';

const register = async (user) => {
    if (user.password !== user.confirm_password) {
        throw new Error('Passwords must match!');
    }

    const response = await fetch(`${baseUrl}/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error('Error creating your account.');
    }

    localStorage.setItem('token', data.access);

    return data;
};

const login = async (user) => {
    const response = await fetch(`${baseUrl}/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error('Wrong username or password!');
    }

    localStorage.setItem('token', data.access);

    return data;
};

export const authService = { register, login };
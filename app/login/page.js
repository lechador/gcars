'use client'
import React, { useState } from 'react';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
            const res = await signIn("credentials", {
                email, 
                password, 
                redirect: false
            })
            res.error ? console.log('arasworia') : router.replace('/dashboard')
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg my-5">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">ავტორიზაცია</h2>
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            მომხმარებელი
            </label>
            <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            />
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            პაროლი
            </label>
            <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            />
        </div>
        <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
            შესვლა
        </button>
        <p className="mt-4 text-center text-gray-600">
            <Link href="/register" className="text-blue-500 hover:underline">
                რეგისტრაცია
            </Link>
        </p>
        </form>

      )
};

export default Login;
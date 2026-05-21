'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        })
        console.log({ data, error })
        if (data) {
            toast.success("Login Successfully!")
            redirect("/")
        }
        if (error) {
            toast.error(error.message || "Something went wrong");
        }
    }
    const handleGoogleSignin = async() => {
            await authClient.signIn.social({
                provider: "google",
            })
        }

    return (
        <div className='max-w-md mx-auto my-15'>
            <Card className='border shadow rounded-2xl p-8'>
                <h1 className='text-center text-3xl font-semibold mb-1'>
                    Login
                </h1>

                <p className='text-center mb-2 text-gray-500'>
                    Welcome back! please login to continue
                </p>

                <Form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className='flex gap-3'>
                        <Button className='w-full rounded-xl' type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
                <div className="flex items-center gap-4">
                    <div className="flex-1 border-t"></div>

                    <span className="text-sm text-gray-500 font-medium">
                        OR
                    </span>

                    <div className="flex-1 border-t"></div>
                </div>
                <div>
                    <Button onClick={handleGoogleSignin} variant='ghost' className={'w-full border rounded-xl'}><FcGoogle />Sign in with Google</Button>
                </div>
                <div className="text-center text-sm mt-1">
                    Dont have an account?{" "}

                    <Link
                        href="/signup"
                        className="text-blue-500 font-medium hover:underline"
                    >
                        Register
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;
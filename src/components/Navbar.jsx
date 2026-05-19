'use client'

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";


const Navbar = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user)

    const handleSignout = async () => {
        await authClient.signOut();
    }
    return (
        <div className="flex bg-gray-100 items-center">
            <div className="container mx-auto p-5">
                <nav className="flex justify-between items-center">
                    <div className="font-bold text-3xl text-blue-500">
                        <Link href={"/"}>MediQueue </Link>
                    </div>
                    <ul className="flex gap-4">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/tutor"}>Tutors</Link></li>
                        <li><Link href={"/add-tutor"}>Add Tutor</Link></li>
                        <li><Link href={"/my-tutor"}>My Tutors</Link></li>
                        <li><Link href={"/my-session"}>My Booked Sessions</Link></li>
                    </ul>
                    <ul className="flex gap-3 items-center">
                        <li><Link href={"/profile"}>Profile</Link></li>
                        {
                            user ? <>
                                <li><Avatar>
                                    <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                                    <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                                </Avatar></li>
                                <li><Button onClick={handleSignout} variant="danger" className={'rounded-xl'}>Logout</Button></li>
                            </> : <>
                                <li><Link href={"/login"}><Button className={'bg-blue-600 rounded'}>Login</Button></Link></li>
                                <li><Link href={"/signup"}><Button variant="outline" className={'rounded'}>Signup</Button></Link></li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
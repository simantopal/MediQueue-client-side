'use client'

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {

    const { data: session, isLoading } = authClient.useSession();
    const user = session?.user;

    const router = useRouter();

    const handleSignout = async () => {
        await authClient.signOut();
        router.push("/");
    };

    return (
        <div className="bg-gray-100 dark:bg-black">
            <div className="container mx-auto px-4 py-5">

                <nav className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">

                    {/* Logo */}
                    <div className="text-center lg:text-left">
                        <Link
                            href={"/"}
                            className="font-bold text-3xl text-blue-500"
                        >
                            MediQueue
                        </Link>
                    </div>

                    {/* Routes */}
                    <ul className="flex flex-col md:flex-row items-center justify-center gap-4 font-medium">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>

                        <li>
                            <Link href={"/tutor"}>Tutors</Link>
                        </li>

                        <li>
                            <Link href={"/add-tutor"}>Add Tutor</Link>
                        </li>

                        <li>
                            <Link href={"/my-tutor"}>My Tutors</Link>
                        </li>

                        <li>
                            <Link href={"/my-session"}>
                                My Booked Sessions
                            </Link>
                        </li>
                    </ul>

                    {/* Right Side */}
                    <ul className="flex flex-col md:flex-row items-center justify-center gap-4">

                        <li>
                            <ThemeToggle />
                        </li>

                        <li>
                            <Link href={"/profile"}>
                                Profile
                            </Link>
                        </li>

                        {isLoading ? (
                            <li className="text-sm text-gray-500">
                                Loading...
                            </li>
                        ) : user ? (
                            <>
                                <li>
                                    <Avatar>
                                        <Avatar.Image
                                            referrerPolicy="no-referrer"
                                            alt={user?.name || "User"}
                                            src={user?.image || ""}
                                        />
                                        <Avatar.Fallback>
                                            {user?.name?.[0]?.toUpperCase() || "U"}
                                        </Avatar.Fallback>
                                    </Avatar>
                                </li>

                                <li>
                                    <Button
                                        onClick={handleSignout}
                                        className="rounded-xl bg-red-500 text-white"
                                    >
                                        Logout
                                    </Button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-center gap-3">
                                    <Link href="/login">
                                        <Button className="bg-blue-600 text-white rounded-xl">
                                            Login
                                        </Button>
                                    </Link>

                                    <Link href="/signup">
                                        <Button
                                            variant="ghost"
                                            className="rounded-xl border"
                                        >
                                            Signup
                                        </Button>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                </nav>
            </div>
        </div>
    );
};

export default Navbar;
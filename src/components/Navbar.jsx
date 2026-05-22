'use client'

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown } from "@heroui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { Bars, House, GraduationCap, SquarePlus, Person, BookOpen,ArrowRightFromLine } from "@gravity-ui/icons";

const Navbar = () => {

    const { data: session, isLoading } = authClient.useSession();
    const user = session?.user;

    const router = useRouter();
    const pathname = usePathname();

    const handleSignout = async () => {
        await authClient.signOut();
        router.push("/");
    };

    return (
        <div className="bg-gray-100 dark:bg-black border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-5">

                <nav className="flex items-center justify-between">

                    <div>
                        <Link
                            href={"/"}
                            className="font-bold text-3xl text-blue-500"
                        >
                            MediQueue
                        </Link>
                    </div>

                    <ul className="hidden lg:flex items-center gap-6 font-medium">

                        <li>
                            <Link href={"/"} className={pathname === "/" ? "text-indigo-500 font-semibold" : ""}>Home</Link>
                        </li>

                        <li>
                            <Link href={"/tutor"} className={pathname === "/tutor" ? "text-indigo-500 font-semibold" : ""}>Tutors</Link>
                        </li>

                        <li>
                            <Link href={"/add-tutor"} className={pathname === "/add-tutor" ? "text-indigo-500 font-semibold" : ""}>Add Tutor</Link>
                        </li>

                        <li>
                            <Link href={"/my-tutor"} className={pathname === "/my-tutor" ? "text-indigo-500 font-semibold" : ""}>My Tutors</Link>
                        </li>

                        <li>
                            <Link href={"/my-session"} className={pathname === "/my-session" ? "text-indigo-500 font-semibold" : ""}>
                                My Booked Sessions
                            </Link>
                        </li>
                    </ul>

                    <div className="hidden lg:flex items-center gap-4">
                        <ThemeToggle />
                        <Link href={"/profile"} className={pathname === "/profile" ? "text-blue-500 font-semibold" : ""}>
                            Profile
                        </Link>

                        {isLoading ? (
                            <p className="text-sm text-gray-500">
                                Loading...
                            </p>
                        ) : user ? (
                            <>
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

                                <Button
                                    onClick={handleSignout}
                                    className="rounded-xl bg-red-500 text-white"
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <div className="flex items-center gap-3">
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
                            </div>
                        )}
                    </div>

                    <div className="lg:hidden flex items-center gap-3">
                        <ThemeToggle />

                        <Dropdown>
                            <Button
                                isIconOnly
                                aria-label="Menu"
                                variant="secondary"
                            >
                                <Bars className="outline-none" />
                            </Button>

                            <Dropdown.Popover className="min-w-[240px]">
                                <Dropdown.Menu>

                                    {/* Routes */}
                                    <Dropdown.Section>

                                        <Dropdown.Item
                                            id="home"
                                            textValue="Home"
                                        >
                                            <Link
                                                href="/"
                                                className="flex items-center gap-3 w-full"
                                            >
                                                <House className="size-4" />
                                                <span>Home</span>
                                            </Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item
                                            id="tutors"
                                            textValue="Tutors"
                                        >
                                            <Link
                                                href="/tutor"
                                                className="flex items-center gap-3 w-full"
                                            >
                                                <GraduationCap className="size-4" />
                                                <span>Tutors</span>
                                            </Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item
                                            id="add-tutor"
                                            textValue="Add Tutor"
                                        >
                                            <Link
                                                href="/add-tutor"
                                                className="flex items-center gap-3 w-full"
                                            >
                                                <SquarePlus className="size-4" />
                                                <span>Add Tutor</span>
                                            </Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item
                                            id="my-tutor"
                                            textValue="My Tutors"
                                        >
                                            <Link
                                                href="/my-tutor"
                                                className="flex items-center gap-3 w-full"
                                            >
                                                <Person className="size-4" />
                                                <span>My Tutors</span>
                                            </Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item
                                            id="my-session"
                                            textValue="My Sessions"
                                        >
                                            <Link
                                                href="/my-session"
                                                className="flex items-center gap-3 w-full"
                                            >
                                                <BookOpen className="size-4" />
                                                <span>My Booked Sessions</span>
                                            </Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item
                                            id="profile"
                                            textValue="Profile"
                                        >
                                            <Link
                                                href="/profile"
                                                className="flex items-center gap-3 w-full"
                                            >
                                                <Person className="size-4" />
                                                <span>Profile</span>
                                            </Link>
                                        </Dropdown.Item>

                                    </Dropdown.Section>

                                    <Dropdown.Section>

                                        {isLoading ? (
                                            <Dropdown.Item
                                                id="loading"
                                                textValue="Loading"
                                            >
                                                Loading...
                                            </Dropdown.Item>
                                        ) : user ? (
                                            <Dropdown.Item
                                                id="logout"
                                                textValue="Logout"
                                                color="danger"
                                                onPress={handleSignout}
                                            >
                                                <div className="flex items-center gap-3 text-red-500">
                                                    <ArrowRightFromLine className="size-4" />
                                                    <span>Logout</span>
                                                </div>
                                            </Dropdown.Item>
                                        ) : (
                                            <>
                                                <Dropdown.Item
                                                    id="login"
                                                    textValue="Login"
                                                >
                                                    <Link
                                                        href="/login"
                                                        className="w-full"
                                                    >
                                                        Login
                                                    </Link>
                                                </Dropdown.Item>

                                                <Dropdown.Item
                                                    id="signup"
                                                    textValue="Signup"
                                                >
                                                    <Link
                                                        href="/signup"
                                                        className="w-full"
                                                    >
                                                        Signup
                                                    </Link>
                                                </Dropdown.Item>
                                            </>
                                        )}

                                    </Dropdown.Section>

                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>

                    </div>

                </nav>
            </div>
        </div>
    );
};

export default Navbar;
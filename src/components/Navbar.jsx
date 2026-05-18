import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    return (
        <div className="bg-gray-100">
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
                    <ul className="flex gap-3">
                        <li><Link href={"/login"}>Login</Link></li>
                        <li><Link href={"/signup"}>Signup</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
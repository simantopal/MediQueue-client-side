// app/profile/page.jsx

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
    title: "My Profile",
};

const ProfilePage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        redirect("/login");
    }

    const user = session.user;

    return (
        <div className="container mx-auto my-15 px-4">
            <div className="max-w-xl mx-auto bg-gray-200 shadow-lg rounded-2xl p-8 border">
                <div className="flex flex-col items-center">
                    <img
                        src={
                            user.image ||
                            "https://i.ibb.co/4pDNDk1/avatar.png"
                        }
                        alt="profile"
                        className="w-28 h-28 rounded-full object-cover border-4 border-blue-200"
                    />
                    <h1 className="text-3xl font-bold text-blue-900 mt-5">
                        {user.name}
                    </h1>
                    <p className="text-gray-600 mt-2">
                        {user.email}
                    </p>
                </div>

                <div className="mt-10 space-y-5">
                    <div className="bg-gray-100 rounded-xl p-4">
                        <h2 className="font-semibold text-gray-700">Full Name</h2>
                        <p className="text-lg mt-1 text-black">
                            {user.name}
                        </p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-4">
                        <h2 className="font-semibold text-gray-700">Email Address</h2>
                        <p className="text-lg mt-1 text-black">{user.email}</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-4">
                        <h2 className="font-semibold text-gray-700">User ID</h2>
                        <p className="text-sm mt-1 break-all text-black">
                            {user.id}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
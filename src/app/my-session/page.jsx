import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import BookingDelete from '@/components/BookingDelete';

export const metadata = {
    title: "My Booked Session",
};

const MyBookedSessionPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const user = session?.user

    if (!session?.user) {
        redirect("/login");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    const bookings = await res.json()

    return (
        <div className='my-15'>
            <h1 className='text-center font-bold text-3xl text-indigo-500'>My booking</h1>
            {
                bookings.length === 0 ? (
                    <div className="flex items-center justify-center py-20">
                        <h2 className="text-3xl font-semibold text-gray-500 mt-5">
                            No bookings found 😔
                        </h2>
                    </div>
                ) : (
                    <div className='container mx-auto'>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white text-center my-8">

                            <table className="table w-full [&_tbody_td]:py-1">

                                <thead className="bg-gray-100 text-gray-700">
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Tutor Name</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>Cancel</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        bookings.map((booking) => (
                                            <tr
                                                key={booking._id}
                                                className="hover:bg-gray-50 transition py-15"
                                            >
                                                <td className='text-black'>{booking.userName}</td>
                                                <td className='text-black'>{booking.userPhone}</td>
                                                <td className='text-black'>{booking.tutorName}</td>
                                                <td className='text-black'>{booking.userEmail}</td>

                                                <td>
                                                    <span
                                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === "confirmed"
                                                            ? "bg-green-100 text-green-600"
                                                            : booking.status === "cancelled"
                                                                ? "bg-red-200 text-red-700"
                                                                : "bg-gray-100 text-gray-600"
                                                            }`}
                                                    >
                                                        {booking.status === "cancelled"
                                                            ? "Cancelled"
                                                            : booking.status}
                                                    </span>
                                                </td>

                                                <td>

                                                    <BookingDelete bookingId={booking._id} />

                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyBookedSessionPage;
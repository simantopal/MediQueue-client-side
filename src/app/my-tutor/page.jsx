// app/my-tutors/page.jsx

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import TutorDelete from "@/components/TutorDelete";
import { Button } from "@heroui/react";
import EditTutorModal from "@/components/EditTutorModal";

export const metadata = {
  title: "My Tutors",
};

const MyTutorsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }
  const user = session.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors/${user.email}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const tutors = await res.json();

  return (
    <div className="my-15">
      <h1 className="text-center font-bold text-3xl text-blue-900">My Tutors</h1>

      {
        tutors.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <h2 className="text-3xl font-semibold text-gray-500 mt-5">
              No tutors found 😔
            </h2>
          </div>
        ) : (
          <div className="container mx-auto">
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white text-center my-5">
              <table className="table w-full">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th>Tutor Name</th>
                    <th>Subject</th>
                    <th>Fee</th>
                    <th>Available</th>
                    <th>Total Slot</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    tutors.map((tutor) => (
                      <tr
                        key={tutor._id}
                        className="hover:bg-gray-50 transition">
                        <td>{tutor.tutorName}</td>
                        <td>{tutor.subject}</td>
                        <td>${tutor.fee}</td>
                        <td>{tutor.dayAndTime}</td>
                        <td><span className="text-green-600 font-bold text-lg">{tutor.slot}</span></td>

                        <td>
                          <div className="flex items-center justify-center gap-3">
                            <EditTutorModal tutor={tutor} />
                            <TutorDelete tutorId={tutor._id} />
                          </div>
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

export default MyTutorsPage;
import { BookSessionModal } from '@/components/BookSessionModal';
import { Card, } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TutorDetailsPage = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`http://localhost:5000/tutor/${id}`)
    const tutor = await res.json()

    const { tutorName, imageUrl, subject, dayAndTime, departureDate, fee, institution, location, slot, experience } = tutor;

    const today = new Date();
    const sessionDate = new Date(departureDate);

    const isDateAllowed = today >= sessionDate;
    const isSlotsAvailable = slot > 0;

    const canBook = isDateAllowed && isSlotsAvailable;

    return (
        <div className="container mx-auto my-15">
            <Card className="grid grid-cols-1 md:grid-cols-2 gap-6 border rounded-2xl p-5 items-center">

                <div className="mx-10 my-5">
                    <Image
                        alt={tutorName}
                        src={imageUrl}
                        width={600}
                        height={400}
                        className="w-full h-88 object-cover rounded-2xl"
                    />
                </div>

                {/* Right Side Content */}
                <div className="flex flex-col gap-5 py-10">
                    <Card.Header className="p-0 flex flex-col items-start gap-3">
                        <Card.Title className="text-3xl font-bold">
                            {tutorName}
                        </Card.Title>

                        <Card.Description className="text-base text-gray-500">
                            {subject}
                        </Card.Description>
                    </Card.Header>

                    <div className="space-y-3">
                        <p>
                            <span className="font-semibold">Institution:</span> {institution}
                        </p>
                        <p>
                            <span className="font-semibold">Experience:</span> {experience}
                        </p>
                        <p>
                            <span className="font-semibold">Location:</span> {location}
                        </p>

                        <p>
                            <span className="font-semibold">Available & Time Slot:</span> {dayAndTime}
                        </p>

                        <p>
                            <span className="font-semibold">Remaining Slot:</span> {slot}
                        </p>

                        <p>
                            <span className="font-semibold">Hourly Fee:</span> ৳{fee}
                        </p>
                        <p>
                            <span className="font-semibold">Session Start Date:</span> {departureDate}
                        </p>
                    </div>

                    {!canBook && (
                        <p className="text-red-500 font-medium">
                            {!isDateAllowed
                                ? "Booking is not available yet for this tutor"
                                : "No available slots left"}
                        </p>
                    )}
                    <BookSessionModal tutor={tutor}
                        disabled={!canBook}
                         />
                </div>
            </Card>
        </div>
    );
};

export default TutorDetailsPage;
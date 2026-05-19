import { Button, Card, CloseButton } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TutorDetailsPage = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`http://localhost:5000/tutor/${id}`)
    const tutor = await res.json()

    const { tutorName, imageUrl, subject, dayAndTime, departureDate, fee, institution } = tutor;

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
                <div className="flex flex-col gap-5">
                    <Card.Header className="p-0 flex flex-col items-start gap-3">
                        <Card.Title className="text-3xl font-bold">
                            {tutorName}
                        </Card.Title>

                        <Card.Description className="text-base text-gray-500">
                            Experienced {subject} tutor with interactive teaching methods.
                        </Card.Description>
                    </Card.Header>

                    <div className="space-y-3">
                        <p>
                            <span className="font-semibold">Subject:</span> {subject}
                        </p>
                        <p>
                            <span className="font-semibold">Institution:</span>{" "}{institution}
                        </p>

                        <p>
                            <span className="font-semibold">Schedule:</span>{" "}
                            {dayAndTime}
                        </p>

                        <p>
                            <span className="font-semibold">Session Start:</span>{" "}
                            {departureDate}
                        </p>

                        <p>
                            <span className="font-semibold">Fee:</span> ৳{fee}
                        </p>
                    </div>

                    <Card.Footer className="p-0 pt-4">
                        <Button variant='ghost' className="rounded-xl border">
                            Apply Now
                        </Button>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    );
};

export default TutorDetailsPage;
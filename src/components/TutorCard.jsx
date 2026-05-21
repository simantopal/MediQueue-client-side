import React from 'react';
import { Button, Card } from "@heroui/react";
import Image from 'next/image';
import Link from 'next/link';

const TutorCard = ({ tutor }) => {
    const { _id, tutorName, imageUrl, subject, dayAndTime, departureDate, fee } = tutor;
    return (
        <div>
            <Card className='shadow-md hover:shadow-xl border'>
                <div>
                    <Image
                        alt={tutorName}
                        src={imageUrl}
                        width={500}
                        height={300}
                        className="w-full h-60 rounded-2xl"
                    />
                </div>

                <Card.Header className="flex items-start gap-2 p-3">
                    <Card.Title className="text-xl font-bold">{tutorName}</Card.Title>

                    <Card.Description className="text-sm text-gray-500">Subject: {subject}</Card.Description>

                    <div className="space-y-1 text-sm">
                        <p><span className="font-semibold">Available:</span> {dayAndTime}</p>
                        <p><span className="font-semibold">Session Start Date:</span> {departureDate}</p>
                        <p><span className="font-semibold">Fee:</span> ৳{fee}/hr</p>
                    </div>
                </Card.Header>

                <Card.Footer className="p-5 pt-0">
                    <Link href={`/tutor/${_id}`} className="block w-full">
                        <Button fullWidth className="rounded-xl bg-cyan-800 hover:bg-cyan-700 text-white">Book Session</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default TutorCard;
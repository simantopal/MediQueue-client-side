import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className="container mx-auto my-15 bg-gray-300">
            <h2 className="text-3xl font-bold text-center text-blue-900">
                Why Choose MediQueue?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">

                <div className="p-6 border rounded-xl shadow-sm text-center hover:shadow-md bg-gray-100">
                    <h3 className="font-bold mb-2">Easy Booking</h3>
                    <p className="text-sm text-gray-600">
                        Book tutors instantly with a smooth and simple interface.
                    </p>
                </div>

                <div className="p-6 border rounded-xl shadow-sm text-center hover:shadow-md bg-gray-100">
                    <h3 className="font-bold mb-2">Verified Tutors</h3>
                    <p className="text-sm text-gray-600">
                        All tutors are verified to ensure quality education.
                    </p>
                </div>

                <div className="p-6 border rounded-xl shadow-sm text-center hover:shadow-md bg-gray-100">
                    <h3 className="font-bold mb-2">Flexible Scheduling</h3>
                    <p className="text-sm text-gray-600">
                        Choose time slots that fit your daily routine.
                    </p>
                </div>

                <div className="p-6 border rounded-xl shadow-sm text-center hover:shadow-md bg-gray-100">
                    <h3 className="font-bold mb-2">Affordable Pricing</h3>
                    <p className="text-sm text-gray-600">
                        Find tutors that match your budget easily.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default WhyChooseUs;
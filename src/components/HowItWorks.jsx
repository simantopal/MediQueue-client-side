import React from 'react';

const HowItWorks = () => {
    return (
        <div className='mx-5'>
            <div className="container mx-auto my-15">

            <h2 className="text-3xl font-bold text-center mb-10 text-indigo-500">
                How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">

                <div className="p-6 border rounded-xl text-center bg-base-100 shadow hover:shadow-xl">
                    <span className="text-blue-500 w-8 h-8 rounded-full text-center text-sm font-bold">
                        01
                    </span>
                    <h3 className="font-bold mt-4 mb-2">Search Tutor</h3>
                    <p className="text-sm text-gray-600">
                        Browse tutors by subject and availability.
                    </p>
                </div>

                <div className="p-6 border rounded-xl text-center bg-base-100 shadow hover:shadow-xl">
                    <span className="text-blue-500 w-8 h-8 rounded-full text-sm font-bold">
                        02
                    </span>
                    <h3 className="font-bold mt-4 mb-2">Select Slot</h3>
                    <p className="text-sm text-gray-600">
                        Choose your preferred date and time.
                    </p>
                </div>

                <div className="p-6 border rounded-xl text-center bg-base-100 shadow hover:shadow-xl">
                    <span className="text-blue-500 w-8 h-8 rounded-full text-sm font-bold">
                        03
                    </span>
                    <h3 className="font-bold mt-4 mb-2">Book Session</h3>
                    <p className="text-sm text-gray-600">
                        Confirm booking with one click.
                    </p>
                </div>

                <div className="p-6 border rounded-xl text-center bg-base-100 shadow hover:shadow-xl">
                    <span className="text-blue-500 w-8 h-8 rounded-full text-sm font-bold">
                        04
                    </span>
                    <h3 className="font-bold mt-4 mb-2">Start Learning</h3>
                    <p className="text-sm text-gray-600">
                        Join session and start learning instantly.
                    </p>
                </div>

            </div>
        </div>
        </div>
    );
};

export default HowItWorks;
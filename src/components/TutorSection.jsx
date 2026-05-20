import React from 'react';
import TutorCard from './TutorCard';

const TutorSection = async () => {
    const res = await fetch("http://localhost:5000/featured-tutors");
    const tutors = await res.json();
    return (
        <div className='container mx-auto my-15'>
            <div className="text-3xl font-bold text-center mt-15 text-blue-900">
                Featured Tutors
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    tutors.map(tutor => (
                        <TutorCard
                            key={tutor._id}
                            tutor={tutor}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default TutorSection;
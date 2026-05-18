import React from 'react';

const TutorPage = async() => {
    const res = await fetch('http://localhost:5000/tutor')
    const tutor = await res.json()

    return (
        <div>
            <h1>All tutors</h1>
            <div>
                {
                    tutor.map(tutor => <div key={tutor._id}>
                        {tutor.tutorName}
                    </div>)
                }
            </div>
        </div>
    );
};

export default TutorPage;
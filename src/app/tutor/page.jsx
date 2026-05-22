import TutorCard from "@/components/TutorCard";
import SearchFilter from "@/components/SearchFilter";

export const metadata = {
    title: "All Tutors",
};

const getTutors = async (search, startDate, endDate) => {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/tutor?${params.toString()}`,
        { cache: "no-store" }
    );

    return res.json();
};

const TutorPage = async ({ searchParams }) => {
    const params = await searchParams;
    const search = params?.search || "";
    const startDate = params?.startDate || "";
    const endDate = params?.endDate || "";

    const tutors = await getTutors(search, startDate, endDate);

    return (
        <div className="min-h-screen my-15">

            <h1 className="text-center text-3xl font-bold text-indigo-500 mb-3">
                All Tutors
            </h1>

            <div className="flex justify-center mb-4">
                <SearchFilter
                    search={search}
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4 mt-10 mb-16">
                {tutors?.length === 0 ? (
                    <p className="text-center text-gray-500 mt-10">
                        No tutors found
                    </p>
                ) : (
                    tutors.map((tutor) => (
                        <TutorCard key={tutor._id} tutor={tutor} />
                    ))
                )}
            </div>
        </div>
    );
};

export default TutorPage;
"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchFilter = ({ search, startDate, endDate }) => {
  const router = useRouter();

  const [searchText, setSearchText] = useState(search || "");
  const [start, setStart] = useState(startDate || "");
  const [end, setEnd] = useState(endDate || "");

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (searchText) params.set("search", searchText);
    if (start) params.set("startDate", start);
    if (end) params.set("endDate", end);

    router.push(`/tutor?${params.toString()}`);
  };

  const clearFilter = () => {
    setSearchText("");
    setStart("");
    setEnd("");
    router.push("/tutors");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="container mx-auto px-4 flex flex-col md:flex-row gap-3 items-center justify-center"
    >
      <input
        type="text"
        placeholder="Search tutor name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border px-4 py-3 rounded-md w-full md:w-1/3"
      />

      <input
        type="date"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        className="border px-4 py-3 rounded-md"
      />

      <input
        type="date"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        className="border px-4 py-3 rounded-md"
      />

      <Button
        type="submit"
        className="bg-blue-900 text-white px-5 py-3 rounded-md hover:bg-blue-900"
      >
        Search
      </Button>

      <Button
        onClick={clearFilter}
        className="bg-gray-300 px-5 py-3 rounded-md hover:bg-gray-400"
      >
        Clear
      </Button>
    </form>
  );
};

export default SearchFilter;
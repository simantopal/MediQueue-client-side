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

    router.push("/tutor");
  };

  return (
    <form onSubmit={handleSearch} className="container mx-auto px-4 py-6  flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-center">
      <input type="text" placeholder="Search tutor name..." value={searchText} onChange={(e) => setSearchText(e.target.value)}className="border px-4 py-3 rounded-xl w-full lg:w-80outline-none"/>

      <input
        type="date"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        className="
          border 
          px-4 
          py-3 
          rounded-xl 
          w-full 
          md:w-full 
          lg:w-auto
        "
      />
      
      <input
        type="date"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        className="
          border 
          px-4 
          py-3 
          rounded-xl 
          w-full 
          md:w-full 
          lg:w-auto
        "
      />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

        <Button
          type="submit"
          className="
            bg-blue-900 
            text-white 
            px-6 
            py-3 
            rounded-xl
            w-full
          "
        >
          Search
        </Button>

        <Button
          type="button"
          onClick={clearFilter}
          className="
            bg-gray-300 
            px-6 
            py-3 
            rounded-xl
            w-full
          "
        >
          Clear
        </Button>

      </div>
    </form>
  );
};

export default SearchFilter;
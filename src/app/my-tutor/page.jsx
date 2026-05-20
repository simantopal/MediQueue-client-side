"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const MyTutorPage = () => {
  const router = useRouter();
  const { data: session, isLoading } = authClient.useSession();

  useEffect(() => {
    if (!isLoading && !session?.user) {
      router.replace("/login");
    }
  }, [session, isLoading, router]);

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        Loading...
      </div>
    );
  }

  if (!session?.user) return null;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">My Tutor Page</h1>

      <p className="mt-4 text-gray-600">
        This page is only visible for logged in users.
      </p>
    </div>
  );
};

export default MyTutorPage;
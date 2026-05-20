import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 my-15">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold mt-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-500 mt-2 mb-3">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link href="/">
          <Button className="btn btn-primary">
            Back To Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
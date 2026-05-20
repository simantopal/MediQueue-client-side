import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center p-8">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold mt-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-500 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link href="/">
          <button className="btn btn-primary mt-6">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}
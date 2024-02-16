import Link from "next/link";

export default function Custom404() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-green-700 mb-4">404 - Repository Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The repository you are looking for does not exist.</p>
          <Link href="/">
            <p className="text-blue-500 hover:underline">Go back to Home page</p>
          </Link>
        </div>
      </div>
  );
}

import { Inter } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [repoOwner, setRepoOwner] = useState('');
  const [repoName, setRepoName] = useState('');

  const router = useRouter();

  const handleDisplayIssues = (e) => {
    e.preventDefault();
    if (repoOwner && repoName) {
      router.push(`/issues/${repoOwner}/${repoName}`);
    } 
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">View GitHub Repo Issues</h1>
        <form onSubmit={handleDisplayIssues}>
          <div className="my-10">
            <div className="mb-4">
              <label htmlFor="repoOwner" className="block text-gray-700">Repository Owner:</label>
              <input
                type="text"
                id="repoOwner"
                className="w-full border rounded py-2 px-3"
                value={repoOwner}
                onChange={(e) => setRepoOwner(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="repoName" className="block text-gray-700">Repository Name:</label>
              <input
                type="text"
                id="repoName"
                className="w-full border rounded py-2 px-3"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 font-bold"
            >
              Display Issues
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

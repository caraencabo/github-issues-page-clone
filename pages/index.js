import { Inter } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import Issues from "@/components/Issues";
import Dropdown from "@/components/Dropdown";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const dropdownOptions = [
    { label: "Open issues and pull requests", link: "#" },
    { label: "Your issues", link: "#" },
    { label: "Your pull requests", link: "#" },
    { label: "Everything assigned to you", link: "#" },
  ];

  // for test
  const repositoryOwner = "Cara";
  const repositoryName = "Github Issues Page Clone";

  return (
    <div className="h-screen">
      <div className="m-8">
          <p className="text-gray-600 text-3xl font-bold">{repositoryName}</p>
          <h3 className="text-gray-600 text-lg">by {repositoryOwner}</h3>
      </div>
      <div className="flex justify-between flex-col-reverse md:flex-row items-end m-8">
        <div className="flex justify-start flex-auto md:my-0 w-full md:w-auto border border-gray-300 rounded mr-4">
          <div className="relative inline-block text-left">
            <Dropdown buttonText="Filter" options={dropdownOptions} />
          </div>

          {/* search */}
          <div className="relative flex-1">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <CiSearch />
            </div>
            <input
              type="text"
              className="w-full p-2 pl-10 focus:border-blue-500 border border-gray-300 focus:outline-none"
              placeholder="Search"
              style={{ backgroundColor: "#f6f8fa" }}
            />
          </div>
        </div>

         {/* labels */}
         <button
          className="text-black focus:outline-none font-medium text-sm p-2.5 mr-2 text-center inline-flex items-center border border-gray-300 rounded"
          type="button"
          style={{ backgroundColor: "#f6f8fa" }}
        >
          <GoTag className="mr-1" />
          Labels
        </button>
        <button className="bg-green-700 hover:bg-green-800 text-white text-sm font-medium p-2.5 rounded">
          New Issue
        </button>
      </div>

      {/* box container */}
      <div className="border border-gray-300 rounded mx-8"> 
        <Issues />
      </div>
    </div>
  );
}

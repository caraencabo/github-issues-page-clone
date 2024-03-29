import { CiSearch } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";

export default function FilterSearch({ repoName, repoOwner, onFilterChange }) {

    const dropdownOptions = [
        { label: "All", link: "#", filter: "all" },
        { label: "Open", link: "#", filter: "open" },
        { label: "Closed", link: "#", filter: "closed" },
    ];

    const handleFilterChange = (filter) => {
        onFilterChange(filter);
    };

    return (
        <div>
            <div className="m-8">
                <p className="text-gray-600 text-3xl font-bold">{repoName}</p>
                <h3 className="text-gray-600 text-lg">by {repoOwner}</h3>
            </div>
            <div className="flex justify-between flex-col-reverse md:flex-row items-end m-8">
                <div className="flex justify-start flex-auto md:my-0 w-full md:w-auto border border-gray-300 rounded mr-4">
                <div className="relative inline-block text-left">
                    <Dropdown buttonText="Filter" options={dropdownOptions} onSelect={handleFilterChange} />
                </div>

                <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <CiSearch />
                    </div>
                    <input
                    type="text"
                    className="w-full p-2 pl-10 focus:border-blue-500 border border-gray-300 focus:outline-none"
                    placeholder="Search all issues"
                    style={{ backgroundColor: "#f6f8fa" }}
                    />
                </div>
                </div>

                <button
                className="text-black focus:outline-none font-medium text-sm p-2.5 mr-2 text-center inline-flex items-center border border-gray-300 rounded"
                type="button"
                style={{ backgroundColor: "#f6f8fa" }}
                >
                    <GoTag className="mr-1" />
                    Labels
                </button>
                <Link href="/" className="bg-green-700 hover:bg-green-800 text-white text-sm font-medium p-2.5 rounded">
                    View Issues
                </Link>
            </div>
        </div>
    );
}

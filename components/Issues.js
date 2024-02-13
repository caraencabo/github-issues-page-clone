import Dropdown from "./Dropdown";
import IssueList from "./IssueList";
import Link from "next/link";
import OpenIcon from "./OpenIcon";
import { useState, useEffect } from "react";
import FilterSearch from "./FilterSearch";


export default function Issues() {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openCount, setOpenCount] = useState(0);
    const [closedCount, setClosedCount] = useState(0);
    
    const [repoOwner, setRepoOwner] = useState("");
    const [repoName, setRepoName] = useState("");

    // test fetch - vue repo
    const fetchData = async () => {
        try {
            const response = await fetch("https://api.github.com/repos/vuejs/vue/issues");
            const data = await response.json();
            setIssues(data);

            // repo name and owner
            const urlParts = response.url.split("/");
            const ownerIndex = urlParts.indexOf("repos") + 1;
            setRepoOwner(urlParts[ownerIndex]);
            setRepoName(urlParts[ownerIndex + 1]);

            // count open and closed
            const openIssues = data.filter((issue) => issue.state === "open").length;
            const closedIssues = data.filter((issue) => issue.state === "closed").length;
            setOpenCount(openIssues);
            setClosedCount(closedIssues);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    const dropdownOptions = [
        { label: "Newest", link: "#" },
        { label: "Oldest", link: "#" },
        { label: "Recently updated", link: "#" },
        { label: "Least recently updated", link: "#" },
    ];

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    

    return(
        <div>
            <FilterSearch repoName={repoName} repoOwner={repoOwner}/>
            <div className="border border-gray-300 rounded mx-8">
                <div className="flex items-center border-b border-gray-300 p-4" style={{ backgroundColor: "#f6f8fa" }}>
                
                    <Link href="/" className="flex items-center mr-4">
                        <OpenIcon height="16" width="16" />
                        <p className="text-sm">{openCount} Open</p>
                    </Link>
            
                    <Link href="/" className="flex items-center">
                        <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            className="mr-2"
                        >
                            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                        <p className="text-sm">{closedCount} Closed</p>
                    </Link>
                    <div className="ml-auto">
                        <Dropdown buttonText="Sort" options={dropdownOptions} />
                    </div>
                </div>

                {issues.length === 0 ? (
                    <div className="flex items-center justify-center flex-col m-20">
                        <OpenIcon width="16" height="16" />
                        <h2 className="text-xl font-bold mb-8">Welcome to issues!</h2>
                        <p className="text-gray-600 block">
                            Issues are used to track todos, bugs, feature requests, and more. As
                            issues are created, they’ll appear here in a searchable and filterable
                            list. To get started, you should <Link href="/">create an issue.</Link>
                        </p>
                    </div>
                    ) : (
                    issues.map((issue) => (
                        <IssueList
                            key={issue.id}
                            title={issue.title}
                            number={issue.number}
                            dateOpened={formatDate(issue.created_at)}
                            openedBy={issue.user.login}
                            labelName={issue.labels.map((label) => label.name)}
                            labelColor={issue.labels.map((label) => label.color)}
                        />
                    ))
                    )}
            </div>
        </div>
    );
}

import Dropdown from "./Dropdown";
import IssueList from "./IssueList";
import Link from "next/link";
import OpenIcon from "./OpenIcon";

export default function Issues() {
    // dummy data for ui testing
    const issues = [
        {
            title: "'slot' does not change normally in transition in 2.7.14",
            id: 13043,
            dateOpened: "July 2, 2023",
            openedBy: "iujunqiang29",
            status: "open",
            labelName: "bug",
            labelColor: "b60205",
        },
        {
            title: "In notify, why is the return not checked when subs is empty",
            id: 13019,
            dateOpened: "May 19, 2023",
            openedBy: "lakei-edward",
            status: "closed",
        },
    ];

    const dropdownOptions = [
        { label: "Newest", link: "#" },
        { label: "Oldest", link: "#" },
        { label: "Recently updated", link: "#" },
        { label: "Least recently updated", link: "#" },
    ];

    // test
    const openCount = issues.filter((issue) => issue.status === "open").length;
    const closedCount = issues.filter((issue) => issue.status === "closed").length;

    return(
        <div>
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
                        id={issue.id}
                        dateOpened={issue.openedOn}
                        openedBy={issue.openedBy}
                        labelName={issue.labelName}
                        labelColor={issue.labelColor}
                    />
                ))
                )}
        </div>
    );
}

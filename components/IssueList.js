import Link from "next/link";
import OpenIcon from "./OpenIcon";
import DateFormatter from "./DateFormatter";
import { useRouter } from "next/router";
import ClosedIcon from "./ClosedIcon";

export default function IssueList({ title, number, dateOpened, openedBy, labelName, labelColor, state }) {
  const router = useRouter();
  const owner = router.query.owner
  const name = router.query.name

  return (
    <div className="border-b border-gray-300 p-4">
      <div className="flex items-center">
        <div className="flex-shrink-0 pl-3">
          {state === "open" ? (
            <OpenIcon height="16" width="16" color="green" />
          ) : (
            <ClosedIcon height="16" width="16" color="red" />
          )}
        </div>
        <Link href={`/issues/${owner}/${name}/${number}`}>
          <p className="text-md font-bold">{title}</p>
        </Link>
        <div className="flex space-x-2">
          <Link
            href="/"
            className="px-2 py-1 text-white rounded-xl text-xs ml-2"
            style={{ backgroundColor: `#${labelColor}` }}
          >
            {labelName}
          </Link>
        </div>
      </div>

      <div className="pl-8">
        <p className="text-gray-600 text-xs">
          #{number} opened on <DateFormatter dateString={dateOpened} /> by {openedBy}
        </p>
      </div>
    </div>
  );
}

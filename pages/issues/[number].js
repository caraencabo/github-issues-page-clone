import { useRouter } from 'next/router';
import Link from 'next/link';
import OpenIcon from '@/components/OpenIcon';
import ClosedIcon from '@/components/ClosedIcon';
import { useState, useEffect } from 'react';
import DateFormatter from '@/components/DateFormatter';

export default function IssueDetailPage() {
  const router = useRouter();
  const number = router.query.number;
  const [issueData, setIssueData] = useState(null);
  const [repoOwner, setRepoOwner] = useState("vuejs");
  const [repoName, setRepoName] = useState("vue");

  useEffect(() => {
    const fetchIssueData = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues/${number}`);
        const data = await response.json();
        setIssueData(data);
      } catch (error) {
        console.error('Error fetching issue data:', error);
      }
    };

    if (number) {
      fetchIssueData();
    }
  }, [number]);

  if (!issueData) {
    return <div>Loading...</div>; 
  }

  const { title, labels, state, user, created_at, body } = issueData;

  return (
    <div className="mx-20 my-5">
      <div className="border-b border-gray-300">
        <div className="mb-3">
          <div className="flex items-center">
            <h1 className="mr-4 text-bold text-4xl">{title}</h1>
            <p className="font-thin text-2xl">#{number}</p>

            {labels.map((label) => (
              <Link
                key={label.id}
                href="/"
                className="px-2 py-1 text-white rounded-xl text-xs ml-4"
                style={{ backgroundColor: `#${label.color}` }}
              >
                {label.name}
              </Link>
            ))}
          </div>
          <div className="mt-2 flex items-center">
                
           
            <div style={{ backgroundColor: state === 'open' ? 'green' : '#8250df' }} className="rounded-full p-2 text-white max-w-20 flex items-center text-center">
              {state === 'open' ? (
                <OpenIcon width="16" height="16" color="white" />
               
              ) : (
                <ClosedIcon width="16" height="16" color="white" />
              )}
              <p>{state === 'open' ? 'Open' : 'Closed'}</p>
            </div>

            <div className="ml-5">
              <p className="font-light text-sm">{`${user.login} opened this issue on `}<DateFormatter dateString={created_at} /></p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 rounded mt-8">
        <div className="flex items-center border-b border-gray-300 p-4 ml-5" style={{ backgroundColor: "#f6f8fa" }}>
          <p className="font-light text-sm">
            <strong className="font-semibold">{user.login}</strong> commented on <DateFormatter dateString={created_at} />
          </p>
        </div>
        <div className="m-10">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}

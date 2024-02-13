import { useRouter } from 'next/router';
import Link from 'next/link';
import OpenIcon from '@/components/OpenIcon';

// not yet dynamic
export default function IssueDetailPage() {
  const router = useRouter();
  const number = router.query.number;


  return (
    <div className="mx-20 my-5">
      {/* header area */}
      <div className="border-b border-gray-300">
        <div className="mb-3">
          <div className="flex items-center">
            <h1 className="mr-4 text-bold text-4xl">Title</h1>
            <p className="font-thin text-2xl">#{number}</p>
            {/* labels */}
            <Link
                href="/"
                className="px-2 py-1 text-white rounded-xl text-xs ml-4"
                style={{ backgroundColor: "#b60205" }}
              >
                bug
            </Link>
          </div>
          <div className="mt-2 flex items-center">
            <div className="bg-green-600 rounded-full p-2 text-white max-w-20 flex items-center text-center">
              <OpenIcon width="16" height="16" color="white" />
              <p>Open</p>
            </div>
            <div className="ml-5">
              <p className="font-light text-sm">author opened this issue on Feb 13, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* info area */}
      <div className="border border-gray-300 rounded mt-8">
        <div className="flex items-center border-b border-gray-300 p-4 ml-5" style={{ backgroundColor: "#f6f8fa" }}>
          <p className="font-light text-sm"><strong className="font-semibold">author</strong> commented on Feb 13, 2024</p>
        </div>
        <div className="m-10">
          {/* for ui testing */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit nisi, sagittis sed turpis id, fermentum dignissim justo. 
            Donec auctor nulla sed risus interdum venenatis. Vestibulum facilisis cursus neque et volutpat. Pellentesque eu rhoncus metus. 
            Nunc congue pellentesque sapien sed laoreet. Cras a gravida arcu. Aenean imperdiet eleifend turpis, vel auctor ex. Integer fringilla 
            eleifend lacus vel interdum. Ut mi quam, finibus ut malesuada imperdiet, vulputate ac ligula.</p>
        </div>

      </div>

    </div>
  );
}

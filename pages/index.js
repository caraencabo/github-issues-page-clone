import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className="h-screen">
        <Link href="/issues">
          Browse issues
        </Link>
    </div>
  );
}

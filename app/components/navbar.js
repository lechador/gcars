import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import Logout from "./logout";


export default async function NavbarServer () {
    const session = await getServerSession(authOptions)
    console.log(JSON.stringify(session, null, 2))
    return (
        <nav className="bg-black text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <img src='/logo.png' alt='logo' width={120} />
          </Link>

          {/* Menu Items - Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href='/' className="hover:text-yellow-500 text-xl">
              მთავარი გვერდი
            </Link>
            <Link href='/about' className="hover:text-yellow-500 text-xl">
              ჩვენს შესახებ
            </Link>
            <Link href='/dealer' className="hover:text-yellow-500 text-xl">
              გახდი დილერი
            </Link>
            {session ? (
              <Logout />
            ) : (
              <Link href='/dashboard' className="hover:text-yellow-500 text-xl">
                 შესვლა
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
};

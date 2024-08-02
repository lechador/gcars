import Link from "next/link";


export default async function NavbarServer () {
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
              <Link href='/dashboard' className="hover:text-yellow-500 text-xl">
                 კაბინეტში შესვლა
              </Link>
          </div>
        </div>
      </nav>
    );
};

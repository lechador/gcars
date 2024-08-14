'use client'
import Link from "next/link";
import { IoCarSportSharp } from "react-icons/io5";
import { useAuth } from "../AuthContext";
import { FaUserAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";



export default function AdminNavbar({children}) {
    const { authState, logout } = useAuth();
    const pathName = usePathname()
  return (
    <div className="sticky flex h-screen flex-row gap-4 overflow-y-auto sm:overflow-x-hidden">
      <aside className="sidebar-sticky sidebar justify-start">
        
        <section className="sidebar-content min-h-[20rem]">
          <nav className="menu rounded-md">
            <section className="menu-section px-4">
              <span className="menu-title">მთავარი მენიუ</span>
              <ul className="menu-items">
                <li className="menu-item">
                  <Link href="/" className="text-white text-sm flex items-center hover:bg-gray-700 rounded px-4 py-3 transition-all">
                    <span>საიტზე გადასვლა</span>
                  </Link>
                </li>
                {
                  authState.role == 'superuser' ? (
                    <>
                    <li className={`menu-item ${pathName == '/admin' && 'menu-active'}`}>
                      <FaUserAlt className="mr-4"/>
                      <Link href="/admin" className="text-white text-sm flex items-center hover:bg-gray-700 rounded px-4 py-3 transition-all">
                        <span>დილერები</span>
                      </Link>
                    </li>
                    <li className={`menu-item ${pathName == '/admin/cars' && 'menu-active'}`}>
                      <IoCarSportSharp className="mr-4"/>
                      <Link href="/admin/cars" className="text-white text-sm flex items-center hover:bg-gray-700 rounded px-4 py-3 transition-all">
                        <span>ავტომობილები</span>
                      </Link>
                    </li>
                    </>
                  ) : (
                  <li className={`menu-item ${pathName == '/admin/dealer' && 'menu-active'}`}>
                    <IoCarSportSharp className="mr-4"/>
                    <Link href="/admin/dealer" className="text-white text-sm flex items-center hover:bg-gray-700 rounded px-4 py-3 transition-all">
                      <span>ავტომობილები</span>
                    </Link>
                  </li>
                  )
                }
              </ul>
            </section>
          </nav>
        </section>
        <section className="sidebar-footer bg-gray-2 pt-2">
          <div className="divider my-0"></div>
          <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
            <label className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4" tabIndex="0">
              <div className="flex flex-row gap-4 p-4">

                <div className="flex flex-col">
                  <span>{authState.role && authState.role}</span>
                </div>
              </div>
            </label>
            <div className="dropdown-menu-right-top dropdown-menu ml-2">
              <a className="dropdown-item text-sm">Profile</a>
              <a tabIndex="-1" className="dropdown-item text-sm" onClick={logout}>გასვლა</a>
            </div>
          </div>
        </section>
      </aside>
      <div className="w-full p-6">
        {children}
      </div>
    </div>
  )
}

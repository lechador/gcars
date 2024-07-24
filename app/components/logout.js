'use client'
import { signOut } from "next-auth/react"


export default function Logout() {
  return (
    <button className="hover:text-yellow-500 text-xl" onClick={() => signOut()}>
        გამოსვლა
    </button>
  )
}

import { getServerSession } from "next-auth/next"
import Navbar from './navbar';
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function NavbarServer () {
    const session = await getServerSession(authOptions)
    session ? console.log("ies") : console.log("nou")
    return (
        <Navbar session={JSON.stringify(session, null, 2)} />
    );
};

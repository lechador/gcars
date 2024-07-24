import { getServerSession } from "next-auth"

export default function DashboardPage() {
  const session = getServerSession()
  console.log(session)
  return (
    <div>page</div>
  )
}


import Link from "next/link";

export default function Menu() {

  

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            
            <Link href="/register">Registration</Link>
            <Link href="/participants">Participants</Link>
            <Link href="#">Rules</Link>
            <Link href="#">Accomodation</Link>
            <Link href="/nsOpen">NS Open</Link>
        </div>
    </nav>
  )
}

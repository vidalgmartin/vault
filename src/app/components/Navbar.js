'use client'

import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Navbar() {
    const router = useRouter()

    const goToLogin = () => {
        router.push('/account/login')
    }

    return (
        <nav>
            <span>Logo</span>
            <Link href="/">
                <button>Home</button>
            </Link>
            <button onClick={goToLogin}>Login</button>
        </nav>
    )
}
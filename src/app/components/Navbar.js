'use client'

import { useRouter } from "next/navigation"
import Link from "next/link"
import './components.css'

export default function Navbar() {
    const router = useRouter()

    const goToLogin = () => {
        router.push('/account/login')
    }

    return (
        <nav>
            <Link href="/">
                <span>Logo</span>
            </Link>
            <button onClick={goToLogin}>Login</button>
        </nav>
    )
}
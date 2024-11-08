import Link from "next/link"
import '../account.css'

export default function Login() {

    return (
        <div className="auth-page">

            <form>
                <div className="auth-labels">
                    <p>Login</p>

                    <Link href="/account/signup">
                        <span>Signup</span>
                    </Link>
                </div>

                <label>Email:</label>
                <input
                    type="email" 
                />

                <label>Password:</label>
                <input 
                    type="password"
                />
            </form>

        </div>
    )
}
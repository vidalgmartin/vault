import Link from "next/link"

export default function Signup() {

    return (
        <div className="auth-page">
        
            <form>
                <div className="auth-labels">
                    <Link href="/account/login">
                        <span>Login</span>
                    </Link>

                    <p>Signup</p>
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
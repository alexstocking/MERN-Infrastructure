import { useState } from 'react'
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

export default function AuthPage({setUser}) {
    const [showLoginForm, setShowLoginForm] = useState(false)

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm)
    }

    return(
        <main>
            <h1>AuthPage</h1>
            {showLoginForm ? (
                <LoginForm setUser={setUser} />
            ) : (
            <SignUpForm setUser={setUser} />
            )}
            <button onClick={toggleForm}>
                {showLoginForm ? 'Show Sign Up Form!' : 'Already a user? Login!'}
            </button>
        </main>
    ) 
}
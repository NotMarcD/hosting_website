import Link from "next/link"

export default function About() {
    return <div>
        <h1>About us</h1>
        <Link href="/">
            <button>
                Go to Home Page
            </button>
        </Link>
    </div>
}
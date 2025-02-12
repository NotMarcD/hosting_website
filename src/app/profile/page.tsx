import Link from "next/link"

export default function Profile() {
    return <div>
            <h1>Profile page</h1>
            <Link href="/">
                <button>
                    Go to Home Page
                </button>
            </Link>
        </div>
}
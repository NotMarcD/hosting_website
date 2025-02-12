import Link from 'next/link'

export default function Home() {
    return <>
        <h1>Welcome home!</h1>
        <Link href="/about">
            <button>
                About page
            </button>
        </Link>
        <Link href="/profile">
            <button>
                Profile page
            </button>
        </Link>
    </>
}
import Link from 'next/link'

export default function NotFound() {
    return (
    <div>
        <h1>Not Found LOL!!!!</h1>
        <Link href="/">
            <button>
                Go to Home Page
            </button>
        </Link>
    </div>
        
    ) 
}
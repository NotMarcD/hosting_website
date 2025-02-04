export const metadata = {
    title: "Next.js Project Hoempage",
    description: "Project homepage for showcasing the projects of our collaboration"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
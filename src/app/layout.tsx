export const metadata = {
    title: "Next.js Project Homepage",
    description: "Project homepage for showcasing the projects of our collaboration"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <header
                    style = {{

                    }}
                >
                    <p>Header type spill</p>
                </header>
            
                {children}
                    
                <footer
                    style = {{

                    }}
                >
                    <p>Footer type spill</p>
                </footer>
            </body>
        </html>
    )
}
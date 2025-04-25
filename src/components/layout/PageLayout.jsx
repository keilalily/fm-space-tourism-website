import Header from "../Header";

export default function PageLayout({ backgroundImage, children }) {
    return (
        <div
            className='flex flex-col items-center w-full min-h-screen bg-cover'
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            <Header />
            <main className='flex flex-col flex-1 w-full h-full'>
                {children}
            </main>
        </div>
    )
}
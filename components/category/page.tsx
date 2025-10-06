import Link from "next/link";
const CategoryComponent = () => {
    return (
        <section className="w-full py-12 min-h-[70vh]">
            <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                    <div className="grid gap-1">
                        <h1 className="text-2xl font-bold tracking-tight">Shop by Category</h1>
                        <p className="text-muted-foreground">Browse our wide selection of products by category.</p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="grid gap-4 relative group">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View</span>
                        </Link>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-primary rounded-full p-4">
                                <ShirtIcon className="h-8 w-8 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold">Clothing</h3>
                        </div>
                    </div>
                    <div className="grid gap-4 relative group">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View</span>
                        </Link>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-secondary rounded-full p-4">
                                <FootprintsIcon className="h-8 w-8 text-secondary-foreground" />
                            </div>
                            <h3 className="font-semibold">Shoes</h3>
                        </div>
                    </div>
                    <div className="grid gap-4 relative group">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View</span>
                        </Link>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-accent rounded-full p-4">
                                <ShoppingBagIcon className="h-8 w-8 text-accent-foreground" />
                            </div>
                            <h3 className="font-semibold">Bags</h3>
                        </div>
                    </div>
                    <div className="grid gap-4 relative group">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View</span>
                        </Link>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-muted rounded-full p-4">
                                <WatchIcon className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="font-semibold">Accessories</h3>
                        </div>
                    </div>
                    <div className="grid gap-4 relative group">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View</span>
                        </Link>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-card rounded-full p-4">
                                <CircuitBoardIcon className="h-8 w-8 text-card-foreground" />
                            </div>
                            <h3 className="font-semibold">Electronics</h3>
                        </div>
                    </div>
                    <div className="grid gap-4 relative group">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View</span>
                        </Link>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-primary rounded-full p-4">
                                <HomeIcon className="h-8 w-8 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold">Home</h3>
                        </div>
                    </div>
                    <div className="grid gap-4 relative group">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View</span>
                        </Link>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-secondary rounded-full p-4">
                                <GemIcon className="h-8 w-8 text-secondary-foreground" />
                            </div>
                            <h3 className="font-semibold">Beauty</h3>
                        </div>
                    </div>
                    <div className="grid gap-4 relative group">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View</span>
                        </Link>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-accent rounded-full p-4">
                                <ClubIcon className="h-8 w-8 text-accent-foreground" />
                            </div>
                            <h3 className="font-semibold">Sports</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default CategoryComponent;


function CircuitBoardIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M11 9h4a2 2 0 0 0 2-2V3" />
            <circle cx="9" cy="9" r="2" />
            <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
            <circle cx="15" cy="15" r="2" />
        </svg>
    )
}


function ClubIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
            <path d="M12 17.66L12 22" />
        </svg>
    )
}


function FootprintsIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
            <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
            <path d="M16 17h4" />
            <path d="M4 13h4" />
        </svg>
    )
}


function GemIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 3h12l4 6-10 13L2 9Z" />
            <path d="M11 3 8 9l4 13 4-13-3-6" />
            <path d="M2 9h20" />
        </svg>
    )
}


function HomeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function ShirtIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
    )
}


function ShoppingBagIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
    )
}


function WatchIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="6" />
            <polyline points="12 10 12 12 13 13" />
            <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
            <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
        </svg>
    )
}
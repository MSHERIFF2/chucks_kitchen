import Navbar from "@/components/navbar"
export default function HomePageLayout({children,}: {children: React.ReactNode}){
    return (
        <div className="flex flex-col  min-h-screen">
            <Navbar/>
            {children}
        </div>
    )
}
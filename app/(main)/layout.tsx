import Navbar from "@/components/shared/Navbar";
import SidebarLeft from "@/components/shared/SidebarLeft";
import SidebarRight from "@/components/shared/SidebarRight";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
    <main className="relative">
        <Navbar/>
        <div className="flex">
            <SidebarLeft/>

            <section className="flex min-h-screen flex-1 flex-col px-6 
            pb-6 pt-36 max-md:pb-14 sm:px-14">
                <div className="mx-auto w-full max-w-5xl">
                    {children}
                </div>
            </section>

            <SidebarRight/>
        </div>
    </main>
)

export default MainLayout
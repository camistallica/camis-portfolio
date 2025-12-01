import { Navbar } from "../components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { EstrelaBackground } from "@/components/EstrelaBackground"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* tema*/}
            <ThemeToggle/>
        {/* animações*/}
            <EstrelaBackground/>
        {/* navbar*/}
            <Navbar/>
        {/* principal*/}

        {/* footer*/}




    </div>
}
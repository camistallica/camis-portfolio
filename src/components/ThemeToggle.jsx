import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [temaEscuro, setTemaEscuro] = useState(false);

    useEffect(() => {
        const temaArmazenado = localStorage.getItem("theme")
        if(temaArmazenado === "dark"){
            setTemaEscuro(true)
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTemaEscuro(false);
        }
    }, [])

    const toggleTheme = () => {
        if(temaEscuro){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setTemaEscuro(false);
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setTemaEscuro(true);
        }
    };

    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}>
    {temaEscuro ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>}
    </button>
}
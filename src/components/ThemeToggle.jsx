import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"

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

    return <button onClick={toggleTheme}> {" "} 
    {temaEscuro ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>}
    </button>
}
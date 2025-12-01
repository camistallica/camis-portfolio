import { Moon, Sun } from "lucide-react";
import { useState } from "react"

export const ThemeToggle = () => {
    const [temaEscuro, setTemaEscuro] = useState(false);

    const toggleTheme = () => {
        if(temaEscuro){
            setTemaEscuro(false);
        }
        else{
            setTemaEscuro(true);
        }
    };

    return <button onClick={toggleTheme}> {" "} 
    {temaEscuro ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>}
    </button>
}
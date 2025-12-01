import { useState, useEffect } from "react"

export const EstrelaBackground = () => {
    const [estrelas, setEstrelas] = useState([]);

    useEffect(() => {
        gerarEstrelas();
    }, []);

    const gerarEstrelas = () => {
        if (typeof window === 'undefined') return;

        const numeroEstrelas = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const novasEstrelas = [];

        for(let i = 0; i < numeroEstrelas; i++){
            novasEstrelas.push({
                id: i,
                tamanho: Math.random() * 3 + 1,
                x: Math.random() * 100, 
                y: Math.random() * 100, 
                opacidade: Math.random() * 0.5 + 0.5,
                duracaoAnimacao: Math.random() * 4 + 2,
            });
        }
        setEstrelas(novasEstrelas)
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {estrelas.map((estrela) => (
                <div 
                    key={estrela.id} 
                    className="star animate-pulse-subtle" 
                    style={{
                        width: `${estrela.tamanho}px`,
                        height: `${estrela.tamanho}px`,
                        left: `${estrela.x}%`,
                        top: `${estrela.y}%`,
                        opacity: estrela.opacidade,
                        animationDuration: `${estrela.duracaoAnimacao}s`, 
                    }}
                />
            ))}
        </div>
    );
};
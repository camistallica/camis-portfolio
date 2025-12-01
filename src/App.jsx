import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Nf } from "./pages/Nf"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<Nf/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/home"


function App(props){
    return(
        <>
            <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
            </Router>
        </>
    )
}

export default App
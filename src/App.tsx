import './App.css'
import Header from "@components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import OverviewPage from "@/pages/OverviewPage";
import SalesPage from "@/pages/SalesPage";


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/overview"/>}/>
                <Route path="/overview" element={<OverviewPage/>}/>
                <Route path="/sales" element={<SalesPage/>}/>
            </Routes>
        </>
    )
}

export default App

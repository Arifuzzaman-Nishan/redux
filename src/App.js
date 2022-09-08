import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TransactionList from "./pages/TransactionList";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/transactionsList" element={<TransactionList/>}/>
            </Routes>
        </Router>
    );
}

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import GenerateThumbnail from "./pages/GenerateThumbnail";
import LoginPage from "./auth/LoginPage";
import Register from "./auth/Register";

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/generate-thumbnail" element={<GenerateThumbnail/> } />
                <Route path="/login" element={<LoginPage/> } />
                <Route path="/register" element={<Register/> } />
            </Routes>
            <Footer />
        </>
    );
}
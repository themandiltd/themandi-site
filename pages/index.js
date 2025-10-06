"use client";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Signup from "@/components/Signup";
import { useEffect, useState } from "react";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [layloOpen, setLayloOpen] = useState(false);
    const [dates, setDates] = useState([]);

    const handleSignup = () => {
        setLayloOpen(!layloOpen);
    };

    useEffect(() => {
        const fetchDates = async () => {
            try {
                const response = await fetch("/api/getDates");
                const data = await response.json();
                setDates(data);
            } catch (error) {
                console.error("Error fetching dates:", error);
            }
        };

        fetchDates();

        const isFirstVisit = localStorage.getItem("isFirstVisit");

        if (!isFirstVisit) {
            const timer = setTimeout(() => {
                setLoading(false);
                localStorage.setItem("isFirstVisit", "false");
            }, 3000); // Simulate a 3-second loading time

            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <div className="relative">
            <Loader isLoading={loading} />

            <Hero
                layloOpen={layloOpen}
                handleSignup={handleSignup}
                dates={dates}
            />

            <Signup layloOpen={layloOpen} handleSignup={handleSignup} />
        </div>
    );
}

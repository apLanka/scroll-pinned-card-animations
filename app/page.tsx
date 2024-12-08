'use client'

import AnimatedCardSection from "@/app/_component/animated-card-section";
import {useEffect, useState} from "react";

export default function Home() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div>
            <div className="h-screen bg-black"></div>
            <AnimatedCardSection/>
            <div className="h-screen bg-black"></div>
        </div>
    );
}
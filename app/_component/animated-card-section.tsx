'use client'

import {useEffect} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from "gsap";


gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCardSection() {
    useEffect(() => {
        const cards = document.querySelectorAll(".card");

        ScrollTrigger.create({
            trigger: ".pin-container",
            start: "top top",
            end: `+=${cards.length * 1000}`,
            scrub: 1,
            pin: true,
        })


        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".card-container",
                start: "top 70%",
                end: `+=${cards.length * 1000}`,
                scrub: 0,
            },
        });


        cards.forEach((card) => {
            timeline.to(card, {
                opacity: 1,
                duration: 1,
            });
        });
    }, []);

    return (
        <div className="pin-container relative h-screen bg-black">
            <div className="card-container relative h-screen bg-black">
                <div className="absolute inset-0 bg-green-100 rounded-2xl m-10 opacity-0 card p-10">
                    <div className={'absolute flex flex-col gap-2 right-0 bottom-0 m-6'}>
                        <div className={'w-2 h-2 rounded-full bg-black border border-black'}/>
                        <div className={'w-2 h-2 rounded-full border border-black'}/>
                        <div className={'w-2 h-2 rounded-full border border-black'}/>
                        <div className={'w-2 h-2 rounded-full border border-black'}/>
                    </div>
                </div>
                <div className="absolute inset-0 bg-red-100 rounded-2xl m-10 opacity-0 card">
                    <div className={'absolute flex flex-col gap-2 right-0 bottom-0 m-6'}>
                        <div className={'w-2 h-2 rounded-full border border-black'}/>
                        <div className={'w-2 h-2 rounded-full border bg-black border-black'}/>
                        <div className={'w-2 h-2 rounded-full border border-black'}/>
                        <div className={'w-2 h-2 rounded-full border border-black'}/>
                    </div>
                </div>
                <div className="absolute inset-0 bg-yellow-100 rounded-2xl m-10 opacity-0 card">
                    <div className={'absolute flex flex-col gap-2 right-0 bottom-0 m-6'}>
                        <div className={'w-2 h-2 rounded-full border border-black'}/>
                        <div className={'w-2 h-2 rounded-full border border-black'}/>
                        <div className={'w-2 h-2 rounded-full border bg-black border-black'}/>
                        <div className={'w-2 h-2 rounded-full border border-black'}/>
                    </div>
                </div>
                <div className="absolute inset-0 bg-blue-100 rounded-2xl m-10 opacity-0 card">
                    <div className={'absolute flex flex-col gap-2 right-0 bottom-0 m-6'}>
                        <div className={'w-2 h-2 rounded-full border border-black'}/>
                        <div className={'w-2 h-2 rounded-full border border-black'}/>
                        <div className={'w-2 h-2 rounded-full border border-black'}/>
                        <div className={'w-2 h-2 rounded-full border bg-black border-black'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
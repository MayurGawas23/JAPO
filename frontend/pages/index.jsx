"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
// import { ReactLenis } from "@studio-freight/react-lenis";
import React from 'react';
import Footer from '@/components/Footer';
import Header from '../components/Header';
import { useAuth } from '../utils/auth';
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import Cards from '@/components/Cards';
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, ChevronRight, MoveRight, MoveRightIcon } from 'lucide-react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Marquee from 'react-fast-marquee';
import { Input } from '@/components/ui/input';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const { isLoggedIn, user } = useAuth();
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true, loop: true }),
    );



    const container = useRef();
    const section2Ref = useRef(null);
    const router = useRouter();

    const [openAuthDialog, setOpenAuthDialog] = useState(false);

    const animateCards = () => {
        const cards = gsap.utils.toArray(".card");

        gsap.set(cards, { opacity: 1 });

        gsap.from(cards, {
            x: 800,
            opacity: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: "power2.out",
            scrub: 2
        });
    };

    const animateHero = () => {
        gsap.from("#hero", {
            scaleX: 0,
            transformOrigin: "0% 100%",
            delay: 1.2,
            duration: 0.8,
            ease: "power2.out",
            perspective: "100px",
            stagger: 0.3
        })
        gsap.from(".herobutton", {
            y: 50,
            duration: 1,
            ease: "power2.out",
            opacity: 0,
            delay: 1.6,
            transformOrigin: "0% 300%",
            perspective: "1110px",
        })

        gsap.from('#heroimg', {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            delay: 1.5
        })
    };

    useGSAP(() => {
        animateHero();
    }, { scope: container })

    const animateTest = () => {
        gsap.from("#test", {
            x: -1000,
            duration: 1,
            ease: "power2.out",
            stagger: 0.8,
            opacity: 0,
            ScrollTrigger: {
                trigger: "#test",
                start: "top 10%",
                end: "top 50%",
                markers: true
            }
        });
    };

    const animateTiles = () => {
        gsap.from("#right-tiles", {
            // delay: 1,
            scaleX: 0,
            transformOrigin: "100% 50%",
            duration: 1,
            ease: "power2.out",

            stagger: 0.2
        })
        gsap.from("#left-tile", {
            // delay: 1,
            scaleX: 0,
            transformOrigin: "0% 50%",
            duration: 1,
            ease: "power2.out",

            stagger: 0.2
        })
        gsap.from("#right-text", {
            x: 1000,
            opacity: 0,
            ease: "power2.out",
            duration: 1,
            delay: 1,

            stagger: 0.3
        })
    }




    useGSAP(() => {
        if (!animationTriggered) {
            ScrollTrigger.create({
                trigger: ".cards ",
                start: "top 92%",
                end: "top 0%",
                // markers: true,
                onEnter: () => {
                    animateCards();
                    animateTest();
                    animateTiles()
                },

            });
        }
    }, { scope: container });

    const handleExploreClick = () => {
        if (section2Ref.current) {
            section2Ref.current.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                animateCards();
                animateTest();
                animateTiles();
                setAnimationTriggered(true);
            }, 0);
        }
    };

    useEffect(() => {
        if (animationTriggered) {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    }, [animationTriggered]);


    const IssueCard = () => {
        gsap.to('#issue', {
            y: -350,
            duration: 1,
            ease: "power2.out",
            rotate: "0deg"
        })
    }
    const IssueCardLeave = () => {
        gsap.to('#issue', {
            y: 0,
            duration: 1,
            ease: "power2.out",
            rotate: "-6deg"
        })
    }

    const BookCard = () => {
        gsap.to('#book', {
            y: -180,
            duration: 1,
            ease: "power2.out",
            rotate: "0deg",
            zIndex: 20
        })
    }
    const BookCardLeave = () => {
        gsap.to('#book', {
            y: 0,
            duration: 1,
            ease: "power2.out",
            rotate: "6deg",
            zIndex: 9
        })
    }

    const ConferenceCard = () => {
        gsap.to('#conference', {
            y: -180,
            duration: 1,
            ease: "power2.out",
            rotate: "0deg",
            zIndex: 20
        })
    }
    const ConferenceCardLeave = () => {
        gsap.to('#conference', {
            y: 0,
            duration: 1,
            ease: "power2.out",
            rotate: "18deg",
            zIndex: 7
        })
    }



    return (
        <>
            <Head>
                <Head>
                    <title>Home</title>
                    <meta name="description" content="Discover high-quality, peer-reviewed journals, books, and conferences. Stay ahead in research and innovation." />
                    <meta name="keywords" content="peer-reviewed journals, books, research, conferences, publications" />
                    <meta property="og:title" content="Home | Peer-Reviewed Journals & Conferences" />
                    <meta property="og:description" content="Explore our peer-reviewed journals, books, and conferences to advance your research." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://yourwebsite.com/" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Home | Peer-Reviewed Journals & Conferences" />
                    <meta name="twitter:description" content="Explore peer-reviewed journals and books to enhance your research." />
                </Head>
            </Head>
            {/* <ReactLenis root> */}
            <div className="w-full flex flex-col " ref={container}>
                <div className="">
                    <section className="flex flex-col w-full m-auto h-screen justify-center lg:h-screen overflow-hidden bg-grqeen-500">
                        <Header
                            openAuthDialog={openAuthDialog}
                            setOpenAuthDialog={setOpenAuthDialog}
                        />
                        <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row justify-center items-center  lg:w-[70%] mx-auto bg-rv d-400  md:gap-16 lg:gap-20 h-full p-6 md:p-10 lg:p-12">

                            {/* Left Content */}
                            <div className="flex flex-col flex-1 items-start justify-start text-left w-full sm:w-[90%] md:w-[60%] lg:w-[50%]">
                                <h3 id="hero" className="font-[poppins-semibold] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 tracking-tighter">
                                    We are <br />
                                    <span className="text-[#C7740E] font-[poppins-extrabold]  sm:text-2xl md:text-6xl lg:text-6xl tracking-widest">
                                        JAPO
                                    </span>,
                                </h3>
                                <h1 id="hero" className="font-[poppins-regular] text-xs sm:text-xs    md:text-lg    lg:text-xl mb-4">
                                    JAPO (<span className="text-[#1f7177] font-bold sm:text-[1rem]"><Link href="/about">JOURNAL & ARTICLE PUBLISING ORGANIZATION</Link></span>)is a modern, streamlined peer-review management system designed to simplify the academic publishing workflow for journals, editors, reviewers, and authors.

                                    It provides a structured and transparent platform where research papers move seamlessly from submission to publication, ensuring quality, accountability, and efficiency at every step.
                                </h1>

                                <Link href={'#section2'} className='herobutton' >
                                    <Button className=" herobutton bg-[#1f7177] hover:bg-[#298b92]" onClick={handleExploreClick}>
                                        Explore Us<ArrowRight />
                                    </Button>
                                </Link>
                            </div>

                            {/* Right Image */}
                            <div className="lg:flex justify-center items-center w-full sm:w-[90%]  md:w-[50%] lg:w-[40%] ">
                                <img src="/publish article offwhite bg.gif" alt="Hero" id="heroimg" className="w-full max-w-[150px] md:max-w-[500px] lg:max-w-[600px] object-cover" />
                            </div>
                        </div>
                    </section>



                    <section id="section2" ref={section2Ref} className="cards bg-greene-400 pt-10 w-[90%] mx-auto min-h-screen lg:h-screen gap-4 flex flex-col">
                        {/* First Row */}
                        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row flex-1 w-full p-10 bg-slatee-400 overflow-x-hidden">
                            {/* Left Tile */}
                            <div id="left-tile" className="h-full w-full md:w-[30%] flex flex-col px-10 py-4 items-start">
                                <h3 id="test" className="font-[condensed-medium] tracking-tighter text-6xl sm:text-7xl md:text-8xl">
                                    Explore <br />
                                    <span className="text-6xl sm:text-7xl md:text-8xl font-[condensed-medium] tracking-tight">us</span>
                                </h3>
                            </div>
                            {/* Right Tiles */}
                            <div id="right-tile" className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 w-full gap-4">
                                {/* Journals */}
                                <div id="right-tiles" onClick={() => router.push('/journals')} className="overflow-hidden bg-[#f19525] h-full w-full border flex flex-col justify-between p-10 cursor-pointer">
                                    <h3 className="font-[condensed-medium] text-4xl md:text-5xl lg:text-[2.5rem] text-[#172b2c] mb-2">JOURNALS</h3>
                                    <p className="mb-4 text-white text-lg">Stay informed with our peer-reviewed journals, featuring cutting-edge research.</p>
                                    <Link href={'/journals'} className="justify-center shadow-lg rounded-sm px-4 text-blue-600 bg-[#ffffff] inline-flex p-2 hover:underline">Explore Journals<ChevronRight /></Link>
                                </div>
                                {/* Books */}
                                <div id="right-tiles" onClick={() => router.push('/books')} className="bg-[#ffa63a] h-full w-full border flex flex-col justify-between p-10 cursor-pointer">
                                    <h3 className="font-[condensed-medium] text-4xl md:text-5xl lg:text-[2.5rem] text-[#172b2c] mb-2">DOWNLOAD</h3>
                                    <p className="mb-4 text-white text-lg">Templates, reference formats, and submission guides.</p>
                                    <Link href={'/books'} className="justify-center shadow-lg rounded-sm px-4 text-blue-600 bg-white inline-flex p-2 hover:underline">Downloads<ChevronRight /></Link>
                                </div>
                                {/* Conferences */}
                                <div id="right-tiles" onClick={() => router.push('/conferences')} className="bg-[#ffb355] h-full w-full border flex flex-col justify-between p-10 cursor-pointer">
                                    <h3 className="font-[condensed-medium] text-4xl md:text-5xl lg:text-[2.5rem] text-[#172b2c] mb-2">ANNOUNCEMENTS  </h3>
                                    <p className="mb-4 text-white text-lg">Stay updated with news, announcements, and updates.</p>
                                    <Link href={'/conferences'} className="justify-center shadow-lg rounded-sm px-4 text-blue-600 bg-white inline-flex p-2 hover:underline">Latest Announcements<ChevronRight /></Link>
                                </div>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="flex flex-col md:flex-col lg:flex-row flex-1 w-full h-[300px] p-10  overflow-x-hidden">
                            {/* Left Section */}
                            <div id="right-tile" className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 w-full gap-4 ordeer-1">
                                {/* Author's Guidelines */}
                                <div id="left-tile" onClick={() => router.push('/guidelines')} className="bg-[#4aa7ae] h-full w-full  flex-1   border flex flex-col justify-between p-10 cursor-pointer">
                                    <h3 className="font-[condensed-medium] text-4xl md:text-5xl lg:text-[3rem] text-white">AUTHOR'S GUIDELINES</h3>
                                    <div className="flex justify-end">
                                        <MoveRight className="w-[50px] sm:w-[80px] text-4xl sm:text-5xl md:text-6xl text-white" />
                                    </div>
                                </div>
                                {/* Policies & Ethics */}
                                <div id="left-tile" onClick={() => router.push('/policy-ethics')} className="bg-[#3d959b] h-full w-full  flex-1   border flex flex-col justify-between p-10 cursor-pointer">
                                    <h3 className="font-[condensed-medium] text-4xl md:text-5xl lg:text-[3rem] text-white">PUBLICATION POLICIES & ETHICS</h3>
                                    <div className="flex justify-end">
                                        <MoveRight className="w-[50px] sm:w-[80px] text-4xl sm:text-5xl md:text-6xl text-white" />
                                    </div>
                                </div>
                                {/* Workflow */}
                                <div id="left-tile" onClick={() => router.push('/workflow')} className="bg-[#298B92] h-full w-full border flex-1    flex flex-col justify-between p-10 cursor-pointer">
                                    <h3 className="font-[condensed-medium] text-4xl md:text-5xl lg:text-[3rem] text-white">WORKFLOW</h3>
                                    <div className="flex justify-end">
                                        <MoveRight className="w-[50px] sm:w-[80px] text-4xl sm:text-5xl md:text-6xl text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div id="right-text" className="h-full w-full md:w-[30%]  flex-col px-10 py-4 items-start ">
                                <h3 id="test" className="font-[condensed-medium] tracking-tighter lg:text-6xl sm:text-7xl md:text-8xl">
                                    Publishing <span className="lg:text-6xl sm:text-7xl md:text-8xl font-[condensed-medium] tracking-tight">with us</span>
                                </h3>
                                <Button
                                    onClick={() =>
                                        isLoggedIn
                                            ? router.push("/submit-paper")
                                            : setOpenAuthDialog(true)
                                    }
                                    className="mt-8 bg-blue-600 p-4 sm:p-6 md:p-8 hover:bg-blue-500 text-lg"
                                >
                                    Submit an Article
                                </Button>
                            </div>
                        </div>
                    </section>







                    <section id="section5" className='w-full overflow-hidden bg-[#fff]'>

                        <section className="bg-[#aab6b8] text-white py-20">
                            <div className="container mx-auto px-4 text-center">
                                <h2 className="text-3xl font-bold mb-6">Stay Informed with JAPO </h2>
                                <p className="mb-8 max-w-2xl mx-auto">
                                    Subscribe to our newsletter for the latest publications and academic insights.
                                </p>
                                <form className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
                                    <Input type="email" placeholder="Enter your email" className="mb-2 text-black bg-white sm:mb-0 sm:mr-2" />
                                    <Button type="submit" variant="secondary">
                                        Subscribe
                                    </Button>
                                </form>
                            </div>
                        </section>
                        <Marquee className='h-[100px] shadow-inner' autoFill={true} speed={50} gradient={true}>
                            <img src="scholar_logo_md_2011.gif" alt="" className='h-full object-cover mx-10' />
                            <img src="Open-Access-logo1.png" alt="" className='h-full object-cover mx-10' />
                            <img src="crossref.jpg" alt="" className='h-full object-cover mx-10' />
                        </Marquee>



                        <div className=" relative z-20">
                            <Footer className="" />
                        </div>
                    </section>
                </div>
            </div>
            {/* </ReactLenis> */}
        </>
    );
}
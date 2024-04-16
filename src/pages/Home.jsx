import About from "../components/home/AboutUs";
import Hero from "../components/Hero";
import Partners from "../components/home/Partners";
import Social from "../components/Social";
import { HERO } from "../constants";

export default function Home() {
    return (
        <div className="flex flex-col gap-6 p-18 px-3 max-w-6xl mx-auto ">
            <Hero hero={HERO[0]} />
            <Partners />
            <About />
            <Social />
        </div>
    )
}
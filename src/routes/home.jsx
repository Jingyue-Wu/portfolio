import Footer from '/src/components/Footer.jsx';
import FadeIn from '/src/components/Animation.jsx';
import { useState } from 'react';
import { Transition } from "@headlessui/react";
import { InView } from 'react-intersection-observer';

const hobbiesList = [
    "biking along the lake with friends 🚲",
    "trying to fix my 3d printer 🔧",
    "vibing to indie music 🎵",
    "going on unexpected adventures 🏞️",
    "designing keyboards ⌨️",
    "swimming laps at the pool 🏊",
    "building robots ⚙️",
    "painting with bob ross 🎨",
    "kayaking on the pond 🛶",
    "making tomato and egg noodles 🍜",
    "walking through museums 🏛️",
];

let index = Math.floor((Math.random() + 0.0001) * (hobbiesList.length));

export default function Home() {

    const [hobbies, setHobbies] = useState(hobbiesList[index]);
    console.log(index);

    const handleClick = () => {
        index = (index + 1) % hobbiesList.length;
        setHobbies(hobbiesList[index]);
    };

    return (
        <>
            <InView>
                {({ inView, ref }) => (
                    <div ref={ref}>
                        <Transition.Root show={inView}>
                            <div className="h-full m-5 ml-8 mb-20 lg:ml-0 text-start">
                                <FadeIn delay="delay-[0ms]">
                                    <h1 className='text-3xl font-bold'>hi, im jingyue</h1>
                                </FadeIn>
                                {/* <br /> */}
                                <FadeIn delay="delay-[100ms]">
                                    {/* <p >step into my digital sanctuary! &#127795;</p> */}
                                </FadeIn>
                                <br />
                                <FadeIn delay="delay-[200ms]">
                                    {/* <p>
                                        i&apos;m based in toronto, ontario &#127809; where i study software engineering. when i&apos;m not on the grind, you can find me going out to take photos, learning about blockchain, and{" "}
                                        <p className='underline hover:cursor-pointer select-none' onClick={handleClick}>{hobbies}.</p>
                                    </p> */}

                                    <p>
                                        i&apos;m based in toronto, ontario &#127809; where i study software engineering. when i&apos;m not on the grind, you can find me going out to take photos, learning about blockchain, and going on adventures!
                                    </p>
                                </FadeIn>
                                <br />
                                <FadeIn delay="delay-[400ms]">
                                    <p>Reach out anytime at <a className='underline' href="mailto:wu588@mcmaster.ca">wu588 at mcmaster dot ca</a></p>
                                </FadeIn>
                                <br />
                                <FadeIn delay="delay-[500ms]">
                                    <Footer />
                                </FadeIn>
                            </div>
                        </Transition.Root>
                    </div>
                )}
            </InView>
        </>
    );
}

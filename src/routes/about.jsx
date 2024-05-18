import FadeIn from '/src/components/Animation.jsx';
import { Transition } from "@headlessui/react";
import { InView } from 'react-intersection-observer';

export default function About() {
    return (
        <>
            <div className="h-full m-5 ml-8 mb-20 lg:ml-0 text-start lg:w-[600px]">
                <InView>
                    {({ inView, ref }) => (
                        <div ref={ref}>
                            <Transition.Root show={inView}>
                                <FadeIn delay="delay-[700ms]">
                                    <h1 className='text-3xl font-bold'>╰(＾∇＾)╯</h1>
                                </FadeIn>
                                <br />
                                <FadeIn delay="delay-[100ms]">
                                    <img className='h-60 rounded-2xl' src="img1.jpg" alt="" />
                                </FadeIn>
                                <br />
                                <FadeIn delay="delay-[300ms]">
                                    <p >i&apos;m a second year software engineering student at <a className="underline" href="https://www.mcmaster.ca/">McMaster University</a>. </p>
                                </FadeIn>
                            <br />
                            <FadeIn delay="delay-[400ms]">
                                <p>i&apos;ve always had a broad range of interests, and a strong desire to problem solve and learn new things. my goal is to create a positive change in the world through creative innovations and technologies. </p>
                            </FadeIn>
                            <br />
                            <FadeIn delay="delay-[500ms]">
                                <p>i&apos;m extremely passionate about entrepreneurship, sustainability, decentralized finance and photography!</p>
                            </FadeIn>
                            <br />
                            <FadeIn delay="delay-[600ms]">
                                <p>currently i&apos;m:</p>
                                <br />
                                <ul className="list-disc ml-12">
                                    <li>Organizing and leading events/workshops at <a className="underline" href="https://deltahacks.com/">DeltaHacks</a>, one of Canada&apos;s largest hackathons</li>
                                    <li>Working on the controls team at <a className="underline" href="https://www.macrocketry.ca/">McMaster Rocketry</a></li>
                                    <li>learning more about web development and UI/UX!</li>
                                </ul>
                            </FadeIn>
                            <br />
                        </Transition.Root>
                        </div>
                    )}
        </InView >
            </div >
        </>
    );
}
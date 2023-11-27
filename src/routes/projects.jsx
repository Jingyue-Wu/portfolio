import Projectcard from '/src/components/ProjectCard.jsx';
import FadeIn from '/src/components/Animation.jsx';
import { Transition } from "@headlessui/react";
import { InView } from 'react-intersection-observer';

export default function Projects() {
    return (
        <>
            <div className="h-full m-5 ml-8 mb-20 lg:ml-0 text-start lg:w-[600px]">
                <InView>
                    {({ inView, ref }) => (
                        <div ref={ref}>
                            <Transition.Root show={inView}>
                                <FadeIn delay="delay-[700ms]">
                                    <p>check out some of my favorite projects here!</p>
                                </FadeIn>
                                <Projectcard />

                                <FadeIn delay="delay-[1500ms]">
                                    <br />

                                    <div className="flex gap-2 items-center">
                                        <p>more on <a className="underline" href="https://github.com/Jingyue-Wu">github</a></p>
                                        <img className="w-6 h-6" src="github.svg"></img>
                                    </div>
                                </FadeIn>
                            </Transition.Root>
                        </div>
                    )}
                </InView >
            </div>
        </>
    );
}
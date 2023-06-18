import Projectcard from '/src/components/projectcard.jsx';
import FadeIn from '/src/components/animation.jsx';
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
                                    <p>check out some of my favorite projects here! </p>
                                </FadeIn>
                                <Projectcard />

                            </Transition.Root>
                        </div>
                    )}
                </InView >
            </div>
        </>
    );
}
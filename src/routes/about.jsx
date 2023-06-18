import FadeIn from '/src/components/animation.jsx';
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
                                    <p >i&apos;m a second year software engineering student at McMaster University. </p>
                                </FadeIn>
                                <br />
                                <FadeIn delay="delay-[200ms]">
                                    <p>i&apos;ve always had a broad range of interests, and strong desire to problem solve and learn new things. i&apos;m extremely passionate about entrepreneurship, software development, decentralized finance and photography! </p>
                                </FadeIn>
                                <br />
                                <FadeIn delay="delay-[300ms]">
                                    <p>currently learning more about web development and UI/UX!</p>
                                </FadeIn>
                                <br />
                            </Transition.Root>
                        </div>
                    )}
                </InView>
            </div>
        </>
    );
}
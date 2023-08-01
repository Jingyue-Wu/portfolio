import FadeIn from '/src/components/Animation.jsx';
import Image from '/src/components/Image.jsx';
import { Transition } from "@headlessui/react";
import { InView } from 'react-intersection-observer';


export default function Gallery() {
    return (
        <>
            <div className="h-full m-5 ml-8 mb-20 lg:ml-0 text-start lg:w-[600px]">
                <InView>
                    {({ inView, ref }) => (
                        <div ref={ref}>
                            <Transition.Root show={inView}>

                                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">

                                    <FadeIn delay="delay-[1000ms]">

                                        <div>
                                            <Image image={'/photos/1.jpg'} />
                                            <Image image={'/photos/2.jpg'} />
                                            <Image image={'/photos/3.jpg'} />
                                            <Image image={'/photos/4.jpg'} />
                                            <Image image={'/photos/5.jpg'} />
                                            <Image image={'/photos/6.jpg'} />
                                            <Image image={'/photos/7.jpg'} />
                                            <Image image={'/photos/15.jpg'} />
                                            <Image image={'/photos/16.jpg'} />
                                            <Image image={'/photos/17.jpg'} />
                                        </div>

                                    </FadeIn>
                                    <FadeIn delay="delay-[1200ms]">
                                        <div>
                                            <Image image={'/photos/8.jpg'} />
                                            <Image image={'/photos/9.jpg'} />
                                            <Image image={'/photos/10.jpg'} />
                                            <Image image={'/photos/11.jpg'} />
                                            <Image image={'/photos/12.jpg'} />
                                            <Image image={'/photos/13.jpg'} />
                                            <Image image={'/photos/14.jpg'} />
                                            <Image image={'/photos/21.jpg'} />
                                            <Image image={'/photos/18.jpg'} />
                                            <Image image={'/photos/19.jpg'} />
                                            <Image image={'/photos/20.jpg'} />
                                        </div>

                                    </FadeIn>
                                </div>

                            </Transition.Root>
                        </div>
                    )}
                </InView >
            </div >
        </>
    );
}
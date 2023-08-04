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
                                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                    <FadeIn delay="delay-[900ms]">
                                        <div>
                                            <Image image={'/photos/33.jpg'} />
                                            <Image image={'/photos/42.jpg'} />
                                            <Image image={'/photos/23.jpg'} />
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
                                            <Image image={'/photos/32.jpg'} />
                                        </div>
                                    </FadeIn>

                                    <FadeIn delay="delay-[1800ms]">
                                        <div>
                                            <Image image={'/photos/36.jpg'} />
                                            <Image image={'/photos/35.jpg'} />
                                            <Image image={'/photos/41.jpg'} />
                                            <Image image={'/photos/8.jpg'} />
                                            <Image image={'/photos/9.jpg'} />
                                            <Image image={'/photos/10.jpg'} />
                                            <Image image={'/photos/11.jpg'} />
                                            <Image image={'/photos/12.jpg'} />
                                            <Image image={'/photos/13.jpg'} />
                                            <Image image={'/photos/21.jpg'} />
                                            <Image image={'/photos/18.jpg'} />
                                            <Image image={'/photos/19.jpg'} />
                                            <Image image={'/photos/20.jpg'} />
                                            <Image image={'/photos/30.jpg'} />
                                        </div>
                                    </FadeIn>

                                    <FadeIn delay="delay-[2500ms]">
                                        <div>
                                            <Image image={'/photos/40.jpg'} />
                                            <Image image={'/photos/39.jpg'} />
                                            <Image image={'/photos/38.jpg'} />
                                            <Image image={'/photos/34.jpg'} />

                                            <Image image={'/photos/22.jpg'} />
                                            <Image image={'/photos/24.jpg'} />
                                            <Image image={'/photos/25.jpg'} />
                                            <Image image={'/photos/26.jpg'} />
                                            <Image image={'/photos/27.jpg'} />
                                            <Image image={'/photos/28.jpg'} />
                                            <Image image={'/photos/29.jpg'} />
                                            <Image image={'/photos/31.jpg'} />
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
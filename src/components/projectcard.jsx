import PropTypes from 'prop-types';
import FadeIn from '/src/components/animation.jsx';
import { Transition } from "@headlessui/react";
import { InView } from 'react-intersection-observer';

function Section({ name, description, link }) {
    return (
        <>
            <div className=' hover:text-primary transition-all duration-200'>
                <br />
                <a href={link}>
                    <h1 className="font-bold text-xl">{name}</h1>
                    <p>{description}</p>
                </a>

            </div>
            <hr className='mt-7 bg-gray-200 border-blue-500' />
        </>



    );
}

Section.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default function Projectcard() {

    return (
        <>
            <InView>
                {({ inView, ref }) => (
                    <div ref={ref}>
                        <Transition.Root show={inView}>

                            <FadeIn delay="delay-[0ms]">
                                <Section
                                    name={"billow"}
                                    description={"track of all of your spending and bills"}
                                    link={"https://github.com/Jingyue-Wu/billow"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[100ms]">
                                <Section
                                    name={"studyspot"}
                                    description={"fix your unproductivity through gamification and web3"}
                                    link={"https://github.com/Jingyue-Wu/study-spot"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[200ms]">
                                <Section
                                    name={"crypto ticker"}
                                    description={"sleek desktop cryptocurrency ticker and smart display that shows real-time market trends and weather"}
                                    link={"https://github.com/Jingyue-Wu/crypto-ticker"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[300ms]">
                                <Section
                                    name={"doodleguesser"}
                                    description={"multiplayer server-based digital drawing and guessing game"}
                                    link={"https://github.com/Jingyue-Wu/doodle-guesser"}
                                />
                            </FadeIn>


                            <FadeIn delay="delay-[400ms]">
                                <Section
                                    name={"game of life"}
                                    description={"interface for conway's cellular automaton"}
                                    link={"https://github.com/Jingyue-Wu/game-of-life"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[500ms]">
                                <Section
                                    name={"diep"}
                                    description={"minimalist single player 2D shooter game based on diep.io"}
                                    link={"https://github.com/Jingyue-Wu/diep-game"}
                                />
                            </FadeIn>
                            <FadeIn delay="delay-[600ms]">
                                <Section
                                    name={"photography"}
                                    description={"some of my photography work!"}
                                    link={"/gallery"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[700ms]">
                                <Section
                                    name={"386 robotics"}
                                    description={"nonprofit competitive robotics organization"}
                                    link={""}
                                />
                            </FadeIn>
                        </Transition.Root>
                    </div>

                )}
            </InView >
        </>
    );

}



const LineSlide = ({ delay, children }) => (
    <Transition.Child
        enter={`transition-all ease-in-out duration-1000 ${delay}`}
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
    >
        {children}
    </Transition.Child>
);

LineSlide.propTypes = {
    delay: PropTypes.number.isRequired,
    children: PropTypes.instanceOf(Element).isRequired,
};
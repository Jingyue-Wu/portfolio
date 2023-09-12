import PropTypes from 'prop-types';
import FadeIn from '/src/components/Animation.jsx';
import { Transition } from "@headlessui/react";
import { InView } from 'react-intersection-observer';

function Section({ name, description, link }) {
    return (
        <>
            <div className=''>
                <div className='hover:text-primary transition-all duration-200'>
                    <br />
                    <a className='project group' href={link} style={{ position: 'relative' }}>
                        <h1 className="font-bold text-xl">{name}</h1>
                        <p>{description}</p>
                    </a>
                </div>
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
                                    name={"bridgeup"}
                                    description={"helps commuters avoid long delays at welland canal bridges"}
                                    link={"https://github.com/Jingyue-Wu/bridge-up"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[100ms]">
                                <Section
                                    name={"reverie"}
                                    description={"study and chill with pomodoro, cool art and customizable lofi audio"}
                                    link={"https://github.com/Jingyue-Wu/reverie"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[200ms]">
                                <Section
                                    name={"pantry palate"}
                                    description={"discover new foods while helping the environment"}
                                    link={"https://github.com/Jingyue-Wu/pantry-palate"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[300ms]">
                                <Section
                                    name={"billow"}
                                    description={"track of all of your spending and bills with ocr"}
                                    link={"https://github.com/Jingyue-Wu/billow"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[400ms]">
                                <Section
                                    name={"switchify"}
                                    description={"seamlessly transfer playlists between spotify and youtube"}
                                    link={"https://github.com/Jingyue-Wu/switchify"}
                                />
                            </FadeIn>



                            <FadeIn delay="delay-[500ms]">
                                <Section
                                    name={"crypto ticker"}
                                    description={"sleek desktop smart display that shows real-time market trends and weather"}
                                    link={"https://github.com/Jingyue-Wu/crypto-ticker"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[600ms]">
                                <Section
                                    name={"studyspot"}
                                    description={"improve your productivity through gamification and web3"}
                                    link={"https://github.com/Jingyue-Wu/study-spot"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[700ms]">
                                <Section
                                    name={"doodleguesser"}
                                    description={"multiplayer drawing and guessing game"}
                                    link={"https://github.com/Jingyue-Wu/doodle-guesser"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[800ms]">
                                <Section
                                    name={"game of life"}
                                    description={"clean interface for conway's famous cellular automaton"}
                                    link={"https://github.com/Jingyue-Wu/game-of-life"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[900ms]">
                                <Section
                                    name={"diep"}
                                    description={"minimalist single player 2D shooter game"}
                                    link={"https://github.com/Jingyue-Wu/diep-game"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[1000ms]">
                                <Section
                                    name={"photography"}
                                    description={"check out some of my photography work!"}
                                    link={"/gallery"}
                                />
                            </FadeIn>
                        </Transition.Root>
                    </div>
                )}
            </InView >
        </>
    );
}
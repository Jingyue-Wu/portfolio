import PropTypes from 'prop-types';
import FadeIn from '/src/components/animation.jsx';
import { Transition } from "@headlessui/react";
import { InView } from 'react-intersection-observer';
import './Follower.css';
// import { useState, useEffect } from 'react';

// function Section({ name, description, link, image, x, y }) {

function Section({ name, description, link}) {

    return (
        <>
            <div className=' hover:text-primary transition-all duration-200'>
                <br />
                <a className='project group' href={link} style={{ position: 'relative' }}>
                    <h1 className="font-bold text-xl">{name}</h1>
                    <p>{description}</p>


                    {/* <img src={image} alt=""
                        style={{
                            left: x,
                            top: y,
                            transform: 'translate(-50%, -50%) translate(10px, -10px)'
                        }}
                        className=' follower' /> */}
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
    // image: PropTypes.image,
    // x: PropTypes.number,
    // y: PropTypes.number
};

export default function Projectcard() {


    // const [mousePos, setmousePos] = useState({ x: 0, y: 0 });

    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         setmousePos({ x: e.x - window.innerWidth * 0.4 + 'px', y: e.y - window.innerHeight * 0.5 + 'px' });
    //     };
    //     window.addEventListener('mousemove', handleMouseMove);


    //     const handleWindowResize = () => {
    //         setmousePos((prev) => ({
    //             x: prev.x - window.innerWidth * 0.4 + 'px',
    //             y: prev.y - window.innerHeight * 0.5 + 'px',
    //         }));
    //     };
    //     window.addEventListener('resize', handleWindowResize);
    
    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);



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
                                    // image={"test.png"}
                                    // x={mousePos.x}
                                    // y={mousePos.y}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[100ms]">
                                <Section
                                    name={"switchify"}
                                    description={"seamlessly transfer playlists between spotify and youtube"}
                                    link={"https://github.com/Jingyue-Wu/switchify"}

                                />
                            </FadeIn>

                            <FadeIn delay="delay-[200ms]">
                                <Section
                                    name={"studyspot"}
                                    description={"fix your unproductivity through gamification and web3"}
                                    link={"https://github.com/Jingyue-Wu/study-spot"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[300ms]">
                                <Section
                                    name={"crypto ticker"}
                                    description={"sleek desktop cryptocurrency ticker and smart display that shows real-time market trends and weather"}
                                    link={"https://github.com/Jingyue-Wu/crypto-ticker"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[400ms]">
                                <Section
                                    name={"doodleguesser"}
                                    description={"multiplayer digital drawing and guessing game"}
                                    link={"https://github.com/Jingyue-Wu/doodle-guesser"}
                                    />
                            </FadeIn>


                            <FadeIn delay="delay-[500ms]">
                                <Section
                                    name={"game of life"}
                                    description={"interface for conway's cellular automaton"}
                                    link={"https://github.com/Jingyue-Wu/game-of-life"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[600ms]">
                                <Section
                                    name={"diep"}
                                    description={"minimalist single player 2D shooter game based on diep.io"}
                                    link={"https://github.com/Jingyue-Wu/diep-game"}
                                />
                            </FadeIn>
                            <FadeIn delay="delay-[700ms]">
                                <Section
                                    name={"photography"}
                                    description={"some of my photography work!"}
                                    link={"/gallery"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[800ms]">
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



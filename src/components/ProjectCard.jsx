import PropTypes from 'prop-types';
import FadeIn from '/src/components/Animation.jsx';
import { Transition } from "@headlessui/react";
import { InView } from 'react-intersection-observer';
import './Follower.css';

function Section({ name, description, link}) {
    return (
        <>
            <div className=' hover:text-primary transition-all duration-200'>
                <br />
                <a className='project group' href={link} style={{ position: 'relative' }}>
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
                                    name={"bridgeup"}
                                    description={"helps commuters avoid long delays at welland canal bridges"}
                                    link={"https://github.com/Jingyue-Wu/bridge-up"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[100ms]">
                                <Section
                                    name={"pantry palate"}
                                    description={"discover new foods while helping the environment"}
                                    link={"https://github.com/Jingyue-Wu/pantry-palate"}
                                />
                            </FadeIn>
                            
                            <FadeIn delay="delay-[200ms]">
                                <Section
                                    name={"billow"}
                                    description={"track of all of your spending and bills with ocr"}
                                    link={"https://github.com/Jingyue-Wu/billow"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[300ms]">
                                <Section
                                    name={"switchify"}
                                    description={"seamlessly transfer playlists between spotify and youtube"}
                                    link={"https://github.com/Jingyue-Wu/switchify"}
                                />
                            </FadeIn>



                            <FadeIn delay="delay-[400ms]">
                                <Section
                                    name={"crypto ticker"}
                                    description={"sleek desktop smart display that shows real-time market trends and weather"}
                                    link={"https://github.com/Jingyue-Wu/crypto-ticker"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[500ms]">
                                <Section
                                    name={"studyspot"}
                                    description={"improve your productivity through gamification and web3"}
                                    link={"https://github.com/Jingyue-Wu/study-spot"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[600ms]">
                                <Section
                                    name={"doodleguesser"}
                                    description={"multiplayer drawing and guessing game"}
                                    link={"https://github.com/Jingyue-Wu/doodle-guesser"}
                                    />
                            </FadeIn>

                            <FadeIn delay="delay-[700ms]">
                                <Section
                                    name={"game of life"}
                                    description={"clean interface for conway's famous cellular automaton"}
                                    link={"https://github.com/Jingyue-Wu/game-of-life"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[800ms]">
                                <Section
                                    name={"diep"}
                                    description={"minimalist single player 2D shooter game"}
                                    link={"https://github.com/Jingyue-Wu/diep-game"}
                                />
                            </FadeIn>

                            <FadeIn delay="delay-[900ms]">
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








// import PropTypes from 'prop-types';
// import FadeIn from '/src/components/Animation.jsx';
// import { Transition } from "@headlessui/react";
// import { InView } from 'react-intersection-observer';
// import './Follower.css';
// import { useEffect } from 'react';
// import { gsap } from 'gsap';




// function Section({ name, description, link, image }) {


//     const handleMouseMove = (e) => {
//         gsap.ticker.fps(200);


//         gsap.set('.follower', { xPercent: -200, yPercent: -50 });
//         gsap.to('.follower', {
//             duration: 2, x: e.clientX + 'px', y: e.clientY*0 + 'px',
//             ease: "power4.out"
//         });


//     };


//     useEffect(() => {
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);




//     return (
//         <>
//             <div className=' hover:text-primary'>
//                 <br />
//                 <a className='project group relative' href={link}>
//                     <h1 className="font-bold text-xl">{name}</h1>
//                     <p className='z-0'>{description}</p>
//                     <img src={image} alt="" className='hidden lg:block follower transition-all duration-100 z-10' />
//                 </a>
//             </div>
//             <hr className='mt-7 bg-gray-200 border-blue-500' />
//         </>
//     );
// }






// Section.propTypes = {
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
//     image: PropTypes.image,
// };


// export default function Projectcard() {
//     return (
//         <>
//             <InView>
//                 {({ inView, ref }) => (
//                     <div ref={ref} className='relative'>
//                         <Transition.Root show={inView}>


//                             <FadeIn delay="delay-[0ms]">
//                                 <Section
//                                     name={"billow"}
//                                     description={"track of all of your spending and bills"}
//                                     link={"https://github.com/Jingyue-Wu/billow"}
//                                     image={"projects/billow.jpg"}
//                                 />
//                             </FadeIn>


//                             <FadeIn delay="delay-[100ms]">
//                                 <Section
//                                     name={"switchify"}
//                                     description={"seamlessly transfer playlists between spotify and youtube"}
//                                     link={"https://github.com/Jingyue-Wu/switchify"}
//                                     image={"projects/switchify.jpg"}
//                                 />
//                             </FadeIn>


//                             <FadeIn delay="delay-[200ms]">
//                                 <Section
//                                     name={"studyspot"}
//                                     description={"fix your unproductivity through gamification and web3"}
//                                     link={"https://github.com/Jingyue-Wu/study-spot"}
//                                     image={"projects/studyspot.png"}
//                                 />
//                             </FadeIn>


//                             <FadeIn delay="delay-[300ms]">
//                                 <Section
//                                     name={"crypto ticker"}
//                                     description={"sleek desktop cryptocurrency ticker and smart display that shows real-time market trends and weather"}
//                                     link={"https://github.com/Jingyue-Wu/crypto-ticker"}
//                                     image={"projects/cryptoticker.jpg"}
//                                 />
//                             </FadeIn>


//                             <FadeIn delay="delay-[400ms]">
//                                 <Section
//                                     name={"doodleguesser"}
//                                     description={"multiplayer digital drawing and guessing game"}
//                                     link={"https://github.com/Jingyue-Wu/doodle-guesser"}
//                                     image={"projects/doodleguesser.jpg"}
//                                 />
//                             </FadeIn>




//                             <FadeIn delay="delay-[500ms]">
//                                 <Section
//                                     name={"game of life"}
//                                     description={"interface for conway's cellular automaton"}
//                                     link={"https://github.com/Jingyue-Wu/game-of-life"}
//                                     image={"projects/gameoflife.png"}
//                                 />
//                             </FadeIn>


//                             <FadeIn delay="delay-[600ms]">
//                                 <Section
//                                     name={"diep"}
//                                     description={"minimalist single player 2D shooter game based on diep.io"}
//                                     link={"https://github.com/Jingyue-Wu/diep-game"}
//                                     image={"projects/diep.png"}
//                                 />
//                             </FadeIn>
//                             <FadeIn delay="delay-[700ms]">
//                                 <Section
//                                     name={"photography"}
//                                     description={"some of my photography work!"}
//                                     link={"/gallery"}
//                                 />
//                             </FadeIn>


//                             <FadeIn delay="delay-[800ms]">
//                                 <Section
//                                     name={"386 robotics"}
//                                     description={"nonprofit competitive robotics organization"}
//                                     link={""}
//                                 />
//                             </FadeIn>
//                         </Transition.Root>
//                     </div>


//                 )}
//             </InView >
//         </>
//     );


// }










// import PropTypes from 'prop-types';
// import FadeIn from '/src/components/Animation.jsx';
// import { Transition } from "@headlessui/react";
// import { InView } from 'react-intersection-observer';
// import './Follower.css';
// import { useEffect } from 'react';
// import { gsap } from 'gsap';


// function Section({ name, description, link, image }) {

//     const handleMouseMove = (e) => {
//         gsap.ticker.fps(200);

//         gsap.set('.follower', { xPercent: 0, yPercent: -150 });
//         gsap.to('.follower', {
//             duration: 0.5, x: e.clientX + 'px', y: e.clientY*0 + 'px',
//             ease: "none"
//         });

//     };

//     useEffect(() => {
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);


//     return (
//         <>
//             <div className='hover:text-primary relative'>
//                 <br />
//                 <a className='project flex-col' href={link}>
//                     <h1 className="font-bold text-xl">{name}</h1>
//                     <p>{description}</p>

//                 </a>
                


//             </div>
//             <hr className='mt-7 bg-gray-200 border-blue-500' />
//             <img src={image} alt="" className='h-48 absolute right-0 top-0 z-10 transition-all duration-100 follower opacity-0 group-hover:opacity-100' />
//         </>
//     );
// }



// Section.propTypes = {
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
//     image: PropTypes.string,
// };

// export default function Projectcard() {
//     return (
//         <>
//             <InView>
//                 {({ inView, ref }) => (
//                     <div ref={ref}>
//                         <Transition.Root show={inView}>

//                             <FadeIn delay="delay-[0ms]">
//                                 <Section
//                                     name={"billow"}
//                                     description={"track of all of your spending and bills"}
//                                     link={"https://github.com/Jingyue-Wu/billow"}
//                                     image={"test.png"}
//                                 />
//                             </FadeIn>

//                             <FadeIn delay="delay-[100ms]">
//                                 <Section
//                                     name={"switchify"}
//                                     description={"seamlessly transfer playlists between spotify and youtube"}
//                                     link={"https://github.com/Jingyue-Wu/switchify"}
//                                     image={"test.png"}
//                                 />
//                             </FadeIn>

//                             <FadeIn delay="delay-[200ms]">
//                                 <Section
//                                     name={"studyspot"}
//                                     description={"fix your unproductivity through gamification and web3"}
//                                     link={"https://github.com/Jingyue-Wu/study-spot"}
//                                     image={"test.png"}
//                                 />
//                             </FadeIn>

//                             <FadeIn delay="delay-[300ms]">
//                                 <Section
//                                     name={"crypto ticker"}
//                                     description={"sleek desktop cryptocurrency ticker and smart display that shows real-time market trends and weather"}
//                                     link={"https://github.com/Jingyue-Wu/crypto-ticker"}
//                                     image={"test.png"}
//                                 />
//                             </FadeIn>

//                             <FadeIn delay="delay-[400ms]">
//                                 <Section
//                                     name={"doodleguesser"}
//                                     description={"multiplayer digital drawing and guessing game"}
//                                     link={"https://github.com/Jingyue-Wu/doodle-guesser"}
//                                     image={"test.png"}
//                                 />
//                             </FadeIn>


//                             <FadeIn delay="delay-[500ms]">
//                                 <Section
//                                     name={"game of life"}
//                                     description={"interface for conway's cellular automaton"}
//                                     link={"https://github.com/Jingyue-Wu/game-of-life"}
//                                 />
//                             </FadeIn>

//                             <FadeIn delay="delay-[600ms]">
//                                 <Section
//                                     name={"diep"}
//                                     description={"minimalist single player 2D shooter game based on diep.io"}
//                                     link={"https://github.com/Jingyue-Wu/diep-game"}
//                                 />
//                             </FadeIn>
//                             <FadeIn delay="delay-[700ms]">
//                                 <Section
//                                     name={"photography"}
//                                     description={"some of my photography work!"}
//                                     link={"/gallery"}
//                                 />
//                             </FadeIn>

//                             <FadeIn delay="delay-[800ms]">
//                                 <Section
//                                     name={"386 robotics"}
//                                     description={"nonprofit competitive robotics organization"}
//                                     link={""}
//                                 />
//                             </FadeIn>
//                         </Transition.Root>
//                     </div>

//                 )}
//             </InView >
//         </>
//     );

// }

// // export default function ProjectCard() {
// //     return (
// //         <div>

// //     <div className="animate-fade-up group opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}> 
// //         <Section
// //             name={"billow"}
// //             description={"track of all of your spending and bills"}
// //             link={"https://github.com/Jingyue-Wu/billow"}
// //             image={"test.png"}
// //         />
// //     </div>
// //     <div className="animate-fade-up group opacity-0" style={{ animationDelay: '0.2s' , animationFillMode: 'forwards'}}>
// //         <Section
// //             name={"switchify"}
// //             description={"seamlessly transfer playlists between spotify and youtube"}
// //             link={"https://github.com/Jingyue-Wu/switchify"}
// //             image={"test.png"}
// //         />
// //     </div>
// //     <div className="animate-fade-up group opacity-0" style={{ animationDelay: '0.3s' , animationFillMode: 'forwards'}}>
// //         <Section
// //             name={"studyspot"}
// //             description={"fix your unproductivity through gamification and web3"}
// //             link={"https://github.com/Jingyue-Wu/study-spot"}
// //             image={"test.png"}
// //         />
// //     </div>
// //     <div className="animate-fade-up group opacity-0" style={{ animationDelay: '0.4s' , animationFillMode: 'forwards'}}>
// //         <Section
// //             name={"crypto ticker"}
// //             description={"sleek desktop cryptocurrency ticker and smart display that shows real-time market trends and weather"}
// //             link={"https://github.com/Jingyue-Wu/crypto-ticker"}
// //             image={"test.png"}
// //         />
// //     </div>
// //     <div className="animate-fade-up group opacity-0" style={{ animationDelay: '0.5s' , animationFillMode: 'forwards'}}>
// //         <Section
// //             name={"doodleguesser"}
// //             description={"multiplayer digital drawing and guessing game"}
// //             link={"https://github.com/Jingyue-Wu/doodle-guesser"}
// //             image={"test.png"}
// //         />
// //     </div>
// //     <div className="animate-fade-up group opacity-0" style={{ animationDelay: '0.6s' , animationFillMode: 'forwards'}}>
// //         <Section
// //             name={"game of life"}
// //             description={"interface for conway's cellular automaton"}
// //             link={"https://github.com/Jingyue-Wu/game-of-life"}
// //         />
// //     </div>
// //     <div className="animate-fade-up group opacity-0" style={{ animationDelay: '0.7s' , animationFillMode: 'forwards'}}>
// //         <Section
// //             name={"diep"}
// //             description={"minimalist single player 2D shooter game based on diep.io"}
// //             link={"https://github.com/Jingyue-Wu/diep-game"}
// //         />
// //     </div>
// //     <div className="animate-fade-up group opacity-0" style={{ animationDelay: '0.8s' , animationFillMode: 'forwards'}}>
// //         <Section
// //             name={"photography"}
// //             description={"some of my photography work!"}
// //             link={"/gallery"}
// //         />
// //     </div>
// //     <div className="animate-fade-up group opacity-0" style={{ animationDelay: '0.9s' , animationFillMode: 'forwards'}}>
// //         <Section
// //             name={"386 robotics"}
// //             description={"nonprofit competitive robotics organization"}
// //             link={""}
// //         />
// //     </div>
// //     </div>
// //     )
// // }

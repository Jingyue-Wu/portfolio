import PropTypes from 'prop-types';

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
            <Section
                name={"billow"}
                description={"track of all of your spending and bills"}
                link={"https://github.com/Jingyue-Wu/billow"}
            />

            <Section
                name={"studyspot"}
                description={"fix your unproductivity through gamification and web3"}
                link={"https://github.com/Jingyue-Wu/study-spot"}
            />

            <Section
                name={"crypto ticker"}
                description={"sleek desktop cryptocurrency ticker and smart display that shows real-time market trends and weather"}
                link={"https://github.com/Jingyue-Wu/crypto-ticker"}
            />

            <Section
                name={"doodleguesser"}
                description={"multiplayer server-based digital drawing and guessing game"}
                link={"https://github.com/Jingyue-Wu/doodle-guesser"}
            />

            <Section
                name={"game of life"}
                description={"interface for conway's cellular automaton"}
                link={"https://youtube.com/"}
            />


            <Section
                name={"diep"}
                description={"minimalist single player 2D shooter game based on diep.io"}
                link={"https://github.com/Jingyue-Wu/diep-game"}
            />

            <Section
                name={"photography"}
                description={"some of my photography work!"}
                link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            />

            <Section
                name={"386 robotics"}
                description={"nonprofit competitive robotics organization"}
                link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            />
        </>
    );

}

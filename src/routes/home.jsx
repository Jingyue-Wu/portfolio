import Footer from '/src/components/footer.jsx';
import { useState } from 'react';

const hobbiesList = [
    "biking along the lake with friends",
    "fixing my 3d printer",
    "vibing to indie music",
    "going on undexpected adventures",
    "building another keyboard",
    "swimming laps at the pool",
    "designing robots",
    "painting with bob ross",
    "kayaking at the pond",
    "cooking tomato and egg noodles",
    "walking through museums",
];


export default function Home() {
    let index = Math.floor((Math.random() + 0.0001) * (hobbiesList.length));

    const [hobbies, setHobbies] = useState(hobbiesList[index]);
    console.log(index);

    const handleClick = () => {
        index = (index + 1) % hobbiesList.length;
        setHobbies(hobbiesList[index]);
    };

    return (
        <>
            <div className="h-full m-5 ml-8 lg:ml-0 text-start">
                <h1 className='text-3xl font-bold'>hi, im jingyue!</h1>
                <br />

                <p >step into my digital sanctuary!</p>
                <br />
                <p> kick back, relax and grab yourself a beverage</p>
                <br />
                <p>
                    i&apos;m based in toronto, ontario where i am studying software engineering. when i&apos;m not the grind, you can find me going out to take photos, learning about blockchain, and{" "}
                    <a href="#" className='underline' onClick={handleClick}>{hobbies}.</a>
                </p>
                <br />
                <p>Reach out anytime at <a className='underline' href="mailto:wu588@mcmaster.ca">wu588 at mcmaster dot ca</a></p>

                <br />

                <Footer />
            </div>
        </>
    );
}
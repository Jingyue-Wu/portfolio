
export default function Home() {

    return (
        <>
            <div className="w-100 h-full m-5 ml-8 lg:ml-0 text-start">
                <h1 className='text-3xl font-bold'>hi, im jingyue!</h1>
                <br />

                <p >Welcome to my web-home!</p>
                <br />
                <p>Go ahead, grab yourself something to drink. I have a fridge full of chrysanthemum tea 🧃.</p>
                <br />
                <p>
                    I’m currently based in sunny Berkeley, CA ☀️ where I study computer science. When Im not doing ML problem sets, I enjoy beverages, experimenting with digital creative tools, and talking about the idea of going to the gym.
                </p>
                <br />
                <p>Reach out anytime at tiffanywang at berkeley dot edu.</p>

                <br />

                <ul className="flex gap-5">
                    <li><a href="https://www.linkedin.com/in/jingyue-wu/"><img className="w-6 h-6" src="linkedin.svg"></img></a></li>
                    <li><a href="https://github.com/Jingyue-Wu"><img className="w-6 h-6" src="github.svg"></img></a></li>
                    <li><a href="https://www.instagram.com/euygnij/"><img className="w-6 h-6" src="instagram.svg"></img></a></li>
                    <li><a href="https://bento.me/jingyue"><img className="w-6 h-6" src="bento.svg"></img></a></li>
                </ul>

            </div>
        </>
    );
}
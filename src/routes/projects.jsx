import Projectcard from '/src/components/projectcard.jsx';


export default function Projects() {
    return (
        <>
            <div className="h-full m-5 ml-8 lg:ml-0 text-start lg:w-[600px]">
                <p>check out some of my favorite projects here! </p>


                <Projectcard name="hi"/>
            </div>
        </>
    );
}
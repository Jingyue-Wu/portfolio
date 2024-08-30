import PropTypes from "prop-types"
import FadeIn from "/src/components/Animation.jsx"
import { useState } from "react"

function Section({ name, description, link, image }) {
  const [imageVisible, setImageVisible] = useState(false)
  const [imgPos, setImgPos] = useState({ x: -9999, y: -9999 })

  const updatePos = (e) => {
    const parentRect = e.currentTarget.getBoundingClientRect()
    setImgPos({
      x: e.clientX - parentRect.left + 100,
      y: e.clientY - parentRect.top + 100,
    })
  }

  return (
    <>
      <div
        className={`opacity-0 ${
          imageVisible ? "lg:opacity-100" : "lg:opacity-0"
        } absolute z-50 h-24 w-96 object-cover transition-opacity duration-200`}
        style={{ left: `${imgPos.x}px`, top: `${imgPos.y}px` }}
      >
        <img className="z-50 rounded-2xl" src={image} alt="project image" />
      </div>

      <div
        className=""
        onMouseEnter={(e) => {
          setImageVisible(true)
          updatePos(e)
        }}
        onMouseLeave={() => {
          setImageVisible(false)
          setImgPos({ x: -9999, y: -9999 })
        }}
        onMouseMove={(e) => {
          updatePos(e)
        }}
      >
        <div className="py-7 transition-all duration-200 hover:text-primary">
          <a
            className="project group"
            href={link}
            style={{ position: "relative" }}
          >
            <h1 className="text-xl font-bold">{name}</h1>
            <p>{description}</p>
          </a>
        </div>
      </div>
      <hr className="bg-gray-200 border-blue-500" />
    </>
  )
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default function ProjectSection() {
  return (
    <>
      <div className="flex flex-col-reverse">
        <FadeIn delay="delay-[1100ms]">
          <Section
            name={"photography"}
            description={"check out some of my photography work!"}
            link={"/gallery"}
            image={"/photos/36.jpg"}
          />
        </FadeIn>

        <FadeIn delay="delay-[1100ms]">
          <Section
            name={"solaris"}
            description={"aluminum 60% diy keyboard kit -coming soon"}
            link={""}
            image={"/projects/solaris.png"}
          />
        </FadeIn>

        <FadeIn delay="delay-[900ms]">
          <Section
            name={"game of life"}
            description={
              "clean interface for conway's famous cellular automaton"
            }
            link={"https://github.com/Jingyue-Wu/game-of-life"}
            image={"/projects/gameoflife.png"}
          />
        </FadeIn>

        <FadeIn delay="delay-[700ms]">
          <Section
            name={"studyspot"}
            description={
              "level up your productivity through gamification and web3"
            }
            link={"https://github.com/Jingyue-Wu/study-spot"}
            image={"/projects/studyspot.png"}
          />
        </FadeIn>

        <FadeIn delay="delay-[600ms]">
          <Section
            name={"smart display"}
            description={
              "sleek desktop smart display that shows real-time market trends and weather"
            }
            link={"https://github.com/Jingyue-Wu/smart-display"}
            image={"/projects/smartdisplay.jpg"}
          />
        </FadeIn>

        <FadeIn delay="delay-[500ms]">
          <Section
            name={"switchify"}
            description={
              "seamlessly transfer playlists from spotify to youtube"
            }
            link={"https://github.com/Jingyue-Wu/switchify"}
            image={"/projects/switchify.jpg"}
          />
        </FadeIn>

        <FadeIn delay="delay-[400ms]">
          <Section
            name={"billow"}
            description={"track of all of your spending and bills in one place"}
            link={"https://github.com/Jingyue-Wu/billow"}
            image={"/projects/billow.jpg"}
          />
        </FadeIn>

        <FadeIn delay="delay-[300ms]">
          <Section
            name={"reverie"}
            description={
              "study and chill with pomodoro, cool art and customizable lofi audio"
            }
            link={"https://github.com/Jingyue-Wu/reverie"}
            image={"/projects/reverie.png"}
          />
        </FadeIn>

        <FadeIn delay="delay-[200ms]">
          <Section
            name={"pantry palate"}
            description={
              "discover new foods while helping the environment with ai"
            }
            link={"https://github.com/Jingyue-Wu/pantry-palate"}
            image={"/projects/pantry.jpg"}
          />
        </FadeIn>

        <FadeIn delay="delay-[100ms]">
          <Section
            name={"copybara"}
            description={
              "clipboard manager browser extension that allows you to copy and paste from anything"
            }
            link={"https://github.com/Jingyue-Wu/copybara"}
            image={"/projects/copybara.png"}
          />
        </FadeIn>

        <FadeIn delay="delay-[0ms]">
          <Section
            name={"bridgeup"}
            description={
              "helps commuters avoid long delays at welland canal bridges"
            }
            link={"https://github.com/Jingyue-Wu/bridgeup"}
            image={"/projects/bridge-up.png"}
          />
        </FadeIn>

        {/* <FadeIn delay="delay-[800ms]">
                                <Section
                                    name={"doodleguesser"}
                                    description={"multiplayer online drawing and guessing game"}
                                    link={"https://github.com/Jingyue-Wu/doodle-guesser"}
                                />
                            </FadeIn> */}

        {/* <FadeIn delay="delay-[900ms]">
                                <Section
                                    name={"game of life"}
                                    description={"clean interface for conway's famous cellular automaton"}
                                    link={"https://github.com/Jingyue-Wu/game-of-life"}
                                />
                            </FadeIn> */}

        {/* <FadeIn delay="delay-[1000ms]">
                                <Section
                                    name={"diep"}
                                    description={"minimalist single player 2D shooter"}
                                    link={"https://github.com/Jingyue-Wu/diep-game"}
                                />
                            </FadeIn> */}
      </div>
    </>
  )
}

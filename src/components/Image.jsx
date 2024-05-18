import PropTypes from "prop-types"

export default function Image({ image }) {
  return (
    <>
      <a href={image} target="_blank" rel="noreferrer">
        <img
          className="mt-3 w-80 align-middle"
          loading="eager"
          src={image}
          alt=""
        />
      </a>
    </>
  )
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

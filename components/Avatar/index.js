import PropTypes from 'prop-types'
import styles from './styles'

export default function Avatar({ alt, src, withLbl, lbl }) {
  return (
    <>
      <div>
        <img src={src} alt={alt} />
        {withLbl && <strong>{lbl || alt}</strong>}
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  withLbl: PropTypes.bool.isRequired,
  lbl: PropTypes.string,
}

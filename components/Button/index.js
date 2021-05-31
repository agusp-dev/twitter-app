import PropTypes from 'prop-types'
import { colors } from '../../styles/theme'

export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>

      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          background: ${colors.black};
          border: 0;
          color: ${colors.white};
          cursor: pointer;
          border-radius: 100px;
          font-size: 16px;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
        }
        /**
        * button svg
        */
        button > :global(svg) {
          margin-right: 8px;
        }
        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

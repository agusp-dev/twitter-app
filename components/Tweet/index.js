import PropTypes from 'prop-types'
import Avatar from 'components/Avatar/index'
import styles from './styles'

export default function Tweet({ username, avatar, message }) {
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{styles}</style>
    </>
  )
}

Tweet.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

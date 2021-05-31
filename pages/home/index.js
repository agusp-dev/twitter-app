import { useEffect, useState } from "react"
import AppLayout from "../../components/appLayout/AppLayout"
import styles from "./styles"
import Tweet from "../../components/Tweet/index"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, message }) => (
            <Tweet
              key={id}
              id={id}
              username={username}
              avatar={avatar}
              message={message}
            />
          ))}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>{styles}</style>
    </>
  )
}

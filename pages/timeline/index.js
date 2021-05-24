import Link from 'next/link'
import AppLayout from '../../components/appLayout/AppLayout'
import styles from '../../styles/Timeline.module.css'
import hello from '../api/hello'

export default function Timeline({ name }) {
  return (
    <AppLayout>
      <h1 className={ styles.h1 }>This is a timeline of { name }</h1>
      <Link href='/'>Go Home</Link>
    </AppLayout>
  )
}

Timeline.getInitialProps = async () => {
  const res = await fetch('/api/hello')
  const json = await res.json()
  return json
}
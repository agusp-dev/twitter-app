import { fonts, colors } from '../../styles/theme'
import { addOpacityToColor } from '../../styles/utils'

export default function AppLayout({ children }) {
	const backgroundColor = addOpacityToColor(colors.primary, 0.3)
  return (
		<>
			<main>{ children }</main>
			<style jsx global>{`
				html,
				body {
					background-image: 
						radial-gradient(${backgroundColor} 1px, transparent 1px),
						radial-gradient(${backgroundColor} 1px, transparent 1px);
					background-position: 0 0 25px 25px;
					background-size: 50px 50px;
					padding: 0;
					margin: 0;
					font-family: ${fonts.base}
				}
				* {
					box-sizing: border-box;
				}
		`}</style>
		</>
	)
}

/**
 * html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
 */
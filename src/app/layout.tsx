import type { Metadata } from 'next'

export const metadata : Metadata = {
  title: {
    absolute: '', // ignore title.template 
    default: 'My site title - MH',
    template: '%s | Mosharaf Hossain',
  },
  description: 'My site description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
    >
      <body
         style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          
          margin: 0,
          padding: 0,
        }}
      >
          <header 
            style={{
              padding: '1rem',
              background: 'lightblue',
              textAlign: 'center',

            }}
          >
            {/* metadata is not assignable to the react node as it is typed as  Metadata */}

            <p>Header Part</p>
          </header>

          <main
            style={{
              textAlign: 'center',
            }}
          >
            {children}
          </main>

          <footer
            style={{
              marginTop: 'auto',
              
              background: 'lightblue',
              textAlign: 'center',
              padding: '1rem',
            }}
          >
              <p>Footer Part</p>
          </footer>

      </body>
    </html>
  )
}

/*
******Routing Metadata :********
Ensuring proper search engine optimization(SEO) is cucial for increasing visibility and attracting users.

Next js introduced the Metadata API which allows you to define metadata for each page.
Metadata ensure accurate and relevant information is displayed when the page is shared or indexed on social media or search engines.
Configuring metadata:
layout.tsx or page.tsx

Export static metadata object 
Or export dynamic generateMetadata function.

*********Metadata rules:********
Both layout.tsx and page.tsx can export metadata. If defined in a layout , it applies to all pages in that layout 
But if defined in a page, it applies only to that page.
Metadata is read in order , from the root level down to the final page level.

When there,s metadata in multiple places for the same route, they get combined, but page metadata will replace 
layout metadata if they have same properties.
This rule applies to any level of nested layouts and pages in the app.

Dynamic metadata --
the current route parameters, external data or metadata in parent segment.

To define dynamic metadata, export a function named generateMetadata that accepts the current route parameters as an argument.

*/

import type { Metadata } from 'next';
import { UserProvider } from '@/components/AuthProvider';

export const metadata : Metadata = { // static metadata object
  title: {
    absolute: '', // it ignore title.template 
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
              <UserProvider>
                {children}
              </UserProvider>
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

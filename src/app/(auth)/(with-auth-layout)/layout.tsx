 /* 
 
*****layout
layout.tsx is the layout component that will be used to wrap all the pages in the application.
If we delete it along with the app folder next automatically populates it, when we load root route.
This file magically created. 

root layout within the app folder is rendered first which include children props and it,s a mandatory layout for every nextjs project.

representing [productId] folder and productId folder has it,s own layout this replaces the children props 
in the root layout. Finally page.tsx in the productId folder replaces the childrren props in the productId layout.
Which why we see the details productId about product 100 in the browser.

 http://127.0.0.1:3000/products/100

 This approach of nested layout allows us to create layout that apply to only to specific areas of our app. 
 

 ******Route groups uses to organize your project in a manner that doesn,t affect the URL path structure.
 
 Another value of use of the route group is to selectively apply a layout to certain segments by leaving others unchanged.
 Large projects used with numerous layouts and route segments can be organized in a more manageable way.
 */

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <h2>Inner Layout from route group</h2>
        {children}
      </>
    )
}
 /*
 In Next.js the app router introduced two advance routing
 1. Parallel routes
 2. Intercepting routes
  ***Intercepting routes****
  Intercepting routes allows us to intercept or stop the default routing behavior to
  present an alternative view or component when navigating through the UI, while still preserving
  the intended route for scenarios like page reloads.
  This can be useful if you want to show a route while keeping the context of the 
  current page.

Intercepting routes conevntions:
(.)foldername
inside foldername -> page.tsx -> return jsx with (.)
It shows same url but intercepted content view if user stil not reload it.
If reload it it will as expected route.
Convention:
(.) to match segments on the same level

 (.) prefix
 If one level the use (..)
 If two level the use (..)(..) but there is an issue on two level intercepting route doesn,t work.
 (...) TO MATCH SEGMENTS FROM ROOT app directory.
 

****Route handlers
We can also create custom request handlers for our routes using a feature called route handlers.
Unlike page routes, which respond with HTML content, route handlers allow you to create RESTful endpoints, giving you full
control over the response data.
There is no overhead of having to create and configure a separate server, as the route handlers are built into the Next.js app.

$$$ Route handlers are also great for making external API requests.
$$Route handlers run server-side , ensuring that sensitive data like private keys remain secure and never exposed to the client / browser.

$$$$Router handlers are equivalent of API routes in Page router.
npx create-next-app route-handlers-demo --ts
To test route handlers use VS code extension REST client named as Thunder Client



 */
export default function ComDashboard({
    children,
    users,
    revenue,
    notifications,
    login
}: { 
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) {
    const isLoggedIn = false; // useAuth();

    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div style={{ display: "flex", }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div>{notifications}</div>
            </div>
        </div>
    ) : (
        login
    );
}
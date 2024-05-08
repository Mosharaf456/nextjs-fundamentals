 /*
 In Next.js the app router introduced twon advance routing
 1. Parallel routes
 2. Intercepting routes
  ***Intercepting routes****
  Intercepting routes allows us to intercept or stop the default routing behaviour to
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
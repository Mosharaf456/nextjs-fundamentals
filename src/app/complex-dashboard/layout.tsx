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
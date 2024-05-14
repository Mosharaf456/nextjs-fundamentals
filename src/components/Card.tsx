/*
Drawbacks of CSR:
SEO 
- Search engine crawlers can't see the content of the page
- Large bundle size
- The initial page load is slow as the browser has to download , parse and execute the JS bundle before rendering the page user sees any meaniningful content 

SSR 
client request -- server response as a fully rendered HTML page + js reference (Non-interactive UI)

SEO friendly, HTML content immediately visible, faster initial load time, less JS to download and execute

Full interactivity is on hold until the JS bundle comprising react itself along with your app specific code 
has been completely downloaded and executed by the browser know as hydration phase is where static HTML page 
initially served by the server is brought to life.
During hydration ,react takes control to the browser reconstructing component tree in the memory based on the static
HTML that was served by the server. It carefully plans the placement of interactivity elements within the tree.
Then react proceeds to bind the necessary JS logic to these elements to make them interactive.

This involve initializing the app state, attaching event handlers for actions such as clicks and mousehover, 
and setting up any other dynamic functionality for a fully interactive user experience.

1. SSG - built time occurs when application is deployed on the server. already rendered and ready to serve to the client.
It is ideal for content that doesn,t change often , like blog posts.
2. SSR - renders pages on-demand when the client requests them. It is ideal for content that changes frequently.
It is suitable for personalized content like social media feeds where the HTML depends on the logged-in user.

SSR is significatly improvement over CSR , providing faster the initial page loads and better SEO.


Drawbacks of SSR :

1. haved to fetch data everything before rendering the page 
Components cannot start rendering and the pause or wait while data is still being loaded.

If a component needs to fetch data from DB or from API,
it will have to wait until the data is fetched before it can start rendering by server.
This can delay response time to the browser as server must finish fetching data before it can send any pat of the page can be sent 
to the browser/client.

2. Have to load everything(JS) before hydrate anything
For successfull hydration where react add interactivity to the server-rendered HTML, the component tree in the browser must exactly
match the server-genrated component tree.

This means that all the JS for the compoents must be loaded on the client before start the hydration any of them.

3. SSR related to hydration itself 
React hydrates the compoent tree in a single pass, meaning once it starts hydrating it,s won,t stop untill it has finished with the entire tree.
All compoents must be hydrated before you can intract with any of them.


Create all or nothing waterfall problem that spans from server to client , where each must be resolved before moving to the next one.

This is inefficient if the some of the parts of your app are slower that others, as is often case in the real world apps.

Beacuse of these limitations the react team introduced a new and improved SSR architecture which is
Suspense SSR architecture.

Use the <Suspense> component to unlock two SSR feature: 
1. HTML straeming on the server . 
2. Selective hydration on the client - 
Code splitting allows you to mark specific code segements as not immediately necessary for loading , signalling your bundler to segregate them into separate 
<script> tags .

React.lazy for code splitiing enables you to separate the main sections code from the primary JS bundle. 



The JS containing the React and the code for the entire App , excluding the main sectiin, can now be downloaded independently by the client, without having to wait for the main section cpde.
This crucial cause by wrapping the main section within suspense , you have indicating react that it shsould n,t present the rest of the page from
not just streaming but also hydrating the feature called selective hydration.

selective hydration- allows for hydration of sections as the become available , before the rest of the HTML and the JS code are fully loaded. 


Heavy piece of JS doesn,t prevent rest of the page from being interactive.
Hydrate anything to interact with anything. 
React prioritise hydration based on user interaction by automatically by react.


Should users really have to download so much data ? 


Should all compoent be hydrated , even though that don,t need ineractivity?

Should so much work done in the user,s device? 



CSR-> SSR -> Suspense for SSR


Suspense for SSR challenges :
increase bundle sizes leading to execessive download for users .
Unnessary hydration delaying interactivity for users.
Extensive client side processing that could result in poor performance .

So A more powerfull solution is react server components(RSC).

React server component(RSC), represent a new architecture designed by the React team.
This approach aims to leverage the strengths of both server and client environments, optimizing for efficiency, load times and interactivity.


The architecture introduces dual component model 

1. Server components -
2. Client components -

This distinction allows you to decide which parts of your app should be rendered on the server 
and which should be rendered on the client.

Unlike client components, their code stays on the server and is never sent or downloaded to the client.


Benifits of RSC:
1. Server Components don,t send code to client , allowing large dependencies to remain server-side.These benfites slower internet or less capable devices eliminiting the need 
to download , parse and execute large JS for these components. 
Additinally , it removes the hydration step , speeding up app loading and interaction . 

2. Direct access to server resources -
Server components can access server resources directly , such as databases or file systems, without the need for additional API calls or client side processing. 

Leveraging the server,s computational power and proximity to data sources. they manage compute-inensive rendering tasks and send only interactive 
pieces of code to the client.

3. Enhances security  - Enhance security by keeping sensitive data and logic , including tokens and API keys away from the client-side.


4. Improved Data fetching - Server components can fetch data directly from the server , reducing the need for client side data fetching and improving performance.

5.Server components enhances data fecthing efficiency . 

Typically, when fetching data on the client-side using useEffect, a child component cannot begin loading it,s data until the parent component has finished loading it,s data.
This sequential fetching can slow down the rendering process and delay the time it takes for the page to become interactive.

Server components can fetch data in parallel , allowing child components to load data independently of their parent components.

request latency is reduced and the overall performance becomes improved, eliminiting client-server "waterfalls". 

6.Caching enables
Server components can cache data , reducing the need for repeated data fetching request and improving performance.

7. Faster initial page load and first contentful paint -

8. SEO 
9. Steaming -- divided into mangeable chuunks which are then streamed to the client as soon as they are ready . 
eliminting the need to wait for entire page to finish rendering on the server . 


RSC condt::
Server components take charge of data fetching and static rendering , while client components are tasked with rendering the interactive 
elements of the application. 

the bottom line is that RSCs are a powerful new architecture that combines the best of server and client side rendering ,
all using single language , a single framework and a cohesive set of APIs .And also improved rendering techniques and also 
overcoming the limitations . 

RSC key: 
RSC introduces a new way of building React apps by separating components two type:  server and client components.
Server components : only run on server and accessing data and preparing content without being sent to browser  which make faster because less information needs to download . 
They can,t manage state, clicks or  interactions with the browser directly. 

Clients components : work in the user,s browser and handle all the interactivity parts of the app liek clicking and typing . 

They can also rendered on the server for fast intitial load of the site . This setup helps make website faster, secure and easier , no matter where they are or 
what device they,re using .

********the app router in NEXT js is built around the RSC architecture in the latest v14 
















*/

const Card = ({ children }: { children: React.ReactNode }) => {
    const cardStyle = {
        padding: "100px",
        margin: "10px",
        boxShadow: "0 4px 8px 0 rgb(0, 0, 0, 0.2)",
        border: "2px solid #ddd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return <div style={cardStyle}>{children}</div>
}

export default Card;



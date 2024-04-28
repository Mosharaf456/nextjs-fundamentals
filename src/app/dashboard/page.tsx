/* 
Project files can be safely collocated inside route segments if you want to render line chart component or BarChart component in the dashboard page.
Simply included the line chart component or BarChart component in the dashboard page of default exported component which is dashboard in our case.

Note: collocate your project files within the app directory it is not mandatory , you can keep them outside the app directory as well.
Within the source folder, you can create a seperate component folder for your project files and keep them there.
******It is good idea to define all your UI components in that directory and alos perfectly valid. ******

*/

function BarChart() {
    return (
        <h1>Bar Chart</h1>
    );
}

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <BarChart />
        </div>
    );
}
import UserAnalytics from "@/components/UserAnlytics";

export default function ComDashboard({ children }: { children: React.ReactNode}) {
    return (
        <div>
            <div>{children}</div>
            <UserAnalytics />
            <h1>Welcome Complex Dashboard!</h1>
        </div>
    )
}
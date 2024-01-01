import { Outlet } from "react-router-dom";

export function loader() {

    return null;
}

export default function HostDashboard() {

    return (
        <><h1>HostDashboard</h1><Outlet /></>
    )
}
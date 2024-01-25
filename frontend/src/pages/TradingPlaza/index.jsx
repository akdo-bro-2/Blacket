import { Navigate } from "react-router-dom";
import { useUser } from "@stores/UserStore";
import { SidebarBody } from "@components";

export default function TradingPlaza() {
    const { user } = useUser();

    if (!user) return <Navigate to="/login" />;
    else return (<SidebarBody>
        <h1>Trading Plaza</h1>
    </SidebarBody>)
}

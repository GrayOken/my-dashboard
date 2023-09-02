import React from "react";
import Bargraph from "./Bargraph";
import Transactions from "./Transactions";
import Revenue from "./Revenue";

export default function Dashboard() {
    return (
        <>
            <div className="dash-container">
                <header>
                    <h1>Welcome to your Dashboard</h1>
                </header>
                <div className="dash-components">
                    <Bargraph />
                    <Transactions />
                    <Revenue />
                </div>
            </div>
        </>
    )
}
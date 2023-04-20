import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import QuizCard from "../../components/QuizCard/QuizCard";

const Dashboard = () => {
    return (
        <div>
            <Navigation />
            <div className="m-8">
                <QuizCard />
            </div>
        </div>
    )
}

export default Dashboard;

import React from "react";
import LineChart from "../Components/lineChart";

const DashboardPage = () => {

    const data = [
        { date: new Date(2021, 0, 1), value: 30 },
        { date: new Date(2021, 1, 1), value: 50 },
        { date: new Date(2021, 2, 1), value: 80 },
        { date: new Date(2021, 3, 1), value: 60 },
        { date: new Date(2021, 4, 1), value: 90 },
        { date: new Date(2021, 5, 1), value: 100 },
        { date: new Date(2021, 6, 1), value: 120 },
    ];


    return <>
        <div className="hidden lg:block w-4/6 h-100 bg-teal-200 absolute top-0 right-0 m-10 rounded-[50px] libre-baskerville-regular-italic shadow-lg shadow-teal-700">
            {/* <div className="w-40 h-10 libre-baskerville-regular-italic m-4 ml-8 rounded-2xl text-center text-teal-900 p-1.5 shadow-lg shadow-shadowTeal-1">
                Dashboard
            </div>
            <hr /> */}
            <LineChart data={data} />
        </div>
    </>
}

export default DashboardPage;
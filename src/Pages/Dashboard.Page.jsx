import React from "react";
import LineChart from "../Components/lineChart";
import Table from "../Components/Table";


const DashboardPage = () => {

    const data = [
        { date: new Date(2021, 0, 1), Expense: 30, Income: 100 },
        { date: new Date(2021, 1, 1), Expense: 50, Income: 80 },
        { date: new Date(2021, 2, 1), Expense: 80, Income: 120 },
        { date: new Date(2021, 3, 1), Expense: 60, Income: 70 },
        { date: new Date(2021, 4, 1), Expense: 90, Income: 160 },
        { date: new Date(2021, 5, 1), Expense: 100, Income: 120 },
        { date: new Date(2021, 6, 1), Expense: 120, Income: 140 },
    ];


    return <>
        <div className="hidden lg:flex w-4/6 h-100 bg-teal-200 absolute top-0 right-0 m-10 rounded-[50px] libre-baskerville-regular-italic shadow-lg shadow-teal-700">
            <LineChart data={data} />
            <div className="w-102 h-101 m-10 ml-0 rounded-2xl bg-teal-200">
                <h2 className="m-2 ml-3 text-[15px] text-teal-800 bg-teal-200">Recent Transactions</h2>
                <hr className="text-teal-900" />
                <Table />
                <h2 className="mt-10 p-2 text-[15px] text-teal-800 bg-teal-200 border-b-[1px] border-teal-900">Transactions Details</h2>
                <CalculationBoxDesign name="Total Income" amount="$20000" />
                <CalculationBoxDesign name="Total Expense" amount="$5000" />
                <CalculationBoxDesign name="Balance" amount="$15000" />
                <CalculationBoxDesign name="Average Expense" amount="$2500" />
            </div>
            {/* <div>Add Expenses</div> */}
        </div>
    </>
}

const CalculationBoxDesign = (props) => {
    return <>
        <div className="w-full mt-1 text-[14px] bg-teal-200 flex justify-around p-1 border-b-[1px] text-teal-900">
            <div className="bg-teal-200 w-[50%] text-center">{props.name}</div>
            <div className="bg-teal-200 w-[50%] text-center">{props.amount}</div>
        </div>
    </>
}
export default DashboardPage;
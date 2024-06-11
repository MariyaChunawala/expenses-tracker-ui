import React from "react";

const Table = () => {
    const data = [
        { 'id': '1', 'expense': 'Food', 'amount': '-10000', 'date': '01/01/2021' },
        { 'id': '2', 'expense': 'Travel', 'amount': '-23456', 'date': '01/01/2021' },
        { 'id': '3', 'expense': 'Salary', 'amount': '+33333', 'date': '01/01/2021' },
        { 'id': '4', 'expense': 'Rent', 'amount': '+1234', 'date': '01/01/2021' },
        { 'id': '5', 'expense': 'Furniture', 'amount': '+7890', 'date': '01/01/2021' },
    ];

    // GET KEY COUNT,
    // init. css variable for width, with the value of 100/(keys.count)
    return (
        <>
            {data.map(data => (
                <table className="w-[100%]">
                    <tr className="w-[100%]">
                        <td className="table-td">{data.id}</td>
                        <td className="table-td">{data.date}</td>
                        <td className="table-td">{data.expense}</td>
                        <td className={`table-td ${data.amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{data.amount}</td>
                    </tr>
                </table>
            ))}
        </>
    )
}

export default Table;
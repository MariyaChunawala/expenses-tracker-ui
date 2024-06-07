import React, { useState } from "react";

const Sidebox = ({ name, clickHandler = () => { }, active }) => {

    return <>
        <div onClick={clickHandler}
            className={`text-center w-64 h-14 m-auto my-2 rounded-[20px] flex items-center justify-center bg-white shadow-xl text-teal-900 cursor-pointer
            ${active ? 'border-solid border-b-4 border-teal-800' : 'border-none'}`}>
            {name}
        </div>
    </>
}

const SideNavbar = (props) => {
    const [active, setActive] = useState('DashBoard');

    const handleClick = (name) => {
        setActive(name);
    };

    return <>
        <div className=" w-1/4 h-100 m-10 bg-teal-200 relative rounded-[50px] flex flex-col flex-wrap justify-center libre-baskerville-regular-italic shadow-sm">
            <div className="bg-teal-200 text-5xl text-center py-10 tracking-[3px] leading-[60px] gradient-logo z-10">
                Expenses Tracker Manager
            </div>
            <Sidebox name="Dashboard" clickHandler={() => handleClick('Dashboard')} active={active === 'Dashboard'} />
            <Sidebox name="Add Expenses" clickHandler={() => handleClick('Add Expenses')} active={active === 'Add Expenses'} />
            <Sidebox name="Add Incomes" clickHandler={() => handleClick('Add Incomes')} active={active === 'Add Incomes'} />
            <Sidebox name="View Transactions" clickHandler={() => handleClick('View Transactions')} active={active === 'View Transactions'} />
        </div>
    </>
}

export default SideNavbar;
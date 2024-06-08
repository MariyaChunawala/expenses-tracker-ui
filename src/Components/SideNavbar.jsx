import React, { useState } from "react";
import { Disclosure } from '@headlessui/react';
import { FaBars } from "react-icons/fa";
import { GiProfit, GiExpense } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { BiSolidDashboard } from "react-icons/bi";

const Sidebox = ({ name, clickHandler = () => { }, active }) => {

    return <>
        <div onClick={clickHandler}
            className={`text-center w-64 h-14 m-auto my-2 rounded-[20px] flex items-center justify-center bg-white shadow-xl shadow-[#1f9f71] text-teal-900 cursor-pointer
            ${active ? 'border-solid border-b-4 border-teal-800' : 'border-none'}`}>
            {name}
            {(name === 'Dashboard') ? <BiSolidDashboard className="text-3xl m-1" /> : ''}
            {(name === 'Add Expenses') ? <GiExpense className="text-3xl m-1" /> : ''}
            {(name === 'Add Incomes') ? <GiProfit className="text-3xl m-1" /> : ''}
            {(name === 'View Transactions') ? <GrTransaction className="text-3xl m-1" /> : ''}
        </div>
    </>
}

const Menu = ({ name, clickHandler = () => { }, active, md = false }) => {
    return <>
        <div onClick={clickHandler}
            className={`text-teal-900 p-4 text-center shadow-lg m-2 shadow-lg shadow-teal-100 rounded-full ml-4 cursor-pointer
            ${active ? 'border-solid border-2 border-teal-800' : 'border-none'}
            ${md ? 'h-20 libre-baskerville-regular-italic-size text-[30px]' : 'libre-baskerville-regular-italic'}`}>
            {name}
        </div>
    </>
}

const LgNavbar = ({ active, handleClick }) => {
    return <>
        <div className="hidden lg:flex w-1/4 h-100 m-10 bg-teal-200 relative rounded-[50px] flex flex-col flex-wrap justify-center libre-baskerville-regular-italic shadow-lg shadow-teal-700">
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

const SmNavbar = ({ active, handleClick }) => {
    return <>
        <div className="md:hidden flex flex-wrap justify-between w-full h-16 bg-teal-300">
            <div className="bg-teal-300 text-teal-950 text-2xl libre-baskerville-regular-italic m-4">
                Expenses Tracker Manager
            </div>
            <Disclosure>
                {() => (
                    <>
                        <Disclosure.Button className="float-right m-3">
                            <FaBars className="h-10 w-10 text-teal-950 bg-teal-50 rounded-lg p-1" />
                        </Disclosure.Button>
                        <Disclosure.Panel className="absolute top-16 w-full">
                            <Menu name="Dashboard" clickHandler={() => handleClick('Dashboard')} active={active === 'Dashboard'} />
                            <Menu name="Add Expenses" clickHandler={() => handleClick('Add Expenses')} active={active === 'Add Expenses'} />
                            <Menu name="Add Incomes" clickHandler={() => handleClick('Add Incomes')} active={active === 'Add Incomes'} />
                            <Menu name="View Transactions" clickHandler={() => handleClick('View Transactions')} active={active === 'View Transactions'} />
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    </>
}

const MdNavbar = ({ active, handleClick }) => {
    return <>
        <div className="hidden md:flex lg:hidden flex-wrap justify-between w-full h-24 bg-teal-300">
            <div className="bg-teal-300 text-teal-950 libre-baskerville-regular-italic-size text-[35px] m-6">
                Expenses Tracker Manager
            </div>
            <Disclosure>
                {() => (
                    <>
                        <Disclosure.Button className="float-right m-4 mr-6">
                            <FaBars className="h-16 w-16 text-teal-950 bg-teal-50 rounded-xl p-1" />
                        </Disclosure.Button>
                        <Disclosure.Panel className="absolute top-24 w-full">
                            <Menu name="Dashboard" clickHandler={() => handleClick('Dashboard')} active={active === 'Dashboard'} md />
                            <Menu name="Add Expenses" clickHandler={() => handleClick('Add Expenses')} active={active === 'Add Expenses'} md />
                            <Menu name="Add Incomes" clickHandler={() => handleClick('Add Incomes')} active={active === 'Add Incomes'} md />
                            <Menu name="View Transactions" clickHandler={() => handleClick('View Transactions')} active={active === 'View Transactions'} md />
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    </>
}

const SideNavbar = (props) => {
    const [active, setActive] = useState('Dashboard');

    const handleClick = (name) => {
        setActive(name);
    };

    return <>
        {/* Large Devices */}
        <LgNavbar active={active} handleClick={handleClick} />

        {/* Medium Devices */}
        <MdNavbar active={active} handleClick={handleClick} />

        {/* Mobile or Small Devices */}
        <SmNavbar active={active} handleClick={handleClick} />
    </>
}

export default SideNavbar;
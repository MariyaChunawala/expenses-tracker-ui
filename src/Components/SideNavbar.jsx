import React, { useContext } from "react";
import { Disclosure } from '@headlessui/react';
import { FaBars } from "react-icons/fa";
import { GiProfit, GiExpense } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { BiSolidDashboard } from "react-icons/bi";
import { ActiveProvider, ActiveContext } from "../Context/Active.Context";

const Sidebox = ({ name }) => {

    const { active, handleClick } = useContext(ActiveContext);

    return <>
        <div onClick={() => handleClick(name)}
            className={`text-center w-64 h-14 m-auto my-2 rounded-[20px] flex items-center justify-center bg-white shadow-xl shadow-shadowTeal-1 text-teal-900 cursor-pointer
            ${active === name ? 'border-solid border-b-4 border-teal-800' : 'border-none'}`}>
            {name}
            {(name === 'Dashboard') ? <BiSolidDashboard className="text-3xl m-1" /> : ''}
            {(name === 'Add Expenses') ? <GiExpense className="text-3xl m-1" /> : ''}
            {(name === 'Add Incomes') ? <GiProfit className="text-3xl m-1" /> : ''}
            {(name === 'View Transactions') ? <GrTransaction className="text-3xl m-1" /> : ''}
        </div>
    </>
}

const Menu = ({ name, md = false }) => {

    const { active, handleClick } = useContext(ActiveContext);

    return <>
        <div onClick={() => handleClick(name)}
            className={`text-teal-900 p-4 text-center m-2 shadow-lg shadow-teal-100 rounded-full ml-4 cursor-pointer
            ${active === name ? 'border-solid border-2 border-teal-800' : 'border-none'}
            ${md ? 'h-20 libre-baskerville-regular-italic-size text-[30px]' : 'libre-baskerville-regular-italic'}`}>
            {name}
        </div>
    </>
}

const LgNavbar = () => {
    return (
        <div className="hidden lg:flex w-1/4 h-100 m-10 bg-teal-200 relative rounded-[50px] flex flex-col flex-wrap justify-center libre-baskerville-regular-italic shadow-lg shadow-teal-700">
            <div className="bg-teal-200 text-5xl text-center py-10 tracking-[3px] leading-[60px] gradient-logo z-10">
                Expenses Tracker Manager
            </div>
            <Sidebox name="Dashboard" />
            <Sidebox name="Add Expenses" />
            <Sidebox name="Add Incomes" />
            <Sidebox name="View Transactions" />
        </div>
    );
};

const SmNavbar = () => {
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
                            <Menu name="Dashboard" />
                            <Menu name="Add Expenses" />
                            <Menu name="Add Incomes" />
                            <Menu name="View Transactions" />
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    </>
}

const MdNavbar = () => {
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
                            <Menu name="Dashboard" md />
                            <Menu name="Add Expenses" md />
                            <Menu name="Add Incomes" md />
                            <Menu name="View Transactions" md />
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    </>
}

const SideNavbar = (props) => {
    return (
        <ActiveProvider>
            {/* Large Devices */}
            <LgNavbar />

            {/* Medium Devices */}
            <MdNavbar />

            {/* Mobile or Small Devices */}
            <SmNavbar />
        </ActiveProvider>
    );
}

export default SideNavbar;
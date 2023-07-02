'use client';
import { Item } from "@/app/(app)/types/TableItens";
import Card from "@/components/card";
import { Edit, Trash } from "iconsax-react";
import { useState } from "react";
import SeachInput from "../Input";

function Table(props: any) {

    const { columns, rows, eventClick } = props

    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState(rows);
    const [filterValue, setFilterValue] = useState('');

    const itemsPerPage = 13;
    const currentPageData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const totalPages = Math.ceil(rows.length / itemsPerPage);

    const checkCondition = (status: string) => {
        switch (status) {
            case "Bom":
                return <div className="bg-success-light p-1 mt-1 animate-pulse rounded-full" />;
            case "Ruim":
                return <div className="bg-danger-light p-1 mt-1 animate-pulse rounded-full" />;
            case "Próximo de vencer":
                return <div className="bg-warning-light p-1 mt-1 animate-pulse rounded-full" />;
            default:
                return null;
        }
    };

    const checkQuantityStock = (qtnNow: number, total: number) => {
        const percent = (qtnNow / total) * 100;

        if (percent <= 10) {
            return <div className="h-1 bg-danger-light w-[6%]" />;
        } else if (percent < 45) {
            return <div className="h-1 bg-warning-light w-[35%]" />;
        } else if (percent < 80) {
            return <div className="h-1 bg-blue-400 w-[60%]" />;
        } else {
            return <div className="h-1 bg-blue-600 w-[80%]" />;
        }
    };

    const handleItem = (val: string) => {
        setFilterValue(val);
        setCurrentPage(1);
    };

    const filteredData = filterValue
        ? currentPageData.filter((item: Item) =>
            item.name.toLowerCase().includes(filterValue.toLowerCase())
        )
        : currentPageData;

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className="justify-between flex items-center p-6">
                <SeachInput filter={handleItem} />
                <div className="w-full max-w-[180px]">
                    <button className={`bg-background-light flex shadow-xl p-2 rounded-md text-white text-center text-sm items-center justify-center font-medium w-full hover:bg-itens-light transition-colors`}>
                        <p>
                            Adicionar item
                        </p>
                    </button>
                </div>
            </div>
            <Card className="overflow-auto flex w-full max-w-screen-2xl">
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr>
                            {columns.map((head: string) => (
                                <th key={head} className="border-b border-zinc-300/40 p-4">
                                    <div
                                        className="font-semibold text-sm text-zinc-300 leading-none opacity-70"
                                    >
                                        {head}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(({ id, name, expirationDate, status, qtnNow, total, price }: any, index: number) => {
                            const isLast = index === currentPageData.length - 1;
                            const classes = isLast ? "p-3" : "p-3 border-b border-zinc-300/40";

                            return (
                                <tr onClick={() => eventClick(currentPageData[index])} className="hover:cursor-pointer hover:bg-white/5 " key={index}>
                                    <td className={classes}>
                                        <div className="font-bold text-sm text-zinc-300">
                                            {id}
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="font-normal text-sm text-zinc-300">
                                            {name}
                                        </div>
                                    </td>
                                    <td className={`${classes}`}>
                                        <div className="font-medium text-sm text-white">
                                            {expirationDate}
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex-row items-center">
                                            <div className="flex gap-x-1 my-1">
                                                <div className="font-bold text-sm text-white">
                                                    {qtnNow}
                                                </div>
                                                <div className="font-normal text-sm text-zinc-400">
                                                    /{total}
                                                </div>
                                            </div>
                                            <div className="h-1 w-1/2 flex bg-neutral-600">
                                                {checkQuantityStock(qtnNow, total)}
                                            </div>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex items-center gap-x-2">
                                            <div className="font-normal text-sm text-white">
                                                {status}
                                            </div>
                                            {checkCondition(status)}
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="font-medium text-sm text-zinc-300">
                                            {price}
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex items-center justify-center gap-x-2">
                                            <button className="p-1 rounded-md hover:bg-itens-light">
                                                <Trash className="h-5 w-5" color="rgb(212 212 216)" variant="Bold" />
                                            </button>
                                            <button className="p-1 rounded-md hover:bg-itens-light">
                                                <Edit className="h-5 w-5" color="rgb(212 212 216)" variant="Bulk" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
            <div className="flex border-t border-zinc-300/20 justify-end">
                <nav className="p-3 inline-flex rounded-md shadow-sm">
                    <button onClick={goToPreviousPage} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-500 hover:bg-itens-primary transition-colors hover:ring-gray-300 hover:text-gray-50 focus:z-20 focus:outline-offset-0">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button key={index} onClick={() => goToPage(index + 1)} className="relative z-10 inline-flex items-center  px-4 py-2 ring-1 ring-inset ring-gray-500 text-sm font-medium hover:bg-itens-primary transition-colors hover:ring-gray-300 text-white hover:font-semibold focus:z-20 ">{index + 1}</button>
                    ))}
                    <button onClick={goToNextPage} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-500 hover:bg-itens-primary transition-colors hover:ring-gray-300 hover:text-gray-50 focus:z-20 focus:outline-offset-0">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </nav>
            </div>
        </div >
    )
}

export default Table
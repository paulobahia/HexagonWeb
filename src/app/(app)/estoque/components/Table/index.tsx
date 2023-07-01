'use client';
import { Item } from "@/app/(app)/types/TableItens";
import Card from "@/components/card";
import { Chart, Edit, SearchStatus, Trash } from "iconsax-react";
import { type } from "os";
import { useEffect, useState } from "react";

function Table(props: any) {


    const { columns, rows, eventClick } = props
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [search, setSearch] = useState("");
    const itensPorPagina = 13;

    const CheckCondition = (status: string) => {
        switch (status) {
            case "Bom":
                return (
                    <div className="bg-success-light p-1 mt-1 animate-pulse rounded-full" />
                )
            case "Ruim":
                return (
                    <div className="bg-danger-light p-1 mt-1 animate-pulse rounded-full" />
                )
            case "Próximo de vencer":
                return (
                    <div className="bg-warning-light p-1 mt-1 animate-pulse rounded-full" />
                )
            default:
                break;
        }
    }

    const checkQuantityStock = (qtnNow: number, total: number) => {
        var percent = (qtnNow / total) * 100

        if (percent <= 10) {
            return (
                <div className={`h-1 bg-danger-light w-[6%]`}></div>
            )
        }
        else if (percent >= 10 && percent < 45) {
            return (
                <div className={`h-1 bg-warning-light w-[35%]`}></div>
            )
        }
        else if (percent >= 45 && percent < 80) {
            return (
                <div className={`h-1 bg-blue-400 w-[60%]`}></div>
            )
        }
        else if (percent <= 80) {
            return (
                <div className={`h-1 bg-blue-600 w-[80%]`}></div>
            )
        }
    }

    const indiceInicial = (paginaAtual - 1) * itensPorPagina;
    const indiceFinal = indiceInicial + itensPorPagina;
    const itensDaPagina = rows.slice(indiceInicial, indiceFinal);

    const Filter = () => {
        return itensDaPagina.filter((item: Item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    return (
        <div>
            <div className="justify-between flex items-center p-6">
                <div className="flex items-center max-w-md bg-background-light shadow-sm rounded-lg " x-data="{ search: '' }">
                    <div className="w-full">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" className="w-full bg-background-light px-2 py-1 text-white rounded-md focus:outline-none"
                            placeholder="Pesquisar..." x-model="search" />
                    </div>
                    <div>
                        <button className="bg-background-light hover:bg-itens-light transition-colors shadow-lg gap-2 p-2 rounded-r-md justify-between cursor-pointer flex items-center">
                            <SearchStatus className="h-5 w-5 text-white" color="rgb(212 212 216)" variant="Bulk" />
                        </button>
                    </div>
                </div>
                <div className="w-full max-w-[180px]">
                    <button className={`bg-background-light flex shadow-xl p-2 rounded-md text-white text-center text-sm items-center justify-center font-medium w-full hover:bg-itens-light transition-colors`}>
                        <p>
                            Adicionar item
                        </p>
                    </button>
                </div>
            </div>
            <Card className="overflow-hidden flex w-full max-w-screen-2xl">
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
                        {Filter().map(({ id, name, expirationDate, status, qtnNow, total, price }: any, index: number) => {
                            const isLast = index === itensDaPagina.length - 1;
                            const classes = isLast ? "p-3" : "p-3 border-b border-zinc-300/40";

                            return (
                                <tr onClick={() => eventClick(itensDaPagina[index])} className="hover:cursor-pointer hover:bg-white/5 " key={index}>
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
                                    <td className={classes}>
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
                                            {CheckCondition(status)}
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
        </div >
    )
}

export default Table
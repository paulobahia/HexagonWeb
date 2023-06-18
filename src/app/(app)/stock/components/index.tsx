'use client';

import { ArrowUp2, Chart, Edit, Trash } from "iconsax-react";

import LineChart from "@/components/charts/LineChart";
import Card from "@/components/card";
import TableStock from "./TableStock";

import { TableStock_HEAD, TableStock_ROWS } from "@/variables/tables";
import { useState } from "react";

function CardStock(props: any) {

    const lineChartDataTotalSpentStock = [
        {
            name: "Preço de Venda",
            data: [5, 6, 8, 15, 10, 18, 20, 22, 24, 28, 26, 30],
            color: "#04D361",
        },
    ];

    const lineChartDataTotalBuyPrice = [
        {
            name: "Preço de Venda",
            data: [5, 6, 8, 9, 11, 12, 18, 10, 12, 8, 10, 13, 12, 8],
            color: "#F75A68",
        },
    ];

    const lineChartOptionsTotalSpentStock = {
        legend: {
            show: false,
        },
        theme: {
            mode: "light",
        },
        chart: {
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        tooltip: {
            style: {
                fontSize: "12px",
                fontFamily: undefined,
                backgroundColor: "#000000"
            },
            theme: 'dark',
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
        grid: {
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                style: {
                    colors: "#A3AED0",
                    fontSize: "12px",
                    fontWeight: "500",
                },
            },
            type: "text",
            range: undefined,
        },

        yaxis: {
            show: false,
        },
    };

    const [product, setProduct] = useState([])

    const handleItem = (val: any) => {
        console.log(val)
        setProduct(val)
    }

    return (
        <>
            <div className="h-full w-full hidden lg:flex max-w-sm xl:max-w-lg">
                <div className="fixed rounded-t-[20px] bg-background-secondary h-full w-full hidden lg:flex max-w-sm xl:max-w-lg">
                    <div className="flex-row flex-1 p-5">
                        <div className="flex justify-between items-center">
                            <div className="flex-row">
                                <p className="text-xl font-bold text-white">{product?.name}</p>
                                <p className="text-xs font-medium text-zinc-400">Pack ID: B3214</p>
                            </div>
                            <div className="flex items-start gap-x-3">
                                <button className="bg-background-light hover:bg-itens-light transition-colors shadow-lg gap-2 px-3 py-2 rounded-md justify-between cursor-pointer flex items-center">
                                    <Edit className="h-5 w-5" color="rgb(212 212 216)" variant="Bulk" />
                                    <p className="font-medium text-sm text-zinc-300">Editar</p>
                                </button>
                                <button className="bg-background-light hover:bg-itens-light transition-colors shadow-lg gap-2 p-2 rounded-md justify-between cursor-pointer flex items-center">
                                    <Trash className="h-5 w-5" color="rgb(212 212 216)" variant="Bulk" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center flex-1 justify-end gap-x-1">
                            <p className="text-sm font-medium text-zinc-300">Total:</p>
                            <p className="text-sm font-medium text-itens-primary">200 items</p>
                        </div>
                        <div className="flex items-center justify-between mt-5">
                            <div className="flex items-center justify-between gap-x-1">
                                <div className="bg-success-light p-1 animate-pulse rounded-full" />
                                <p className="text-sm font-medium text-white">190</p>
                                <div className="text-sm font-light text-zinc-400">Bom</div>
                            </div>
                            <div className="flex items-center justify-between gap-x-1">
                                <div className="bg-warning-light p-1 animate-pulse rounded-full" />
                                <p className="text-sm font-medium text-white">8</p>
                                <div className="text-sm font-light text-zinc-400">Próximo de vencer</div>
                            </div>
                            <div className="flex items-center justify-center gap-x-1">
                                <div className="bg-danger-light p-1 animate-pulse rounded-full" />
                                <p className="text-sm font-medium text-white">2</p>
                                <div className="text-sm font-light text-zinc-400">Ruim</div>
                            </div>
                        </div>
                        <div className="flex justify-center my-10">
                            <img className="h-2/6 w-2/6" src={product.imagePath} alt="Pimentão" />
                        </div>
                        <div className="flex gap-x-2">
                            <Card extra="flex flex-col w-full px-2">
                                <p className="text-xs font-medium text-zinc-400">
                                    Preço de venda:
                                </p>
                                <div className="flex gap-x-2 mt-2 items-center">
                                    <p className="text-xl font-bold text-white">R$ 7,29</p>
                                    <div className="bg-green-600 rounded-md flex items-center gap-x-2 py-0.5">
                                        <p className="text-xs font-bold text-white ml-2">
                                            3.4 %
                                        </p>
                                        <ArrowUp2 variant="Bold" className="font-bold w-3 h-3 text-white mr-1" />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <LineChart
                                        options={lineChartOptionsTotalSpentStock}
                                        series={lineChartDataTotalSpentStock}
                                    />
                                </div>
                            </Card>
                            <Card extra="flex flex-col w-full px-2">
                                <p className="text-xs font-medium text-zinc-400">
                                    Vendidos:
                                </p>
                                <div className="flex gap-x-2 mt-2 items-center">
                                    <p className="text-xl font-bold text-white">450</p>
                                    <div className="bg-green-600 rounded-md flex items-center gap-x-2 py-0.5">
                                        <p className="text-xs font-bold text-white ml-2">
                                            12 %
                                        </p>
                                        <ArrowUp2 variant="Bold" className="font-bold w-3 h-3 text-white mr-1" />
                                    </div>
                                </div>
                                <div className="flex mt-1">
                                    <p className="text-xs font-medium text-zinc-400">R$ 3280,5</p>
                                </div>
                                <div>
                                    <LineChart
                                        options={lineChartOptionsTotalSpentStock}
                                        series={lineChartDataTotalSpentStock}
                                    />
                                </div>
                            </Card>
                        </div>
                        <Card extra="flex flex-col w-full">
                            <p className="text-xs font-medium text-zinc-400">
                                Preço de compra:
                            </p>
                            <div className="flex gap-x-2 mt-2 items-center">
                                <p className="text-xl font-bold text-white">R$ 10,32</p>
                                <div className="bg-red-600 rounded-md flex items-center gap-x-2 py-0.5">
                                    <p className="text-xs font-bold text-white ml-2">
                                        9.4 %
                                    </p>
                                    <ArrowUp2 variant="Bold" className="font-bold w-3 h-3 text-white mr-1" />
                                </div>
                            </div>
                            <div >
                                <LineChart
                                    options={lineChartOptionsTotalSpentStock}
                                    series={lineChartDataTotalBuyPrice}
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <TableStock eventClick={(val: any) => handleItem(val)} columns={TableStock_HEAD} rows={TableStock_ROWS} />
        </>
    )
}

export default CardStock
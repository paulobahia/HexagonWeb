'use client';

import { ArrowUp2, Chart, Edit, Trash } from "iconsax-react";

import LineChart from "@/components/charts/LineChart";
import Table from "./Table";

import { TableStock_HEAD, TableStock_ROWS } from "@/variables/tables";
import { useState } from "react";

function MainStock(props: any) {

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

    const [product, setProduct]: any = useState({
        id: "#9",
        name: "Banana",
        expirationDate: "Mar 18, 2022 ás 08:20",
        imagePath: "https://frutasbrasilsul.com.br/wp-content/uploads/banana-nanica.png",
        status: "Bom",
        qtnNow: "28",
        total: "196"
    })

    return (
        <main className=" flex-1 px-5 py-3">
            <div className="text-black mt-3 rounded-t-lg bg-background-secondary rounded-md">
                <div className="grid grid-cols-4">
                    <div className="hidden xl:block">
                        <div className="col-span-1">
                            <div className="justify-end p-5 flex flex-col rounded-tl-lg h-full">
                                <div className="flex justify-between items-center">
                                    <div className="flex-row">
                                        <p className="text-xl font-bold text-white">{product.name}</p>
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
                                <div className="flex items-center justify-between mt-3">
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
                                <div className="h-full items-center flex justify-center m-3">
                                    <img className="h-[200px] w-[200px]" src={product.imagePath} alt="Pimentão" />
                                </div>
                                <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-1">
                                    <div className="2xl:col-auto col-span-2">
                                        <p className="text-xs font-medium text-zinc-400">
                                            Preço de venda:
                                        </p>
                                        <div className="row gap-x-2 mt-2 items-center xl:flex">
                                            <p className="text-xl font-bold text-white">R$ 7,29</p>
                                            <div className="bg-green-600 max-w-[4em] rounded-md flex items-center gap-x-2 py-0.5">
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
                                    </div>
                                    <div className="2xl:col-auto col-span-2">
                                        <p className="text-xs font-medium text-zinc-400">
                                            Vendidos:
                                        </p>
                                        <div className="flex gap-x-2 mt-2 items-center">
                                            <p className="text-lg font-bold xl:text-xl text-white">450</p>
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
                                    </div>
                                    <div className="col-span-2">
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
                                    </div>
                                </div>
                                <button className={`bg-background-light mt-3 hidden xl:flex shadow-xl p-2 rounded-md text-white text-center items-center justify-center font-semibold w-full hover:bg-itens-light transition-colors`}>
                                    <Chart variant="Bold" className="font-bold w-5 h-5 text-white mr-1" />
                                    <p>
                                        Estatísticas detalhadas
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 col-span-5 shadow-lg">
                        <Table eventClick={(val: any) => setProduct(val)} columns={TableStock_HEAD} rows={TableStock_ROWS} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainStock
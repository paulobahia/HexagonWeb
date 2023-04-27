import React from "react";
import { ArrowUp2, Calendar, Chart1 } from "iconsax-react";
import Card from "@/components/card";
import LineChart from "@/components/charts/LineChart";

const lineChartDataTotalSpent = [
    {
        name: "Receita",
        data: [50, 64, 48, 66, 49, 68],
        color: "#48d1cc",
    },
    {
        name: "Lucro",
        data: [30, 40, 24, 46, 20, 46],
        color: "#4c48ff",
    },
];

const lineChartOptionsTotalSpent = {
    legend: {
        show: false,
    },

    theme: {
        mode: "light",
    },
    chart: {
        type: "line",

        toolbar: {
            show: false,
        },
    },

    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
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
            style: {
                colors: "#A3AED0",
                fontSize: "12px",
                fontWeight: "500",
            },
        },
        type: "text",
        range: undefined,
        categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    },

    yaxis: {
        show: false,
    },
};

const TotalSpent = () => {
    return (
        <Card extra="!p-[20px] text-center">
            <div className="flex justify-between">
                <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 transition duration-200 hover:bg-white/10 bg-white/5">
                    <Calendar variant="Bulk" className="text-white" />
                    <span className="text-sm font-medium text-zinc-100">Este mês</span>
                </button>
                <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-white/10 bg-zinc-100/5">
                    <Chart1 className="h-6 w-6" color="#4c48ff" variant="Bulk" />
                </button>
            </div>

            <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
                <div className="flex flex-col">
                    <p className="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
                        $37.5K
                    </p>
                    <div className="flex flex-col items-start">
                        <p className="mt-2 text-sm text-zinc-100">Total Spent</p>
                        <div className="flex flex-row items-center justify-center">
                            <ArrowUp2 variant="Bulk" className="font-medium text-green-500" />
                            <p className="text-sm font-bold text-green-500"> +2.45% </p>
                        </div>
                    </div>
                </div>
                <div className="h-full w-full">
                    <LineChart
                        options={lineChartOptionsTotalSpent}
                        series={lineChartDataTotalSpent}
                    />
                </div>
            </div>
        </Card>
    );
};

export default TotalSpent;
import Card from "@/components/card";
import BarChart from "@/components/charts/BarChart";
import { Chart1 } from "iconsax-react";


const barChartDataWeeklyRevenue = [
    {
        name: "Produto A",
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
        color: "#48d1cc",
    },
    {
        name: "Produto B",
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
        color: "#4c48ff",
    },
    {
        name: "Produto C",
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
        color: "#fff",
    },
];

const barChartOptionsWeeklyRevenue = {
    chart: {
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000"
        },
        theme: 'dark',
        onDatasetHover: {
            style: {
                fontSize: "12px",
                fontFamily: undefined,
            },
        },
    },
    xaxis: {
        categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
        show: false,
        labels: {
            show: true,
            style: {
                colors: "#A3AED0",
                fontSize: "14px",
                fontWeight: "500",
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
        color: "black",
        labels: {
            show: false,
            style: {
                colors: "#A3AED0",
                fontSize: "14px",
                fontWeight: "500",
            },
        },
    },

    grid: {
        borderColor: "rgba(163, 174, 208, 0.3)",
        show: true,
        yaxis: {
            lines: {
                show: false,
                opacity: 0.5,
            },
        },
        row: {
            opacity: 0.5,
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    fill: {
        type: "solid",
        colors: ["#4c48ff", "#48d1cc", "#fff"],
    },
    legend: {
        show: false,
    },
    colors: ["#4c48ff", "#48d1cc", "#fff"],
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: "20px",
        },
    },
};


const WeeklyRevenue = () => {
    return (
        <Card extra="flex flex-col w-full rounded-3xl py-6 px-2 text-center">
            <div className="mb-auto flex items-center justify-between px-6">
                <h2 className="text-lg font-bold text-white">
                    Receita semanal
                </h2>
                <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-white/10 bg-zinc-100/5">
                    <Chart1 className="h-6 w-6" color="#4c48ff" variant="Bulk" />
                </button>
            </div>

            <div className="md:mt-16 lg:mt-0">
                <div className="h-[250px] w-full xl:h-[350px]">
                    <BarChart
                        chartData={barChartDataWeeklyRevenue}
                        chartOptions={barChartOptionsWeeklyRevenue}
                    />
                </div>
            </div>
        </Card>
    );
};

export default WeeklyRevenue;
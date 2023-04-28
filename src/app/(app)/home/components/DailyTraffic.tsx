import BarChart from "@/components/charts/BarChart";
import { ArrowUp2 } from "iconsax-react";
import Card from "@/components/card";

const barChartDataDailyTraffic = [
    {
        name: "Tráfego Diário",
        data: [20, 30, 40, 35, 70, 50, 30],
    },
];

const barChartOptionsDailyTraffic = {
    chart: {
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
        onDatasetHover: {
            style: {
                fontSize: "12px",
                fontFamily: undefined,
            },
        },
        theme: "dark",
    },
    xaxis: {
        categories: ["18", "19", "20", "21", "22", "23", "00"],
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
            show: true,
            style: {
                colors: "#CBD5E0",
                fontSize: "14px",
            },
        },
    },
    grid: {
        show: false,
        strokeDashArray: 5,
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "#4318FF",
                        opacity: 1,
                    },
                    {
                        offset: 100,
                        color: "rgba(67, 24, 255, 1)",
                        opacity: 0.28,
                    },
                ],
            ],
        },
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: "40px",
        },
    },
};

const DailyTraffic = () => {
    return (
        <Card extra="pb-7 p-[20px]">
            <div className="flex flex-row justify-between">
                <div className="ml-1 pt-2">
                    <p className="text-sm font-medium leading-4 text-gray-200">
                        Tráfego Diário
                    </p>
                    <p className="text-[34px] font-bold text-white">
                        237{" "}
                        <span className="text-sm font-medium leading-6 text-gray-300">
                            Clientes
                        </span>
                    </p>
                </div>
                <div className="mt-2 flex items-start">
                    <div className="flex items-center text-sm text-green-500">
                        <ArrowUp2 variant="Bulk" className="font-medium w-8 h-8 text-green-500" />
                        <p className="font-bold text-base"> +2.45% </p>
                    </div>
                </div>
            </div>

            <div className="h-[280px] w-full pt-10 pb-0">
                <BarChart
                    chartData={barChartDataDailyTraffic}
                    chartOptions={barChartOptionsDailyTraffic}
                />
            </div>
        </Card>
    );
};

export default DailyTraffic;
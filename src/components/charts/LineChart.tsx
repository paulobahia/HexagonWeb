"use client"
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const LineChart = (props: any) => {
    const { series, options } = props;

    return (
        <Chart
            options={options}
            type="area"
            width="100%"
            height="100%"
            series={series}
        />
    );
};

export default LineChart;
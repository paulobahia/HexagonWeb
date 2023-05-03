import Widget from "@/components/widget/Widget";
import { Calendar, Card, Category, Chart1, Document, Moneys } from "iconsax-react";
import TotalSpent from "./components/TotalSpent";
import WeeklyRevenue from "./components/WeeklyRevenue";
import DailyTraffic from "./components/DailyTraffic";
import CheckTable from "./components/CheckTable";

export default function Home() {

  const columnsDataCheck = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "NAME",
      accessor: "name",
    },
    {
      Header: "PROGRESS",
      accessor: "progress",
    },
    {
      Header: "QUANTITY",
      accessor: "quantity",
    },
    {
      Header: "DATE",
      accessor: "date",
    },
  ];

  const tableDataCheck = [
    {
      "id": '#001',
      "name": ["Marketplace", false],
      "quantity": 2458,
      "date": "Apr 26, 2022",
      "progress": 75.5
    },
    {
      "id": '#002',
      "name": ["Venus DB PRO", true],
      "quantity": 1485,
      "date": "Jul 20, 2022",
      "progress": 35.4
    },
    {
      "id": '#003',
      "name": ["Venus DS", true],
      "quantity": 1024,
      "date": "Sep 30, 2022",
      "progress": 25
    },
    {
      "id": '#004',
      "name": ["Venus 3D Asset", true],
      "quantity": 858,
      "date": "Oct 24, 2022",
      "progress": 100
    },
    {
      "id": '#005',
      "name": ["Marketplace", false],
      "quantity": 258,
      "date": "Nov 29, 2022",
      "progress": 75.5
    },
  ]

  return (
    <main className="ml-16 flex-1 p-5">
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
        <Widget
          icon={<Chart1 className="h-7 w-7" color="#d9e3f0" variant="Bulk" />}
          title={"Ganhos"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<Card className="h-7 w-7" color="#d9e3f0" variant="Bulk" />}
          title={"Gasto"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<Moneys className="h-7 w-7" color="#d9e3f0" variant="Bulk" />}
          title={"Vendas"}
          subtitle={"$574.34"}
        />
        <Widget
          icon={<Category className="h-7 w-7" color="#d9e3f0" variant="Bulk" />}
          title={"Balanço"}
          subtitle={"$1,000"}
        />
        <Widget
          icon={<Calendar className="h-7 w-7" color="#d9e3f0" variant="Bulk" />}
          title={"Produtos"}
          subtitle={"145"}
        />
        <Widget
          icon={<Document className="h-7 w-7" color="#d9e3f0" variant="Bulk" />}
          title={"Tasks"}
          subtitle={"32"}
        />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>
      <div className="flex gap-5 justify-end">
        <div className="mt-5 grid grid-rows-1 flex-1 gap-5 rounded-[20px] ">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
            <DailyTraffic />
            <DailyTraffic />
            <DailyTraffic />
          </div>
          <div className="grid grid-cols-1">
            <CheckTable
              columnsData={columnsDataCheck}
              tableData={tableDataCheck}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
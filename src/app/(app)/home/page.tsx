import Widget from "@/components/widget/Widget";
import { Card, Category, Chart1, Moneys } from "iconsax-react";
import TotalSpent from "./components/TotalSpent";
import WeeklyRevenue from "./components/WeeklyRevenue";
import DailyTraffic from "./components/DailyTraffic";

export default function Home() {

  return (
    <main className="flex-1 px-5 py-3">
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
        </div>
      </div>
    </main>
  )
}
import Card from "../card";

const Widget = ({ icon, title, subtitle }: any) => {
    return (
        <Card extra="!flex-row flex-grow items-center rounded-[20px]">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-background-primary p-3">
                    <span className="flex items-center text-white">
                        {icon}
                    </span>
                </div>
            </div>

            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-zinc-400">{title}</p>
                <h4 className="text-xl font-bold text-white">
                    {subtitle}
                </h4>
            </div>
        </Card>
    );
};

export default Widget;
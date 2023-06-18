'use client';

import Card from "../card"

function TableStock(props: any) {
    const { columns, rows } = props
    return (
        <div className="flex-1 h-full w-full border-l border-spacing-x-0.5 py-5">
            <Card className="overflow-hidden h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {columns.map((head: string) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
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
                        {rows.map(({ id, name, date, condição }, index) => {
                            const isLast = index === rows.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr className="hover:cursor-pointer hover:bg-white/5" key={name}>
                                    <td className={classes}>
                                        <div color="blue-gray" className="font-bold text-sm text-zinc-400">
                                            {id}
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div color="blue-gray" className="font-normal text-sm text-zinc-400">
                                            {name}
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div color="blue-gray" className="font-normal text-sm text-zinc-400">
                                            {name}
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div color="blue-gray" className="font-normal text-sm text-zinc-400">
                                            {condição}
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div color="blue" className="font-medium text-sm text-zinc-400">
                                            Edit
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    )
}

export default TableStock;
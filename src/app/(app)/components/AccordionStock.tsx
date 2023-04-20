"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowDown2, Box } from 'iconsax-react'

function AccordionStock({ sideBar }: { sideBar: boolean }) {
    const router = useRouter()
    const [openAccordion, setOpenAccordion] = useState(false)
    const openAccordionStock = () => {
        setOpenAccordion((current) => !current)
    }

    const goToOverview = () => {
        router.push('stock/overview')
    }

    const goToCreate = () => {
        router.push('stock/create')
    }

    const goToEdit = () => {
        router.push('stock/edit')
    }

    return (
        <>
            <div onClick={openAccordionStock} className={`flex items-center  ${sideBar ? "justify-between" : 'justify-center'}   px-2 py-3 hover:bg-zinc-400/30 rounded-lg transition-colors cursor-pointer `}>
                <div className={`flex items-center gap-2 ${!sideBar && "justify-center"} group rounded-lg transition-all duration-300 ease-in cursor-pointer`}>
                    <Box className={`${sideBar ? "w-5 h-5" : 'w-7 h-7'} transition-all ease-in duration-300 text-zinc-200`} variant="Bulk" />
                    {sideBar &&
                        (<p>
                            Estoque
                        </p>
                        )}
                    {!sideBar && (
                        <span className={`absolute left-12 mb-8 rounded-t-lg rounded-br-lg font-medium scale-0 bg-gray-50 p-2 text-xs  text-zinc-800 group-hover:scale-100`}>Estoque</span>
                    )}
                </div>
                {sideBar && (
                    <ArrowDown2 className={`w-5 h-5 text-zinc-200 transition ease-in-out duration-500 ${openAccordion ? null : 'rotate-180'}`} variant="Bulk" />
                )}
            </div>
            <section className={`flex flex-col ${sideBar ? "px-7 py-1" : "items-center"}  justify-between gap-y-2 rounded-lg overflow-hidden transition-[max-height] duration-500 ease-in delay-0 ${openAccordion ? "max-h-40" : "max-h-0"}`} >
                <div onClick={goToOverview} className="flex items-center gap-x-3 p-2 cursor-pointer rounded-lg hover:bg-zinc-400/30 group">
                    <div className="w-2 h-2 bg-success-light rounded-full " />
                    {sideBar && <span>Overview</span>}
                    {!sideBar && (
                        <span className={`absolute left-12 mb-8 rounded-t-lg rounded-br-lg font-medium scale-0 bg-gray-50 p-2 text-xs  text-zinc-800 group-hover:scale-100`}>Overview</span>
                    )}
                </div>
                <div onClick={goToCreate} className="flex items-center gap-x-3 p-2 cursor-pointer rounded-lg hover:bg-zinc-400/30 group">
                    <div className="w-2 h-2 bg-danger-light rounded-full " />
                    {sideBar && <span>Criar</span>}
                    {!sideBar && (
                        <span className={`absolute left-12 mb-8 rounded-t-lg rounded-br-lg font-medium scale-0 bg-gray-50 p-2 text-xs  text-zinc-800 group-hover:scale-100`}>Criar</span>
                    )}
                </div>
                <div onClick={goToEdit} className="flex items-center gap-x-3 p-2 cursor-pointer rounded-lg hover:bg-zinc-400/30 group">
                    <div className="w-2 h-2 bg-warning-light rounded-full " />
                    {sideBar && <span>Editar</span>}
                    {!sideBar && (
                        <span className={`absolute left-12 mb-8 rounded-t-lg rounded-br-lg font-medium scale-0 bg-gray-50 p-2 text-xs  text-zinc-800 group-hover:scale-100`}>Editar</span>
                    )}
                </div>
            </section>
        </>
    )
}

export default AccordionStock
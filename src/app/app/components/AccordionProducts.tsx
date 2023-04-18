"use client"
import { ArrowDown2, ShoppingBag } from 'iconsax-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

function AccordionProducts({ sideBar }: { sideBar: boolean }) {
    const router = useRouter()
    const [openAccordion, setOpenAccordion] = useState(false)
    const goToProducts = () => {
        setOpenAccordion((current) => !current)
    }
    return (
        <>
            <div onClick={goToProducts} className={`flex items-center  ${sideBar ? "justify-between" : 'justify-center'}   px-2 py-3 hover:bg-zinc-400/30 rounded-lg hover:font-medium transition-colors cursor-pointer `}>
                <div className={`flex items-center gap-2 ${!sideBar && "justify-center"} rounded-lg hover:font-medium transition-all duration-300 ease-in cursor-pointer`}>
                    <ShoppingBag className={`${sideBar ? "w-5 h-5" : 'w-7 h-7'} transition-all ease-in duration-300 text-zinc-200`} variant="Bulk" />
                    {sideBar &&
                        (<p>
                            Produtos
                        </p>
                        )}
                </div>
                {sideBar && (
                    <ArrowDown2 className={`w-5 h-5 text-zinc-200 transition ease-in-out duration-500 ${openAccordion ? null : 'rotate-180'}`} variant="Bulk" />
                )}
            </div>
            <section className={`flex flex-col ${sideBar ? "px-9 py-1" : "items-center"}  justify-between  gap-y-3 rounded-lg overflow-hidden transition-[max-height] duration-500 ease-in delay-0 ${openAccordion ? "max-h-40" : "max-h-0"}`} >
                <div className="flex items-center gap-x-3 py-1 cursor-pointer">
                    <div className="w-2 h-2 bg-success-light rounded-full" />
                    {sideBar && <span>Overview</span>}
                </div>
                <div className="flex items-center gap-x-3 py-1 cursor-pointer">
                    <div className="w-2 h-2 bg-danger-light rounded-full" />
                    {sideBar && <span>Criar</span>}
                </div>
                <div className="flex items-center gap-x-3 py-1 cursor-pointer">
                    <div className="w-2 h-2 bg-warning-light rounded-full" />
                    {sideBar && <span>Editar</span>}
                </div>
            </section>
        </>
    )
}

export default AccordionProducts
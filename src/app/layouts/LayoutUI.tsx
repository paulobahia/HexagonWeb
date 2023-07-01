"use client"

import { ArrowLeft2, Logout, Profile2User, Setting2, Warning2, Home, ArrowDown2, Box, ShoppingBag } from "iconsax-react"
import Image from "next/image"
import AccordionProducts from "./AccordionProducts"
import AccordionStock from "./AccordionStock"
import logo from '../assets/logo.png'
import { useEffect, useState } from "react"
import { useRouter, usePathname } from 'next/navigation'

const LayoutUI: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter()
    const [openSideBar, setOpenSideBar] = useState<boolean>(false)
    const changeSideBar = () => setOpenSideBar((current) => !current)

    const goToHome = () => {
        router.push('/home')
    }

    const goToUsers = () => {
        router.push('/users')
    }

    const goToStock = () => {
        router.push('/estoque')
    }

    const goToProducts = () => {
        router.push('/products')
    }

    const goToReports = () => {
        // router.push('app/report')
    }

    const goToSettings = () => {
        // router.push('app/settings')
    }


    return (
        <>
            <div className={`min-h-screen ${openSideBar ? 'sm:w-72' : 'sm:20'} transition-all w-16 fixed z-20 ease-in duration-500 bg-background-secondary overflow-hidden rounded-r-xl shadow`}>
                <div className={`w-full bg-background-light shadow flex items-center ${openSideBar ? 'justify-between' : "justify-center"} p-4 border-b border-zinc-400 border-opacity-30`}>
                    {openSideBar && <div className="space-x-2 flex justify-center items-center">
                        <Image src={logo} alt="Logo Hexagon" className="w-10 h-10" />
                        <p className="text-zinc-200 font-bold text-xl">Hexagon</p>
                    </div>}
                    <Image src={logo} alt="Logo Hexagon" className="w-8 h-8 sm:hidden" />
                    <ArrowLeft2 onClick={changeSideBar} className={`text-zinc-200 transition-all hidden sm:flex ease-in duration-500 cursor-pointer ${openSideBar ? 'w-5 h-5' : 'w-8 h-8 rotate-180'}`} variant="Bulk" />
                </div>
                <div className="flex flex-col gap-3 overflow-hidden px-2 py-4">
                    <p className={`text-white text-xs ${openSideBar ? "ml-3" : "justify-center flex"} transition-all duration-300 font-normal`}>Menu</p>
                    <div className="text-white text-sm space-y-1">
                        <div onClick={goToHome} className={`flex ${!openSideBar && "justify-center"} group items-center gap-2 px-2 py-3 hover:bg-zinc-400/30 rounded-lg transition-all duration-300 ease-in cursor-pointer`}>
                            <Home className={`${openSideBar ? "w-5 h-5" : 'w-7 h-7'} transition-all ease-in duration-300 text-zinc-200`} variant="Bulk" />
                            {openSideBar &&
                                (<p>
                                    Home
                                </p>
                                )}
                            {!openSideBar && (
                                <span className={`fixed left-12 mb-8 rounded-t-lg rounded-br-lg font-medium scale-0 bg-gray-50 p-2 text-xs text-zinc-800 group-hover:scale-100`}>Home</span>
                            )}
                        </div>
                        <div onClick={goToStock} className={`flex items-center  ${openSideBar ? "justify-between" : 'justify-center'} group px-2 py-3 hover:bg-zinc-400/30 rounded-lg transition-colors cursor-pointer `}>
                            <div className={`flex items-center gap-2 ${!openSideBar && "justify-center"} rounded-lg transition-all duration-300 ease-in cursor-pointer`}>
                                <Box className={`${openSideBar ? "w-5 h-5" : 'w-7 h-7'} transition-all ease-in duration-300 text-zinc-200`} variant="Bulk" />
                                {openSideBar &&
                                    (<p>
                                        Estoque
                                    </p>
                                    )}
                                {!openSideBar && (
                                    <span className={`fixed left-12 mb-8 rounded-t-lg rounded-br-lg font-medium scale-0 bg-gray-50 p-2 text-xs  text-zinc-800 group-hover:scale-100`}>Estoque</span>
                                )}
                            </div>
                        </div>
                        <div onClick={goToProducts} className={`flex items-center  ${openSideBar ? "justify-between" : 'justify-center'} group px-2 py-3 hover:bg-zinc-400/30 rounded-lg transition-colors cursor-pointer `}>
                            <div className={`flex items-center gap-2 ${!openSideBar && "justify-center"} rounded-lg transition-all duration-300 ease-in cursor-pointer`}>
                                <ShoppingBag className={`${openSideBar ? "w-5 h-5" : 'w-7 h-7'} transition-all ease-in duration-300 text-zinc-200`} variant="Bulk" />
                                {openSideBar &&
                                    (<p>
                                        Produtos
                                    </p>
                                    )}
                                {!openSideBar && (
                                    <span className={`fixed left-12 mb-8 rounded-t-lg rounded-br-lg font-medium scale-0 bg-gray-50 p-2 text-xs  text-zinc-800 group-hover:scale-100`}>Produtos</span>
                                )}
                            </div>
                        </div>
                        <div onClick={goToUsers} className={`flex ${!openSideBar && "justify-center"} group items-center gap-2 px-2 py-3 hover:bg-zinc-400/30 rounded-lg transition-all duration-300 ease-in cursor-pointer`}>
                            <Profile2User className={`${openSideBar ? "w-5 h-5" : 'w-7 h-7'} transition-all ease-in duration-300 text-zinc-200`} variant="Bulk" />
                            {openSideBar &&
                                (<p>
                                    Usuários
                                </p>
                                )}
                            {!openSideBar && (
                                <span className={`fixed left-12 scale-0 rounded-t-lg rounded-br-lg font-medium mb-8 bg-gray-50 p-2 text-xs text-zinc-800 group-hover:scale-100`}>Usuários</span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 overflow-hidden px-2 py-4 border-t border-zinc-400 border-opacity-10">
                    <div className="text-white text-sm space-y-1  ">
                        <p className={`text-white text-xs ${openSideBar ? "ml-3" : "justify-center flex"} transition-all duration-300 font-normal`}>Outros</p>
                        <div onClick={goToReports} className={`flex ${!openSideBar && "justify-center"} group  items-center gap-2 px-2 py-3 hover:bg-zinc-400/30 rounded-lg transition-all duration-300 ease-in cursor-pointer`}>
                            <Warning2 className={`${openSideBar ? "w-5 h-5" : 'w-7 h-7'} transition-all ease-in duration-300 text-zinc-200`} variant="Bulk" />
                            {openSideBar &&
                                (<p>
                                    Reportar
                                </p>
                                )}
                            {!openSideBar && (
                                <span className={`fixed left-12 scale-0 rounded-t-lg rounded-br-lg font-medium mb-8 bg-gray-50 p-2 text-xs text-zinc-800 group-hover:scale-100`}>Reportar</span>
                            )}
                        </div>
                        <div onClick={goToSettings} className={`flex ${!openSideBar && "justify-center"} group items-center gap-2 px-2 py-3 hover:bg-zinc-400/30 rounded-lg transition-all duration-300 ease-in cursor-pointer`}>
                            <Setting2 className={`${openSideBar ? "w-5 h-5" : 'w-7 h-7'} transition-all ease-in duration-300 text-zinc-200`} variant="Bulk" />
                            {openSideBar &&
                                (<p>
                                    Configurações
                                </p>
                                )}
                            {!openSideBar && (
                                <span className={`fixed left-12 scale-0 rounded-t-lg rounded-br-lg font-medium mb-8 bg-gray-50 p-2 text-xs text-zinc-800 group-hover:scale-100`}>Configurações</span>
                            )}
                        </div>
                    </div>
                </div>
                {/* <div className="w-full flex flex-1 justify-center items-center">
                <div className="fixed bottom-0 flex">
                    <div className="bg-zinc-700/30 hover:bg-zinc-700/20 transition-opacity px-5 py-3 rounded-md flex-1 gap-x-3 flex items-center mb-5 cursor-pointer">
                        <div>
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="space-y-0.5 hover:font-bold">
                            <p className="text-zinc-300 font-medium text-xs">
                                Jalim Rabei
                            </p>
                            <p className="text-zinc-400 font-normal text-xs">
                                jalin_rabei@gmail.com
                            </p>
                        </div>
                        <Logout className="w-6 h-w-6 text-zinc-200 cursor-pointer" variant="Bulk" />
                    </div>
                </div>
            </div> */}
            </div>
            <nav className="sticky ml-20 mr-5 top-4 z-10 flex flex-row flex-wrap items-center justify-between rounded-xl bg-background-secondary/30 p-2 backdrop-blur-xl">
                <div className="ml-[6px]">
                    <div className="h-6 w-[224px] pt-1">
                        <a
                            className="text-sm font-normal text-navy-700 hover:underline text-white hover:text-white"
                            href="/home"
                        >
                            Home
                        </a>
                        {pathname != '/home' &&
                            (<>
                                <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 text-white">
                                    /
                                </span>
                                <a
                                    className="text-sm capitalize font-normal text-navy-700 hover:underline text-white hover:text-white"
                                >
                                    {pathname.split('/')}
                                </a>
                            </>)
                        }

                    </div>
                    <p className="shrink text-[33px] capitalize text-navy-700 text-white">
                        <a
                            className="font-bold capitalize hover:text-navy-700 hover:text-white"
                        >
                            {pathname.split('/')}
                        </a>
                    </p>
                </div>
            </nav>
        </>
    )
}

export default LayoutUI
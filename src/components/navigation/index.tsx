"use client"

import { usePathname } from 'next/navigation'
function Navigation() {
    const pathname = usePathname();
    return (
        <nav className="mx-4 top-4 sticky z-10 items-center justify-between rounded-xl bg-background-secondary/30 p-2 backdrop-blur-xl">
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
    )
}

export default Navigation
import { SearchStatus } from "iconsax-react";
import { useState } from "react";


function SeachInput({ filter }: any) {

    const handleInputChange = (item: any) => {
        filter(item);
    };

    return (
        <div className="flex items-center max-w-md bg-background-light shadow-sm rounded-lg " x-data="{ search: '' }">
            <div className="w-full">
                <input onChange={(event) => handleInputChange(event.target.value)} type="search" className="w-full bg-background-light px-2 py-1 text-white rounded-md focus:outline-none"
                    placeholder="Pesquisar..." x-model="search" />
            </div>
            <div>
                <button className="bg-background-light hover:bg-itens-light transition-colors shadow-lg gap-2 p-2 rounded-r-md justify-between cursor-pointer flex items-center">
                    <SearchStatus className="h-5 w-5 text-white" color="rgb(212 212 216)" variant="Bulk" />
                </button>
            </div>
        </div>
    )
}

export default SeachInput
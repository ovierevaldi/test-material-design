import { useState } from "react";
import BaseSelect from "../Components/BaseSelect"
import { JenisMenuProp, ListDataProp, SelectDataProp } from "../Global-Types/global-types"
import BaseList from "../Components/BaseList";

type DaftarMakananProp = {
    selectedJenis: JenisMenuProp
}

type MakananProp = {
    title: string,
    harga: number
}

const DaftarMakanan = ({selectedJenis}: DaftarMakananProp) => {
    
    const menuMakananDummy: MakananProp[] = [
        {
            title: 'Nasi Goreng',
            harga: 15000
        },
        
        {
            title: 'Bakso Sapi',
            harga: 19000
        },
        {
            title: 'Sate Ayam',
            harga: 25000
        },
        {
            title: 'Sop Kambing',
            harga: 25000
        },

    ];

    const menuMinumanDummy: MakananProp[] = [
        {
            title: 'Es Teh Manis',
            harga: 5000
        },
        
        {
            title: 'Susu Soda Gembira',
            harga: 9000
        },
        {
            title: 'Es Buah',
            harga: 15000
        },
        {
            title: 'Es Jeruk',
            harga: 5000
        },

    ];

    const convertMenuMakananToListData = (menuMakanan: MakananProp[]) : ListDataProp[] => {
        return menuMakanan.map((value) => [value.title, value.harga.toString()])
    };

    return (
        <div>
         
            
            <h2 className="text-3xl font-semibold text-center mb-8">
                Daftar {selectedJenis === 'mk' ? 'Makanan' : 'Minuman'}
            </h2>

            <div className="flex justify-evenly text-xl font-semibold">
                <p>Nama</p>
                <p>Harga</p>
            </div>
            
            <BaseList data={convertMenuMakananToListData(selectedJenis === 'mk' ? menuMakananDummy : menuMinumanDummy)}/>
        </div>
    )
}

export default DaftarMakanan
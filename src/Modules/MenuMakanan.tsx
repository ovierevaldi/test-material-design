import { useEffect, useState } from "react";
import BaseSelect from "../Components/BaseSelect"
import { JenisMenuProp, ListDataProp, SelectDataProp } from "../Global-Types/global-types"
import BaseList from "../Components/BaseList";

type MakananProp = {
    title: string,
    harga: number
}


const MenuMakanan = () => {
    const tipeMakananDummy : SelectDataProp[] = [
        {
            label: 'Makanan',
            value: 'mk',
        },
        {
            label: 'Minuman',
            value: 'mn'
        }
    ];

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

    const [selectedJenis, setSelectedJenis] = useState<JenisMenuProp>('mk');

    const convertMenuMakananToListData = (menuMakanan: MakananProp[]) : ListDataProp[] => {
        return menuMakanan.map((value) => [value.title, value.harga.toString()])
    };

    return (
        <div>
            <h1 className="text-center text-4xl mb-12">Menu Makanan</h1>

            <BaseSelect 
                onValueChanged={(value) => setSelectedJenis(value as JenisMenuProp)}
                selectData={tipeMakananDummy} 
                label="Jenis" 
                defaultSelectedIndex={0}>
            </BaseSelect>
            
            <h2 className="text-3xl font-semibold text-center mb-8">
                Daftar {selectedJenis === 'mk' ? 'Makanan' : 'Minuman'}
            </h2>

            <div className="flex justify-evenly text-xl font-semibold">
                <p>Makanan</p>
                <p>Harga</p>
            </div>
            
            <BaseList data={convertMenuMakananToListData(selectedJenis === 'mk' ? menuMakananDummy : menuMinumanDummy)}/>
        </div>
    )
}

export default MenuMakanan
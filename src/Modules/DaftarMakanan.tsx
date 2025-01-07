import { JenisMenuProp, ListDataProp, MakananProp } from "../Global-Types/global-types"
import BaseList from "../Components/BaseList";
import ApiProvider from "../Providers/ApiProvider";

type DaftarMakananProp = {
    selectedJenis: JenisMenuProp
}


const DaftarMakanan = ({selectedJenis}: DaftarMakananProp) => {
    
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
            
            <BaseList 
                data={convertMenuMakananToListData(ApiProvider.getMenuMakanan(selectedJenis))}
            />
        </div>
    )
}

export default DaftarMakanan
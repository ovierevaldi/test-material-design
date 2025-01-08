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
        <div className="">
            <h2 className="text-3xl font-semibold text-center pb-8">
                Daftar {selectedJenis === 'mk' ? 'Makanan' : 'Minuman'}
            </h2>
            <div>
                <BaseList
                    childTextAlign="middle"
                    childWidth="even"
                    dataHeader={['Nama', 'Harga']}
                    data={convertMenuMakananToListData(ApiProvider.getMenuMakanan(selectedJenis))}
                />
            </div>
        </div>
    )
}

export default DaftarMakanan
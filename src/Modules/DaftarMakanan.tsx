import { JenisMenuProp, ListDataProp, MakananProp } from "../Global-Types/global-types"
import BaseList from "../Components/BaseList";
import BasePagination from "../Components/BasePagination";

type DaftarMakananProp = {
    selectedJenis: JenisMenuProp,
    dataMakanan: MakananProp[]
}


const DaftarMakanan = ({selectedJenis, dataMakanan}: DaftarMakananProp) => {

    const showMakananPerPage = 1;
    
    const convertMenuMakananToListData = (menuMakanan: MakananProp[]) : ListDataProp[] => {
        return menuMakanan.map((value) => [value.nama, value.harga.toString()])
    };

    return (
        <div className="space-y-6 border py-4 px-2 bg-gray-300">
            <h2 className="text-3xl font-semibold text-center">
                Daftar {selectedJenis === 'mk' ? 'Makanan' : 'Minuman'}
            </h2>
            <div>
                <BaseList
                    childTextAlign="middle"
                    childWidth="even"
                    dataHeader={['Nama', 'Harga']}
                    data={convertMenuMakananToListData(dataMakanan)}
                />
            </div>
            <div className="flex justify-center">
                <BasePagination 
                    pageAmt={dataMakanan.length / showMakananPerPage} 
                    variant="outlined" 
                    shape="rounded" 
                    hideNextBtn={true} 
                    hidePrevBtn={true}
                    onPageChanged={(page) => {alert(page)}}
                />
            </div>
        </div>
    )
}

export default DaftarMakanan
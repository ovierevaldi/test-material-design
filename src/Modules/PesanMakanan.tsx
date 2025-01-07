import { useEffect, useState } from "react"
import BaseButton from "../Components/BaseButton"
import BaseInputNumber from "../Components/BaseInputNumber"
import BaseSelect from "../Components/BaseSelect"
import { MakananProp, SelectDataProp } from "../Global-Types/global-types"

type PesanMakanan = {
  dataMakanan: MakananProp[]
}

const PesanMakanan = ({dataMakanan} : PesanMakanan) => {
  const [selectedMakanan, setSelectedMakanan] = useState('');

  const convertDataMakananToSelectData = (dataMakanan: MakananProp[]): SelectDataProp[] => {
    return dataMakanan.map((value) => ({label: value.title, value: value.title}))
  };

  const listData = convertDataMakananToSelectData(dataMakanan);


  return (
    <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Pesan Makanan</h1>

        <form className="space-y-4">
          <div>
            <p>Pilih Makanan:</p>
            <BaseSelect
              selectData={listData}
              variant="outlined"
              helperText="*Harga sudah termasuk pajak"
              size="small"
              defaultSelectedIndex={0}
              onValueChanged={(value) => setSelectedMakanan(value)}
            />
          </div>

          <div className="">
            <p>Jumlah:</p>
            
            <BaseInputNumber 
              label="Max: 10"
              minVal={1}
              maxVal={10} 
              variant="outlined" 
              size="small" 
              isFullWidth={true}
            />

          </div>

          <div>
            <p className="">Total: </p>
            <p className="text-lg font-semibold">Rp. 50000 (Belum di coding)</p>
          </div>

          <div className="flex justify-center">
            <BaseButton 
              variant="outlined"
            >
              Bayar
            </BaseButton>
          </div>
        </form>
    </div>
  )
}

export default PesanMakanan
import { useEffect, useMemo, useState } from "react"
import BaseButton from "../Components/BaseButton"
import BaseInputNumber from "../Components/BaseInputNumber"
import BaseSelect from "../Components/BaseSelect"
import { MakananProp, SelectDataProp } from "../Global-Types/global-types"
import { useSnackbar } from "../React-Context/Snackbar"

type PesanMakanan = {
  dataMakanan: MakananProp[]
}

const PesanMakanan = ({dataMakanan} : PesanMakanan) => {
  const [selectedMakanan, setSelectedMakanan] = useState('');
  const [jumlahPesan, setJumlahPesan] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);

  const convertDataMakananToSelectData = (dataMakanan: MakananProp[]): SelectDataProp[] => {
    return dataMakanan.map((value) => ({label: value.title, value: value.code}))
  };

  const getHargaMakanan = (value: string) => {
    const harga = dataMakanan.find(makanan => makanan.code === value)?.harga;
    if (harga)
      return harga;
    else
      return 0;
  }

  const listData = useMemo(() => convertDataMakananToSelectData(dataMakanan), [dataMakanan]);

  useEffect(() => {
    const total = getHargaMakanan(selectedMakanan) * jumlahPesan;
    if( total )
      setTotalHarga(total)
    else
      setTotalHarga(0)
  }, [jumlahPesan, selectedMakanan]);

  const { openSnackBar } = useSnackbar();

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
              isFullWidth={true}
              // defaultSelectedIndex={0}
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
              onValueChanged={(value) => setJumlahPesan(parseInt(value))}
            />

          </div>

          <div>
            <p className="">Total: </p>
            <p className="text-lg font-semibold">Rp. { totalHarga }</p>
          </div>

          <div className="flex justify-center">
            <BaseButton
              isDisabled={totalHarga === 0}
              variant="outlined"
              onBtnClick={() => openSnackBar('Purchasing Success, Please wait until your food is being served.')}
            >
              Bayar
            </BaseButton>
          </div>
        </form>
    </div>
  )
}

export default PesanMakanan
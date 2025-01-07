import BaseButton from "../Components/BaseButton"
import BaseInputNumber from "../Components/BaseInputNumber"
import BaseSelect from "../Components/BaseSelect"

const PesanMakanan = () => {
  return (
    <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Pesan Makanan</h1>

        <form className="space-y-4">
          <div>
            <p>Pilih Makanan:</p>
            <BaseSelect
              selectData={[
                {label: 'Nasi Goreng', value: 'ns-gr'}
              ]}
              variant="outlined"
              helperText="*Harga sudah termasuk pajak"
              size="small"
              defaultSelectedIndex={0}
            />
          </div>

          <div className="">
            <p>Jumlah:</p>
            <BaseInputNumber label="Max: 10" maxVal={10} variant="outlined" size="small" isFullWidth={true}></BaseInputNumber>
          </div>

          <div>
            <p className="">Total: </p>
            <p className="text-lg font-semibold">Rp. 50000</p>
          </div>

          <div className="flex justify-center">
            <BaseButton variant="outlined">
              Bayar
            </BaseButton>
          </div>
        </form>
    </div>
  )
}

export default PesanMakanan
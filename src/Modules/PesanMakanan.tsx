import BaseButton from "../Components/BaseButton"
import BaseInputNumber from "../Components/BaseInputNumber"
import BaseSelect from "../Components/BaseSelect"

const PesanMakanan = () => {
  return (
    <div className="max-w-md mx-auto">
        {/* Form */}
        
        <h1 className="text-center text-4xl">Pesan Makanan</h1>
        <div>
          <p>Pilih Makanan:</p>
          <BaseSelect></BaseSelect>
        </div>
        <div>
          <p>Jumlah:</p>
          <BaseInputNumber label="Max: 10" maxVal={10}></BaseInputNumber>
        </div>

        <div>
          <p>Total: Rp. 50000</p>
        </div>
        <BaseButton>Bayar</BaseButton>
    </div>
  )
}

export default PesanMakanan
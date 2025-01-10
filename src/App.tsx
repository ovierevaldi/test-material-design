import { useState } from 'react'
import './App.css'
import BaseSelect from './Components/BaseSelect'
import { JenisMenuProp, MakananProp } from './Global-Types/global-types'
import DaftarMakanan from './Modules/DaftarMakanan'
import PesanMakanan from './Modules/PesanMakanan'
import ApiProvider from './Providers/ApiProvider'

function App() {
  const [selectedJenis, setSelectedJenis] = useState<JenisMenuProp>('mk');

  const {data: dataMakanan, loading: loadingDataMakanan, error: errorCallDataMakanan } = ApiProvider.getMenuMakanan('mk', {amount: 5, skip_page: 0});

  return (
   <div className='p-4 space-y-8 max-w-lg mx-auto border'>
      <div>
        <h1 className="text-center text-4xl mb-6">Restaurant Menu</h1>
        <div className='mx-auto max-w-[200px]'>
          <BaseSelect 
            onValueChanged={(value) => setSelectedJenis(value as JenisMenuProp)}
            selectData={ApiProvider.getTipeMakanan()} 
            label="Jenis" 
            defaultSelectedIndex={0}
            isFullWidth={true}
          >
          </BaseSelect>
        </div>
      </div>
      {
        !loadingDataMakanan && !errorCallDataMakanan && <DaftarMakanan dataMakanan={dataMakanan.getAllMakanan as MakananProp[]} selectedJenis={selectedJenis}/>
      }
      {
        loadingDataMakanan && <div>Loading Data...</div>
      }
      {
        errorCallDataMakanan && 
        <div className='text-red'>Cannot get data makanan! 
          <br />
          <span className='text-balance'>Please contact admin</span>
          <p>{errorCallDataMakanan.message}</p>
        </div>
      }

      {
        !loadingDataMakanan && !errorCallDataMakanan && <PesanMakanan dataMakanan={dataMakanan.getAllMakanan as MakananProp[]}/>
      }
    
   </div>
  )
}

export default App

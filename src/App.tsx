import { useState } from 'react'
import './App.css'
import BaseSelect from './Components/BaseSelect'
import { JenisMenuProp, SelectDataProp } from './Global-Types/global-types'
import DaftarMakanan from './Modules/DaftarMakanan'
import PesanMakanan from './Modules/PesanMakanan'

function App() {
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

  const [selectedJenis, setSelectedJenis] = useState<JenisMenuProp>('mk');

  return (
   <div className='p-4 space-y-8'>
      <div>
        <h1 className="text-center text-4xl mb-6">Restaurant Menu</h1>
        <div className='flex justify-center'>
          <BaseSelect 
                      onValueChanged={(value) => setSelectedJenis(value as JenisMenuProp)}
                      selectData={tipeMakananDummy} 
                      label="Jenis" 
                      defaultSelectedIndex={0}>
            </BaseSelect>
        </div>
      </div>
      <DaftarMakanan selectedJenis={selectedJenis}/>
      <PesanMakanan />
   </div>
  )
}

export default App

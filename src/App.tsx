import { useState } from 'react'
import './App.css'
import BaseSelect from './Components/BaseSelect'
import { JenisMenuProp } from './Global-Types/global-types'
import DaftarMakanan from './Modules/DaftarMakanan'
import PesanMakanan from './Modules/PesanMakanan'
import ApiProvider from './Providers/ApiProvider'

function App() {
  const [selectedJenis, setSelectedJenis] = useState<JenisMenuProp>('mk');
  
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
      <DaftarMakanan selectedJenis={selectedJenis}/>
      <PesanMakanan dataMakanan={ApiProvider.getMenuMakanan(selectedJenis)}/>
   </div>
  )
}

export default App

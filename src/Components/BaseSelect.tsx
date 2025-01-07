import { FormControl, FormHelperText, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"

type BaseSelectProp = {
  helperText?: string,
  variant?: "outlined" | "standard" | "filled"
}

const BaseSelect = ({helperText, variant = 'standard'}: BaseSelectProp) => {
  const [selectedValue, setSelectedValue] = useState('Nasi Goreng');

  const handleChangeValue = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value)
  };
  
  return (
    <FormControl fullWidth={true} variant={variant} size="small">
        {/* <InputLabel>Pilih Makanan</InputLabel> */}
        <Select value={selectedValue} onChange={handleChangeValue}>
          <MenuItem value={'Nasi Goreng'}>Nasi Goreng</MenuItem>
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default BaseSelect
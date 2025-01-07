import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"

type BaseSelectProp = {
  helperText?: string,
  variant?: "outlined" | "standard" | "filled",
  size?: 'small' | 'medium'
  label? : string
}

const BaseSelect = ({helperText, variant = 'standard', size = 'small', label}: BaseSelectProp) => {
  const [selectedValue, setSelectedValue] = useState('Nasi Goreng');

  const handleChangeValue = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value)
  };
  
  return (
    <FormControl fullWidth={true} variant={variant} size={size}>
        <InputLabel>{label}</InputLabel>
        <Select value={selectedValue} onChange={handleChangeValue}>
          <MenuItem value={'Nasi Goreng'}>Nasi Goreng</MenuItem>
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default BaseSelect
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useEffect, useState } from "react"
import { SelectDataProp } from "../Global-Types/global-types";

type BaseSelectProp = {
  selectData: SelectDataProp[],
  defaultSelectedIndex?: number,

  onValueChanged?: (value: string) => void,

  helperText?: string,
  variant?: "outlined" | "standard" | "filled",
  size?: 'small' | 'medium'
  label? : string,
  isFullWidth? :boolean
};

const BaseSelect = ({selectData, defaultSelectedIndex = -1, onValueChanged, helperText, variant = 'standard', size = 'small', label, isFullWidth = false}: BaseSelectProp) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChangeValue = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
    
    if(onValueChanged){
      onValueChanged(event.target.value);
    }
  };

  useEffect(() => {
      setDefaultValue(defaultSelectedIndex);
  }, [selectData]);

  const setDefaultValue = (index: number) => {
    if(selectData.length > 0 && index < selectData.length && index >= 0){
      setSelectedValue(selectData[index].value)        
    }
    else{
      setSelectedValue('')
    }
  }
  
  return (
    <FormControl 
      fullWidth={isFullWidth} 
      variant={variant} 
      size={size}
    >
        <InputLabel>{label}</InputLabel>
        <Select value={selectedValue} onChange={handleChangeValue}>
          {
            selectData.map((data) => <MenuItem value={data.value} key={data.value}>{data.label}</MenuItem>)
          }
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default BaseSelect
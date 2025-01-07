import { TextField } from '@mui/material'
import { useState } from 'react'

type BaseInputProp = {
    label: string,
    variant?: 'standard' | 'outlined' | 'filled'
    maxVal? : number,
    minVal?: number,
    size?: 'small' | 'medium'
    isFullWidth?: boolean
}

const BaseInputNumber = ({label, minVal = 0, maxVal = 999, variant = 'standard', size = 'small', isFullWidth = false}: BaseInputProp) => {
    const [currentValue, setCurrentValue] = useState('');
    const checkChangedValue = (event: React.ChangeEvent<HTMLInputElement> ) => {

        let value = ''

        if(event.target.value){
            const inputValue = parseInt(event.target.value);
           
            if(inputValue > maxVal){
                value = maxVal.toString()
            }
            else if(inputValue < minVal){
                value = minVal.toString();
            }
            else
                value = inputValue.toString();
        }
        
        setCurrentValue(value);
    }
    return (
        <TextField 
            type='number' 
            label={label} 
            variant={variant} 
            onChange={checkChangedValue} 
            value={currentValue} 
            size={size}
            fullWidth={isFullWidth}
        />
    )
}

export default BaseInputNumber
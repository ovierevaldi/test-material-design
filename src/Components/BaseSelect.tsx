import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const BaseSelect = () => {
  return (
    <FormControl fullWidth={true}>
        <InputLabel>Pilih Makanan</InputLabel>
        <Select>
          <MenuItem>Nasi Goreng</MenuItem>
        </Select>
    </FormControl>
  )
}

export default BaseSelect
import { Button } from "@mui/material"

type BaseButtonProp = {
    children: React.ReactNode,
    variant?: "text" | "contained" | "outlined",
    size?: "small" | "medium" | "large"
}

const BaseButton = ({children, variant, size} : BaseButtonProp) => {
  return (
    <Button 
      variant={variant} 
      size={size}>
        {children}
    </Button>
  )
}

export default BaseButton
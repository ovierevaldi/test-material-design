import { Button } from "@mui/material"

type BaseButtonProp = {
    children: React.ReactNode,
    variant?: "text" | "contained" | "outlined",
    size?: "small" | "medium" | "large",
    isDisabled? : boolean

    onBtnClick?: () => void
    isFullWidth? : boolean
}

const BaseButton = ({children, variant, size, isDisabled, onBtnClick, isFullWidth = false} : BaseButtonProp) => {
  
  const handleClick = () => {
    if(onBtnClick)
      onBtnClick();
  };

  return (
    <Button
      disabled={isDisabled}
      variant={variant} 
      size={size}
      fullWidth={isFullWidth}
      onClick={handleClick}
    >
        {children}
    </Button>
  )
}

export default BaseButton
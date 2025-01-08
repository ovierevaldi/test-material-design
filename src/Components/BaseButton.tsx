import { Button } from "@mui/material"

type BaseButtonProp = {
    children: React.ReactNode,
    variant?: "text" | "contained" | "outlined",
    size?: "small" | "medium" | "large",
    isDisabled? : boolean

    onBtnClick?: () => void
}

const BaseButton = ({children, variant, size, isDisabled, onBtnClick} : BaseButtonProp) => {
  
  const handleClick = () => {
    if(onBtnClick)
      onBtnClick();
  };

  return (
    <Button
      disabled={isDisabled}
      variant={variant} 
      size={size}
      onClick={handleClick}
    >
        {children}
    </Button>
  )
}

export default BaseButton
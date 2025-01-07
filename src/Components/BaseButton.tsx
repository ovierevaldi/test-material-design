import { Button } from "@mui/material"

type BaseButtonProp = {
    children: React.ReactNode
}

const BaseButton = ({children} : BaseButtonProp) => {
  return (
    <Button variant="contained">
        {children}
    </Button>
  )
}

export default BaseButton
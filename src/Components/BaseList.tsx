import { List, ListItemButton, ListItemText } from '@mui/material'
import { ListDataProp } from '../Global-Types/global-types'

type BaseListProp = {
    data: ListDataProp[]
}


const BaseList = ({data} : BaseListProp) => {
  return (
    <List>
        {data.map((list_data, index) => 
            <ListItemButton key={index}>
                {list_data.map((value, index) => 
                    <ListItemText key={index} >
                        {value}
                    </ListItemText>
                )}
            </ListItemButton>
        )}
    </List>
  )
}

export default BaseList
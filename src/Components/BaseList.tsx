import { List, ListItem, ListItemText } from '@mui/material'
import { ListDataProp, TextAlignProp } from '../Global-Types/global-types'
import { useEffect, useState } from 'react'

type BaseListProp = {
    data: ListDataProp[],

    childWidth?: 'flex' | 'even';
    childTextAlign?: TextAlignProp
}


const BaseList = ({data, childWidth = 'even', childTextAlign = 'start'} : BaseListProp) => {
    const [colWidth, setColWidth] = useState(0);

    useEffect(() => {
        setColWidth(1 / data[0].length)
    }, [data]);

    const setTailwindcssTextAlign = (textAlign: TextAlignProp) => {
        switch (textAlign) {
            case 'start':
                return 'text-start'
            case 'end':
                return 'text-end'
            case 'middle':
                return 'text-center'
        }
    }
    
    return (
        <List>
            {data.map((list_data, index) => 
                <ListItem
                    key={index}
                >
                    {list_data.map((value, index) => 
                        <ListItemText key={index} 
                            style={{width: childWidth === 'even' ? colWidth : ''}}
                            className={setTailwindcssTextAlign(childTextAlign)}
                        >
                            {value}
                        </ListItemText>
                    )}
                </ListItem>
            )}
        </List>
    )
}

export default BaseList
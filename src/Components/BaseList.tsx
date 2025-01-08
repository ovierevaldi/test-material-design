import { List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material'
import { ListDataProp, TextAlignProp } from '../Global-Types/global-types'
import { useEffect, useState } from 'react'

type BaseListProp = {
    dataHeader?: ListDataProp
    data: ListDataProp[],

    childWidth?: 'flex' | 'even';
    childTextAlign?: TextAlignProp
}


const BaseList = ({dataHeader, data, childWidth = 'even', childTextAlign = 'start'} : BaseListProp) => {
    const [colWidth, setColWidth] = useState(0);

    useEffect(() => {
        setColWidth(1 / data[0].length);
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
            <ListSubheader></ListSubheader>
            {
                dataHeader && 
                <ListItem>
                    {
                        dataHeader.map((value, index) => 
                            <ListItemText
                                key={index}
                                style={{width: childWidth === 'even' ? colWidth : ''}}
                                className={`${setTailwindcssTextAlign(childTextAlign)}`}
                            >
                                <span className='text-lg font-medium'>{value}</span>
                            </ListItemText>
                        )
                    }
                </ListItem>
            }
            {data.map((list_data, index) => 
                <ListItemButton
                    key={index}
                >
                    {list_data.map((value, index) => 
                        <ListItemText 
                            key={index}
                            style={{width: childWidth === 'even' ? colWidth : ''}}
                            className={setTailwindcssTextAlign(childTextAlign)}
                        >
                            {value}
                        </ListItemText>
                    )}
                </ListItemButton>
            )}
        </List>
    )
}

export default BaseList
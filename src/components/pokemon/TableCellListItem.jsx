import React from 'react'
import {StyleDiv} from './pokemon.style'

export const TableCellListItem = ({items}) => {

    return (
        <>
            {items && items.map(item => (
                <StyleDiv key={item}>
                    {item}
                </StyleDiv>
            ))
            }
        </>
    )
}

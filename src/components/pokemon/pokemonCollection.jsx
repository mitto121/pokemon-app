import React, { useState, useEffect, Fragment } from 'react'
import { COLUMNS } from './columns'
import axios from 'axios'
import {
    Paper,
    Alert,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination
} from '@mui/material';
import {
    Root,
    StylePageTitle,
    StyleProfileCell,
    StyleDiv
} from './pokemon.style'
import { TableCellListItem } from './TableCellListItem'



const PokemonCollection = (props) => {
    const [pokemons, setPokemon] = useState([])
    const [page, setPage] = useState(0);
    const [isErrorOccured, setErrorStatus] = useState(false)
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
            .then(response => {
                if (response && response.data && response.data.pokemon) {
                    const records = response.data.pokemon;
                    records.sort(function (a, b) {
                        if (a.name < b.name) { return -1; }
                        if (a.name > b.name) { return 1; }
                        return 0;
                    })
                    setPokemon(records)
                    setErrorStatus(false)
                }
            })
            .catch(err => {
                setErrorStatus(true)
                console.log(err)
            })
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(preRowsPerPage => preRowsPerPage + event.target.value);
        setPage(0);
    };

    return (
        <Root>
            {isErrorOccured ? <Alert severity="error">Somethingwent Wrong !</Alert> :
                  <Paper sx={{ width: '100%' }}>
                    <StylePageTitle>Pokemons</StylePageTitle>
                        <TableContainer component={Paper} sx={{ maxHeight: 480 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {COLUMNS.map(col => (
                                            <TableCell key={col.accessor}>{col.Header}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        pokemons && pokemons.length ?
                                            pokemons
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map(data => (
                                                    <TableRow key={data.id}>
                                                        <StyleProfileCell >
                                                            {data.img && <img src={data.img} />}
                                                            <StyleDiv>{data.name}</StyleDiv>
                                                        </StyleProfileCell >
                                                        <TableCell >{data.num}</TableCell >
                                                        <TableCell >
                                                            <TableCellListItem items={data.type} />
                                                        </TableCell >
                                                        <TableCell >{data.height}</TableCell >
                                                        <TableCell >{data.weight}</TableCell >
                                                        <TableCell >
                                                            <TableCellListItem items={data.weaknesses} />
                                                        </TableCell >
                                                        <TableCell >
                                                            <div>
                                                                {data.prev_evolution && data.prev_evolution.map(item => (
                                                                    <div key={item.num}>
                                                                        {item.name}
                                                                    </div>
                                                                ))
                                                                }
                                                            </div>
                                                        </TableCell >
                                                    </TableRow>
                                                ))
                                            :
                                            <TableRow>
                                                <TableCell colSpan={COLUMNS.length}>
                                                    No record found
                                                </TableCell>
                                            </TableRow>
                                    }

                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={pokemons.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
            }
        </Root>
    )
}

export default PokemonCollection

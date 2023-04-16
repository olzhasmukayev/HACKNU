import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { Button } from '@mui/material';
import FormDialog from './accept';
import { useState } from 'react';

function createData(number, fio, nfio, type, date ) {
    return { number, fio, nfio, type, date };
}

const rows = [
    createData('002241054097', 'ДҮЙСЕКОВ ЕРҚАНАТ ЖАНҒАЗЫҰЛЫ', 'No', 'Выдача справки о наличии либо отсутствии судимости', '2023-04-14 16:07:05'),
    createData('002241054795', 'ЖАЙЛАШЕВ ҚУАНДЫҚ ШАЛХАРҰЛЫ', 'No', 'Выдача справки о наличии либо отсутствии судимости', '2023-04-14 16:12:05'),
    createData('002241054954', 'ШАМИШЕВА ЛӘЗЗАТ ӘБІШҚЫЗЫ', 'No', 'Выдача справки о наличии либо отсутствии судимости', '2023-04-14 16:14:05'),
    createData('002241055082', 'КАРПИШЕВА ЛЯЗЗАТ КАЗБЕКОВНА', 'No', 'Выдача справки о наличии либо отсутствии судимости', '2023-04-14 16:15:25'),
    createData('002241055257', 'ЛИ АРТУР ГРИГОРЬЕВИЧ', 'No', 'Выдача справки о наличии либо отсутствии судимости', '2023-04-14 16:15:25')
];

export default function BasicTable() {
    const [open, setOpen] = useState(false);

    return (
        <TableContainer component={Paper} style={{width: "80vw"}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Номер заказа</TableCell>
                        <TableCell align="right">ФИО</TableCell>
                        <TableCell align="right">ФИО Довереннего Лица</TableCell>
                        <TableCell align="right">Название госуслуги</TableCell>
                        <TableCell align="right">Время оформления заказа</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="right">{row.number}</TableCell>
                            <TableCell align="right">{row.fio}</TableCell>
                            <TableCell align="right">{row.nfio}</TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align='right'>
                                <AnimateButton>
                                <Button variant="contained" color="success" sx={{ boxShadow: 'none', margin: "20px", padding: "10px 40px" }} onClick={() => {
                                    setOpen(true);
                                }} >
                                    Выдать
                                </Button>
                                <FormDialog open={open} setOpen={setOpen}/>
                            </AnimateButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

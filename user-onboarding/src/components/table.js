import React from 'react';
import { Table } from 'reactstrap';

const newTable = ({ user }) => {
    return (
        <Table>
            <Thead>
                <TR>
                    <TH>#</TH>
                    <TH>Name</TH>
                    <TH>Email</TH>
                    <TH>Password</TH>
                    <TH>Terms</TH>
                </TR>
            </Thead>
            <Tbody>
                <TR>
                    <TH scope='row'>{user.id}</TH>
                    <TD>{user.name}</TD>
                    <TD>{user.email}</TD>
                    <TD>{user.password}</TD>
                    <TD>{user.terms === true ? 'YES' : null}</TD>
                </TR>
            </Tbody>
        </Table>
    )
}

export default newTable;
import { Table } from "antd"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProposal } from "../reducers/proposalsSlice";
import PointForm from "./PointForm";

const columns = [
    {
        title: 'Номер заявки',
        dataIndex: 'num',
        key: 'num',
    },
    {
        title: 'Дата заявки',
        dataIndex: 'createdDate',
        key: 'createdDate',
    },
];

function Proposals() {

    const proposals = useSelector((state => state.proposals.proposals));
    const [selected, setSelected] = useState(false);
    const dispatch = useDispatch();

    const rowSelectionOnChange = (_, selectedRows) => {
        if (selectedRows.length) {
            dispatch(setSelectedProposal(selectedRows[0]));
            setSelected(true);
        }
    }

    return (
        <>
            <Table className="proposal-table"
                rowSelection={{
                    type: "radio",
                    onChange: rowSelectionOnChange
                }}
                columns={columns}
                dataSource={proposals}
            />
            {selected && <PointForm />}
        </>
    );
}

export default Proposals;
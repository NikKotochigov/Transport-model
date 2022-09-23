import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProposals, setSelectedProposal } from '../reducers/proposalsSlice';

const { Option } = Select

function PointSelector({ id }) {

    const dispatch = useDispatch();
    const selectedProposal = useSelector(state => state.proposals.selectedProposal);
    const proposals = useSelector(state => state.proposals.proposals);
    const points = useSelector(state => state.proposals.points);
    const [selectValue, setSelectValue] = useState();

    useEffect(() => {
        setSelectValue(id);
    }, [id])

    const handleChange = value => {
        const newPoint = points.find(point => point.id === value);
        const newProposal = {
            ...selectedProposal,
            startPoint: selectValue === selectedProposal.startPoint.id ? newPoint : selectedProposal.startPoint,
            endPoint: selectValue === selectedProposal.endPoint.id ? newPoint : selectedProposal.endPoint
        };
        const newProposals = proposals.map(proposal => {
            if (proposal.key === newProposal.key) {
                return newProposal;
            } else {
                return proposal;
            }
        })
        dispatch(setSelectedProposal(newProposal));
        dispatch(setProposals(newProposals));
        setSelectValue(value);
    };

    return (<Select
        value={selectValue}
        onChange={handleChange}
        style={{
            width: 150,
        }}
    >
        {points.map(point => <Option key={point.id} value={point.id}>{point.name}</Option>)}
    </Select>);
}

export default PointSelector;





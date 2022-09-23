import { Card, Row, Layout } from 'antd';
import { useSelector } from 'react-redux';
import PointSelector from './PointSelector';

const { Content } = Layout;

const PointForm = () => {

    const selectedProposal = useSelector(state => state.proposals.selectedProposal);

    return (
        <Content
            style={{
                margin: '10px 10px',
            }}
        >
            <Row justify="space-between">
                <Card title="Точка погрузки:" >
                    <PointSelector id={selectedProposal.startPoint.id} />
                </Card>
                <Card title="Точка разгрузки:">
                    <PointSelector id={selectedProposal.endPoint.id} />
                </Card>
            </Row>
        </Content>
    );
};

export default PointForm;
import './App.css';
import MapForm from './components/MapForm';
import Proposals from './components/Proposals';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import SplitPane from "react-split-pane"

const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [getItem('Заявки', 'sub1', <UserOutlined />),];

function App() {

  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: '10px 10px',
          }}
        >
          <SplitPane split="vertical">
            <Proposals />
            <MapForm />
          </SplitPane>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ©2022 Created by Nik Kotochigov
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;




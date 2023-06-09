import { Breadcrumb, Layout } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import CreateFood from '../components/create-food';
import MainHeader from '../components/header';
import Products from '../components/products';
import RemoveFood from '../components/remove-food';
import MainSidebar from '../components/sidebar';
import UpdateFood from '../components/update-food';

function Dashboard() {
    const params = useParams()

    const renderTabs = () => {
        switch (params["*"]) {
            case "manager/create":
                return <CreateFood />
            case "manager/modify":
                return <UpdateFood />
            case "manager/remove":
                return <RemoveFood />
        
            default:
                return <Products />
        }
      }

    return (
        <Layout>
            <MainHeader />
            <Layout>
                <MainSidebar />
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                        items={[
                            {
                                title: 'Home'
                            },
                            {
                                title: 'App'
                            }
                        ]}
                    />
                    {renderTabs()}
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Dashboard;
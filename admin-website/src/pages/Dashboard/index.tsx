import React, { useEffect, useState } from 'react';
import Layout from '../../Layouts/Default';
import { Container, Content } from './styles';
import AccessInfo from './AccessInfo';
import AccessLog from './AccessLog';
import Chart from './Chart';
import Header from '../../components/Header';
import { useSuperunit } from '../../hooks/superunit';

const Dashboard: React.FC = () => {
  const { superunities } = useSuperunit();
  const [hasSuperunit, setHasSuperunit] = useState<boolean>(false);

  useEffect(() => {
    if (superunities.length > 0) {
      setHasSuperunit(true);
    }
  }, [superunities]);

  return (
    <>
      {hasSuperunit ? (
        <Layout>
          <Header title={{ value: 'Dashboard', path: '/dashboard' }} />
          <Container>
            <Content>
              <AccessInfo />
              <Chart />
            </Content>
            <AccessLog />
          </Container>
        </Layout>
      ) : (
        <div />
      )}
    </>
  );
};

export default Dashboard;

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPackage } from 'react-icons/fi';
import {
  Container,
  MainHeader,
  List,
  ListItemsCategory,
  StyledLoading,
} from './styles';
import Pagination from '../../components/Pagination';
import { useSuperunit } from '../../hooks/superunit';
import api from '../../services/api';
import Layout from '../../Layouts/Default';
import Header from '../../components/Header';
import Delivery from './Delivery';
import Tooltip from '../../components/Tooltip';

interface IDeliveryEvents {
  text_pt: string;
  created_at: Date;
  id: string;
}

interface IVolume {
  name: string;
}

interface IUnit {
  name: string;
}

export interface IDelivery {
  volume: IVolume;
  unit: IUnit;
  status: string;
  id: string;
  events: IDeliveryEvents[];
}

const Deliveries: React.FC = () => {
  const { selected } = useSuperunit();
  const [deliveries, setDeliveries] = useState<IDelivery[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  };

  useEffect(() => {
    async function getData() {
      setLoading(true);
      if (selected) {
        const response = await api.get(
          `/superunities/${selected.id}/deliveries`,
          {
            params: { page },
          },
        );

        if (!response) return;

        setDeliveries(response.data.data);

        setTotalPages(response.data.total_pages);
      }
      setLoading(false);
    }

    getData();
  }, [selected]);

  return (
    <Layout>
      <Header title={{ value: 'Deliveries', path: '/deliveries' }} />
      <Container>
        <MainHeader>
          <div>
            <h1>
              <FiPackage />
              Lista de Entregas
              {/* <Tooltip
                title='
                Você pode criar novas unidades clicando no botão "adicionar unidade".
                Unidades podem ser editadas ou excluídas ao clicar nos respectivos ícones na lista de acessos.'
                width={500}
                height={75}
                direction="down"
              /> */}
            </h1>
          </div>
        </MainHeader>

        {loading ? (
          <StyledLoading />
        ) : (
          <List>
            {deliveries.length > 0 && (
              <ListItemsCategory>
                <div>Unidade</div>
                <div>Status</div>
                <div>Volume</div>
              </ListItemsCategory>
            )}
            {deliveries.length > 0 ? (
              deliveries.map(delivery => (
                <div key={delivery.id}>
                  <Delivery delivery={delivery} />
                </div>
              ))
            ) : (
              <p>Ainda não há entregas registradas</p>
            )}
            {deliveries.length > 0 && (
              <Pagination
                page={page}
                handlePagination={handlePages}
                totalPages={totalPages}
              />
            )}
          </List>
        )}
      </Container>
    </Layout>
  );
};

export default Deliveries;

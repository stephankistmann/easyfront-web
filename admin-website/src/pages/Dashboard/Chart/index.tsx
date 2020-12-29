import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Container } from './styles';

const Chart: React.FC = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
      ],
      datasets: [
        {
          label: 'Acessos Semanais',
          data: [32, 45, 12, 76, 68, 90, 20],
          backgroundColor: ['rgba(255, 103, 87, 0.2)'],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <Container>
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: 'rgba(0, 0, 0, 0)',
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: 'rgba(0, 0, 0, 0)',
                },
              },
            ],
          },
        }}
      />
    </Container>
  );
};

export default Chart;

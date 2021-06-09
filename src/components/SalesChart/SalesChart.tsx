import React from 'react';
import { Line } from "react-chartjs-2";

import './styles.scss';


interface SalesData{
  
}

const SalesChart: React.FC = () => {
 
  const months = ["Jan", "Feb", "Mar", "Aprl", "May", "Jun", "Jul", "Sep", "Oct", "Nov", "Dec"]

  var month = new Date().getMonth();

  const data ={
    labels: months.slice(0, (month+1)),
    datasets: [
      {
        label: "Sales for 2021 (M)",
        data: [4, 35, 20, 40, 30, 35],
        //estilizando grafico para esse set de dados
        borderColor: ['#87dfee'],
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: ['#252b3c'],
        pointBackgroundColor: '#3333',
        pointBorderColor: ['rgba(255, 206, 86, 0.2)'],
        pointBorderRadius: 5,
        tension: 0.3
      },
    ]
  }

  const options = {
    type: 'line',
    responsive: false,
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  }

  return(
    <div className="container">
      <div>
        <h3>Sales</h3>
      </div>
      <Line type={options.type} width={920} height={300} data = {data} options={options} />
    </div>
  );
}

export default SalesChart;
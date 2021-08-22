import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import '../css/graphic.css';

const data = [
  { year: '2000', population: 2.525 },
  { year: '2002', population: 3.018 },
  { year: '2004', population: 3.682 },
  { year: '2006', population: 4.440 },
  { year: '2008', population: 5.310 },
  { year: '2010', population: 6.127 },
  { year: '2012', population: 6.930 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <div className="graphic">
        <Paper>
          <Chart
            data={chartData}
            >
            <ArgumentAxis />
            <ValueAxis max={7} />

            <BarSeries
              valueField="population"
              argumentField="year"
              />
            <Title text="Movimentações de Acessos" />
            <Animation />
          </Chart>
        </Paper>
        </div>
    );
  }
}

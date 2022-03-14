import ChartBar from "./ChartBar/ChartBar";
import './Chart.css';

const Chart = (props) => {
  const chartBarValues = props.dataPoints.map((d) => d.value);
  const maxValue = Math.max(...chartBarValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          max={maxValue}
          label={dataPoint.label}
          key={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;

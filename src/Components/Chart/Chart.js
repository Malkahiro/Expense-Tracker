import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = ({dataPoints}) => {

    const dataPointValuesArr = dataPoints.map((dataPoint) => dataPoint.value);
    const totalMax = Math.max(...dataPointValuesArr);

    return ( <div className="chart">
        {dataPoints.map((dataPoint) =>{
            return <ChartBar key={dataPoint.label} value={dataPoint.value} 
            maxValue={totalMax} label={dataPoint.label}/>
        })}
    </div> );
}
 
export default Chart;
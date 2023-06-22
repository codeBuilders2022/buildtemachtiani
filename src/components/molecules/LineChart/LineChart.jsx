import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './LineChart.scss'
function LineChartMetric({ data, keyData = "key", width, country }) {
  return (
    <div className='charLine'>
      <BarChart width={width} height={300} data={data}>
        <XAxis dataKey={country ? country : "year"} />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Bar dataKey={keyData} fill="#3887CC" />
      </BarChart>
    </div>
  );
}
export default LineChartMetric
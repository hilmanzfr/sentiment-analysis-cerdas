import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, Cell } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: 'rgba(42, 42, 42, 0.8)', padding: '10px', borderRadius: '5px' }}>
        <p className="label" style={{ color: 'white' }}>{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function SentimentChart({ chartData }) {
  return (
    <BarChart width={400} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="2 2" stroke="#ffffff" />
      <XAxis dataKey="name" tick={{ fontSize: 17, fill: 'white' }} />
      <YAxis tick={{ fontSize: 17, fill: 'white' }} />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="probability" minPointSize={5}>
        <LabelList dataKey="probability" position="center" style={{ fill: 'white', fontSize: '17px' }} />
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.name === 'Positive' ? '#32a073' : '#fd5339'} />
        ))}
      </Bar>
    </BarChart>
  );
}

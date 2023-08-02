"use client";
import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, Cell } from 'recharts';

export default function Home() {
  const [text, setText] = useState('');  // User input state
  const [sentiment, setSentiment] = useState(null); // Sentiment result state
  const [sentimentProbability, setSentimentProbability] = useState({}); // Sentiment probabilities state
  const [errorMessage, setErrorMessage] = useState(null); // Error message state

  const chartData = [
    {name: 'Negative', probability: sentimentProbability.negative},
    {name: 'Positive', probability: sentimentProbability.positive}
  ]

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      setErrorMessage('You need to input some text.');
      return;
    }

    setErrorMessage(null); // Clear the error message if the form is submitted successfully

    // Here you'll make a POST request to your FastAPI backend
    // with the text to be analyzed.
    const response = await fetch('http://0.0.0.0/predict', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text })
    });

    const data = await response.json();

    const roundedProbabilities = {
      positive: parseFloat(data.probabilities.positive).toFixed(2),
      negative: parseFloat(data.probabilities.negative).toFixed(2),
    };

    setSentiment(data.prediction);
    setSentimentProbability(roundedProbabilities);
    
  };

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

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex flex-col items-center justify-center flex-grow py-2">
        <h1 className="text-4xl font-bold mb-5">
          Sentiment Analysis CeRDaS | Hilman Zafri
        </h1>
        <p className="mb-5 text-lg text-center">
          Type in some text (e.g., a review, tweet, etc.) and we'll predict the sentiment.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          {errorMessage && (
              <div className="mb-4 p-2 text-white text-sm rounded" style={{ backgroundColor: 'rgba(240, 68, 56, 0.2)', borderColor: '#7A271A', borderWidth: '2px', borderStyle: 'solid' }}>
                {errorMessage}
              </div>
            )}
          <textarea 
            className="w-full p-2 mb-4 bg-white text-black border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-300" 
            rows="5"
            placeholder="Type anything (eg: review, tweets, etc)"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <button 
            className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75" 
            type="submit"
          >
            Predict Sentiment
          </button>

          {sentiment && (
            <div className="mt-4 text-2xl font-bold flex flex-col justify-center items-center">
              <div>
                <span className="text-lg mr-2">
                  {sentiment === 'Positive' ? '😁' : '😕'}
                </span>
                {sentiment}
              </div>
              <div className='mt-8 mr-8'>
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
              </div>
            </div>
          )}
        </form>
      </main>

      <footer className="py-2 text-center text-sm border-t border-gray-700">
        Made by <a className="text-blue-400 hover:underline" href="https://github.com/hilmanzfr">Hilmanzfr</a> | <a className="text-blue-400 hover:underline" href="https://github.com/hilmanzfr/cerdas-app">Cerdas App</a>
      </footer>
    </div>
  )
}

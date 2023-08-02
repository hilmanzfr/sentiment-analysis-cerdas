import { useState } from 'react';
import SentimentChart from '../SentimentChart/SentimentChart';

export default function Form({ setText, text, handleSubmit, errorMessage, sentiment, chartData }) {
  return (
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
            <SentimentChart chartData={chartData} />
          </div>
        </div>
      )}
    </form>
  );
}

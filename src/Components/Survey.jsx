// src/Survey.js
import React, { useState, useEffect } from 'react';
import Thank from './Thank';
import "../App.css"
import { IoCloseCircleSharp } from "react-icons/io5";

function Survey() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [sessionId] = useState(() => `session_${Date.now()}`); // Unique session ID
  const [showThankYou, setShowThankYou] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const handleClose = ()=>{
    window.close();
  }
  useEffect(() => {
    // Load questions from local storage
    const storedQuestions = JSON.parse(localStorage.getItem('surveyQuestions')) || [];
    setQuestions(storedQuestions);
  }, []);

  const handleAnswerChange = (questionId, value) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNavigation = (step) => {
    setCurrentQuestionIndex((prevIndex) => Math.max(0, Math.min(questions.length - 1, prevIndex + step)));
  };

  const handleSkip = () => {
    handleNavigation(1);
  };

  const handleSaveResponses = (status = 'IN_PROGRESS') => {
    const storedResponses = JSON.parse(localStorage.getItem('surveyResponses')) || {};
    storedResponses[sessionId] = { responses, status };
    localStorage.setItem('surveyResponses', JSON.stringify(storedResponses));
  };

  const handleSubmit = () => {
    setConfirmSubmit(true);
  };

  const confirmAndSubmit = () => {
    handleSaveResponses('COMPLETED');
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      window.location.reload(); // Return to the welcome screen
    }, 5000);
  };

  if (showThankYou) {
    return <Thank/>;
  }

  if (questions.length === 0) return <p>Loading...</p>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-blue-300'>
      <h2 className='text-center text-4xl'>Customer Satisfaction Survey</h2>
      <p className='mt-10 ml-auto font-bold'>Question {currentQuestionIndex + 1} / {questions.length}</p>
      <div className='flex flex-col mt-10'>
      
        <p><span className='text-xl'>{currentQuestion.id}{"."}</span><span className='text-xl m-1 font-bold'>{currentQuestion.question}</span></p>
        {currentQuestion.type === 'rating' && (
          <div className='flex justify-center'>
            <input className='mt-10 w-1/3'
            type="range"
            min="1"
            max={currentQuestion.scale}
            value={responses[currentQuestion.id] || 1}
            onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
          />
          </div>
        )}
        {currentQuestion.type === 'text' && (
          <textarea className='mt-10 h-[140px]'
            value={responses[currentQuestion.id] || ''}
            onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
          />
        )}
      </div>
     <div className='flex gap-x-4 mt-10'>
     <button onClick={() => handleNavigation(-1)} disabled={currentQuestionIndex === 0} className='bg-blue-700 w-[140px] h-[60px] rounded-md text-white text-xl px-2 py-4'>Previous</button>
      <button onClick={handleSkip} className='bg-green-700 rounded-md text-white text-xl px-2 py-4 w-[140px] h-[60px]'>Skip</button>
      {currentQuestionIndex < questions.length - 1 ? (
        <button onClick={() => handleNavigation(1)} className='bg-pink-600 rounded-md text-white w-[140px] h-[60px] text-xl px-2 py-4'>Next</button>
      ) : (
        <button onClick={handleSubmit} className='bg-orange-700 rounded-md text-white text-xl px-2 py-4 w-[140px] h-[60px]'>Submit</button>
      )}

     </div>
      {confirmSubmit && (
        <div className="confirmation-dialog flex flex-col rounded-lg">
          <span className='ml-auto text-red-400'><button onClick={handleClose}><IoCloseCircleSharp /></button></span>
          <p className='text-xl font-bold'>Are you sure you want to submit your answers?</p>
          <div className='flex justify-center gap-x-4'>
          <button onClick={confirmAndSubmit} className='mt-5 text-white bg-blue-500 rounded-md hover:bg-blue-600 w-1/3 px-2 py-2'>Yes, Submit</button>
          <button onClick={() => setConfirmSubmit(false)} className='mt-5 text-white bg-red-500 rounded-md hover:bg-blue-600 w-1/3 px-2 py-2'>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Survey;

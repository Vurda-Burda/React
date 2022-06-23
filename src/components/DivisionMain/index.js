import React, { useEffect, useRef, useState, useCallback } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { COUNT_PLUS, COUNT_MINUS } from '../../store/actions/generalСounterAction';

//Деление
export const DivisionMain = () => {

   //Переменные для формирования примера
   const [firstNumber, setFirstNumber] = useState(0);
   const [secondNumber, setSecondNumber] = useState(0);
   const [inputAnswer, setInputAnswer] = useState("");

   //Счетчик ответов
   const [countPlus, setCountPlus] = useState(0);
   const [countMinus, setCountMinus] = useState(0);

   const inputRef = useRef();
   const dispatch = useDispatch();

   //Счетчик ответов со всех операций
   const counterPlus = useCallback(() => dispatch({ type: COUNT_PLUS }), [dispatch]);
   const counterMinus = useCallback(() => dispatch({ type: COUNT_MINUS }), [dispatch]);

   const onChange = useCallback((e) => setInputAnswer(e.target.value), []);

   //Формирование чисел для примера
   const setExample = useCallback(() => {
      const first = Math.ceil(Math.random() * 100);
      const second = Math.ceil(Math.random() * 10);
      if (first % second !== 0 || first / second > 10 || second === 0) {
         setExample();
      } else {
         setFirstNumber(first);
         setSecondNumber(second);
      }
   }, []);

   //Создание примера при отрисовки компонента 
   useEffect(() => {
      if (firstNumber === 0 && secondNumber === 0) {
         setExample();
      }
   }, [setExample, firstNumber, secondNumber]);

   //Логика счетчика ответов
   const countAnswer = () => {
      if (firstNumber / secondNumber === Number(inputAnswer)) {
         inputRef.current.value = "";
         setCountPlus(countPlus + 1)
         counterPlus();
         setExample();
      } else {
         inputRef.current.value = "";
         setCountMinus(countMinus + 1);
         counterMinus();
      };
   };

   return (
      <>
         <div className="division">
            <span className="example">{firstNumber} ÷ {secondNumber} = </span>
            <input className='enterNumber' ref={inputRef} type="number" onChange={onChange} />
            <button className='verify' onClick={countAnswer} >Проверить</button>
         </div>
         <div className="divisionAnswer"><span className="answer">Верно: {countPlus}</span><span className="answer">Не верно: {countMinus}</span></div>
      </>
   )
};

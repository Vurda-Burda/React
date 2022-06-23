import React, { useRef, useState, useCallback, useEffect } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { COUNT_PLUS, COUNT_MINUS } from '../../store/actions/generalСounterAction';

//Вычитание
export const SubtractionMain = () => {

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

   //Формирование чисел для примера
   const setExample = useCallback(() => {
      const first = Math.ceil(Math.random() * 10) + 10;
      const second = Math.ceil(Math.random() * 10);
      if (first < second) {
         setExample();
      } else {
         setFirstNumber(first);
         setSecondNumber(second);
      }
   }, []);

   //Функция для input
   const onChange = useCallback((e) => setInputAnswer(e.target.value), []);


   //Создание примера при отрисовки компонента 
   useEffect(() => {
      if (firstNumber === 0 && secondNumber === 0) {
         setExample();
      };
   }, [setExample, firstNumber, secondNumber]);

   //Логика счетчика ответов
   const countAnswer = () => {
      if (firstNumber - secondNumber === Number(inputAnswer)) {
         //Сброс формы input
         inputRef.current.value = "";
         setCountPlus(countPlus + 1);
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
         <div className="subtraction">
            <span className="example">{firstNumber} - {secondNumber} = </span>
            <input className='enterNumber' ref={inputRef} type="number" onChange={onChange} />
            <button className='verify' onClick={countAnswer} >Проверить</button>
         </div>
         <div className="subtractionAnswer"><span className="answer">Верно: {countPlus}</span><span className="answer">Не верно: {countMinus}</span></div>
      </>
   )
}

import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { selectorGeneralCounter } from "../../store/selectors/generalCounterSelector";

export const Footer = () => {

   const generalCount = useSelector(selectorGeneralCounter);

   return (
      <div className="footer">
         <span className='generalCount'>Всего верно: {generalCount.countPlus}</span>
         <span className='generalCount'>Всего не верно: {generalCount.countMinus}</span>
      </div>
   )
}

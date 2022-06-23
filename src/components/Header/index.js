import React from 'react';
import { useSelector } from 'react-redux';
import "./styles.scss";
import { Link } from 'react-router-dom';
import { selectorButtonName } from "../../store/selectors/buttonNameSelector";

export const Header = () => {

   const buttonName = useSelector(selectorButtonName)

   return (
      <div className="header">
         <Link to="/additionMain" style={{ textDecoration: 'none' }}><div className="linkTrainingAddition">{buttonName.addition}</div></Link>
         <Link to="/subtractionMain" style={{ textDecoration: 'none' }}><div className="linkTrainingSubtraction">{buttonName.subtraction}</div></Link>
         <Link to="/multiplicationMain" style={{ textDecoration: 'none' }}><div className="linkTrainingMultiplication">{buttonName.multiplication}</div></Link>
         <Link to="divisionMain" style={{ textDecoration: 'none' }}><div className="linkTrainingDivision">{buttonName.division}</div></Link>
      </div>
   )
}

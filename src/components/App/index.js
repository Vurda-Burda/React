import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "../Header";
import { AdditionMain } from '../ AdditionMain';
import { SubtractionMain } from '../SubtractionMain';
import { MultiplicationMain } from '../MultiplicationMain';
import { DivisionMain } from '../DivisionMain';
import { Footer } from '../Footer';
export const App = () => {
   return (
      <>
         <Header />
         <Switch>
            <Route path="/additionMain">
               <AdditionMain />
            </Route>
            <Route path="/subtractionMain">
               <SubtractionMain />
            </Route>
            <Route path="/multiplicationMain">
               <MultiplicationMain />
            </Route>
            <Route path="/divisionMain">
               <DivisionMain />
            </Route>
            <Redirect to="/additionMain" />
         </Switch>
         <Footer />
      </>
   )
}

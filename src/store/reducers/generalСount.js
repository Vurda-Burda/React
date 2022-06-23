import { COUNT_PLUS, COUNT_MINUS} from "../actions/generalСounterAction";

const initState = {
    countPlus: 0,
    countMinus: 0
};

const generalCountReducer = (state = initState, actions) => {
    switch(actions.type) {
        case COUNT_PLUS:  return { ...state, countPlus: state.countPlus + 1 };
        case COUNT_MINUS: return { ...state, countMinus: state.countMinus + 1 };
        default:
            return state;
    }
};

export default generalCountReducer;
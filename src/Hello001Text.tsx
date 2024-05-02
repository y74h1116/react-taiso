import { FC, useReducer, useState } from "react";

export const Hello001Text:FC = () => {
    const [strInput, setStrInput] = useState('');

    const reducerFunc = (state:string, action:string) => {
        return state + ' => ' + action;
    };
    const [reducerState, dispatchFunc] = useReducer(reducerFunc, strInput);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStrInput(event.target.value);
        dispatchFunc(event.target.value);
    };

    return (
        <div>
            <input type="text" value={strInput} onChange={onChangeHandler}/>
            <p>{reducerState}</p>
        </div>
    );
};

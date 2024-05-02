import { FC, useState } from "react";

export const Hello001Text:FC = () => {
    const [strInput, setStrInput] = useState('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStrInput(event.target.value);
    };

    return (
        <input type="text" value={strInput} onChange={onChangeHandler}/>
    );
};

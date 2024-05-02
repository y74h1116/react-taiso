import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Hello001Atom } from "./Hello001Atom";

export const Hello001Button:FC = () => {
    const [strAtom, setStrAtom] = useRecoilState(Hello001Atom);

    const onClickHandler = () => {
        setStrAtom(strAtom + ',a');
    }; 

    useEffect(() => {
        document.title = 'Hello001Button:' + strAtom.length.toString();
    }, [strAtom]);

    return (
        <button onClick={onClickHandler}>ボタン</button>
    );
};

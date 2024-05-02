import { FC } from "react";
import { useRecoilValue } from "recoil";
import { Hello001Atom } from "./Hello001Atom";

export const Hello001Show:FC = () => {
    const strAtom = useRecoilValue(Hello001Atom);
    return (
        <p>{strAtom}</p>
    );
};

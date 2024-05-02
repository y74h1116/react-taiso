import { FC } from "react";
import { Hello001Text } from "./Hello001Text";
import { RecoilRoot } from "recoil";

export const Hello001:FC = () => {
    const style = {border: 'solid'};
    return (
        <div style={style}>
            <p>hello 001</p>
            <Hello001Text/>
            <RecoilRoot>
            </RecoilRoot>
        </div>
    );
};

import { FC } from "react";
import { Hello001Text } from "./Hello001Text";
import { RecoilRoot } from "recoil";
import { Hello001Show } from "./Hello001Show";
import { Hello001Button } from "./Hello001Button";

export const Hello001:FC = () => {
    const style = {border: 'solid'};
    return (
        <div style={style}>
            <p>hello 001</p>
            <Hello001Text/>
            <RecoilRoot>
                <Hello001Show/>
                <Hello001Button/>
            </RecoilRoot>
        </div>
    );
};

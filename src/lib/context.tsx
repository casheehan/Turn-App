import { createContext } from 'react';

const defaultContext = {
    mouseIsDown: false,
    mouseCoords: [-1, -1],
    startingMouseCoords: [-1, -1]
};

export const MouseContext: any = createContext(defaultContext);
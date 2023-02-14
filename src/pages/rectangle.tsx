import { useRef, useState, useContext, useEffect } from "react";
import { MouseContext } from "@/lib/context";
export default function Rectangle({row, col}: {row: number, col: number}) {
    const rectRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);
    let { mouseIsDown, mouseCoords, setCoords, startingMouseCoords, setStartingCoords } = useContext(MouseContext) as any;
    //0, 10, 5
    //10, 0, 5
    //4, 2, 6
    function isBetweenValues(starting: number, current: number, test: number) {
        if(test >= starting && test <= current) {
            return true;
        }
        else if(test <= starting && test >= current) {
            return true;
        }
        return false;
    }
    const onMouseEnter = () => {
        setCoords(row, col);
        if(mouseIsDown) {
            setIsActive(true);
        }

    }
    const onMouseDown = () => {
        setStartingCoords(row, col);
        setIsActive(true);
    }
    useEffect(() => {
        if(mouseIsDown) {
            const [currentRow, currentCol ] = mouseCoords;
            const [startingRow, startingCol] = startingMouseCoords;
            if(isBetweenValues(startingRow, currentRow, row) && isBetweenValues(startingCol, currentCol, col)) {
                setIsActive(true);
            }
            else {
                setIsActive(false);
            }
        }
    }, [mouseCoords, mouseIsDown])
    return <div className={isActive ? "rectangle-selected" : "rectangle"} ref={rectRef}  onMouseEnter={onMouseEnter} onMouseDown={onMouseDown} ></div>;

}
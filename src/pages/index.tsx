import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Row from './row'
import { useEffect, useState } from 'react';
import { MouseContext } from '@/lib/context'

export default function Home() {
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseCoords, setMouseCoords] = useState([-1, -1]);
  const [startingMouseCoords, setStartingMouseCoords] = useState([-1, -1]);

  const onMouseDown = () => {
    console.log('Mouse Down');
    setMouseDown(true);
  }
  const onMouseUp = () => {
    console.log('Mouse Up');
    setMouseDown(false);
  }
  const setCoords = (row: number, col: number) => {
    setMouseCoords([row,col])
  }
  const setStartingCoords = (row: number, col: number) => {
    setStartingMouseCoords([row, col]);
  }
  
  /* For testing purposes
  useEffect(() => {
    console.log('from: ', startingMouseCoords);
    console.log('to: ', mouseCoords);
    
  }, [mouseCoords, startingMouseCoords])
  */
  return (
    <MouseContext.Provider value={{mouseIsDown: mouseDown, mouseCoords, setCoords, startingMouseCoords, setStartingCoords}}>
      <div onMouseDown={onMouseDown} onMouseUp={onMouseUp}> 
        <Row row={1} />
        <Row row={2}/>
        <Row row={3}/>
        <Row row={4}/>
        <Row row={5}/>
        <Row row={6}/> 
        <Row row={7}/>
        <Row row={8}/>
        <Row row={9}/>
        <Row row={10}/>
      </div>
    </MouseContext.Provider>
    
  )
}

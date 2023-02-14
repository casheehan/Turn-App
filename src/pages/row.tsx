import Rectangle from "./rectangle";

export default function Row({row}: {row: number}) {
  return (
    <div className="row">
      <Rectangle row={row} col={1}/>
      <Rectangle row={row} col={2}/>
      <Rectangle row={row} col={3}/>
      <Rectangle row={row} col={4}/>
      <Rectangle row={row} col={5}/>
      <Rectangle row={row} col={6}/>
      <Rectangle row={row} col={7}/>
      <Rectangle row={row} col={8}/>
      <Rectangle row={row} col={9}/>
      <Rectangle row={row} col={10}/>
    </div>
  );
}
import React from "react";
import {useMagicGrid} from "../index";
import "./grid.css";

const Grid = ({resizeable}) => {
  const [name, setName] = React.useState("name")

  React.useEffect(() => {
    console.log(name);

    if (name !== 'name') {
      setTimeout(() => {
        setName("name");
      }, 5000);
    } else setTimeout(() => {
      setName("name " + Math.random() % 10);
    }, 10000);

  }, [name]);


  const sharedProps = {
    animate: true,
    gutter: 30,
    static: true,
    useMin: true,
  };

  const grid1 = useMagicGrid({
    container: '.container',
    ...sharedProps
  });

  const grid2 = useMagicGrid({
    container: '.container2',
    ...sharedProps
  });

  console.log("grids", grid1);
  console.log("grids", grid2);

  return (
    <>
      {name === 'name' &&
        <div className={`container ${resizeable ? 'resizeable' : ''}`}>
          <div className="item1">{`1 ${name}`}</div>
          <div className="item2">2</div>
          <div className="item3">3</div>
          <div className="item4">4</div>
          <div className="item5">5</div>
          <div className="item6">6</div>
          <div className="item7">7</div>
          <div className="item8">8</div>
          <div className="item9">9</div>
          <div className="item10">10</div>
          <div className="item11">11</div>
          <div className="item12">12</div>
          <div className="item13">13</div>
        </div>
      }

      <div className="container2">
        <div className="item1">1</div>
        <div className="item2">2</div>
        <div className="item3">3</div>
        <div className="item4">4</div>
        <div className="item5">5</div>
        <div className="item6">6</div>
        <div className="item7">7</div>
        <div className="item8">8</div>
        <div className="item9">9</div>
        <div className="item10">10</div>
        <div className="item11">11</div>
        <div className="item12">12</div>
        <div className="item13">13</div>
      </div>
    </>
  );
};

export default Grid;
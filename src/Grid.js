import React, {useEffect, useState} from "react";
import useMagicGrid from "./useMagicGrid";
import "./App.css"; // Ensure you create this file for your styles

const Grid = () => {
    const [name, setName] = useState("name")

    useEffect(() => {
        console.log(name);

        setInterval(() => {
            setName(name + Math.random());
        }, 5000);

    },[name]);



    const sharedProps = {
        animate: true,
        gutter: 30,
        static: true,
        useMin: true,
    };

    const grids = useMagicGrid({
        container: '.container',
        ...sharedProps
    });

    useMagicGrid({
        container: '.container2',
        ...sharedProps
    });

    console.log("grids", grids);

    return (
        <>
            <div className="container">
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

import React from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import {data} from "./data";


export default function App(){
    const cards = data.map(item=>
        {
            return(
                  <Card
                    key={item.id}
                    {...item}
                />

            )
        }
        )
    return(
        <>
            <Nav />
            {cards}
        </>
    )
}
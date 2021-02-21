import React, {useState, useEffect} from 'react';
import './App.css';

function ItemDetail({match}) {

    useEffect(() => {
        fetchItem();
        // console.log(match)
    }, []);

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
        );
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    }


    return (
    <div className="shop">
        {(item.data) ? 
        <>
            <h1>{item.data.item.name}</h1>
            <img className="" src={item.data.item.images.icon} alt="" />
        </>
         : ""}
        
    </div>
    );
}

export default ItemDetail;
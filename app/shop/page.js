'use client'
import React from 'react';
import { useState } from 'react';
import CreateItemForm from './components/CreateItemForm';
import CreateRandomItem from './components/CreateRandomItem';
import ItemsList from './components/ItemsList';
import ItemRepository from '@/app/repositories/ItemRepository';

export default function Shop() {
    const repo = new ItemRepository();
    const [items, setItems] = useState(repo.getAll());
    function saveItem(item){
        repo.save(item);
        setItems(repo.getAll());
    }
    function deleteItem(item){
        repo.delete(item);
        setItems(repo.getAll());
    }
    return (
        <div>
            <CreateItemForm saveItem={saveItem} />
            <CreateRandomItem saveItem={saveItem} />
            <ItemsList items={items} saveItem={saveItem} deleteItem={deleteItem}/>
        </div>
    );
}

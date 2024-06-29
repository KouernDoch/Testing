"use client"
import { useState,useEffect } from 'react';
import translations from '../public/translations.json'
function Testing() {
    return (
        <div>
            <h1>{translations['Translation Example']}</h1>
            <p>{translations['Hello world']}</p>
            {/* Add more translations as needed */}
        </div>
    );
}
export default Testing;

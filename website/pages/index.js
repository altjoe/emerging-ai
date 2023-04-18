import React, { useState, useEffect, useRef } from 'react';

export default function Index(props) {
    return (
        <div className={` justify-center items-center absolute top-0 left-0 bottom-0 right-0 bg-slate-600 flex border-2 border-red-500`}>
            <div className={`text-3xl text-white `}>Scrape data from Python first then display here, do not do scraping from the javascript client</div>
        </div>
    );
}
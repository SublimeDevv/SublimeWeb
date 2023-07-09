import React from 'react';
import Header from '../components/Header';
import SearchResult from '../components/List';
import Docs from '../utils/Docs.json';

export default function MyConfig() {
    return (
        <>
        <Header/>
        <SearchResult results={Docs.Results} />
        </>
    );
}
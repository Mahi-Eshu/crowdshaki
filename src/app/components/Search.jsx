"use client"
import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch';
import CustomSearchBox from './CustomSearchBox';
import CustomHits from './CustomHits';
const searchClient = "";
// algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY);

const Search = () => {
  
  return(
    <InstantSearch
      searchClient={searchClient}
      indexName="products"
    >
      {/* <SearchBox /> */}
      <CustomSearchBox />
      {/* <Hits /> */}
    </InstantSearch>

  );
};

export default Search;

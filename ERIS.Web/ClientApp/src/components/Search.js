import React, { Component } from 'react';
import { SearchFilters } from './SearchFilters';
import SearchResultsGrid from './SearchResultsGrid';
import { Grid } from '@material-ui/core';
import {  Button, Card, CardActions, CardContent, CardHeader } from '@mui/material/';
import Form from '../layouts/Form';
import { Layout } from './Layout';
export class Search extends Component {
    static displayName = Search.name;
    

    render () {
        return (
            <Layout>   
                <div className="alert alert-primary text-center">Search</div>
                <SearchResultsGrid />
            </Layout>
        );
    }
}

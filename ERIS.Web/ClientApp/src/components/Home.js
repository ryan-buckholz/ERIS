import React, { Component } from 'react';
import Login from './Login';
import { Layout } from './Layout';

export class Home extends Component {
    static displayName = Home.name;

    render () {
        return (
            <Layout>
                <Login></Login>
            </Layout>
        );

    }
}

import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Barang from './page/Barang';

class Main extends Component {
    render = () => {
        return (
            <Switch>
                {/* load component tiap halaman */}
                <Route path="/barang" component={Barang} />
            </Switch>
        );
    }
}

export default Main;
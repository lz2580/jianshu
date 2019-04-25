import React,{ Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import {IconFont} from './static/iconfont/iconfont'
import {BrowserRouter,Route} from "react-router-dom";
import Header from './common/heard';
import Home from './pages/home/';
import Detail from './pages/detail'
import store from './store'
class App extends Component{
	render() {
		return (
			<Provider store={store}>
				<Fragment>
				<GlobalStyle/>
				<IconFont/>
				<Header/>
				<BrowserRouter>
					<div>
						<Route path='/' exact component={Home}></Route>
						<Route path='/detail' exact component={ Detail}></Route>
					</div>
				</BrowserRouter>
				</Fragment>
			</Provider>
		)
	}
}

export default App

import React,{ Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import {IconFont} from './static/iconfont/iconfont'
import {BrowserRouter,Route} from "react-router-dom";
import Header from './common/heard'
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
						<Route path='/' exact render={() => <div>首页</div>}></Route>
						<Route path='/detail' exact render={() => <div>detail</div>}></Route>
					</div>
				</BrowserRouter>
				</Fragment>
			</Provider>
		)
	}
}

export default App
import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import {IconFont} from './static/iconfont/iconfont'
import Header from './common/heard'
import store from './store'
class App extends Component{
	render() {
		return (
			<Provider store={store}>
				<GlobalStyle/>
				<IconFont/>
				<Header/>
			</Provider>
		)
	}
}

export default App
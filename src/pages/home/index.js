import React,{ Component } from 'react'
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
class Home extends Component{
	render() {
		return(
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4653/d63edcaf954eced9ed5f9ad5ed6904f71c04edf4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"  alt=""/>
					<Topic/>
					<List/>
				</HomeLeft>
				<HomeRight>
					<Recommend/>
					<Writer/>
				</HomeRight>
			</HomeWrapper>
		)
	}
}




export default Home

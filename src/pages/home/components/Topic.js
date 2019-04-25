import React,{ Component } from 'react'
import { TopicWrapper,TopicItem } from '../style'
import { connect } from "react-redux";

class Topic extends Component{
	render() {
		return(
			<TopicWrapper>
				{
					this.props.list.map((item)=>{
						return (
							<TopicItem key={item.get('id')}>
								<img src={item.get('imgUrl')} alt=''/>
								{item.get('title')}
							</TopicItem>
						)
					})
				}
				{/*<TopicItem>*/}
					{/*<img src="https://upload.jianshu.io/users/upload_avatars/6305091/dc5b863a-26fc-47df-af32-18177f6cc9ff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>*/}
					{/*社会热点*/}
				{/*</TopicItem>*/}
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	list:state.home.get('topicList')
});
export default connect(mapStateToProps,null)(Topic)
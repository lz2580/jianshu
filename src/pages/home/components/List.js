import React,{ Component } from 'react'
import {ListItem,ListInfo} from '../style'
import { connect } from "react-redux";

class List extends Component{
	render() {
		const {list} = this.props;
		return(
			<div>
				{
					list.map( (item) => {
						return (
							<ListItem key={item.get('id')}>
								<img src={item.get('imgUrl')} alt=''/>
								<ListInfo>
									<h3>{item.get('title')}</h3>
									<p>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						)
					})
				}
			</div>
		)
	}
}
const mapStateToProps = (state)=>({
	list:state.home.get('articleList')
});
export default connect(mapStateToProps,null)(List)
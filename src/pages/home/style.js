import styled from 'styled-components'

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
`;
export const HomeLeft = styled.div`
	width: 625px;
	float: left;
	padding-top: 30px;
	margin-left: 15px;
	.banner-img{
		width: 625px;
		height: 240px;
	}
`;
export const HomeRight = styled.div`
	width: 240px;
	float: right;
`;
export const TopicWrapper = styled.div`
	padding: 15px 2px 20px 0;
	overflow: hidden;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	padding-right: 10px;
	margin-left: 18px;
	font-size: 14px;
	border:1px solid #dcdcdc;
	background-color: #f7f7f7;
	border-radius: 4px;
	margin-bottom: 18px;
	img{
		width: 32px;
		height: 32px;
		display: block;
		float: left;
		margin-right: 10px;
	}
`;
export const ListItem = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	overflow: hidden;
	img{
		width: 125px;
		height: 100px;
		display: block;
		float: right;
	}
`;
export const ListInfo = styled.div`
	width: 500px;
	float: left;
	h3{
		font-size: 18px;
		line-height: 27px;
		font-weight: bold;
		color: #333;
	}
	p{
		font-size: 13px;
		line-height: 24px;
		color: #999;
	}
`;
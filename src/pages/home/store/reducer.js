import {fromJS} from "immutable";

const defaultState = fromJS({
	topicList: [{
		id: 1,
		title: '社会热点',
		imgUrl: 'https://upload.jianshu.io/users/upload_avatars/6305091/dc5b863a-26fc-47df-af32-18177f6cc9ff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
		},
		{
			id: 2,
			title: '手绘',
			imgUrl: 'https://upload.jianshu.io/users/upload_avatars/6305091/dc5b863a-26fc-47df-af32-18177f6cc9ff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
		},
		{
			id: 3,
			title: '人文历史',
			imgUrl: 'https://upload.jianshu.io/users/upload_avatars/6305091/dc5b863a-26fc-47df-af32-18177f6cc9ff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
		},
		{
			id: 4,
			title: '旅行',
			imgUrl: 'https://upload.jianshu.io/users/upload_avatars/6305091/dc5b863a-26fc-47df-af32-18177f6cc9ff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
		},
		{
			id: 5,
			title: '写作',
			imgUrl: 'https://upload.jianshu.io/users/upload_avatars/6305091/dc5b863a-26fc-47df-af32-18177f6cc9ff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
		}],
		articleList:[{
			id:'1',
			title:'两鬓斑白，发际线后移，驼背？艺术家陈道明给人感觉一夜白头',
			desc:'近日，艺术家陈道明出席中国金鸡百花电影节。陈道明作为中国电影家协会主席，在会上宣布未来五届金鸡奖落户厦门。为此，吴京表示金鸡百花奖落户厦门，祝金...',
			imgUrl:'https://upload-images.jianshu.io/upload_images/10955200-1a3960dc451da776?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
		},{
			id:'2',
			title:'男人这样追问你，说白了就是不爱你了',
			desc:'近日，艺术家陈道明出席中国金鸡百花电影节。陈道明作为中国电影家协会主席，在会上宣布未来五届金鸡奖落户厦门。为此，吴京表示金鸡百花奖落户厦门，祝金...',
			imgUrl:'https://upload-images.jianshu.io/upload_images/16235793-e996388dcaf57a1d.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
		},{
			id:'3',
			title:'发型发色选不对，天生丽质也白费',
			desc:'近日，艺术家陈道明出席中国金鸡百花电影节。陈道明作为中国电影家协会主席，在会上宣布未来五届金鸡奖落户厦门。为此，吴京表示金鸡百花奖落户厦门，祝金...',
			imgUrl:'https://upload-images.jianshu.io/upload_images/10324387-0b3fec4687833ebb.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
		},{
			id:'4',
			title:'这三张图，改变无数人！你敢看吗？',
			desc:'近日，艺术家陈道明出席中国金鸡百花电影节。陈道明作为中国电影家协会主席，在会上宣布未来五届金鸡奖落户厦门。为此，吴京表示金鸡百花奖落户厦门，祝金...',
			imgUrl:'https://upload-images.jianshu.io/upload_images/14050409-bbf7b82a62016180?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
		},{
			id:'5',
			title:'判断一个男生爱不爱你，看他回答这些问题时的反应就清楚了',
			desc:'近日，艺术家陈道明出席中国金鸡百花电影节。陈道明作为中国电影家协会主席，在会上宣布未来五届金鸡奖落户厦门。为此，吴京表示金鸡百花奖落户厦门，祝金...',
			imgUrl:'https://upload-images.jianshu.io/upload_images/10955200-1a3960dc451da776?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
		}]
	});

export default (state = defaultState, action) => {
	switch (action.type) {
		default :
			return state
	}
}
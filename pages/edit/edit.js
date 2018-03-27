const app = getApp();
Page({
	data: {
    movie: {}
	},
	onLoad(params){
    wx.showLoading({ title: '拼命加载中...' })
    var restApi = app.Api.douban.edit;
    app.Rest('get',restApi+'/'+params.id).then(res=>{
    	this.setData({
 			  movie: res.data				
    	})
   		 wx.hideLoading();
    })
	}
})
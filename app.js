const wxApi = require('./api/wxapi.js')
const rest= require('./api/rest.js')
const Api= require('./api/api.js')
const util= require('./utils/util.js')

App({
  wxRest: wxApi,
	Rest: rest,
	Api: Api,
	navigateTo(url,parms){
		if(parms) url = util.joinUrl(url,parms);
		return new Promise((resolve, reject) => {
	    wx.navigateTo({
	      url: url,
	      success: resolve,
	      fail: reject
	    })
	  })
	},
  onLaunch: function () {
    
  },
  globalData: {
    userInfo: null
  }
})
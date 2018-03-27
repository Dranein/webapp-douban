const URL = 'https://douban.uieee.com/';
module.exports = function (method,api,params) {
  api = URL + api;	
  return new Promise((resolve, reject) => {
    wx.request({
	    method: method,
      url: api,
      data: Object.assign({}, params),
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}

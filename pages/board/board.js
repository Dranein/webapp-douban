const app = getApp();
Page({
  data: {
    newmovies:[],
    theaters:[],
    boards:[],
  },
  handleClick(event) {
    app.navigateTo('../edit/edit',{
      id:event.currentTarget.dataset.item.id
    })
  },
  getNewMovies(callback) { 
    const restApi_new_movies = app.Api.douban.new_movies;
    app.Rest('get', restApi_new_movies).then(res => {
      if (callback) callback(res);
    })
  },
  getNewTheaters(callback) { 
    const restApi_in_theaters = app.Api.douban.in_theaters;
    app.Rest('get', restApi_in_theaters, {
      'start': 0,
      'count': 8
    }).then(res => {
      if (callback) callback(res);
    })
  },
  getNewTop250(callback) { 
    const restApi_top250 = app.Api.douban.top250;
    app.Rest('get', restApi_top250, {
      'start': 0,
      'count': 8
    }).then(res => {
      if (callback) callback(res);
    })
  },
  onLoad: function () {
    wx.showLoading({ title: '拼命加载中...' });
    var boardsLoad = [];
    this.getNewMovies(res=>{
      boardsLoad.push(res.data);
      this.setData({
        newmovies: res.data.subjects,
        boards: boardsLoad
      })
      this.getNewTheaters(res => {
        boardsLoad.push(res.data);
        this.setData({
          boards: boardsLoad
        })
        this.getNewTop250((res)=>{
          boardsLoad.push(res.data);
          this.setData({
            boards: boardsLoad
          })
          wx.hideLoading();
        })
      })
    })
  }
})

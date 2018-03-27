const app = getApp();
Page({
  data: {
    newmovies:[]
  },
  handleClick(event) {
    app.navigateTo('../edit/edit',{
      id:event.currentTarget.dataset.item.id
    })
  },
  onLoad: function () {
    const restApi = app.Api.douban.new_movies;
    app.Rest('get',restApi).then(res=>{
      this.setData({
        newmovies: res.data.subjects
      })
    })
  }
})

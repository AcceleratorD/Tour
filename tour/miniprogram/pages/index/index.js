// pages/index/index.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 旅游攻略列表
    strategyList: [],
    recomendList:[]
  },
  jump:function(){
    wx.switchTab({
      url: '/pages/recommend/recommend'
    })
  },
  jumpplan: function (e) {
    // 每次点击增加点击次数count
    var count = e.currentTarget.dataset.count;
    count++;
    wx.cloud.callFunction({
      name: "count",
      data: {
        tab: "tour-tj",
        id: e.currentTarget.dataset.id,
        count: count
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    //获取id
    var tjid = e.currentTarget.dataset.tjid;
    wx.navigateTo({
      url: '/pages/plan/plan?tjid=' + tjid,
    })
  },
  jumpdetail: function (e) {
    //获取id
    //wxml中保存了data-id的自定义属性
    var id = e.currentTarget.dataset.glid;
    // console.log(e.currentTarget)
    wx.navigateTo({
      url: '/pages/details/details?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 旅游攻略
    db.collection("tour-gl")
      .get()
      .then(res => {
        this.setData({
          strategyList: res.data
        })
      }).catch(err => {
        console.log(err);
      })
    // 近期推荐 选点击排名前四的四个推荐
    db.collection("tour-tj")
      .get()
      .then(res => {
        var arr = Array.from(res.data);
        arr.sort(function(a,b){return b.count-a.count});
        var recomendList=arr.slice(0,4)
        this.setData({
          recomendList: recomendList
        })
      }).catch(err => {
        console.log(err);
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
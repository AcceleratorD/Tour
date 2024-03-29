// pages/strategy/strategy.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    strategyList:{}
  },
  jumpdetail: function (e) {
    //获取id
    //wxml中保存了data-id的自定义属性
    var glid = e.currentTarget.dataset.glid;
    // console.log(e.currentTarget)
    wx.navigateTo({
      url: '/pages/details/details?glid=' + glid,
    })
  },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection("tour-gl")
    .get()
    .then(res => {
      this.setData({
        strategyList:res.data
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
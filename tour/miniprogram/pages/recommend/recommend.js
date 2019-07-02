// pages/recommend/recommend.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cjyList:[],
    gnyList:[],
    zbyList:[]
  },
  jumpplan: function (e) {
    // 每次点击增加点击次数count
    var count=e.currentTarget.dataset.count;
    count++;
    wx.cloud.callFunction({
      name: "count",
      data: {
        tab:"tour-tj",
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection("tour-tj")
      .get()
      .then(res => {
        var list1 = [];
        var list2 = [];
        var list3 = [];
        for(var i=0;i<res.data.length;i++){
          if (res.data[i].mold=="cjy") {
            list1.push(res.data[i]);
          } else if (res.data[i].mold == "gny"){
            list2.push(res.data[i]);
          } else if (res.data[i].mold == "zby"){
            list3.push(res.data[i]);
          }
        }
        this.setData({
          cjyList: list1,
          gnyList: list2,
          zbyList: list3
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
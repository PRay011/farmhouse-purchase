// pages/home/home.js
wx.cloud.init()
const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        datalist:[],// 获取数据
        index:0,// 轮播图
        current:0// 轮播图    
    },
      

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 请求云端列表数据
        db.collection("picture").get()
        .then(res => {
        // 显示到小程序页面上
        this.setData({ datalist: res.data })
        })
    },

    swiperchange(e){
        this.setData({
            index:e.detail.current,
            current:e.detail.current
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
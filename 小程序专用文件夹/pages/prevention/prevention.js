const { knowledgeData } = require('../../utils/data.js');

Page({
  data: {
    vaccines: [],
    preventionTips: []
  },

  onLoad: function() {
    this.setData({
      vaccines: knowledgeData.vaccines,
      preventionTips: knowledgeData.preventionTips
    });
  },

  onAddReminder: function() {
    wx.showModal({
      title: '筛查提醒',
      content: '将使用微信服务通知提醒您进行定期筛查。\n\n（当前为UI示意，不接真实后台）',
      confirmText: '我知道了',
      showCancel: false
    });
  },

  onShareAppMessage: function() {
    return {
      title: 'HPV 科普小卫士 - 预防策略',
      path: '/pages/prevention/prevention'
    };
  }
});
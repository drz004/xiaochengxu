Page({
  data: {
    article: null
  },

  onLoad: function(options) {
    if (options.article) {
      try {
        const article = JSON.parse(decodeURIComponent(options.article));
        this.setData({
          article: article
        });
      } catch (e) {
        console.error('解析文章数据失败', e);
      }
    }
  },

  onShare: function() {
    if (this.data.article) {
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      });
    }
  },

  onShareAppMessage: function() {
    if (this.data.article) {
      return {
        title: this.data.article.title + ' - HPV 科普小卫士',
        path: '/pages/detail/detail?article=' + encodeURIComponent(JSON.stringify(this.data.article)),
        desc: this.data.article.summary
      };
    }
    return {
      title: 'HPV 科普小卫士',
      path: '/pages/index/index'
    };
  },

  onGoHome: function() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  }
});
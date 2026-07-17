const { knowledgeData } = require('../../utils/data.js');

Page({
  data: {
    quickEntries: [],
    featuredArticles: []
  },

  onLoad: function() {
    this.setData({
      quickEntries: knowledgeData.quickEntries,
      featuredArticles: knowledgeData.featuredArticles
    });
  },

  onEntryTap: function(e) {
    const url = e.currentTarget.dataset.url;
    wx.switchTab({
      url: url
    });
  },

  onArticleTap: function(e) {
    const articleId = e.currentTarget.dataset.id;
    let article = null;
    
    for (let category of knowledgeData.categories) {
      for (let item of category.articles) {
        if (item.id === articleId) {
          article = item;
          break;
        }
      }
      if (article) break;
    }
    
    if (article) {
      wx.navigateTo({
        url: '/pages/detail/detail?article=' + encodeURIComponent(JSON.stringify(article))
      });
    }
  },

  onShareAppMessage: function() {
    return {
      title: 'HPV 科普小卫士 - 了解HPV，主动预防',
      path: '/pages/index/index',
      imageUrl: '/assets/images/share.png'
    };
  }
});
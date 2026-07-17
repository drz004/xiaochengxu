const { knowledgeData } = require('../../utils/data.js');

Page({
  data: {
    categories: []
  },

  onLoad: function() {
    const categories = knowledgeData.categories.map(cat => ({
      ...cat,
      expanded: false
    }));
    this.setData({
      categories: categories
    });
  },

  onCategoryTap: function(e) {
    const index = e.currentTarget.dataset.index;
    const categories = this.data.categories;
    categories[index].expanded = !categories[index].expanded;
    this.setData({
      categories: categories
    });
  },

  onArticleTap: function(e) {
    const article = e.currentTarget.dataset.article;
    wx.navigateTo({
      url: '/pages/detail/detail?article=' + encodeURIComponent(JSON.stringify(article))
    });
  },

  onShareAppMessage: function() {
    return {
      title: 'HPV 科普小卫士 - 科学认识HPV',
      path: '/pages/knowledge/knowledge'
    };
  }
});
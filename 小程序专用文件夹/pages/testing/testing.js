const { knowledgeData } = require('../../utils/data.js');

Page({
  data: {
    testingSteps: [],
    testingMethods: [],
    screeningRecommendations: []
  },

  onLoad: function() {
    this.setData({
      testingSteps: knowledgeData.testingSteps,
      testingMethods: knowledgeData.testingMethods,
      screeningRecommendations: knowledgeData.screeningRecommendations
    });
  },

  onShareAppMessage: function() {
    return {
      title: 'HPV 科普小卫士 - 检测指引',
      path: '/pages/testing/testing'
    };
  }
});
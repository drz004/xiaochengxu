const knowledgeData = {
  categories: [
    {
      id: 'basic',
      name: '基础认知',
      icon: '📚',
      articles: [
        {
          id: 'what-is-hpv',
          title: '什么是 HPV？病毒家族全介绍',
          summary: 'HPV是人乳头瘤病毒的缩写，它是一个庞大的病毒家族，已知的型别超过200种。',
          content: `<p>HPV是人乳头瘤病毒（Human Papillomavirus）的缩写。它是一个庞大的病毒家族，目前已知的型别超过200种。</p>
            <div class="highlight-box">
              <p><strong>核心要点：</strong>HPV感染非常常见，大多数性活跃的人在一生中都会至少感染过一次HPV。</p>
            </div>
            <h3>HPV病毒的分类</h3>
            <p>根据其致病性，HPV可以分为两大类：</p>
            <ul>
              <li><strong>高危型HPV</strong>：如HPV 16、18等，与恶性肿瘤相关</li>
              <li><strong>低危型HPV</strong>：如HPV 6、11等，主要引起良性病变</li>
            </ul>`,
          relatedArticles: ['how-spread', 'high-low-risk']
        },
        {
          id: 'how-spread',
          title: 'HPV 如何传播？破除常见误解',
          summary: '关于HPV的传播，很多人存在误解。了解真实的传播途径，才能更好地保护自己和家人。',
          content: `<p>关于HPV的传播，存在着很多误解和迷思。</p>
            <h3>主要的传播途径</h3>
            <p><strong>性接触传播</strong>是HPV最主要传播途径。</p>
            <div class="highlight-box">
              <p><strong>重要事实：</strong>避孕套可以降低HPV传播风险，但并不能完全阻止。</p>
            </div>`,
          relatedArticles: ['what-is-hpv', 'high-low-risk']
        }
      ]
    },
    {
      id: 'risk',
      name: '风险与转归',
      icon: '⚠️',
      articles: [
        {
          id: 'high-low-risk',
          title: '高危型与低危型的区别',
          summary: '不是所有HPV都一样，了解高危型和低危型的区别，减少不必要的恐慌。',
          content: `<h3>高危型HPV</h3><p>与癌症相关，需要重点关注。</p><h3>低危型HPV</h3><p>主要引起尖锐湿疣等良性病变。</p>`,
          relatedArticles: ['what-is-hpv', 'cancer-distance']
        }
      ]
    }
  ],

  featuredArticles: [
    {
      id: 'what-is-hpv',
      title: '什么是 HPV？病毒家族全介绍',
      summary: 'HPV是人乳头瘤病毒的缩写，它是一个庞大的病毒家族。'
    },
    {
      id: 'how-spread',
      title: 'HPV 如何传播？破除常见误解',
      summary: '了解真实的传播途径，才能更好地保护自己和家人。'
    }
  ],

  quickEntries: [
    {
      id: 'know-hpv',
      title: '认识 HPV',
      subtitle: '它并不可怕',
      icon: '📚',
      url: '/pages/knowledge/knowledge'
    },
    {
      id: 'need-test',
      title: '我需要检测吗？',
      subtitle: '一张图看懂流程',
      icon: '🔍',
      url: '/pages/testing/testing'
    },
    {
      id: 'vaccine-choice',
      title: '疫苗怎么选？',
      subtitle: '二价/四价/九价速查',
      icon: '💉',
      url: '/pages/prevention/prevention'
    }
  ],

  testingSteps: [
    { step: 1, title: '挂号', desc: '妇科或宫颈专科门诊' },
    { step: 2, title: '取样', desc: '医生采集宫颈细胞样本' },
    { step: 3, title: '等待报告', desc: '通常3-7个工作日出结果' },
    { step: 4, title: '解读结果', desc: '医生解读并给出建议' }
  ],

  testingMethods: [
    {
      name: 'HPV 分型检测',
      desc: '检测是否感染HPV及型别',
      detail: '可以明确感染的是高危型还是低危型HPV',
      suitable: '30岁以上女性推荐'
    }
  ],

  screeningRecommendations: [
    { age: '21-29岁', method: 'TCT单独筛查', interval: '每3年一次' },
    { age: '30-65岁', method: 'HPV+TCT联合筛查', interval: '每5年一次' }
  ],

  vaccines: [
    {
      type: '二价',
      names: '希瑞适',
      prevention_type: '16、18型',
      efficacy: '预防70%宫颈癌',
      age: '9-45岁',
      schedule: '0、1、6个月',
      price: '约600元/剂'
    },
    {
      type: '四价',
      names: '佳达修',
      prevention_type: '6、11、16、18型',
      efficacy: '预防70%宫颈癌+尖锐湿疣',
      age: '9-45岁',
      schedule: '0, 2, 6个月',
      price: '约800元/剂'
    },
    {
      type: '九价',
      names: '佳达修9',
      prevention_type: '更多型别',
      efficacy: '预防90%宫颈癌',
      age: '9-45岁',
      schedule: '0、2、6个月',
      price: '约1300元/剂'
    }
  ],

  preventionTips: [
    { icon: '💑', text: '安全性行为' },
    { icon: '🏃', text: '提升免疫力' },
    { icon: '🥗', text: '均衡饮食' },
    { icon: '🚭', text: '戒烟' }
  ]
};

module.exports = {
  knowledgeData: knowledgeData
};
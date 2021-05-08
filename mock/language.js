const language = {
  en: {
    route: {
      Dashboard: 'Dashboard',
      Example: 'Example',
      Form: 'form',
      Table: 'table',
      Tree: 'tree',
    },
  },
  zh: {
    route: {
      Dashboard: '仪表盘',
      Example: '例子',
      Form: '表单',
      Table: '表格',
      Tree: '树',
    },
  },
}

module.exports = [
  {
    url: '/vue-admin/lang',
    type: 'get',
    response: (config) => {
      const { type } = config.query
      const langList = language[type]
      if (!langList) {
        return {
          code: 50008,
          message: 'no this language',
        }
      }
      return {
        code: 20000,
        message: langList,
      }
    },
  },
]

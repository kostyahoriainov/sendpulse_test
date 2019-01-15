'use strict';

var translationsEN = {
  ABOUT_US: {
    HEADER: 'About us',
    TITLE: 'Why Beetroot Academy?',
    TEXT1: 'Beetroot Academy is a Swedish-Ukrainian IT school. Students learn from teachers who are active in the industry, resulting in real, applicable knowledge.',
    TEXT2: 'Are you ready for a future in IT?'
  },
  HOME: {
    TITLE: 'Learn based on real market needs',
    TEXT1: 'In IT, experience is everything. Employers want developers capable of taking on projects and solving problems, things that only real experience can teach you. That’s why the 100+ hours in class are heavily practical. Together with a senior practitioner, our groups become teams who work on real projects, just like in a company. Theory is studied independently via our web portal.',
    TEXT2: 'For this to work, our close ties with Beetroot are key. They continuously provide us with their recent projects, so that the skills you learn are top-modern and hot on the market.',
    TEXT3: 'We grew out of Beetroot, a successful IT company from Sweden. But unlike Beetroot, we have no commercial goals. We aim to maximize social impact instead of profit. We want individuals to develop and start new careers, and we want their communities to develop with them. In order to keep our focus on this mission, we have decided to operate as a non-profit. Money is never paid out to owners or investors. Instead, we reinvest that money to improve our courses and teaching conditions.'
  },
  USERS: {
    DELETE: 'Delete',
    ADD_NEW: 'Add new user',
    ADD: 'Add',
    EDIT: 'Edit',
    SAVE: 'Save'
  },
  USER_INFO: {
    FULL_NAME: 'User full name',
    USERNAME: 'username',
    EMAIL: 'email',
    PHONE: 'phone',
    WEBSITE: 'website',
    COMPANY: 'company',
    INFO: 'User info'
  },
  BUTTON: {
    RUSSIAN: 'Russian',
    ENGLISH: 'English'
  },
  NAV: {
    HOME: 'HOME',
    USERS: 'USERS',
    ABOUT_US: 'ABOUT US'
  }
}

var translationsRU = {
  ABOUT_US: {
    HEADER: 'О нас',
    TITLE: 'Почему Beetroot Academy?',
    TEXT1: 'Beetroot Academy шведско-украинская IT школа Студенты учатся у учителей, которые активно работают в отрасли, что дает им реальные, применимые знания.',
    TEXT2: 'Вы готовы к будущему в IT?'
  },
  HOME: {
    TITLE: 'Учиться на основе реальных потребностей рынка',
    TEXT1: 'В ИТ опыт - это все. Работодатели хотят, чтобы разработчики могли брать на себя проекты и решать проблемы, чему может научить только реальный опыт. Вот почему 100+ часов в классе очень практичны. Вместе со старшим практикующим наши группы становятся командами, которые работают над реальными проектами, как в компании. Теория изучается самостоятельно через наш веб-портал.',
    TEXT2: 'Чтобы это работало, наши тесные связи со свеклой являются ключевыми. Они постоянно предоставляют нам свои последние проекты, так что приобретенные вами навыки являются самыми современными и актуальными на рынке.',
    TEXT3: 'Мы выросли из Beetroot, успешной IT-компании из Швеции. Но в отличие от Beetroot, у нас нет коммерческих целей. Мы стремимся максимизировать социальное воздействие вместо прибыли. Мы хотим, чтобы люди развивались и начинали новую карьеру, и мы хотим, чтобы их сообщества развивались вместе с ними. Чтобы сосредоточиться на этой миссии, мы решили действовать как некоммерческая организация. Деньги никогда не выплачиваются владельцам или инвесторам. Вместо этого мы реинвестируем эти деньги, чтобы улучшить наши курсы и условия обучения.'
  },
  USERS: {
    DELETE: 'Удалить',
    ADD_NEW: 'Добавить нового пользователя',
    ADD: 'Добавить',
    EDIT: 'Редактировать',
    SAVE: 'Сохранить'
  },
  USER_INFO: {
    FULL_NAME: 'Полное имя пользователя',
    USERNAME: 'username',
    EMAIL: 'email',
    PHONE: 'телефон',
    WEBSITE: 'веб-сайт',
    COMPANY: 'компания',
    INFO: 'Данные о пользователе'
  },
  BUTTON: {
    RUSSIAN: 'Русский',
    ENGLISH: 'Английский'
  },
  NAV: {
    HOME: 'ГЛАВНАЯ',
    USERS: 'ПОЛЬЗОВАТЕЛИ',
    ABOUT_US: 'О НАС'
  }
}

angular.
  module('testApp').
  config(['$routeProvider', '$translateProvider',
    function config($routeProvider, $translateProvider) {
      $routeProvider
        .when('/home', {
          template: '<home></home>'
        })
        .when('/aboutUs', {
          template: '<about-us></about-us>'
        })
        .when('/user', {
          template: '<user-list></user-list>'
        })
        .when('/not-found', {
          template: '<not-found></not-found>'
        })
        .when('/user/:userId', {
          template: '<user-details></user-details>'
        })
        .otherwise('/not-found');
      $translateProvider.translations('en', translationsEN);
      $translateProvider.translations('ru', translationsRU);
      $translateProvider.fallbackLanguage('en');
      $translateProvider.preferredLanguage('en');
    } 
  ]);

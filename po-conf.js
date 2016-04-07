po
  .set('namespace', 'common')
  .set('template', 'template')
  .set('static', '/static/common')
  .match('plugin', {
    release: 'plugin'
  })
  .match('build', {
    release: false
  })
  .match('/static/po/(**)', {
    id: 'po/$1',
    release: '${static}/po/$1'
  })
  .match('/static/js/**', {
    isMod: false
  })
  .match('/static/(*)/(**)', {
    id: '$1/$2',
    release: '${static}/$1/$2'
  })



// var config = require('../config.json');
po.match('/plugin/FISResource.class.php', {
  preprocessor: function(content, file, conf) {
    content = content.replace('<!--[COMBO_SEVER_URL]-->', '//127.0.0.1:8080/static');
    return content;
  }
});

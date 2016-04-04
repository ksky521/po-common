po
  .set('namespace', 'common')
  .set('static', 'static')
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

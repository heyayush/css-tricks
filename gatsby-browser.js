'use strict'

require('./src/theme/index.scss')

exports.onClientEntry = () => {}

exports.onServiceWorkerUpdateReady = () => {
  // eslint-disable-next-line
  const answer = window.confirm('My page has been updated. Would you like to reload and display the latest version?')

  if (answer === true) {
    window.location.reload()
  }
}

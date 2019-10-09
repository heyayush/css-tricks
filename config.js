'use strict'

const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: ' CSS Tricks collection',
    description: 'Collection of cool CSS tricks to apply in our projects.',
    author: 'Ayush Sharma',
    favicon: '/ico/photo2.png',
    github: 'https://github.com/heyayush/css-tricks',
  },
  siteManifest: {
    name: 'CSS-Tricks Collection',
    short_name: 'CSS-Tricks',
    description: 'Collection of cool CSS tricks to apply in our projects.',
    start_url: '/',
    background_color: '#0b67a5',
    theme_color: '#0b67a5',
    display: 'standalone',
    lang: 'en',
    icon: 'static/ico/photo2.png',
  },
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS,
}

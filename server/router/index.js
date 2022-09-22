'use strict'
const express = require('express'),
  router = express.Router(),
  wa = require('./model/routes'),
  store = require('./model/store'),
  { initialize } = require('./model/whatsapp'),
  CryptoJS = require('crypto-js'),
  validation = process.env.AUTH
router.get('/', (_0x2d3762, _0x739c0a) => {
  const _0xc050d4 = require('path')
  _0x739c0a.sendFile(_0xc050d4.join(__dirname, '../../public/index.html'))
})
router.post('/backend-logout', wa.deleteCredentials)
router.post('/backend-generate-qr', wa.createInstance)
router.post('/backend-initialize', initialize)
router.post('/backend-send-list', wa.sendListMessage)
router.post('/backend-send-template', wa.sendTemplateMessage)
router.post('/backend-send-button', wa.sendButtonMessage)
router.post('/backend-send-media', wa.sendMedia)
router.post('/backend-send-text', wa.sendText)
router.post('/backend-getgroups', wa.fetchGroups)
router.post('/backend-blast', wa.blast)
module.exports = router
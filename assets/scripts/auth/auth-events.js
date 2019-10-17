'use strict'

const getFormFields = require('../../../get-form-fields.md')
const authApi = require('./api.js')
const authUi = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formDatam = getFormFields(form)

}

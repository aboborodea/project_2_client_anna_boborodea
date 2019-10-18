'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./auth-api.js')
const authUi = require('./auth-ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  authApi.signUp(formData)
    .then(authUi.onSignUpSuccess)
    .catch(authUi.onSignupFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  authApi.signIn(formData)
    .then(authUi.onSignInSuccess)
    .catch(authUi.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  authApi.changePassword(formData)
    .then(authUi.onChangePasswordSuccess)
    .catch(authUi.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.onSignOutSuccess)
    .catch(authUi.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}

'use strict'

const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').addClass('failure')
  $('#message').removeClass('success')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
  $('#sign-up').trigger('reset')
}

const onSignupFailure = function () {
  failureMessage('Sign up failed')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  store.user = responseData.user
}

const onSignInFailure = function () {
  failureMessage('sign in failed')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  successMessage('changed password successfully!')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  failureMessage('change password failed')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  successMessage('signed out successfully!')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#change-password').trigger('reset')
}

const onSignOutFailure = function () {
  failureMessage('sign out failed')
}

module.exports = {
  onSignUpSuccess,
  onSignupFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}

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

const onSignUpSuccess = function (responseData) {
  store.user = responseData.user
  console.log(responseData)
  successMessage('Signed up successfully!')
  $('#sign-up').trigger('reset')
}

const onSignupFailure = function () {
  failureMessage('Sign up failed')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  store.user = responseData.user
  successMessage('Signed in successfully!')
  $('#sign-in').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
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

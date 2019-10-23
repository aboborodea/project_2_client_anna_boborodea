'use strict'

const store = require('../store')
const viewRecipesTemplate = require('../templates/recipe-listing.handlebars')
const viewRecipeTemplate = require('../templates/one-recipe.handlebars')

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
  successMessage('Signed up successfully!')
  $('#sign-up').trigger('reset')
}

const onSignupFailure = function () {
  failureMessage('Sign up failed')
  setTimeout(function () { failureMessage('') }, 4000)
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  store.user = responseData.user
  successMessage('Signed in successfully!')
  setTimeout(function () { successMessage('') }, 5000)
  $('#sign-in').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#create-recipe').show()
  $('#update-recipe').show()
  $('#delete-recipe').show()
  $('#view-recipes').show()
  $('#view-recipe').show()
  $('body').css('background-image', 'none')
  $('body').css('background-color', '#94A5AE')
  $('#create-recipe-form').show()
  $('#update-recipe-form').show()
  $('#delete-recipe-form').show()
  $('#view-recipe-form').show()
  $('#footer').show()
  $('.box').css('height', '165px')
}

const onSignInFailure = function () {
  failureMessage('sign in failed')
  setTimeout(function () { failureMessage('') }, 4000)
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  successMessage('changed password successfully!')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  failureMessage('change password failed')
  setTimeout(function () { failureMessage('') }, 4000)
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  successMessage('signed out successfully!')
  setTimeout(function () { successMessage('') }, 4000)
  $('body').css('background-image', 'url(public/rainbow.jpg)')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#change-password').trigger('reset')
  $('#create-recipe-form').hide()
  $('#update-recipe-form').hide()
  $('#delete-recipe-form').hide()
  $('#view-recipes').hide()
  $('#view-recipe-form').hide()
  $('#row-2').html('')
  $('#footer').hide()
  $('.box').css('height', '500px')
}

const onSignOutFailure = function () {
  failureMessage('sign out failed')
  setTimeout(function () { failureMessage('') }, 4000)
}

const onCreateRecipeSuccess = function (data) {
  $('#message').css('color', 'white')
  $('#message').text('Successfully created a new recipe!')
  setTimeout(function () { successMessage('') }, 4000)
  $('#create-recipe-form').trigger('reset')
}

const onCreateRecipeFailure = function (data) {
  $('#message').css('color', 'red')
  $('#message').text('Create recipe failure!')
  setTimeout(function () { failureMessage('') }, 4000)
  $('#create-recipe-form').trigger('reset')
}

const onViewRecipesSuccess = function (data) {
  $('#row-2').html('')
  const viewRecipesHtml = viewRecipesTemplate({ recipes: data.recipes })
  $('#row-2').append(viewRecipesHtml)
}

const onViewRecipesFailure = function () {
  $('#message').text('View all recipes failure!')
  setTimeout(function () { failureMessage('') }, 4000)
}

const onViewRecipeSuccess = function (data) {
  $('#row-2').html('')
  const viewRecipeHtml = viewRecipeTemplate({ recipe: data.recipe })
  $('#row-2').append(viewRecipeHtml)
  $('#view-recipe-form').trigger('reset')
}

const onViewRecipeFailure = function () {
  $('#message').text('View recipe failure!')
  setTimeout(function () { failureMessage('') }, 4000)
  $('#view-recipe-form').trigger('reset')
}

const onDeleteRecipeSuccess = function () {
  $('#message').text('Recipe deleted successfully!')
  setTimeout(function () { successMessage('') }, 4000)
  $('#delete-recipe-form').trigger('reset')
}

const onDeleteRecipeFailure = function () {
  $('#message').text('Recipe delete failure!')
  setTimeout(function () { failureMessage('') }, 4000)
  $('#delete-recipe-form').trigger('reset')
}

const onUpdateRecipeSuccess = function (data) {
  $('#message').css('color', 'green')
  $('#message').text('Successfully updated a new recipe!')
  setTimeout(function () { successMessage('') }, 4000)
  $('#message').css('color', 'white')
  $('#update-recipe-form').trigger('reset')
}

const onUpdateRecipeFailure = function (data) {
  $('.message').css('color', 'red')
  $('.message').text('Update recipe failure!')
  setTimeout(function () { failureMessage('') }, 4000)
  $('#update-recipe-form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignupFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateRecipeSuccess,
  onCreateRecipeFailure,
  onViewRecipesSuccess,
  onViewRecipesFailure,
  onDeleteRecipeSuccess,
  onDeleteRecipeFailure,
  onUpdateRecipeSuccess,
  onUpdateRecipeFailure,
  onViewRecipeSuccess,
  onViewRecipeFailure
}

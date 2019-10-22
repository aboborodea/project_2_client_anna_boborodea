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
  $('#create-recipe').show()
  $('#update-recipe').show()
  $('#delete-recipe').show()
  $('#view-recipes').show()
  $('#view-recipe').show()
  $('body').css('background-image', 'none')
  $('body').css('background-color', '#94A5AE')
  // $('h1').css('color', 'black')
  $('#create-recipe-form').show()
  $('#update-recipe-form').show()
  $('#delete-recipe-form').show()
  // $('#footer').css('color', 'black')
  $('#view-recipe-form').show()
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
  $('#sign-out').hide()
  $('#change-password').trigger('reset')
}

const onSignOutFailure = function () {
  failureMessage('sign out failed')
}

const onCreateRecipeSuccess = function (data) {
  $('#message').css('color', 'green')
  $('#message').text('Successfully created a new recipe!')
  $('#create-recipe-form').trigger('reset')
}

const onCreateRecipeFailure = function (data) {
  $('#message').css('color', 'red')
  $('#message').text('Create recipe failure!')
  $('#create-recipe-form').trigger('reset')
}

const onViewRecipesSuccess = function (data) {
  $('#row-2').html('')
  const viewRecipesHtml = viewRecipesTemplate({ recipes: data.recipes })
  $('#row-2').append(viewRecipesHtml)
}

const onViewRecipesFailure = function () {
  $('#message').text('View all recipes failure!')
}

const onViewRecipeSuccess = function (data) {
  $('#row-2').html('')
  const viewRecipeHtml = viewRecipeTemplate({ recipe: data.recipe })
  $('#row-2').append(viewRecipeHtml)
}

const onViewRecipeFailure = function () {
  $('#message').text('View recipe failure!')
}

const onDeleteRecipeSuccess = function () {
  $('#message').text('Recipe deleted successfully!')
}

const onDeleteRecipeFailure = function () {
  $('#message').text('Recipe delete failure!')
}

const onUpdateRecipeSuccess = function (data) {
  $('#message').css('color', 'green')
  $('#message').text('Successfully updated a new recipe!')
  $('#message').css('color', 'white')
  $('#update-recipe-form').trigger('reset')
}

const onUpdateRecipeFailure = function (data) {
  $('.message').css('color', 'red')
  $('.message').text('Update recipe failure!')
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

'use strict'

const store = require('../store')
const viewRecipesTemplate = require('../templates/recipe-listing.handlebars')
const viewRecipeTemplate = require('../templates/one-recipe.handlebars')
const authApi = require('./auth-api.js')

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
  $('#sign-up-link').hide()
  $('#sign-in-link').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#change-password-link').show()
  $('#view-recipes').show()
  $('body').css('background-image', 'none')
  $('body').css('background-color', '#94A5AE')
  $('#create-recipe-form').show()
  $('#view-recipe-form').show()
  $('#footer').show()
  $('.box').css('height', '165px')
  $('#show-create-form').show()
  $('#show-update-form').show()
  $('#show-delete-form').show()
  $('#show-view-form').show()
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
  $('body').css('background-image', 'url(public/asparagus.jpg)')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#change-password-link').hide()
  $('#sign-out').hide()
  $('#sign-up-link').show()
  $('#sign-in-link').show()
  $('#change-password').trigger('reset')
  $('#create-recipe').hide()
  $('#update-recipe').hide()
  $('#delete-recipe').hide()
  $('#view-recipes').hide()
  $('#view-recipe').hide()
  $('#footer').hide()
  $('#resource-display').html('')
  $('#view-recipe').hide()
  $('#show-create-form').hide()
  $('#show-update-form').hide()
  $('#show-delete-form').hide()
  $('#show-view-form').hide()
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
  // console.log('hi')
  // console.log('data', data)
  // console.log('data.recipe', data.recipe)
  $('#resource-display').html('')
  const viewRecipeHtml = viewRecipeTemplate({ recipe: data.recipe })
  $('#resource-display').append(viewRecipeHtml)
}

const onCreateRecipeFailure = function (data) {
  $('#message').css('color', 'red')
  $('#message').text('Create recipe failure!')
  setTimeout(function () { failureMessage('') }, 4000)
  $('#create-recipe-form').trigger('reset')
}

const onViewRecipesSuccess = function (data) {
  // console.log('data', data)
  $('#resource-display').html('')
  const viewRecipesHtml = viewRecipesTemplate({ recipes: data.recipes })
  $('#resource-display').append(viewRecipesHtml)
  $('.delete').on('click', onDelete)
}

const onViewRecipesFailure = function () {
  $('#message').text('View all recipes failure!')
  setTimeout(function () { failureMessage('') }, 4000)
}

const onViewRecipeSuccess = function (data) {
  $('#resource-display').html('')
  const viewRecipeHtml = viewRecipeTemplate({ recipe: data.recipe })
  $('#resource-display').append(viewRecipeHtml)
  $('#view-recipe-form').trigger('reset')
  $('.delete').on('click', onDelete)
}

const onViewRecipeFailure = function () {
  $('#message').text('View recipe failure!')
  setTimeout(function () { failureMessage('') }, 4000)
  $('#view-recipe-form').trigger('reset')
}

const onDelete = function (event) {
  event.preventDefault()
  // console.log('delete')
  console.log('event.target', event.target)
  console.log('event.target.parentNode.parentNode', event.target.parentNode.parentNode)
  $(event.target.parentNode.parentNode.parentNode).hide(1000)
  // console.log('event.target.id', event.target.id)
  authApi.deleteRecipe(event.target.id)
    .then(onDeleteRecipeSuccess)
    .catch(onDeleteRecipeFailure)
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
  $('#resource-display').html('')
  const viewRecipeHtml = viewRecipeTemplate({ recipe: data.recipe })
  $('#resource-display').append(viewRecipeHtml)
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

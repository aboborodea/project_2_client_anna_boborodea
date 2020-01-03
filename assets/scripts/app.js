'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/auth-events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-recipe-form').on('submit', authEvents.onCreateRecipe)
  $('#view-recipes').on('click', authEvents.onViewRecipes)
  $('#view-recipe-form').on('submit', authEvents.onViewRecipe)
  $('#delete-recipe-form').on('submit', authEvents.onDeleteRecipe)
  $('#update-recipe-form').on('submit', authEvents.onUpdateRecipe)
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#change-password-link').hide()
  $('#delete-recipe').hide()
  $('#view-recipes').hide()
  $('#view-recipe').hide()
  $('#view-recipe-form').hide()
  $('#create-recipe-form').hide()
  $('#footer').hide()
  $('#create-recipe').hide()
  $('#update-recipe').hide()
  $('#show-create-form').hide()
  $('#show-update-form').hide()
  $('#show-delete-form').hide()
  $('#show-view-form').hide()
  $('#show-create-form').on('click', authEvents.onShowCreateForm)
  $('#show-update-form').on('click', authEvents.onShowUpdateForm)
  $('#show-delete-form').on('click', authEvents.onShowDeleteForm)
  $('#show-view-form').on('click', authEvents.onShowViewForm)
})

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

const onCreateRecipe = function (event) {
  event.preventDefault()
  const title = $('#recipe-title').val()
  const ingredients = $('#recipe-ingredients').val()
  const instructions = $('#recipe-instructions').val()
  const notes = $('#recipe-notes').val()
  authApi.createRecipe(title, ingredients, instructions, notes)
    .then(authUi.onCreateRecipeSuccess)
    .catch(authUi.onCreateRecipeFailure)
}

const onViewRecipes = function (event) {
  event.preventDefault()
  authApi.viewRecipes()
    .then(authUi.onViewRecipesSuccess)
    .catch(authUi.onViewRecipesFailure)
}

const onViewRecipe = function (event) {
  event.preventDefault()
  const id = $('#view-recipe-id').val()
  authApi.viewRecipe(id)
    .then(authUi.onViewRecipeSuccess)
    .catch(authUi.onViewRecipeFailure)
}

const onDeleteRecipe = function (event) {
  event.preventDefault()
  const recipeId = $('#delete-recipe-id').val()
  authApi.deleteRecipe(recipeId)
    .then(authUi.onDeleteRecipeSuccess)
    .catch(authUi.onDeleteRecipeFailure)
}

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const id = $('#update-id').val()
  const title = $('#update-title').val()
  const ingredients = $('#update-ingredients').val()
  const instructions = $('#update-instructions').val()
  const notes = $('#update-notes').val()
  console.log('onUpdateRecipe')
  authApi.updateRecipe(id, title, ingredients, instructions, notes)
    .then(authUi.onUpdateRecipeSuccess)
    .catch(authUi.onUpdateRecipeFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateRecipe,
  onViewRecipes,
  onDeleteRecipe,
  onUpdateRecipe,
  onViewRecipe
}

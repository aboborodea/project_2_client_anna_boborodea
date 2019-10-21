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

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateRecipe,
  onViewRecipes
}

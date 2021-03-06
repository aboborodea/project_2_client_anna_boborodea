'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./auth-api.js')
const authUi = require('./auth-ui.js')

const signInAfterSignUp = function (userEmail, userPassword) {
  console.log('email', userEmail)
  console.log('password', userPassword)
  const userInfor = {
    credentials: {
      email: userEmail,
      password: userPassword
    }
  }
  console.log('userInfor', userInfor)
  authApi.signIn(userInfor)
    .then(authUi.onSignInSuccess)
    .catch(authUi.onSignInFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target.parentNode
  const formData = getFormFields(form)
  console.log('formData', formData)
  console.log('formData.credentials', formData.credentials)
  console.log('formData.credentials.email', formData.credentials.email)
  console.log('formData.credentials.password', formData.credentials.password)
  authApi.signUp(formData)
    .then(authUi.onSignUpSuccess)
    .catch(authUi.onSignupFailure)
  signInAfterSignUp(formData.credentials.email, formData.credentials.password)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target.parentNode
  console.log('form', form)
  const formData = getFormFields(form)
  console.log('formData', formData)
  authApi.signIn(formData)
    .then(authUi.onSignInSuccess)
    .catch(authUi.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target.parentNode
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
  $('#create-recipe').hide()
  $('#update-recipe').hide()
  $('#delete-recipe').hide()
  $('#view-recipe').hide()
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

// const onDelete = function (event) {
//   event.preventDefault()
//   console.log('delete')
// }

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const id = $('#update-id').val()
  const title = $('#update-title').val()
  const ingredients = $('#update-ingredients').val()
  const instructions = $('#update-instructions').val()
  const notes = $('#update-notes').val()
  authApi.updateRecipe(id, title, ingredients, instructions, notes)
    .then(authUi.onUpdateRecipeSuccess)
    .catch(authUi.onUpdateRecipeFailure)
}

const onShowCreateForm = function (event) {
  $('#create-recipe').show()
  $('#update-recipe').hide()
  $('#delete-recipe').hide()
  $('#view-recipe').hide()
  $('#resource-display').html('')
}

const onShowUpdateForm = function (event) {
  $('#update-recipe').show()
  $('#create-recipe').hide()
  $('#delete-recipe').hide()
  $('#view-recipe').hide()
  $('#resource-display').html('')
}

const onShowDeleteForm = function (event) {
  $('#delete-recipe').show()
  $('#update-recipe').hide()
  $('#create-recipe').hide()
  $('#view-recipe').hide()
  $('#resource-display').html('')
}

const onShowViewForm = function (event) {
  $('#view-recipe').show()
  $('#update-recipe').hide()
  $('#create-recipe').hide()
  $('#delete-recipe').hide()
  $('#resource-display').html('')
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
  onViewRecipe,
  onShowCreateForm,
  onShowUpdateForm,
  onShowDeleteForm,
  onShowViewForm
}

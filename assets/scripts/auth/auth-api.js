'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createRecipe = function (title, ingredients, instructions, notes) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      recipe: {
        title: title,
        ingredients: ingredients,
        instructions: instructions,
        notes: notes,
        user_id: store.user.id
      }
    }
  })
}

const viewRecipes = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const viewRecipe = function (recipeId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes/' + recipeId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRecipe = function (recipeId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/recipes/' + recipeId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRecipe = function (id, title, ingredients, instructions, notes) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/recipes/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      recipe: {
        id: id,
        title: title,
        ingredients: ingredients,
        instructions: instructions,
        notes: notes
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createRecipe,
  viewRecipes,
  deleteRecipe,
  updateRecipe,
  viewRecipe
}

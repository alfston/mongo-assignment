const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionsById = (quizId) => questionsModel.findById(quizId)
const findQuestionsForQuiz = (quizId) => questionsModel.findById(quizId)
module.exports = { findAllQuestions, findQuestionsById }



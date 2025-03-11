require('dotenv').config()
const express = require('express')  //import express from "express"
const app = express()
// const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})
app.get('/youtube', (req, res) => {
  res.send('Hello Youtube!')
})
app.get('/facebook', (req, res) => {
  res.send('Hello Facebook!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
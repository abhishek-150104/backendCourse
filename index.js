require('dotenv').config()
const express = require('express')  //import express from "express"
const app = express()


const githubData = {
  "login": "abhishek-150104",
  "id": 159320804,
  "node_id": "U_kgDOCX8K5A",
  "avatar_url": "https://avatars.githubusercontent.com/u/159320804?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/abhishek-150104",
  "html_url": "https://github.com/abhishek-150104",
  "followers_url": "https://api.github.com/users/abhishek-150104/followers",
  "following_url": "https://api.github.com/users/abhishek-150104/following{/other_user}",
  "gists_url": "https://api.github.com/users/abhishek-150104/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/abhishek-150104/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/abhishek-150104/subscriptions",
  "organizations_url": "https://api.github.com/users/abhishek-150104/orgs",
  "repos_url": "https://api.github.com/users/abhishek-150104/repos",
  "events_url": "https://api.github.com/users/abhishek-150104/events{/privacy}",
  "received_events_url": "https://api.github.com/users/abhishek-150104/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Abhishek Kumar Shrivastav",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-02-07T18:18:21Z",
  "updated_at": "2025-02-17T14:14:47Z"
}
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
app.get('/github', (req, res) => {
  res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
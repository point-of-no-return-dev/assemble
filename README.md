# Assemble
capstone project for 2020 Charlie

by team Point of No Return

## What the app is about.
In today's software developer community, the desire for raw project experience is becoming more and more of a necessity and expectation. However, amongst up and coming developers who have less experience, finding opportunities for team projects isn't that easy, especially in today's remote environment. We wanted to create an app that made finding teams easier. Thats how we came up with the idea of Assemble.

## Our initial set up
- $ rails new app_name -d postgresql -T
- $ cd app_name
- $ rails db:create
- $ bundle add react-rails
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails generate react:install
- $ rails g react:component App
- $ rails g controller Home

### Adding reactstrap
- $ bundle add bootstrap
- $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
- $ yarn add reactstrap
- add @import 'bootstrap' in the application.scss file

### Adding react router dom
- $ yarn add react-router-dom

## Starting the Rails server
- $ rails s

# Infleux Test API

## Description

This is an API crated for Infleux's test, according to [these instructions](https://docs.google.com/document/d/1U5sSpNvm6nVlphHklTCs5rM2GTg2MAZ5dA1JgaxNM-U/edit#).

The main goal of this back-end application is for Advertises to create new campaigns, and Publishers to consult the best campaign, according to their country.

This was developed using NodeJS, MongoDB and deployed at Heroku.

##### During developing, I needed an update and delete route for developing reasons so I ended up making a CRUD (sorry, I know this wasn't in the challenge's description). I'll leave all routes documented below for testing, but I'll order according with what was asked.

## Routes

### Fetch the best campaign for your country.

The **country** parameter of the URL is case-sensitive. The front-end application makes sure to send all the values lowercased and kebab-case for standardization reasons, so that's how you'll have to search them.

`GET https://infleux-api.herokuapp.com/api/v1/campaigns/united-states`


### Create a new campaign

The `country` stuff I just said above still applies :)

`POST https://infleux-api.herokuapp.com/api/v1/campaigns`

```json

  {
    "name": "Vivara",
    "description": "Campanha para nova linha de berlocs da Disney",
    "conversionType": "CPC",
    "country": "brazil",
    "bid": 1.65
  }
```


### Fetch all campaigns

`GET https://infleux-api.herokuapp.com/api/v1/campaigns`


### Update campaign

`PUT https://infleux-api.herokuapp.com/api/v1/campaigns/<campaign_id>`

You can send only the information you wish to change, or multiple values.

```json

  {
    "name": "Banana"
  }
```

```json

  {
    "name": "I just...",
    "description": "Want to change...",
    "conversionType": "CPC", // But this needs to be either CPC, CPM or CPI
    "country": "everything!",
    "bid": 1.65 // and this has to be a number
  }
```

### Delete campaign

`DELETE https://infleux-api.herokuapp.com/api/v1/campaigns/<campaign_id>`


## Run locally

Clone this repo: 

`https://github.com/maryplank/infleux-api.git`


Inside the project's directory, install the dependecies:

`npm install`


To run locally in development mode:

`npm run dev`


To run locally in production mode:

`npm start`

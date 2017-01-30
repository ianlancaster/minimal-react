# We The People

## About
We The People is an app that makes keeping up with congress and voicing your opinion on legislation easy and meaningful. Enter in your voting address to identify your representatives, then choose categories of legislation that you care about. View all of the bills proposed by congress and track them along their journey to becoming law. Follow a bill that you are especially invested in to receive notifications when the bill's status changes. Easily and effectively voice your opinion about a bill by using the bill's 'take action' button. The best representative to contact about a bill will change depending on the status of the bill. The 'take action' button does the hard work for you by showing you which representative you need to contact and by offering multiple ways to contact the representative right from the app.

We The People is a concept app created in January of 2017 as Ian Lancaster's personal project for the Turing School of Front-End Engineering. The app is built using davezuko's react-redux-starter-kit and is powered by Firebase & the Sunlight Foundation API (now managed by Propublica). The web app was designed predominantly for mobile devices and uses redux to support an smooth transition to react native.

A rough interactive prototype of the application can be found at the link below. The prototype was created using sketch and invision.

https://invis.io/VJ9VWH3SG#/212448806_Login_Screen

If you stumbled upon this repository looking for a production application I would highly suggest checking out countable.io . I did not discover countable until after I had designed the app, but the similarities are uncanny. They also have mobile apps.

## Set Up

To run the application clone down the repo and run `npm install` and `yarn install`. Start the server with `npm start` then the application will be ready on `http://localhost:3000`.

## Development

Development of this app will be done in phases. Each phase of the app is listed below with its various requirements. GitHub issues will be created that mirror these requirements. Waffle.io will be used to track the progress of the various issues. The moon phase emoji's seen below will be updated to indicate development progress. A new moon means the issues has not been started yet, a full moon means it has been completed and merged into master.

https://waffle.io/ianlancaster/we-the-people

PHASES:

  🌑  🌒  🌓  🌔  🌝

  Phase 0: Project Preparation

    🌝 Determine Phases and add to GitHub
    🌝 Create better read-me
    🌝 Make project structure determinations
    🌝 Get CORS Express Server Working

  Phase 1: MVP

    🌝 Implement iPhone container frame
    🌝 Implement top and bottom app navigation.
    🌝 Display a list of bill preview components (cards) that show name
     Bill identifier
    🌝 Bill introduction date
    🌝 Last activity date
    🌝 Bill status indicator
    🌑 Categorize bills and add tags

  Phase 2: Sorting and filtering

    🌑 Sort by closest to becoming law
    🌑 Sort by date introduced
    🌑 Sort by last activity
    🌑 Filter by tag
    🌑 Search

  Phase 3: Bill Detail

    🌑 Display bill id
    🌑 Display bill title
    🌑 Display bill tags
    🌑 Display bill proposed date
    🌑 Display bill sponsors
    🌑 Display bill last action
    🌑 Display bill summary

  Phase 4: Getting Gritty

    🌑 Display bill progress on bill detail screen
    🌑 Show bill progress bar on bill summary card
    🌑 Add view full bill link

  Phase 5: Authentication

    🌑 Build out login screen
    🌑 Allow user to login with Facebook
    🌑 Create voting address verification screen
    🌑 Create interest / category screen
    🌑 Create my account screen

  Phase 6: Make it useful

    🌑 Make bills default to interests sorted by closest to becoming law
    🌑 Add follow bell to bill card and bill detail
    🌑 Add followed option to bill filtering
    🌑 Add take action button and functionality
    🌑 Add notification center for followed bills

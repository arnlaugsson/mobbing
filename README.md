# mobbing

A simple boiler-plate code to get us mobbing!

## Contributors
- Skúli Arnlaugsson (@arnlaugsson)

## Getting started

1. Run 'yarn' to install all required dependencies.
2. Run 'yarn dev' to spin up the API and the Client (it will open up in the browser)

### Running tests

1. To run tests, run 'yarn test'
2. To run tests while developing, run 'yarn watch'

## Tasks

1. Add error handling to the client, so the page is update when an invalid formula is entered.
    - Example invalid input: "@tHiS w0n't work".
    - It should update the output box saying the input is not valid.
    - - It should make the output box red to indicate an error.
2. Add support for the exponatiation character "^".
3. Improve the styling, surprise us!

## Mobbing session

### Prepare

1. One person from the teams forks this repo. And invites the other members to join that repo.
2. Every team member install https://github.com/remotemobprogramming/mob and clones the forked repo to their machine
3. Familiarize yourselves as a team with the repo.
4. To make sure everything is set up correctly, start with the "introduction" round.
    - With the repo cloned locally, starting with one team member, type: `mob start 1 -r`
    - Open README.md in your favourite editor, add your name to the Contributor's list.
    - Save the file and type `mob next`
    - All of your changes should be saved and pushed to the new branch, and the next person can proceed until everyone has added there name.
        - If not, you'll need to fix your SSH key,or https authentication to the repo.
            - Have you accepted the invite to the Github project?
            - Are you using the correct SSH key?
    - Once the last person on the team has added their name, simply type `mob next` and you are ready to move on to the next step.
5. The team pick a tasks and decides who will be the first driver, and decides how frequently we want to swithc drivers (5 min recommended).
6. That person shares their screen in a video conferencing software (Teams or Google meet for a lighter experience).

### Start mobbing

1. Once everyone is ready, the first driver types: `mob start 5 -r`.
2. Start thinking out loud, and coding. The other team members are navigators, and should try to keep an eye on the big picture and what's happening. Discuss, think, disagree, and decide.
3. Once the time is up for the first driver, type `mob next`. The next team member types `start mob 5 -r`, and so it continues. Until the feature is complete or the time is up. After this type `mob done` and follow the instructions in the Mobbing tool for finishing up your changes.

### When the time is up

Discuss how it went, what went well, what could have been better?

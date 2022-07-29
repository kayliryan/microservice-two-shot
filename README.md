# Wardrobify

Team:

* Person 1 - Kayli - Hats
* Person 2 - Jonathan - Shoes

## Design

## Shoes microservice

I created a model for Hat based on the specifications I was given. I also created a LocationVO object and built a poll that would gather the locations from the Wardrobe microservice and assign it to that LocationVO. From there I implemented React to make sure I could display that data I created in the backend, and allow my user to manipulate the hat data like creating a hat, and deleting a hat.

## Hats microservice

The Shoe app required a shoe and BinVO model to be built. The BinVO would take in take from the Bin model in the wardrobe app which the shoe model will then reference. The poller requests data from the Bin model in the wardrobe app and writes the entries into the BinVO model in the shoes app. Using react a front end is built as an SPA where the end user can create new shoes or delete shoes from the closet.

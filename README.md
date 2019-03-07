# Project 1 @cmda-minor-web · 2018-2019

**Description of the application. Coming soon...**

## Table of Contents
* [How to install](#how-to-install) 
* [OBA API](#oba-api)
* [Concept](#concept)
* [Walktrough the application](#walk-trough-the-application) 
* [Learning process](#learning-process)
* [Resources](#resources)
* [Credits](#credits)
* [Checklist](#checklist)
* [License](#license)

## How to install

Before installing make sure you have installed the latest version of node.js.
Choose or make a new directory.
Load the template into your directory.

```bash
git clone https://github.com/chelseadoeleman/project-1-1819.git
```

Make sure you are in the right directory 
```bash
cd project-1-1819
```

Check if you have the latest version of npm.
Install the dependencies in [package.json](./package.json)
```bash
npm install
```

## OBA API

This is my second time working with the Oba API and it's still as tedious as ever. Thanks to Wouter's Oba-wrapper it's a lot more manageable. Thankyou very much! This saved me a lot of time. Some facets I would like to take a closer look at are the `target-audience` and `reading-level` manly because I would like to make an application for the Oba Junior. Here you can find childrens book till 12 years. After that you will get to the Young Adults section.

Some thing I ran into while retrieving the data was applying multiple facets to the query. In the end it finally worked. Another thing that seemed a little odd was when I applied the `targetAudience` facet I still got some questionable books, that definitely don't belong in the youth section. 


## Concept 

For this concept I will solely focus on Oba Junior. To make searching books easier for them I want to create an application where they can visually choose what preferences they have for a book, or what they are looking for. This will then be connected to their personal data, where their history also can be found. This dataset however is not publicaly available yet so I will have to fake this data. 

After this process the user will be able to scan a book and get a selections of books based on their previous reading history or based on some genre's they have read before to discover new books. Then the application will tell them where they can find this book, by showing a floor plan of the junior department and highlighting that specific book case. If they have a mobile phone they can scan the floorplan using a QR code, to view the floor plan on their mobile phone. 

## Walktrough the application


## Learning process

I had a very hard time coming up with a concept which I was able to make in a weeks time. So in the end I settled for a basic concept with not much going on and no unique selling point. Halfway through the week I took another look at my concept and tried to come up with something more appropriate for my target audience. Luckily I already started to build my application else I would get into some serious trouble because of my limited amount of time.

Firstly I dove deep into the Oba-wrapper, because I already worked with the Api I did know the different endpoints however because of the wrapper working with the Api was slightly different and took some time to figure out. After that I decided to make some designs, because in this assignment it is not only about Web App From Scratch but also about CSS To The Rescue. Which made everything even more difficult and kinda stressed me out a bit. 

On wednesday I completely configured my Router and had a basic page set-up. Then I also found out that the final presentation of the project is also about concepting. While I still had nothing cool at that point. Luckily the standup that day was really helpfull for me. And I came up with an idea to match the bookcolor with an image chosen by the target audience.


## Resources


## Credits


## Checklist


## License
This repository is licensed as [MIT](LICENSE) by [Chelsea Doeleman](https://github.com/chelseadoeleman).


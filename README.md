# cryptocurrency-vanilla-js-tracker
---
  
**Cryptocurrency Tracker built with vanilla JS using [Coinranking API](https://docs.coinranking.com/).**

## Project Conclusion

To build this small web application I used:
* Axios for API calls
* Sass as CSS preprocessor
* CSS3 Grid for positioning
 
Building this small web application was a nice opportunity to get more comfortable using API library Axios, Sass as CSS preprocessor and overall JavaScript DOM manipulation.


I started building the application by creating Navbar which has title and 2 navigation links, home and about, home redirects you back to index.html file while about redirects you to GitHub page. After that created placeholder card-like item, which would later be filled with info that came from API call.


After making basic connection between styles and JavaScript file. I made API .get request to list 50 Cryptocurrencies. Since Cryptocurrencies came in an Array I decided to use the forEach method and append previously made card-like item, this time filled with Cryptocurrency info, to an empty container.  
Once everything was at its own place I decided to challenge myself and make a function that will determine which color should text of price change have, depending if the price change of a coin in past 24h was positive or negative. I took the approach by placing all items with class coin-change into a variable. First I had to loop through HTMLCollection and check for each index if a change was positive or negative. That was possible by slicing the first character of a string and if it was '-' the text color would be red, otherwise it would be green. 
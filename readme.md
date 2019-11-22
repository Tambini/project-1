Title of project:   The Real Donald Trump? Trump Baby?  

Api to use: 

Description:

I want to create an game that is similar to duck hunt where there will be a bunch of trump baby ballons floating around and you have to pop them.  When you click on them they will pop and then quotes he said that come from the tonalddump api pop up. As each ballon pops you get a certain amount of points.  Then after a certain amount of points you will advance to next level.The next level will display a different background and the speed of the moving balloons gets faster and harder to pop.    

Wireframes:
Desktop:

Tablet/Mobile



API What API you want to use and what information you want to get from it. *You must show us a sample of actual data you retrieved from your API.
https://docs.tronalddump.io/#search-quotes 
{
count: 25,
total: 25,
_embedded: {
quotes: [
{
appeared_at: "2014-09-14T00:00:00",
created_at: "2016-11-14T01:29:02.546384",
quote_id: "rkVCVSP-Q9KctbOOe8hwxg",
tags: [
"Money"
],
updated_at: "2016-11-14T01:29:02.546384",
value: "Money was never a big motivation for me, except as a way to keep score.",
_links: {
self: {
href: "/quote/rkVCVSP-Q9KctbOOe8hwxg"
}
},
_embedded: {
author: [
{
created_at: "2016-11-14T01:14:02.096776",
bio: null,
author_id: "wVE8Y7BoRKCBkxs1JkqAvw",
name: "Donald Trump",
slug: "donald-trump",
updated_at: "2016-11-14T01:14:02.096776"
}
],
source: [
{
created_at: "2016-11-14T01:29:02.517956",
filename: null,
quote_source_id: "65loBIbwT5--nLP33XeO5Q",
remarks: null,
updated_at: "2016-11-14T01:29:02.517956",
url: "https://twitter.com/realdonaldtrump/status/510935518360895488"
}
]
}
},


Features:
- Landing Page
- Game Page
- Moving Balloons
- Counter
- Connecting API

Stretch goals Stretch goals for additional / advanced features for when you complete your MVP.
- Animate image on landing page
- add balloons of other presidends in third level to make it harder to only click on trump


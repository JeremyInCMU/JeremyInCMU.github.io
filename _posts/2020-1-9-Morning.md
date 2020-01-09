---
layout: post
title: Toughts About A Search Engine
category: blog
tags: InformationRetrieval  PageRank Webscraper Hadoop
hidden: false
---

This morning, I reviewed broken rank algorithm. Intuition behind this algorithm is trying to evaluate importance of a webpage by observing webpages it links to and referenced webpages. It sounds, at some level, like the KNN algorithm evaluating objects by neighbours. However, it is not only a story about neigboring evaluation but also one about random process where Markov Chain comes. It shall be very interesting when combining text similarity analysis with broken rank algorithm. On the subway to company, I was thinking about a search engine system based on text similarity evaluation, page rank, web scrapper and hadoop. 

At first, a web scraper can be built and put it on cloud so that it will scrap websites once it gets signal from websites. A graph represented relationships among websites could be generated based on scrapped html. At this time, broken rank algorithm comes to get top 10 or more most significant webpages. Then data on those web pages need to be processed or cleaned by hadoop (map/reduce). At this time, the input query on the index website can be compared with those web pages by similarity analysis. The webpages scored higher are the expected webpages at a high rate.Hope this search engine can be built on cloud some day.

Carpe Diem!


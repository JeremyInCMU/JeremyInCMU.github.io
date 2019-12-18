---
layout: post
title: CMUEscortEasy
category: projects
tags: Django Python Html Js
hidden : false
---

This is actually an individual project. I finally finished this project by myself. When I was in the course of fundamental programming in CMU. I often stayed in library for whole nights preparing for the upcoming weekly quizz and trying to finish homework (a lot of programming homework) as soon as possible so that I can hang out friends at weekends. When I left school library, escort (CMU traditional school bus) started pick up students around campus. There are three kind of colored escort in CMU. Each color means a specific routine of the bus. One day, an idea came out of my mind, when I missed escorts. What if I build an application so that both drivers and students can ineractively get escorts' information. Then building the application became my individual final project. Based on demand analysis of escorts, I tried to tink about functionality of the application. 

Finally, there are two different interfaces for the applicaton. One is, of course, for students. The other is for drivers.Like most app, a log in page is indespensable. An approached database was created to contain users' id and password.
For students, the most important function is making reservation. Students can make reservation for each escort so that they can get rid of wasting time to wait for escorts especially in cold rainy or snowy days. To make the reservation function more interesting, I add the seat selection function like the function of airline ticket reservation. For drivers, they can check in students' information when picking up them. Another interesting function is that drivers can use the app to send phone messages to students who made reservation to notify them get on the bus on time. The most important function for drivers' interface is the routine calcualtion. Students' destination were stored in database when they logged in and made reservations. The app will automatically calculate an optimized routine based on students' destination. Dijkastra graph theory is the cornerstone of the routine computation functionality.

Codes can be found at my github repository <a href = "https://github.com/JeremyInCMU/CMUEscortEasy">CMU EscortEasy</a>

May be it is kind of stupid and naive. But it is the first app I made. It reminds me of the spring in CMU.
# ParkEZ | [Deployed](https://parking-lot-manage.herokuapp.com/)

## About

Picture a truck driver coming home after a week on the road but is unable to find a safe and adequate parking space for his truck and expensive cargo in their trailer. ParkEZ allows truckers and trucking companies to reserve parking spaces for heavy equipment eg., trucks, trailers, and construction vehicles at a safe location. By using this application that same driver can worry less about their equipment and spend more time with their families by quickly booking their spot ahead of their arrival.

## Feature

- Authentication

  - ParkEZ has 2 authentication startegy `Goggle|Twiter`
    ![auth](/images/authentication.jpg 'auth strategy')

- Profile

  - Profile could be `Edit` once created account and this profile is going to be used for all the purchase of spot.
    ![profile](/images/profile.jpg 'profile')

- Dashboard have lots of features.
  - Parking layout
    - Layout specifies the parking zone available and spots available in each zone.
      ![layout](/images/layout.jpg 'Layout')
  - Zone
    - There are 5 zones each have 30 parking spots.
      - Zone A (Cars Only)
        - 200\$/mth
      - Zone B (Trucks Only)
        - 200\$/mth
      - Zone C (Trailors Only)
        - 200\$/mth
      - Zone D (Trucks with Trailors Only)
        - 200\$/mth
      - Zone E (Other Only)
        - 200\$/mth
    - ![Zone](/images/zone.jpg 'Zone')
  - Select Spot
    - You can select as many spot as you like from different categories and once you hit selected you will get option for checkout
    - once you slected it and if you go back you wont able to remove it from zone as it will be disabled you have to remove it from checkout area.
    
    ![selectspot](/images/selectspot.jpg 'selectspot')
  - procced to checkout.
    - You will abel to see all selected spots.
    - if you want to delete parking slots from checkout you just require to click on the slot button and it will be removed from checkout option.
    - once you click checkout you will be proccede with the transaction to checkout page.
      ![checkout](/images/checkout.jpg 'checkout')
- Checkout Page
  - There will be billing option at the first which is same as your profile info.
  - If you want to change it you required to edit your profile first.
  - All selected parking slots will be described as per the price and total to pay with tax.
    ![bill](/images/bill.jpg 'bill')
  - You require to agree the terms and condition.
  - Then you can purchase spots for that particular month.
- Purchased page
  - We are not going to procced with transaction and all because it is just a prototype for the project by University purpose.
- Your Spots
  - It will show how many spot you have purchased till date.
    ![yourspot](/images/yourspot.jpg 'yourspot')

## Technologie Used

    React, Node, Express, JavaScript, Sequelize, MySql, Passport, Axios, Rest API, Bootstrap.

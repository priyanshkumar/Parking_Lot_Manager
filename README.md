# ParkEZ

## About

Picture a truck driver coming home after a week on the road but is unable to find a safe and adequate parking space for his truck and expensive cargo in their trailer. ParkEZ allows truckers and trucking companies to reserve parking spaces for heavy equipment eg., trucks, trailers, and construction vehicles at a safe location. By using this application that same driver can worry less about their equipment and spend more time with their families by quickly booking their spot ahead of their arrival.

## Feature

- Authentication
    - ParkEZ has 3 authentication startegy ```Goggle|Facebook|Twiter```

- Profile
    - Profile could be ```Edit``` once created account and this profile is going to be used for all the purchase of spot.

- Dashboard have lots of features.
    - Parking layout
        - Layout specifies the parking zone available and spots available in each zone
    - Zone 
        - There are 5 zones each have 30 parking spots.
            - Zone A (Cars Only)
                - 200$/mth
             - Zone B (Trucks Only)
                - 200$/mth
             - Zone C (Trailors Only)
                - 200$/mth
             - Zone D (Trucks with Trailors Only)
                - 200$/mth
             - Zone E (Other Only)
                - 200$/mth
    - Select Spot
        - You can select as many spot as you like from different categories and once you hit selected you will get option for chrckout
        - once you slected it and if you go back you wont able to remove it from zone as it will be disabled you have to remove it from checkout area.
    - procced to checkout.
        - You will abel to see all selected spots.
        - if you want to delete parking slots from checkout you just require to click on the slot button and it will be removed from checkout option.
        - once you click checkout you will be proccede with the transaction to checkout page.
- Checkout Page
    - There will be billing option at the first which is same as your profile info.
    - If you want to change it you required to edit your profile first.
    -



```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.

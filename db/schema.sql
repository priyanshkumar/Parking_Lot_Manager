-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS parking_lot_manager;
-- Creates the "blogger" database --
CREATE DATABASE parking_lot_manager;

insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice, isCheckout,createdAt, updatedAt, isPendingApproval) values ('A1', 'A', false, 300,false, sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,  isCheckout,createdAt, updatedAt, isPendingApproval) values ('A2', 'A', false, 300,false, sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,  isCheckout,createdAt, updatedAt, isPendingApproval) values ('A3', 'A', false, 300, false,sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,  isCheckout,createdAt, updatedAt, isPendingApproval) values ('B1', 'B', false, 300, false,sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,  isCheckout,createdAt, updatedAt, isPendingApproval) values ('B2', 'B', false, 300,false,sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,  isCheckout,createdAt, updatedAt, isPendingApproval) values ('B3', 'B', false, 300,false, sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,isCheckout, createdAt, updatedAt, isPendingApproval) values ('C1', 'C', false, 300,false, sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,isCheckout createdAt, updatedAt, isPendingApproval) values ('C2', 'C', false, 300,false, sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,isCheckout createdAt, updatedAt, isPendingApproval) values ('C3', 'C', false, 300,false, sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,isCheckoutcreatedAt, updatedAt, isPendingApproval) values ('D1', 'D', false, 300,false,sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,isCheckout createdAt, updatedAt, isPendingApproval) values ('D2', 'D', false, 300,false, sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,isCheckout createdAt, updatedAt, isPendingApproval) values ('D3', 'D', false, 300, false,sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,isCheckout createdAt, updatedAt, isPendingApproval) values ('E1', 'E', false, 300,false, sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,isCheckout createdAt, updatedAt, isPendingApproval) values ('E2', 'E', false, 300, false,sysdate(), sysdate(), false);
insert into ParkingSpots (spotName, spotZone, isSpotAllocated, spotPrice,isCheckout createdAt, updatedAt, isPendingApproval) values ('E3', 'E', false, 300, false,sysdate(), sysdate(), false);

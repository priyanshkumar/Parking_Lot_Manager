-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS parking_lot_manager;
-- Creates the "blogger" database --
CREATE DATABASE parking_lot_manager;

insert into ParkingSpots (spotName, spotZone, spotType, isSpotAllocated, spotPrice, isCheckout,createdAt, updatedAt, isPendingApproval) values 
('A1', 'A', 'Cars', false, 300,false, sysdate(), sysdate(), false),
('A2', 'A', 'Cars', false, 300,false, sysdate(), sysdate(), false),
('A3', 'A', 'Cars', false, 300, false,sysdate(), sysdate(), false),
('B1', 'B', 'Trucks', false, 300, false,sysdate(), sysdate(), false),
('B2', 'B', 'Trucks', false, 300, false,sysdate(), sysdate(), false),
('B3', 'B', 'Trucks', false, 300, false, sysdate(), sysdate(), false),
('C1', 'C','Trailers', false, 300, false, sysdate(), sysdate(), false),
('C2', 'C', 'Trailers', false, 300, false, sysdate(), sysdate(), false),
('C3', 'C', 'Trailers', false, 300, false, sysdate(), sysdate(), false),
('D1', 'D', 'Trucks & Trailers', false, 300,false,sysdate(), sysdate(), false),
('D2', 'D', 'Trucks & Trailers', false, 300,false, sysdate(), sysdate(), false),
('D3', 'D', 'Trucks & Trailers', false, 300, false,sysdate(), sysdate(), false),
('E1', 'E', 'Any', false, 300, false, sysdate(), sysdate(), false),
('E2', 'E', 'Any', false, 300, false, sysdate(), sysdate(), false),
('E3', 'E', 'Any', false, 300, false, sysdate(), sysdate(), false);

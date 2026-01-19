-- Keep a log of any SQL queries you execute as you solve the mystery.
-- Find the crime scene report for July 28, 2024 on Humphrey Street
SELECT description
FROM crime_scene_reports
WHERE month = 7 AND day = 28
AND street = 'Humphrey Street';
| Theft of the CS50 duck took place at 10:15am at the Humphrey Street bakery. Interviews were conducted today with three witnesses who were present at the time – each of their interview transcripts mentions the bakery. |
| Littering took place at 16:36. No known witnesses.
-- Get interviews from July 28, 2024
SELECT * FROM interviews
WHERE day = 28 AND month = 7 AND year = 2024;
| 161 | Ruth    | 2024 | 7     | 28  | Sometime within ten minutes of the theft, I saw the thief get into a car in the bakery parking lot and drive away. If you have security footage from the bakery parking lot, you might want to look for cars that left the parking lot in that time frame.                                                          |
| 162 | Eugene  | 2024 | 7     | 28  | I don't know the thief's name, but it was someone I recognized. Earlier this morning, before I arrived at Emmas bakery, I was walking by the ATM on Leggett Street and saw the thief there withdrawing some money.                                                                                                 |
| 163 | Raymond | 2024 | 7     | 28  | As the thief was leaving the bakery, they called someone who talked to them for less than a minute. In the call, I heard the thief say that they were planning to take the earliest flight out of Fiftyville tomorrow. The thief then asked the person on the other end of the phone to purchase the flight ticket. |

-- Find all flights on July 28, 2024
-- Specifically look for flights after the hours of 10:15
SELECT * FROM flights
WHERE day = 29 AND month = 7 AND year = 2024
ORDER BY hour, minute;
+----+-------------------+------------------------+------+-------+-----+------+--------+
| id | origin_airport_id | destination_airport_id | year | month | day | hour | minute |
+----+-------------------+------------------------+------+-------+-----+------+--------+
| 36 | 8                 | 4                      | 2024 | 7     | 29  | 8    | 20     |
| 43 | 8                 | 1                      | 2024 | 7     | 29  | 9    | 30     |
| 23 | 8                 | 11                     | 2024 | 7     | 29  | 12   | 15     |
| 53 | 8                 | 9                      | 2024 | 7     | 29  | 15   | 20     |
| 18 | 8                 | 6                      | 2024 | 7     | 29  | 16   | 0      |
+----+-------------------+------------------------+------+-------+-----+------+--------+
-- Get passengers on the identified flight
SELECT * FROM passengers
WHERE flight_id = 36;
7214083635      | 2A   |
| 36        | 1695452385      | 3B   |
| 36        | 5773159633      | 4A   |
| 36        | 1540955065      | 5C   |
| 36        | 8294398571      | 6C   |
| 36        | 1988161715      | 6D   |
| 36        | 9878712108      | 7A   |
| 36        | 8496433585

-- Get phone call information between 1015 at 1025 on 28 October, 2024
SELECT * FROM phone_calls
WHERE year = 2024 AND month = 7 AND day = 28 AND duration < 60;
+-----+----------------+----------------+------+-------+-----+----------+
| id  |     caller     |    receiver    | year | month | day | duration |
+-----+----------------+----------------+------+-------+-----+----------+
| 221 | (130) 555-0289 | (996) 555-8899 | 2024 | 7     | 28  | 51       |
| 224 | (499) 555-9472 | (892) 555-8872 | 2024 | 7     | 28  | 36       |
| 233 | (367) 555-5533 | (375) 555-8161 | 2024 | 7     | 28  | 45       |
| 251 | (499) 555-9472 | (717) 555-1342 | 2024 | 7     | 28  | 50       |
| 254 | (286) 555-6063 | (676) 555-6554 | 2024 | 7     | 28  | 43       |
| 255 | (770) 555-1861 | (725) 555-3243 | 2024 | 7     | 28  | 49       |
| 261 | (031) 555-6622 | (910) 555-3251 | 2024 | 7     | 28  | 38       |
| 279 | (826) 555-1652 | (066) 555-9701 | 2024 | 7     | 28  | 55       |
| 281 | (338) 555-6650 | (704) 555-2131 | 2024 | 7     | 28  | 54       |
+-----+----------------+----------------+------+-------+-----+----------+

-- Cross Reference Phone Call Number With People With PAssport Numbers
+------------+----------------+
|    name    |  phone_number  |
+------------+----------------+
| James      | (676) 555-6554 |PURPLE RECIEVER
| Larry      | (892) 555-8872 |BLUE RECIEVER I
| Kenny      | (826) 555-1652 |
| Sofia      | (130) 555-0289 | RED CALLER
| Benista    | (338) 555-6650 |ARMY CALLER
| Taylor     | (286) 555-6063 |PURPLE CALLER
| Anna       | (704) 555-2131 |ARMY RECIEVER
| Diana      | (770) 555-1861 |PINK CALLER
| Kelsey     | (499) 555-9472 |BLUE CALLER
| Jack       | (996) 555-8899 |RED RECIEVER
| Melissa    | (717) 555-1342 |BLUE RECIEVER II
| Bruce      | (367) 555-5533 |GREEN CALLER
| Jacqueline | (910) 555-3251 |NAVY RECIEVER
| Philip     | (725) 555-3243 |PINK RECIEVER
| Robin      | (375) 555-8161 |GREEN RECIEVER
| Carina     | (031) 555-6622 |NAVY CALLER
| Doris      | (066) 555-9701 |
+------------+----------------+
-- Find people who made or received short calls on July 28, 2024 and were passengers on a flight
SELECT p.name, p.phone_number, p.passport_number
FROM people p
JOIN phone_calls pc ON p.phone_number = pc.caller OR p.phone_number = pc.receiver
JOIN passengers pa ON p.passport_number = pa.passport_number
JOIN flights f ON pa.flight_id = f.id
WHERE pc.year = 2024 AND pc.month = 7 AND pc.day = 28
  AND pc.duration < 60
  AND f.year = 2024 AND f.month = 7 AND f.day = 29;
+---------+----------------+-----------------+
|  name   |  phone_number  | passport_number |
+---------+----------------+-----------------+
| Diana   | (770) 555-1861 | 3592750733      |
| Doris   | (066) 555-9701 | 7214083635      |
| Sofia   | (130) 555-0289 | 1695452385      |
| Bruce   | (367) 555-5533 | 5773159633      |
| Kelsey  | (499) 555-9472 | 8294398571      |
| Kelsey  | (499) 555-9472 | 8294398571      |
| Taylor  | (286) 555-6063 | 1988161715      |
| Kenny   | (826) 555-1652 | 9878712108      |
| Larry   | (892) 555-8872 | 2312901747      |
| Melissa | (717) 555-1342 | 7834357192      |
+---------+----------------+-----------------+

+------------+----------------+
|    name    |  phone_number  |
+------------+----------------+
| James      | (676) 555-6554 |PURPLE RECIEVER
| Larry      | (892) 555-8872 |BLUE RECIEVER I
| Kenny      | (826) 555-1652 |
| Sofia      | (130) 555-0289 | RED CALLER 1695452385  (SUSPICIOUS)
| Benista    | (338) 555-6650 |ARMY CALLER
| Taylor     | (286) 555-6063 |PURPLE CALLER 1988161715 (SUSPICIOUS)
| Anna       | (704) 555-2131 |ARMY RECIEVER
| Diana      | (770) 555-1861 |PINK CALLER
| Kelsey     | (499) 555-9472 |BLUE CALLER 8294398571  (2 PHONE CALLS)(SUSPICIOUS)
| Jack       | (996) 555-8899 |RED RECIEVER
| Melissa    | (717) 555-1342 |BLUE RECIEVER II
| Bruce      | (367) 555-5533 |GREEN CALLER 5773159633 (SUSPICIOUS)
| Jacqueline | (910) 555-3251 |NAVY RECIEVER
| Philip     | (725) 555-3243 |PINK RECIEVER
| Robin      | (375) 555-8161 |GREEN RECIEVER
| Carina     | (031) 555-6622 |NAVY CALLER
| Doris      | (066) 555-9701 |
+------------+----------------+
-- CROSS REFERENCE THE  ATM WITHDRAWAL
SELECT
  a.atm_location,
  a.year,
  a.month,
  a.day,
  p.passport_number,
  p.phone_number
FROM atm_transactions a
JOIN bank_accounts b ON a.account_number = b.account_number
JOIN people p ON b.person_id = p.id
WHERE a.year = 2024 AND a.month = 7 AND a.day = 28;

+----------------+------+-------+-----+-----------------+----------------+
|  atm_location  | year | month | day | passport_number |  phone_number  |
+----------------+------+-------+-----+-----------------+----------------+
| Leggett Street | 2024 | 7     | 28  | 5773159633      | (367) 555-5533 |
| Leggett Street | 2024 | 7     | 28  | 8304650265      | (098) 555-1164 |
| Leggett Street | 2024 | 7     | 28  | 3592750733      | (770) 555-1861 |
| Leggett Street | 2024 | 7     | 28  | 4408372428      | (122) 555-4581 |
| Leggett Street | 2024 | 7     | 28  | 9878712108      | (826) 555-1652 |
| Leggett Street | 2024 | 7     | 28  | 7049073643      | (829) 555-5269 |
| Leggett Street | 2024 | 7     | 28  | 8496433585      | (389) 555-5198 |
| Leggett Street | 2024 | 7     | 28  | 1988161715      | (286) 555-6063 |
| Leggett Street | 2024 | 7     | 28  | 9586786673      | (338) 555-6650 |
+----------------+------+-------+-----+-----------------+----------------+
+------------+----------------+
|    name    |  phone_number  |
+------------+----------------+
| Sofia      | (130) 555-0289 | RED CALLER 1695452385 (Withdrawal At Leggett Street ATM) (SUSPICIOUS) SEAT 3B
| Jack       | (996) 555-8899 |RED RECIEVER
| Bruce      | (367) 555-5533 |GREEN CALLER 5773159633 (Withdrawal At Leggett Street ATM) (SUSPICIOUS) SEAT 4A
| Robin      | (375) 555-8161 |GREEN RECIEVER

-- Cross Reference Who Is On Flight, Made Call, And Paid, If Bruce Is On List That means He paid for himself and is thererfore innocent
SELECT p.name, a.amount
FROM people p
JOIN bank_accounts b ON p.id = b.person_id
JOIN atm_transactions a ON b.account_number = a.account_number
WHERE a.year = 2024 AND a.month = 7 AND a.day = 28
  AND a.atm_location = 'Leggett Street';
+---------+--------+
|  name   | amount |
+---------+--------+
| Bruce   | 50     | INNOCENT
| Kaelyn  | 10     |
| Diana   | 35     |
| Brooke  | 80     |
| Kenny   | 20     |
| Iman    | 20     |
| Luca    | 48     |
| Taylor  | 60     |
| Benista | 30     |
+---------+--------+
Therefore Sofia Is The Thief, Jack Is Accomplice

--Determine destination
SELECT city
FROM airports
WHERE id = 4;

4 = New york City
-- To Double Check Bakery Sec Longs
SELECT *
FROM bakery_security_logs
WHERE year = 2024 AND month = 7 AND day = 28
  AND hour = 10 AND minute BETWEEN 15 AND 25
  AND activity = 'exit'
ORDER BY minute;
+-----+------+-------+-----+------+--------+----------+---------------+
| id  | year | month | day | hour | minute | activity | license_plate |
+-----+------+-------+-----+------+--------+----------+---------------+
| 260 | 2024 | 7     | 28  | 10   | 16     | exit     | 5P2BI95       |
| 261 | 2024 | 7     | 28  | 10   | 18     | exit     | 94KL13X       |
| 262 | 2024 | 7     | 28  | 10   | 18     | exit     | 6P58WS2       |
| 263 | 2024 | 7     | 28  | 10   | 19     | exit     | 4328GD8       |
| 264 | 2024 | 7     | 28  | 10   | 20     | exit     | G412CB7       |
| 265 | 2024 | 7     | 28  | 10   | 21     | exit     | L93JTIZ       |
| 266 | 2024 | 7     | 28  | 10   | 23     | exit     | 322W7JE       |
| 267 | 2024 | 7     | 28  | 10   | 23     | exit     | 0NTHK55       |
+-----+------+-------+-----+------+--------+----------+---------------+

-- cross Red License Plates With Suspects
SELECT p.name, p.phone_number, p.license_plate
FROM people p
WHERE p.license_plate IN (
  '5P2BI95', '94KL13X', '6P58WS2', '4328GD8',
  'G412CB7', 'L93JTIZ', '322W7JE', '0NTHK55'
);
+---------+----------------+---------------+
|  name   |  phone_number  | license_plate |
+---------+----------------+---------------+
| Vanessa | (725) 555-4692 | 5P2BI95       |
| Barry   | (301) 555-4174 | 6P58WS2       |
| Iman    | (829) 555-5269 | L93JTIZ       |
| Sofia   | (130) 555-0289 | G412CB7       |
| Luca    | (389) 555-5198 | 4328GD8       |
| Diana   | (770) 555-1861 | 322W7JE       |
| Kelsey  | (499) 555-9472 | 0NTHK55       |
| Bruce   | (367) 555-5533 | 94KL13X       |
+---------+----------------+---------------+


After Reinvestigation BRUCE IS THE THIEF AND ROBIN PAID ONLINE

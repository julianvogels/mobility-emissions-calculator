/*
 * This file is part of Julian Vogels' Mobility Emissions Calculator.
 * 
 * Copyright (C) 2023  Julian Vogels;
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>
 *
 * Author: Julian Vogels
 * Created: 2023-08-06
 */

function AIRPORT_DISTANCE_TEST() {
  Logger.log(AIRPORT_DISTANCE("BER", "HKT"))
}

function AIRPORT_DISTANCE(origin_iata, destination_iata) {

  const corrected_origin_iata = origin_iata.toUpperCase()
  if (corrected_origin_iata.length != 3) {
    throw "Origin airport IATA code needs to have 3 characters"
  }

  const originAirport = airports[corrected_origin_iata];
  if (originAirport === undefined) {
    throw "Origin airport IATA code unknown"
  }

  const corrected_destination_iata = destination_iata.toUpperCase()
      if (corrected_origin_iata.length != 3) {
    throw "Destination airport IATA code needs to have 3 characters"
  }

  const destinationAirport = airports[corrected_destination_iata];
  if (destinationAirport === undefined) {
    throw "Destination airport IATA code unknown"
  }

  const distance = distanceBetweenEarthCoordinatesInKm(originAirport.latitude, originAirport.longitude, destinationAirport.latitude, destinationAirport.longitude);
  return distance;
}

function degreeToRadian(degree) {
  return degree * Math.PI / 180;
}

function distanceBetweenEarthCoordinatesInKm(lat1, lon1, lat2, lon2) {
    const earthRadiusInKm = 6371;

    const dLat = degreeToRadian(lat2 - lat1);
    const dLon = degreeToRadian(lon2 - lon1);

    lat1 = degreeToRadian(lat1);
    lat2 = degreeToRadian(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadiusInKm * c;
}

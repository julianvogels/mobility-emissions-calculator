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

function DISTANCE_TEST() {
    // Simple route
    Logger.log("=== Flight ===")
    Logger.log(ROUTE("BER", "HKG", "plane"));
    Logger.log("=== Train ===")
    Logger.log(ROUTE("Berlin", "Hamburg", "trainLongDistance"));
}

function DISTANCE(origin, destination, mode) {
    var cache = CacheService.getScriptCache();
    var cacheKey = origin + "_" + destination + "_" + mode;
    var cachedValue = cache.get(cacheKey);

    if (cachedValue) {
        return parseFloat(cachedValue);  // cached values are stored as strings, so parse it back
    }

    var directionMode;

    switch (mode) {
        case "trainLongDistance":
        case "trainLocal":
        case "publicTransportLocal":
            directionMode = "train"
            break;
        case "car":
        case "carMedium":
        case "carLarge":
        case "minibus":
        case "coach":
        case "truck18":
        case "truck40":
        case "motorbike":
        case "walking":
            directionMode = "car"
            break;
        case "flight":
        case "plane":
            directionMode = "flight"
            break;
        default:
            throw "Invalid transport mode";
    }

    var distance;
    switch (directionMode) {
        case "train":
            distance = GOOGLEMAPS_DISTANCE(origin, destination, directionMode)
        case "car":
        case "walking":
            distance = GOOGLEMAPS_DISTANCE(origin, destination, directionMode)
        case "flight":
            distance = AIRPORT_DISTANCE(origin, destination)
        default:
            break;
    }

    cache.put(cacheKey, distance.toString(), 21600); // 6 hours cache expiration time
    return distance;
}
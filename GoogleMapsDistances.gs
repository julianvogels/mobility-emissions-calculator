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

function GOOGLEMAPS_DISTANCE_TEST() {
    Logger.log(GOOGLEMAPS_DISTANCE("Berlin Hbf", "München Hbf", "train"));
}

function GOOGLEMAPS_DISTANCE(origin, destination, mode, via) {

    var mapObj = Maps.newDirectionFinder();
    mapObj.setOrigin(origin);
    if (via != undefined) {
        if (mode == "train") {
            throw "Google Maps Transit Anfragen unterstützen keine Zwischenstopps"
        }
        mapObj.addWaypoint(via)
    }
    mapObj.setDestination(destination);

    switch (mode) {
        case "train":
            mapObj.setMode(Maps.DirectionFinder.Mode.TRANSIT);
            break;
        case "car":
            mapObj.setMode(Maps.DirectionFinder.Mode.DRIVING);
            break;
        case "walking":
            mapObj.setMode(Maps.DirectionFinder.Mode.WALKING);
            break;
        default:
            throw "Unknown transport mode for a Google Maps request. Possible values are 'train', 'car', and 'walking'.";
            break;
    }

    var directions = mapObj.getDirections();
    if (directions.status != "OK") {
        throw "A route for transport mode '" + mode + "' could not be found between " + origin + " and " + destination + " on Google Maps: " + directions.error_message;
    }

    var route = directions["routes"][0];
    if (route === undefined) {
        throw "A route for transport mode '" + mode + "' could not be found between " + origin + " and " + destination + " on Google Maps";
    }
    var leg = route["legs"][0];
    var distance = leg["distance"]["value"];

    return distance / 1000.0;
}
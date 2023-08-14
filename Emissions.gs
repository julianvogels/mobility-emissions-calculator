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

// MARK: Data types
const TransportMode = {
    flight: "flight",
    trainLongDistance: "trainLongDistance",
    trainLocal: "trainLocal",
    publicTransportLocal: "publicTransportLocal",
    carMedium: "carMedium",
    carLarge: "carLarge",
    coach: "coach",
    minibus: "minibus",
    truck18: "truck18",
    truck40: "truck40"
}

const CarDrive = {
    petrol: "petrol",
    diesel: "diesel",
    electric: "electric",
    phev: "phev",
    naturalGas: "naturalGas",
    hydrogen: "hydrogen"
}

// MARK: Computed properties
function isFreightTransport(transportMode) {
    switch (transportMode) {
        case TransportMode.truck40:
        case TransportMode.truck18:
            return true;
        default:
            return false;
    }
}

// MARK: Google Sheets functions
function EMISSION_TEST() {
    Logger.log(EMISSION("flight", 701.23));
    Logger.log(EMISSION("carLarge", 701.23, "petrol"));
    Logger.log(EMISSION("truck40", 701.23, "diesel", 3));
    Logger.log(EMISSION("minibus", 100, "electric"));
}

function EMISSION(transportMode, distance, drive, weight) {
    return emissionForTransportModeAndDistance(transportMode, distance, drive, weight);
}
function EMISSIONFACTOR_VALUE(transportMode, distance, drive, weight) {
    return getEmissionFactorValue(transportMode, distance, drive, weight);
}
function EMISSIONFACTOR_NAME(transportMode, distance, drive, weight) {
    return getEmissionFactorName(transportMode, distance, drive, weight);
}
function EMISSIONFACTOR_DESCRIPTION(transportMode, distance, drive, weight) {
    return getEmissionFactorDescription(transportMode, distance, drive, weight);
}
function EMISSIONFACTOR_YEAR(transportMode, distance, drive, weight) {
    return getEmissionFactorYear(transportMode, distance, drive, weight);
}
function EMISSIONFACTOR_AUTHORITY(transportMode, distance, drive, weight) {
    return getEmissionFactorAuthority(transportMode, distance, drive, weight);
}
function EMISSIONFACTOR_REGION(transportMode, distance, drive, weight) {
    return getEmissionFactorRegion(transportMode, distance, drive, weight);
}
function EMISSIONFACTOR_SOURCEURL(transportMode, distance, drive, weight) {
    return getEmissionFactorSourceURL(transportMode, distance, drive, weight);
}

// MARK: Calculations
function emissionForTransportModeAndDistance(transportMode, distance, drive, weight) {

    if (transportMode == undefined) {
        throw "Invalid transport mode"
    }

    if (distance < 0) {
        throw "Invalid distance";
    }

    const emissionFactor = getEmissionFactor(transportMode, distance, drive, weight)

    if (isFreightTransport(transportMode)) {
        if (weight !== undefined) {
            if (weight < 0) {
                throw "Invalid weight";
            }
            // We don't adjust the value by -5% because Google Maps distances are planned distances, not actual distances.
            return distance * weight * emissionFactor.value
        }
    }

    return distance * emissionFactor.value
}

function getEmissionFactor(transportMode, distance, drive, weight) {

    switch (transportMode) {
        case TransportMode.flight:
            if (distance < 0) {
                throw "Flight emission factor requires distance value";
            }
            // Different factors based on distance
            if (distance < 700) {
                // domestic
                return Beis.FlightDomesticAverage;
            } else if (distance < 3700) {
                // shorthaul
                return Beis.FlightShorthaulAverage;
            } else if (distance >= 3700) {
                // longhaul
                return Beis.FlightLonghaulAverage;
            }
        case TransportMode.trainLongDistance:
            return Uba.TrainLongDistanceElectric;
        case TransportMode.trainLocal:
            return Uba.TrainLocalElectric;
        case TransportMode.publicTransportLocal:
            return Uba.PublicTransportLocal;
        case TransportMode.carMedium:
            switch (drive) {
                case "petrol":
                    return Uba.CarMediumPetrol
                case "diesel":
                    return Uba.CarMediumDiesel
                case "electric":
                    return Uba.CarMediumElectric
                case "phev":
                    return Uba.CarMediumPhev
                case "naturalGas":
                    return Uba.CarMediumCng
                case "hydrogen":
                    return Uba.CarMediumHydrogen
                default:
                    throw "An emission factor for this car drive is not available"
            }
        case TransportMode.carLarge:
            switch (drive) {
                case "petrol":
                    return Uba.CarLargePetrol
                case "diesel":
                    return Uba.CarLargeDiesel
                case "electric":
                    return Uba.CarLargeElectric
                case "phev":
                    return Uba.CarLargePhev
                case "naturalGas":
                    return Uba.CarLargeCng
                case "hydrogen":
                    return Uba.CarLargeHydrogen
                default:
                    throw "An emission factor for this car drive is not available"
            }
        case TransportMode.coach:
            return Uba.Coach;
        case TransportMode.minibus: 
            switch (drive) {
                case "diesel":
                  return Cgt.MinibusDiesel
                case "naturalGas":
                  return Cgt.MinibusLpg
                case "electric":
                case "petrol":
                case "phev":
                case "hydrogen":
                default:
                    throw "An emission factor for this minibus drive is not available"
            }
        case TransportMode.truck40:
            if (weight !== undefined) {
                // We don't adjust the value by -5% because Google Maps distances are planned distances, not actual distances.
                return Glec.ArticTruck40_44
            } else {
                return Uba.HeavyDutyVehicle
            }
        case TransportMode.truck18:
            if (weight !== undefined) {
                // We don't adjust the value by -5% because Google Maps distances are planned distances, not actual distances.
                return Glec.RigidTruck12_20
            } else {
                return Uba.HeavyDutyVehicle
            }
        default:
            throw "An emission factor for this transport mode is not available";
    }
}

function getEmissionFactorValue(transportMode, distance, drive, weight) {
    const emissionFactor = getEmissionFactor(transportMode, distance, drive, weight)
    return emissionFactor.value
}

function getEmissionFactorName(transportMode, distance, drive, weight) {
    const emissionFactor = getEmissionFactor(transportMode, distance, drive, weight)
    return emissionFactor.name
}

function getEmissionFactorDescription(transportMode, distance, drive, weight) {
    const emissionFactor = getEmissionFactor(transportMode, distance, drive, weight)
    return emissionFactor.description
}

function getEmissionFactorYear(transportMode, distance, drive, weight) {
    const emissionFactor = getEmissionFactor(transportMode, distance, drive, weight)
    return emissionFactor.year
}

function getEmissionFactorAuthority(transportMode, distance, drive, weight) {
    const emissionFactor = getEmissionFactor(transportMode, distance, drive, weight)
    return emissionFactor.authority
}

function getEmissionFactorRegion(transportMode, distance, drive, weight) {
    const emissionFactor = getEmissionFactor(transportMode, distance, drive, weight)
    return emissionFactor.region
}

function getEmissionFactorSourceURL(transportMode, distance, drive, weight) {
    const emissionFactor = getEmissionFactor(transportMode, distance, drive, weight)
    return emissionFactor.source
}

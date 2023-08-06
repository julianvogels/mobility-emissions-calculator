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

// MARK: - Emission Factor dataset

// MARK: CGT
var Cgt = {

    // Source: https://germany.ig-tools.com/admin/conversion_factors
    // Year:   2021

    // Air freight
    "FreightAir": {
        name: "FreightAir",
        value: 4.76719,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Air freight",
        region: "DE"
    },
    // Average LPG car (km)
    "CarLpg": {
        name: "CarLpg",
        value: 0.19754,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Average LPG car (km)",
        region: "DE"
    },
    // Average diesel car (km)
    "CarDiesel": {
        name: "CarDiesel",
        value: 0.16844,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Average diesel car (km)",
        region: "DE"
    },
    // Average local bus
    "BusPublic": {
        name: "BusPublic",
        value: 0.10312,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Average local bus",
        region: "DE"
    },
    // London bus (km)
    "BusUrban": {
        name: "BusUrban",
        value: 0.07856,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "London bus (km)",
        region: "DE"
    },
    // Average petrol car (km)
    "CarPetrol": {
        name: "CarPetrol",
        value: 0.1743,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Average petrol car (km)",
        region: "DE"
    },
    // Average petrol hybrid car (km)
    "CarHybrid": {
        name: "CarHybrid",
        value: 0.11433,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Average petrol hybrid car (km)",
        region: "DE"
    },
    // Average petrol motorbike
    "MotorbikePetrol": {
        name: "MotorbikePetrol",
        value: 0.11337,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Average petrol motorbike",
        region: "DE"
    },
    // Black cab
    "CabBlack": {
        name: "CabBlack",
        value: 0.31191,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Black cab",
        region: "DE"
    },
    // Buggies
    "Buggies": {
        name: "Buggies",
        value: 0.13513,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Buggies",
        region: "DE"
    },
    // Bus interurban
    "BusInterurban": {
        name: "BusInterurban",
        value: 0.1195,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Bus interurban",
        region: "DE"
    },
    // Container average (tkm)
    "FreightContainer": {
        name: "FreightContainer",
        value: 0.01614,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Container average (tkm)",
        region: "DE"
    },
    // Dedicated coach (veh km)
    "Coach": {
        name: "Coach",
        value: 0.6744,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Dedicated coach (veh km)",
        region: "DE"
    },
    // Diesel minibus (vkm)
    "MinibusDiesel": {
        name: "MinibusDiesel",
        value: 0.2471,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Diesel minibus (vkm)",
        region: "DE"
    },
    // Diesel van (up to 3.5 tonnes)
    "VanDiesel": {
        name: "VanDiesel",
        value: 0.2471,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Diesel van (up to 3.5 tonnes)",
        region: "DE"
    },
    // Domestic air freight
    "FreightAirDomestic": {
        name: "FreightAirDomestic",
        value: 4.76719,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Domestic air freight",
        region: "DE"
    },
    // Domestic flight
    "FlightDomesticAverage": {
        name: "FlightDomesticAverage",
        value: 0.2443,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Domestic flight",
        region: "DE"
    },
    // Eurostar
    "RailEurostar": {
        name: "RailEurostar",
        value: 0.00497,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Eurostar",
        region: "DE"
    },
    // Ferry (pkm) (average all passengers)
    "Ferry": {
        name: "Ferry",
        value: 0.11286,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Ferry (pkm) (average all passengers)",
        region: "DE"
    },
    // Ferry freight (tkm)
    "FreightFerry": {
        name: "FreightFerry",
        value: 0.37668,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Ferry freight (tkm)",
        region: "DE"
    },
    // Freight
    "Freight": {
        name: "Freight",
        value: 0.37668,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Freight",
        region: "DE"
    },
    // Friends/rent night
    "FriendsAccomm": {
        name: "FriendsAccomm",
        value: 0.0,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Friends/rent night",
        region: "DE"
    },
    // Heavy diesel articulated
    "LorryArticulatedDieselHeavy": {
        name: "LorryArticulatedDieselHeavy",
        value: 0.92367,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Heavy diesel articulated",
        region: "DE"
    },
    // Heavy diesel rigid
    "LorryRigidDieselHeavy": {
        name: "LorryRigidDieselHeavy",
        value: 0.96432,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Heavy diesel rigid",
        region: "DE"
    },
    // Human power
    "Human": {
        name: "Human",
        value: 0.0,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Human power",
        region: "DE"
    },
    // Hybrid cab
    "CabHybrid": {
        name: "CabHybrid",
        value: 0.11433,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Hybrid cab",
        region: "DE"
    },
    // LPG minibus (vkm)
    "MinibusLpg": {
        name: "MinibusLpg",
        value: 0.27175,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "LPG minibus (vkm)",
        region: "DE"
    },
    // LPG van (up to 3.5 tonnes)
    "VanLpg": {
        name: "VanLpg",
        value: 0.27175,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "LPG van (up to 3.5 tonnes)",
        region: "DE"
    },
    // Large jet (vkm)
    "JetLarge": {
        name: "JetLarge",
        value: 7.03,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Large jet (vkm)",
        region: "DE"
    },
    // Light diesel articulated
    "LorryArticulatedDieselLight": {
        name: "LorryArticulatedDieselLight",
        value: 0.77574,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Light diesel articulated",
        region: "DE"
    },
    // Light diesel rigid
    "LorryRigidDieselLight": {
        name: "LorryRigidDieselLight",
        value: 0.48251,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Light diesel rigid",
        region: "DE"
    },
    // Longhaul air freight
    "FreightAirLonghaul": {
        name: "FreightAirLonghaul",
        value: 1.13382,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Longhaul air freight",
        region: "DE"
    },
    // Longhaul average
    "FlightLonghaulAverage": {
        name: "FlightLonghaulAverage",
        value: 0.19085,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Longhaul average",
        region: "DE"
    },
    // Longhaul business
    "FlightLonghaulBusiness": {
        name: "FlightLonghaulBusiness",
        value: 0.42385,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Longhaul business",
        region: "DE"
    },
    // Longhaul economy
    "FlightLonghaulEconomy": {
        name: "FlightLonghaulEconomy",
        value: 0.14615,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Longhaul economy",
        region: "DE"
    },
    // Longhaul first class
    "FlightLonghaulFirstClass": {
        name: "FlightLonghaulFirstClass",
        value: 0.58462,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Longhaul first class",
        region: "DE"
    },
    // Longhaul premium economy
    "FlightLonghaulPremium": {
        name: "FlightLonghaulPremium",
        value: 0.23385,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Longhaul premium economy",
        region: "DE"
    },
    // MPV diesel (vkm)
    "MpvDiesel": {
        name: "MpvDiesel",
        value: 0.17627,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "MPV diesel (vkm)",
        region: "DE"
    },
    // MPV petrol (vkm)
    "MpvPetrol": {
        name: "MpvPetrol",
        value: 0.19351,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "MPV petrol (vkm)",
        region: "DE"
    },
    // Medium diesel rigid
    "LorryRigidDieselMedium": {
        name: "LorryRigidDieselMedium",
        value: 0.58928,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Medium diesel rigid",
        region: "DE"
    },
    // National rail (pkm)
    "RailNational": {
        name: "RailNational",
        value: 0.03694,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "National rail (pkm)",
        region: "DE"
    },
    // Petrol van (up to 3.5 tonnes)
    "VanPetrol": {
        name: "VanPetrol",
        value: 0.21962,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Petrol van (up to 3.5 tonnes)",
        region: "DE"
    },
    // Rail freight (tkm)
    "FreightRail": {
        name: "FreightRail",
        value: 0.02556,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Rail freight (tkm)",
        region: "DE"
    },
    // Regular taxi
    "Taxi": {
        name: "Taxi",
        value: 0.20369,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Regular taxi",
        region: "DE"
    },
    // Shorthaul air freight
    "FreightAirShorthaul": {
        name: "FreightAirShorthaul",
        value: 2.20946,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Shorthaul air freight",
        region: "DE"
    },
    // Shorthaul average
    "FlightShorthaulAverage": {
        name: "FlightShorthaulAverage",
        value: 0.15553,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Shorthaul average",
        region: "DE"
    },
    // Shorthaul business
    "FlightShorthaulBusiness": {
        name: "FlightShorthaulBusiness",
        value: 0.22947,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Shorthaul business",
        region: "DE"
    },
    // Shorthaul economy
    "FlightShorthaulEconomy": {
        name: "FlightShorthaulEconomy",
        value: 0.15298,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Shorthaul economy",
        region: "DE"
    },

    // Shorthaul premium
    "FlightShorthaulPremium": {
        name: "FlightShorthaulPremium",
        value: 0.22947,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Shorthaul premium",
        region: "DE"
    },
    // Small jet (vkm)
    "JetSmall": {
        name: "JetSmall",
        value: 2.85,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Small jet (vkm)",
        region: "DE"
    },
    // Tube (km)
    "Tube": {
        name: "Tube",
        value: 0.0275,
        year: 2021,
        authority: "CGT",
        source: "https://germany.ig-tools.com/admin/conversion_factors",
        description: "Tube (km)",
        region: "DE"
    },
}

// MARK: UBA
var Uba = {
    // Source: https://www.umweltbundesamt.de/themen/verkehr-laerm/emissionsdaten
    // Year:   2020

    // MARK: Public transport

    // Eisenbahn, Fernverkehr (km)
    "TrainLongDistanceElectric": {
        name: "TrainLongDistanceElectric",
        value: 0.00948,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={A4FFA0CD-2550-4435-BBDE-00C6F1A0B22F}",
        description: "Emission intensity of electric long-distance passenger train. Direct electricity consumption and upstream LCA activity is included.",
        region: "DE",
        climatiqUuid: "6e299b7f-e1ba-4821-8f8e-ac40ea2b4460",
        climatiqActivityId: "passenger_train-route_type_long_distance-fuel_source_electricity"
    },
    // Eisenbahn, Nahverkehr (km)
    "TrainLocalElectric": {
        name: "TrainLocalElectric",
        value: 0.0546,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={F9C83447-3994-4B54-B7D7-A5E6B81C725E}",
        description: "Emission intensity of electric local passenger train. Direct electricity consumption and upstream LCA activity is included.",
        region: "DE",
        climatiqUuid: "4acb5b4e-5205-443e-8505-128153bff2ca",
        climatiqActivityId: "passenger_train-route_type_local-fuel_source_electricity"
    },
    // Linienbus, Fernverkehr (km)
    "BusNational": {
        name: "BusNational",
        value: 0.027,
        year: 2020,
        authority: "UBA",
        source: "https://www.umweltbundesamt.de/themen/verkehr-laerm/emissionsdaten",
        description: "Linienbus, Fernverkehr (km)",
        region: "DE"
    },
    // Linienbus, Nahverkehr (km)
    "BusLocal": {
        name: "BusLocal",
        value: 0.111,
        year: 2020,
        authority: "UBA",
        source: "https://www.umweltbundesamt.de/themen/verkehr-laerm/emissionsdaten",
        description: "Linienbus, Nahverkehr (km)",
        region: "DE"
    },

    "BusNationalDiesel": {
        name: "BusNationalDiesel",
        value: 0.0434,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={DF3D153D-827F-43D8-B60A-110ECD41B75B}",
        description: "Emission intensity of average diesel bus. Upstream and fuel combustion LCA activity is included.",
        region: "DE"
    },

    "BusLocalDiesel": {
        name: "BusLocalDiesel",
        value: 0.0558,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={8E1FE8FB-8B3B-42C9-96AA-B2A470B5ACC4}",
        description: "Emission intensity of diesel urban bus. Upstream and fuel combustion LCA activity is included.",
        region: "DE"
    },

    "Tramway": {
        name: "Tramway",
        value: 0.0388,
        year: 2000,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={CC0E4CEC-80DA-11D4-9E81-0080C8426C9A}",
        description: "Emission intensity of urban tramway. Upstream and fuel combustion LCA activity is included.",
        region: "CZ"
    },


    // Straßen-, Stadt- und U-Bahn (km)
    // Alternative (aber von 2008): https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={5E40F1DE-EF5E-A866-6076-2003D582DFAF}
    "PublicTransportLocal": {
        name: "PublicTransportLocal",
        value: 0.075,
        year: 2020,
        authority: "UBA",
        source: "https://www.umweltbundesamt.de/themen/verkehr-laerm/emissionsdaten",
        description: "Straßen-, Stadt- und U-Bahn (km)",
        region: "DE"
    },


    // Sonstige Reisebusse (km)
    "CoachAverage": {
        name: "CoachAverage",
        value: 0.036,
        year: 2020,
        authority: "UBA",
        source: "https://www.umweltbundesamt.de/themen/verkehr-laerm/emissionsdaten",
        description: "Sonstige Reisebusse (km)",
        region: "DE"
    },
    // MARK: Automobile

    // PKW (km)
    "CarAverage": {
        name: "CarAverage",
        value: 0.152,
        year: 2020,
        authority: "UBA",
        source: "https://www.umweltbundesamt.de/themen/verkehr-laerm/emissionsdaten",
        description: "PKW (km)",
        region: "DE"
    },

    // PKW petrol large(km)
    // Emission intensity of petrol passenger car medium. Emissions from fuel combustion only.
    "CarMediumPetrol": {
        name: "CarMediumPetrol",
        value: 0.147,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={56740D43-276B-491E-8B91-A7C696112038}",
        description: "Emission intensity of petrol passenger car medium. Emissions from fuel combustion only.",
        region: "DE",
        climatiqUuid: "9e3e1d32-9158-44fa-967b-01dd4eded999",
        climatiqActivityId: "passenger_vehicle-vehicle_type_car-fuel_source_bio_petrol-distance_na-engine_size_medium"
    },

    // PKW petrol large (km)
    // Emission intensity of petrol passenger car large. Emissions from fuel combustion only.
    "CarLargePetrol": {
        name: "CarLargePetrol",
        value: 0.184,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={4BF3BE4E-88D1-4FDD-B73D-01E16F9F9DE3}",
        description: "Emission intensity of petrol passenger car large. Emissions from fuel combustion only.",
        region: "DE",
        climatiqUuid: "5507a7c8-7eff-4334-a657-0ce28f0dcca3",
        climatiqActivityId: "passenger_vehicle-vehicle_type_car-fuel_source_petrol-distance_na-engine_size_large"
    },


    // PHEV medium (km)
    // Emission intensity of petrol passenger car large. Emissions from fuel combustion only.
    "CarMediumPhev": {
        name: "CarMediumPhev",
        value: 0.114,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={5CFB7AAC-ABEC-4DC7-A738-BE2433A6F8BF}",
        description: "Emission intensity of petrol PHEV passenger car medium. Emissions from fuel combustion only.",
        region: "DE",
        climatiqUuid: "d6eb9b6a-9e63-4362-8002-0c37f62b4228",
        climatiqActivityId: "passenger_vehicle-vehicle_type_car-fuel_source_petrol_phev-distance_na-engine_size_medium"
    },


    // PHEV large (km)
    // Emission intensity of petrol passenger car large. Emissions from fuel combustion only.
    "CarLargePhev": {
        name: "CarLargePhev",
        value: 0.155,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={989AAA73-FD0D-403E-AA7D-AC8D83783A55}",
        description: "Emission intensity of petrol PHEV passenger car large. Emissions from fuel combustion only.",
        region: "DE",
        climatiqUuid: "8449ff1b-2b62-468d-96e5-5646ce4782be",
        climatiqActivityId: "passenger_vehicle-vehicle_type_car-fuel_source_petrol_phev-distance_na-engine_size_large"
    },

    // Electric vehicle (km)
    // Emission intensity of electric passenger car medium. Direct electricity consumption and upstream LCA activity is included.
    // Year: 2020
    "CarMediumElectric": {
        name: "CarMediumElectric",
        value: 0.0621,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={D8D60864-21D9-42A2-9E56-2C1AD4D9CBC5}",
        description: "Emission intensity of electric passenger car medium. Direct electricity consumption and upstream LCA activity is included.",
        region: "DE",
        climatiqUuid: "e74c6276-e65a-458e-b8b5-908ab8cb519c",
        climatiqActivityId: "passenger_vehicle-vehicle_type_car-fuel_source_bev-distance_na-engine_size_na"
    },

    // Car Hydrogen medium (km)
    // Emission intensity of hydrogen passenger car medium. Upstream and fuel combustion LCA activity is included.
    "CarMediumHydrogen": {
        name: "CarMediumHydrogen",
        value: 0.106,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={3234C6FC-8626-4B4C-8B04-C3A2FEF81D2D}",
        description: "Emission intensity of hydrogen passenger car medium. Upstream and fuel combustion LCA activity is included.",
        region: "DE",
        climatiqUuid: "018a7fd6-92d4-4457-b255-c27e9d10f636",
        climatiqActivityId: "passenger_vehicle-vehicle_type_car-fuel_source_fcev-distance_na-engine_size_na"
    },

    // Car Hydrogen medium (km)
    // Emission intensity of hydrogen passenger car large. Upstream and fuel combustion LCA activity is included.
    "CarLargeHydrogen": {
        name: "CarLargeHydrogen",
        value: 0.134,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={507DB5C1-12B4-49F5-B73A-538CAC477EAB}",
        description: "Emission intensity of hydrogen passenger car large. Upstream and fuel combustion LCA activity is included.",
        region: "DE",
        climatiqUuid: "5b72beb1-dff5-4b1a-811f-1590d8105abb",
        climatiqActivityId: "passenger_vehicle-vehicle_type_car-fuel_source_fcev-distance_na-engine_size_large"
    },

    // Car Diesel medium (km)
    // Emission intensity of diesel passenger car medium. Upstream and fuel combustion LCA activity is included.
    "CarMediumDiesel": {
        name: "CarMediumDiesel",
        value: 0.147,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={8B2BD122-F6B8-432F-A348-AE1D3FF80772}",
        description: "Emission intensity of diesel passenger car medium. Upstream and fuel combustion LCA activity is included.",
        region: "DE",
        climatiqUuid: "12c5a0eb-dbff-40b7-8e72-daf2ab7c3b55",
        climatiqActivityId: "passenger_vehicle-vehicle_type_car-fuel_source_diesel-distance_na-engine_size_medium"
    },

    // Car Diesel large (km)
    // Emission intensity of diesel passenger car large. Upstream and fuel combustion LCA activity is included.
    "CarLargeDiesel": {
        name: "CarLargeDiesel",
        value: 0.221,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={E1DD63C6-D2F5-4BA3-9EB5-F1F0CB0BA734}",
        description: "Emission intensity of diesel passenger car large. Upstream and fuel combustion LCA activity is included.",
        region: "DE",
        climatiqUuid: "29bcd53b-d82b-4de0-ab25-82b494e81b2e",
        climatiqActivityId: "passenger_vehicle-vehicle_type_car-fuel_source_diesel-distance_na-engine_size_large"
    },

    // Car CNG medium (km)
    // Emission intensity of CNG passenger car small. Emissions from fuel combustion only.
    "CarSmallCng": {
        name: "CarSmallCng",
        value: 0.185,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={FC94F44C-AFAE-4E61-B27B-DD4AFA817122}",
        description: "Emission intensity of CNG passenger car small. Emissions from fuel combustion only.",
        region: "DE",
        climatiqUuid: "892069c4-0d47-4a33-afbb-359058df270e",
        climatiqActivityId: "passenger_vehicle-vehicle_type_car-fuel_source_cng-distance_na-engine_size_small"
    },

    // Car CNG large (km)
    // Emission intensity of CNG passenger car medium. Emissions from fuel combustion only.
    // Note: Not available via Climatiq.
    "CarMediumCng": {
        name: "CarMediumCng",
        value: 0.21,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={99B03BC3-8F22-4A26-9DC3-ADE662A254F3}",
        description: "Emission intensity of CNG passenger car medium. Emissions from fuel combustion only.",
        region: "DE"
    },

    // Car CNG large (km)
    // Emission intensity of CNG passenger car large. Emissions from fuel combustion only.
    "CarLargeCng": {
        name: "CarLargeCng",
        value: 0.215,
        year: 2020,
        authority: "UBA",
        source: "https://www.probas.umweltbundesamt.de/php/prozessdetails.php?id={1EF4800C-61E6-49DA-9EEF-82502633FF6E}",
        description: "Emission intensity of CNG passenger car large. Emissions from fuel combustion only.",
        region: "DE",
        climatiqUuid: "f5eaa353-340a-41fe-82b7-3a33cb8a3dd6",
        climatiqActivityId: "passenger_vehicle-vehicle_type_car-fuel_source_cng-distance_na-engine_size_large"
    },


    // MARK: Flight

    // Flugzeug, Inland (km)
    "FlightDomesticAverage": {
        name: "FlightDomesticAverage",
        value: 0.284,
        year: 2020,
        authority: "UBA",
        source: "https://www.umweltbundesamt.de/themen/verkehr-laerm/emissionsdaten",
        description: "Flugzeug, Inland (km)",
        region: "DE"
    },

    // MARK: Human

    "Human": {
        name: "Human",
        value: 0.0,
        year: 2022,
        authority: "UBA",
        source: "https://en.wikipedia.org/wiki/Walking",
        description: "Human power",
        region: "DE"
    },


    // MARK: Two-wheeler

    // Pedelec
    "Pedelec": {
        name: "Pedelec",
        value: 0.00564,
        year: 2011,
        authority: "UBA",
        source: "https://www.umweltbundesamt.de/sites/default/files/medien/378/publikationen/hgp_electric_bikes_get_things_rolling.pdf",
        description: "Pedelec electric energy consumption per km.",
        region: "DE"
    },

    "MotorBike": {
        name: "MotorBike",
        value: 0.103127,
        year: 2020,
        authority: "UBA",
        source: "https://www.hbefa.net/d/index.html",
        description: "Emission intensity of a motorbike. Received from HBEFA database of the Umweltbundesamt.",
        region: "DE"
    },

    "Coach": {
        name: "Coach",
        value: 0.715515,
        year: 2020,
        authority: "UBA",
        source: "https://www.hbefa.net/d/index.html",
        description: "Emission intensity of a coach. Received from HBEFA database of the Umweltbundesamt.",
        region: "DE"
    },

    "LightDutyVehicle": {
        name: "LightDutyVehicle",
        value: 0.244172,
        year: 2020,
        authority: "UBA",
        source: "https://www.hbefa.net/d/index.html",
        description: "Emission intensity of a light duty vehicle (Schweres Nutzfahrzeug) < 3.5t. Received from HBEFA database of the Umweltbundesamt.",
        region: "DE"
    },

    "HeavyDutyVehicle": {
        name: "HeavyDutyVehicle",
        value: 0.787813,
        year: 2020,
        authority: "UBA",
        source: "https://www.hbefa.net/d/index.html",
        description: "Emission intensity of a heavy duty vehicle (Schweres Nutzfahrzeug). Received from HBEFA database of the Umweltbundesamt.",
        region: "DE"
    }
}

// MARK: BEIS
var Beis = {

    // MARK: Road
    "Taxi": {
        name: "Taxi",
        value: 0.20826,
        year: 2022,
        authority: "BEIS",
        source: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022",
        description: "Emission intensity of business travel by land. Land-based conversion factors should be used for travel for business purposes in assets not owned or directly operated by a business. This includes mileage for business purposes in cars owned by employees/public transport/hire cars/and so on. Retrieved from the Conversion Factors 2022: flat file published by the UK BEIS/Defra at the source URL.",
        region: "UK",
        climatiqUuid: "1a635ed8-5954-407e-a2db-0e1b0c321722",
        climatiqActivityId: "passenger_vehicle-vehicle_type_business_travel_taxi-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na"
    },

    // MARK: Sea
    "FerryByFoot": {
        name: "FerryByFoot",
        value: 0.01874,
        year: 2022,
        authority: "BEIS",
        source: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022",
        description: "Emission intensity per passenger without a vehicle on a ferry (fuel combustion only). Retrieved from the Conversion Factors 2022: flat file published by the UK BEIS/Defra at the source URL.",
        region: "UK",
        climatiqUuid: "d8fe5455-d0e6-4278-afb9-18007eb32114",
        climatiqActivityId: "passenger_ferry-route_type_foot_passenger-fuel_source_na"
    },

    "FerryByCar": {
        name: "FerryByCar",
        value: 0.12952,
        year: 2022,
        authority: "BEIS",
        source: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022",
        description: "Emission intensity per passenger with a car on a ferry (fuel combustion only). Retrieved from the Conversion Factors 2022: flat file published by the UK BEIS/Defra at the source URL.",
        region: "UK",
        climatiqUuid: "92a8d0ea-31f1-4855-b148-c2af00b7a4c5",
        climatiqActivityId: "passenger_ferry-route_type_car_passenger-fuel_source_na"
    },

    "FerryAverage": {
        name: "FerryAverage",
        value: 0.11286,
        year: 2022,
        authority: "BEIS",
        source: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022",
        description: "Emission intensity per passenger on a ferry (fuel combustion only) across all passenger types. Retrieved from the Conversion Factors 2022: flat file published by the UK BEIS/Defra at the source URL.",
        region: "UK",
        climatiqUuid: "3c9e1f6b-f97e-4f90-a010-40d412bc8fae",
        climatiqActivityId: "passenger_ferry-route_type_na-fuel_source_na"
    },

    // MARK: Flight
    "FlightDomesticAverage": {
        name: "FlightDomesticAverage",
        value: 0.24587,
        year: 2022,
        authority: "BEIS",
        source: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022",
        description: "Emission intensity of domestic flight (within UK) for average passenger including fuel combustion and radiative forcing (RF) effect reflecting impact of contrails and high-altitude release of GHGs but not upstream fuel emissions. 8% distance uplift applied for indirect nature of flights. Retrieved from the Conversion Factors 2022: flat file published by the UK BEIS/Defra at the source URL.",
        region: "UK",
        climatiqUuid: "f7883ca3-72d7-4713-8d99-d82b486c4b71",
        climatiqActivityId: "passenger_flight-route_type_domestic-aircraft_type_na-distance_na-class_na-rf_included-distance_uplift_included"
    },

    "FlightShorthaulEconomy": {
        name: "FlightShorthaulEconomy",
        value: 0.15102,
        year: 2022,
        authority: "BEIS",
        source: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022",
        description: "Emission intensity of short-haul (<3700) international economy class flights to/from the UK including fuel combustion and radiative forcing (RF) effect reflecting impact of contrails and high-altitude release of GHGs but not upstream fuel emissions. 8% distance uplift applied for indirect nature of flights. Retrieved from the Conversion Factors 2022: flat file published by the UK BEIS/Defra at the source URL.",
        region: "UK",
        climatiqUuid: "ddb5b508-bde8-46a2-b7f2-f8ef3474d8d5",
        climatiqActivityId: "passenger_flight-route_type_international-aircraft_type_na-distance_short_haul_lt_3700km-class_economy-rf_included-distance_uplift_included"
    },

    "FlightShorthaulBusinessClass": {
        name: "FlightShorthaulBusinessClass",
        value: 0.22652,
        year: 2022,
        authority: "BEIS",
        source: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022",
        description: "Emission intensity of short-haul (<3700) international business class flights to/from the UK including fuel combustion and radiative forcing (RF) effect reflecting impact of contrails and high-altitude release of GHGs but not upstream fuel emissions. 8% distance uplift applied for indirect nature of flights. Retrieved from the Conversion Factors 2022: flat file published by the UK BEIS/Defra at the source URL.",
        region: "UK",
        climatiqUuid: "14b26a97-8cf6-440e-819c-1a6849040c3c",
        climatiqActivityId: "passenger_flight-route_type_international-aircraft_type_na-distance_short_haul_lt_3700km-class_business-rf_included-distance_uplift_included"
    },

    "FlightShorthaulAverage": {
        name: "FlightShorthaulAverage",
        value: 0.15353,
        year: 2022,
        authority: "BEIS",
        source: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022",
        description: "Emission intensity of short-haul (<3700) international first class flights to/from the UK including fuel combustion and radiative forcing (RF) effect reflecting impact of contrails and high-altitude release of GHGs but not upstream fuel emissions. 8% distance uplift applied for indirect nature of flights. Retrieved from the Conversion Factors 2022: flat file published by the UK BEIS/Defra at the source URL.",
        region: "UK",
        climatiqUuid: "5fbc535b-2421-4cbc-aeb7-f8560d49ebd1",
        climatiqActivityId: "passenger_flight-route_type_international-aircraft_type_na-distance_short_haul_lt_3700km-class_first-rf_included-distance_uplift_included"
    },

    "FlightLonghaulEconomy": {
        name: "FlightLonghaulEconomy",
        value: 0.14787,
        year: 2022,
        authority: "BEIS",
        source: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022",
        description: "Emission intensity of long-haul (>3700) international economy class flights to/from the UK including fuel combustion and radiative forcing (RF) effect reflecting impact of contrails and high-altitude release of GHGs but not upstream fuel emissions. 8% distance uplift applied for indirect nature of flights. Retrieved from the Conversion Factors 2022: flat file published by the UK BEIS/Defra at the source URL.",
        region: "UK",
        climatiqUuid: "5020ddf3-fdb9-42d9-957c-c88f488f12ba",
        climatiqActivityId: "passenger_flight-route_type_international-aircraft_type_na-distance_long_haul_gt_3700km-class_economy-rf_included-distance_uplift_included"
    },

    "FlightLonghaulPremiumEconomy": {
        name: "FlightLonghaulPremiumEconomy",
        value: 0.23659,
        year: 2022,
        authority: "BEIS",
        source: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022",
        description: "Emission intensity of long-haul (>3700) international premium economy class flights to/from the UK including fuel combustion and radiative forcing (RF) effect reflecting impact of contrails and high-altitude release of GHGs but not upstream fuel emissions. 8% distance uplift applied for indirect nature of flights. Retrieved from the Conversion Factors 2022: flat file published by the UK BEIS/Defra at the source URL.",
        region: "UK",
        climatiqUuid: "ac857738-5ca1-4f56-ab5c-5d211cf28166",
        climatiqActivityId: "passenger_flight-route_type_international-aircraft_type_na-distance_long_haul_gt_3700km-class_premium_economy-rf_included-distance_uplift_included "
    },

    "FlightLonghaulBusinessClass": {
        name: "FlightLonghaulBusinessClass",
        value: 0.42882,
        year: 2022,
        authority: "BEIS",
        source: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022",
        description: "Emission intensity of long-haul (>3700) international business class flights to/from the UK including fuel combustion and radiative forcing (RF) effect reflecting impact of contrails and high-altitude release of GHGs but not upstream fuel emissions. 8% distance uplift applied for indirect nature of flights. Retrieved from the Conversion Factors 2022: flat file published by the UK BEIS/Defra at the source URL.",
        region: "UK",
        climatiqUuid: "9a8852a4-a772-4149-8e4d-6321fc3e28b4",
        climatiqActivityId: "passenger_flight-route_type_international-aircraft_type_na-distance_long_haul_gt_3700km-class_business-rf_included-distance_uplift_included"
    },

    "FlightLonghaulFirstClass": {
        name: "FlightLonghaulFirstClass",
        value: 0.59147,
        year: 2022,
        authority: "BEIS",
        source: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022",
        description: "Emission intensity of long-haul (>3700) international first class flights to/from the UK including fuel combustion and radiative forcing (RF) effect reflecting impact of contrails and high-altitude release of GHGs but not upstream fuel emissions. 8% distance uplift applied for indirect nature of flights. Retrieved from the Conversion Factors 2022: flat file published by the UK BEIS/Defra at the source URL.",
        region: "UK",
        climatiqUuid: "6586587c-d220-45df-af44-45b99f16ad46",
        climatiqActivityId: "passenger_flight-route_type_international-aircraft_type_na-distance_long_haul_gt_3700km-class_first-rf_included-distance_uplift_included"
    },

    "FlightLonghaulAverage": {
        name: "FlightLonghaulAverage",
        value: 0.19309,
        year: 2022,
        authority: "BEIS",
        source: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022",
        description: "Emission intensity of long-haul (>3700) international flights to/from the UK including contrails and 8% distance uplift. Direct fuel combustion only. Retrieved from the Conversion Factors 2022: flat file published by the UK BEIS/Defra at the source URL.",
        region: "UK",
        climatiqUuid: "73a326c8-23de-4eaa-8aa1-3cb94a6ed336",
        climatiqActivityId: "passenger_flight-route_type_international-aircraft_type_na-distance_long_haul_gt_3700km-class_na-rf_included-distance_uplift_included"
    },
}

var GreenDelta = {
    "MotorScooterTwoStroke": {
        name: "MotorScooterTwoStroke",
        value: 0.09067,
        year: 2020,
        authority: "greenDelta",
        source: "https://www.openlca.org/wp-content/uploads/2021/10/Report_Scooters_in_Berlin.pdf",
        description: "Emission intensity of a two-stroke motor scooter, including upstream emissions from manufacturing and transportation, emissions from use (burning fuel), and downstream emissions from dismanteling. Retrieved from a study \"Comparison of the Life Cycle of different scooters used in Berlin\" by Thaís Veiga Barreiros / GreenDelta GmbH.",
        region: "DE"
    },

    "MotorScooterFourStroke": {
        name: "MotorScooterFourStroke",
        value: 0.07298,
        year: 2020,
        authority: "greenDelta",
        source: "https://www.openlca.org/wp-content/uploads/2021/10/Report_Scooters_in_Berlin.pdf",
        description: "Emission intensity of a four-stroke motor scooter, including upstream emissions from manufacturing and transportation, emissions from use (burning fuel), and downstream emissions from dismanteling. Retrieved from a study \"Comparison of the Life Cycle of different scooters used in Berlin\" by Thaís Veiga Barreiros / GreenDelta GmbH.",
        region: "DE"
    },

    "MotorScooterElectrical": {
        name: "MotorScooterElectrical",
        value: 0.06454,
        year: 2020,
        authority: "greenDelta",
        source: "https://www.openlca.org/wp-content/uploads/2021/10/Report_Scooters_in_Berlin.pdf",
        description: "Emission intensity of an electrical motor scooter (vespa type), including upstream emissions from manufacturing (including battery and charger) and transportation, emissions from use, and downstream emissions from dismanteling. In this scenario (ES-1) the battery is based on the model from ecoinvent and the electricity consumption is also based on the German Mix from the same database. Retrieved from a study \"Comparison of the Life Cycle of different scooters used in Berlin\" by Thaís Veiga Barreiros / GreenDelta GmbH.",
        region: "DE"
    }
}

// MARK: GLEC
var Glec = {
    "RigidTruck12_20": {
        name: "RigidTruck12_20",
        value: 0.15, // per tkm
        year: 2019,
        authority: "GLEC",
        source: "https://www.smartfreightcentre.org/en/how-to-implement-items/what-is-glec-framework/58/",
        description: "Rigid truck 12-20 t - Average/ mixed load - Diesel 5% biodiesel blend - WTW. Well-to-Wheel (WTW) emission intensity of freight. Weights are expressed as gross vehicle weight (GVW). Retrieved from the Global Logistics Emissions Council Framework for Logistics Emissions Accounting and Reporting. (2019). This factor is based on planned distances and a -5% distance adjustment should be applied if actual distances are used. This factor has been calculated incorporating average loads/empty running/repositioning etc. as appropriate to the transport type and as described by the source.",
        region: "Europe and South America"
    },
    "ArticTruck34_40": {
        name: "ArticTruck34_40",
        value: 0.075, // per tkm
        year: 2019,
        authority: "GLEC",
        source: "https://www.smartfreightcentre.org/en/how-to-implement-items/what-is-glec-framework/58/",
        description: "Artic truck 34 - 40 t - Container transport - Diesel 5% biodiesel blend - WTW. Well-to-Wheel (WTW) emission intensity of freight. Weights are expressed as gross vehicle weight (GVW). Retrieved from the Global Logistics Emissions Council Framework for Logistics Emissions Accounting and Reporting. (2019). This factor is based on planned distances and a -5% distance adjustment should be applied if actual distances are used. This factor has been calculated incorporating average loads/empty running/repositioning etc. as appropriate to the transport type and as described by the source.",
        region: "Europe and South America"
    },
    "ArticTruck40_44": {
        name: "ArticTruck40_44",
        value: 0.068, // per tkm
        year: 2019,
        authority: "GLEC",
        source: "https://www.smartfreightcentre.org/en/how-to-implement-items/what-is-glec-framework/58/",
        description: "Artic truck 40 - 44 t - Average/ mixed load - Diesel 5% biodiesel blend - WTW. Well-to-Wheel (WTW) emission intensity of freight. Weights are expressed as gross vehicle weight (GVW). Retrieved from the Global Logistics Emissions Council Framework for Logistics Emissions Accounting and Reporting. (2019). This factor is based on planned distances and a -5% distance adjustment should be applied if actual distances are used. This factor has been calculated incorporating average loads/empty running/repositioning etc. as appropriate to the transport type and as described by the source.",
        region: "Europe and South America"
    }
}
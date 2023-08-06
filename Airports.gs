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

const airports = {
    "AAA": {
        "latitude": -17.3526,
        "longitude": -145.509995
    },
    "AAC": {
        "latitude": 31.078565,
        "longitude": 33.836791
    },
    "AAE": {
        "latitude": 36.826781,
        "longitude": 7.81334
    },
    "AAL": {
        "latitude": 57.092759,
        "longitude": 9.849243
    },
    "AAM": {
        "latitude": -24.818099975585900,
        "longitude": 31.544599533081100
    },
    "AAN": {
        "latitude": 24.261699676513700,
        "longitude": 55.60919952392580
    },
    "AAO": {
        "latitude": 9.430225,
        "longitude": -64.470726
    },
    "AAP": {
        "latitude": -0.374478,
        "longitude": 117.250128
    },
    "AAQ": {
        "latitude": 45.002102,
        "longitude": 37.347301
    },
    "AAR": {
        "latitude": 56.303331,
        "longitude": 10.618286
    },
    "AAT": {
        "latitude": 47.749886,
        "longitude": 88.085808
    },
    "AAV": {
        "latitude": 6.367903,
        "longitude": 124.752431
    },
    "AAY": {
        "latitude": 16.193341,
        "longitude": 52.174186
    },
    "ABA": {
        "latitude": 53.740002,
        "longitude": 91.385002
    },
    "ABB": {
        "latitude": 6.204167,
        "longitude": 6.665278
    },
    "ABC": {
        "latitude": 38.948502,
        "longitude": -1.86352
    },
    "ABD": {
        "latitude": 30.367887,
        "longitude": 48.230075
    },
    "ABE": {
        "latitude": 40.651773,
        "longitude": -75.442797
    },
    "ABH": {
        "latitude": -23.653275,
        "longitude": 146.582479
    },
    "ABI": {
        "latitude": 32.4113006592,
        "longitude": -99.68190002440000
    },
    "ABJ": {
        "latitude": 5.26139,
        "longitude": -3.92629
    },
    "ABK": {
        "latitude": 6.732577,
        "longitude": 44.241339
    },
    "ABL": {
        "latitude": 67.107043,
        "longitude": -157.854308
    },
    "ABQ": {
        "latitude": 35.040199,
        "longitude": -106.609001
    },
    "ABR": {
        "latitude": 45.449100494384800,
        "longitude": -98.42179870605470
    },
    "ABS": {
        "latitude": 22.367657,
        "longitude": 31.609962
    },
    "ABT": {
        "latitude": 20.298506,
        "longitude": 41.636153
    },
    "ABV": {
        "latitude": 9.006790161132810,
        "longitude": 7.263169765472410
    },
    "ABX": {
        "latitude": -36.066758,
        "longitude": 146.959148
    },
    "ABY": {
        "latitude": 31.532946,
        "longitude": -84.196215
    },
    "ABZ": {
        "latitude": 57.2019,
        "longitude": -2.19778
    },
    "ACA": {
        "latitude": 16.757099,
        "longitude": -99.753998
    },
    "ACC": {
        "latitude": 5.605189800262450,
        "longitude": -0.16678600013256100
    },
    "ACE": {
        "latitude": 28.945499,
        "longitude": -13.6052
    },
    "ACH": {
        "latitude": 47.485001,
        "longitude": 9.56077
    },
    "ACI": {
        "latitude": 49.706104,
        "longitude": -2.21472
    },
    "ACJ": {
        "latitude": 8.301542,
        "longitude": 80.42848
    },
    "ACK": {
        "latitude": 41.25310135,
        "longitude": -70.06020355
    },
    "ACS": {
        "latitude": 56.269185,
        "longitude": 90.57511
    },
    "ACT": {
        "latitude": 31.611299514770500,
        "longitude": -97.23049926757810
    },
    "ACV": {
        "latitude": 40.978101,
        "longitude": -124.109
    },
    "ACX": {
        "latitude": 25.083423,
        "longitude": 104.960804
    },
    "ACY": {
        "latitude": 39.45759963989260,
        "longitude": -74.57720184326170
    },
    "ACZ": {
        "latitude": 31.098301,
        "longitude": 61.5439
    },
    "ADA": {
        "latitude": 36.982201,
        "longitude": 35.280399
    },
    "ADB": {
        "latitude": 38.2924,
        "longitude": 27.157
    },
    "ADD": {
        "latitude": 8.97789,
        "longitude": 38.799301
    },
    "ADE": {
        "latitude": 12.8295,
        "longitude": 45.028801
    },
    "ADF": {
        "latitude": 37.7314,
        "longitude": 38.468899
    },
    "ADI": {
        "latitude": -22.461875,
        "longitude": 14.979322
    },
    "ADJ": {
        "latitude": 31.9727,
        "longitude": 35.9916
    },
    "ADK": {
        "latitude": 51.883564,
        "longitude": -176.642783
    },
    "ADL": {
        "latitude": -34.947512,
        "longitude": 138.533393
    },
    "ADP": {
        "latitude": 7.336745,
        "longitude": 81.623869
    },
    "ADQ": {
        "latitude": 57.75,
        "longitude": -152.4940033
    },
    "ADU": {
        "latitude": 38.3256988525,
        "longitude": 48.4244003296
    },
    "ADW": {
        "latitude": 38.810799,
        "longitude": -76.866997
    },
    "ADX": {
        "latitude": 56.37398,
        "longitude": -2.868862
    },
    "ADZ": {
        "latitude": 12.5836,
        "longitude": -81.7112
    },
    "AEB": {
        "latitude": 23.7206,
        "longitude": 106.959999
    },
    "AEG": {
        "latitude": 1.4001,
        "longitude": 99.430496
    },
    "AEH": {
        "latitude": 13.847,
        "longitude": 20.844299
    },
    "AEP": {
        "latitude": -34.5592,
        "longitude": -58.4156
    },
    "AER": {
        "latitude": 43.449902,
        "longitude": 39.9566
    },
    "AES": {
        "latitude": 62.5625,
        "longitude": 6.1197
    },
    "AEU": {
        "latitude": 25.8757,
        "longitude": 55.033001
    },
    "AEX": {
        "latitude": 31.3274,
        "longitude": -92.549797
    },
    "AEY": {
        "latitude": 65.66000366210940,
        "longitude": -18.07270050048830
    },
    "AFA": {
        "latitude": -34.588299,
        "longitude": -68.4039
    },
    "AFL": {
        "latitude": -9.866389,
        "longitude": -56.106298
    },
    "AFW": {
        "latitude": 32.99044,
        "longitude": -97.31947
    },
    "AFY": {
        "latitude": 38.726398,
        "longitude": 30.601101
    },
    "AFZ": {
        "latitude": 36.16809844970700,
        "longitude": 57.59519958496090
    },
    "AGA": {
        "latitude": 30.322478,
        "longitude": -9.412003
    },
    "AGB": {
        "latitude": 48.425278,
        "longitude": 10.931667
    },
    "AGC": {
        "latitude": 40.354401,
        "longitude": -79.930199
    },
    "AGF": {
        "latitude": 44.17470169067380,
        "longitude": 0.5905560255050660
    },
    "AGH": {
        "latitude": 56.29610061645510,
        "longitude": 12.847100257873500
    },
    "AGP": {
        "latitude": 36.6749,
        "longitude": -4.49911
    },
    "AGR": {
        "latitude": 27.157683,
        "longitude": 77.960942
    },
    "AGS": {
        "latitude": 33.3699,
        "longitude": -81.9645
    },
    "AGT": {
        "latitude": -25.454516,
        "longitude": -54.842682
    },
    "AGU": {
        "latitude": 21.699589,
        "longitude": -102.318372
    },
    "AGV": {
        "latitude": 9.553375,
        "longitude": -69.237869
    },
    "AGX": {
        "latitude": 10.8237,
        "longitude": 72.176003
    },
    "AGZ": {
        "latitude": -29.28179931640630,
        "longitude": 18.813899993896500
    },
    "AHB": {
        "latitude": 18.2404,
        "longitude": 42.656601
    },
    "AHE": {
        "latitude": -14.428099632263200,
        "longitude": -146.2570037841800
    },
    "AHJ": {
        "latitude": 32.53154,
        "longitude": 102.35224
    },
    "AHN": {
        "latitude": 33.94860076904300,
        "longitude": -83.32630157470700
    },
    "AHO": {
        "latitude": 40.632099,
        "longitude": 8.29077
    },
    "AHU": {
        "latitude": 35.177101135253900,
        "longitude": -3.83951997756958
    },
    "AIN": {
        "latitude": 70.638,
        "longitude": -159.994995
    },
    "AJA": {
        "latitude": 41.92359924316410,
        "longitude": 8.8029203414917
    },
    "AJF": {
        "latitude": 29.78510093688970,
        "longitude": 40.099998474121100
    },
    "AJI": {
        "latitude": 39.655642,
        "longitude": 43.025742
    },
    "AJL": {
        "latitude": 23.840599,
        "longitude": 92.619698
    },
    "AJN": {
        "latitude": -12.131047,
        "longitude": 44.430044
    },
    "AJR": {
        "latitude": 65.59030151367190,
        "longitude": 19.28190040588380
    },
    "AJU": {
        "latitude": -10.984,
        "longitude": -37.070301
    },
    "AJY": {
        "latitude": 16.965999603271500,
        "longitude": 8.000109672546390
    },
    "AKC": {
        "latitude": 41.037498,
        "longitude": -81.466904
    },
    "AKD": {
        "latitude": 20.698931,
        "longitude": 77.056883
    },
    "AKF": {
        "latitude": 24.178699493408200,
        "longitude": 23.31399917602540
    },
    "AKH": {
        "latitude": 24.062700271606400,
        "longitude": 47.580501556396500
    },
    "AKJ": {
        "latitude": 43.670799,
        "longitude": 142.447006
    },
    "AKL": {
        "latitude": -37.01199,
        "longitude": 174.786331
    },
    "AKN": {
        "latitude": 58.677845,
        "longitude": -156.651965
    },
    "AKP": {
        "latitude": 68.13359833,
        "longitude": -151.7429962
    },
    "AKR": {
        "latitude": 7.246739864349370,
        "longitude": 5.3010101318359400
    },
    "AKT": {
        "latitude": 34.590401,
        "longitude": 32.9879
    },
    "AKU": {
        "latitude": 41.262501,
        "longitude": 80.291702
    },
    "AKV": {
        "latitude": 60.818599700927700,
        "longitude": -78.14859771728520
    },
    "AKW": {
        "latitude": 30.7444,
        "longitude": 49.6772
    },
    "AKX": {
        "latitude": 50.2458,
        "longitude": 57.206699
    },
    "AKY": {
        "latitude": 20.133165,
        "longitude": 92.870693
    },
    "ALA": {
        "latitude": 43.354267,
        "longitude": 77.042828
    },
    "ALB": {
        "latitude": 42.74829864501950,
        "longitude": -73.80169677734380
    },
    "ALC": {
        "latitude": 38.2822,
        "longitude": -0.558156
    },
    "ALF": {
        "latitude": 69.976097106934,
        "longitude": 23.371700286865
    },
    "ALG": {
        "latitude": 36.693886,
        "longitude": 3.214531
    },
    "ALH": {
        "latitude": -34.94329833984380,
        "longitude": 117.80899810791000
    },
    "ALI": {
        "latitude": 27.7409,
        "longitude": -98.026901
    },
    "ALJ": {
        "latitude": -28.575001,
        "longitude": 16.5333
    },
    "ALL": {
        "latitude": 44.050598,
        "longitude": 8.12743
    },
    "ALM": {
        "latitude": 32.8399009705,
        "longitude": -105.990997314
    },
    "ALN": {
        "latitude": 38.89030075070000,
        "longitude": -90.0459976196
    },
    "ALO": {
        "latitude": 42.557098388671900,
        "longitude": -92.40029907226560
    },
    "ALP": {
        "latitude": 36.180698,
        "longitude": 37.2244
    },
    "ALR": {
        "latitude": -45.210495,
        "longitude": 169.371113
    },
    "ALS": {
        "latitude": 37.434898,
        "longitude": -105.866997
    },
    "ALW": {
        "latitude": 46.09489822,
        "longitude": -118.288002
    },
    "AMA": {
        "latitude": 35.219398,
        "longitude": -101.706001
    },
    "AMD": {
        "latitude": 23.0771999359,
        "longitude": 72.63469696040000
    },
    "AMH": {
        "latitude": 6.0393900871276900,
        "longitude": 37.59049987792970
    },
    "AMM": {
        "latitude": 31.7226009369,
        "longitude": 35.9931983948
    },
    "AMQ": {
        "latitude": -3.71026,
        "longitude": 128.089005
    },
    "AMS": {
        "latitude": 52.308601,
        "longitude": 4.76389
    },
    "AMV": {
        "latitude": 69.76329803466800,
        "longitude": 61.556400299072300
    },
    "AMZ": {
        "latitude": -37.029701232910200,
        "longitude": 174.97300720214800
    },
    "ANB": {
        "latitude": 33.5882,
        "longitude": -85.8581
    },
    "ANC": {
        "latitude": 61.1744,
        "longitude": -149.996002
    },
    "AND": {
        "latitude": 34.4945983887,
        "longitude": -82.70939636230000
    },
    "ANE": {
        "latitude": 47.560299,
        "longitude": -0.312222
    },
    "ANF": {
        "latitude": -23.444501,
        "longitude": -70.445099
    },
    "ANG": {
        "latitude": 45.729198,
        "longitude": 0.221456
    },
    "ANI": {
        "latitude": 61.581600189209000,
        "longitude": -159.54299926757800
    },
    "ANK": {
        "latitude": 39.949798584,
        "longitude": 32.6885986328
    },
    "ANM": {
        "latitude": -14.9994,
        "longitude": 50.320202
    },
    "ANN": {
        "latitude": 55.037026,
        "longitude": -131.572695
    },
    "ANR": {
        "latitude": 51.1894,
        "longitude": 4.46028
    },
    "ANU": {
        "latitude": 17.1367,
        "longitude": -61.792702
    },
    "ANV": {
        "latitude": 62.646702,
        "longitude": -160.190994
    },
    "ANX": {
        "latitude": 69.292503,
        "longitude": 16.144199
    },
    "AOC": {
        "latitude": 50.981945,
        "longitude": 12.506389
    },
    "AOE": {
        "latitude": 39.809898,
        "longitude": 30.5194
    },
    "AOG": {
        "latitude": 41.105301,
        "longitude": 122.853996
    },
    "AOI": {
        "latitude": 43.616299,
        "longitude": 13.3623
    },
    "AOJ": {
        "latitude": 40.73469924926760,
        "longitude": 140.6909942626950
    },
    "AOK": {
        "latitude": 35.4213981628418,
        "longitude": 27.145999908447300
    },
    "AOL": {
        "latitude": -29.6894,
        "longitude": -57.1521
    },
    "AOO": {
        "latitude": 40.296398,
        "longitude": -78.32
    },
    "AOR": {
        "latitude": 6.189670085906980,
        "longitude": 100.39800262451200
    },
    "AOT": {
        "latitude": 45.738499,
        "longitude": 7.36872
    },
    "APA": {
        "latitude": 39.57009888,
        "longitude": -104.848999
    },
    "APF": {
        "latitude": 26.1525993347,
        "longitude": -81.7752990723
    },
    "APG": {
        "latitude": 39.466202,
        "longitude": -76.1688
    },
    "API": {
        "latitude": 4.07607,
        "longitude": -73.5627
    },
    "APL": {
        "latitude": -15.105600357055700,
        "longitude": 39.28179931640630
    },
    "APN": {
        "latitude": 45.0780983,
        "longitude": -83.56030273
    },
    "APO": {
        "latitude": 7.81196,
        "longitude": -76.7164
    },
    "APW": {
        "latitude": -13.829999923706100,
        "longitude": -172.00799560546900
    },
    "APZ": {
        "latitude": -38.975498,
        "longitude": -70.113602
    },
    "AQA": {
        "latitude": -21.812,
        "longitude": -48.132999
    },
    "AQG": {
        "latitude": 30.582199,
        "longitude": 117.050003
    },
    "AQI": {
        "latitude": 28.335199,
        "longitude": 46.125099
    },
    "AQJ": {
        "latitude": 29.611600875854500,
        "longitude": 35.01810073852540
    },
    "AQP": {
        "latitude": -16.3411006927,
        "longitude": -71.5830993652
    },
    "ARA": {
        "latitude": 30.0378,
        "longitude": -91.883904
    },
    "ARC": {
        "latitude": 68.1147,
        "longitude": -145.578995
    },
    "ARE": {
        "latitude": 18.45085,
        "longitude": -66.675768
    },
    "ARH": {
        "latitude": 64.60030364990230,
        "longitude": 40.71670150756840
    },
    "ARI": {
        "latitude": -18.348499,
        "longitude": -70.338699
    },
    "ARK": {
        "latitude": -3.3677899837493900,
        "longitude": 36.63330078125
    },
    "ARM": {
        "latitude": -30.528099060100000,
        "longitude": 151.617004395
    },
    "ARN": {
        "latitude": 59.651901245117,
        "longitude": 17.918600082397
    },
    "ART": {
        "latitude": 43.991901,
        "longitude": -76.021698
    },
    "ARU": {
        "latitude": -21.141479,
        "longitude": -50.424575
    },
    "ARW": {
        "latitude": 46.17660140991210,
        "longitude": 21.261999130249000
    },
    "ARX": {
        "latitude": -4.568896,
        "longitude": -37.805135
    },
    "ARY": {
        "latitude": -37.309978,
        "longitude": 142.988688
    },
    "ASA": {
        "latitude": 13.071800231933600,
        "longitude": 42.64500045776370
    },
    "ASB": {
        "latitude": 37.986801,
        "longitude": 58.361
    },
    "ASD": {
        "latitude": 24.697900772094700,
        "longitude": -77.79560089111330
    },
    "ASE": {
        "latitude": 39.22320175,
        "longitude": -106.8690033
    },
    "ASF": {
        "latitude": 46.282843,
        "longitude": 48.010511
    },
    "ASI": {
        "latitude": -7.9696,
        "longitude": -14.3937
    },
    "ASJ": {
        "latitude": 28.430599212646500,
        "longitude": 129.71299743652300
    },
    "ASK": {
        "latitude": 6.9031701088,
        "longitude": -5.36558008194
    },
    "ASM": {
        "latitude": 15.291899681091300,
        "longitude": 38.910701751709000
    },
    "ASO": {
        "latitude": 10.018500328064000,
        "longitude": 34.586299896240200
    },
    "ASP": {
        "latitude": -23.806588,
        "longitude": 133.903427
    },
    "ASR": {
        "latitude": 38.770401001,
        "longitude": 35.4953994751
    },
    "AST": {
        "latitude": 46.158000946,
        "longitude": -123.878997803
    },
    "ASU": {
        "latitude": -25.239999771118200,
        "longitude": -57.52000045776370
    },
    "ASV": {
        "latitude": -2.645050048828130,
        "longitude": 37.25310134887700
    },
    "ASW": {
        "latitude": 23.968137,
        "longitude": 32.824445
    },
    "ATA": {
        "latitude": -9.347439765930180,
        "longitude": -77.59839630126950
    },
    "ATC": {
        "latitude": 24.6294,
        "longitude": -75.673797
    },
    "ATF": {
        "latitude": -1.21207,
        "longitude": -78.5746
    },
    "ATG": {
        "latitude": 33.8690986633,
        "longitude": 72.4009017944
    },
    "ATH": {
        "latitude": 37.936401,
        "longitude": 23.9445
    },
    "ATK": {
        "latitude": 70.46704,
        "longitude": -157.436013
    },
    "ATL": {
        "latitude": 33.6367,
        "longitude": -84.428101
    },
    "ATM": {
        "latitude": -3.253144,
        "longitude": -52.253938
    },
    "ATQ": {
        "latitude": 31.7096,
        "longitude": 74.797302
    },
    "ATR": {
        "latitude": 20.506799697876000,
        "longitude": -13.04319953918460
    },
    "ATY": {
        "latitude": 44.91400146,
        "longitude": -97.15470123
    },
    "ATZ": {
        "latitude": 27.050818,
        "longitude": 31.016309
    },
    "AUA": {
        "latitude": 12.5014,
        "longitude": -70.015198
    },
    "AUC": {
        "latitude": 7.06888,
        "longitude": -70.7369
    },
    "AUF": {
        "latitude": 47.85020065307620,
        "longitude": 3.497109889984130
    },
    "AUG": {
        "latitude": 44.320598602300000,
        "longitude": -69.7973022461
    },
    "AUH": {
        "latitude": 24.443764,
        "longitude": 54.651718
    },
    "AUQ": {
        "latitude": -9.76879024506,
        "longitude": -139.011001587
    },
    "AUR": {
        "latitude": 44.89139938354490,
        "longitude": 2.4219400882720900
    },
    "AUS": {
        "latitude": 30.197535,
        "longitude": -97.662015
    },
    "AUW": {
        "latitude": 44.9262008667,
        "longitude": -89.6266021729
    },
    "AUX": {
        "latitude": -7.22787,
        "longitude": -48.240501
    },
    "AVA": {
        "latitude": 26.260556,
        "longitude": 105.873333
    },
    "AVB": {
        "latitude": 46.031898,
        "longitude": 12.596503
    },
    "AVI": {
        "latitude": 22.027099609375,
        "longitude": -78.78959655761720
    },
    "AVK": {
        "latitude": 46.250301361084000,
        "longitude": 102.802001953125
    },
    "AVL": {
        "latitude": 35.436199,
        "longitude": -82.541801
    },
    "AVN": {
        "latitude": 43.90729904174810,
        "longitude": 4.901830196380620
    },
    "AVP": {
        "latitude": 41.338500976600000,
        "longitude": -75.72339630130000
    },
    "AVR": {
        "latitude": 38.883301,
        "longitude": -9.0301
    },
    "AVV": {
        "latitude": -38.039398,
        "longitude": 144.468994
    },
    "AWA": {
        "latitude": 7.099869,
        "longitude": 38.396187
    },
    "AWK": {
        "latitude": 19.282437,
        "longitude": 166.636637
    },
    "AWZ": {
        "latitude": 31.3374,
        "longitude": 48.762001
    },
    "AXA": {
        "latitude": 18.204773,
        "longitude": -63.05383
    },
    "AXD": {
        "latitude": 40.8559,
        "longitude": 25.956301
    },
    "AXF": {
        "latitude": 38.74831,
        "longitude": 105.58858
    },
    "AXK": {
        "latitude": 14.5513,
        "longitude": 46.826199
    },
    "AXM": {
        "latitude": 4.45278,
        "longitude": -75.7664
    },
    "AXN": {
        "latitude": 45.866299,
        "longitude": -95.394699
    },
    "AXP": {
        "latitude": 22.441799163800000,
        "longitude": -73.97090148930000
    },
    "AXR": {
        "latitude": -15.248299598693800,
        "longitude": -146.61700439453100
    },
    "AXT": {
        "latitude": 39.615601,
        "longitude": 140.218994
    },
    "AXU": {
        "latitude": 14.1468,
        "longitude": 38.7728
    },
    "AYO": {
        "latitude": -27.370554,
        "longitude": -56.854064
    },
    "AYP": {
        "latitude": -13.1548,
        "longitude": -74.204399
    },
    "AYQ": {
        "latitude": -25.185913,
        "longitude": 130.97703
    },
    "AYT": {
        "latitude": 36.898701,
        "longitude": 30.800501
    },
    "AYX": {
        "latitude": -10.7291,
        "longitude": -73.766502
    },
    "AZA": {
        "latitude": 33.3078,
        "longitude": -111.654999
    },
    "AZD": {
        "latitude": 31.9048995972,
        "longitude": 54.2765007019
    },
    "AZI": {
        "latitude": 24.428301,
        "longitude": 54.458099
    },
    "AZN": {
        "latitude": 40.727699,
        "longitude": 72.293999
    },
    "AZO": {
        "latitude": 42.234901428222700,
        "longitude": -85.5521011352539
    },
    "AZR": {
        "latitude": 27.837601,
        "longitude": -0.186414
    },
    "AZS": {
        "latitude": 19.269259,
        "longitude": -69.737405
    },
    "BAB": {
        "latitude": 39.136101,
        "longitude": -121.436996
    },
    "BAD": {
        "latitude": 32.501801,
        "longitude": -93.662697
    },
    "BAF": {
        "latitude": 42.157799,
        "longitude": -72.715599
    },
    "BAG": {
        "latitude": 16.375099182128900,
        "longitude": 120.62000274658200
    },
    "BAH": {
        "latitude": 26.267295,
        "longitude": 50.63764
    },
    "BAI": {
        "latitude": 9.163949,
        "longitude": -83.330171
    },
    "BAL": {
        "latitude": 37.929000854500000,
        "longitude": 41.1166000366
    },
    "BAQ": {
        "latitude": 10.8896,
        "longitude": -74.7808
    },
    "BAR": {
        "latitude": 19.140951,
        "longitude": 110.452766
    },
    "BAT": {
        "latitude": -20.584499359131,
        "longitude": -48.594100952148
    },
    "BAV": {
        "latitude": 40.560001,
        "longitude": 109.997002
    },
    "BAX": {
        "latitude": 53.363800048828100,
        "longitude": 83.53849792480470
    },
    "BAY": {
        "latitude": 47.660598,
        "longitude": 23.467252
    },
    "BBA": {
        "latitude": -45.916099548339800,
        "longitude": -71.68949890136720
    },
    "BBD": {
        "latitude": 31.1793003082,
        "longitude": -99.3238983154
    },
    "BBI": {
        "latitude": 20.244400024400000,
        "longitude": 85.8178024292
    },
    "BBK": {
        "latitude": -17.832899,
        "longitude": 25.162399
    },
    "BBM": {
        "latitude": 13.0956,
        "longitude": 103.223999
    },
    "BBN": {
        "latitude": 3.734648,
        "longitude": 115.478548
    },
    "BBO": {
        "latitude": 10.385035,
        "longitude": 44.936723
    },
    "BBQ": {
        "latitude": 17.635799,
        "longitude": -61.828602
    },
    "BBS": {
        "latitude": 51.32389831542970,
        "longitude": -0.8475000262260440
    },
    "BBT": {
        "latitude": 4.2215800285339400,
        "longitude": 15.786399841308600
    },
    "BBU": {
        "latitude": 44.503201,
        "longitude": 26.1021
    },
    "BCA": {
        "latitude": 20.365299224853500,
        "longitude": -74.5062026977539
    },
    "BCD": {
        "latitude": 10.7764,
        "longitude": 123.014999
    },
    "BCE": {
        "latitude": 37.706401825,
        "longitude": -112.144996643
    },
    "BCH": {
        "latitude": -8.486479,
        "longitude": 126.399981
    },
    "BCI": {
        "latitude": -23.566268,
        "longitude": 145.302086
    },
    "BCL": {
        "latitude": 10.768699645996100,
        "longitude": -83.58560180664060
    },
    "BCM": {
        "latitude": 46.52190017700200,
        "longitude": 26.91029930114750
    },
    "BCN": {
        "latitude": 41.2971,
        "longitude": 2.07846
    },
    "BCQ": {
        "latitude": 27.653,
        "longitude": 14.272
    },
    "BCU": {
        "latitude": 10.482833,
        "longitude": 9.744
    },
    "BCW": {
        "latitude": -21.853300094604500,
        "longitude": 35.43830108642580
    },
    "BDA": {
        "latitude": 32.36399841308590,
        "longitude": -64.67870330810550
    },
    "BDB": {
        "latitude": -24.905039,
        "longitude": 152.322612
    },
    "BDE": {
        "latitude": 48.7284011841,
        "longitude": -94.612197876
    },
    "BDH": {
        "latitude": 26.532283,
        "longitude": 54.82484
    },
    "BDL": {
        "latitude": 41.93851,
        "longitude": -72.688066
    },
    "BDM": {
        "latitude": 40.318001,
        "longitude": 27.977699
    },
    "BDO": {
        "latitude": -6.90063,
        "longitude": 107.575996
    },
    "BDQ": {
        "latitude": 22.336201,
        "longitude": 73.226303
    },
    "BDR": {
        "latitude": 41.16350173950200,
        "longitude": -73.1261978149414
    },
    "BDS": {
        "latitude": 40.6576,
        "longitude": 17.947001
    },
    "BDT": {
        "latitude": 4.25321,
        "longitude": 20.9753
    },
    "BDU": {
        "latitude": 69.055801391602,
        "longitude": 18.540399551392
    },
    "BEB": {
        "latitude": 57.48109817504880,
        "longitude": -7.3627800941467300
    },
    "BED": {
        "latitude": 42.47000122,
        "longitude": -71.28900146
    },
    "BEF": {
        "latitude": 11.991,
        "longitude": -83.774101
    },
    "BEG": {
        "latitude": 44.818401,
        "longitude": 20.309099
    },
    "BEJ": {
        "latitude": 2.1555,
        "longitude": 117.431999
    },
    "BEK": {
        "latitude": 28.4221000671,
        "longitude": 79.45079803470000
    },
    "BEL": {
        "latitude": -1.379279,
        "longitude": -48.476207
    },
    "BEN": {
        "latitude": 32.096802,
        "longitude": 20.269501
    },
    "BEP": {
        "latitude": 15.162799835205100,
        "longitude": 76.88279724121090
    },
    "BEQ": {
        "latitude": 52.34260177612310,
        "longitude": 0.7729390263557430
    },
    "BER": {
        "latitude": 52.362247,
        "longitude": 13.500672
    },
    "BES": {
        "latitude": 48.447898864746100,
        "longitude": -4.418540000915530
    },
    "BET": {
        "latitude": 60.77980042,
        "longitude": -161.8379974
    },
    "BEU": {
        "latitude": -24.346099853515600,
        "longitude": 139.4600067138670
    },
    "BEW": {
        "latitude": -19.79640007019040,
        "longitude": 34.90760040283200
    },
    "BEX": {
        "latitude": 51.616401672400000,
        "longitude": -1.09582996368
    },
    "BEY": {
        "latitude": 33.820899963378900,
        "longitude": 35.488399505615200
    },
    "BFD": {
        "latitude": 41.8031005859375,
        "longitude": -78.64009857177730
    },
    "BFF": {
        "latitude": 41.87400055,
        "longitude": -103.5960007
    },
    "BFH": {
        "latitude": -25.4051,
        "longitude": -49.231998
    },
    "BFI": {
        "latitude": 47.529999,
        "longitude": -122.302002
    },
    "BFJ": {
        "latitude": 27.267066,
        "longitude": 105.472097
    },
    "BFK": {
        "latitude": 39.701698,
        "longitude": -104.751999
    },
    "BFL": {
        "latitude": 35.433601,
        "longitude": -119.056999
    },
    "BFM": {
        "latitude": 30.626800537100000,
        "longitude": -88.06809997560000
    },
    "BFN": {
        "latitude": -29.092699,
        "longitude": 26.302401
    },
    "BFO": {
        "latitude": -21.008101,
        "longitude": 31.5786
    },
    "BFP": {
        "latitude": 40.772499,
        "longitude": -80.391403
    },
    "BFS": {
        "latitude": 54.6575012207,
        "longitude": -6.2158298492400000
    },
    "BFU": {
        "latitude": 32.8477333333,
        "longitude": 117.320244444
    },
    "BFV": {
        "latitude": 15.229499816894500,
        "longitude": 103.25299835205100
    },
    "BFX": {
        "latitude": 5.536920070650000,
        "longitude": 10.354599952700000
    },
    "BGA": {
        "latitude": 7.1265,
        "longitude": -73.1848
    },
    "BGC": {
        "latitude": 41.8578,
        "longitude": -6.70713
    },
    "BGF": {
        "latitude": 4.39847993850708,
        "longitude": 18.518800735473600
    },
    "BGI": {
        "latitude": 13.0746,
        "longitude": -59.4925
    },
    "BGK": {
        "latitude": 16.519369,
        "longitude": -88.407913
    },
    "BGM": {
        "latitude": 42.20869827,
        "longitude": -75.97979736
    },
    "BGN": {
        "latitude": 68.556227,
        "longitude": 146.22784
    },
    "BGO": {
        "latitude": 60.2934,
        "longitude": 5.21814
    },
    "BGR": {
        "latitude": 44.8074,
        "longitude": -68.828102
    },
    "BGW": {
        "latitude": 33.262501,
        "longitude": 44.2346
    },
    "BGX": {
        "latitude": -31.390499,
        "longitude": -54.112202
    },
    "BGY": {
        "latitude": 45.673901,
        "longitude": 9.70417
    },
    "BGZ": {
        "latitude": 41.5871009827,
        "longitude": -8.445139884950000
    },
    "BHB": {
        "latitude": 44.45000076,
        "longitude": -68.3615036
    },
    "BHD": {
        "latitude": 54.618099,
        "longitude": -5.8725
    },
    "BHE": {
        "latitude": -41.5182991027832,
        "longitude": 173.8699951171880
    },
    "BHH": {
        "latitude": 19.984399795532200,
        "longitude": 42.62089920043950
    },
    "BHI": {
        "latitude": -38.725,
        "longitude": -62.1693
    },
    "BHJ": {
        "latitude": 23.2877998352,
        "longitude": 69.6701965332
    },
    "BHK": {
        "latitude": 39.775002,
        "longitude": 64.483299
    },
    "BHM": {
        "latitude": 33.562901,
        "longitude": -86.753502
    },
    "BHO": {
        "latitude": 23.2875003815,
        "longitude": 77.3374023438
    },
    "BHQ": {
        "latitude": -32.0013999939,
        "longitude": 141.472000122
    },
    "BHS": {
        "latitude": -33.406817,
        "longitude": 149.651161
    },
    "BHU": {
        "latitude": 21.752199173,
        "longitude": 72.1852035522
    },
    "BHV": {
        "latitude": 29.348100662231400,
        "longitude": 71.71800231933590
    },
    "BHX": {
        "latitude": 52.453899383500000,
        "longitude": -1.74802994728
    },
    "BIA": {
        "latitude": 42.55270004272460,
        "longitude": 9.48373031616211
    },
    "BIF": {
        "latitude": 31.84950066,
        "longitude": -106.3799973
    },
    "BIG": {
        "latitude": 63.9944992065,
        "longitude": -145.722000122
    },
    "BIH": {
        "latitude": 37.3731002808,
        "longitude": -118.363998413
    },
    "BIK": {
        "latitude": -1.19002,
        "longitude": 136.108002
    },
    "BIL": {
        "latitude": 45.807701,
        "longitude": -108.542999
    },
    "BIM": {
        "latitude": 25.6998996735,
        "longitude": -79.2647018433
    },
    "BIO": {
        "latitude": 43.301102,
        "longitude": -2.91061
    },
    "BIQ": {
        "latitude": 43.4683333,
        "longitude": -1.5311111
    },
    "BIR": {
        "latitude": 26.48150062561040,
        "longitude": 87.26399993896480
    },
    "BIS": {
        "latitude": 46.772701263427700,
        "longitude": -100.74600219726600
    },
    "BIX": {
        "latitude": 30.4104003906,
        "longitude": -88.92440032960000
    },
    "BIY": {
        "latitude": -32.8970985413,
        "longitude": 27.279100418100000
    },
    "BJA": {
        "latitude": 36.711952,
        "longitude": 5.069804
    },
    "BJB": {
        "latitude": 37.49300003051760,
        "longitude": 57.30820083618160
    },
    "BJC": {
        "latitude": 39.90879822,
        "longitude": -105.1169968
    },
    "BJF": {
        "latitude": 70.60050201416,
        "longitude": 29.691400527954
    },
    "BJI": {
        "latitude": 47.50939941,
        "longitude": -94.93370056
    },
    "BJL": {
        "latitude": 13.338,
        "longitude": -16.652201
    },
    "BJM": {
        "latitude": -3.32402,
        "longitude": 29.318501
    },
    "BJO": {
        "latitude": -22.7733001709,
        "longitude": -64.31289672850000
    },
    "BJR": {
        "latitude": 11.6081,
        "longitude": 37.321602
    },
    "BJV": {
        "latitude": 37.25059890750000,
        "longitude": 27.6643009186
    },
    "BJX": {
        "latitude": 20.9935,
        "longitude": -101.481003
    },
    "BJY": {
        "latitude": 44.935299,
        "longitude": 20.2575
    },
    "BJZ": {
        "latitude": 38.8913,
        "longitude": -6.82133
    },
    "BKB": {
        "latitude": 28.070600509643600,
        "longitude": 73.20719909667970
    },
    "BKC": {
        "latitude": 65.981598,
        "longitude": -161.149002
    },
    "BKE": {
        "latitude": 44.837299346900000,
        "longitude": -117.808998108
    },
    "BKH": {
        "latitude": 22.0228,
        "longitude": -159.785004
    },
    "BKI": {
        "latitude": 5.932743,
        "longitude": 116.049324
    },
    "BKK": {
        "latitude": 13.681099891662600,
        "longitude": 100.74700164794900
    },
    "BKL": {
        "latitude": 41.51750183105470,
        "longitude": -81.68329620361330
    },
    "BKO": {
        "latitude": 12.5335,
        "longitude": -7.94994
    },
    "BKQ": {
        "latitude": -24.431678,
        "longitude": 145.429716
    },
    "BKS": {
        "latitude": -3.8637,
        "longitude": 102.338997
    },
    "BKW": {
        "latitude": 37.787300109900000,
        "longitude": -81.1241989136
    },
    "BKY": {
        "latitude": -2.3089799880981400,
        "longitude": 28.808799743652300
    },
    "BLA": {
        "latitude": 10.111111,
        "longitude": -64.692222
    },
    "BLD": {
        "latitude": 35.947498,
        "longitude": -114.861
    },
    "BLE": {
        "latitude": 60.422001,
        "longitude": 15.5152
    },
    "BLF": {
        "latitude": 37.295799,
        "longitude": -81.207703
    },
    "BLH": {
        "latitude": 33.6192016602,
        "longitude": -114.717002869
    },
    "BLI": {
        "latitude": 48.79280090332030,
        "longitude": -122.53800201416000
    },
    "BLJ": {
        "latitude": 35.752102,
        "longitude": 6.30859
    },
    "BLK": {
        "latitude": 53.77170181274410,
        "longitude": -3.0286099910736100
    },
    "BLL": {
        "latitude": 55.7402992249,
        "longitude": 9.15178012848
    },
    "BLN": {
        "latitude": -36.551899,
        "longitude": 146.007004
    },
    "BLQ": {
        "latitude": 44.5354,
        "longitude": 11.2887
    },
    "BLR": {
        "latitude": 13.1979,
        "longitude": 77.706299
    },
    "BLT": {
        "latitude": -23.603099822998000,
        "longitude": 148.8070068359380
    },
    "BLV": {
        "latitude": 38.5452,
        "longitude": -89.835197
    },
    "BLZ": {
        "latitude": -15.679100036621100,
        "longitude": 34.9739990234375
    },
    "BMA": {
        "latitude": 59.354400634765600,
        "longitude": 17.941699981689500
    },
    "BME": {
        "latitude": -17.949055,
        "longitude": 122.228329
    },
    "BMG": {
        "latitude": 39.145999908447300,
        "longitude": -86.61669921875
    },
    "BMI": {
        "latitude": 40.4771,
        "longitude": -88.915901
    },
    "BMM": {
        "latitude": 2.0756399631500200,
        "longitude": 11.493200302124000
    },
    "BMV": {
        "latitude": 12.668299675,
        "longitude": 108.120002747
    },
    "BMY": {
        "latitude": -19.720521,
        "longitude": 163.661077
    },
    "BNA": {
        "latitude": 36.1245002746582,
        "longitude": -86.6781997680664
    },
    "BND": {
        "latitude": 27.218299865722700,
        "longitude": 56.37779998779300
    },
    "BNE": {
        "latitude": -27.384199142456100,
        "longitude": 153.11700439453100
    },
    "BNI": {
        "latitude": 6.316979885101320,
        "longitude": 5.5995001792907700
    },
    "BNK": {
        "latitude": -28.833236,
        "longitude": 153.561471
    },
    "BNN": {
        "latitude": 65.461098,
        "longitude": 12.2175
    },
    "BNO": {
        "latitude": 43.590463,
        "longitude": -118.955154
    },
    "BNS": {
        "latitude": 8.615,
        "longitude": -70.21416667
    },
    "BNX": {
        "latitude": 44.94139862060550,
        "longitude": 17.297500610351600
    },
    "BOB": {
        "latitude": -16.444400787353500,
        "longitude": -151.75100708007800
    },
    "BOC": {
        "latitude": 9.34085,
        "longitude": -82.250801
    },
    "BOD": {
        "latitude": 44.8283,
        "longitude": -0.715556
    },
    "BOG": {
        "latitude": 4.70159,
        "longitude": -74.1469
    },
    "BOH": {
        "latitude": 50.779999,
        "longitude": -1.8425
    },
    "BOI": {
        "latitude": 43.5644,
        "longitude": -116.223
    },
    "BOJ": {
        "latitude": 42.56959915161130,
        "longitude": 27.515199661254900
    },
    "BOM": {
        "latitude": 19.0886993408,
        "longitude": 72.8678970337
    },
    "BON": {
        "latitude": 12.131,
        "longitude": -68.268501
    },
    "BOO": {
        "latitude": 67.269203,
        "longitude": 14.3653
    },
    "BOS": {
        "latitude": 42.3643,
        "longitude": -71.005203
    },
    "BOU": {
        "latitude": 47.058101654052700,
        "longitude": 2.3702800273895300
    },
    "BOY": {
        "latitude": 11.160099983215300,
        "longitude": -4.33096981048584
    },
    "BPC": {
        "latitude": 6.039239883422850,
        "longitude": 10.122599601745600
    },
    "BPE": {
        "latitude": 39.666389,
        "longitude": 119.058889
    },
    "BPG": {
        "latitude": -15.861417,
        "longitude": -52.389008
    },
    "BPH": {
        "latitude": 8.195052,
        "longitude": 126.321015
    },
    "BPI": {
        "latitude": 42.58509827,
        "longitude": -110.1110001
    },
    "BPL": {
        "latitude": 44.895461,
        "longitude": 82.30007
    },
    "BPM": {
        "latitude": 17.4531,
        "longitude": 78.467598
    },
    "BPN": {
        "latitude": -1.268342,
        "longitude": 116.89452
    },
    "BPS": {
        "latitude": -16.438426,
        "longitude": -39.080584
    },
    "BPT": {
        "latitude": 29.9508,
        "longitude": -94.020699
    },
    "BPX": {
        "latitude": 30.553600311279300,
        "longitude": 97.1082992553711
    },
    "BPY": {
        "latitude": -16.74453,
        "longitude": 44.482484
    },
    "BQA": {
        "latitude": 15.729309,
        "longitude": 121.500034
    },
    "BQH": {
        "latitude": 51.33079910280000,
        "longitude": 0.0324999988079
    },
    "BQK": {
        "latitude": 31.258800506591800,
        "longitude": -81.46649932861330
    },
    "BQL": {
        "latitude": -22.913299560546900,
        "longitude": 139.89999389648400
    },
    "BQN": {
        "latitude": 18.4949,
        "longitude": -67.129402
    },
    "BQS": {
        "latitude": 50.42539978027340,
        "longitude": 127.41200256347700
    },
    "BQT": {
        "latitude": 52.108299,
        "longitude": 23.8981
    },
    "BQU": {
        "latitude": 12.9884,
        "longitude": -61.262001
    },
    "BRC": {
        "latitude": -41.151199,
        "longitude": -71.157501
    },
    "BRD": {
        "latitude": 46.402861,
        "longitude": -94.129727
    },
    "BRE": {
        "latitude": 53.047501,
        "longitude": 8.78667
    },
    "BRI": {
        "latitude": 41.138901,
        "longitude": 16.760599
    },
    "BRK": {
        "latitude": -30.039199829101600,
        "longitude": 145.95199584960900
    },
    "BRL": {
        "latitude": 40.783199310302700,
        "longitude": -91.12550354003910
    },
    "BRM": {
        "latitude": 10.042746543884300,
        "longitude": -69.3586196899414
    },
    "BRN": {
        "latitude": 46.913419,
        "longitude": 7.499747
    },
    "BRO": {
        "latitude": 25.90679931640630,
        "longitude": -97.4259033203125
    },
    "BRQ": {
        "latitude": 49.15129852294920,
        "longitude": 16.694400787353500
    },
    "BRR": {
        "latitude": 57.0228,
        "longitude": -7.44306
    },
    "BRS": {
        "latitude": 51.382702,
        "longitude": -2.71909
    },
    "BRT": {
        "latitude": -11.764966,
        "longitude": 130.615774
    },
    "BRU": {
        "latitude": 50.901402,
        "longitude": 4.48444
    },
    "BRW": {
        "latitude": 71.285402,
        "longitude": -156.766008
    },
    "BRX": {
        "latitude": 18.25149917602540,
        "longitude": -71.12039947509770
    },
    "BSB": {
        "latitude": -15.869167,
        "longitude": -47.920834
    },
    "BSC": {
        "latitude": 6.20292,
        "longitude": -77.3947
    },
    "BSD": {
        "latitude": 25.053301,
        "longitude": 99.168297
    },
    "BSG": {
        "latitude": 1.90547,
        "longitude": 9.80568
    },
    "BSJ": {
        "latitude": -37.887539,
        "longitude": 147.569379
    },
    "BSK": {
        "latitude": 34.793301,
        "longitude": 5.73823
    },
    "BSL": {
        "latitude": 47.59,
        "longitude": 7.529167
    },
    "BSO": {
        "latitude": 20.4513,
        "longitude": 121.980003
    },
    "BSR": {
        "latitude": 30.549101,
        "longitude": 47.662102
    },
    "BTC": {
        "latitude": 7.70576,
        "longitude": 81.678802
    },
    "BTH": {
        "latitude": 1.12103,
        "longitude": 104.119003
    },
    "BTI": {
        "latitude": 70.134003,
        "longitude": -143.582001
    },
    "BTJ": {
        "latitude": 5.522872024010000,
        "longitude": 95.42063713070000
    },
    "BTK": {
        "latitude": 56.370601654052700,
        "longitude": 101.697998046875
    },
    "BTL": {
        "latitude": 42.307301,
        "longitude": -85.251503
    },
    "BTM": {
        "latitude": 45.95479965209960,
        "longitude": -112.49700164794900
    },
    "BTR": {
        "latitude": 30.533199,
        "longitude": -91.149597
    },
    "BTS": {
        "latitude": 48.17020034790040,
        "longitude": 17.21269989013670
    },
    "BTT": {
        "latitude": 66.91390228,
        "longitude": -151.529007
    },
    "BTU": {
        "latitude": 3.12385010719,
        "longitude": 113.019996643
    },
    "BTV": {
        "latitude": 44.471901,
        "longitude": -73.153297
    },
    "BTZ": {
        "latitude": 5.79,
        "longitude": 101.15
    },
    "BUA": {
        "latitude": -5.4223198890686000,
        "longitude": 154.67300415039100
    },
    "BUD": {
        "latitude": 47.42976,
        "longitude": 19.261093
    },
    "BUF": {
        "latitude": 42.94049835,
        "longitude": -78.73220062
    },
    "BUG": {
        "latitude": -12.609,
        "longitude": 13.4037
    },
    "BUJ": {
        "latitude": 35.3325,
        "longitude": 4.20639
    },
    "BUN": {
        "latitude": 3.81963,
        "longitude": -76.9898
    },
    "BUP": {
        "latitude": 30.270099639892600,
        "longitude": 74.75579833984380
    },
    "BUQ": {
        "latitude": -20.017401,
        "longitude": 28.617901
    },
    "BUR": {
        "latitude": 34.197703,
        "longitude": -118.356378
    },
    "BUS": {
        "latitude": 41.6102981567,
        "longitude": 41.5997009277
    },
    "BUX": {
        "latitude": 1.5657199621200600,
        "longitude": 30.220800399780300
    },
    "BUZ": {
        "latitude": 28.9447994232,
        "longitude": 50.8345985413
    },
    "BVA": {
        "latitude": 49.454399,
        "longitude": 2.11278
    },
    "BVB": {
        "latitude": 2.845855,
        "longitude": -60.690944
    },
    "BVC": {
        "latitude": 16.136499404907200,
        "longitude": -22.888900756835900
    },
    "BVE": {
        "latitude": 45.039722,
        "longitude": 1.485556
    },
    "BVG": {
        "latitude": 70.871399,
        "longitude": 29.034201
    },
    "BVH": {
        "latitude": -12.6944,
        "longitude": -60.098301
    },
    "BVI": {
        "latitude": -25.897499084472700,
        "longitude": 139.34800720214800
    },
    "BVJ": {
        "latitude": 70.315278,
        "longitude": 68.333611
    },
    "BVY": {
        "latitude": 42.584202,
        "longitude": -70.916496
    },
    "BWA": {
        "latitude": 27.505328,
        "longitude": 83.412594
    },
    "BWE": {
        "latitude": 52.319199,
        "longitude": 10.5561
    },
    "BWF": {
        "latitude": 54.1286111,
        "longitude": -3.2675
    },
    "BWG": {
        "latitude": 36.964500427200000,
        "longitude": -86.41970062260000
    },
    "BWH": {
        "latitude": 5.46592,
        "longitude": 100.390999
    },
    "BWI": {
        "latitude": 39.1754,
        "longitude": -76.668297
    },
    "BWK": {
        "latitude": 43.285702,
        "longitude": 16.679701
    },
    "BWN": {
        "latitude": 4.9442,
        "longitude": 114.928001
    },
    "BWO": {
        "latitude": 51.8582992554,
        "longitude": 47.7456016541
    },
    "BWQ": {
        "latitude": -29.975792,
        "longitude": 146.81438
    },
    "BWT": {
        "latitude": -40.997039,
        "longitude": 145.726
    },
    "BWU": {
        "latitude": -33.923618,
        "longitude": 150.990792
    },
    "BXB": {
        "latitude": -2.53224,
        "longitude": 133.438995
    },
    "BXE": {
        "latitude": 14.847299575805700,
        "longitude": -12.468299865722700
    },
    "BXH": {
        "latitude": 46.8932991027832,
        "longitude": 75.00499725341800
    },
    "BXR": {
        "latitude": 29.0842,
        "longitude": 58.450001
    },
    "BXU": {
        "latitude": 8.9515,
        "longitude": 125.4788
    },
    "BXY": {
        "latitude": 45.621994,
        "longitude": 63.210773
    },
    "BYC": {
        "latitude": -21.960899353027300,
        "longitude": -63.65169906616210
    },
    "BYH": {
        "latitude": 35.9642982483,
        "longitude": -89.94400024410000
    },
    "BYI": {
        "latitude": 42.542598724400000,
        "longitude": -113.772003174
    },
    "BYJ": {
        "latitude": 38.078899,
        "longitude": -7.9324
    },
    "BYK": {
        "latitude": 7.7388,
        "longitude": -5.07367
    },
    "BYM": {
        "latitude": 20.3964,
        "longitude": -76.621399
    },
    "BYN": {
        "latitude": 46.163299560546900,
        "longitude": 100.7040023803710
    },
    "BYS": {
        "latitude": 35.2804985046,
        "longitude": -116.629997253
    },
    "BYU": {
        "latitude": 49.985001,
        "longitude": 11.64
    },
    "BZB": {
        "latitude": -21.5411,
        "longitude": 35.4729
    },
    "BZC": {
        "latitude": -22.770881,
        "longitude": -41.96308
    },
    "BZD": {
        "latitude": -34.624834,
        "longitude": 143.577114
    },
    "BZE": {
        "latitude": 17.539951,
        "longitude": -88.303556
    },
    "BZG": {
        "latitude": 53.096802,
        "longitude": 17.977699
    },
    "BZI": {
        "latitude": 39.619300842285200,
        "longitude": 27.926000595092800
    },
    "BZK": {
        "latitude": 53.214199,
        "longitude": 34.176399
    },
    "BZL": {
        "latitude": 22.801000595092800,
        "longitude": 90.30120086669920
    },
    "BZN": {
        "latitude": 45.77750015,
        "longitude": -111.1529999
    },
    "BZO": {
        "latitude": 46.460201,
        "longitude": 11.3264
    },
    "BZR": {
        "latitude": 43.32350158691410,
        "longitude": 3.3538999557495100
    },
    "BZU": {
        "latitude": 2.818350076675420,
        "longitude": 24.793699264526400
    },
    "BZV": {
        "latitude": -4.251699924468990,
        "longitude": 15.253000259399400
    },
    "BZY": {
        "latitude": 47.837666,
        "longitude": 27.781108
    },
    "BZZ": {
        "latitude": 51.75,
        "longitude": -1.58362
    },
    "CAB": {
        "latitude": -5.59699010848999,
        "longitude": 12.188400268554700
    },
    "CAC": {
        "latitude": -25.000323,
        "longitude": -53.501208
    },
    "CAE": {
        "latitude": 33.938801,
        "longitude": -81.119499
    },
    "CAG": {
        "latitude": 39.251499,
        "longitude": 9.05428
    },
    "CAH": {
        "latitude": 9.177667,
        "longitude": 105.177778
    },
    "CAI": {
        "latitude": 30.111534,
        "longitude": 31.396694
    },
    "CAJ": {
        "latitude": 6.231988906860350,
        "longitude": -62.85443115234380
    },
    "CAK": {
        "latitude": 40.916099548339800,
        "longitude": -81.44219970703130
    },
    "CAL": {
        "latitude": 55.437198638916000,
        "longitude": -5.686389923095700
    },
    "CAN": {
        "latitude": 23.392401,
        "longitude": 113.299004
    },
    "CAP": {
        "latitude": 19.726734,
        "longitude": -72.199576
    },
    "CAQ": {
        "latitude": 7.96847,
        "longitude": -75.1985
    },
    "CAR": {
        "latitude": 46.871498,
        "longitude": -68.017899
    },
    "CAT": {
        "latitude": 38.724998,
        "longitude": -9.35523
    },
    "CAW": {
        "latitude": -21.698299,
        "longitude": -41.301701
    },
    "CAX": {
        "latitude": 54.9375,
        "longitude": -2.8091700077056900
    },
    "CAY": {
        "latitude": 4.819964,
        "longitude": -52.361326
    },
    "CAZ": {
        "latitude": -31.538299560546900,
        "longitude": 145.79400634765600
    },
    "CBB": {
        "latitude": -17.421100616455100,
        "longitude": -66.1771011352539
    },
    "CBD": {
        "latitude": 9.153056,
        "longitude": 92.819273
    },
    "CBG": {
        "latitude": 52.205002,
        "longitude": 0.175
    },
    "CBH": {
        "latitude": 31.645700454711900,
        "longitude": -2.269860029220580
    },
    "CBJ": {
        "latitude": 17.929000854492200,
        "longitude": -71.6447982788086
    },
    "CBL": {
        "latitude": 8.12216091156,
        "longitude": -63.5369567871
    },
    "CBM": {
        "latitude": 33.643799,
        "longitude": -88.443802
    },
    "CBO": {
        "latitude": 7.164753,
        "longitude": 124.209938
    },
    "CBQ": {
        "latitude": 4.976019859313970,
        "longitude": 8.347200393676760
    },
    "CBR": {
        "latitude": -35.3069,
        "longitude": 149.195007
    },
    "CBT": {
        "latitude": -12.4792,
        "longitude": 13.4869
    },
    "CBV": {
        "latitude": 15.469,
        "longitude": -90.4067
    },
    "CCC": {
        "latitude": 22.461000442500000,
        "longitude": -78.32839965820000
    },
    "CCE": {
        "latitude": 30.074293,
        "longitude": 31.84296
    },
    "CCF": {
        "latitude": 43.215999603271500,
        "longitude": 2.3063199520111100
    },
    "CCH": {
        "latitude": -46.5831,
        "longitude": -71.686323
    },
    "CCJ": {
        "latitude": 11.1368,
        "longitude": 75.955299
    },
    "CCK": {
        "latitude": -12.19134,
        "longitude": 96.833696
    },
    "CCL": {
        "latitude": -26.774999618530300,
        "longitude": 150.61700439453100
    },
    "CCM": {
        "latitude": -28.725743,
        "longitude": -49.424475
    },
    "CCP": {
        "latitude": -36.772701,
        "longitude": -73.063103
    },
    "CCS": {
        "latitude": 10.601194,
        "longitude": -66.991222
    },
    "CCU": {
        "latitude": 22.654699325561500,
        "longitude": 88.44670104980470
    },
    "CCY": {
        "latitude": 43.0726013184,
        "longitude": -92.6108016968
    },
    "CCZ": {
        "latitude": 25.41710090637210,
        "longitude": -77.88089752197270
    },
    "CDB": {
        "latitude": 55.2061,
        "longitude": -162.725006
    },
    "CDC": {
        "latitude": 37.70100021362310,
        "longitude": -113.0989990234380
    },
    "CDE": {
        "latitude": 41.1225,
        "longitude": 118.073889
    },
    "CDG": {
        "latitude": 49.012798,
        "longitude": 2.55
    },
    "CDJ": {
        "latitude": -8.34835,
        "longitude": -49.301498
    },
    "CDP": {
        "latitude": 14.513154,
        "longitude": 78.769183
    },
    "CDR": {
        "latitude": 42.837600708,
        "longitude": -103.095001221
    },
    "CDS": {
        "latitude": 34.4337997437,
        "longitude": -100.288002014
    },
    "CDT": {
        "latitude": 40.213889,
        "longitude": 0.073333
    },
    "CDU": {
        "latitude": -34.038338,
        "longitude": 150.686406
    },
    "CDV": {
        "latitude": 60.491798,
        "longitude": -145.477997
    },
    "CEB": {
        "latitude": 10.309261,
        "longitude": 123.97974
    },
    "CEC": {
        "latitude": 41.78020096,
        "longitude": -124.2369995
    },
    "CED": {
        "latitude": -32.13059997558590,
        "longitude": 133.7100067138670
    },
    "CEE": {
        "latitude": 59.273601532,
        "longitude": 38.015800476100000
    },
    "CEF": {
        "latitude": 42.194,
        "longitude": -72.534798
    },
    "CEG": {
        "latitude": 53.178101,
        "longitude": -2.97778
    },
    "CEI": {
        "latitude": 19.952299,
        "longitude": 99.882896
    },
    "CEK": {
        "latitude": 55.305801,
        "longitude": 61.5033
    },
    "CEN": {
        "latitude": 27.39259910583500,
        "longitude": -109.83300018310500
    },
    "CEQ": {
        "latitude": 43.542,
        "longitude": 6.95348
    },
    "CER": {
        "latitude": 49.65010070800780,
        "longitude": -1.4702800512313800
    },
    "CET": {
        "latitude": 47.08209991455080,
        "longitude": -0.8770639896392820
    },
    "CEW": {
        "latitude": 30.778799057,
        "longitude": -86.522102356
    },
    "CFE": {
        "latitude": 45.7867012024,
        "longitude": 3.1691699028
    },
    "CFG": {
        "latitude": 22.149999618530300,
        "longitude": -80.41419982910160
    },
    "CFK": {
        "latitude": 36.217166,
        "longitude": 1.342237
    },
    "CFN": {
        "latitude": 55.0442008972168,
        "longitude": -8.340999603271480
    },
    "CFR": {
        "latitude": 49.173302,
        "longitude": -0.45
    },
    "CFS": {
        "latitude": -30.320601,
        "longitude": 153.115997
    },
    "CFU": {
        "latitude": 39.601898193359400,
        "longitude": 19.911699295043900
    },
    "CGB": {
        "latitude": -15.6529,
        "longitude": -56.116699
    },
    "CGD": {
        "latitude": 28.9189,
        "longitude": 111.639999
    },
    "CGF": {
        "latitude": 41.5651016235,
        "longitude": -81.4863967896
    },
    "CGH": {
        "latitude": -23.627657,
        "longitude": -46.654601
    },
    "CGI": {
        "latitude": 37.2253,
        "longitude": -89.570801
    },
    "CGJ": {
        "latitude": -12.572799682617,
        "longitude": 27.893899917603
    },
    "CGK": {
        "latitude": -6.1255698204,
        "longitude": 106.65599823
    },
    "CGM": {
        "latitude": 9.253894,
        "longitude": 124.709115
    },
    "CGN": {
        "latitude": 50.865898,
        "longitude": 7.14274
    },
    "CGO": {
        "latitude": 34.526497,
        "longitude": 113.849165
    },
    "CGP": {
        "latitude": 22.249599,
        "longitude": 91.813301
    },
    "CGQ": {
        "latitude": 43.996201,
        "longitude": 125.684998
    },
    "CGR": {
        "latitude": -20.469998,
        "longitude": -54.673988
    },
    "CGY": {
        "latitude": 8.612203,
        "longitude": 124.456496
    },
    "CHA": {
        "latitude": 35.035301,
        "longitude": -85.203796
    },
    "CHC": {
        "latitude": -43.48939895629880,
        "longitude": 172.53199768066400
    },
    "CHG": {
        "latitude": 41.538101,
        "longitude": 120.434998
    },
    "CHH": {
        "latitude": -6.201809883117680,
        "longitude": -77.8561019897461
    },
    "CHM": {
        "latitude": -9.14961,
        "longitude": -78.523804
    },
    "CHO": {
        "latitude": 38.13859939575200,
        "longitude": -78.4529037475586
    },
    "CHQ": {
        "latitude": 35.531700134277300,
        "longitude": 24.149700164794900
    },
    "CHR": {
        "latitude": 46.860278,
        "longitude": 1.721111
    },
    "CHS": {
        "latitude": 32.898602,
        "longitude": -80.040497
    },
    "CHT": {
        "latitude": -43.81189,
        "longitude": -176.46514
    },
    "CHX": {
        "latitude": 9.458962,
        "longitude": -82.515062
    },
    "CIA": {
        "latitude": 41.7994,
        "longitude": 12.5949
    },
    "CID": {
        "latitude": 41.884701,
        "longitude": -91.7108
    },
    "CIF": {
        "latitude": 42.157708,
        "longitude": 118.839455
    },
    "CIJ": {
        "latitude": -11.040399551400000,
        "longitude": -68.7829971313
    },
    "CIS": {
        "latitude": -2.7681200504300000,
        "longitude": -171.710006714
    },
    "CIT": {
        "latitude": 42.364200592041000,
        "longitude": 69.47889709472660
    },
    "CIU": {
        "latitude": 46.25080108642580,
        "longitude": -84.47239685058590
    },
    "CIW": {
        "latitude": 12.699,
        "longitude": -61.3424
    },
    "CIX": {
        "latitude": -6.78748,
        "longitude": -79.828102
    },
    "CIY": {
        "latitude": 36.994601,
        "longitude": 14.607182
    },
    "CJA": {
        "latitude": -7.1391801834106400,
        "longitude": -78.4894027709961
    },
    "CJB": {
        "latitude": 11.029999733,
        "longitude": 77.0434036255
    },
    "CJC": {
        "latitude": -22.498199462890600,
        "longitude": -68.90360260009770
    },
    "CJJ": {
        "latitude": 36.717008,
        "longitude": 127.498741
    },
    "CJL": {
        "latitude": 35.886213,
        "longitude": 71.799922
    },
    "CJM": {
        "latitude": 10.7112,
        "longitude": 99.361702
    },
    "CJS": {
        "latitude": 31.63610076904300,
        "longitude": -106.42900085449200
    },
    "CJU": {
        "latitude": 33.512058,
        "longitude": 126.492548
    },
    "CKB": {
        "latitude": 39.2966,
        "longitude": -80.228104
    },
    "CKC": {
        "latitude": 49.41559982299810,
        "longitude": 31.99530029296880
    },
    "CKG": {
        "latitude": 29.712254,
        "longitude": 106.651895
    },
    "CKH": {
        "latitude": 70.62310028076170,
        "longitude": 147.90199279785200
    },
    "CKL": {
        "latitude": 55.8783,
        "longitude": 38.061699
    },
    "CKS": {
        "latitude": -6.117841,
        "longitude": -50.003372
    },
    "CKT": {
        "latitude": 36.50120162963870,
        "longitude": 61.06489944458010
    },
    "CKY": {
        "latitude": 9.57689,
        "longitude": -13.612
    },
    "CKZ": {
        "latitude": 40.1376991272,
        "longitude": 26.4267997742
    },
    "CLD": {
        "latitude": 33.1283,
        "longitude": -117.279999
    },
    "CLE": {
        "latitude": 41.4117012024,
        "longitude": -81.8498001099
    },
    "CLJ": {
        "latitude": 46.785198,
        "longitude": 23.686199
    },
    "CLL": {
        "latitude": 30.58860016,
        "longitude": -96.36380005
    },
    "CLM": {
        "latitude": 48.120201110839800,
        "longitude": -123.5
    },
    "CLN": {
        "latitude": -7.32044,
        "longitude": -47.458698
    },
    "CLO": {
        "latitude": 3.54322,
        "longitude": -76.3816
    },
    "CLQ": {
        "latitude": 19.277,
        "longitude": -103.577002
    },
    "CLT": {
        "latitude": 35.2140007019043,
        "longitude": -80.94309997558590
    },
    "CLU": {
        "latitude": 39.262386,
        "longitude": -85.895576
    },
    "CLY": {
        "latitude": 42.5244444,
        "longitude": 8.7930556
    },
    "CLZ": {
        "latitude": 8.92465591430664,
        "longitude": -67.4170913696289
    },
    "CMA": {
        "latitude": -28.030000686645500,
        "longitude": 145.6219940185550
    },
    "CMB": {
        "latitude": 7.180759906768800,
        "longitude": 79.88410186767580
    },
    "CMD": {
        "latitude": -34.624283,
        "longitude": 148.036641
    },
    "CME": {
        "latitude": 18.65369987487790,
        "longitude": -91.79900360107420
    },
    "CMF": {
        "latitude": 45.638099670410200,
        "longitude": 5.880229949951170
    },
    "CMG": {
        "latitude": -19.01193,
        "longitude": -57.672772
    },
    "CMH": {
        "latitude": 39.998001,
        "longitude": -82.891899
    },
    "CMI": {
        "latitude": 40.039819,
        "longitude": -88.276249
    },
    "CMN": {
        "latitude": 33.36750030517580,
        "longitude": -7.589970111846920
    },
    "CMQ": {
        "latitude": -22.773099899292000,
        "longitude": 147.62100219726600
    },
    "CMR": {
        "latitude": 48.109901428222700,
        "longitude": 7.359010219573980
    },
    "CMU": {
        "latitude": -6.024290084838870,
        "longitude": 144.9709930419920
    },
    "CMW": {
        "latitude": 21.420299530029300,
        "longitude": -77.84750366210940
    },
    "CMX": {
        "latitude": 47.168399810791000,
        "longitude": -88.48909759521480
    },
    "CNB": {
        "latitude": -30.980946,
        "longitude": 148.377833
    },
    "CND": {
        "latitude": 44.36220169067380,
        "longitude": 28.488300323486300
    },
    "CNF": {
        "latitude": -19.63571,
        "longitude": -43.966928
    },
    "CNG": {
        "latitude": 45.65829849243160,
        "longitude": -0.3174999952316280
    },
    "CNI": {
        "latitude": 39.266667,
        "longitude": 122.666944
    },
    "CNJ": {
        "latitude": -20.668600082400000,
        "longitude": 140.503997803
    },
    "CNL": {
        "latitude": 57.503502,
        "longitude": 10.2294
    },
    "CNM": {
        "latitude": 32.337501525878900,
        "longitude": -104.26300048828100
    },
    "CNN": {
        "latitude": 11.918614,
        "longitude": 75.547211
    },
    "CNQ": {
        "latitude": -27.4455,
        "longitude": -58.7619
    },
    "CNR": {
        "latitude": -26.332500457763700,
        "longitude": -70.6072998046875
    },
    "CNS": {
        "latitude": -16.885799408,
        "longitude": 145.755004883
    },
    "CNU": {
        "latitude": 37.668173,
        "longitude": -95.486727
    },
    "CNX": {
        "latitude": 18.766799926800000,
        "longitude": 98.962600708
    },
    "COC": {
        "latitude": -31.2969,
        "longitude": -57.9966
    },
    "COD": {
        "latitude": 44.520198822,
        "longitude": -109.024002075
    },
    "COE": {
        "latitude": 47.77429962,
        "longitude": -116.8199997
    },
    "COF": {
        "latitude": 28.2349,
        "longitude": -80.6101
    },
    "COJ": {
        "latitude": -31.3325,
        "longitude": 149.266998
    },
    "COK": {
        "latitude": 10.152,
        "longitude": 76.401901
    },
    "CON": {
        "latitude": 43.20270157,
        "longitude": -71.50229645
    },
    "COO": {
        "latitude": 6.357230186462400,
        "longitude": 2.384350061416630
    },
    "COQ": {
        "latitude": 48.13570022583010,
        "longitude": 114.64600372314500
    },
    "COR": {
        "latitude": -31.323601,
        "longitude": -64.208
    },
    "COS": {
        "latitude": 38.805801,
        "longitude": -104.700996
    },
    "COU": {
        "latitude": 38.8181,
        "longitude": -92.219597
    },
    "CPC": {
        "latitude": -40.075401,
        "longitude": -71.137299
    },
    "CPD": {
        "latitude": -29.038312,
        "longitude": 134.722166
    },
    "CPE": {
        "latitude": 19.816799163800000,
        "longitude": -90.5002975464
    },
    "CPH": {
        "latitude": 55.617900848389,
        "longitude": 12.656000137329
    },
    "CPO": {
        "latitude": -27.2611999512,
        "longitude": -70.7791976929
    },
    "CPR": {
        "latitude": 42.908001,
        "longitude": -106.463997
    },
    "CPT": {
        "latitude": -33.9648017883,
        "longitude": 18.6016998291
    },
    "CPV": {
        "latitude": -7.269662,
        "longitude": -35.896057
    },
    "CQD": {
        "latitude": 32.2971992493,
        "longitude": 50.842201232900000
    },
    "CQF": {
        "latitude": 50.962101,
        "longitude": 1.95476
    },
    "CQM": {
        "latitude": 38.856479,
        "longitude": -3.969944
    },
    "CQW": {
        "latitude": 29.465658,
        "longitude": 107.693664
    },
    "CRA": {
        "latitude": 44.3181,
        "longitude": 23.888599
    },
    "CRC": {
        "latitude": 4.75818,
        "longitude": -75.9557
    },
    "CRD": {
        "latitude": -45.7853,
        "longitude": -67.4655
    },
    "CRE": {
        "latitude": 33.8116989136,
        "longitude": -78.72389984130000
    },
    "CRG": {
        "latitude": 30.3362998962,
        "longitude": -81.51439666750000
    },
    "CRI": {
        "latitude": 22.7456,
        "longitude": -74.182404
    },
    "CRK": {
        "latitude": 15.186,
        "longitude": 120.559998
    },
    "CRL": {
        "latitude": 50.459202,
        "longitude": 4.45382
    },
    "CRM": {
        "latitude": 12.50161,
        "longitude": 124.635258
    },
    "CRP": {
        "latitude": 27.770399,
        "longitude": -97.501198
    },
    "CRQ": {
        "latitude": -17.6523,
        "longitude": -39.253101
    },
    "CRV": {
        "latitude": 38.9972,
        "longitude": 17.0802
    },
    "CRW": {
        "latitude": 38.3731,
        "longitude": -81.593201
    },
    "CRZ": {
        "latitude": 38.930662,
        "longitude": 63.563982
    },
    "CSB": {
        "latitude": 45.41999816894530,
        "longitude": 22.253299713134800
    },
    "CSF": {
        "latitude": 49.253501892089800,
        "longitude": 2.5191400051116900
    },
    "CSG": {
        "latitude": 32.516300201416000,
        "longitude": -84.93890380859380
    },
    "CSK": {
        "latitude": 12.39533,
        "longitude": -16.748
    },
    "CSV": {
        "latitude": 35.9513015747,
        "longitude": -85.08499908450000
    },
    "CSX": {
        "latitude": 28.189199,
        "longitude": 113.220001
    },
    "CSY": {
        "latitude": 56.090301513671900,
        "longitude": 47.3473014831543
    },
    "CTA": {
        "latitude": 37.466801,
        "longitude": 15.0664
    },
    "CTB": {
        "latitude": 48.608657,
        "longitude": -112.378183
    },
    "CTC": {
        "latitude": -28.5956001282,
        "longitude": -65.751701355
    },
    "CTD": {
        "latitude": 7.98784,
        "longitude": -80.409837
    },
    "CTG": {
        "latitude": 10.4424,
        "longitude": -75.513
    },
    "CTL": {
        "latitude": -26.4132995605,
        "longitude": 146.261993408
    },
    "CTM": {
        "latitude": 18.50469970703130,
        "longitude": -88.32679748535160
    },
    "CTN": {
        "latitude": -15.443649,
        "longitude": 145.183221
    },
    "CTS": {
        "latitude": 42.7752,
        "longitude": 141.692001
    },
    "CTT": {
        "latitude": 43.252498626709000,
        "longitude": 5.785190105438230
    },
    "CTU": {
        "latitude": 30.558257,
        "longitude": 103.945966
    },
    "CUA": {
        "latitude": 25.053801,
        "longitude": -111.614998
    },
    "CUB": {
        "latitude": 33.970500946,
        "longitude": -80.9952011108
    },
    "CUC": {
        "latitude": 7.92757,
        "longitude": -72.5115
    },
    "CUE": {
        "latitude": -2.88947,
        "longitude": -78.984398
    },
    "CUF": {
        "latitude": 44.547001,
        "longitude": 7.62322
    },
    "CUK": {
        "latitude": 17.735015,
        "longitude": -88.032862
    },
    "CUL": {
        "latitude": 24.76504,
        "longitude": -107.475228
    },
    "CUM": {
        "latitude": 10.450332641601600,
        "longitude": -64.1304702758789
    },
    "CUN": {
        "latitude": 21.036500930800000,
        "longitude": -86.8770980835
    },
    "CUP": {
        "latitude": 10.660014152526900,
        "longitude": -63.261680603027300
    },
    "CUQ": {
        "latitude": -13.761133,
        "longitude": 143.113311
    },
    "CUR": {
        "latitude": 12.1889,
        "longitude": -68.959801
    },
    "CUT": {
        "latitude": -38.939701080300000,
        "longitude": -69.2646026611
    },
    "CUU": {
        "latitude": 28.702899932900000,
        "longitude": -105.964996338
    },
    "CUZ": {
        "latitude": -13.535699844400000,
        "longitude": -71.9387969971
    },
    "CVC": {
        "latitude": -33.70970153808590,
        "longitude": 136.5050048828130
    },
    "CVE": {
        "latitude": 9.40092,
        "longitude": -75.6913
    },
    "CVG": {
        "latitude": 39.048801,
        "longitude": -84.667801
    },
    "CVJ": {
        "latitude": 18.834801,
        "longitude": -99.261299
    },
    "CVM": {
        "latitude": 23.7033004761,
        "longitude": -98.9564971924
    },
    "CVO": {
        "latitude": 44.49720001,
        "longitude": -123.2900009
    },
    "CVQ": {
        "latitude": -24.880091,
        "longitude": 113.670752
    },
    "CVS": {
        "latitude": 34.382801,
        "longitude": -103.321999
    },
    "CVT": {
        "latitude": 52.3697013855,
        "longitude": -1.4797199964500000
    },
    "CWA": {
        "latitude": 44.7775993347,
        "longitude": -89.6668014526
    },
    "CWB": {
        "latitude": -25.5285,
        "longitude": -49.1758
    },
    "CWC": {
        "latitude": 48.259300231933600,
        "longitude": 25.98080062866210
    },
    "CWJ": {
        "latitude": 23.276331,
        "longitude": 99.373169
    },
    "CWL": {
        "latitude": 51.396702,
        "longitude": -3.34333
    },
    "CWT": {
        "latitude": -33.846894,
        "longitude": 148.648007
    },
    "CWW": {
        "latitude": -35.994701,
        "longitude": 146.356995
    },
    "CXA": {
        "latitude": 7.625510215759280,
        "longitude": -66.16280364990230
    },
    "CXB": {
        "latitude": 21.452199935913100,
        "longitude": 91.96389770507810
    },
    "CXI": {
        "latitude": 1.986278,
        "longitude": -157.350011
    },
    "CXJ": {
        "latitude": -29.197183,
        "longitude": -51.187647
    },
    "CXO": {
        "latitude": 30.351801,
        "longitude": -95.414497
    },
    "CXP": {
        "latitude": -7.64506,
        "longitude": 109.033997
    },
    "CXR": {
        "latitude": 11.9982,
        "longitude": 109.219002
    },
    "CYA": {
        "latitude": 18.271099090576200,
        "longitude": -73.78829956054690
    },
    "CYB": {
        "latitude": 19.687,
        "longitude": -79.882797
    },
    "CYC": {
        "latitude": 17.683792,
        "longitude": -88.044985
    },
    "CYG": {
        "latitude": -36.18280029296880,
        "longitude": 147.88800048828100
    },
    "CYI": {
        "latitude": 23.46179962158200,
        "longitude": 120.39299774169900
    },
    "CYO": {
        "latitude": 21.6165008545,
        "longitude": -81.5459976196
    },
    "CYP": {
        "latitude": 12.072699546814000,
        "longitude": 124.54499816894500
    },
    "CYW": {
        "latitude": 20.546,
        "longitude": -100.887001
    },
    "CYX": {
        "latitude": 68.7406005859375,
        "longitude": 161.33799743652300
    },
    "CYZ": {
        "latitude": 16.9298992157,
        "longitude": 121.752998352
    },
    "CZA": {
        "latitude": 20.6413002014,
        "longitude": -88.4461975098
    },
    "CZE": {
        "latitude": 11.41494369506840,
        "longitude": -69.68090057373050
    },
    "CZF": {
        "latitude": 61.78030014,
        "longitude": -166.0390015
    },
    "CZH": {
        "latitude": 18.382200241088900,
        "longitude": -88.41190338134770
    },
    "CZL": {
        "latitude": 36.2760009765625,
        "longitude": 6.620389938354490
    },
    "CZM": {
        "latitude": 20.52239990234380,
        "longitude": -86.92559814453130
    },
    "CZS": {
        "latitude": -7.59991,
        "longitude": -72.769501
    },
    "CZU": {
        "latitude": 9.33274,
        "longitude": -75.2856
    },
    "CZX": {
        "latitude": 31.919701,
        "longitude": 119.778999
    },
    "DAA": {
        "latitude": 38.715000152600000,
        "longitude": -77.1809997559
    },
    "DAB": {
        "latitude": 29.179899,
        "longitude": -81.058098
    },
    "DAC": {
        "latitude": 23.843347,
        "longitude": 90.397783
    },
    "DAD": {
        "latitude": 16.0439,
        "longitude": 108.198997
    },
    "DAG": {
        "latitude": 34.85369873,
        "longitude": -116.7870026
    },
    "DAL": {
        "latitude": 32.847099,
        "longitude": -96.851799
    },
    "DAM": {
        "latitude": 33.4114990234375,
        "longitude": 36.51559829711910
    },
    "DAN": {
        "latitude": 36.572899,
        "longitude": -79.336098
    },
    "DAR": {
        "latitude": -6.87811,
        "longitude": 39.202599
    },
    "DAU": {
        "latitude": -9.08675956726,
        "longitude": 143.207992554
    },
    "DAV": {
        "latitude": 8.391,
        "longitude": -82.434998
    },
    "DAY": {
        "latitude": 39.902401,
        "longitude": -84.219398
    },
    "DBB": {
        "latitude": 30.930326,
        "longitude": 28.463076
    },
    "DBC": {
        "latitude": 45.505278,
        "longitude": 123.019722
    },
    "DBD": {
        "latitude": 23.833999633789100,
        "longitude": 86.42530059814450
    },
    "DBO": {
        "latitude": -32.2167015076,
        "longitude": 148.574996948
    },
    "DBQ": {
        "latitude": 42.402,
        "longitude": -90.709503
    },
    "DBV": {
        "latitude": 42.5614013671875,
        "longitude": 18.268199920654300
    },
    "DCA": {
        "latitude": 38.8521,
        "longitude": -77.037697
    },
    "DCF": {
        "latitude": 15.336693,
        "longitude": -61.392108
    },
    "DCI": {
        "latitude": 39.354198,
        "longitude": 8.97248
    },
    "DCM": {
        "latitude": 43.55630111694340,
        "longitude": 2.289180040359500
    },
    "DCN": {
        "latitude": -17.5814,
        "longitude": 123.828003
    },
    "DCT": {
        "latitude": 22.181800842285200,
        "longitude": -75.72949981689450
    },
    "DCY": {
        "latitude": 29.31632,
        "longitude": 100.060317
    },
    "DDC": {
        "latitude": 37.76340103149410,
        "longitude": -99.9655990600586
    },
    "DDG": {
        "latitude": 40.0247,
        "longitude": 124.286003
    },
    "DDR": {
        "latitude": 28.604567,
        "longitude": 86.798
    },
    "DEA": {
        "latitude": 29.961000442504900,
        "longitude": 70.48590087890630
    },
    "DEB": {
        "latitude": 47.488899,
        "longitude": 21.615299
    },
    "DEC": {
        "latitude": 39.834598541259800,
        "longitude": -88.8656997680664
    },
    "DED": {
        "latitude": 30.189243,
        "longitude": 78.176651
    },
    "DEF": {
        "latitude": 32.434399,
        "longitude": 48.397598
    },
    "DEL": {
        "latitude": 28.55563,
        "longitude": 77.09519
    },
    "DEN": {
        "latitude": 39.861698150635,
        "longitude": -104.672996521
    },
    "DET": {
        "latitude": 42.40919876,
        "longitude": -83.00990295
    },
    "DEZ": {
        "latitude": 35.2854,
        "longitude": 40.175999
    },
    "DFW": {
        "latitude": 32.896801,
        "longitude": -97.038002
    },
    "DGA": {
        "latitude": 16.98251,
        "longitude": -88.230988
    },
    "DGE": {
        "latitude": -32.564794,
        "longitude": 149.609452
    },
    "DGO": {
        "latitude": 24.1242008209,
        "longitude": -104.527999878
    },
    "DGP": {
        "latitude": 55.944721,
        "longitude": 26.665001
    },
    "DGT": {
        "latitude": 9.334183,
        "longitude": 123.30191
    },
    "DHA": {
        "latitude": 26.2654,
        "longitude": 50.152
    },
    "DHF": {
        "latitude": 24.248199462900000,
        "longitude": 54.547698974600000
    },
    "DHM": {
        "latitude": 32.1651,
        "longitude": 76.263397
    },
    "DHN": {
        "latitude": 31.321300506591800,
        "longitude": -85.44960021972660
    },
    "DHR": {
        "latitude": 52.92340087890630,
        "longitude": 4.780620098114010
    },
    "DHT": {
        "latitude": 36.0225982666,
        "longitude": -102.54699707
    },
    "DIA": {
        "latitude": 25.261101,
        "longitude": 51.565102
    },
    "DIB": {
        "latitude": 27.4839000702,
        "longitude": 95.0168991089
    },
    "DIE": {
        "latitude": -12.3494,
        "longitude": 49.291698
    },
    "DIG": {
        "latitude": 27.7936,
        "longitude": 99.6772
    },
    "DIJ": {
        "latitude": 47.268902,
        "longitude": 5.09
    },
    "DIK": {
        "latitude": 46.7974014282,
        "longitude": -102.802001953
    },
    "DIL": {
        "latitude": -8.546562,
        "longitude": 125.524507
    },
    "DIN": {
        "latitude": 21.3974990845,
        "longitude": 103.008003235
    },
    "DIR": {
        "latitude": 9.624699592590330,
        "longitude": 41.85419845581060
    },
    "DIS": {
        "latitude": -4.20635,
        "longitude": 12.6599
    },
    "DIY": {
        "latitude": 37.893902,
        "longitude": 40.201
    },
    "DJE": {
        "latitude": 33.875,
        "longitude": 10.7755
    },
    "DJG": {
        "latitude": 24.292801,
        "longitude": 9.45244
    },
    "DJJ": {
        "latitude": -2.579627,
        "longitude": 140.519857
    },
    "DJO": {
        "latitude": 6.792809963226320,
        "longitude": -6.473189830780030
    },
    "DKR": {
        "latitude": 14.7397,
        "longitude": -17.4902
    },
    "DKS": {
        "latitude": 73.51780700683590,
        "longitude": 80.37966918945310
    },
    "DLA": {
        "latitude": 4.0060801506,
        "longitude": 9.719479560850000
    },
    "DLC": {
        "latitude": 38.965698,
        "longitude": 121.539001
    },
    "DLE": {
        "latitude": 47.042686,
        "longitude": 5.435063
    },
    "DLF": {
        "latitude": 29.359501,
        "longitude": -100.778002
    },
    "DLG": {
        "latitude": 59.04470062,
        "longitude": -158.5050049
    },
    "DLH": {
        "latitude": 46.842098,
        "longitude": -92.193604
    },
    "DLI": {
        "latitude": 11.75,
        "longitude": 108.366997
    },
    "DLM": {
        "latitude": 36.7131004333,
        "longitude": 28.7924995422
    },
    "DLS": {
        "latitude": 45.620979,
        "longitude": -121.170777
    },
    "DLU": {
        "latitude": 25.649401,
        "longitude": 100.319
    },
    "DLZ": {
        "latitude": 43.608628,
        "longitude": 104.367734
    },
    "DMA": {
        "latitude": 32.1665000916,
        "longitude": -110.883003235
    },
    "DMB": {
        "latitude": 42.853599548339800,
        "longitude": 71.30359649658200
    },
    "DME": {
        "latitude": 55.40879821777340,
        "longitude": 37.90629959106450
    },
    "DMK": {
        "latitude": 13.9125995636,
        "longitude": 100.607002258
    },
    "DMM": {
        "latitude": 26.471200942993200,
        "longitude": 49.79790115356450
    },
    "DMN": {
        "latitude": 32.262298584,
        "longitude": -107.721000671
    },
    "DMU": {
        "latitude": 25.883899688700000,
        "longitude": 93.77110290530000
    },
    "DNA": {
        "latitude": 26.351667,
        "longitude": 127.769444
    },
    "DND": {
        "latitude": 56.45249938964840,
        "longitude": -3.025830030441280
    },
    "DNH": {
        "latitude": 40.161098,
        "longitude": 94.809196
    },
    "DNK": {
        "latitude": 48.357201,
        "longitude": 35.100601
    },
    "DNL": {
        "latitude": 33.4664993286,
        "longitude": -82.0393981934
    },
    "DNQ": {
        "latitude": -35.5593986511,
        "longitude": 144.945999146
    },
    "DNR": {
        "latitude": 48.58769989013670,
        "longitude": -2.0799601078033400
    },
    "DNZ": {
        "latitude": 37.7855987549,
        "longitude": 29.7012996674
    },
    "DOD": {
        "latitude": -6.17044,
        "longitude": 35.752602
    },
    "DOG": {
        "latitude": 19.153900146500000,
        "longitude": 30.430099487300000
    },
    "DOH": {
        "latitude": 25.273056,
        "longitude": 51.608056
    },
    "DOL": {
        "latitude": 49.365299,
        "longitude": 0.154306
    },
    "DOM": {
        "latitude": 15.547,
        "longitude": -61.299999
    },
    "DOV": {
        "latitude": 39.129501,
        "longitude": -75.466003
    },
    "DOY": {
        "latitude": 37.5085983276,
        "longitude": 118.788002014
    },
    "DPA": {
        "latitude": 41.90779877,
        "longitude": -88.24859619
    },
    "DPL": {
        "latitude": 8.601983,
        "longitude": 123.341875
    },
    "DPO": {
        "latitude": -41.1697006226,
        "longitude": 146.429992676
    },
    "DPS": {
        "latitude": -8.74817,
        "longitude": 115.167
    },
    "DQM": {
        "latitude": 19.501944,
        "longitude": 57.634167
    },
    "DRA": {
        "latitude": 36.6194,
        "longitude": -116.032997
    },
    "DRB": {
        "latitude": -17.37193,
        "longitude": 123.66221
    },
    "DRG": {
        "latitude": 66.069603,
        "longitude": -162.766006
    },
    "DRI": {
        "latitude": 30.831699,
        "longitude": -93.339897
    },
    "DRN": {
        "latitude": -28.587912,
        "longitude": 148.217161
    },
    "DRS": {
        "latitude": 51.134123,
        "longitude": 13.767831
    },
    "DRT": {
        "latitude": 29.3742008209,
        "longitude": -100.927001953
    },
    "DRW": {
        "latitude": -12.41497,
        "longitude": 130.88185
    },
    "DSA": {
        "latitude": 53.480538,
        "longitude": -1.010656
    },
    "DSK": {
        "latitude": 31.909400939941400,
        "longitude": 70.89659881591800
    },
    "DSM": {
        "latitude": 41.534,
        "longitude": -93.663101
    },
    "DSN": {
        "latitude": 39.49,
        "longitude": 109.861388889
    },
    "DSO": {
        "latitude": 39.745201,
        "longitude": 127.473999
    },
    "DSS": {
        "latitude": 14.67,
        "longitude": -17.073333
    },
    "DTE": {
        "latitude": 14.129199981689500,
        "longitude": 122.9800033569340
    },
    "DTM": {
        "latitude": 51.518299,
        "longitude": 7.61224
    },
    "DTU": {
        "latitude": 48.441037,
        "longitude": 126.128374
    },
    "DTW": {
        "latitude": 42.212398529052700,
        "longitude": -83.35340118408200
    },
    "DUB": {
        "latitude": 53.421299,
        "longitude": -6.27007
    },
    "DUD": {
        "latitude": -45.928101,
        "longitude": 170.197998
    },
    "DUE": {
        "latitude": -7.400889873504640,
        "longitude": 20.818500518798800
    },
    "DUG": {
        "latitude": 31.4689998627,
        "longitude": -109.603996277
    },
    "DUJ": {
        "latitude": 41.17829895,
        "longitude": -78.8986969
    },
    "DUM": {
        "latitude": 1.609114,
        "longitude": 101.433492
    },
    "DUR": {
        "latitude": -29.6144444444,
        "longitude": 31.1197222222
    },
    "DUS": {
        "latitude": 51.289501,
        "longitude": 6.76678
    },
    "DUT": {
        "latitude": 53.89881,
        "longitude": -166.544996
    },
    "DVO": {
        "latitude": 7.12552,
        "longitude": 125.646004
    },
    "DWA": {
        "latitude": -12.517527,
        "longitude": 34.131877
    },
    "DWC": {
        "latitude": 24.896356,
        "longitude": 55.161389
    },
    "DWD": {
        "latitude": 24.4499,
        "longitude": 44.121201
    },
    "DXB": {
        "latitude": 25.2527999878,
        "longitude": 55.3643989563
    },
    "DYA": {
        "latitude": -22.62220001220700,
        "longitude": 148.36399841308600
    },
    "DYR": {
        "latitude": 64.734902,
        "longitude": 177.740997
    },
    "DYS": {
        "latitude": 32.420799,
        "longitude": -99.854599
    },
    "DYU": {
        "latitude": 38.543300628700000,
        "longitude": 68.8249969482
    },
    "DZA": {
        "latitude": -12.809319,
        "longitude": 45.281815
    },
    "DZN": {
        "latitude": 47.708953,
        "longitude": 67.738094
    },
    "DZO": {
        "latitude": -33.3588981628418,
        "longitude": -56.49919891357420
    },
    "EAM": {
        "latitude": 17.611401,
        "longitude": 44.419201
    },
    "EAR": {
        "latitude": 40.727001,
        "longitude": -99.006798
    },
    "EAS": {
        "latitude": 43.356499,
        "longitude": -1.79061
    },
    "EAT": {
        "latitude": 47.3988990784,
        "longitude": -120.207000732
    },
    "EAU": {
        "latitude": 44.86579895019530,
        "longitude": -91.48429870605470
    },
    "EBA": {
        "latitude": 42.7603,
        "longitude": 10.2394
    },
    "EBB": {
        "latitude": 0.042386,
        "longitude": 32.443501
    },
    "EBD": {
        "latitude": 13.153200149536100,
        "longitude": 30.23270034790040
    },
    "EBG": {
        "latitude": 7.59647,
        "longitude": -74.8089
    },
    "EBJ": {
        "latitude": 55.525902,
        "longitude": 8.5534
    },
    "EBL": {
        "latitude": 36.23759841918950,
        "longitude": 43.963199615478500
    },
    "EBM": {
        "latitude": 31.704299926757800,
        "longitude": 9.254619598388670
    },
    "EBU": {
        "latitude": 45.54059982299810,
        "longitude": 4.296390056610110
    },
    "ECG": {
        "latitude": 36.260601,
        "longitude": -76.174599
    },
    "ECH": {
        "latitude": -36.15719985961910,
        "longitude": 144.76199340820300
    },
    "ECN": {
        "latitude": 35.154701232910200,
        "longitude": 33.49610137939450
    },
    "ECP": {
        "latitude": 30.357106,
        "longitude": -85.795414
    },
    "ECV": {
        "latitude": 40.370701,
        "longitude": -3.78514
    },
    "EDF": {
        "latitude": 61.251709,
        "longitude": -149.807097
    },
    "EDI": {
        "latitude": 55.950145,
        "longitude": -3.372288
    },
    "EDL": {
        "latitude": 0.4044579863548280,
        "longitude": 35.23889923095700
    },
    "EDM": {
        "latitude": 46.701900482177700,
        "longitude": -1.3786300420761100
    },
    "EDO": {
        "latitude": 39.5546,
        "longitude": 27.0138
    },
    "EDW": {
        "latitude": 34.905399,
        "longitude": -117.884003
    },
    "EEA": {
        "latitude": -27.634128,
        "longitude": -50.358253
    },
    "EED": {
        "latitude": 34.7663002014,
        "longitude": -114.623001099
    },
    "EEN": {
        "latitude": 42.898399,
        "longitude": -72.270798
    },
    "EES": {
        "latitude": 23.989802,
        "longitude": 35.465047
    },
    "EFD": {
        "latitude": 29.607299804700000,
        "longitude": -95.1587982178
    },
    "EFL": {
        "latitude": 38.12009811401370,
        "longitude": 20.500499725341800
    },
    "EGC": {
        "latitude": 44.82529830932620,
        "longitude": 0.5186110138893130
    },
    "EGE": {
        "latitude": 39.64260101,
        "longitude": -106.9179993
    },
    "EGH": {
        "latitude": 31.078138,
        "longitude": 34.153131
    },
    "EGI": {
        "latitude": 30.65040016,
        "longitude": -86.52290344
    },
    "EGO": {
        "latitude": 50.643798828125,
        "longitude": 36.5900993347168
    },
    "EGS": {
        "latitude": 65.2833023071289,
        "longitude": -14.401399612426800
    },
    "EGX": {
        "latitude": 58.184386,
        "longitude": -157.374873
    },
    "EHL": {
        "latitude": -41.9431991577,
        "longitude": -71.5323028564
    },
    "EHM": {
        "latitude": 58.646400451700000,
        "longitude": -162.06300354
    },
    "EIB": {
        "latitude": 50.991604,
        "longitude": 10.47973
    },
    "EIE": {
        "latitude": 58.47420120239260,
        "longitude": 92.11250305175780
    },
    "EIK": {
        "latitude": 46.68,
        "longitude": 38.21
    },
    "EIL": {
        "latitude": 64.66570282,
        "longitude": -147.102005
    },
    "EIN": {
        "latitude": 51.4500999451,
        "longitude": 5.37452983856
    },
    "EIS": {
        "latitude": 18.445492,
        "longitude": -64.541707
    },
    "EJA": {
        "latitude": 7.02433,
        "longitude": -73.8068
    },
    "EJH": {
        "latitude": 26.198601,
        "longitude": 36.476398
    },
    "EKA": {
        "latitude": 40.803398132300000,
        "longitude": -124.112998962
    },
    "EKB": {
        "latitude": 51.590999603271500,
        "longitude": 75.21499633789060
    },
    "EKN": {
        "latitude": 38.889759,
        "longitude": -79.857651
    },
    "EKO": {
        "latitude": 40.82490158081060,
        "longitude": -115.79199981689500
    },
    "EKT": {
        "latitude": 59.35110092163090,
        "longitude": 16.70840072631840
    },
    "ELB": {
        "latitude": 9.04554,
        "longitude": -73.9749
    },
    "ELC": {
        "latitude": -12.019399642900000,
        "longitude": 135.570999146
    },
    "ELD": {
        "latitude": 33.221001,
        "longitude": -92.813301
    },
    "ELF": {
        "latitude": 13.614899635314900,
        "longitude": 25.324600219726600
    },
    "ELG": {
        "latitude": 30.580732,
        "longitude": 2.861595
    },
    "ELH": {
        "latitude": 25.474899292,
        "longitude": -76.6835021973
    },
    "ELM": {
        "latitude": 42.1599006652832,
        "longitude": -76.8916015625
    },
    "ELP": {
        "latitude": 31.80719948,
        "longitude": -106.3779984
    },
    "ELQ": {
        "latitude": 26.302799224853500,
        "longitude": 43.77439880371090
    },
    "ELS": {
        "latitude": -33.035599,
        "longitude": 27.825899
    },
    "ELU": {
        "latitude": 33.5113983154,
        "longitude": 6.77679014206
    },
    "ELY": {
        "latitude": 39.29970169,
        "longitude": -114.8420029
    },
    "EMA": {
        "latitude": 52.8311,
        "longitude": -1.32806
    },
    "EMD": {
        "latitude": -23.5674991608,
        "longitude": 148.179000854
    },
    "EMK": {
        "latitude": 62.78609848,
        "longitude": -164.4909973
    },
    "EML": {
        "latitude": 47.092444,
        "longitude": 8.305184
    },
    "ENA": {
        "latitude": 60.57310104370120,
        "longitude": -151.2449951171880
    },
    "ENC": {
        "latitude": 48.692100524902300,
        "longitude": 6.230460166931150
    },
    "END": {
        "latitude": 36.339199,
        "longitude": -97.916496
    },
    "ENF": {
        "latitude": 68.362602233887,
        "longitude": 23.424299240112
    },
    "ENH": {
        "latitude": 30.320299,
        "longitude": 109.485001
    },
    "ENK": {
        "latitude": 54.398899,
        "longitude": -7.65167
    },
    "ENN": {
        "latitude": 64.548772,
        "longitude": -149.074516
    },
    "ENS": {
        "latitude": 52.275833,
        "longitude": 6.889167
    },
    "ENU": {
        "latitude": 6.474269866943360,
        "longitude": 7.561960220336910
    },
    "ENV": {
        "latitude": 40.7187004089,
        "longitude": -114.03099823
    },
    "ENW": {
        "latitude": 42.59569931,
        "longitude": -87.92780304
    },
    "ENY": {
        "latitude": 36.479413,
        "longitude": 109.464083
    },
    "EOH": {
        "latitude": 6.220549,
        "longitude": -75.590582
    },
    "EOI": {
        "latitude": 59.19060134887700,
        "longitude": -2.7722198963165300
    },
    "EOR": {
        "latitude": 6.71573,
        "longitude": -61.638786
    },
    "EOZ": {
        "latitude": 7.0833330154418900,
        "longitude": -69.53333282470700
    },
    "EPA": {
        "latitude": -34.6099,
        "longitude": -58.6126
    },
    "EPL": {
        "latitude": 48.325001,
        "longitude": 6.06998
    },
    "EPR": {
        "latitude": -33.684399,
        "longitude": 121.822998
    },
    "EPU": {
        "latitude": 58.41899871826170,
        "longitude": 24.47279930114750
    },
    "EQS": {
        "latitude": -42.908000946,
        "longitude": -71.139503479
    },
    "ERC": {
        "latitude": 39.7102012634,
        "longitude": 39.527000427200000
    },
    "ERF": {
        "latitude": 50.979801177978500,
        "longitude": 10.958100318908700
    },
    "ERH": {
        "latitude": 31.9475002289,
        "longitude": -4.39833021164
    },
    "ERI": {
        "latitude": 42.083127,
        "longitude": -80.173867
    },
    "ERL": {
        "latitude": 43.4225,
        "longitude": 112.096667
    },
    "ERS": {
        "latitude": -22.612199783325200,
        "longitude": 17.080400466918900
    },
    "ERZ": {
        "latitude": 39.956501,
        "longitude": 41.1702
    },
    "ESB": {
        "latitude": 40.128101348900000,
        "longitude": 32.995098114
    },
    "ESF": {
        "latitude": 31.394266,
        "longitude": -92.294082
    },
    "ESG": {
        "latitude": -22.049999237060500,
        "longitude": -60.619998931884800
    },
    "ESH": {
        "latitude": 50.835602,
        "longitude": -0.297222
    },
    "ESK": {
        "latitude": 39.7840995789,
        "longitude": 30.582099914600000
    },
    "ESL": {
        "latitude": 46.3739013671875,
        "longitude": 44.33089828491210
    },
    "ESR": {
        "latitude": -26.311100006103500,
        "longitude": -69.76519775390630
    },
    "ESU": {
        "latitude": 31.397499,
        "longitude": -9.68167
    },
    "ETM": {
        "latitude": 29.727009,
        "longitude": 35.014116
    },
    "ETR": {
        "latitude": -3.441986,
        "longitude": -79.996957
    },
    "ETZ": {
        "latitude": 48.9821014404,
        "longitude": 6.25131988525
    },
    "EUG": {
        "latitude": 44.12459945678710,
        "longitude": -123.21199798584000
    },
    "EUN": {
        "latitude": 27.142467,
        "longitude": -13.224947
    },
    "EUQ": {
        "latitude": 10.766644,
        "longitude": 121.932506
    },
    "EUX": {
        "latitude": 17.49650001525880,
        "longitude": -62.979400634765600
    },
    "EVE": {
        "latitude": 68.491302490234,
        "longitude": 16.678100585938
    },
    "EVG": {
        "latitude": 62.047798,
        "longitude": 14.4229
    },
    "EVN": {
        "latitude": 40.1473007202,
        "longitude": 44.3959007263
    },
    "EVV": {
        "latitude": 38.0369987488,
        "longitude": -87.5324020386
    },
    "EVW": {
        "latitude": 41.27479935,
        "longitude": -111.0350037
    },
    "EVX": {
        "latitude": 49.02870178222660,
        "longitude": 1.2198599576950100
    },
    "EWB": {
        "latitude": 41.67610168457030,
        "longitude": -70.95690155029300
    },
    "EWN": {
        "latitude": 35.0730018616,
        "longitude": -77.04290008540000
    },
    "EWR": {
        "latitude": 40.692501,
        "longitude": -74.168701
    },
    "EXT": {
        "latitude": 50.734402,
        "longitude": -3.41389
    },
    "EYK": {
        "latitude": 63.686901,
        "longitude": 66.698601
    },
    "EYP": {
        "latitude": 5.31911,
        "longitude": -72.384
    },
    "EYW": {
        "latitude": 24.556101,
        "longitude": -81.759598
    },
    "EZE": {
        "latitude": -34.8222,
        "longitude": -58.5358
    },
    "EZS": {
        "latitude": 38.597974,
        "longitude": 39.28348
    },
    "EZV": {
        "latitude": 63.92100143432620,
        "longitude": 65.03050231933590
    },
    "FAB": {
        "latitude": 51.2757987976,
        "longitude": -0.776332974434
    },
    "FAE": {
        "latitude": 62.063256,
        "longitude": -7.275782
    },
    "FAF": {
        "latitude": 37.1325,
        "longitude": -76.608803
    },
    "FAI": {
        "latitude": 64.81510162,
        "longitude": -147.8560028
    },
    "FAO": {
        "latitude": 37.0144004822,
        "longitude": -7.96590995789
    },
    "FAR": {
        "latitude": 46.92070007324220,
        "longitude": -96.81580352783200
    },
    "FAT": {
        "latitude": 36.776199,
        "longitude": -119.718002
    },
    "FAV": {
        "latitude": -16.054100036621100,
        "longitude": -145.65699768066400
    },
    "FAY": {
        "latitude": 34.991199,
        "longitude": -78.880302
    },
    "FAZ": {
        "latitude": 28.891799926757800,
        "longitude": 53.72330093383790
    },
    "FBG": {
        "latitude": 35.13180161,
        "longitude": -78.93669891
    },
    "FBK": {
        "latitude": 64.837502,
        "longitude": -147.613998
    },
    "FBM": {
        "latitude": -11.5913000107,
        "longitude": 27.5308990479
    },
    "FCA": {
        "latitude": 48.31050109863280,
        "longitude": -114.25599670410200
    },
    "FCB": {
        "latitude": -28.82309913635250,
        "longitude": 27.908899307251000
    },
    "FCN": {
        "latitude": 53.7677001953,
        "longitude": 8.658499717710000
    },
    "FCO": {
        "latitude": 41.804532,
        "longitude": 12.251998
    },
    "FCS": {
        "latitude": 38.67839813,
        "longitude": -104.7570038
    },
    "FDF": {
        "latitude": 14.591,
        "longitude": -61.003201
    },
    "FDH": {
        "latitude": 47.671299,
        "longitude": 9.51149
    },
    "FDU": {
        "latitude": -3.31132,
        "longitude": 17.381701
    },
    "FDY": {
        "latitude": 41.013500213600000,
        "longitude": -83.66870117190000
    },
    "FEG": {
        "latitude": 40.358799,
        "longitude": 71.745003
    },
    "FEN": {
        "latitude": -3.854471,
        "longitude": -32.423302
    },
    "FEZ": {
        "latitude": 33.927299,
        "longitude": -4.97796
    },
    "FFD": {
        "latitude": 51.682201,
        "longitude": -1.79003
    },
    "FFO": {
        "latitude": 39.826099,
        "longitude": -84.048302
    },
    "FGU": {
        "latitude": -15.81995,
        "longitude": -140.88729
    },
    "FHU": {
        "latitude": 31.587383,
        "longitude": -110.348225
    },
    "FIH": {
        "latitude": -4.38575,
        "longitude": 15.4446
    },
    "FIZ": {
        "latitude": -18.183596,
        "longitude": 125.559783
    },
    "FJR": {
        "latitude": 25.112199783325200,
        "longitude": 56.32400131225590
    },
    "FKB": {
        "latitude": 48.7794,
        "longitude": 8.0805
    },
    "FKI": {
        "latitude": 0.481638997793,
        "longitude": 25.3379993439
    },
    "FKJ": {
        "latitude": 36.1427993774,
        "longitude": 136.223999023
    },
    "FKL": {
        "latitude": 41.3778991699,
        "longitude": -79.8603973389
    },
    "FKQ": {
        "latitude": -2.920508,
        "longitude": 132.267011
    },
    "FKS": {
        "latitude": 37.22740173339840,
        "longitude": 140.43099975585900
    },
    "FLA": {
        "latitude": 1.58919,
        "longitude": -75.5644
    },
    "FLG": {
        "latitude": 35.1385,
        "longitude": -111.670998
    },
    "FLL": {
        "latitude": 26.072599,
        "longitude": -80.152702
    },
    "FLN": {
        "latitude": -27.670279,
        "longitude": -48.552502
    },
    "FLO": {
        "latitude": 34.18539810180660,
        "longitude": -79.7238998413086
    },
    "FLR": {
        "latitude": 43.810001,
        "longitude": 11.2051
    },
    "FLW": {
        "latitude": 39.455299377441400,
        "longitude": -31.131399154663100
    },
    "FLZ": {
        "latitude": 1.557127,
        "longitude": 98.887145
    },
    "FMA": {
        "latitude": -26.2127,
        "longitude": -58.2281
    },
    "FME": {
        "latitude": 39.08539962770000,
        "longitude": -76.7593994141
    },
    "FMI": {
        "latitude": -5.8755598068237300,
        "longitude": 29.25
    },
    "FMM": {
        "latitude": 47.988800048800000,
        "longitude": 10.2395000458
    },
    "FMN": {
        "latitude": 36.741199,
        "longitude": -108.230003
    },
    "FMO": {
        "latitude": 52.134602,
        "longitude": 7.68483
    },
    "FMY": {
        "latitude": 26.58659935,
        "longitude": -81.86329650880000
    },
    "FNA": {
        "latitude": 8.61644,
        "longitude": -13.1955
    },
    "FNB": {
        "latitude": 53.6022,
        "longitude": 13.306
    },
    "FNC": {
        "latitude": 32.697899,
        "longitude": -16.7745
    },
    "FNI": {
        "latitude": 43.75740051269530,
        "longitude": 4.4163498878479
    },
    "FNJ": {
        "latitude": 39.224098,
        "longitude": 125.669998
    },
    "FNT": {
        "latitude": 42.96540069580080,
        "longitude": -83.74359893798830
    },
    "FOC": {
        "latitude": 25.934669,
        "longitude": 119.66318
    },
    "FOD": {
        "latitude": 42.55149841,
        "longitude": -94.19259644
    },
    "FOE": {
        "latitude": 38.950901,
        "longitude": -95.663597
    },
    "FOG": {
        "latitude": 41.432899,
        "longitude": 15.535
    },
    "FOM": {
        "latitude": 5.636919975280760,
        "longitude": 10.750800132751500
    },
    "FOR": {
        "latitude": -3.77628,
        "longitude": -38.5326
    },
    "FOS": {
        "latitude": -30.83662,
        "longitude": 128.112811
    },
    "FPO": {
        "latitude": 26.5587005615,
        "longitude": -78.695602417
    },
    "FPR": {
        "latitude": 27.49510002,
        "longitude": -80.36830139
    },
    "FRA": {
        "latitude": 50.036521,
        "longitude": 8.561268
    },
    "FRB": {
        "latitude": -33.363602,
        "longitude": 147.934998
    },
    "FRG": {
        "latitude": 40.7288017273,
        "longitude": -73.4133987427
    },
    "FRI": {
        "latitude": 39.053021,
        "longitude": -96.764202
    },
    "FRL": {
        "latitude": 44.194801,
        "longitude": 12.0701
    },
    "FRO": {
        "latitude": 61.583599090576,
        "longitude": 5.0247201919556
    },
    "FRS": {
        "latitude": 16.913799,
        "longitude": -89.866402
    },
    "FRU": {
        "latitude": 43.0612983704,
        "longitude": 74.4776000977
    },
    "FRW": {
        "latitude": -21.15914,
        "longitude": 27.468545
    },
    "FRZ": {
        "latitude": 51.1146,
        "longitude": 9.286
    },
    "FSC": {
        "latitude": 41.500599,
        "longitude": 9.09778
    },
    "FSD": {
        "latitude": 43.585463,
        "longitude": -96.741152
    },
    "FSI": {
        "latitude": 34.64979935,
        "longitude": -98.40219879
    },
    "FSM": {
        "latitude": 35.336601,
        "longitude": -94.367401
    },
    "FSP": {
        "latitude": 46.762901306152300,
        "longitude": -56.173099517822300
    },
    "FST": {
        "latitude": 30.9157009125,
        "longitude": -102.916000366
    },
    "FSZ": {
        "latitude": 34.796043,
        "longitude": 138.187752
    },
    "FTE": {
        "latitude": -50.2803,
        "longitude": -72.053101
    },
    "FTI": {
        "latitude": -14.215622,
        "longitude": -169.424254
    },
    "FTK": {
        "latitude": 37.907100677500000,
        "longitude": -85.9720993042
    },
    "FTU": {
        "latitude": -25.038099,
        "longitude": 46.9561
    },
    "FTW": {
        "latitude": 32.819801,
        "longitude": -97.362396
    },
    "FTX": {
        "latitude": -0.5313500165939330,
        "longitude": 15.95009994506840
    },
    "FTY": {
        "latitude": 33.7790985107,
        "longitude": -84.5214004517
    },
    "FUE": {
        "latitude": 28.4527,
        "longitude": -13.8638
    },
    "FUG": {
        "latitude": 32.882157,
        "longitude": 115.734364
    },
    "FUJ": {
        "latitude": 32.66630172729490,
        "longitude": 128.83299255371100
    },
    "FUK": {
        "latitude": 33.585899353027300,
        "longitude": 130.4510040283200
    },
    "FUN": {
        "latitude": -8.525,
        "longitude": 179.195999
    },
    "FUO": {
        "latitude": 23.0833,
        "longitude": 113.07
    },
    "FUT": {
        "latitude": -14.3114004135,
        "longitude": -178.065994263
    },
    "FWA": {
        "latitude": 40.9785,
        "longitude": -85.195099
    },
    "FWH": {
        "latitude": 32.769199,
        "longitude": -97.441498
    },
    "FXE": {
        "latitude": 26.1972999573,
        "longitude": -80.1707000732
    },
    "FYJ": {
        "latitude": 48.197219,
        "longitude": 134.36298
    },
    "FYN": {
        "latitude": 46.804169,
        "longitude": 89.512006
    },
    "FYT": {
        "latitude": 17.917101,
        "longitude": 19.111099
    },
    "FYU": {
        "latitude": 66.57150268554690,
        "longitude": -145.25
    },
    "FYV": {
        "latitude": 36.00510025024410,
        "longitude": -94.17009735107420
    },
    "FZL": {
        "latitude": 39.594578,
        "longitude": 47.196128
    },
    "GAE": {
        "latitude": 33.733691,
        "longitude": 9.91941
    },
    "GAF": {
        "latitude": 34.422000885009800,
        "longitude": 8.822500228881840
    },
    "GAJ": {
        "latitude": 38.4119,
        "longitude": 140.371002
    },
    "GAL": {
        "latitude": 64.73619843,
        "longitude": -156.9369965
    },
    "GAM": {
        "latitude": 63.76679992675780,
        "longitude": -171.73300170898400
    },
    "GAN": {
        "latitude": -0.693342,
        "longitude": 73.155602
    },
    "GAO": {
        "latitude": 20.08530044555660,
        "longitude": -75.1583023071289
    },
    "GAQ": {
        "latitude": 16.2484,
        "longitude": -0.005456
    },
    "GAU": {
        "latitude": 26.10610008239750,
        "longitude": 91.58589935302730
    },
    "GAY": {
        "latitude": 24.744300842285200,
        "longitude": 84.95120239257810
    },
    "GBB": {
        "latitude": 40.808617,
        "longitude": 47.725389
    },
    "GBE": {
        "latitude": -24.555201,
        "longitude": 25.9182
    },
    "GBJ": {
        "latitude": 15.86870002746580,
        "longitude": -61.27000045776370
    },
    "GBT": {
        "latitude": 36.909400939900000,
        "longitude": 54.4012985229
    },
    "GCC": {
        "latitude": 44.3489,
        "longitude": -105.539001
    },
    "GCH": {
        "latitude": 30.333869,
        "longitude": 50.833796
    },
    "GCI": {
        "latitude": 49.435001,
        "longitude": -2.60197
    },
    "GCJ": {
        "latitude": -25.986299514800000,
        "longitude": 28.1401004791
    },
    "GCK": {
        "latitude": 37.9275016785,
        "longitude": -100.723999023
    },
    "GCM": {
        "latitude": 19.292800903300000,
        "longitude": -81.3576965332
    },
    "GCN": {
        "latitude": 35.9524,
        "longitude": -112.147003
    },
    "GDB": {
        "latitude": 21.526817,
        "longitude": 80.290347
    },
    "GDE": {
        "latitude": 5.93513011932,
        "longitude": 43.5786018372
    },
    "GDL": {
        "latitude": 20.521799,
        "longitude": -103.310997
    },
    "GDN": {
        "latitude": 54.377601623535200,
        "longitude": 18.46619987487790
    },
    "GDO": {
        "latitude": 7.233333110809330,
        "longitude": -70.80000305175780
    },
    "GDQ": {
        "latitude": 12.5199,
        "longitude": 37.433998
    },
    "GDT": {
        "latitude": 21.4445,
        "longitude": -71.142303
    },
    "GDV": {
        "latitude": 47.13869858,
        "longitude": -104.8069992
    },
    "GDX": {
        "latitude": 59.9109992980957,
        "longitude": 150.72000122070300
    },
    "GDZ": {
        "latitude": 44.5820926295,
        "longitude": 38.0124807358
    },
    "GEA": {
        "latitude": -22.258301,
        "longitude": 166.473007
    },
    "GEC": {
        "latitude": 35.235947,
        "longitude": 33.724358
    },
    "GEG": {
        "latitude": 47.6199,
        "longitude": -117.533997
    },
    "GEL": {
        "latitude": -28.282503,
        "longitude": -54.169623
    },
    "GEO": {
        "latitude": 6.49855,
        "longitude": -58.254101
    },
    "GER": {
        "latitude": 21.834699630737300,
        "longitude": -82.78379821777340
    },
    "GES": {
        "latitude": 6.05800008774,
        "longitude": 125.096000671
    },
    "GET": {
        "latitude": -28.796101,
        "longitude": 114.707001
    },
    "GEV": {
        "latitude": 67.13240051269530,
        "longitude": 20.814599990844700
    },
    "GFF": {
        "latitude": -34.2508010864,
        "longitude": 146.067001343
    },
    "GFK": {
        "latitude": 47.949299,
        "longitude": -97.176102
    },
    "GFL": {
        "latitude": 43.3412017822,
        "longitude": -73.6102981567
    },
    "GFN": {
        "latitude": -29.7593994140625,
        "longitude": 153.02999877929700
    },
    "GFR": {
        "latitude": 48.88309860229490,
        "longitude": -1.564170002937320
    },
    "GFY": {
        "latitude": -19.60219955444340,
        "longitude": 18.122699737548800
    },
    "GGG": {
        "latitude": 32.38399887084960,
        "longitude": -94.71150207519530
    },
    "GGT": {
        "latitude": 23.562599,
        "longitude": -75.877998
    },
    "GGW": {
        "latitude": 48.212502,
        "longitude": -106.614998
    },
    "GHA": {
        "latitude": 32.384102,
        "longitude": 3.79411
    },
    "GHB": {
        "latitude": 25.2847,
        "longitude": -76.331001
    },
    "GHC": {
        "latitude": 25.7383,
        "longitude": -77.840103
    },
    "GHT": {
        "latitude": 25.1455993652,
        "longitude": 10.142600059500000
    },
    "GHU": {
        "latitude": -33.0103,
        "longitude": -58.6131
    },
    "GIB": {
        "latitude": 36.151199,
        "longitude": -5.34966
    },
    "GIG": {
        "latitude": -22.809999,
        "longitude": -43.250557
    },
    "GIL": {
        "latitude": 35.918800354003900,
        "longitude": 74.33360290527340
    },
    "GIR": {
        "latitude": 4.27624,
        "longitude": -74.7967
    },
    "GIS": {
        "latitude": -38.663299560546900,
        "longitude": 177.97799682617200
    },
    "GIZ": {
        "latitude": 16.9011,
        "longitude": 42.5858
    },
    "GJA": {
        "latitude": 16.4454,
        "longitude": -85.906601
    },
    "GJL": {
        "latitude": 36.795101,
        "longitude": 5.87361
    },
    "GJM": {
        "latitude": -10.78641,
        "longitude": -65.28486
    },
    "GJT": {
        "latitude": 39.126663,
        "longitude": -108.529387
    },
    "GKA": {
        "latitude": -6.081689834590000,
        "longitude": 145.391998291
    },
    "GKE": {
        "latitude": 50.9608,
        "longitude": 6.04242
    },
    "GKN": {
        "latitude": 62.155859,
        "longitude": -145.454662
    },
    "GLA": {
        "latitude": 55.871899,
        "longitude": -4.43306
    },
    "GLD": {
        "latitude": 39.370701,
        "longitude": -101.699753
    },
    "GLF": {
        "latitude": 8.654009819030760,
        "longitude": -83.18219757080080
    },
    "GLH": {
        "latitude": 33.4828987121582,
        "longitude": -90.98560333251950
    },
    "GLI": {
        "latitude": -29.676029,
        "longitude": 151.691156
    },
    "GLO": {
        "latitude": 51.89419937133790,
        "longitude": -2.167220115661620
    },
    "GLS": {
        "latitude": 29.265300750732400,
        "longitude": -94.86039733886720
    },
    "GLT": {
        "latitude": -23.869763,
        "longitude": 151.225439
    },
    "GLU": {
        "latitude": 26.88456,
        "longitude": 90.46412
    },
    "GLZ": {
        "latitude": 51.56740188598630,
        "longitude": 4.931829929351810
    },
    "GMA": {
        "latitude": 3.2353699207300000,
        "longitude": 19.771299362200000
    },
    "GMB": {
        "latitude": 8.12876,
        "longitude": 34.563099
    },
    "GME": {
        "latitude": 52.527000427246100,
        "longitude": 31.016700744628900
    },
    "GML": {
        "latitude": 50.6035,
        "longitude": 30.1919
    },
    "GMO": {
        "latitude": 10.298889,
        "longitude": 10.9
    },
    "GMP": {
        "latitude": 37.5583,
        "longitude": 126.791
    },
    "GMQ": {
        "latitude": 34.418066,
        "longitude": 100.301144
    },
    "GMR": {
        "latitude": -23.07990074157720,
        "longitude": -134.88999938964800
    },
    "GMU": {
        "latitude": 34.847900390600000,
        "longitude": -82.34999847410000
    },
    "GNA": {
        "latitude": 53.60200119018560,
        "longitude": 24.053800582885700
    },
    "GNB": {
        "latitude": 45.3629,
        "longitude": 5.32937
    },
    "GND": {
        "latitude": 12.004199981689500,
        "longitude": -61.78620147705080
    },
    "GNS": {
        "latitude": 1.16628,
        "longitude": 97.704327
    },
    "GNV": {
        "latitude": 29.6900997162,
        "longitude": -82.2717971802
    },
    "GNY": {
        "latitude": 37.445663,
        "longitude": 38.895592
    },
    "GOA": {
        "latitude": 44.4133,
        "longitude": 8.8375
    },
    "GOH": {
        "latitude": 64.193022,
        "longitude": -51.676512
    },
    "GOI": {
        "latitude": 15.3808,
        "longitude": 73.831398
    },
    "GOJ": {
        "latitude": 56.230098724365,
        "longitude": 43.784000396729
    },
    "GOM": {
        "latitude": -1.6708099842071500,
        "longitude": 29.238500595092800
    },
    "GON": {
        "latitude": 41.330101013183600,
        "longitude": -72.04509735107420
    },
    "GOP": {
        "latitude": 26.739700317400000,
        "longitude": 83.4496994019
    },
    "GOQ": {
        "latitude": 36.4006,
        "longitude": 94.786102
    },
    "GOT": {
        "latitude": 57.662799835205,
        "longitude": 12.279800415039
    },
    "GOU": {
        "latitude": 9.33588981628418,
        "longitude": 13.370100021362300
    },
    "GOV": {
        "latitude": -12.269399642900000,
        "longitude": 136.817993164
    },
    "GOZ": {
        "latitude": 43.151402,
        "longitude": 25.7129
    },
    "GPA": {
        "latitude": 38.1511,
        "longitude": 21.4256
    },
    "GPI": {
        "latitude": 2.57013,
        "longitude": -77.897969
    },
    "GPL": {
        "latitude": 10.2172002792,
        "longitude": -83.79699707030000
    },
    "GPN": {
        "latitude": -11.399686,
        "longitude": 130.425568
    },
    "GPO": {
        "latitude": -35.6962013245,
        "longitude": -63.7583007812
    },
    "GPT": {
        "latitude": 30.407301,
        "longitude": -89.070099
    },
    "GRB": {
        "latitude": 44.483459,
        "longitude": -88.130805
    },
    "GRF": {
        "latitude": 47.07920074,
        "longitude": -122.5810013
    },
    "GRI": {
        "latitude": 40.967498779296900,
        "longitude": -98.30960083007810
    },
    "GRJ": {
        "latitude": -34.0056,
        "longitude": 22.378902
    },
    "GRK": {
        "latitude": 31.0672,
        "longitude": -97.828903
    },
    "GRO": {
        "latitude": 41.904639,
        "longitude": 2.761774
    },
    "GRQ": {
        "latitude": 53.1197013855,
        "longitude": 6.57944011688
    },
    "GRR": {
        "latitude": 42.88079834,
        "longitude": -85.52279663
    },
    "GRS": {
        "latitude": 42.759701,
        "longitude": 11.0719
    },
    "GRU": {
        "latitude": -23.431944,
        "longitude": -46.467778
    },
    "GRV": {
        "latitude": 43.388106,
        "longitude": 45.699772
    },
    "GRW": {
        "latitude": 39.092201232910200,
        "longitude": -28.029800415039100
    },
    "GRX": {
        "latitude": 37.188702,
        "longitude": -3.77736
    },
    "GRZ": {
        "latitude": 46.9911,
        "longitude": 15.4396
    },
    "GSB": {
        "latitude": 35.339401,
        "longitude": -77.960602
    },
    "GSE": {
        "latitude": 57.7747,
        "longitude": 11.8704
    },
    "GSJ": {
        "latitude": 13.936200141900000,
        "longitude": -90.83580017090000
    },
    "GSO": {
        "latitude": 36.097801,
        "longitude": -79.937302
    },
    "GSP": {
        "latitude": 34.895699,
        "longitude": -82.218903
    },
    "GST": {
        "latitude": 58.4253006,
        "longitude": -135.7070007
    },
    "GSV": {
        "latitude": 51.712778,
        "longitude": 46.171111
    },
    "GTE": {
        "latitude": -13.972405,
        "longitude": 136.458553
    },
    "GTF": {
        "latitude": 47.48199844,
        "longitude": -111.3710022
    },
    "GTN": {
        "latitude": -43.906700134277300,
        "longitude": 170.1280059814450
    },
    "GTR": {
        "latitude": 33.450298309300000,
        "longitude": -88.5914001465
    },
    "GUA": {
        "latitude": 14.5833,
        "longitude": -90.527496
    },
    "GUH": {
        "latitude": -30.96109962463380,
        "longitude": 150.25100708007800
    },
    "GUI": {
        "latitude": 10.574077606200000,
        "longitude": -62.3126678467
    },
    "GUJ": {
        "latitude": -22.791599,
        "longitude": -45.2048
    },
    "GUL": {
        "latitude": -34.810298919677700,
        "longitude": 149.7259979248050
    },
    "GUM": {
        "latitude": 13.4834,
        "longitude": 144.796005
    },
    "GUP": {
        "latitude": 35.511100769,
        "longitude": -108.789001465
    },
    "GUQ": {
        "latitude": 9.026944160461430,
        "longitude": -69.7551498413086
    },
    "GUR": {
        "latitude": -10.3114995956,
        "longitude": 150.333999634
    },
    "GUS": {
        "latitude": 40.648102,
        "longitude": -86.1521
    },
    "GUW": {
        "latitude": 47.122559,
        "longitude": 51.819321
    },
    "GUY": {
        "latitude": 36.6851005554,
        "longitude": -101.508003235
    },
    "GVA": {
        "latitude": 46.23809814453130,
        "longitude": 6.108950138092040
    },
    "GVN": {
        "latitude": 48.925067,
        "longitude": 140.035348
    },
    "GVX": {
        "latitude": 60.593299865722700,
        "longitude": 16.951400756835900
    },
    "GWD": {
        "latitude": 25.232391,
        "longitude": 62.327671
    },
    "GWE": {
        "latitude": -19.436718,
        "longitude": 29.861945
    },
    "GWL": {
        "latitude": 26.29330062866210,
        "longitude": 78.22779846191410
    },
    "GWO": {
        "latitude": 33.4943008423,
        "longitude": -90.0847015381
    },
    "GWT": {
        "latitude": 54.9132,
        "longitude": 8.34047
    },
    "GWY": {
        "latitude": 53.300201416015600,
        "longitude": -8.941590309143070
    },
    "GXF": {
        "latitude": 15.9661,
        "longitude": 48.7883
    },
    "GXG": {
        "latitude": -7.754509925842290,
        "longitude": 15.287699699401900
    },
    "GXH": {
        "latitude": 34.819014,
        "longitude": 102.622261
    },
    "GXQ": {
        "latitude": -45.5942,
        "longitude": -72.106102
    },
    "GYD": {
        "latitude": 40.467498779296900,
        "longitude": 50.04669952392580
    },
    "GYE": {
        "latitude": -2.15742,
        "longitude": -79.883598
    },
    "GYG": {
        "latitude": 62.103484,
        "longitude": 129.545288
    },
    "GYI": {
        "latitude": -1.6771999597549400,
        "longitude": 29.258899688720700
    },
    "GYM": {
        "latitude": 27.9689998626709,
        "longitude": -110.92500305175800
    },
    "GYN": {
        "latitude": -16.632,
        "longitude": -49.220699
    },
    "GYS": {
        "latitude": 32.390254,
        "longitude": 105.694571
    },
    "GYU": {
        "latitude": 36.078889,
        "longitude": 106.216944
    },
    "GYY": {
        "latitude": 41.61629867553710,
        "longitude": -87.41280364990230
    },
    "GZP": {
        "latitude": 36.299217,
        "longitude": 32.300598
    },
    "GZT": {
        "latitude": 36.947201,
        "longitude": 37.478699
    },
    "GZW": {
        "latitude": 36.240101,
        "longitude": 50.0471
    },
    "HAC": {
        "latitude": 33.115002,
        "longitude": 139.785995
    },
    "HAD": {
        "latitude": 56.69110107421880,
        "longitude": 12.820199966430700
    },
    "HAH": {
        "latitude": -11.5337,
        "longitude": 43.2719
    },
    "HAJ": {
        "latitude": 52.461102,
        "longitude": 9.68508
    },
    "HAK": {
        "latitude": 19.9349,
        "longitude": 110.459
    },
    "HAM": {
        "latitude": 53.630402,
        "longitude": 9.98823
    },
    "HAN": {
        "latitude": 21.221201,
        "longitude": 105.806999
    },
    "HAQ": {
        "latitude": 6.744229793548580,
        "longitude": 73.17050170898440
    },
    "HAS": {
        "latitude": 27.437901,
        "longitude": 41.686298
    },
    "HAU": {
        "latitude": 59.345299,
        "longitude": 5.20836
    },
    "HAV": {
        "latitude": 22.989200592041000,
        "longitude": -82.40910339355470
    },
    "HAW": {
        "latitude": 51.833099365234400,
        "longitude": -4.9611101150512700
    },
    "HBA": {
        "latitude": -42.836101532,
        "longitude": 147.509994507
    },
    "HBE": {
        "latitude": 30.93249,
        "longitude": 29.696437
    },
    "HBG": {
        "latitude": 31.26479912,
        "longitude": -89.25279999
    },
    "HBR": {
        "latitude": 34.991317,
        "longitude": -99.051313
    },
    "HBX": {
        "latitude": 15.361700058,
        "longitude": 75.08489990230000
    },
    "HCJ": {
        "latitude": 24.804344,
        "longitude": 107.710819
    },
    "HCN": {
        "latitude": 22.041099548339800,
        "longitude": 120.7300033569340
    },
    "HCQ": {
        "latitude": -18.23390007019040,
        "longitude": 127.66999816894500
    },
    "HCR": {
        "latitude": 62.18830108642580,
        "longitude": -159.77499389648400
    },
    "HCZ": {
        "latitude": 25.753419,
        "longitude": 112.845404
    },
    "HDF": {
        "latitude": 53.8787002563,
        "longitude": 14.152299881
    },
    "HDG": {
        "latitude": 36.525833,
        "longitude": 114.425556
    },
    "HDM": {
        "latitude": 34.869202,
        "longitude": 48.552502
    },
    "HDY": {
        "latitude": 6.93320989609,
        "longitude": 100.392997742
    },
    "HEA": {
        "latitude": 34.209999,
        "longitude": 62.228298
    },
    "HEH": {
        "latitude": 20.746999740600600,
        "longitude": 96.79199981689450
    },
    "HEK": {
        "latitude": 50.171621,
        "longitude": 127.308884
    },
    "HEL": {
        "latitude": 60.3172,
        "longitude": 24.963301
    },
    "HER": {
        "latitude": 35.3396987915,
        "longitude": 25.180299758900000
    },
    "HET": {
        "latitude": 40.849658,
        "longitude": 111.824598
    },
    "HFA": {
        "latitude": 32.80939865112310,
        "longitude": 35.04309844970700
    },
    "HFD": {
        "latitude": 41.736698150635,
        "longitude": -72.649398803711
    },
    "HFE": {
        "latitude": 31.98779,
        "longitude": 116.9769
    },
    "HFN": {
        "latitude": 64.295601,
        "longitude": -15.2272
    },
    "HFS": {
        "latitude": 60.0201,
        "longitude": 13.5789
    },
    "HFT": {
        "latitude": 70.679702758789,
        "longitude": 23.668600082397
    },
    "HGA": {
        "latitude": 9.513207,
        "longitude": 44.082389
    },
    "HGH": {
        "latitude": 30.23609,
        "longitude": 120.428865
    },
    "HGI": {
        "latitude": 26.96683,
        "longitude": 93.638792
    },
    "HGN": {
        "latitude": 19.301300048828100,
        "longitude": 97.97579956054690
    },
    "HGO": {
        "latitude": 9.38718,
        "longitude": -5.55666
    },
    "HGR": {
        "latitude": 39.707901,
        "longitude": -77.72949982
    },
    "HGU": {
        "latitude": -5.828212,
        "longitude": 144.299412
    },
    "HHE": {
        "latitude": 40.551181,
        "longitude": 141.465428
    },
    "HHN": {
        "latitude": 49.9487,
        "longitude": 7.26389
    },
    "HHQ": {
        "latitude": 12.6361999512,
        "longitude": 99.951499939
    },
    "HHR": {
        "latitude": 33.922798,
        "longitude": -118.334999
    },
    "HIA": {
        "latitude": 33.790833,
        "longitude": 119.125
    },
    "HIB": {
        "latitude": 47.3866,
        "longitude": -92.838997
    },
    "HID": {
        "latitude": -10.585628,
        "longitude": 142.292653
    },
    "HIF": {
        "latitude": 41.12403,
        "longitude": -111.973086
    },
    "HII": {
        "latitude": 34.571098,
        "longitude": -114.358002
    },
    "HIJ": {
        "latitude": 34.4361,
        "longitude": 132.919006
    },
    "HIK": {
        "latitude": 21.335278,
        "longitude": -157.948333
    },
    "HIM": {
        "latitude": 8.04981,
        "longitude": 80.9814
    },
    "HIN": {
        "latitude": 35.088591,
        "longitude": 128.071747
    },
    "HIO": {
        "latitude": 45.540401,
        "longitude": -122.949997
    },
    "HIR": {
        "latitude": -9.428,
        "longitude": 160.054993
    },
    "HJJ": {
        "latitude": 27.443087,
        "longitude": 109.704666
    },
    "HJR": {
        "latitude": 24.8172,
        "longitude": 79.918602
    },
    "HKD": {
        "latitude": 41.77,
        "longitude": 140.822006
    },
    "HKG": {
        "latitude": 22.308901,
        "longitude": 113.915001
    },
    "HKK": {
        "latitude": -42.713600158691400,
        "longitude": 170.98500061035200
    },
    "HKN": {
        "latitude": -5.463846,
        "longitude": 150.407327
    },
    "HKT": {
        "latitude": 8.1132,
        "longitude": 98.316902
    },
    "HKY": {
        "latitude": 35.74110031,
        "longitude": -81.38950348
    },
    "HLA": {
        "latitude": -25.938499,
        "longitude": 27.9261
    },
    "HLD": {
        "latitude": 49.205002,
        "longitude": 119.824997
    },
    "HLG": {
        "latitude": 40.1749992371,
        "longitude": -80.6463012695
    },
    "HLN": {
        "latitude": 46.6068,
        "longitude": -111.983002
    },
    "HLP": {
        "latitude": -6.266610145568850,
        "longitude": 106.89099884033200
    },
    "HLR": {
        "latitude": 31.1387,
        "longitude": -97.7145
    },
    "HLT": {
        "latitude": -37.64889907836910,
        "longitude": 142.06500244140600
    },
    "HLZ": {
        "latitude": -37.8666992188,
        "longitude": 175.332000732
    },
    "HMA": {
        "latitude": 61.028499603271500,
        "longitude": 69.08609771728520
    },
    "HMB": {
        "latitude": 26.339115,
        "longitude": 31.737624
    },
    "HME": {
        "latitude": 31.673,
        "longitude": 6.14044
    },
    "HMI": {
        "latitude": 42.8414,
        "longitude": 93.669197
    },
    "HMJ": {
        "latitude": 49.359699,
        "longitude": 26.933399
    },
    "HMN": {
        "latitude": 32.852501,
        "longitude": -106.107002
    },
    "HMO": {
        "latitude": 29.095899581900000,
        "longitude": -111.047996521
    },
    "HMV": {
        "latitude": 65.806099,
        "longitude": 15.0828
    },
    "HNA": {
        "latitude": 39.4286,
        "longitude": 141.134995
    },
    "HND": {
        "latitude": 35.552299,
        "longitude": 139.779999
    },
    "HNL": {
        "latitude": 21.32062,
        "longitude": -157.924228
    },
    "HNM": {
        "latitude": 20.795601,
        "longitude": -156.014008
    },
    "HNS": {
        "latitude": 59.24380111694340,
        "longitude": -135.5240020751950
    },
    "HOB": {
        "latitude": 32.6875,
        "longitude": -103.2170029
    },
    "HOD": {
        "latitude": 14.753000259399400,
        "longitude": 42.97629928588870
    },
    "HOF": {
        "latitude": 25.285299,
        "longitude": 49.485199
    },
    "HOG": {
        "latitude": 20.785600662231400,
        "longitude": -76.31510162353520
    },
    "HOI": {
        "latitude": -18.0748,
        "longitude": -140.945999
    },
    "HOM": {
        "latitude": 59.645599365234400,
        "longitude": -151.4770050048830
    },
    "HON": {
        "latitude": 44.38520050048830,
        "longitude": -98.22850036621090
    },
    "HOP": {
        "latitude": 36.674154,
        "longitude": -87.48974
    },
    "HOQ": {
        "latitude": 50.288612,
        "longitude": 11.856389
    },
    "HOR": {
        "latitude": 38.519901275634800,
        "longitude": -28.715900421142600
    },
    "HOT": {
        "latitude": 34.4788,
        "longitude": -93.096262
    },
    "HOU": {
        "latitude": 29.645399,
        "longitude": -95.2789
    },
    "HOV": {
        "latitude": 62.180000305176,
        "longitude": 6.0741000175476
    },
    "HPA": {
        "latitude": -19.777000427246100,
        "longitude": -174.34100341796900
    },
    "HPB": {
        "latitude": 61.52389908,
        "longitude": -166.1470032
    },
    "HPG": {
        "latitude": 31.626,
        "longitude": 110.34
    },
    "HPH": {
        "latitude": 20.81686,
        "longitude": 106.722994
    },
    "HPN": {
        "latitude": 41.06700134277340,
        "longitude": -73.70760345458980
    },
    "HQM": {
        "latitude": 46.971199035600000,
        "longitude": -123.93699646
    },
    "HRB": {
        "latitude": 45.623402,
        "longitude": 126.25
    },
    "HRE": {
        "latitude": -17.931801,
        "longitude": 31.0928
    },
    "HRG": {
        "latitude": 27.180325,
        "longitude": 33.807292
    },
    "HRI": {
        "latitude": 6.284467,
        "longitude": 81.124128
    },
    "HRK": {
        "latitude": 49.924801,
        "longitude": 36.290001
    },
    "HRL": {
        "latitude": 26.228500366210900,
        "longitude": -97.65440368652340
    },
    "HRM": {
        "latitude": 32.930401,
        "longitude": 3.31154
    },
    "HRO": {
        "latitude": 36.26150131225590,
        "longitude": -93.15470123291020
    },
    "HRS": {
        "latitude": -28.23509979248050,
        "longitude": 29.106199264526400
    },
    "HRT": {
        "latitude": 54.0489006042,
        "longitude": -1.2527500391
    },
    "HSA": {
        "latitude": 43.313126,
        "longitude": 68.549881
    },
    "HSC": {
        "latitude": 24.9786,
        "longitude": 113.420998
    },
    "HSG": {
        "latitude": 33.149700164800000,
        "longitude": 130.302001953
    },
    "HSL": {
        "latitude": 65.69789886,
        "longitude": -156.3509979
    },
    "HSM": {
        "latitude": -36.669700622558600,
        "longitude": 142.17300415039100
    },
    "HSS": {
        "latitude": 29.179399490356400,
        "longitude": 75.75530242919920
    },
    "HST": {
        "latitude": 25.48859978,
        "longitude": -80.38359833
    },
    "HSV": {
        "latitude": 34.637199,
        "longitude": -86.775101
    },
    "HSZ": {
        "latitude": 24.8180007935,
        "longitude": 120.939002991
    },
    "HTA": {
        "latitude": 52.026299,
        "longitude": 113.306
    },
    "HTG": {
        "latitude": 71.97810363769530,
        "longitude": 102.49099731445300
    },
    "HTI": {
        "latitude": -20.3581008911,
        "longitude": 148.95199585
    },
    "HTN": {
        "latitude": 37.03850173950200,
        "longitude": 79.86489868164060
    },
    "HTS": {
        "latitude": 38.366699,
        "longitude": -82.557999
    },
    "HTT": {
        "latitude": 38.201645,
        "longitude": 90.837843
    },
    "HTU": {
        "latitude": -35.715301513671900,
        "longitude": 142.36000061035200
    },
    "HTV": {
        "latitude": 30.7469005585,
        "longitude": -95.5871963501
    },
    "HTY": {
        "latitude": 36.362778,
        "longitude": 36.282223
    },
    "HUA": {
        "latitude": 34.67869949,
        "longitude": -86.68479919
    },
    "HUF": {
        "latitude": 39.4515,
        "longitude": -87.307602
    },
    "HUH": {
        "latitude": -16.687084,
        "longitude": -151.021593
    },
    "HUI": {
        "latitude": 16.400628,
        "longitude": 107.703094
    },
    "HUL": {
        "latitude": 46.1231002808,
        "longitude": -67.792098999
    },
    "HUN": {
        "latitude": 24.023099899292000,
        "longitude": 121.61799621582000
    },
    "HUO": {
        "latitude": 45.487222,
        "longitude": 119.407222
    },
    "HUT": {
        "latitude": 38.0654983521,
        "longitude": -97.86060333250000
    },
    "HUU": {
        "latitude": -9.878809928894040,
        "longitude": -76.20480346679690
    },
    "HUX": {
        "latitude": 15.775611,
        "longitude": -96.26079
    },
    "HUY": {
        "latitude": 53.57440185546880,
        "longitude": -0.350832998752594
    },
    "HUZ": {
        "latitude": 23.049999,
        "longitude": 114.599998
    },
    "HVA": {
        "latitude": -14.629514,
        "longitude": 47.763555
    },
    "HVB": {
        "latitude": -25.320127,
        "longitude": 152.880662
    },
    "HVD": {
        "latitude": 47.9541015625,
        "longitude": 91.6281967163086
    },
    "HVG": {
        "latitude": 71.009697,
        "longitude": 25.983601
    },
    "HVN": {
        "latitude": 41.26369858,
        "longitude": -72.88680267
    },
    "HVR": {
        "latitude": 48.542999,
        "longitude": -109.762001
    },
    "HWN": {
        "latitude": -18.629899978637700,
        "longitude": 27.020999908447300
    },
    "HXX": {
        "latitude": -34.53139877319340,
        "longitude": 144.8300018310550
    },
    "HYA": {
        "latitude": 41.6693,
        "longitude": -70.280403
    },
    "HYD": {
        "latitude": 17.231318,
        "longitude": 78.429855
    },
    "HYN": {
        "latitude": 28.562201,
        "longitude": 121.429001
    },
    "HYR": {
        "latitude": 46.025199890100000,
        "longitude": -91.44429779050000
    },
    "HYS": {
        "latitude": 38.84220123,
        "longitude": -99.27320099
    },
    "HZA": {
        "latitude": 35.212972,
        "longitude": 115.736748
    },
    "HZB": {
        "latitude": 50.61840057373050,
        "longitude": 2.642240047454830
    },
    "HZH": {
        "latitude": 26.32217,
        "longitude": 109.1499
    },
    "HZK": {
        "latitude": 65.952301,
        "longitude": -17.426001
    },
    "HZU": {
        "latitude": 30.677339,
        "longitude": 104.529397
    },
    "IAA": {
        "latitude": 67.43720245361330,
        "longitude": 86.62190246582030
    },
    "IAB": {
        "latitude": 37.621899,
        "longitude": -97.268204
    },
    "IAD": {
        "latitude": 38.9445,
        "longitude": -77.455803
    },
    "IAG": {
        "latitude": 43.1073,
        "longitude": -78.946198
    },
    "IAH": {
        "latitude": 29.984399795532200,
        "longitude": -95.34140014648440
    },
    "IAM": {
        "latitude": 28.0515,
        "longitude": 9.64291
    },
    "IAN": {
        "latitude": 66.9759979248,
        "longitude": -160.43699646
    },
    "IAS": {
        "latitude": 47.180278,
        "longitude": 27.620833
    },
    "IBA": {
        "latitude": 7.362460136413570,
        "longitude": 3.97832989692688
    },
    "IBE": {
        "latitude": 4.42161,
        "longitude": -75.1333
    },
    "IBL": {
        "latitude": -21.708,
        "longitude": 35.452801
    },
    "IBP": {
        "latitude": -11.411600112915000,
        "longitude": -69.48870086669920
    },
    "IBR": {
        "latitude": 36.181099,
        "longitude": 140.414993
    },
    "IBZ": {
        "latitude": 38.872898,
        "longitude": 1.37312
    },
    "ICN": {
        "latitude": 37.46910095214840,
        "longitude": 126.45099639892600
    },
    "ICT": {
        "latitude": 37.649899,
        "longitude": -97.433098
    },
    "IDA": {
        "latitude": 43.514599,
        "longitude": -112.070999
    },
    "IDR": {
        "latitude": 22.7217998505,
        "longitude": 75.8011016846
    },
    "IDY": {
        "latitude": 46.71860122680660,
        "longitude": -2.3911099433898900
    },
    "IEG": {
        "latitude": 52.138500213600000,
        "longitude": 15.7986001968
    },
    "IEJ": {
        "latitude": 26.722537,
        "longitude": 127.786801
    },
    "IEV": {
        "latitude": 50.40194,
        "longitude": 30.45194
    },
    "IFJ": {
        "latitude": 66.05809783935550,
        "longitude": -23.135299682617200
    },
    "IFN": {
        "latitude": 32.75080108642580,
        "longitude": 51.86130142211910
    },
    "IFO": {
        "latitude": 48.88420104980470,
        "longitude": 24.686100006103500
    },
    "IFP": {
        "latitude": 35.157398,
        "longitude": -114.559998
    },
    "IGA": {
        "latitude": 20.975000381469700,
        "longitude": -73.66690063476560
    },
    "IGD": {
        "latitude": 39.976627,
        "longitude": 43.876648
    },
    "IGL": {
        "latitude": 38.513,
        "longitude": 27.010099
    },
    "IGM": {
        "latitude": 35.259499,
        "longitude": -113.938004
    },
    "IGR": {
        "latitude": -25.737301,
        "longitude": -54.4734
    },
    "IGS": {
        "latitude": 48.7156982421875,
        "longitude": 11.534000396728500
    },
    "IGT": {
        "latitude": 43.323268,
        "longitude": 45.012568
    },
    "IGU": {
        "latitude": -25.594167,
        "longitude": -54.489444
    },
    "IHR": {
        "latitude": 27.236099,
        "longitude": 60.720001
    },
    "IIL": {
        "latitude": 33.58660125732420,
        "longitude": 46.40480041503910
    },
    "IJK": {
        "latitude": 56.82809829711910,
        "longitude": 53.45750045776370
    },
    "IKA": {
        "latitude": 35.416099548339800,
        "longitude": 51.152198791503900
    },
    "IKI": {
        "latitude": 33.7490005493,
        "longitude": 129.785003662
    },
    "IKK": {
        "latitude": 41.07139968870000,
        "longitude": -87.8462982178
    },
    "IKS": {
        "latitude": 71.697700500488,
        "longitude": 128.90299987793
    },
    "IKT": {
        "latitude": 52.268002,
        "longitude": 104.389
    },
    "IKU": {
        "latitude": 42.585584,
        "longitude": 76.701181
    },
    "ILD": {
        "latitude": 41.728185,
        "longitude": 0.535023
    },
    "ILF": {
        "latitude": 56.05163,
        "longitude": -95.620523
    },
    "ILG": {
        "latitude": 39.67869949,
        "longitude": -75.60649872
    },
    "ILI": {
        "latitude": 59.75439835,
        "longitude": -154.9109955
    },
    "ILM": {
        "latitude": 34.270599365234400,
        "longitude": -77.90260314941410
    },
    "ILN": {
        "latitude": 39.427898407,
        "longitude": -83.792098999
    },
    "ILO": {
        "latitude": 10.833017,
        "longitude": 122.493358
    },
    "ILP": {
        "latitude": -22.588899612426800,
        "longitude": 167.45599365234400
    },
    "ILQ": {
        "latitude": -17.69499969482420,
        "longitude": -71.34400177001950
    },
    "ILR": {
        "latitude": 8.440210342407230,
        "longitude": 4.493919849395750
    },
    "ILY": {
        "latitude": 55.68190002441410,
        "longitude": -6.256669998168950
    },
    "ILZ": {
        "latitude": 49.231499,
        "longitude": 18.613501
    },
    "IMF": {
        "latitude": 24.7600002289,
        "longitude": 93.896697998
    },
    "IMP": {
        "latitude": -5.53129,
        "longitude": -47.459999
    },
    "INA": {
        "latitude": 66.053372,
        "longitude": 60.105786
    },
    "INC": {
        "latitude": 38.322758,
        "longitude": 106.393214
    },
    "IND": {
        "latitude": 39.7173,
        "longitude": -86.294403
    },
    "INH": {
        "latitude": -23.8764,
        "longitude": 35.408501
    },
    "INI": {
        "latitude": 43.337299,
        "longitude": 21.853701
    },
    "INK": {
        "latitude": 31.779600143400000,
        "longitude": -103.200996399
    },
    "INL": {
        "latitude": 48.566200256347700,
        "longitude": -93.4030990600586
    },
    "INN": {
        "latitude": 47.260201,
        "longitude": 11.344
    },
    "INT": {
        "latitude": 36.13370132446290,
        "longitude": -80.22200012207030
    },
    "INU": {
        "latitude": -0.547458,
        "longitude": 166.919006
    },
    "INV": {
        "latitude": 57.54249954223630,
        "longitude": -4.047500133514400
    },
    "INW": {
        "latitude": 35.021900177,
        "longitude": -110.722999573
    },
    "INZ": {
        "latitude": 27.250999,
        "longitude": 2.51202
    },
    "IOA": {
        "latitude": 39.6963996887207,
        "longitude": 20.822500228881800
    },
    "IOM": {
        "latitude": 54.083302,
        "longitude": -4.62389
    },
    "IOS": {
        "latitude": -14.815929,
        "longitude": -39.033458
    },
    "IPC": {
        "latitude": -27.1648006439,
        "longitude": -109.42199707
    },
    "IPH": {
        "latitude": 4.567969799041750,
        "longitude": 101.09200286865200
    },
    "IPI": {
        "latitude": 0.861925,
        "longitude": -77.6718
    },
    "IPL": {
        "latitude": 32.834201812700000,
        "longitude": -115.57900238
    },
    "IPN": {
        "latitude": -19.470699,
        "longitude": -42.487598
    },
    "IPT": {
        "latitude": 41.241798400878900,
        "longitude": -76.92109680175780
    },
    "IQA": {
        "latitude": 33.7855987549,
        "longitude": 42.4412002563
    },
    "IQM": {
        "latitude": 38.234516,
        "longitude": 85.465462
    },
    "IQN": {
        "latitude": 35.802638,
        "longitude": 107.598896
    },
    "IQQ": {
        "latitude": -20.535200119018600,
        "longitude": -70.1812973022461
    },
    "IQT": {
        "latitude": -3.78474,
        "longitude": -73.3088
    },
    "IRD": {
        "latitude": 24.15250015258790,
        "longitude": 89.04940032958980
    },
    "IRG": {
        "latitude": -12.7869,
        "longitude": 143.304993
    },
    "IRI": {
        "latitude": -7.668630123138430,
        "longitude": 35.75210189819340
    },
    "IRJ": {
        "latitude": -29.3815994263,
        "longitude": -66.7957992554
    },
    "IRK": {
        "latitude": 40.09349822998050,
        "longitude": -92.5448989868164
    },
    "IRP": {
        "latitude": 2.8276100158691400,
        "longitude": 27.588300704956100
    },
    "ISA": {
        "latitude": -20.663900375400000,
        "longitude": 139.488998413
    },
    "ISB": {
        "latitude": 33.549,
        "longitude": 72.82566
    },
    "ISE": {
        "latitude": 37.8554,
        "longitude": 30.368401
    },
    "ISG": {
        "latitude": 24.396389,
        "longitude": 124.245
    },
    "ISK": {
        "latitude": 20.119101,
        "longitude": 73.912903
    },
    "ISL": {
        "latitude": 40.971913,
        "longitude": 28.823714
    },
    "ISM": {
        "latitude": 28.2898006439,
        "longitude": -81.4371032715
    },
    "ISO": {
        "latitude": 35.331401825,
        "longitude": -77.60880279540000
    },
    "ISP": {
        "latitude": 40.79520035,
        "longitude": -73.10019684
    },
    "IST": {
        "latitude": 41.261297,
        "longitude": 28.741951
    },
    "ISU": {
        "latitude": 35.5617485046,
        "longitude": 45.316738128700000
    },
    "ITA": {
        "latitude": -3.126539,
        "longitude": -58.481668
    },
    "ITB": {
        "latitude": -4.242131,
        "longitude": -56.000651
    },
    "ITH": {
        "latitude": 42.49100112915040,
        "longitude": -76.4583969116211
    },
    "ITM": {
        "latitude": 34.785499572753900,
        "longitude": 135.43800354003900
    },
    "ITO": {
        "latitude": 19.721399,
        "longitude": -155.048004
    },
    "IUE": {
        "latitude": -19.079030990600600,
        "longitude": -169.92559814453100
    },
    "IVC": {
        "latitude": -46.41239929199220,
        "longitude": 168.31300354003900
    },
    "IVL": {
        "latitude": 68.607299804688,
        "longitude": 27.405300140381
    },
    "IVR": {
        "latitude": -29.888299942,
        "longitude": 151.143997192
    },
    "IWA": {
        "latitude": 56.93939971923830,
        "longitude": 40.940799713134800
    },
    "IWJ": {
        "latitude": 34.676399231,
        "longitude": 131.789993286
    },
    "IWK": {
        "latitude": 34.146333,
        "longitude": 132.247238
    },
    "IWO": {
        "latitude": 24.784153,
        "longitude": 141.32261
    },
    "IXA": {
        "latitude": 23.886999,
        "longitude": 91.240402
    },
    "IXB": {
        "latitude": 26.68120002746580,
        "longitude": 88.32859802246090
    },
    "IXC": {
        "latitude": 30.6735,
        "longitude": 76.788498
    },
    "IXD": {
        "latitude": 25.4401,
        "longitude": 81.733902
    },
    "IXE": {
        "latitude": 12.9612998962,
        "longitude": 74.8900985718
    },
    "IXG": {
        "latitude": 15.8593,
        "longitude": 74.618301
    },
    "IXH": {
        "latitude": 24.308657,
        "longitude": 92.00768
    },
    "IXI": {
        "latitude": 27.2955,
        "longitude": 94.097603
    },
    "IXJ": {
        "latitude": 32.688849,
        "longitude": 74.838152
    },
    "IXK": {
        "latitude": 21.317101,
        "longitude": 70.270401
    },
    "IXL": {
        "latitude": 34.135899,
        "longitude": 77.546501
    },
    "IXM": {
        "latitude": 9.83450984955,
        "longitude": 78.09339904790000
    },
    "IXP": {
        "latitude": 32.233611,
        "longitude": 75.634444
    },
    "IXR": {
        "latitude": 23.314300537100000,
        "longitude": 85.3217010498
    },
    "IXS": {
        "latitude": 24.9129009247,
        "longitude": 92.97869873050000
    },
    "IXU": {
        "latitude": 19.862699508667000,
        "longitude": 75.39810180664060
    },
    "IXV": {
        "latitude": 28.17530059814450,
        "longitude": 94.802001953125
    },
    "IXW": {
        "latitude": 22.813786,
        "longitude": 86.169739
    },
    "IXX": {
        "latitude": 17.9081,
        "longitude": 77.487099
    },
    "IXY": {
        "latitude": 23.1127,
        "longitude": 70.100304
    },
    "IXZ": {
        "latitude": 11.641208,
        "longitude": 92.729643
    },
    "IZA": {
        "latitude": -21.513086,
        "longitude": -43.173069
    },
    "IZO": {
        "latitude": 35.413601,
        "longitude": 132.889999
    },
    "IZT": {
        "latitude": 16.449301,
        "longitude": -95.093697
    },
    "JAA": {
        "latitude": 34.399799,
        "longitude": 70.498596
    },
    "JAC": {
        "latitude": 43.6072998046875,
        "longitude": -110.73799896240200
    },
    "JAD": {
        "latitude": -32.09749984741210,
        "longitude": 115.88099670410200
    },
    "JAE": {
        "latitude": -5.59248,
        "longitude": -78.774002
    },
    "JAF": {
        "latitude": 9.79233,
        "longitude": 80.070099
    },
    "JAG": {
        "latitude": 28.28420066833500,
        "longitude": 68.44969940185550
    },
    "JAI": {
        "latitude": 26.8242,
        "longitude": 75.812202
    },
    "JAK": {
        "latitude": 18.241100311279300,
        "longitude": -72.51850128173830
    },
    "JAL": {
        "latitude": 19.4750995636,
        "longitude": -96.7975006104
    },
    "JAM": {
        "latitude": 42.4548988342,
        "longitude": 26.3521995544
    },
    "JAN": {
        "latitude": 32.311199,
        "longitude": -90.075897
    },
    "JAU": {
        "latitude": -11.7831001282,
        "longitude": -75.47339630130000
    },
    "JAX": {
        "latitude": 30.49410057067870,
        "longitude": -81.68789672851560
    },
    "JBQ": {
        "latitude": 18.572500228881800,
        "longitude": -69.98560333251950
    },
    "JBR": {
        "latitude": 35.83169937133790,
        "longitude": -90.64640045166020
    },
    "JCR": {
        "latitude": -6.23316,
        "longitude": -57.776901
    },
    "JCT": {
        "latitude": 30.5112991333,
        "longitude": -99.7634963989
    },
    "JDF": {
        "latitude": -21.791482,
        "longitude": -43.386072
    },
    "JDG": {
        "latitude": 33.3996009827,
        "longitude": 126.711997986
    },
    "JDH": {
        "latitude": 26.251100540161100,
        "longitude": 73.04889678955080
    },
    "JDZ": {
        "latitude": 29.3386,
        "longitude": 117.176003
    },
    "JED": {
        "latitude": 21.6796,
        "longitude": 39.156502
    },
    "JEE": {
        "latitude": 18.66309928894040,
        "longitude": -74.17030334472660
    },
    "JEG": {
        "latitude": 68.721802,
        "longitude": -52.784698
    },
    "JER": {
        "latitude": 49.20790100097660,
        "longitude": -2.195509910583500
    },
    "JFK": {
        "latitude": 40.639447,
        "longitude": -73.779317
    },
    "JFN": {
        "latitude": 41.778,
        "longitude": -80.695503
    },
    "JGA": {
        "latitude": 22.465499877929700,
        "longitude": 70.01260375976560
    },
    "JGD": {
        "latitude": 50.371389,
        "longitude": 124.1175
    },
    "JGS": {
        "latitude": 26.856899,
        "longitude": 114.737
    },
    "JHB": {
        "latitude": 1.64131,
        "longitude": 103.669998
    },
    "JHF": {
        "latitude": -23.426886,
        "longitude": -47.165658
    },
    "JHG": {
        "latitude": 21.974648,
        "longitude": 100.762224
    },
    "JHM": {
        "latitude": 20.9629,
        "longitude": -156.673004
    },
    "JHS": {
        "latitude": 66.951302,
        "longitude": -53.729301
    },
    "JHW": {
        "latitude": 42.15425,
        "longitude": -79.254008
    },
    "JIB": {
        "latitude": 11.5473,
        "longitude": 43.1595
    },
    "JIJ": {
        "latitude": 9.3325,
        "longitude": 42.9121
    },
    "JIM": {
        "latitude": 7.66609001159668,
        "longitude": 36.81660079956060
    },
    "JIQ": {
        "latitude": 29.5133333333,
        "longitude": 108.831111111
    },
    "JJD": {
        "latitude": -2.906425,
        "longitude": -40.357338
    },
    "JJI": {
        "latitude": -7.169099807739260,
        "longitude": -76.72859954833980
    },
    "JJN": {
        "latitude": 24.7964,
        "longitude": 118.589996
    },
    "JKG": {
        "latitude": 57.757598876953100,
        "longitude": 14.068699836731000
    },
    "JKH": {
        "latitude": 38.34320068359380,
        "longitude": 26.140600204467800
    },
    "JKR": {
        "latitude": 26.708799,
        "longitude": 85.922401
    },
    "JLN": {
        "latitude": 37.151798,
        "longitude": -94.498299
    },
    "JLR": {
        "latitude": 23.177799224853500,
        "longitude": 80.052001953125
    },
    "JMJ": {
        "latitude": 22.417733,
        "longitude": 99.784012
    },
    "JMK": {
        "latitude": 37.43510055541990,
        "longitude": 25.348100662231400
    },
    "JMS": {
        "latitude": 46.92969894,
        "longitude": -98.67819977
    },
    "JMU": {
        "latitude": 46.843399,
        "longitude": 130.464996
    },
    "JNB": {
        "latitude": -26.1392,
        "longitude": 28.246
    },
    "JNG": {
        "latitude": 35.292778,
        "longitude": 116.346667
    },
    "JNU": {
        "latitude": 58.35499954223630,
        "longitude": -134.5760040283200
    },
    "JNZ": {
        "latitude": 40.936032,
        "longitude": 121.277114
    },
    "JOE": {
        "latitude": 62.662899,
        "longitude": 29.6075
    },
    "JOG": {
        "latitude": -7.78818,
        "longitude": 110.431999
    },
    "JOH": {
        "latitude": -31.60612,
        "longitude": 29.52175
    },
    "JOI": {
        "latitude": -26.224501,
        "longitude": -48.797401
    },
    "JOK": {
        "latitude": 56.700599670410200,
        "longitude": 47.904701232910200
    },
    "JOL": {
        "latitude": 6.0536699295043900,
        "longitude": 121.01100158691400
    },
    "JOS": {
        "latitude": 9.639829635620120,
        "longitude": 8.869050025939940
    },
    "JPA": {
        "latitude": -7.148691,
        "longitude": -34.950554
    },
    "JRF": {
        "latitude": 21.3074,
        "longitude": -158.070009
    },
    "JRH": {
        "latitude": 26.7315006256,
        "longitude": 94.1754989624
    },
    "JRO": {
        "latitude": -3.42941,
        "longitude": 37.074501
    },
    "JSA": {
        "latitude": 26.888700485229500,
        "longitude": 70.86499786376950
    },
    "JSH": {
        "latitude": 35.21609878540040,
        "longitude": 26.101299285888700
    },
    "JSI": {
        "latitude": 39.177101135253900,
        "longitude": 23.503700256347700
    },
    "JSJ": {
        "latitude": 47.108248,
        "longitude": 132.65792
    },
    "JSR": {
        "latitude": 23.1838,
        "longitude": 89.160797
    },
    "JST": {
        "latitude": 40.31610107421880,
        "longitude": -78.83390045166020
    },
    "JTC": {
        "latitude": -22.160755,
        "longitude": -49.070325
    },
    "JTR": {
        "latitude": 36.399200439453100,
        "longitude": 25.479299545288100
    },
    "JUB": {
        "latitude": 4.87201,
        "longitude": 31.601101
    },
    "JUJ": {
        "latitude": -24.392799,
        "longitude": -65.097801
    },
    "JUL": {
        "latitude": -15.467100143432600,
        "longitude": -70.158203125
    },
    "JUZ": {
        "latitude": 28.965799,
        "longitude": 118.899002
    },
    "JWA": {
        "latitude": -24.602301,
        "longitude": 24.691
    },
    "JWN": {
        "latitude": 36.7737007141,
        "longitude": 48.3594017029
    },
    "JXA": {
        "latitude": 45.293,
        "longitude": 131.193
    },
    "JXN": {
        "latitude": 42.260509,
        "longitude": -84.463019
    },
    "JYR": {
        "latitude": 28.723519,
        "longitude": 57.675037
    },
    "JYV": {
        "latitude": 62.399502,
        "longitude": 25.678301
    },
    "JZH": {
        "latitude": 32.853333,
        "longitude": 103.682222
    },
    "KAB": {
        "latitude": -16.5198,
        "longitude": 28.885
    },
    "KAC": {
        "latitude": 37.020599,
        "longitude": 41.191399
    },
    "KAD": {
        "latitude": 10.696000099182100,
        "longitude": 7.320109844207760
    },
    "KAG": {
        "latitude": 37.753601,
        "longitude": 128.943915
    },
    "KAI": {
        "latitude": 5.17275476456,
        "longitude": -59.491481781
    },
    "KAJ": {
        "latitude": 64.2855,
        "longitude": 27.6924
    },
    "KAN": {
        "latitude": 12.0476,
        "longitude": 8.52462
    },
    "KAO": {
        "latitude": 65.987602,
        "longitude": 29.239401
    },
    "KAT": {
        "latitude": -35.069837,
        "longitude": 173.287053
    },
    "KAU": {
        "latitude": 63.127102,
        "longitude": 23.051399
    },
    "KAW": {
        "latitude": 10.049300193786600,
        "longitude": 98.53800201416020
    },
    "KBK": {
        "latitude": 26.776534,
        "longitude": 83.889214
    },
    "KBL": {
        "latitude": 34.565899,
        "longitude": 69.212303
    },
    "KBP": {
        "latitude": 50.345001,
        "longitude": 30.894699
    },
    "KBR": {
        "latitude": 6.1668500900268600,
        "longitude": 102.29299926757800
    },
    "KBS": {
        "latitude": 7.9444,
        "longitude": -11.761
    },
    "KBV": {
        "latitude": 8.09912014008,
        "longitude": 98.9861984253
    },
    "KCH": {
        "latitude": 1.487364,
        "longitude": 110.352859
    },
    "KCM": {
        "latitude": 37.5388259888,
        "longitude": 36.9535217285
    },
    "KCO": {
        "latitude": 40.735001,
        "longitude": 30.0833
    },
    "KCT": {
        "latitude": 5.993680000305180,
        "longitude": 80.32029724121090
    },
    "KCZ": {
        "latitude": 33.546101,
        "longitude": 133.669006
    },
    "KDH": {
        "latitude": 31.5058,
        "longitude": 65.847801
    },
    "KDL": {
        "latitude": 58.99079895019530,
        "longitude": 22.830699920654300
    },
    "KDM": {
        "latitude": 0.488131,
        "longitude": 72.996902
    },
    "KDO": {
        "latitude": 1.8591699600219700,
        "longitude": 73.52189636230470
    },
    "KDT": {
        "latitude": 14.1020002365,
        "longitude": 99.9171981812
    },
    "KDU": {
        "latitude": 35.33549880981450,
        "longitude": 75.53600311279300
    },
    "KEF": {
        "latitude": 63.985001,
        "longitude": -22.6056
    },
    "KEJ": {
        "latitude": 55.27009963989260,
        "longitude": 86.1072006225586
    },
    "KEL": {
        "latitude": 54.379444,
        "longitude": 10.145278
    },
    "KEM": {
        "latitude": 65.778701782227,
        "longitude": 24.582099914551
    },
    "KEN": {
        "latitude": 7.896364,
        "longitude": -11.174126
    },
    "KEP": {
        "latitude": 28.1036,
        "longitude": 81.667
    },
    "KER": {
        "latitude": 30.274401,
        "longitude": 56.951099
    },
    "KES": {
        "latitude": 56.0374984741,
        "longitude": -96.50969696040000
    },
    "KET": {
        "latitude": 21.301599502563500,
        "longitude": 99.63600158691410
    },
    "KEV": {
        "latitude": 61.856039,
        "longitude": 24.786686
    },
    "KFS": {
        "latitude": 41.314201,
        "longitude": 33.795799
    },
    "KFZ": {
        "latitude": 42.035802,
        "longitude": 20.415955
    },
    "KGA": {
        "latitude": -5.90005016327,
        "longitude": 22.4692001343
    },
    "KGC": {
        "latitude": -35.71390151977540,
        "longitude": 137.52099609375
    },
    "KGD": {
        "latitude": 54.88999938964840,
        "longitude": 20.592599868774400
    },
    "KGF": {
        "latitude": 49.670799,
        "longitude": 73.334396
    },
    "KGG": {
        "latitude": 12.57229995727540,
        "longitude": -12.22029972076420
    },
    "KGI": {
        "latitude": -30.791543,
        "longitude": 121.464586
    },
    "KGJ": {
        "latitude": -9.953570365905760,
        "longitude": 33.893001556396500
    },
    "KGL": {
        "latitude": -1.96863,
        "longitude": 30.1395
    },
    "KGP": {
        "latitude": 62.190399169921900,
        "longitude": 74.53379821777340
    },
    "KGS": {
        "latitude": 36.79330062866210,
        "longitude": 27.091699600219700
    },
    "KGT": {
        "latitude": 30.142464,
        "longitude": 101.73872
    },
    "KGY": {
        "latitude": -26.581077,
        "longitude": 151.839927
    },
    "KHD": {
        "latitude": 33.43539810180660,
        "longitude": 48.282901763916000
    },
    "KHE": {
        "latitude": 46.6758,
        "longitude": 32.506401
    },
    "KHG": {
        "latitude": 39.5429000854,
        "longitude": 76.0199966431
    },
    "KHH": {
        "latitude": 22.577101,
        "longitude": 120.349998
    },
    "KHI": {
        "latitude": 24.9065,
        "longitude": 67.160797
    },
    "KHJ": {
        "latitude": 62.463212,
        "longitude": 22.390817
    },
    "KHK": {
        "latitude": 29.2603,
        "longitude": 50.323898
    },
    "KHN": {
        "latitude": 28.864815,
        "longitude": 115.90271
    },
    "KHS": {
        "latitude": 26.171,
        "longitude": 56.240601
    },
    "KHT": {
        "latitude": 33.284605,
        "longitude": 69.80734
    },
    "KHV": {
        "latitude": 48.528338,
        "longitude": 135.188588
    },
    "KID": {
        "latitude": 55.92169952392580,
        "longitude": 14.08549976348880
    },
    "KIH": {
        "latitude": 26.5261993408,
        "longitude": 53.980201721200000
    },
    "KIJ": {
        "latitude": 37.9558982849,
        "longitude": 139.121002197
    },
    "KIK": {
        "latitude": 35.46950149536130,
        "longitude": 44.348899841308600
    },
    "KIM": {
        "latitude": -28.802799224900000,
        "longitude": 24.7651996613
    },
    "KIN": {
        "latitude": 17.935699462890600,
        "longitude": -76.7874984741211
    },
    "KIR": {
        "latitude": 52.180901,
        "longitude": -9.52378
    },
    "KIS": {
        "latitude": -0.0861390009522438,
        "longitude": 34.72890090942380
    },
    "KIV": {
        "latitude": 46.92770004272460,
        "longitude": 28.930999755859400
    },
    "KIW": {
        "latitude": -12.900500297546400,
        "longitude": 28.149900436401400
    },
    "KIX": {
        "latitude": 34.427299,
        "longitude": 135.244003
    },
    "KJA": {
        "latitude": 56.173077,
        "longitude": 92.492437
    },
    "KJB": {
        "latitude": 15.716288,
        "longitude": 78.16923
    },
    "KJH": {
        "latitude": 26.972,
        "longitude": 107.988
    },
    "KJI": {
        "latitude": 48.2223,
        "longitude": 86.9959
    },
    "KJK": {
        "latitude": 50.8172,
        "longitude": 3.20472
    },
    "KJT": {
        "latitude": -6.648924,
        "longitude": 108.166692
    },
    "KKC": {
        "latitude": 16.466600418100000,
        "longitude": 102.783996582
    },
    "KKE": {
        "latitude": -35.259148,
        "longitude": 173.913317
    },
    "KKJ": {
        "latitude": 33.845901,
        "longitude": 131.035004
    },
    "KKN": {
        "latitude": 69.7258,
        "longitude": 29.8913
    },
    "KKR": {
        "latitude": -15.6633,
        "longitude": -146.884995
    },
    "KKS": {
        "latitude": 33.895302,
        "longitude": 51.577
    },
    "KKW": {
        "latitude": -5.03577,
        "longitude": 18.785601
    },
    "KKX": {
        "latitude": 28.321300506600000,
        "longitude": 129.927993774
    },
    "KLC": {
        "latitude": 14.146900177002000,
        "longitude": -16.051300048828100
    },
    "KLD": {
        "latitude": 56.82469940185550,
        "longitude": 35.7577018737793
    },
    "KLF": {
        "latitude": 54.5499992371,
        "longitude": 36.3666687012
    },
    "KLH": {
        "latitude": 16.6646995544,
        "longitude": 74.2893981934
    },
    "KLO": {
        "latitude": 11.679400444,
        "longitude": 122.375999451
    },
    "KLR": {
        "latitude": 56.685501,
        "longitude": 16.2876
    },
    "KLS": {
        "latitude": 46.11800003050000,
        "longitude": -122.898002625
    },
    "KLU": {
        "latitude": 46.642502,
        "longitude": 14.3377
    },
    "KLV": {
        "latitude": 50.202999114990200,
        "longitude": 12.914999961853000
    },
    "KLW": {
        "latitude": 55.579201,
        "longitude": -133.076004
    },
    "KLX": {
        "latitude": 37.06829833984380,
        "longitude": 22.02549934387210
    },
    "KLZ": {
        "latitude": -29.6884002686,
        "longitude": 17.093999862700000
    },
    "KMA": {
        "latitude": -7.96361017227,
        "longitude": 145.770996094
    },
    "KMC": {
        "latitude": 27.9009,
        "longitude": 45.528198
    },
    "KME": {
        "latitude": -2.462239980697630,
        "longitude": 28.907899856567400
    },
    "KMG": {
        "latitude": 25.110313,
        "longitude": 102.936743
    },
    "KMH": {
        "latitude": -27.45669937133790,
        "longitude": 23.411399841308600
    },
    "KMI": {
        "latitude": 31.877199173,
        "longitude": 131.449005127
    },
    "KMJ": {
        "latitude": 32.83729934692380,
        "longitude": 130.85499572753900
    },
    "KMP": {
        "latitude": -26.5398006439209,
        "longitude": 18.111400604248000
    },
    "KMQ": {
        "latitude": 36.3946,
        "longitude": 136.406998
    },
    "KMS": {
        "latitude": 6.714560031890870,
        "longitude": -1.5908199548721300
    },
    "KMU": {
        "latitude": -0.377353,
        "longitude": 42.459202
    },
    "KMW": {
        "latitude": 57.7969017029,
        "longitude": 41.019401550300000
    },
    "KMX": {
        "latitude": 18.2973,
        "longitude": 42.803501
    },
    "KNA": {
        "latitude": -32.9496,
        "longitude": -71.4786
    },
    "KND": {
        "latitude": -2.91917991638,
        "longitude": 25.915399551400000
    },
    "KNF": {
        "latitude": 52.648395,
        "longitude": 0.550692
    },
    "KNG": {
        "latitude": -3.6446,
        "longitude": 133.695116
    },
    "KNH": {
        "latitude": 24.4279,
        "longitude": 118.359001
    },
    "KNO": {
        "latitude": 3.64177,
        "longitude": 98.885307
    },
    "KNQ": {
        "latitude": -21.053551,
        "longitude": 164.838768
    },
    "KNR": {
        "latitude": 27.820499420166000,
        "longitude": 52.35219955444340
    },
    "KNS": {
        "latitude": -39.877498626709000,
        "longitude": 143.8780059814450
    },
    "KNU": {
        "latitude": 26.404301,
        "longitude": 80.410103
    },
    "KNX": {
        "latitude": -15.7781,
        "longitude": 128.707993
    },
    "KOA": {
        "latitude": 19.738783,
        "longitude": -156.045603
    },
    "KOC": {
        "latitude": -20.546323,
        "longitude": 164.255648
    },
    "KOI": {
        "latitude": 58.957801818847700,
        "longitude": -2.9049999713897700
    },
    "KOJ": {
        "latitude": 31.80340003967290,
        "longitude": 130.718994140625
    },
    "KOK": {
        "latitude": 63.721199,
        "longitude": 23.143101
    },
    "KOP": {
        "latitude": 17.383801,
        "longitude": 104.642998
    },
    "KOU": {
        "latitude": -1.1846100091934,
        "longitude": 12.441300392151
    },
    "KOV": {
        "latitude": 53.329102,
        "longitude": 69.594597
    },
    "KPC": {
        "latitude": 65.2537002563,
        "longitude": -166.85899353
    },
    "KPO": {
        "latitude": 35.987955,
        "longitude": 129.420383
    },
    "KPS": {
        "latitude": -31.074399948120100,
        "longitude": 152.77000427246100
    },
    "KPW": {
        "latitude": 67.845001,
        "longitude": 166.139999
    },
    "KQH": {
        "latitude": 26.591007,
        "longitude": 74.812956
    },
    "KQT": {
        "latitude": 37.86640167236330,
        "longitude": 68.86470031738280
    },
    "KRA": {
        "latitude": -35.751399993896500,
        "longitude": 143.93899536132800
    },
    "KRF": {
        "latitude": 63.048599,
        "longitude": 17.7689
    },
    "KRK": {
        "latitude": 50.077702,
        "longitude": 19.7848
    },
    "KRL": {
        "latitude": 41.6978,
        "longitude": 86.128899
    },
    "KRN": {
        "latitude": 67.821998596191,
        "longitude": 20.336799621582
    },
    "KRO": {
        "latitude": 55.47529983520510,
        "longitude": 65.41560363769530
    },
    "KRP": {
        "latitude": 56.29750061035160,
        "longitude": 9.124629974365230
    },
    "KRR": {
        "latitude": 45.034698486328,
        "longitude": 39.170501708984
    },
    "KRS": {
        "latitude": 58.204201,
        "longitude": 8.08537
    },
    "KRT": {
        "latitude": 15.5895,
        "longitude": 32.5532
    },
    "KRW": {
        "latitude": 40.063301,
        "longitude": 53.007198
    },
    "KSA": {
        "latitude": 5.35698,
        "longitude": 162.957993
    },
    "KSC": {
        "latitude": 48.66310119628910,
        "longitude": 21.241100311279300
    },
    "KSD": {
        "latitude": 59.444698333700000,
        "longitude": 13.337400436400000
    },
    "KSF": {
        "latitude": 51.417273,
        "longitude": 9.384967
    },
    "KSH": {
        "latitude": 34.3459014893,
        "longitude": 47.1581001282
    },
    "KSK": {
        "latitude": 59.34590148925780,
        "longitude": 14.49590015411380
    },
    "KSL": {
        "latitude": 15.387499809265100,
        "longitude": 36.328800201416000
    },
    "KSM": {
        "latitude": 62.0605011,
        "longitude": -163.302002
    },
    "KSN": {
        "latitude": 53.20690155029300,
        "longitude": 63.55030059814450
    },
    "KSU": {
        "latitude": 63.111801,
        "longitude": 7.82452
    },
    "KSY": {
        "latitude": 40.562198638916000,
        "longitude": 43.1150016784668
    },
    "KSZ": {
        "latitude": 61.235801696777300,
        "longitude": 46.6974983215332
    },
    "KTA": {
        "latitude": -20.712200164800000,
        "longitude": 116.773002625
    },
    "KTD": {
        "latitude": 25.9447002411,
        "longitude": 131.32699585
    },
    "KTE": {
        "latitude": 4.537220001220700,
        "longitude": 103.427001953125
    },
    "KTG": {
        "latitude": -1.816845,
        "longitude": 109.963331
    },
    "KTL": {
        "latitude": 0.9719889760017400,
        "longitude": 34.95859909057620
    },
    "KTM": {
        "latitude": 27.6966,
        "longitude": 85.3591
    },
    "KTN": {
        "latitude": 55.35559845,
        "longitude": -131.7140045
    },
    "KTP": {
        "latitude": 17.98859977722170,
        "longitude": -76.82379913330080
    },
    "KTQ": {
        "latitude": 62.1661,
        "longitude": 30.073601
    },
    "KTR": {
        "latitude": -14.521100044250500,
        "longitude": 132.3780059814450
    },
    "KTT": {
        "latitude": 67.700996398926,
        "longitude": 24.846799850464
    },
    "KTU": {
        "latitude": 25.160200119,
        "longitude": 75.84559631350000
    },
    "KTW": {
        "latitude": 50.4743,
        "longitude": 19.08
    },
    "KUA": {
        "latitude": 3.7753899097442600,
        "longitude": 103.20899963378900
    },
    "KUF": {
        "latitude": 53.504901885986,
        "longitude": 50.16429901123
    },
    "KUH": {
        "latitude": 43.041000366200000,
        "longitude": 144.192993164
    },
    "KUL": {
        "latitude": 2.74558,
        "longitude": 101.709999
    },
    "KUM": {
        "latitude": 30.385599,
        "longitude": 130.658997
    },
    "KUN": {
        "latitude": 54.96390151977540,
        "longitude": 24.084800720214800
    },
    "KUO": {
        "latitude": 63.007099,
        "longitude": 27.7978
    },
    "KUS": {
        "latitude": 65.573601,
        "longitude": -37.1236
    },
    "KUT": {
        "latitude": 42.176768,
        "longitude": 42.482393
    },
    "KUU": {
        "latitude": 31.876699,
        "longitude": 77.154404
    },
    "KUV": {
        "latitude": 35.903801,
        "longitude": 126.615997
    },
    "KVA": {
        "latitude": 40.9133,
        "longitude": 24.6192
    },
    "KVB": {
        "latitude": 58.45640182495120,
        "longitude": 13.972700119018600
    },
    "KVD": {
        "latitude": 40.737701,
        "longitude": 46.3176
    },
    "KVG": {
        "latitude": -2.57940006256,
        "longitude": 150.807998657
    },
    "KVL": {
        "latitude": 67.73619842529300,
        "longitude": -164.56300354003900
    },
    "KVO": {
        "latitude": 43.818298,
        "longitude": 20.5872
    },
    "KVX": {
        "latitude": 58.503883,
        "longitude": 49.347831
    },
    "KWA": {
        "latitude": 8.720120429992680,
        "longitude": 167.73199462890600
    },
    "KWE": {
        "latitude": 26.541466,
        "longitude": 106.803331
    },
    "KWG": {
        "latitude": 48.04330062866210,
        "longitude": 33.209999084472700
    },
    "KWI": {
        "latitude": 29.226600646972700,
        "longitude": 47.96889877319340
    },
    "KWJ": {
        "latitude": 35.123173,
        "longitude": 126.805444
    },
    "KWL": {
        "latitude": 25.219828,
        "longitude": 110.039553
    },
    "KWM": {
        "latitude": -15.48516,
        "longitude": 141.751852
    },
    "KWY": {
        "latitude": -1.9605599641799900,
        "longitude": 41.29750061035160
    },
    "KWZ": {
        "latitude": -10.765899658203100,
        "longitude": 25.505699157714800
    },
    "KXE": {
        "latitude": -26.8710994720459,
        "longitude": 26.718000411987300
    },
    "KXK": {
        "latitude": 50.409000396728500,
        "longitude": 136.9340057373050
    },
    "KYA": {
        "latitude": 37.979,
        "longitude": 32.561901
    },
    "KYD": {
        "latitude": 22.027000427246100,
        "longitude": 121.53500366210900
    },
    "KYE": {
        "latitude": 34.589298,
        "longitude": 36.011299
    },
    "KYP": {
        "latitude": 19.42639923095700,
        "longitude": 93.53479766845700
    },
    "KYS": {
        "latitude": 14.4812,
        "longitude": -11.4044
    },
    "KYZ": {
        "latitude": 51.66939926147460,
        "longitude": 94.40059661865230
    },
    "KZC": {
        "latitude": 12.255032,
        "longitude": 104.564657
    },
    "KZI": {
        "latitude": 40.286098,
        "longitude": 21.840799
    },
    "KZN": {
        "latitude": 55.606201171875,
        "longitude": 49.278701782227
    },
    "LAA": {
        "latitude": 38.066126,
        "longitude": -102.690169
    },
    "LAD": {
        "latitude": -8.85837,
        "longitude": 13.2312
    },
    "LAE": {
        "latitude": -6.569803,
        "longitude": 146.725977
    },
    "LAF": {
        "latitude": 40.4123,
        "longitude": -86.936897
    },
    "LAI": {
        "latitude": 48.754398,
        "longitude": -3.47166
    },
    "LAJ": {
        "latitude": -27.782101,
        "longitude": -50.281502
    },
    "LAK": {
        "latitude": 68.223297,
        "longitude": -135.00599
    },
    "LAL": {
        "latitude": 27.988899,
        "longitude": -82.018602
    },
    "LAN": {
        "latitude": 42.77870178222660,
        "longitude": -84.58740234375
    },
    "LAO": {
        "latitude": 18.176121,
        "longitude": 120.531034
    },
    "LAP": {
        "latitude": 24.072700500500000,
        "longitude": -110.361999512
    },
    "LAQ": {
        "latitude": 32.7887,
        "longitude": 21.9643
    },
    "LAR": {
        "latitude": 41.31209945678710,
        "longitude": -105.67500305175800
    },
    "LAS": {
        "latitude": 36.083361,
        "longitude": -115.151817
    },
    "LAU": {
        "latitude": -2.252431,
        "longitude": 40.912892
    },
    "LAW": {
        "latitude": 34.5676994324,
        "longitude": -98.4166030884
    },
    "LAX": {
        "latitude": 33.942501,
        "longitude": -118.407997
    },
    "LAY": {
        "latitude": -28.5816993713,
        "longitude": 29.749700546300000
    },
    "LAZ": {
        "latitude": -13.2621,
        "longitude": -43.4081
    },
    "LBA": {
        "latitude": 53.865898,
        "longitude": -1.66057
    },
    "LBB": {
        "latitude": 33.663601,
        "longitude": -101.822998
    },
    "LBC": {
        "latitude": 53.8054008484,
        "longitude": 10.7192001343
    },
    "LBD": {
        "latitude": 40.215401,
        "longitude": 69.694702
    },
    "LBE": {
        "latitude": 40.275902,
        "longitude": -79.4048
    },
    "LBF": {
        "latitude": 41.12620163,
        "longitude": -100.6839981
    },
    "LBG": {
        "latitude": 48.969398498535200,
        "longitude": 2.441390037536620
    },
    "LBI": {
        "latitude": 43.91389846801760,
        "longitude": 2.1130599975585900
    },
    "LBL": {
        "latitude": 37.0442009,
        "longitude": -100.9599991
    },
    "LBQ": {
        "latitude": -0.7043889760971070,
        "longitude": 10.245699882507300
    },
    "LBS": {
        "latitude": -16.466699600219700,
        "longitude": 179.33999633789100
    },
    "LBT": {
        "latitude": 34.610773,
        "longitude": -79.05943
    },
    "LBU": {
        "latitude": 5.300680160522460,
        "longitude": 115.25
    },
    "LBV": {
        "latitude": 0.458600014448,
        "longitude": 9.412280082700000
    },
    "LBX": {
        "latitude": 13.855400085449200,
        "longitude": 120.1050033569340
    },
    "LBY": {
        "latitude": 47.289398193359400,
        "longitude": -2.3463900089263900
    },
    "LCA": {
        "latitude": 34.875099,
        "longitude": 33.624901
    },
    "LCC": {
        "latitude": 40.239201,
        "longitude": 18.133301
    },
    "LCE": {
        "latitude": 15.7425,
        "longitude": -86.852997
    },
    "LCG": {
        "latitude": 43.302101,
        "longitude": -8.37726
    },
    "LCH": {
        "latitude": 30.126100540161100,
        "longitude": -93.22329711914060
    },
    "LCJ": {
        "latitude": 51.721900939900000,
        "longitude": 19.3980998993
    },
    "LCK": {
        "latitude": 39.813801,
        "longitude": -82.927803
    },
    "LCL": {
        "latitude": 22.3361,
        "longitude": -83.641899
    },
    "LCX": {
        "latitude": 25.6746997833,
        "longitude": 116.747001648
    },
    "LCY": {
        "latitude": 51.505299,
        "longitude": 0.055278
    },
    "LDB": {
        "latitude": -23.333599,
        "longitude": -51.1301
    },
    "LDE": {
        "latitude": 43.1786994934082,
        "longitude": -0.006438999902457000
    },
    "LDS": {
        "latitude": 47.752056,
        "longitude": 129.019125
    },
    "LDU": {
        "latitude": 5.032249927520750,
        "longitude": 118.3239974975590
    },
    "LDV": {
        "latitude": 48.53030014038090,
        "longitude": -4.151639938354490
    },
    "LDY": {
        "latitude": 55.04280090332030,
        "longitude": -7.161109924316410
    },
    "LEA": {
        "latitude": -22.235201,
        "longitude": 114.090024
    },
    "LEB": {
        "latitude": 43.626098632800000,
        "longitude": -72.30419921880000
    },
    "LED": {
        "latitude": 59.80030059814450,
        "longitude": 30.262500762939500
    },
    "LEE": {
        "latitude": 28.82309914,
        "longitude": -81.80870056
    },
    "LEH": {
        "latitude": 49.53390121459960,
        "longitude": 0.08805599808692930
    },
    "LEI": {
        "latitude": 36.843899,
        "longitude": -2.3701
    },
    "LEJ": {
        "latitude": 51.423889,
        "longitude": 12.236389
    },
    "LEN": {
        "latitude": 42.589001,
        "longitude": -5.65556
    },
    "LER": {
        "latitude": -27.843299865722700,
        "longitude": 120.7030029296880
    },
    "LET": {
        "latitude": -4.19355,
        "longitude": -69.9432
    },
    "LEX": {
        "latitude": 38.036499,
        "longitude": -84.605904
    },
    "LEY": {
        "latitude": 52.4603,
        "longitude": 5.52722
    },
    "LFI": {
        "latitude": 37.082901,
        "longitude": -76.360497
    },
    "LFK": {
        "latitude": 31.2339992523,
        "longitude": -94.75
    },
    "LFM": {
        "latitude": 27.3727,
        "longitude": 53.188801
    },
    "LFQ": {
        "latitude": 36.132629,
        "longitude": 111.641236
    },
    "LFR": {
        "latitude": 8.239167213439940,
        "longitude": -72.27102661132810
    },
    "LFT": {
        "latitude": 30.205299,
        "longitude": -91.987602
    },
    "LFW": {
        "latitude": 6.16561,
        "longitude": 1.25451
    },
    "LGA": {
        "latitude": 40.777199,
        "longitude": -73.872597
    },
    "LGB": {
        "latitude": 33.816523,
        "longitude": -118.149891
    },
    "LGG": {
        "latitude": 50.637402,
        "longitude": 5.44322
    },
    "LGH": {
        "latitude": -30.598301,
        "longitude": 138.425995
    },
    "LGI": {
        "latitude": 23.1790008545,
        "longitude": -75.09359741210000
    },
    "LGK": {
        "latitude": 6.329730033874510,
        "longitude": 99.72869873046880
    },
    "LGP": {
        "latitude": 13.111915,
        "longitude": 123.676829
    },
    "LGR": {
        "latitude": -47.243591,
        "longitude": -72.58815
    },
    "LGS": {
        "latitude": -35.493598938,
        "longitude": -69.5743026733
    },
    "LGU": {
        "latitude": 41.7911987305,
        "longitude": -111.851997375
    },
    "LGW": {
        "latitude": 51.148102,
        "longitude": -0.190278
    },
    "LHA": {
        "latitude": 48.3693008423,
        "longitude": 7.82772016525
    },
    "LHE": {
        "latitude": 31.521601,
        "longitude": 74.403603
    },
    "LHG": {
        "latitude": -29.452857,
        "longitude": 147.977146
    },
    "LHK": {
        "latitude": 32.38866,
        "longitude": 111.69425
    },
    "LHR": {
        "latitude": 51.4706,
        "longitude": -0.461941
    },
    "LHS": {
        "latitude": -46.538517,
        "longitude": -68.965323
    },
    "LHW": {
        "latitude": 36.515202,
        "longitude": 103.620003
    },
    "LIF": {
        "latitude": -20.774799346923800,
        "longitude": 167.24000549316400
    },
    "LIG": {
        "latitude": 45.86280059814450,
        "longitude": 1.1794400215148900
    },
    "LIH": {
        "latitude": 21.976,
        "longitude": -159.339005
    },
    "LIL": {
        "latitude": 50.563332,
        "longitude": 3.086886
    },
    "LIM": {
        "latitude": -12.0219,
        "longitude": -77.114305
    },
    "LIN": {
        "latitude": 45.445099,
        "longitude": 9.27674
    },
    "LIO": {
        "latitude": 9.95796012878418,
        "longitude": -83.02200317382810
    },
    "LIP": {
        "latitude": -21.663999557495,
        "longitude": -49.730499267578
    },
    "LIQ": {
        "latitude": 2.17066,
        "longitude": 21.496901
    },
    "LIR": {
        "latitude": 10.5933,
        "longitude": -85.544403
    },
    "LIS": {
        "latitude": 38.7813,
        "longitude": -9.13592
    },
    "LIT": {
        "latitude": 34.729582,
        "longitude": -92.223728
    },
    "LIW": {
        "latitude": 19.691499710083000,
        "longitude": 97.21479797363280
    },
    "LJG": {
        "latitude": 26.68,
        "longitude": 100.246002
    },
    "LJN": {
        "latitude": 29.108601,
        "longitude": -95.462097
    },
    "LJU": {
        "latitude": 46.223701,
        "longitude": 14.4576
    },
    "LKG": {
        "latitude": 4.20412015914917,
        "longitude": 34.348201751709000
    },
    "LKL": {
        "latitude": 70.068802,
        "longitude": 24.973499
    },
    "LKN": {
        "latitude": 68.152496337891,
        "longitude": 13.609399795532
    },
    "LKO": {
        "latitude": 26.7605991364,
        "longitude": 80.8892974854
    },
    "LKY": {
        "latitude": -3.376310110092160,
        "longitude": 35.81829833984380
    },
    "LKZ": {
        "latitude": 52.409302,
        "longitude": 0.561
    },
    "LLA": {
        "latitude": 65.5438,
        "longitude": 22.122
    },
    "LLC": {
        "latitude": 18.182388,
        "longitude": 121.745853
    },
    "LLE": {
        "latitude": -25.4300003052,
        "longitude": 31.5767002106
    },
    "LLF": {
        "latitude": 26.338661,
        "longitude": 111.610043
    },
    "LLV": {
        "latitude": 37.683333,
        "longitude": 111.142778
    },
    "LLW": {
        "latitude": -13.7894001007,
        "longitude": 33.78099823
    },
    "LME": {
        "latitude": 47.94860076904300,
        "longitude": 0.20166699588298800
    },
    "LMM": {
        "latitude": 25.685447,
        "longitude": -109.081055
    },
    "LMN": {
        "latitude": 4.808300018310550,
        "longitude": 115.01000213623000
    },
    "LMO": {
        "latitude": 57.7052001953125,
        "longitude": -3.339169979095460
    },
    "LMP": {
        "latitude": 35.497898,
        "longitude": 12.6181
    },
    "LMQ": {
        "latitude": 30.378099,
        "longitude": 19.576401
    },
    "LMR": {
        "latitude": -28.36009979248050,
        "longitude": 23.43910026550290
    },
    "LMT": {
        "latitude": 42.156101,
        "longitude": -121.733002
    },
    "LND": {
        "latitude": 42.815201,
        "longitude": -108.730003
    },
    "LNJ": {
        "latitude": 23.7381,
        "longitude": 100.025002
    },
    "LNK": {
        "latitude": 40.85100173950200,
        "longitude": -96.75920104980470
    },
    "LNL": {
        "latitude": 33.789918,
        "longitude": 105.790014
    },
    "LNO": {
        "latitude": -28.87809944152830,
        "longitude": 121.31500244140600
    },
    "LNS": {
        "latitude": 40.121700286865200,
        "longitude": -76.29609680175780
    },
    "LNX": {
        "latitude": 54.824,
        "longitude": 32.025
    },
    "LNY": {
        "latitude": 20.785675,
        "longitude": -156.951324
    },
    "LNZ": {
        "latitude": 48.2332,
        "longitude": 14.1875
    },
    "LOE": {
        "latitude": 17.43910026550290,
        "longitude": 101.72200012207000
    },
    "LOK": {
        "latitude": 3.1219699382782000,
        "longitude": 35.608699798584000
    },
    "LOL": {
        "latitude": 40.0663986206,
        "longitude": -118.565002441
    },
    "LOO": {
        "latitude": 33.7644,
        "longitude": 2.92834
    },
    "LOP": {
        "latitude": -8.757792,
        "longitude": 116.275435
    },
    "LOS": {
        "latitude": 6.5773701667785600,
        "longitude": 3.321160078048710
    },
    "LOU": {
        "latitude": 38.2280006409,
        "longitude": -85.6636962891
    },
    "LOV": {
        "latitude": 26.9557,
        "longitude": -101.470001
    },
    "LOZ": {
        "latitude": 37.0821990967,
        "longitude": -84.08489990230000
    },
    "LPA": {
        "latitude": 27.9319,
        "longitude": -15.3866
    },
    "LPB": {
        "latitude": -16.5132999420166,
        "longitude": -68.19229888916020
    },
    "LPF": {
        "latitude": 26.609417,
        "longitude": 104.979
    },
    "LPG": {
        "latitude": -34.9722,
        "longitude": -57.8947
    },
    "LPI": {
        "latitude": 58.4062004089,
        "longitude": 15.680500030500000
    },
    "LPK": {
        "latitude": 52.70280075073240,
        "longitude": 39.53779983520510
    },
    "LPL": {
        "latitude": 53.333599,
        "longitude": -2.84972
    },
    "LPP": {
        "latitude": 61.044601,
        "longitude": 28.144743
    },
    "LPQ": {
        "latitude": 19.897300720214800,
        "longitude": 102.16100311279300
    },
    "LPT": {
        "latitude": 18.27090072631840,
        "longitude": 99.50420379638670
    },
    "LPX": {
        "latitude": 56.51750183105470,
        "longitude": 21.096900939941400
    },
    "LPY": {
        "latitude": 45.0807,
        "longitude": 3.76289
    },
    "LRD": {
        "latitude": 27.543800354003900,
        "longitude": -99.46160125732420
    },
    "LRE": {
        "latitude": -23.4342002869,
        "longitude": 144.279998779
    },
    "LRF": {
        "latitude": 34.916900634800000,
        "longitude": -92.14969635010000
    },
    "LRH": {
        "latitude": 46.17919921875,
        "longitude": -1.1952799558639500
    },
    "LRL": {
        "latitude": 9.767330169677730,
        "longitude": 1.091249942779540
    },
    "LRM": {
        "latitude": 18.450700759887700,
        "longitude": -68.91179656982420
    },
    "LRR": {
        "latitude": 27.6747,
        "longitude": 54.383301
    },
    "LRT": {
        "latitude": 47.76060104370120,
        "longitude": -3.440000057220460
    },
    "LRU": {
        "latitude": 32.289398193359400,
        "longitude": -106.9219970703130
    },
    "LSC": {
        "latitude": -29.916201,
        "longitude": -71.199501
    },
    "LSE": {
        "latitude": 43.879002,
        "longitude": -91.256699
    },
    "LSF": {
        "latitude": 32.337299346900000,
        "longitude": -84.9913024902
    },
    "LSH": {
        "latitude": 22.9778995513916,
        "longitude": 97.752197265625
    },
    "LSI": {
        "latitude": 59.87889862060550,
        "longitude": -1.2955600023269700
    },
    "LSL": {
        "latitude": 11.035300254821800,
        "longitude": -84.70610046386720
    },
    "LSP": {
        "latitude": 11.78077507019040,
        "longitude": -70.15149688720700
    },
    "LST": {
        "latitude": -41.54529953,
        "longitude": 147.214004517
    },
    "LSV": {
        "latitude": 36.2361984253,
        "longitude": -115.033996582
    },
    "LSX": {
        "latitude": 5.069509983062740,
        "longitude": 97.25920104980470
    },
    "LSY": {
        "latitude": -28.830689,
        "longitude": 153.258419
    },
    "LTA": {
        "latitude": -23.8243999481,
        "longitude": 30.329299926800000
    },
    "LTD": {
        "latitude": 30.15169906616210,
        "longitude": 9.715310096740720
    },
    "LTI": {
        "latitude": 46.376399993896500,
        "longitude": 96.22109985351560
    },
    "LTK": {
        "latitude": 35.4011,
        "longitude": 35.9487
    },
    "LTM": {
        "latitude": 3.37276,
        "longitude": -59.789398
    },
    "LTN": {
        "latitude": 51.874698638916000,
        "longitude": -0.36833301186561600
    },
    "LTO": {
        "latitude": 25.989200592041000,
        "longitude": -111.3479995727540
    },
    "LTQ": {
        "latitude": 50.517398834228500,
        "longitude": 1.6205899715423600
    },
    "LTS": {
        "latitude": 34.667099,
        "longitude": -99.266701
    },
    "LTU": {
        "latitude": 18.411501,
        "longitude": 76.464699
    },
    "LTX": {
        "latitude": -0.906833,
        "longitude": -78.615799
    },
    "LUD": {
        "latitude": -26.687400817871100,
        "longitude": 15.242899894714400
    },
    "LUF": {
        "latitude": 33.535,
        "longitude": -112.383003
    },
    "LUG": {
        "latitude": 46.00429916380000,
        "longitude": 8.9105796814
    },
    "LUH": {
        "latitude": 30.854700088501000,
        "longitude": 75.95259857177730
    },
    "LUK": {
        "latitude": 39.10329819,
        "longitude": -84.41860199
    },
    "LUM": {
        "latitude": 24.4011,
        "longitude": 98.5317
    },
    "LUN": {
        "latitude": -15.330833,
        "longitude": 28.452722
    },
    "LUO": {
        "latitude": -11.768099784851100,
        "longitude": 19.8976993560791
    },
    "LUQ": {
        "latitude": -33.2732009888,
        "longitude": -66.3563995361
    },
    "LUR": {
        "latitude": 68.87509918,
        "longitude": -166.1100006
    },
    "LUV": {
        "latitude": -5.760278,
        "longitude": 132.759444
    },
    "LUW": {
        "latitude": -1.035893,
        "longitude": 122.773934
    },
    "LUX": {
        "latitude": 49.6233333,
        "longitude": 6.2044444
    },
    "LUZ": {
        "latitude": 51.240278,
        "longitude": 22.713611
    },
    "LVA": {
        "latitude": 48.03139877319340,
        "longitude": -0.7429860234260560
    },
    "LVI": {
        "latitude": -17.8218,
        "longitude": 25.822701
    },
    "LVM": {
        "latitude": 45.6994018555,
        "longitude": -110.447998047
    },
    "LVP": {
        "latitude": 26.810300827026400,
        "longitude": 53.356300354003900
    },
    "LVS": {
        "latitude": 35.654202,
        "longitude": -105.141998
    },
    "LWB": {
        "latitude": 37.8582992554,
        "longitude": -80.3994979858
    },
    "LWM": {
        "latitude": 42.717201232900000,
        "longitude": -71.1233978271
    },
    "LWN": {
        "latitude": 40.750401,
        "longitude": 43.859299
    },
    "LWO": {
        "latitude": 49.8125,
        "longitude": 23.9561
    },
    "LWR": {
        "latitude": 53.228599548339800,
        "longitude": 5.760560035705570
    },
    "LWS": {
        "latitude": 46.3745002746582,
        "longitude": -117.01499938964800
    },
    "LWT": {
        "latitude": 47.04930114746090,
        "longitude": -109.46700286865200
    },
    "LXA": {
        "latitude": 29.298001,
        "longitude": 90.911951
    },
    "LXR": {
        "latitude": 25.674629,
        "longitude": 32.700012
    },
    "LYA": {
        "latitude": 34.7411,
        "longitude": 112.388
    },
    "LYB": {
        "latitude": 19.660161,
        "longitude": -80.088826
    },
    "LYC": {
        "latitude": 64.548302,
        "longitude": 18.7162
    },
    "LYG": {
        "latitude": 34.41406,
        "longitude": 119.17899
    },
    "LYH": {
        "latitude": 37.326698,
        "longitude": -79.200401
    },
    "LYN": {
        "latitude": 45.72719955444340,
        "longitude": 4.944270133972170
    },
    "LYP": {
        "latitude": 31.364999771118200,
        "longitude": 72.99479675292970
    },
    "LYR": {
        "latitude": 78.246101379395,
        "longitude": 15.465600013733
    },
    "LYS": {
        "latitude": 45.725556,
        "longitude": 5.081111
    },
    "LYU": {
        "latitude": 47.82450104,
        "longitude": -91.83070374
    },
    "LYX": {
        "latitude": 50.9561,
        "longitude": 0.939167
    },
    "LZC": {
        "latitude": 18.0016994476,
        "longitude": -102.221000671
    },
    "LZG": {
        "latitude": 31.50191,
        "longitude": 106.034417
    },
    "LZH": {
        "latitude": 24.2075,
        "longitude": 109.390999
    },
    "LZN": {
        "latitude": 26.1598,
        "longitude": 119.958
    },
    "LZO": {
        "latitude": 29.030357,
        "longitude": 105.468407
    },
    "LZY": {
        "latitude": 29.303301,
        "longitude": 94.335297
    },
    "MAA": {
        "latitude": 12.990005,
        "longitude": 80.169296
    },
    "MAB": {
        "latitude": -5.36859,
        "longitude": -49.138
    },
    "MAD": {
        "latitude": 40.471926,
        "longitude": -3.56264
    },
    "MAF": {
        "latitude": 31.942499,
        "longitude": -102.202003
    },
    "MAG": {
        "latitude": -5.20707988739,
        "longitude": 145.789001465
    },
    "MAH": {
        "latitude": 39.862598,
        "longitude": 4.21865
    },
    "MAI": {
        "latitude": -14.482999801635700,
        "longitude": 35.266998291015600
    },
    "MAJ": {
        "latitude": 7.064760208129880,
        "longitude": 171.27200317382800
    },
    "MAK": {
        "latitude": 9.55897,
        "longitude": 31.652201
    },
    "MAM": {
        "latitude": 25.7698993683,
        "longitude": -97.5252990723
    },
    "MAN": {
        "latitude": 53.349375,
        "longitude": -2.279521
    },
    "MAO": {
        "latitude": -3.03861,
        "longitude": -60.049702
    },
    "MAQ": {
        "latitude": 16.699899673461900,
        "longitude": 98.54509735107420
    },
    "MAR": {
        "latitude": 10.5582084656,
        "longitude": -71.7278594971
    },
    "MAS": {
        "latitude": -2.06189,
        "longitude": 147.423996
    },
    "MAU": {
        "latitude": -16.42650032043460,
        "longitude": -152.24400329589800
    },
    "MAX": {
        "latitude": 15.5936,
        "longitude": -13.3228
    },
    "MAY": {
        "latitude": 24.287701,
        "longitude": -77.684601
    },
    "MAZ": {
        "latitude": 18.255699157714800,
        "longitude": -67.14849853515630
    },
    "MBA": {
        "latitude": -4.03483,
        "longitude": 39.5942
    },
    "MBD": {
        "latitude": -25.798400878900000,
        "longitude": 25.548000335700000
    },
    "MBE": {
        "latitude": 44.303901672400000,
        "longitude": 143.404006958
    },
    "MBG": {
        "latitude": 45.54650116,
        "longitude": -100.4079971
    },
    "MBI": {
        "latitude": -8.919942,
        "longitude": 33.273981
    },
    "MBJ": {
        "latitude": 18.503700256347700,
        "longitude": -77.91339874267580
    },
    "MBO": {
        "latitude": 13.208048,
        "longitude": 120.605457
    },
    "MBS": {
        "latitude": 43.532902,
        "longitude": -84.079597
    },
    "MBT": {
        "latitude": 12.369682,
        "longitude": 123.630095
    },
    "MBW": {
        "latitude": -37.975799560546900,
        "longitude": 145.1020050048830
    },
    "MBX": {
        "latitude": 46.4799,
        "longitude": 15.6861
    },
    "MCB": {
        "latitude": 31.178499,
        "longitude": -90.471901
    },
    "MCC": {
        "latitude": 38.667599,
        "longitude": -121.401001
    },
    "MCE": {
        "latitude": 37.28469849,
        "longitude": -120.5139999
    },
    "MCF": {
        "latitude": 27.8493,
        "longitude": -82.521202
    },
    "MCG": {
        "latitude": 62.95289993,
        "longitude": -155.6060028
    },
    "MCI": {
        "latitude": 39.2976,
        "longitude": -94.713898
    },
    "MCJ": {
        "latitude": 11.2325,
        "longitude": -72.4901
    },
    "MCK": {
        "latitude": 40.20629883,
        "longitude": -100.5920029
    },
    "MCN": {
        "latitude": 32.69279861450200,
        "longitude": -83.64920043945310
    },
    "MCO": {
        "latitude": 28.429399490356400,
        "longitude": -81.30899810791020
    },
    "MCP": {
        "latitude": 0.050664,
        "longitude": -51.072201
    },
    "MCS": {
        "latitude": -30.2719,
        "longitude": -57.6402
    },
    "MCT": {
        "latitude": 23.593299865722700,
        "longitude": 58.284400939941400
    },
    "MCU": {
        "latitude": 46.222599029541000,
        "longitude": 2.363960027694700
    },
    "MCW": {
        "latitude": 43.157799,
        "longitude": -93.331299
    },
    "MCX": {
        "latitude": 42.816799,
        "longitude": 47.652302
    },
    "MCY": {
        "latitude": -26.593324,
        "longitude": 153.08319
    },
    "MCZ": {
        "latitude": -9.51081,
        "longitude": -35.791698
    },
    "MDC": {
        "latitude": 1.54926,
        "longitude": 124.926003
    },
    "MDE": {
        "latitude": 6.16454,
        "longitude": -75.4231
    },
    "MDG": {
        "latitude": 44.5241012573,
        "longitude": 129.569000244
    },
    "MDH": {
        "latitude": 37.778099060058600,
        "longitude": -89.25199890136720
    },
    "MDI": {
        "latitude": 7.70388,
        "longitude": 8.61394
    },
    "MDK": {
        "latitude": 0.0226000007242,
        "longitude": 18.2887001038
    },
    "MDL": {
        "latitude": 21.702199935913100,
        "longitude": 95.97789764404300
    },
    "MDQ": {
        "latitude": -37.9342,
        "longitude": -57.5733
    },
    "MDT": {
        "latitude": 40.1935005188,
        "longitude": -76.7633972168
    },
    "MDU": {
        "latitude": -6.14774,
        "longitude": 143.656998
    },
    "MDW": {
        "latitude": 41.785999,
        "longitude": -87.752403
    },
    "MDY": {
        "latitude": 28.2017,
        "longitude": -177.380997
    },
    "MDZ": {
        "latitude": -32.8316993713,
        "longitude": -68.7929000854
    },
    "MEA": {
        "latitude": -22.343,
        "longitude": -41.765999
    },
    "MEB": {
        "latitude": -37.7281,
        "longitude": 144.901993
    },
    "MEC": {
        "latitude": -0.9460780024528500,
        "longitude": -80.67880249023440
    },
    "MED": {
        "latitude": 24.5534,
        "longitude": 39.705101
    },
    "MEE": {
        "latitude": -21.481700897216800,
        "longitude": 168.03799438476600
    },
    "MEG": {
        "latitude": -9.525090217590330,
        "longitude": 16.312400817871100
    },
    "MEH": {
        "latitude": 71.02970123291,
        "longitude": 27.826700210571
    },
    "MEI": {
        "latitude": 32.3326,
        "longitude": -88.7519
    },
    "MEK": {
        "latitude": 33.87910079956060,
        "longitude": -5.515120029449460
    },
    "MEL": {
        "latitude": -37.673302,
        "longitude": 144.843002
    },
    "MEM": {
        "latitude": 35.04240036010740,
        "longitude": -89.97669982910160
    },
    "MEN": {
        "latitude": 44.502102,
        "longitude": 3.53282
    },
    "MEQ": {
        "latitude": 4.040631,
        "longitude": 96.253538
    },
    "MER": {
        "latitude": 37.38050079,
        "longitude": -120.5680008
    },
    "MES": {
        "latitude": 3.558425,
        "longitude": 98.672275
    },
    "MEU": {
        "latitude": -0.889839,
        "longitude": -52.6022
    },
    "MEX": {
        "latitude": 19.4363,
        "longitude": -99.072098
    },
    "MFD": {
        "latitude": 40.82139968870000,
        "longitude": -82.5166015625
    },
    "MFE": {
        "latitude": 26.176141,
        "longitude": -98.237965
    },
    "MFG": {
        "latitude": 34.3390007019043,
        "longitude": 73.50859832763670
    },
    "MFH": {
        "latitude": 36.833105,
        "longitude": -114.055928
    },
    "MFK": {
        "latitude": 26.224199,
        "longitude": 120.002998
    },
    "MFM": {
        "latitude": 22.149599,
        "longitude": 113.592003
    },
    "MFQ": {
        "latitude": 13.5024995803833,
        "longitude": 7.1267499923706100
    },
    "MFR": {
        "latitude": 42.37419891357420,
        "longitude": -122.87300109863300
    },
    "MFU": {
        "latitude": -13.258899688720700,
        "longitude": 31.936599731445300
    },
    "MGA": {
        "latitude": 12.141500473022500,
        "longitude": -86.16819763183590
    },
    "MGB": {
        "latitude": -37.745602,
        "longitude": 140.785004
    },
    "MGE": {
        "latitude": 33.915401,
        "longitude": -84.516296
    },
    "MGF": {
        "latitude": -23.47606,
        "longitude": -52.016187
    },
    "MGH": {
        "latitude": -30.8574008942,
        "longitude": 30.343000412
    },
    "MGL": {
        "latitude": 51.230278,
        "longitude": 6.504444
    },
    "MGM": {
        "latitude": 32.300598,
        "longitude": -86.393997
    },
    "MGN": {
        "latitude": 9.28474,
        "longitude": -74.8461
    },
    "MGQ": {
        "latitude": 2.0144400596618700,
        "longitude": 45.3046989440918
    },
    "MGW": {
        "latitude": 39.643305,
        "longitude": -79.917598
    },
    "MGZ": {
        "latitude": 12.439800262451200,
        "longitude": 98.62149810791020
    },
    "MHD": {
        "latitude": 36.235198974609400,
        "longitude": 59.64099884033200
    },
    "MHG": {
        "latitude": 49.473057,
        "longitude": 8.514167
    },
    "MHH": {
        "latitude": 26.5114,
        "longitude": -77.083503
    },
    "MHK": {
        "latitude": 39.14099884033200,
        "longitude": -96.6707992553711
    },
    "MHQ": {
        "latitude": 60.1222,
        "longitude": 19.898199
    },
    "MHR": {
        "latitude": 38.553902,
        "longitude": -121.297997
    },
    "MHT": {
        "latitude": 42.932598,
        "longitude": -71.435699
    },
    "MHU": {
        "latitude": -37.0475006104,
        "longitude": 147.333999634
    },
    "MHZ": {
        "latitude": 52.3619,
        "longitude": 0.486406
    },
    "MIA": {
        "latitude": 25.79319953918460,
        "longitude": -80.29060363769530
    },
    "MIB": {
        "latitude": 48.4156,
        "longitude": -101.358002
    },
    "MID": {
        "latitude": 20.937000274700000,
        "longitude": -89.657699585
    },
    "MIE": {
        "latitude": 40.242298,
        "longitude": -85.395897
    },
    "MIG": {
        "latitude": 31.428101,
        "longitude": 104.740997
    },
    "MII": {
        "latitude": -22.196899,
        "longitude": -49.926485
    },
    "MIK": {
        "latitude": 61.6866,
        "longitude": 27.201799
    },
    "MIM": {
        "latitude": -36.9085998535,
        "longitude": 149.901000977
    },
    "MIP": {
        "latitude": 30.776100158691400,
        "longitude": 34.66669845581060
    },
    "MIR": {
        "latitude": 35.75809860229490,
        "longitude": 10.75469970703130
    },
    "MIU": {
        "latitude": 11.855299949646000,
        "longitude": 13.080900192260700
    },
    "MIV": {
        "latitude": 39.367802,
        "longitude": -75.072197
    },
    "MJC": {
        "latitude": 7.272069931030270,
        "longitude": -7.58735990524292
    },
    "MJD": {
        "latitude": 27.3351993560791,
        "longitude": 68.14309692382810
    },
    "MJF": {
        "latitude": 65.783997,
        "longitude": 13.2149
    },
    "MJI": {
        "latitude": 32.89177,
        "longitude": 13.287878
    },
    "MJK": {
        "latitude": -25.897294,
        "longitude": 113.575802
    },
    "MJL": {
        "latitude": -1.845139980316160,
        "longitude": 11.056699752807600
    },
    "MJM": {
        "latitude": -6.121240139010000,
        "longitude": 23.569000244100000
    },
    "MJN": {
        "latitude": -15.666842,
        "longitude": 46.351233
    },
    "MJT": {
        "latitude": 39.0567016602,
        "longitude": 26.5983009338
    },
    "MJV": {
        "latitude": 37.775002,
        "longitude": -0.812389
    },
    "MJZ": {
        "latitude": 62.534698486328100,
        "longitude": 114.03900146484400
    },
    "MKC": {
        "latitude": 39.123199462890600,
        "longitude": -94.5927963256836
    },
    "MKE": {
        "latitude": 42.947200775146500,
        "longitude": -87.89659881591800
    },
    "MKG": {
        "latitude": 43.169498,
        "longitude": -86.238197
    },
    "MKK": {
        "latitude": 21.152901,
        "longitude": -157.095993
    },
    "MKL": {
        "latitude": 35.599899,
        "longitude": -88.915604
    },
    "MKM": {
        "latitude": 2.881944,
        "longitude": 112.043333
    },
    "MKP": {
        "latitude": -16.5839,
        "longitude": -143.658005
    },
    "MKQ": {
        "latitude": -8.523898,
        "longitude": 140.419693
    },
    "MKR": {
        "latitude": -26.6117000579834,
        "longitude": 118.5479965209960
    },
    "MKU": {
        "latitude": 0.5792109966278080,
        "longitude": 12.890899658203100
    },
    "MKW": {
        "latitude": -0.891833,
        "longitude": 134.048996
    },
    "MKY": {
        "latitude": -21.170816,
        "longitude": 149.182588
    },
    "MKZ": {
        "latitude": 2.265613,
        "longitude": 102.252778
    },
    "MLA": {
        "latitude": 35.857498,
        "longitude": 14.4775
    },
    "MLB": {
        "latitude": 28.1028,
        "longitude": -80.645302
    },
    "MLC": {
        "latitude": 34.882401,
        "longitude": -95.783501
    },
    "MLE": {
        "latitude": 4.191830158233640,
        "longitude": 73.52909851074220
    },
    "MLI": {
        "latitude": 41.448502,
        "longitude": -90.5075
    },
    "MLL": {
        "latitude": 61.8642997742,
        "longitude": -162.026000977
    },
    "MLM": {
        "latitude": 19.849899,
        "longitude": -101.025002
    },
    "MLN": {
        "latitude": 35.2798,
        "longitude": -2.95626
    },
    "MLS": {
        "latitude": 46.428001,
        "longitude": -105.886002
    },
    "MLU": {
        "latitude": 32.510899,
        "longitude": -92.037697
    },
    "MLW": {
        "latitude": 6.289060115814210,
        "longitude": -10.758700370788600
    },
    "MLX": {
        "latitude": 38.435298919700000,
        "longitude": 38.0909996033
    },
    "MMB": {
        "latitude": 43.8805999756,
        "longitude": 144.164001465
    },
    "MMD": {
        "latitude": 25.8465,
        "longitude": 131.263
    },
    "MME": {
        "latitude": 54.509201,
        "longitude": -1.42941
    },
    "MMG": {
        "latitude": -28.116100311279300,
        "longitude": 117.84200286865200
    },
    "MMJ": {
        "latitude": 36.166801,
        "longitude": 137.923004
    },
    "MMK": {
        "latitude": 68.78170013427730,
        "longitude": 32.75080108642580
    },
    "MMO": {
        "latitude": 15.155900001525900,
        "longitude": -23.213699340820300
    },
    "MMT": {
        "latitude": 33.92079926,
        "longitude": -80.80130005
    },
    "MMU": {
        "latitude": 40.799400329589800,
        "longitude": -74.41490173339840
    },
    "MMX": {
        "latitude": 55.536305,
        "longitude": 13.376198
    },
    "MMY": {
        "latitude": 24.782800674400000,
        "longitude": 125.294998169
    },
    "MMZ": {
        "latitude": 35.930801,
        "longitude": 64.760902
    },
    "MNG": {
        "latitude": -12.0560998917,
        "longitude": 134.23399353
    },
    "MNH": {
        "latitude": 23.640556,
        "longitude": 57.4875
    },
    "MNI": {
        "latitude": 16.791400909423800,
        "longitude": -62.19329833984380
    },
    "MNJ": {
        "latitude": -21.201799,
        "longitude": 48.358299
    },
    "MNL": {
        "latitude": 14.5086,
        "longitude": 121.019997
    },
    "MNR": {
        "latitude": -15.254500389099100,
        "longitude": 23.16230010986330
    },
    "MNX": {
        "latitude": -5.81138,
        "longitude": -61.278301
    },
    "MOA": {
        "latitude": 20.653900146484400,
        "longitude": -74.92220306396480
    },
    "MOB": {
        "latitude": 30.6912,
        "longitude": -88.242798
    },
    "MOC": {
        "latitude": -16.706919,
        "longitude": -43.818901
    },
    "MOD": {
        "latitude": 37.625801,
        "longitude": -120.954002
    },
    "MOE": {
        "latitude": 23.092500686645500,
        "longitude": 96.64530181884770
    },
    "MOG": {
        "latitude": 20.516799926757800,
        "longitude": 99.25679779052730
    },
    "MOL": {
        "latitude": 62.744701,
        "longitude": 7.2625
    },
    "MON": {
        "latitude": -43.76499938964840,
        "longitude": 170.13299560546900
    },
    "MOQ": {
        "latitude": -20.2847,
        "longitude": 44.3176
    },
    "MOT": {
        "latitude": 48.2593994140625,
        "longitude": -101.27999877929700
    },
    "MOV": {
        "latitude": -22.057800293,
        "longitude": 148.07699585
    },
    "MOZ": {
        "latitude": -17.48979,
        "longitude": -149.761777
    },
    "MPH": {
        "latitude": 11.9245,
        "longitude": 121.954002
    },
    "MPL": {
        "latitude": 43.57619857788090,
        "longitude": 3.96301007270813
    },
    "MPM": {
        "latitude": -25.920799,
        "longitude": 32.572601
    },
    "MPN": {
        "latitude": -51.82279968261720,
        "longitude": -58.447200775146500
    },
    "MPV": {
        "latitude": 44.20349884,
        "longitude": -72.56230164
    },
    "MPW": {
        "latitude": 47.07609939575200,
        "longitude": 37.44960021972660
    },
    "MQC": {
        "latitude": 47.095501,
        "longitude": -56.380299
    },
    "MQF": {
        "latitude": 53.39310073852540,
        "longitude": 58.755699157714800
    },
    "MQH": {
        "latitude": -13.5491,
        "longitude": -48.195301
    },
    "MQJ": {
        "latitude": 66.450861,
        "longitude": 143.261551
    },
    "MQL": {
        "latitude": -34.229198455800000,
        "longitude": 142.085998535
    },
    "MQM": {
        "latitude": 37.223300933800000,
        "longitude": 40.6316986084
    },
    "MQN": {
        "latitude": 66.363899230957,
        "longitude": 14.301400184631
    },
    "MQP": {
        "latitude": -25.3831996918,
        "longitude": 31.1056003571
    },
    "MQQ": {
        "latitude": 8.62441,
        "longitude": 16.0714
    },
    "MQS": {
        "latitude": 12.8879,
        "longitude": -61.180199
    },
    "MQT": {
        "latitude": 46.3536,
        "longitude": -87.395401
    },
    "MQU": {
        "latitude": 5.21256,
        "longitude": -74.8836
    },
    "MQX": {
        "latitude": 13.467399597168000,
        "longitude": 39.53350067138670
    },
    "MQY": {
        "latitude": 36.0089988708,
        "longitude": -86.5201034546
    },
    "MRB": {
        "latitude": 39.40190125,
        "longitude": -77.98459625
    },
    "MRD": {
        "latitude": 8.582078,
        "longitude": -71.161041
    },
    "MRE": {
        "latitude": -1.406111,
        "longitude": 35.008057
    },
    "MRG": {
        "latitude": -17.06920051574710,
        "longitude": 145.41900634765600
    },
    "MRI": {
        "latitude": 61.2135009765625,
        "longitude": -149.843994140625
    },
    "MRO": {
        "latitude": -40.974634,
        "longitude": 175.63454
    },
    "MRQ": {
        "latitude": 13.361000061035200,
        "longitude": 121.82599639892600
    },
    "MRR": {
        "latitude": -4.37823009491,
        "longitude": -79.94100189210000
    },
    "MRS": {
        "latitude": 43.439271922,
        "longitude": 5.22142410278
    },
    "MRU": {
        "latitude": -20.430201,
        "longitude": 57.683601
    },
    "MRV": {
        "latitude": 44.225101470947300,
        "longitude": 43.08190155029300
    },
    "MRW": {
        "latitude": 54.699299,
        "longitude": 11.4401
    },
    "MRX": {
        "latitude": 30.5562,
        "longitude": 49.151901
    },
    "MRY": {
        "latitude": 36.58700180053710,
        "longitude": -121.84300231933600
    },
    "MRZ": {
        "latitude": -29.498899459800000,
        "longitude": 149.845001221
    },
    "MSA": {
        "latitude": 53.44139862060550,
        "longitude": -91.76280212402340
    },
    "MSH": {
        "latitude": 20.6754,
        "longitude": 58.890499
    },
    "MSJ": {
        "latitude": 40.703201,
        "longitude": 141.367996
    },
    "MSL": {
        "latitude": 34.74530029,
        "longitude": -87.61019897
    },
    "MSN": {
        "latitude": 43.1399,
        "longitude": -89.337502
    },
    "MSO": {
        "latitude": 46.91630173,
        "longitude": -114.0910034
    },
    "MSP": {
        "latitude": 44.882,
        "longitude": -93.221802
    },
    "MSQ": {
        "latitude": 53.888071,
        "longitude": 28.039964
    },
    "MSR": {
        "latitude": 38.747798919677700,
        "longitude": 41.66120147705080
    },
    "MSS": {
        "latitude": 44.936157,
        "longitude": -74.844304
    },
    "MST": {
        "latitude": 50.911701,
        "longitude": 5.77014
    },
    "MSU": {
        "latitude": -29.462299346923800,
        "longitude": 27.552499771118200
    },
    "MSW": {
        "latitude": 15.670000076293900,
        "longitude": 39.37009811401370
    },
    "MSY": {
        "latitude": 29.99340057373050,
        "longitude": -90.25800323486330
    },
    "MSZ": {
        "latitude": -15.2612,
        "longitude": 12.1468
    },
    "MTC": {
        "latitude": 42.613463,
        "longitude": -82.836919
    },
    "MTH": {
        "latitude": 24.726101,
        "longitude": -81.051399
    },
    "MTJ": {
        "latitude": 38.509799957300000,
        "longitude": -107.893997192
    },
    "MTN": {
        "latitude": 39.325699,
        "longitude": -76.413803
    },
    "MTR": {
        "latitude": 8.82374,
        "longitude": -75.8258
    },
    "MTS": {
        "latitude": -26.528999,
        "longitude": 31.307501
    },
    "MTT": {
        "latitude": 18.103399,
        "longitude": -94.580704
    },
    "MTY": {
        "latitude": 25.7785,
        "longitude": -100.107002
    },
    "MTZ": {
        "latitude": 31.32819938659670,
        "longitude": 35.38859939575200
    },
    "MUA": {
        "latitude": -8.32797,
        "longitude": 157.263
    },
    "MUB": {
        "latitude": -19.97260093688970,
        "longitude": 23.431100845336900
    },
    "MUC": {
        "latitude": 48.353802,
        "longitude": 11.7861
    },
    "MUD": {
        "latitude": -11.672900199890100,
        "longitude": 39.5630989074707
    },
    "MUE": {
        "latitude": 20.001301,
        "longitude": -155.667999
    },
    "MUH": {
        "latitude": 31.338225,
        "longitude": 27.217577
    },
    "MUI": {
        "latitude": 40.434799,
        "longitude": -76.569397
    },
    "MUN": {
        "latitude": 9.749023,
        "longitude": -63.153348
    },
    "MUO": {
        "latitude": 43.043598,
        "longitude": -115.872002
    },
    "MUR": {
        "latitude": 4.178734,
        "longitude": 114.330318
    },
    "MUW": {
        "latitude": 35.207699,
        "longitude": 0.147142
    },
    "MUX": {
        "latitude": 30.20319938659670,
        "longitude": 71.41909790039060
    },
    "MVB": {
        "latitude": -1.6561599969863900,
        "longitude": 13.437999725341800
    },
    "MVD": {
        "latitude": -34.835647,
        "longitude": -56.026497
    },
    "MVF": {
        "latitude": -5.20192,
        "longitude": -37.3643
    },
    "MVP": {
        "latitude": 1.25366,
        "longitude": -70.2339
    },
    "MVQ": {
        "latitude": 53.954898834228500,
        "longitude": 30.09510040283200
    },
    "MVR": {
        "latitude": 10.451399803161600,
        "longitude": 14.257399559021000
    },
    "MVT": {
        "latitude": -14.8681001663208,
        "longitude": -148.7169952392580
    },
    "MVZ": {
        "latitude": -20.055299758911100,
        "longitude": 30.859100341796900
    },
    "MWD": {
        "latitude": 32.5630989074707,
        "longitude": 71.5707015991211
    },
    "MWE": {
        "latitude": 18.443333,
        "longitude": 31.843333
    },
    "MWH": {
        "latitude": 47.20769882,
        "longitude": -119.3199997
    },
    "MWX": {
        "latitude": 34.991406,
        "longitude": 126.382814
    },
    "MWZ": {
        "latitude": -2.4444899559021000,
        "longitude": 32.932701110839800
    },
    "MXF": {
        "latitude": 32.3829,
        "longitude": -86.365799
    },
    "MXI": {
        "latitude": 6.949091,
        "longitude": 126.27368
    },
    "MXJ": {
        "latitude": 9.652170181274410,
        "longitude": 6.462259769439700
    },
    "MXL": {
        "latitude": 32.6306,
        "longitude": -115.241997
    },
    "MXM": {
        "latitude": -21.753837,
        "longitude": 43.374753
    },
    "MXN": {
        "latitude": 48.6031990051,
        "longitude": -3.81577992439
    },
    "MXP": {
        "latitude": 45.6306,
        "longitude": 8.72811
    },
    "MXV": {
        "latitude": 49.663299560546900,
        "longitude": 100.0989990234380
    },
    "MXX": {
        "latitude": 60.957901,
        "longitude": 14.5114
    },
    "MYA": {
        "latitude": -35.8978004456,
        "longitude": 150.143997192
    },
    "MYC": {
        "latitude": 10.249978065490700,
        "longitude": -67.64942169189450
    },
    "MYD": {
        "latitude": -3.2293100357055700,
        "longitude": 40.10169982910160
    },
    "MYE": {
        "latitude": 34.073600769,
        "longitude": 139.559997559
    },
    "MYG": {
        "latitude": 22.379499,
        "longitude": -73.013494
    },
    "MYJ": {
        "latitude": 33.82720184326170,
        "longitude": 132.6999969482420
    },
    "MYL": {
        "latitude": 44.88970184,
        "longitude": -116.1009979
    },
    "MYP": {
        "latitude": 37.62353,
        "longitude": 61.895668
    },
    "MYR": {
        "latitude": 33.6796989441,
        "longitude": -78.9282989502
    },
    "MYT": {
        "latitude": 25.38360023498540,
        "longitude": 97.35189819335940
    },
    "MYU": {
        "latitude": 60.37139892578130,
        "longitude": -166.27099609375
    },
    "MYV": {
        "latitude": 39.09780121,
        "longitude": -121.5699997
    },
    "MYW": {
        "latitude": -10.336204,
        "longitude": 40.181997
    },
    "MYY": {
        "latitude": 4.32201,
        "longitude": 113.987
    },
    "MZB": {
        "latitude": -11.361800193786600,
        "longitude": 40.35490036010740
    },
    "MZG": {
        "latitude": 23.568701,
        "longitude": 119.627998
    },
    "MZI": {
        "latitude": 14.5128,
        "longitude": -4.07956
    },
    "MZL": {
        "latitude": 5.0296,
        "longitude": -75.4647
    },
    "MZO": {
        "latitude": 20.288605,
        "longitude": -77.087545
    },
    "MZQ": {
        "latitude": -27.626100540161100,
        "longitude": 32.0443000793457
    },
    "MZR": {
        "latitude": 36.706902,
        "longitude": 67.209702
    },
    "MZT": {
        "latitude": 23.1614,
        "longitude": -106.265999
    },
    "MZU": {
        "latitude": 26.119101,
        "longitude": 85.313698
    },
    "MZV": {
        "latitude": 4.048329830169680,
        "longitude": 114.80500030517600
    },
    "MZW": {
        "latitude": 33.535900116,
        "longitude": -0.242353007197
    },
    "NAA": {
        "latitude": -30.3192005157,
        "longitude": 149.82699585
    },
    "NAG": {
        "latitude": 21.092199,
        "longitude": 79.047203
    },
    "NAH": {
        "latitude": 3.6832098960876500,
        "longitude": 125.52799987793000
    },
    "NAJ": {
        "latitude": 39.18880081176760,
        "longitude": 45.45840072631840
    },
    "NAK": {
        "latitude": 14.9495,
        "longitude": 102.313004
    },
    "NAL": {
        "latitude": 43.512901306152300,
        "longitude": 43.636600494384800
    },
    "NAN": {
        "latitude": -17.755399703979500,
        "longitude": 177.4429931640630
    },
    "NAP": {
        "latitude": 40.886002,
        "longitude": 14.2908
    },
    "NAS": {
        "latitude": 25.039,
        "longitude": -77.466202
    },
    "NAT": {
        "latitude": -5.769804,
        "longitude": -35.366578
    },
    "NAW": {
        "latitude": 6.5199198722839400,
        "longitude": 101.74299621582000
    },
    "NAY": {
        "latitude": 39.48595,
        "longitude": 116.37236
    },
    "NBC": {
        "latitude": 55.564701080322300,
        "longitude": 52.092498779296900
    },
    "NBE": {
        "latitude": 36.075833,
        "longitude": 10.438611
    },
    "NBG": {
        "latitude": 29.82530022,
        "longitude": -90.03500366
    },
    "NBO": {
        "latitude": -1.31923997402,
        "longitude": 36.9277992249
    },
    "NBS": {
        "latitude": 42.066944,
        "longitude": 127.602222
    },
    "NBW": {
        "latitude": 19.9065,
        "longitude": -75.2071
    },
    "NBX": {
        "latitude": -3.368586,
        "longitude": 135.496702
    },
    "NCA": {
        "latitude": 21.916094,
        "longitude": -71.942954
    },
    "NCE": {
        "latitude": 43.658401,
        "longitude": 7.21587
    },
    "NCL": {
        "latitude": 55.037498,
        "longitude": -1.69167
    },
    "NCO": {
        "latitude": 41.597099304199,
        "longitude": -71.412101745605
    },
    "NCS": {
        "latitude": -27.7705993652,
        "longitude": 29.976900100700000
    },
    "NCU": {
        "latitude": 42.4884,
        "longitude": 59.623299
    },
    "NCY": {
        "latitude": 45.9308333,
        "longitude": 6.1063889
    },
    "NDB": {
        "latitude": 20.9330997467041,
        "longitude": -17.030000686645500
    },
    "NDC": {
        "latitude": 19.1833000183,
        "longitude": 77.31670379640000
    },
    "NDD": {
        "latitude": -11.167900085449200,
        "longitude": 13.84749984741210
    },
    "NDG": {
        "latitude": 47.239601135253900,
        "longitude": 123.91799926757800
    },
    "NDJ": {
        "latitude": 12.1337,
        "longitude": 15.034
    },
    "NDR": {
        "latitude": 34.9888,
        "longitude": -3.02821
    },
    "NDU": {
        "latitude": -17.956499099731,
        "longitude": 19.719400405884
    },
    "NEC": {
        "latitude": -38.490746,
        "longitude": -58.816337
    },
    "NEL": {
        "latitude": 40.03329849,
        "longitude": -74.353302
    },
    "NER": {
        "latitude": 56.913898468018,
        "longitude": 124.91400146484
    },
    "NEU": {
        "latitude": 20.418399810791000,
        "longitude": 104.06700134277300
    },
    "NEV": {
        "latitude": 17.205699920654300,
        "longitude": -62.589900970459000
    },
    "NEW": {
        "latitude": 30.042400360107,
        "longitude": -90.028297424316
    },
    "NFG": {
        "latitude": 61.108299255371100,
        "longitude": 72.6500015258789
    },
    "NFL": {
        "latitude": 39.41659927,
        "longitude": -118.7009964
    },
    "NGA": {
        "latitude": -34.25559997558590,
        "longitude": 148.2480010986330
    },
    "NGB": {
        "latitude": 29.82670021057130,
        "longitude": 121.46199798584000
    },
    "NGE": {
        "latitude": 7.3570098876953100,
        "longitude": 13.559200286865200
    },
    "NGF": {
        "latitude": 21.4505,
        "longitude": -157.768005
    },
    "NGO": {
        "latitude": 34.8583984375,
        "longitude": 136.80499267578100
    },
    "NGQ": {
        "latitude": 32.1,
        "longitude": 80.053056
    },
    "NGS": {
        "latitude": 32.916900634800000,
        "longitude": 129.914001465
    },
    "NGU": {
        "latitude": 36.937599,
        "longitude": -76.289299
    },
    "NHD": {
        "latitude": 25.0268001556,
        "longitude": 55.3661994934
    },
    "NHK": {
        "latitude": 38.285999,
        "longitude": -76.411797
    },
    "NHT": {
        "latitude": 51.553001403800000,
        "longitude": -0.418166995049
    },
    "NHV": {
        "latitude": -8.7956,
        "longitude": -140.229004
    },
    "NHZ": {
        "latitude": 43.89220047,
        "longitude": -69.93859863
    },
    "NIM": {
        "latitude": 13.4815,
        "longitude": 2.18361
    },
    "NIP": {
        "latitude": 30.2358,
        "longitude": -81.680603
    },
    "NIT": {
        "latitude": 46.313477,
        "longitude": -0.394529
    },
    "NJA": {
        "latitude": 35.454601,
        "longitude": 139.449997
    },
    "NJC": {
        "latitude": 60.94929885864260,
        "longitude": 76.48359680175780
    },
    "NJF": {
        "latitude": 31.989853,
        "longitude": 44.404317
    },
    "NJK": {
        "latitude": 32.829201,
        "longitude": -115.671996
    },
    "NKC": {
        "latitude": 18.31,
        "longitude": -15.9697222
    },
    "NKG": {
        "latitude": 31.735032,
        "longitude": 118.865949
    },
    "NKM": {
        "latitude": 35.255759,
        "longitude": 136.924095
    },
    "NKT": {
        "latitude": 37.3647,
        "longitude": 42.0582
    },
    "NKW": {
        "latitude": -7.31327,
        "longitude": 72.411102
    },
    "NKX": {
        "latitude": 32.86840057,
        "longitude": -117.1429977
    },
    "NLA": {
        "latitude": -12.998512,
        "longitude": 28.664047
    },
    "NLC": {
        "latitude": 36.33300018,
        "longitude": -119.9520035
    },
    "NLD": {
        "latitude": 27.443899,
        "longitude": -99.570503
    },
    "NLH": {
        "latitude": 27.5403,
        "longitude": 100.7593
    },
    "NLI": {
        "latitude": 53.154999,
        "longitude": 140.649994
    },
    "NLK": {
        "latitude": -29.041887,
        "longitude": 167.939616
    },
    "NLO": {
        "latitude": -4.32666015625,
        "longitude": 15.327500343323
    },
    "NLT": {
        "latitude": 43.4318,
        "longitude": 83.3786
    },
    "NLU": {
        "latitude": 19.7458,
        "longitude": -99.0145
    },
    "NLV": {
        "latitude": 47.057899,
        "longitude": 31.9198
    },
    "NMB": {
        "latitude": 20.434401,
        "longitude": 72.843201
    },
    "NMC": {
        "latitude": 24.594299,
        "longitude": -76.820198
    },
    "NMF": {
        "latitude": 5.818394,
        "longitude": 73.469181
    },
    "NMS": {
        "latitude": 20.890499114990200,
        "longitude": 97.73590087890630
    },
    "NNA": {
        "latitude": 34.298901,
        "longitude": -6.59588
    },
    "NNG": {
        "latitude": 22.608299,
        "longitude": 108.171997
    },
    "NNM": {
        "latitude": 67.63999938964840,
        "longitude": 53.12189865112310
    },
    "NNT": {
        "latitude": 18.807899475097700,
        "longitude": 100.78299713134800
    },
    "NOA": {
        "latitude": -34.9466,
        "longitude": 150.542451
    },
    "NOB": {
        "latitude": 9.976490020750000,
        "longitude": -85.65299987790000
    },
    "NOC": {
        "latitude": 53.910301,
        "longitude": -8.81849
    },
    "NOJ": {
        "latitude": 63.18330001831060,
        "longitude": 75.2699966430664
    },
    "NOP": {
        "latitude": 42.018313,
        "longitude": 35.071774
    },
    "NOS": {
        "latitude": -13.3121,
        "longitude": 48.3148
    },
    "NOU": {
        "latitude": -22.014601,
        "longitude": 166.212997
    },
    "NOV": {
        "latitude": -12.808899879455600,
        "longitude": 15.760499954223600
    },
    "NOZ": {
        "latitude": 53.811401,
        "longitude": 86.877197
    },
    "NPA": {
        "latitude": 30.352699,
        "longitude": -87.318604
    },
    "NPE": {
        "latitude": -39.465801,
        "longitude": 176.869995
    },
    "NPL": {
        "latitude": -39.00859832763670,
        "longitude": 174.1790008544920
    },
    "NPO": {
        "latitude": -0.34886899590492,
        "longitude": 111.74800109863
    },
    "NQA": {
        "latitude": 35.356701,
        "longitude": -89.8703
    },
    "NQI": {
        "latitude": 27.5072002411,
        "longitude": -97.8097000122
    },
    "NQN": {
        "latitude": -38.949001,
        "longitude": -68.155701
    },
    "NQT": {
        "latitude": 52.919998,
        "longitude": -1.07917
    },
    "NQX": {
        "latitude": 24.57579994,
        "longitude": -81.68890381
    },
    "NQY": {
        "latitude": 50.44060134887700,
        "longitude": -4.995409965515140
    },
    "NQZ": {
        "latitude": 51.022202,
        "longitude": 71.466904
    },
    "NRA": {
        "latitude": -34.7022018433,
        "longitude": 146.511993408
    },
    "NRB": {
        "latitude": 30.39109993,
        "longitude": -81.42469788
    },
    "NRK": {
        "latitude": 58.586299896240200,
        "longitude": 16.250600814819300
    },
    "NRN": {
        "latitude": 51.6024017334,
        "longitude": 6.14216995239
    },
    "NRT": {
        "latitude": 35.764702,
        "longitude": 140.386002
    },
    "NSE": {
        "latitude": 30.7241993,
        "longitude": -87.02189636
    },
    "NSH": {
        "latitude": 36.664286,
        "longitude": 51.46273
    },
    "NSI": {
        "latitude": 3.722559928894040,
        "longitude": 11.553299903869600
    },
    "NSK": {
        "latitude": 69.31109619140630,
        "longitude": 87.33219909667970
    },
    "NSN": {
        "latitude": -41.298302,
        "longitude": 173.220993
    },
    "NST": {
        "latitude": 8.539620399475100,
        "longitude": 99.9447021484375
    },
    "NSY": {
        "latitude": 37.401699,
        "longitude": 14.9224
    },
    "NTB": {
        "latitude": 59.565701,
        "longitude": 9.21222
    },
    "NTD": {
        "latitude": 34.120300293,
        "longitude": -119.121002197
    },
    "NTE": {
        "latitude": 47.153198242200000,
        "longitude": -1.61073005199
    },
    "NTG": {
        "latitude": 32.070801,
        "longitude": 120.975998
    },
    "NTL": {
        "latitude": -32.79499816894530,
        "longitude": 151.83399963378900
    },
    "NTN": {
        "latitude": -17.68409,
        "longitude": 141.069664
    },
    "NTQ": {
        "latitude": 37.293098,
        "longitude": 136.962006
    },
    "NTR": {
        "latitude": 25.865601,
        "longitude": -100.237
    },
    "NTU": {
        "latitude": 36.820702,
        "longitude": -76.033501
    },
    "NTX": {
        "latitude": 3.90871,
        "longitude": 108.388
    },
    "NUE": {
        "latitude": 49.498699,
        "longitude": 11.078056
    },
    "NUI": {
        "latitude": 70.209999,
        "longitude": -151.005998
    },
    "NUM": {
        "latitude": 27.927598,
        "longitude": 35.28874
    },
    "NUQ": {
        "latitude": 37.4161,
        "longitude": -122.049004
    },
    "NUW": {
        "latitude": 48.351799,
        "longitude": -122.655998
    },
    "NUX": {
        "latitude": 66.06939697265630,
        "longitude": 76.52030181884770
    },
    "NVA": {
        "latitude": 2.95015,
        "longitude": -75.294
    },
    "NVI": {
        "latitude": 40.117199,
        "longitude": 65.170799
    },
    "NVS": {
        "latitude": 47.002601623535200,
        "longitude": 3.1133298873901400
    },
    "NVT": {
        "latitude": -26.879431,
        "longitude": -48.650979
    },
    "NWA": {
        "latitude": -12.2981,
        "longitude": 43.766399
    },
    "NWI": {
        "latitude": 52.6758,
        "longitude": 1.28278
    },
    "NYA": {
        "latitude": 62.110001,
        "longitude": 65.614998
    },
    "NYI": {
        "latitude": 7.36183,
        "longitude": -2.32876
    },
    "NYK": {
        "latitude": -0.062399,
        "longitude": 37.041008
    },
    "NYM": {
        "latitude": 65.48090362548830,
        "longitude": 72.69889831542970
    },
    "NYO": {
        "latitude": 58.788601,
        "longitude": 16.912201
    },
    "NYT": {
        "latitude": 19.623501,
        "longitude": 96.200996
    },
    "NZC": {
        "latitude": -14.854,
        "longitude": -74.961502
    },
    "NZH": {
        "latitude": 49.566667,
        "longitude": 117.33
    },
    "NZL": {
        "latitude": 47.865942,
        "longitude": 122.768662
    },
    "NZY": {
        "latitude": 32.69919968,
        "longitude": -117.2149963
    },
    "OAG": {
        "latitude": -33.382014,
        "longitude": 149.131262
    },
    "OAI": {
        "latitude": 34.946098,
        "longitude": 69.264999
    },
    "OAJ": {
        "latitude": 34.829201,
        "longitude": -77.612099
    },
    "OAK": {
        "latitude": 37.721298,
        "longitude": -122.221001
    },
    "OAM": {
        "latitude": -44.970001220703100,
        "longitude": 171.08200073242200
    },
    "OAX": {
        "latitude": 16.9999008179,
        "longitude": -96.726600647
    },
    "OBF": {
        "latitude": 48.081402,
        "longitude": 11.2831
    },
    "OBO": {
        "latitude": 42.7332992554,
        "longitude": 143.216995239
    },
    "OBS": {
        "latitude": 44.544203,
        "longitude": 4.372192
    },
    "OCC": {
        "latitude": -0.4628860056400300,
        "longitude": -76.98680114746090
    },
    "OCJ": {
        "latitude": 18.404079,
        "longitude": -76.969754
    },
    "OCV": {
        "latitude": 8.31506,
        "longitude": -73.3583
    },
    "ODB": {
        "latitude": 37.841999,
        "longitude": -4.84888
    },
    "ODE": {
        "latitude": 55.47669982910160,
        "longitude": 10.330900192260700
    },
    "ODH": {
        "latitude": 51.2341003418,
        "longitude": -0.94282501936
    },
    "ODS": {
        "latitude": 46.4268,
        "longitude": 30.6765
    },
    "OEC": {
        "latitude": -9.19806,
        "longitude": 124.343002
    },
    "OEL": {
        "latitude": 52.934700012200000,
        "longitude": 36.0022010803
    },
    "OER": {
        "latitude": 63.40829849243160,
        "longitude": 18.989999771118200
    },
    "OFF": {
        "latitude": 41.118301391602,
        "longitude": -95.912498474121
    },
    "OFK": {
        "latitude": 41.985500335693,
        "longitude": -97.435096740723
    },
    "OGB": {
        "latitude": 33.456798553467,
        "longitude": -80.859497070312
    },
    "OGD": {
        "latitude": 41.195899963379,
        "longitude": -112.0120010376
    },
    "OGG": {
        "latitude": 20.898543,
        "longitude": -156.431212
    },
    "OGL": {
        "latitude": 6.80628,
        "longitude": -58.1059
    },
    "OGN": {
        "latitude": 24.467298,
        "longitude": 122.979827
    },
    "OGU": {
        "latitude": 40.966872,
        "longitude": 38.085995
    },
    "OGX": {
        "latitude": 31.9172,
        "longitude": 5.41278
    },
    "OGZ": {
        "latitude": 43.205101,
        "longitude": 44.606602
    },
    "OHA": {
        "latitude": -40.20600128173830,
        "longitude": 175.38800048828100
    },
    "OHD": {
        "latitude": 41.18,
        "longitude": 20.7423
    },
    "OHE": {
        "latitude": 52.916871,
        "longitude": 122.422759
    },
    "OHO": {
        "latitude": 59.410064697265600,
        "longitude": 143.05650329589800
    },
    "OIM": {
        "latitude": 34.782001495400000,
        "longitude": 139.36000061
    },
    "OIR": {
        "latitude": 42.0717010498,
        "longitude": 139.432998657
    },
    "OIT": {
        "latitude": 33.479400634800000,
        "longitude": 131.736999512
    },
    "OKA": {
        "latitude": 26.195801,
        "longitude": 127.646004
    },
    "OKC": {
        "latitude": 35.393101,
        "longitude": -97.6007
    },
    "OKD": {
        "latitude": 43.117447,
        "longitude": 141.38134
    },
    "OKE": {
        "latitude": 27.425501,
        "longitude": 128.701004
    },
    "OKI": {
        "latitude": 36.178388,
        "longitude": 133.323566
    },
    "OKJ": {
        "latitude": 34.756901,
        "longitude": 133.854996
    },
    "OKL": {
        "latitude": -4.9071,
        "longitude": 140.6277
    },
    "OKN": {
        "latitude": -0.6652140021324160,
        "longitude": 13.673100471496600
    },
    "OKO": {
        "latitude": 35.748501,
        "longitude": 139.348007
    },
    "OKY": {
        "latitude": -27.409262,
        "longitude": 151.736727
    },
    "OLA": {
        "latitude": 63.69889831542970,
        "longitude": 9.604000091552730
    },
    "OLB": {
        "latitude": 40.898701,
        "longitude": 9.51763
    },
    "OLF": {
        "latitude": 48.094501495400000,
        "longitude": -105.574996948
    },
    "OLL": {
        "latitude": -1.226666,
        "longitude": 15.91
    },
    "OLM": {
        "latitude": 46.9693985,
        "longitude": -122.9029999
    },
    "OLS": {
        "latitude": 31.4177,
        "longitude": -110.848
    },
    "OLZ": {
        "latitude": 60.397499,
        "longitude": 120.471001
    },
    "OMA": {
        "latitude": 41.3032,
        "longitude": -95.894096
    },
    "OMB": {
        "latitude": -1.57473,
        "longitude": 9.26269
    },
    "OMC": {
        "latitude": 11.057999610900900,
        "longitude": 124.56500244140600
    },
    "OMD": {
        "latitude": -28.5847,
        "longitude": 16.446699
    },
    "OME": {
        "latitude": 64.51219940185550,
        "longitude": -165.44500732421900
    },
    "OMH": {
        "latitude": 37.6680984497,
        "longitude": 45.0686988831
    },
    "OMO": {
        "latitude": 43.282901763916000,
        "longitude": 17.84589958190920
    },
    "OMR": {
        "latitude": 47.025299072265600,
        "longitude": 21.90250015258790
    },
    "OMS": {
        "latitude": 54.96699905395510,
        "longitude": 73.31050109863280
    },
    "OND": {
        "latitude": -17.878201,
        "longitude": 15.9526
    },
    "ONJ": {
        "latitude": 40.191898,
        "longitude": 140.371002
    },
    "ONO": {
        "latitude": 44.0198,
        "longitude": -117.013289
    },
    "ONP": {
        "latitude": 44.580399,
        "longitude": -124.057999
    },
    "ONQ": {
        "latitude": 41.506401,
        "longitude": 32.0886
    },
    "ONT": {
        "latitude": 34.055999755859400,
        "longitude": -117.60099792480500
    },
    "ONX": {
        "latitude": 9.356639862060550,
        "longitude": -79.86740112304690
    },
    "OOL": {
        "latitude": -28.165962,
        "longitude": 153.506641
    },
    "OOM": {
        "latitude": -36.300445,
        "longitude": 148.972408
    },
    "OPF": {
        "latitude": 25.907,
        "longitude": -80.278397
    },
    "OPO": {
        "latitude": 41.2481002808,
        "longitude": -8.68138980865
    },
    "OPU": {
        "latitude": -8.05000019073,
        "longitude": 142.932998657
    },
    "ORA": {
        "latitude": -23.1527996063,
        "longitude": -64.3292007446
    },
    "ORB": {
        "latitude": 59.22370147705080,
        "longitude": 15.038000106811500
    },
    "ORD": {
        "latitude": 41.9786,
        "longitude": -87.9048
    },
    "ORF": {
        "latitude": 36.8946,
        "longitude": -76.201202
    },
    "ORH": {
        "latitude": 42.2673,
        "longitude": -71.875702
    },
    "ORK": {
        "latitude": 51.841301,
        "longitude": -8.49111
    },
    "ORN": {
        "latitude": 35.623901,
        "longitude": -0.621183
    },
    "ORT": {
        "latitude": 62.9612999,
        "longitude": -141.9290009
    },
    "ORU": {
        "latitude": -17.962600708,
        "longitude": -67.0762023926
    },
    "ORY": {
        "latitude": 48.7233333,
        "longitude": 2.3794444
    },
    "OSD": {
        "latitude": 63.194400787354,
        "longitude": 14.50030040741
    },
    "OSF": {
        "latitude": 55.511667,
        "longitude": 37.507222
    },
    "OSH": {
        "latitude": 43.98440170288090,
        "longitude": -88.55699920654300
    },
    "OSI": {
        "latitude": 45.4627,
        "longitude": 18.8102
    },
    "OSL": {
        "latitude": 60.193901,
        "longitude": 11.1004
    },
    "OSM": {
        "latitude": 36.305801,
        "longitude": 43.1474
    },
    "OSN": {
        "latitude": 37.090599,
        "longitude": 127.029999
    },
    "OSR": {
        "latitude": 49.6963005065918,
        "longitude": 18.111099243164100
    },
    "OSS": {
        "latitude": 40.6090011597,
        "longitude": 72.793296814
    },
    "OST": {
        "latitude": 51.1998,
        "longitude": 2.874673
    },
    "OSU": {
        "latitude": 40.0798,
        "longitude": -83.072998
    },
    "OSW": {
        "latitude": 51.072498,
        "longitude": 58.5956
    },
    "OTH": {
        "latitude": 43.41709899902340,
        "longitude": -124.24600219726600
    },
    "OTI": {
        "latitude": 2.04599,
        "longitude": 128.324997
    },
    "OTM": {
        "latitude": 41.106368,
        "longitude": -92.449837
    },
    "OTP": {
        "latitude": 44.571111,
        "longitude": 26.085
    },
    "OTR": {
        "latitude": 8.60155963897705,
        "longitude": -82.96859741210940
    },
    "OTZ": {
        "latitude": 66.88469696,
        "longitude": -162.598999
    },
    "OUA": {
        "latitude": 12.3532,
        "longitude": -1.51242
    },
    "OUD": {
        "latitude": 34.789558,
        "longitude": -1.926041
    },
    "OUE": {
        "latitude": 1.6159900426900000,
        "longitude": 16.0379009247
    },
    "OUH": {
        "latitude": -33.6069984436,
        "longitude": 22.188999176
    },
    "OUL": {
        "latitude": 64.930099,
        "longitude": 25.354601
    },
    "OVB": {
        "latitude": 55.019756,
        "longitude": 82.618675
    },
    "OVD": {
        "latitude": 43.563599,
        "longitude": -6.03462
    },
    "OVS": {
        "latitude": 61.326622009277300,
        "longitude": 63.60191345214840
    },
    "OWB": {
        "latitude": 37.74010086,
        "longitude": -87.16680145
    },
    "OWD": {
        "latitude": 42.1904983521,
        "longitude": -71.1728973389
    },
    "OXB": {
        "latitude": 11.894800186157200,
        "longitude": -15.65369987487790
    },
    "OXF": {
        "latitude": 51.8368988037,
        "longitude": -1.32000005245
    },
    "OXR": {
        "latitude": 34.200801849365,
        "longitude": -119.20700073242
    },
    "OYA": {
        "latitude": -29.1058,
        "longitude": -59.2189
    },
    "OYE": {
        "latitude": 1.5431100130081200,
        "longitude": 11.581399917602500
    },
    "OYK": {
        "latitude": 3.85412,
        "longitude": -51.797056
    },
    "OYO": {
        "latitude": -38.3869,
        "longitude": -60.3297
    },
    "OYP": {
        "latitude": 3.8976,
        "longitude": -51.8041
    },
    "OZC": {
        "latitude": 8.17851,
        "longitude": 123.842003
    },
    "OZG": {
        "latitude": 30.263858,
        "longitude": -5.853341
    },
    "OZH": {
        "latitude": 47.867000579834000,
        "longitude": 35.31570053100590
    },
    "OZP": {
        "latitude": 37.17490005493160,
        "longitude": -5.615940093994140
    },
    "OZR": {
        "latitude": 31.27569962,
        "longitude": -85.71340179
    },
    "OZZ": {
        "latitude": 30.9391002655,
        "longitude": -6.909430027010000
    },
    "PAB": {
        "latitude": 21.9884,
        "longitude": 82.111
    },
    "PAC": {
        "latitude": 8.973340034484860,
        "longitude": -79.55560302734380
    },
    "PAD": {
        "latitude": 51.614101409900000,
        "longitude": 8.616319656370000
    },
    "PAE": {
        "latitude": 47.9063,
        "longitude": -122.281998
    },
    "PAG": {
        "latitude": 7.825632,
        "longitude": 123.459635
    },
    "PAH": {
        "latitude": 37.06079864501950,
        "longitude": -88.7738037109375
    },
    "PAL": {
        "latitude": 5.48361,
        "longitude": -74.6574
    },
    "PAM": {
        "latitude": 30.069599,
        "longitude": -85.575401
    },
    "PAN": {
        "latitude": 6.785459995269780,
        "longitude": 101.15399932861300
    },
    "PAP": {
        "latitude": 18.58,
        "longitude": -72.292503
    },
    "PAQ": {
        "latitude": 61.594898,
        "longitude": -149.08901
    },
    "PAT": {
        "latitude": 25.591299,
        "longitude": 85.087997
    },
    "PAV": {
        "latitude": -9.40088,
        "longitude": -38.250599
    },
    "PAX": {
        "latitude": 19.934045,
        "longitude": -72.84801
    },
    "PAZ": {
        "latitude": 20.6026992798,
        "longitude": -97.46080017090000
    },
    "PBC": {
        "latitude": 19.1581001282,
        "longitude": -98.3713989258
    },
    "PBD": {
        "latitude": 21.649524,
        "longitude": 69.656405
    },
    "PBF": {
        "latitude": 34.174121,
        "longitude": -91.935643
    },
    "PBG": {
        "latitude": 44.650901794433600,
        "longitude": -73.46810150146480
    },
    "PBH": {
        "latitude": 27.4032,
        "longitude": 89.424599
    },
    "PBI": {
        "latitude": 26.68320083618160,
        "longitude": -80.09559631347660
    },
    "PBL": {
        "latitude": 10.480500221252400,
        "longitude": -68.072998046875
    },
    "PBM": {
        "latitude": 5.45283,
        "longitude": -55.187801
    },
    "PBN": {
        "latitude": -10.722000122070300,
        "longitude": 13.76550006866460
    },
    "PBO": {
        "latitude": -23.1711006165,
        "longitude": 117.745002747
    },
    "PBR": {
        "latitude": 15.7309,
        "longitude": -88.583801
    },
    "PBU": {
        "latitude": 27.32990074157720,
        "longitude": 97.42630004882810
    },
    "PBZ": {
        "latitude": -34.08816,
        "longitude": 23.328723
    },
    "PCF": {
        "latitude": -26.670999527,
        "longitude": 27.0818996429
    },
    "PCL": {
        "latitude": -8.37794017791748,
        "longitude": -74.57430267333980
    },
    "PCP": {
        "latitude": 1.66294,
        "longitude": 7.41174
    },
    "PCR": {
        "latitude": 6.18472,
        "longitude": -67.4932
    },
    "PDA": {
        "latitude": 3.85353,
        "longitude": -67.9062
    },
    "PDG": {
        "latitude": -0.786917,
        "longitude": 100.280998
    },
    "PDK": {
        "latitude": 33.8755989075,
        "longitude": -84.3020019531
    },
    "PDL": {
        "latitude": 37.7411994934,
        "longitude": -25.6979007721
    },
    "PDO": {
        "latitude": -3.2860701084137000,
        "longitude": 103.87999725341800
    },
    "PDP": {
        "latitude": -34.855098724365200,
        "longitude": -55.09429931640630
    },
    "PDS": {
        "latitude": 28.627873,
        "longitude": -100.53524
    },
    "PDT": {
        "latitude": 45.695099,
        "longitude": -118.841003
    },
    "PDV": {
        "latitude": 42.067799,
        "longitude": 24.8508
    },
    "PDX": {
        "latitude": 45.58869934,
        "longitude": -122.5979996
    },
    "PED": {
        "latitude": 50.01340103149410,
        "longitude": 15.73859977722170
    },
    "PEE": {
        "latitude": 57.914501,
        "longitude": 56.021198
    },
    "PEG": {
        "latitude": 43.095901,
        "longitude": 12.5132
    },
    "PEH": {
        "latitude": -35.8446,
        "longitude": -61.8576
    },
    "PEI": {
        "latitude": 4.81267,
        "longitude": -75.7395
    },
    "PEK": {
        "latitude": 40.080101013183600,
        "longitude": 116.58499908447300
    },
    "PEM": {
        "latitude": -12.6135997772,
        "longitude": -69.2285995483
    },
    "PEN": {
        "latitude": 5.297140121459960,
        "longitude": 100.2770004272460
    },
    "PER": {
        "latitude": -31.94029998779300,
        "longitude": 115.96700286865200
    },
    "PES": {
        "latitude": 61.88520050048830,
        "longitude": 34.154701232910200
    },
    "PET": {
        "latitude": -31.717253,
        "longitude": -52.327952
    },
    "PEV": {
        "latitude": 45.990898,
        "longitude": 18.240996
    },
    "PEW": {
        "latitude": 33.993900299072300,
        "longitude": 71.51460266113280
    },
    "PEX": {
        "latitude": 65.12110137939450,
        "longitude": 57.13079833984380
    },
    "PEZ": {
        "latitude": 53.110599517822300,
        "longitude": 45.02109909057620
    },
    "PFB": {
        "latitude": -28.243976,
        "longitude": -52.32777
    },
    "PFO": {
        "latitude": 34.717999,
        "longitude": 32.485699
    },
    "PGA": {
        "latitude": 36.92610168,
        "longitude": -111.447998
    },
    "PGD": {
        "latitude": 26.9202,
        "longitude": -81.990501
    },
    "PGF": {
        "latitude": 42.74039840698240,
        "longitude": 2.8706700801849400
    },
    "PGH": {
        "latitude": 29.0334,
        "longitude": 79.473701
    },
    "PGU": {
        "latitude": 27.379601,
        "longitude": 52.737701
    },
    "PGV": {
        "latitude": 35.6352005,
        "longitude": -77.38529968
    },
    "PGX": {
        "latitude": 45.19810104370120,
        "longitude": 0.815555989742279
    },
    "PGZ": {
        "latitude": -25.184476,
        "longitude": -50.143822
    },
    "PHB": {
        "latitude": -2.89375,
        "longitude": -41.731998
    },
    "PHC": {
        "latitude": 5.0154900550842300,
        "longitude": 6.94959020614624
    },
    "PHE": {
        "latitude": -20.3777999878,
        "longitude": 118.625999451
    },
    "PHF": {
        "latitude": 37.131901,
        "longitude": -76.492996
    },
    "PHL": {
        "latitude": 39.87189865112310,
        "longitude": -75.24109649658200
    },
    "PHS": {
        "latitude": 16.782899856567400,
        "longitude": 100.27899932861300
    },
    "PHW": {
        "latitude": -23.937200546300000,
        "longitude": 31.1553993225
    },
    "PHX": {
        "latitude": 33.435302,
        "longitude": -112.005905
    },
    "PHY": {
        "latitude": 16.6760005951,
        "longitude": 101.194999695
    },
    "PIA": {
        "latitude": 40.6642,
        "longitude": -89.693298
    },
    "PIB": {
        "latitude": 31.4671,
        "longitude": -89.337097
    },
    "PIE": {
        "latitude": 27.9102,
        "longitude": -82.687401
    },
    "PIF": {
        "latitude": 22.700199127197300,
        "longitude": 120.48200225830100
    },
    "PIH": {
        "latitude": 42.9098014831543,
        "longitude": -112.59600067138700
    },
    "PIK": {
        "latitude": 55.502003,
        "longitude": -4.587019
    },
    "PIL": {
        "latitude": -26.881224,
        "longitude": -58.318026
    },
    "PIO": {
        "latitude": -13.7449,
        "longitude": -76.220299
    },
    "PIR": {
        "latitude": 44.38270187,
        "longitude": -100.2860031
    },
    "PIS": {
        "latitude": 46.58769989013670,
        "longitude": 0.30666598677635200
    },
    "PIT": {
        "latitude": 40.49150085,
        "longitude": -80.23290253
    },
    "PIU": {
        "latitude": -5.20574998856,
        "longitude": -80.61640167240000
    },
    "PIW": {
        "latitude": 55.58890151977540,
        "longitude": -97.16419982910160
    },
    "PIX": {
        "latitude": 38.554298,
        "longitude": -28.441299
    },
    "PIZ": {
        "latitude": 69.73290253,
        "longitude": -163.0050049
    },
    "PJA": {
        "latitude": 67.24559783935550,
        "longitude": 23.068899154663100
    },
    "PJG": {
        "latitude": 26.954500198364300,
        "longitude": 64.13249969482420
    },
    "PJM": {
        "latitude": 8.533329963684080,
        "longitude": -83.30000305175780
    },
    "PKB": {
        "latitude": 39.34510040283200,
        "longitude": -81.43920135498050
    },
    "PKC": {
        "latitude": 53.16790008544920,
        "longitude": 158.45399475097700
    },
    "PKE": {
        "latitude": -33.131401062,
        "longitude": 148.238998413
    },
    "PKP": {
        "latitude": -14.809499740600600,
        "longitude": -138.81300354003900
    },
    "PKR": {
        "latitude": 28.200899124145500,
        "longitude": 83.98210144042970
    },
    "PKT": {
        "latitude": -14.249701,
        "longitude": 129.529538
    },
    "PKU": {
        "latitude": 0.458647,
        "longitude": 101.444321
    },
    "PKV": {
        "latitude": 57.78390121459960,
        "longitude": 28.395599365234400
    },
    "PKW": {
        "latitude": -22.0583,
        "longitude": 27.8288
    },
    "PKX": {
        "latitude": 39.509945,
        "longitude": 116.41092
    },
    "PKZ": {
        "latitude": 15.132100105285600,
        "longitude": 105.78099822998000
    },
    "PLJ": {
        "latitude": 16.536956787109400,
        "longitude": -88.36151123046880
    },
    "PLL": {
        "latitude": -3.14604,
        "longitude": -59.986301
    },
    "PLM": {
        "latitude": -2.897653,
        "longitude": 104.698147
    },
    "PLN": {
        "latitude": 45.57089996,
        "longitude": -84.79669952
    },
    "PLO": {
        "latitude": -34.6053009033,
        "longitude": 135.880004883
    },
    "PLQ": {
        "latitude": 55.973201751709000,
        "longitude": 21.093900680542000
    },
    "PLS": {
        "latitude": 21.773697,
        "longitude": -72.268321
    },
    "PLU": {
        "latitude": -19.8512,
        "longitude": -43.9506
    },
    "PLW": {
        "latitude": -0.916462,
        "longitude": 119.908647
    },
    "PLX": {
        "latitude": 50.351295,
        "longitude": 80.234398
    },
    "PLZ": {
        "latitude": -33.984901,
        "longitude": 25.6173
    },
    "PMA": {
        "latitude": -5.25726,
        "longitude": 39.811401
    },
    "PMC": {
        "latitude": -41.438899993896500,
        "longitude": -73.09400177001950
    },
    "PMD": {
        "latitude": 34.629398,
        "longitude": -118.084999
    },
    "PMF": {
        "latitude": 44.824501,
        "longitude": 10.2964
    },
    "PMG": {
        "latitude": -22.549601,
        "longitude": -55.702599
    },
    "PMI": {
        "latitude": 39.551701,
        "longitude": 2.73881
    },
    "PMO": {
        "latitude": 38.175999,
        "longitude": 13.091
    },
    "PMQ": {
        "latitude": -46.537899,
        "longitude": -70.978699
    },
    "PMR": {
        "latitude": -40.32059860229490,
        "longitude": 175.61700439453100
    },
    "PMS": {
        "latitude": 34.5574,
        "longitude": 38.316898
    },
    "PMV": {
        "latitude": 10.912603378295900,
        "longitude": -63.96659851074220
    },
    "PMW": {
        "latitude": -10.2915,
        "longitude": -48.356998
    },
    "PMY": {
        "latitude": -42.7592,
        "longitude": -65.1027
    },
    "PMZ": {
        "latitude": 8.95103,
        "longitude": -83.468597
    },
    "PNA": {
        "latitude": 42.77,
        "longitude": -1.64633
    },
    "PNB": {
        "latitude": -10.719402,
        "longitude": -48.3997
    },
    "PNC": {
        "latitude": 36.73199844,
        "longitude": -97.09980011
    },
    "PND": {
        "latitude": 16.102399826,
        "longitude": -88.80829620360000
    },
    "PNE": {
        "latitude": 40.081902,
        "longitude": -75.010597
    },
    "PNH": {
        "latitude": 11.5466,
        "longitude": 104.844002
    },
    "PNI": {
        "latitude": 6.985099792480470,
        "longitude": 158.20899963378900
    },
    "PNK": {
        "latitude": -0.150711,
        "longitude": 109.403999
    },
    "PNL": {
        "latitude": 36.816502,
        "longitude": 11.9689
    },
    "PNP": {
        "latitude": -8.80453968048,
        "longitude": 148.309005737
    },
    "PNQ": {
        "latitude": 18.5821,
        "longitude": 73.919701
    },
    "PNR": {
        "latitude": -4.81603,
        "longitude": 11.8866
    },
    "PNS": {
        "latitude": 30.4734,
        "longitude": -87.1866
    },
    "PNT": {
        "latitude": -51.67067,
        "longitude": -72.529078
    },
    "PNV": {
        "latitude": 55.729400634765600,
        "longitude": 24.460800170898400
    },
    "PNY": {
        "latitude": 11.968,
        "longitude": 79.812
    },
    "PNZ": {
        "latitude": -9.362422,
        "longitude": -40.569098
    },
    "POA": {
        "latitude": -29.994712,
        "longitude": -51.166592
    },
    "POB": {
        "latitude": 35.170898,
        "longitude": -79.014503
    },
    "POE": {
        "latitude": 31.0447998,
        "longitude": -93.1917038
    },
    "POG": {
        "latitude": -0.7117390036582950,
        "longitude": 8.754380226135250
    },
    "POI": {
        "latitude": -19.543331,
        "longitude": -65.723734
    },
    "POL": {
        "latitude": -12.991762161254900,
        "longitude": 40.52401351928710
    },
    "POM": {
        "latitude": -9.443380355834960,
        "longitude": 147.22000122070300
    },
    "POO": {
        "latitude": -21.842529,
        "longitude": -46.569768
    },
    "POP": {
        "latitude": 19.75790023803710,
        "longitude": -70.56999969482420
    },
    "POR": {
        "latitude": 61.4617,
        "longitude": 21.799999
    },
    "POS": {
        "latitude": 10.5954,
        "longitude": -61.3372
    },
    "POT": {
        "latitude": 18.1987991333,
        "longitude": -76.53450012210000
    },
    "POU": {
        "latitude": 41.6265983581543,
        "longitude": -73.88420104980470
    },
    "POW": {
        "latitude": 45.4734,
        "longitude": 13.615
    },
    "POX": {
        "latitude": 49.096667,
        "longitude": 2.040833
    },
    "POZ": {
        "latitude": 52.421001,
        "longitude": 16.8263
    },
    "PPB": {
        "latitude": -22.1751,
        "longitude": -51.424599
    },
    "PPG": {
        "latitude": -14.331,
        "longitude": -170.710007
    },
    "PPI": {
        "latitude": -33.23889923095700,
        "longitude": 137.9949951171880
    },
    "PPK": {
        "latitude": 54.774702,
        "longitude": 69.183273
    },
    "PPN": {
        "latitude": 2.4544,
        "longitude": -76.6093
    },
    "PPP": {
        "latitude": -20.494416,
        "longitude": 148.553583
    },
    "PPQ": {
        "latitude": -40.904701232910200,
        "longitude": 174.98899841308600
    },
    "PPS": {
        "latitude": 9.74212,
        "longitude": 118.759003
    },
    "PPT": {
        "latitude": -17.553699,
        "longitude": -149.606995
    },
    "PQC": {
        "latitude": 10.1698,
        "longitude": 103.9931
    },
    "PQI": {
        "latitude": 46.688999,
        "longitude": -68.0448
    },
    "PQQ": {
        "latitude": -31.4358005524,
        "longitude": 152.863006592
    },
    "PRA": {
        "latitude": -31.7948,
        "longitude": -60.4804
    },
    "PRB": {
        "latitude": 35.67290115,
        "longitude": -120.6269989
    },
    "PRC": {
        "latitude": 34.654499,
        "longitude": -112.419998
    },
    "PRG": {
        "latitude": 50.1008,
        "longitude": 14.26
    },
    "PRH": {
        "latitude": 18.132200241088900,
        "longitude": 100.16500091552700
    },
    "PRI": {
        "latitude": -4.31929,
        "longitude": 55.691399
    },
    "PRM": {
        "latitude": 37.1493,
        "longitude": -8.58396
    },
    "PRN": {
        "latitude": 42.5728,
        "longitude": 21.035801
    },
    "PRV": {
        "latitude": 49.42580032348630,
        "longitude": 17.404699325561500
    },
    "PRX": {
        "latitude": 33.636600494385,
        "longitude": -95.450798034668
    },
    "PRY": {
        "latitude": -25.6539,
        "longitude": 28.224199
    },
    "PSA": {
        "latitude": 43.683899,
        "longitude": 10.3927
    },
    "PSC": {
        "latitude": 46.26470184326170,
        "longitude": -119.11900329589800
    },
    "PSD": {
        "latitude": 31.280348,
        "longitude": 32.246032
    },
    "PSE": {
        "latitude": 18.00830078125,
        "longitude": -66.56300354003910
    },
    "PSG": {
        "latitude": 56.80170059,
        "longitude": -132.9450073
    },
    "PSI": {
        "latitude": 25.29050064086910,
        "longitude": 63.34510040283200
    },
    "PSJ": {
        "latitude": -1.41675,
        "longitude": 120.657997
    },
    "PSM": {
        "latitude": 43.0778999329,
        "longitude": -70.8233032227
    },
    "PSO": {
        "latitude": 1.39625,
        "longitude": -77.2915
    },
    "PSP": {
        "latitude": 33.8297,
        "longitude": -116.507004
    },
    "PSR": {
        "latitude": 42.431702,
        "longitude": 14.1811
    },
    "PSS": {
        "latitude": -27.3858,
        "longitude": -55.9707
    },
    "PSU": {
        "latitude": 0.8355780243873600,
        "longitude": 112.93699645996100
    },
    "PSY": {
        "latitude": -51.685699462891,
        "longitude": -57.777599334717
    },
    "PSZ": {
        "latitude": -18.975301,
        "longitude": -57.820599
    },
    "PTG": {
        "latitude": -23.845269,
        "longitude": 29.458615
    },
    "PTH": {
        "latitude": 56.959359,
        "longitude": -158.62106
    },
    "PTJ": {
        "latitude": -38.31809997558590,
        "longitude": 141.4709930419920
    },
    "PTK": {
        "latitude": 42.665500640869,
        "longitude": -83.420097351074
    },
    "PTM": {
        "latitude": 7.566669940948490,
        "longitude": -70.18329620361330
    },
    "PTP": {
        "latitude": 16.265301,
        "longitude": -61.531799
    },
    "PTU": {
        "latitude": 59.01139831542970,
        "longitude": -161.82000732421900
    },
    "PTX": {
        "latitude": 1.85777,
        "longitude": -76.0857
    },
    "PTY": {
        "latitude": 9.0713596344,
        "longitude": -79.3834991455
    },
    "PUB": {
        "latitude": 38.289101,
        "longitude": -104.497002
    },
    "PUD": {
        "latitude": -47.7353,
        "longitude": -65.9041
    },
    "PUF": {
        "latitude": 43.380001068115200,
        "longitude": -0.41861099004745500
    },
    "PUG": {
        "latitude": -32.506900787353500,
        "longitude": 137.7169952392580
    },
    "PUJ": {
        "latitude": 18.567399978600000,
        "longitude": -68.36340332030000
    },
    "PUQ": {
        "latitude": -53.002602,
        "longitude": -70.854599
    },
    "PUS": {
        "latitude": 35.179501,
        "longitude": 128.938004
    },
    "PUT": {
        "latitude": 14.1492996216,
        "longitude": 77.7910995483
    },
    "PUU": {
        "latitude": 0.505228,
        "longitude": -76.5008
    },
    "PUW": {
        "latitude": 46.7439,
        "longitude": -117.110001
    },
    "PUY": {
        "latitude": 44.89350128173830,
        "longitude": 13.922200202941900
    },
    "PUZ": {
        "latitude": 14.047200202941900,
        "longitude": -83.38670349121090
    },
    "PVA": {
        "latitude": 13.357461,
        "longitude": -81.357977
    },
    "PVD": {
        "latitude": 41.725038,
        "longitude": -71.425668
    },
    "PVG": {
        "latitude": 31.1434,
        "longitude": 121.805
    },
    "PVH": {
        "latitude": -8.707854,
        "longitude": -63.90242
    },
    "PVK": {
        "latitude": 38.925498962402300,
        "longitude": 20.765300750732400
    },
    "PVO": {
        "latitude": -1.0416500568389900,
        "longitude": -80.47219848632810
    },
    "PVR": {
        "latitude": 20.680099,
        "longitude": -105.253998
    },
    "PVS": {
        "latitude": 64.37809753417970,
        "longitude": -173.2429962158200
    },
    "PVU": {
        "latitude": 40.2192,
        "longitude": -111.723
    },
    "PWE": {
        "latitude": 69.783302,
        "longitude": 170.597
    },
    "PWK": {
        "latitude": 42.114222,
        "longitude": -87.901494
    },
    "PWM": {
        "latitude": 43.646198,
        "longitude": -70.309303
    },
    "PWQ": {
        "latitude": 52.19499969482420,
        "longitude": 77.07389831542970
    },
    "PWT": {
        "latitude": 47.490200042725,
        "longitude": -122.76499938965
    },
    "PWY": {
        "latitude": 42.79550171,
        "longitude": -109.8069992
    },
    "PXM": {
        "latitude": 15.8769,
        "longitude": -97.089103
    },
    "PXO": {
        "latitude": 33.0733985901,
        "longitude": -16.3500003815
    },
    "PXR": {
        "latitude": 14.868300437927,
        "longitude": 103.49800109863
    },
    "PXU": {
        "latitude": 14.004500389099100,
        "longitude": 108.01699829101600
    },
    "PYH": {
        "latitude": 5.6199898719788,
        "longitude": -67.606101989746
    },
    "PYJ": {
        "latitude": 66.4003982544,
        "longitude": 112.029998779
    },
    "PYK": {
        "latitude": 35.7761,
        "longitude": 50.826698
    },
    "PYR": {
        "latitude": 37.9207,
        "longitude": 21.292601
    },
    "PZA": {
        "latitude": 5.87615,
        "longitude": -71.8866
    },
    "PZB": {
        "latitude": -29.649000167800000,
        "longitude": 30.3987007141
    },
    "PZH": {
        "latitude": 31.358400344848600,
        "longitude": 69.4636001586914
    },
    "PZI": {
        "latitude": 26.54,
        "longitude": 101.79852
    },
    "PZO": {
        "latitude": 8.288530349731450,
        "longitude": -62.760398864746100
    },
    "PZS": {
        "latitude": -38.766799926758,
        "longitude": -72.637100219727
    },
    "PZU": {
        "latitude": 19.4335994720459,
        "longitude": 37.234100341796900
    },
    "PZY": {
        "latitude": 48.62519836425780,
        "longitude": 17.828399658203100
    },
    "QBC": {
        "latitude": 52.387501,
        "longitude": -126.596001
    },
    "QCY": {
        "latitude": 53.0929985046,
        "longitude": -0.166014000773
    },
    "QGU": {
        "latitude": 35.394100189209000,
        "longitude": 136.8699951171880
    },
    "QHR": {
        "latitude": 8.7163,
        "longitude": 39.0059
    },
    "QJB": {
        "latitude": 27.038999557495100,
        "longitude": 49.40510177612310
    },
    "QLD": {
        "latitude": 36.503601,
        "longitude": 2.81417
    },
    "QLR": {
        "latitude": 39.828335,
        "longitude": -8.8875
    },
    "QMJ": {
        "latitude": 32.001719,
        "longitude": 49.268599
    },
    "QOW": {
        "latitude": 5.427060127258300,
        "longitude": 7.206029891967770
    },
    "QPG": {
        "latitude": 1.36042,
        "longitude": 103.910004
    },
    "QPS": {
        "latitude": -21.984692,
        "longitude": -47.341207
    },
    "QRA": {
        "latitude": -26.2425,
        "longitude": 28.151199
    },
    "QRM": {
        "latitude": -32.214698791503900,
        "longitude": 148.22500610351600
    },
    "QRO": {
        "latitude": 20.6173,
        "longitude": -100.185997
    },
    "QRR": {
        "latitude": -31.733299255371100,
        "longitude": 147.80299377441400
    },
    "QRW": {
        "latitude": 5.59611,
        "longitude": 5.81778
    },
    "QSF": {
        "latitude": 36.178100585900000,
        "longitude": 5.3244900703400000
    },
    "QSR": {
        "latitude": 40.620399,
        "longitude": 14.9113
    },
    "QSZ": {
        "latitude": 38.24542,
        "longitude": 77.056149
    },
    "QUO": {
        "latitude": 4.8725,
        "longitude": 8.093
    },
    "QUY": {
        "latitude": 52.3572006226,
        "longitude": -0.107832998037
    },
    "RAB": {
        "latitude": -4.34046,
        "longitude": 152.380005
    },
    "RAE": {
        "latitude": 30.906600952148400,
        "longitude": 41.13819885253910
    },
    "RAH": {
        "latitude": 29.626399993896500,
        "longitude": 43.4906005859375
    },
    "RAI": {
        "latitude": 14.924500465393100,
        "longitude": -23.493499755859400
    },
    "RAJ": {
        "latitude": 22.3092002869,
        "longitude": 70.77950286870000
    },
    "RAK": {
        "latitude": 31.606899261500000,
        "longitude": -8.03629970551
    },
    "RAL": {
        "latitude": 33.9519,
        "longitude": -117.445
    },
    "RAO": {
        "latitude": -21.134314,
        "longitude": -47.774053
    },
    "RAP": {
        "latitude": 44.0452995300293,
        "longitude": -103.05699920654300
    },
    "RAR": {
        "latitude": -21.2027,
        "longitude": -159.806
    },
    "RAS": {
        "latitude": 37.323333,
        "longitude": 49.617778
    },
    "RAZ": {
        "latitude": 33.849700927734400,
        "longitude": 73.79810333251950
    },
    "RBA": {
        "latitude": 34.051498,
        "longitude": -6.75152
    },
    "RBE": {
        "latitude": 13.729999542236300,
        "longitude": 106.98699951171900
    },
    "RBL": {
        "latitude": 40.1506996155,
        "longitude": -122.251998901
    },
    "RBR": {
        "latitude": -9.869031,
        "longitude": -67.893984
    },
    "RBY": {
        "latitude": 64.72720337,
        "longitude": -155.4700012
    },
    "RCA": {
        "latitude": 44.14500046,
        "longitude": -103.1039963
    },
    "RCB": {
        "latitude": -28.740999221800000,
        "longitude": 32.0920982361
    },
    "RCH": {
        "latitude": 11.5262,
        "longitude": -72.926
    },
    "RCO": {
        "latitude": 45.88779830932620,
        "longitude": -0.9830560088157650
    },
    "RCQ": {
        "latitude": -29.2103,
        "longitude": -59.68
    },
    "RCU": {
        "latitude": -33.0850982666,
        "longitude": -64.2612991333
    },
    "RDD": {
        "latitude": 40.50899887,
        "longitude": -122.2929993
    },
    "RDG": {
        "latitude": 40.378502,
        "longitude": -75.965202
    },
    "RDM": {
        "latitude": 44.2541008,
        "longitude": -121.1500015
    },
    "RDO": {
        "latitude": 51.389198,
        "longitude": 21.213301
    },
    "RDP": {
        "latitude": 23.6225,
        "longitude": 87.243
    },
    "RDR": {
        "latitude": 47.961101532,
        "longitude": -97.4011993408
    },
    "RDS": {
        "latitude": -37.3905982971,
        "longitude": -68.9041976929
    },
    "RDU": {
        "latitude": 35.877601623535200,
        "longitude": -78.7874984741211
    },
    "RDZ": {
        "latitude": 44.407901763916000,
        "longitude": 2.4826700687408400
    },
    "REA": {
        "latitude": -18.46652,
        "longitude": -136.43855
    },
    "REC": {
        "latitude": -8.125984,
        "longitude": -34.923316
    },
    "REG": {
        "latitude": 38.071201,
        "longitude": 15.6516
    },
    "REL": {
        "latitude": -43.2105,
        "longitude": -65.2703
    },
    "REN": {
        "latitude": 51.795799255371100,
        "longitude": 55.45669937133790
    },
    "REP": {
        "latitude": 13.41155,
        "longitude": 103.813044
    },
    "RER": {
        "latitude": 14.521431,
        "longitude": -91.697001
    },
    "RES": {
        "latitude": -27.45,
        "longitude": -59.0561
    },
    "REU": {
        "latitude": 41.1474,
        "longitude": 1.16717
    },
    "REW": {
        "latitude": 24.503401,
        "longitude": 81.220299
    },
    "REX": {
        "latitude": 26.0089,
        "longitude": -98.2285
    },
    "RFD": {
        "latitude": 42.1954,
        "longitude": -89.097198
    },
    "RFP": {
        "latitude": -16.7229,
        "longitude": -151.466003
    },
    "RGA": {
        "latitude": -53.7777,
        "longitude": -67.7494
    },
    "RGI": {
        "latitude": -14.954299926757800,
        "longitude": -147.66099548339800
    },
    "RGK": {
        "latitude": 51.969204,
        "longitude": 85.836539
    },
    "RGL": {
        "latitude": -51.6089,
        "longitude": -69.3126
    },
    "RGN": {
        "latitude": 16.907300949100000,
        "longitude": 96.1332015991
    },
    "RGO": {
        "latitude": 41.428538,
        "longitude": 129.647555
    },
    "RGS": {
        "latitude": 42.357601,
        "longitude": -3.62076
    },
    "RGT": {
        "latitude": -0.352808,
        "longitude": 102.334999
    },
    "RHD": {
        "latitude": -27.4966,
        "longitude": -64.93595
    },
    "RHI": {
        "latitude": 45.63119888305660,
        "longitude": -89.46749877929690
    },
    "RHO": {
        "latitude": 36.405399322509800,
        "longitude": 28.086200714111300
    },
    "RIA": {
        "latitude": -29.711399,
        "longitude": -53.688202
    },
    "RIC": {
        "latitude": 37.50519943237310,
        "longitude": -77.3197021484375
    },
    "RIJ": {
        "latitude": -6.067860126495360,
        "longitude": -77.16000366210940
    },
    "RIL": {
        "latitude": 39.526299,
        "longitude": -107.726997
    },
    "RIS": {
        "latitude": 45.2420005798,
        "longitude": 141.186004639
    },
    "RIV": {
        "latitude": 33.880699,
        "longitude": -117.259003
    },
    "RIW": {
        "latitude": 43.064201355,
        "longitude": -108.459999084
    },
    "RIX": {
        "latitude": 56.923599,
        "longitude": 23.9711
    },
    "RIY": {
        "latitude": 14.6626,
        "longitude": 49.375
    },
    "RIZ": {
        "latitude": 35.405033,
        "longitude": 119.324403
    },
    "RJA": {
        "latitude": 17.105799,
        "longitude": 81.813204
    },
    "RJH": {
        "latitude": 24.43720054626470,
        "longitude": 88.61650085449220
    },
    "RJK": {
        "latitude": 45.21689987182620,
        "longitude": 14.570300102233900
    },
    "RJL": {
        "latitude": 42.460953,
        "longitude": -2.322235
    },
    "RJN": {
        "latitude": 30.298345,
        "longitude": 56.048979
    },
    "RKE": {
        "latitude": 55.585601806640600,
        "longitude": 12.131400108337400
    },
    "RKS": {
        "latitude": 41.5942,
        "longitude": -109.065001
    },
    "RKT": {
        "latitude": 25.613500595092800,
        "longitude": 55.93880081176760
    },
    "RKV": {
        "latitude": 64.1299972534,
        "longitude": -21.9405994415
    },
    "RKZ": {
        "latitude": 29.3519,
        "longitude": 89.311401
    },
    "RLG": {
        "latitude": 53.9182014465,
        "longitude": 12.278300285300000
    },
    "RLK": {
        "latitude": 40.926,
        "longitude": 107.7428
    },
    "RMA": {
        "latitude": -26.545000076300000,
        "longitude": 148.774993896
    },
    "RME": {
        "latitude": 43.23379898,
        "longitude": -75.40699768
    },
    "RMF": {
        "latitude": 25.555548,
        "longitude": 34.59245
    },
    "RMG": {
        "latitude": 34.3506011963,
        "longitude": -85.15799713130000
    },
    "RMI": {
        "latitude": 44.020302,
        "longitude": 12.6117
    },
    "RMK": {
        "latitude": -34.1963996887207,
        "longitude": 140.6739959716800
    },
    "RML": {
        "latitude": 6.821990013122560,
        "longitude": 79.88619995117190
    },
    "RMQ": {
        "latitude": 24.2647,
        "longitude": 120.621002
    },
    "RMS": {
        "latitude": 49.436901,
        "longitude": 7.60028
    },
    "RMU": {
        "latitude": 37.803,
        "longitude": -1.125
    },
    "RNB": {
        "latitude": 56.266701,
        "longitude": 15.265
    },
    "RND": {
        "latitude": 29.529699,
        "longitude": -98.2789
    },
    "RNE": {
        "latitude": 46.05830001831060,
        "longitude": 4.001389980316160
    },
    "RNJ": {
        "latitude": 27.044001,
        "longitude": 128.401993
    },
    "RNN": {
        "latitude": 55.06330108642580,
        "longitude": 14.759599685668900
    },
    "RNO": {
        "latitude": 39.49909973144530,
        "longitude": -119.76799774169900
    },
    "RNS": {
        "latitude": 48.0695,
        "longitude": -1.73479
    },
    "ROA": {
        "latitude": 37.3255,
        "longitude": -79.975403
    },
    "ROB": {
        "latitude": 6.23379,
        "longitude": -10.3623
    },
    "ROC": {
        "latitude": 43.1189,
        "longitude": -77.672401
    },
    "ROD": {
        "latitude": -33.812198638916000,
        "longitude": 19.902799606323200
    },
    "ROI": {
        "latitude": 16.11680030822750,
        "longitude": 103.77400207519500
    },
    "ROK": {
        "latitude": -23.380019,
        "longitude": 150.475359
    },
    "ROO": {
        "latitude": -16.586,
        "longitude": -54.7248
    },
    "ROP": {
        "latitude": 14.1743,
        "longitude": 145.242996
    },
    "ROR": {
        "latitude": 7.36731,
        "longitude": 134.544236
    },
    "ROS": {
        "latitude": -32.9036,
        "longitude": -60.785
    },
    "ROT": {
        "latitude": -38.10919952392580,
        "longitude": 176.31700134277300
    },
    "ROV": {
        "latitude": 47.493888,
        "longitude": 39.924722
    },
    "ROW": {
        "latitude": 33.301601,
        "longitude": -104.530998
    },
    "ROZ": {
        "latitude": 36.645198822,
        "longitude": -6.34946012497
    },
    "RPM": {
        "latitude": -14.722800254821800,
        "longitude": 134.7469940185550
    },
    "RPN": {
        "latitude": 32.980999,
        "longitude": 35.571899
    },
    "RQA": {
        "latitude": 38.974722,
        "longitude": 88.008333
    },
    "RQW": {
        "latitude": 35.76720047,
        "longitude": 43.125099182100000
    },
    "RRG": {
        "latitude": -19.7577,
        "longitude": 63.361
    },
    "RRK": {
        "latitude": 22.256571,
        "longitude": 84.815193
    },
    "RRS": {
        "latitude": 62.578399658203,
        "longitude": 11.342300415039
    },
    "RSA": {
        "latitude": -36.588299,
        "longitude": -64.275703
    },
    "RSD": {
        "latitude": 24.8950787333,
        "longitude": -76.1768817902
    },
    "RSL": {
        "latitude": 38.872100830078,
        "longitude": -98.811798095703
    },
    "RST": {
        "latitude": 43.908298,
        "longitude": -92.5
    },
    "RSU": {
        "latitude": 34.84230041503910,
        "longitude": 127.61699676513700
    },
    "RSW": {
        "latitude": 26.53619956970220,
        "longitude": -81.75520324707030
    },
    "RTB": {
        "latitude": 16.316799,
        "longitude": -86.523003
    },
    "RTC": {
        "latitude": 17.013599,
        "longitude": 73.327797
    },
    "RTE": {
        "latitude": -23.5091,
        "longitude": -46.637798
    },
    "RTM": {
        "latitude": 51.956902,
        "longitude": 4.43722
    },
    "RUA": {
        "latitude": 3.049152,
        "longitude": 30.911714
    },
    "RUG": {
        "latitude": 32.25788497924810,
        "longitude": 120.50165557861300
    },
    "RUH": {
        "latitude": 24.957599639892600,
        "longitude": 46.69879913330080
    },
    "RUI": {
        "latitude": 33.462799,
        "longitude": -105.535004
    },
    "RUN": {
        "latitude": -20.8871,
        "longitude": 55.5103
    },
    "RUR": {
        "latitude": -22.434099197387700,
        "longitude": -151.36099243164100
    },
    "RUT": {
        "latitude": 43.5294,
        "longitude": -72.9496
    },
    "RUV": {
        "latitude": 15.991999626159700,
        "longitude": -90.44529724121090
    },
    "RVK": {
        "latitude": 64.838302612305,
        "longitude": 11.14610004425
    },
    "RVN": {
        "latitude": 66.564796447754,
        "longitude": 25.830400466919
    },
    "RVS": {
        "latitude": 36.039600372314,
        "longitude": -95.984596252441
    },
    "RWF": {
        "latitude": 44.54719925,
        "longitude": -95.08229828
    },
    "RWI": {
        "latitude": 35.856300354003900,
        "longitude": -77.89189910888670
    },
    "RWL": {
        "latitude": 41.80559921,
        "longitude": -107.1999969
    },
    "RWN": {
        "latitude": 50.60710144042970,
        "longitude": 26.141599655151400
    },
    "RXS": {
        "latitude": 11.597700119018600,
        "longitude": 122.75199890136700
    },
    "RYB": {
        "latitude": 58.10419845581060,
        "longitude": 38.92940139770510
    },
    "RYG": {
        "latitude": 59.378817,
        "longitude": 10.785439
    },
    "RYK": {
        "latitude": 28.383899688720700,
        "longitude": 70.27960205078130
    },
    "RYN": {
        "latitude": 45.62810134887700,
        "longitude": -0.9725000262260440
    },
    "RZA": {
        "latitude": -50.0165,
        "longitude": -68.5792
    },
    "RZE": {
        "latitude": 50.110001,
        "longitude": 22.018999
    },
    "RZR": {
        "latitude": 36.90701,
        "longitude": 50.687316
    },
    "RZV": {
        "latitude": 41.179625,
        "longitude": 40.850796
    },
    "SAC": {
        "latitude": 38.5125007629,
        "longitude": -121.492996216
    },
    "SAF": {
        "latitude": 35.617099762,
        "longitude": -106.088996887
    },
    "SAG": {
        "latitude": 19.688752,
        "longitude": 74.377354
    },
    "SAH": {
        "latitude": 15.476300239563000,
        "longitude": 44.21969985961910
    },
    "SAL": {
        "latitude": 13.4409,
        "longitude": -89.055702
    },
    "SAN": {
        "latitude": 32.7336006165,
        "longitude": -117.190002441
    },
    "SAP": {
        "latitude": 15.4526,
        "longitude": -87.923599
    },
    "SAQ": {
        "latitude": 25.053800582885700,
        "longitude": -78.04900360107420
    },
    "SAT": {
        "latitude": 29.533701,
        "longitude": -98.469803
    },
    "SAV": {
        "latitude": 32.12760162,
        "longitude": -81.20210266
    },
    "SAW": {
        "latitude": 40.898602,
        "longitude": 29.3092
    },
    "SAY": {
        "latitude": 43.256302,
        "longitude": 11.255
    },
    "SBA": {
        "latitude": 34.42620087,
        "longitude": -119.8399963
    },
    "SBD": {
        "latitude": 34.095402,
        "longitude": -117.235001
    },
    "SBH": {
        "latitude": 17.9044,
        "longitude": -62.843601
    },
    "SBK": {
        "latitude": 48.5378,
        "longitude": -2.85444
    },
    "SBL": {
        "latitude": -13.762200355500000,
        "longitude": -65.4352035522
    },
    "SBN": {
        "latitude": 41.708698,
        "longitude": -86.317299
    },
    "SBP": {
        "latitude": 35.236801147500000,
        "longitude": -120.641998291
    },
    "SBT": {
        "latitude": 71.219167,
        "longitude": 72.052222
    },
    "SBU": {
        "latitude": -29.689300537109400,
        "longitude": 17.939599990844700
    },
    "SBW": {
        "latitude": 2.2616,
        "longitude": 111.985001
    },
    "SBY": {
        "latitude": 38.34049987792970,
        "longitude": -75.51029968261720
    },
    "SBZ": {
        "latitude": 45.78559875488280,
        "longitude": 24.091299057006800
    },
    "SCC": {
        "latitude": 70.19470215,
        "longitude": -148.4649963
    },
    "SCE": {
        "latitude": 40.849374,
        "longitude": -77.84852
    },
    "SCH": {
        "latitude": 42.852500915527,
        "longitude": -73.928901672363
    },
    "SCI": {
        "latitude": 7.8013200759887700,
        "longitude": -72.2029037475586
    },
    "SCK": {
        "latitude": 37.894199371338,
        "longitude": -121.2379989624
    },
    "SCL": {
        "latitude": -33.393001556396500,
        "longitude": -70.78579711914060
    },
    "SCM": {
        "latitude": 61.845298767100000,
        "longitude": -165.570999146
    },
    "SCN": {
        "latitude": 49.214599609400000,
        "longitude": 7.10950994492
    },
    "SCO": {
        "latitude": 43.860093,
        "longitude": 51.09086
    },
    "SCQ": {
        "latitude": 42.896301,
        "longitude": -8.41514
    },
    "SCR": {
        "latitude": 61.158393,
        "longitude": 12.842503
    },
    "SCS": {
        "latitude": 60.43280029296880,
        "longitude": -1.2961100339889500
    },
    "SCT": {
        "latitude": 12.63070011138920,
        "longitude": 53.905799865722700
    },
    "SCU": {
        "latitude": 19.96980094909670,
        "longitude": -75.83540344238280
    },
    "SCV": {
        "latitude": 47.6875,
        "longitude": 26.35409927368160
    },
    "SCW": {
        "latitude": 61.64699935913090,
        "longitude": 50.84510040283200
    },
    "SDB": {
        "latitude": -32.968898773200000,
        "longitude": 18.1602993011
    },
    "SDD": {
        "latitude": -14.924699783325200,
        "longitude": 13.574999809265100
    },
    "SDE": {
        "latitude": -27.765556335400000,
        "longitude": -64.3099975586
    },
    "SDF": {
        "latitude": 38.1744,
        "longitude": -85.736
    },
    "SDG": {
        "latitude": 35.24589920043950,
        "longitude": 47.00920104980470
    },
    "SDJ": {
        "latitude": 38.139702,
        "longitude": 140.917007
    },
    "SDK": {
        "latitude": 5.900899887084960,
        "longitude": 118.05899810791000
    },
    "SDL": {
        "latitude": 62.528099060058600,
        "longitude": 17.443899154663100
    },
    "SDM": {
        "latitude": 32.572639,
        "longitude": -116.980019
    },
    "SDP": {
        "latitude": 55.314998626709000,
        "longitude": -160.5229949951170
    },
    "SDQ": {
        "latitude": 18.42970085144,
        "longitude": -69.668899536133
    },
    "SDR": {
        "latitude": 43.427101,
        "longitude": -3.82001
    },
    "SDS": {
        "latitude": 38.0601997375,
        "longitude": 138.414001465
    },
    "SDT": {
        "latitude": 34.8135986328125,
        "longitude": 72.35279846191410
    },
    "SDU": {
        "latitude": -22.9105,
        "longitude": -43.163101
    },
    "SDY": {
        "latitude": 47.706902,
        "longitude": -104.193001
    },
    "SEA": {
        "latitude": 47.449162,
        "longitude": -122.311134
    },
    "SEB": {
        "latitude": 26.992452,
        "longitude": 14.466162
    },
    "SEK": {
        "latitude": 67.4805,
        "longitude": 153.7364
    },
    "SEN": {
        "latitude": 51.5714,
        "longitude": 0.695556
    },
    "SEZ": {
        "latitude": -4.67434,
        "longitude": 55.521801
    },
    "SFA": {
        "latitude": 34.71799850463870,
        "longitude": 10.690999984741200
    },
    "SFB": {
        "latitude": 28.777599334716800,
        "longitude": -81.23750305175780
    },
    "SFD": {
        "latitude": 7.883319854736330,
        "longitude": -67.44400024414060
    },
    "SFE": {
        "latitude": 16.595600128173800,
        "longitude": 120.3030014038090
    },
    "SFF": {
        "latitude": 47.682899,
        "longitude": -117.321925
    },
    "SFG": {
        "latitude": 18.099899,
        "longitude": -63.047199
    },
    "SFJ": {
        "latitude": 67.010446,
        "longitude": -50.715294
    },
    "SFN": {
        "latitude": -31.7117,
        "longitude": -60.8117
    },
    "SFO": {
        "latitude": 37.61899948120120,
        "longitude": -122.375
    },
    "SFS": {
        "latitude": 14.7944,
        "longitude": 120.271004
    },
    "SFT": {
        "latitude": 64.62480163574220,
        "longitude": 21.076900482177700
    },
    "SGC": {
        "latitude": 61.34370040893560,
        "longitude": 73.40180206298830
    },
    "SGD": {
        "latitude": 54.96440124511720,
        "longitude": 9.791729927062990
    },
    "SGE": {
        "latitude": 50.707698822021500,
        "longitude": 8.082969665527340
    },
    "SGF": {
        "latitude": 37.245701,
        "longitude": -93.388603
    },
    "SGH": {
        "latitude": 39.840301513672,
        "longitude": -83.840202331543
    },
    "SGI": {
        "latitude": 32.04859924316410,
        "longitude": 72.66500091552730
    },
    "SGL": {
        "latitude": 14.4954,
        "longitude": 120.903999
    },
    "SGN": {
        "latitude": 10.8188,
        "longitude": 106.652
    },
    "SGR": {
        "latitude": 29.622299194336,
        "longitude": -95.65650177002
    },
    "SGU": {
        "latitude": 37.036389,
        "longitude": -113.510306
    },
    "SGZ": {
        "latitude": 7.186560153961180,
        "longitude": 100.60800170898400
    },
    "SHA": {
        "latitude": 31.198104,
        "longitude": 121.33426
    },
    "SHB": {
        "latitude": 43.5774993896,
        "longitude": 144.960006714
    },
    "SHD": {
        "latitude": 38.263802,
        "longitude": -78.8964
    },
    "SHE": {
        "latitude": 41.639801,
        "longitude": 123.483002
    },
    "SHH": {
        "latitude": 66.249604,
        "longitude": -166.089112
    },
    "SHI": {
        "latitude": 24.8267,
        "longitude": 125.144997
    },
    "SHJ": {
        "latitude": 25.32859992980960,
        "longitude": 55.5172004699707
    },
    "SHL": {
        "latitude": 25.70359992980960,
        "longitude": 91.97869873046880
    },
    "SHM": {
        "latitude": 33.6622009277,
        "longitude": 135.363998413
    },
    "SHO": {
        "latitude": -26.358611,
        "longitude": 31.716944
    },
    "SHR": {
        "latitude": 44.76919937133790,
        "longitude": -106.9800033569340
    },
    "SHS": {
        "latitude": 30.29281,
        "longitude": 112.44854
    },
    "SHT": {
        "latitude": -36.428341,
        "longitude": 145.391473
    },
    "SHV": {
        "latitude": 32.446602,
        "longitude": -93.8256
    },
    "SHW": {
        "latitude": 17.4669,
        "longitude": 47.121399
    },
    "SIA": {
        "latitude": 34.376701,
        "longitude": 109.120003
    },
    "SID": {
        "latitude": 16.7414,
        "longitude": -22.9494
    },
    "SIG": {
        "latitude": 18.45680046081540,
        "longitude": -66.09809875488280
    },
    "SIJ": {
        "latitude": 66.137847,
        "longitude": -18.908157
    },
    "SIN": {
        "latitude": 1.35019,
        "longitude": 103.994003
    },
    "SIO": {
        "latitude": -40.834999084472700,
        "longitude": 145.08399963378900
    },
    "SIP": {
        "latitude": 45.0522,
        "longitude": 33.975101
    },
    "SIR": {
        "latitude": 46.219166,
        "longitude": 7.326944
    },
    "SIS": {
        "latitude": -27.6485996246,
        "longitude": 22.9993000031
    },
    "SIT": {
        "latitude": 57.04710006713870,
        "longitude": -135.36199951171900
    },
    "SJC": {
        "latitude": 37.362452,
        "longitude": -121.929188
    },
    "SJD": {
        "latitude": 23.1518,
        "longitude": -109.721001
    },
    "SJE": {
        "latitude": 2.57969,
        "longitude": -72.6394
    },
    "SJI": {
        "latitude": 12.361499786400000,
        "longitude": 121.04699707
    },
    "SJJ": {
        "latitude": 43.8246,
        "longitude": 18.331499
    },
    "SJK": {
        "latitude": -23.2292,
        "longitude": -45.8615
    },
    "SJL": {
        "latitude": -0.14835,
        "longitude": -66.9855
    },
    "SJO": {
        "latitude": 9.99386,
        "longitude": -84.208801
    },
    "SJP": {
        "latitude": -20.817113,
        "longitude": -49.406963
    },
    "SJT": {
        "latitude": 31.35770034790040,
        "longitude": -100.49600219726600
    },
    "SJU": {
        "latitude": 18.4393997192,
        "longitude": -66.0018005371
    },
    "SJW": {
        "latitude": 38.280701,
        "longitude": 114.696999
    },
    "SJX": {
        "latitude": 18.35610008239750,
        "longitude": -88.13079833984380
    },
    "SJY": {
        "latitude": 62.692101,
        "longitude": 22.8323
    },
    "SJZ": {
        "latitude": 38.665501,
        "longitude": -28.1758
    },
    "SKA": {
        "latitude": 47.615101,
        "longitude": -117.655998
    },
    "SKB": {
        "latitude": 17.311199188232400,
        "longitude": -62.71870040893560
    },
    "SKD": {
        "latitude": 39.70050048828130,
        "longitude": 66.98380279541020
    },
    "SKE": {
        "latitude": 59.185001373291000,
        "longitude": 9.566940307617190
    },
    "SKF": {
        "latitude": 29.38419914,
        "longitude": -98.58110046
    },
    "SKG": {
        "latitude": 40.51969909667970,
        "longitude": 22.97089958190920
    },
    "SKN": {
        "latitude": 68.578827,
        "longitude": 15.033417
    },
    "SKO": {
        "latitude": 12.916299819946300,
        "longitude": 5.207190036773680
    },
    "SKP": {
        "latitude": 41.961601,
        "longitude": 21.621401
    },
    "SKS": {
        "latitude": 55.221048,
        "longitude": 9.26702
    },
    "SKT": {
        "latitude": 32.535557,
        "longitude": 74.363892
    },
    "SKV": {
        "latitude": 28.682729,
        "longitude": 34.060503
    },
    "SKX": {
        "latitude": 54.12512969970700,
        "longitude": 45.212257385253900
    },
    "SKZ": {
        "latitude": 27.722000122070300,
        "longitude": 68.79170227050780
    },
    "SLA": {
        "latitude": -24.856000900300000,
        "longitude": -65.4861984253
    },
    "SLC": {
        "latitude": 40.785749,
        "longitude": -111.979746
    },
    "SLD": {
        "latitude": 48.63779830932620,
        "longitude": 19.13409996032720
    },
    "SLE": {
        "latitude": 44.90950012,
        "longitude": -123.0029984
    },
    "SLK": {
        "latitude": 44.38691,
        "longitude": -74.204629
    },
    "SLL": {
        "latitude": 17.038700103759800,
        "longitude": 54.09130096435550
    },
    "SLM": {
        "latitude": 40.952099,
        "longitude": -5.50199
    },
    "SLN": {
        "latitude": 38.79100036621090,
        "longitude": -97.6521987915039
    },
    "SLP": {
        "latitude": 22.254299163800000,
        "longitude": -100.930999756
    },
    "SLU": {
        "latitude": 14.0202,
        "longitude": -60.992901
    },
    "SLW": {
        "latitude": 25.54949951171880,
        "longitude": -100.92900085449200
    },
    "SLY": {
        "latitude": 66.5907974243164,
        "longitude": 66.61100006103520
    },
    "SLZ": {
        "latitude": -2.58536,
        "longitude": -44.2341
    },
    "SMA": {
        "latitude": 36.97140121459960,
        "longitude": -25.17060089111330
    },
    "SME": {
        "latitude": 37.053398132300000,
        "longitude": -84.6158981323
    },
    "SMF": {
        "latitude": 38.69540023803710,
        "longitude": -121.59100341796900
    },
    "SMI": {
        "latitude": 37.689998626709000,
        "longitude": 26.911699295043900
    },
    "SML": {
        "latitude": 23.582317,
        "longitude": -75.268621
    },
    "SMN": {
        "latitude": 45.1237983704,
        "longitude": -113.880996704
    },
    "SMO": {
        "latitude": 34.0158,
        "longitude": -118.450996
    },
    "SMR": {
        "latitude": 11.1196,
        "longitude": -74.2306
    },
    "SMS": {
        "latitude": -17.093901,
        "longitude": 49.8158
    },
    "SMV": {
        "latitude": 46.53409957885740,
        "longitude": 9.884110450744630
    },
    "SMW": {
        "latitude": 26.731987,
        "longitude": -11.683655
    },
    "SMX": {
        "latitude": 34.898899,
        "longitude": -120.457001
    },
    "SNA": {
        "latitude": 33.675701,
        "longitude": -117.867996
    },
    "SNB": {
        "latitude": -11.417674,
        "longitude": 130.648481
    },
    "SNC": {
        "latitude": -2.20499,
        "longitude": -80.988899
    },
    "SNE": {
        "latitude": 16.588852,
        "longitude": -24.284132
    },
    "SNF": {
        "latitude": 10.2787,
        "longitude": -68.755203
    },
    "SNJ": {
        "latitude": 22.100525,
        "longitude": -84.157376
    },
    "SNN": {
        "latitude": 52.702,
        "longitude": -8.92482
    },
    "SNO": {
        "latitude": 17.195100784301800,
        "longitude": 104.11900329589800
    },
    "SNP": {
        "latitude": 57.166311,
        "longitude": -170.222555
    },
    "SNR": {
        "latitude": 47.3105556,
        "longitude": -2.1566667
    },
    "SNS": {
        "latitude": 36.662799835205,
        "longitude": -121.60600280762
    },
    "SNU": {
        "latitude": 22.49220085144040,
        "longitude": -79.943603515625
    },
    "SNV": {
        "latitude": 4.554999828338620,
        "longitude": -61.150001525878900
    },
    "SNW": {
        "latitude": 18.4606990814209,
        "longitude": 94.30010223388670
    },
    "SNY": {
        "latitude": 41.10129929,
        "longitude": -102.9850006
    },
    "SNZ": {
        "latitude": -22.9324,
        "longitude": -43.719101
    },
    "SOB": {
        "latitude": 46.686391,
        "longitude": 17.159084
    },
    "SOF": {
        "latitude": 42.696693420410200,
        "longitude": 23.411436080932600
    },
    "SOJ": {
        "latitude": 69.786796569824,
        "longitude": 20.959400177002
    },
    "SOM": {
        "latitude": 8.9451465606689,
        "longitude": -64.151084899902
    },
    "SON": {
        "latitude": -15.505000114400000,
        "longitude": 167.220001221
    },
    "SOO": {
        "latitude": 61.26150131225590,
        "longitude": 17.09910011291500
    },
    "SOQ": {
        "latitude": -0.894,
        "longitude": 131.287
    },
    "SOT": {
        "latitude": 67.3949966431,
        "longitude": 26.6191005707
    },
    "SOU": {
        "latitude": 50.950298,
        "longitude": -1.3568
    },
    "SOZ": {
        "latitude": 41.924400329589800,
        "longitude": 9.406000137329100
    },
    "SPC": {
        "latitude": 28.626499,
        "longitude": -17.7556
    },
    "SPD": {
        "latitude": 25.759199142456100,
        "longitude": 88.90889739990230
    },
    "SPI": {
        "latitude": 39.844101,
        "longitude": -89.677902
    },
    "SPM": {
        "latitude": 49.9726982117,
        "longitude": 6.69250011444
    },
    "SPN": {
        "latitude": 15.119,
        "longitude": 145.729004
    },
    "SPP": {
        "latitude": -14.657600402832000,
        "longitude": 17.71980094909670
    },
    "SPR": {
        "latitude": 17.9139,
        "longitude": -87.9711
    },
    "SPS": {
        "latitude": 33.9888,
        "longitude": -98.491898
    },
    "SPU": {
        "latitude": 43.53889846801760,
        "longitude": 16.29800033569340
    },
    "SPX": {
        "latitude": 30.108078,
        "longitude": 30.889252
    },
    "SPY": {
        "latitude": 4.746719837188720,
        "longitude": -6.660820007324220
    },
    "SQD": {
        "latitude": 28.3797,
        "longitude": 117.9643
    },
    "SQG": {
        "latitude": 0.063851,
        "longitude": 111.473572
    },
    "SQJ": {
        "latitude": 26.4263,
        "longitude": 117.8336
    },
    "SQO": {
        "latitude": 64.960899,
        "longitude": 17.6966
    },
    "SQQ": {
        "latitude": 55.89390182495120,
        "longitude": 23.395000457763700
    },
    "SQW": {
        "latitude": 56.550201416015600,
        "longitude": 9.172980308532720
    },
    "SQZ": {
        "latitude": 53.307800293,
        "longitude": -0.550832986832
    },
    "SRE": {
        "latitude": -19.246835,
        "longitude": -65.149611
    },
    "SRG": {
        "latitude": -6.970732,
        "longitude": 110.373244
    },
    "SRP": {
        "latitude": 59.791901,
        "longitude": 5.34085
    },
    "SRQ": {
        "latitude": 27.395399,
        "longitude": -82.554398
    },
    "SRT": {
        "latitude": 1.7276899814605700,
        "longitude": 33.622798919677700
    },
    "SRX": {
        "latitude": 31.063499,
        "longitude": 16.594999
    },
    "SRY": {
        "latitude": 36.644408,
        "longitude": 53.188761
    },
    "SRZ": {
        "latitude": -17.8115997314,
        "longitude": -63.1715011597
    },
    "SSA": {
        "latitude": -12.908611,
        "longitude": -38.322498
    },
    "SSC": {
        "latitude": 33.972698,
        "longitude": -80.470596
    },
    "SSE": {
        "latitude": 17.6280002594,
        "longitude": 75.93479919430000
    },
    "SSF": {
        "latitude": 29.336999893188,
        "longitude": -98.471099853516
    },
    "SSG": {
        "latitude": 3.755270004272460,
        "longitude": 8.708720207214360
    },
    "SSH": {
        "latitude": 27.978902,
        "longitude": 34.385598
    },
    "SSI": {
        "latitude": 31.1518,
        "longitude": -81.391296
    },
    "SSJ": {
        "latitude": 65.956802,
        "longitude": 12.4689
    },
    "SSN": {
        "latitude": 37.444744,
        "longitude": 127.112718
    },
    "SST": {
        "latitude": -36.5423,
        "longitude": -56.7218
    },
    "SSY": {
        "latitude": -6.269899845123290,
        "longitude": 14.246999740600600
    },
    "SSZ": {
        "latitude": -23.928192,
        "longitude": -46.300195
    },
    "STA": {
        "latitude": 55.9901008605957,
        "longitude": 8.353910446166990
    },
    "STB": {
        "latitude": 8.974550247192380,
        "longitude": -71.94325256347660
    },
    "STC": {
        "latitude": 45.5466,
        "longitude": -94.059898
    },
    "STD": {
        "latitude": 7.56538,
        "longitude": -72.035103
    },
    "STG": {
        "latitude": 56.577345,
        "longitude": -169.663823
    },
    "STI": {
        "latitude": 19.406099319458000,
        "longitude": -70.60469818115230
    },
    "STJ": {
        "latitude": 39.771900177002,
        "longitude": -94.909698486328
    },
    "STL": {
        "latitude": 38.748697,
        "longitude": -90.370003
    },
    "STM": {
        "latitude": -2.422423,
        "longitude": -54.79306
    },
    "STN": {
        "latitude": 51.8849983215,
        "longitude": 0.234999999404
    },
    "STP": {
        "latitude": 44.93450164794920,
        "longitude": -93.05999755859380
    },
    "STR": {
        "latitude": 48.689899444600000,
        "longitude": 9.22196006775
    },
    "STS": {
        "latitude": 38.50899887,
        "longitude": -122.8130035
    },
    "STT": {
        "latitude": 18.337091,
        "longitude": -64.977251
    },
    "STV": {
        "latitude": 21.1140995026,
        "longitude": 72.7417984009
    },
    "STW": {
        "latitude": 45.10919952392580,
        "longitude": 42.11280059814450
    },
    "STX": {
        "latitude": 17.701900482177700,
        "longitude": -64.79859924316410
    },
    "STY": {
        "latitude": -31.438499450683600,
        "longitude": -57.98529815673830
    },
    "SUB": {
        "latitude": -7.37983,
        "longitude": 112.787003
    },
    "SUF": {
        "latitude": 38.905399,
        "longitude": 16.2423
    },
    "SUG": {
        "latitude": 9.755838325630000,
        "longitude": 125.480947495
    },
    "SUI": {
        "latitude": 42.8582,
        "longitude": 41.128101
    },
    "SUJ": {
        "latitude": 47.70330047607420,
        "longitude": 22.885700225830100
    },
    "SUL": {
        "latitude": 28.645099639892600,
        "longitude": 69.1769027709961
    },
    "SUN": {
        "latitude": 43.50439835,
        "longitude": -114.2959976
    },
    "SUS": {
        "latitude": 38.662102,
        "longitude": -90.652
    },
    "SUU": {
        "latitude": 38.262699,
        "longitude": -121.927002
    },
    "SUV": {
        "latitude": -18.04330062866210,
        "longitude": 178.5590057373050
    },
    "SUX": {
        "latitude": 42.397605,
        "longitude": -96.382237
    },
    "SVA": {
        "latitude": 63.686401,
        "longitude": -170.492996
    },
    "SVB": {
        "latitude": -14.2786,
        "longitude": 50.174702
    },
    "SVD": {
        "latitude": 13.156695,
        "longitude": -61.149945
    },
    "SVG": {
        "latitude": 58.876701,
        "longitude": 5.63778
    },
    "SVI": {
        "latitude": 2.15217,
        "longitude": -74.7663
    },
    "SVJ": {
        "latitude": 68.243301,
        "longitude": 14.6692
    },
    "SVL": {
        "latitude": 61.9431,
        "longitude": 28.945101
    },
    "SVN": {
        "latitude": 32.00999832,
        "longitude": -81.14569855
    },
    "SVO": {
        "latitude": 55.972599,
        "longitude": 37.4146
    },
    "SVP": {
        "latitude": -12.404600143433,
        "longitude": 16.947399139404
    },
    "SVQ": {
        "latitude": 37.417999,
        "longitude": -5.89311
    },
    "SVW": {
        "latitude": 61.09740067,
        "longitude": -155.5740051
    },
    "SVX": {
        "latitude": 56.743099212646,
        "longitude": 60.802700042725
    },
    "SVZ": {
        "latitude": 7.840829849243160,
        "longitude": -72.439697265625
    },
    "SWA": {
        "latitude": 23.552,
        "longitude": 116.5033
    },
    "SWC": {
        "latitude": -37.07170104980470,
        "longitude": 142.74099731445300
    },
    "SWD": {
        "latitude": 60.130478,
        "longitude": -149.418612
    },
    "SWF": {
        "latitude": 41.504101,
        "longitude": -74.104797
    },
    "SWH": {
        "latitude": -35.37580108642580,
        "longitude": 143.5330047607420
    },
    "SWO": {
        "latitude": 36.161201477051,
        "longitude": -97.08570098877
    },
    "SWS": {
        "latitude": 51.60530090332030,
        "longitude": -4.0678300857543900
    },
    "SWT": {
        "latitude": 60.709400177,
        "longitude": 77.66000366210000
    },
    "SWU": {
        "latitude": 37.239399,
        "longitude": 127.007004
    },
    "SWV": {
        "latitude": 61.921786,
        "longitude": 159.229059
    },
    "SXB": {
        "latitude": 48.538299560546900,
        "longitude": 7.628230094909670
    },
    "SXE": {
        "latitude": -38.090827,
        "longitude": 146.965335
    },
    "SXI": {
        "latitude": 25.908899,
        "longitude": 54.539398
    },
    "SXJ": {
        "latitude": 42.91170120239260,
        "longitude": 90.24749755859380
    },
    "SXL": {
        "latitude": 54.280200958252,
        "longitude": -8.5992097854614
    },
    "SXM": {
        "latitude": 18.041,
        "longitude": -63.108898
    },
    "SXN": {
        "latitude": -20.5534,
        "longitude": 26.115801
    },
    "SXQ": {
        "latitude": 60.474935,
        "longitude": -151.038471
    },
    "SXR": {
        "latitude": 33.987099,
        "longitude": 74.7742
    },
    "SXV": {
        "latitude": 11.78330039978,
        "longitude": 78.06559753418
    },
    "SXZ": {
        "latitude": 37.97890090942380,
        "longitude": 41.84040069580080
    },
    "SYA": {
        "latitude": 52.71229935,
        "longitude": 174.1139984
    },
    "SYD": {
        "latitude": -33.94609832763670,
        "longitude": 151.177001953125
    },
    "SYJ": {
        "latitude": 29.5509,
        "longitude": 55.672699
    },
    "SYO": {
        "latitude": 38.812199,
        "longitude": 139.787003
    },
    "SYP": {
        "latitude": 8.085599899291990,
        "longitude": -80.94529724121090
    },
    "SYQ": {
        "latitude": 9.95705,
        "longitude": -84.139801
    },
    "SYR": {
        "latitude": 43.11119842529300,
        "longitude": -76.1063003540039
    },
    "SYS": {
        "latitude": 71.927902,
        "longitude": 114.080002
    },
    "SYT": {
        "latitude": 46.412498474121100,
        "longitude": 4.0132598876953100
    },
    "SYW": {
        "latitude": 26.473100662231400,
        "longitude": 67.71720123291020
    },
    "SYX": {
        "latitude": 18.3029,
        "longitude": 109.412003
    },
    "SYY": {
        "latitude": 58.215599,
        "longitude": -6.33111
    },
    "SYZ": {
        "latitude": 29.5392,
        "longitude": 52.589802
    },
    "SZA": {
        "latitude": -6.141089916229250,
        "longitude": 12.371800422668500
    },
    "SZB": {
        "latitude": 3.130579948425290,
        "longitude": 101.54900360107400
    },
    "SZF": {
        "latitude": 41.254501,
        "longitude": 36.567101
    },
    "SZG": {
        "latitude": 47.793300628700000,
        "longitude": 13.0043001175
    },
    "SZJ": {
        "latitude": 21.642499923706100,
        "longitude": -82.9551010131836
    },
    "SZK": {
        "latitude": -24.960899353,
        "longitude": 31.5886993408
    },
    "SZL": {
        "latitude": 38.730301,
        "longitude": -93.547897
    },
    "SZV": {
        "latitude": 31.2631,
        "longitude": 120.401001
    },
    "SZW": {
        "latitude": 53.426998,
        "longitude": 11.7834
    },
    "SZX": {
        "latitude": 22.639299,
        "longitude": 113.810997
    },
    "SZY": {
        "latitude": 53.481899,
        "longitude": 20.9377
    },
    "SZZ": {
        "latitude": 53.584702,
        "longitude": 14.9022
    },
    "TAB": {
        "latitude": 11.149700164794900,
        "longitude": -60.83219909667970
    },
    "TAC": {
        "latitude": 11.227761,
        "longitude": 125.027783
    },
    "TAE": {
        "latitude": 35.896872,
        "longitude": 128.65531
    },
    "TAF": {
        "latitude": 35.5424,
        "longitude": -0.532278
    },
    "TAG": {
        "latitude": 9.573045,
        "longitude": 123.770143
    },
    "TAH": {
        "latitude": -19.45509910583500,
        "longitude": 169.2239990234380
    },
    "TAI": {
        "latitude": 13.6859998703,
        "longitude": 44.139099121100000
    },
    "TAK": {
        "latitude": 34.214199066200000,
        "longitude": 134.01600647
    },
    "TAM": {
        "latitude": 22.2964000702,
        "longitude": -97.8658981323
    },
    "TAO": {
        "latitude": 36.361953,
        "longitude": 120.088171
    },
    "TAP": {
        "latitude": 14.7943000793,
        "longitude": -92.3700027466
    },
    "TAR": {
        "latitude": 40.517502,
        "longitude": 17.4032
    },
    "TAS": {
        "latitude": 41.257900238,
        "longitude": 69.2811965942
    },
    "TAT": {
        "latitude": 49.073601,
        "longitude": 20.2411
    },
    "TAY": {
        "latitude": 58.307499,
        "longitude": 26.690399
    },
    "TAZ": {
        "latitude": 41.759853,
        "longitude": 59.836149
    },
    "TBB": {
        "latitude": 13.0496,
        "longitude": 109.334
    },
    "TBF": {
        "latitude": -1.2244700193405200,
        "longitude": 174.7760009765630
    },
    "TBH": {
        "latitude": 12.3109998703,
        "longitude": 122.084999084
    },
    "TBI": {
        "latitude": 24.3153,
        "longitude": -75.452301
    },
    "TBJ": {
        "latitude": 36.98,
        "longitude": 8.87694
    },
    "TBN": {
        "latitude": 37.74160004,
        "longitude": -92.14070129
    },
    "TBP": {
        "latitude": -3.552074,
        "longitude": -80.381086
    },
    "TBS": {
        "latitude": 41.6692008972,
        "longitude": 44.95470047
    },
    "TBT": {
        "latitude": -4.25567,
        "longitude": -69.935799
    },
    "TBU": {
        "latitude": -21.241199493408200,
        "longitude": -175.14999389648400
    },
    "TBW": {
        "latitude": 52.806098937988,
        "longitude": 41.482799530029
    },
    "TBZ": {
        "latitude": 38.1339,
        "longitude": 46.235001
    },
    "TCA": {
        "latitude": -19.6343994140625,
        "longitude": 134.18299865722700
    },
    "TCB": {
        "latitude": 26.745300293,
        "longitude": -77.3912963867
    },
    "TCC": {
        "latitude": 35.182800293,
        "longitude": -103.602996826
    },
    "TCE": {
        "latitude": 45.0625,
        "longitude": 28.7143
    },
    "TCL": {
        "latitude": 33.220600128174,
        "longitude": -87.611396789551
    },
    "TCM": {
        "latitude": 47.137699,
        "longitude": -122.475998
    },
    "TCO": {
        "latitude": 1.81442,
        "longitude": -78.7492
    },
    "TCP": {
        "latitude": 29.594496,
        "longitude": 34.775752
    },
    "TCQ": {
        "latitude": -18.053300857500000,
        "longitude": -70.2758026123
    },
    "TCS": {
        "latitude": 33.2369,
        "longitude": -107.272003
    },
    "TCX": {
        "latitude": 33.6678009033,
        "longitude": 56.8927001953
    },
    "TCZ": {
        "latitude": 24.938056,
        "longitude": 98.485833
    },
    "TDD": {
        "latitude": -14.8186998367,
        "longitude": -64.9179992676
    },
    "TDG": {
        "latitude": 9.072002,
        "longitude": 126.17132
    },
    "TDK": {
        "latitude": 45.12255,
        "longitude": 78.442758
    },
    "TDL": {
        "latitude": -37.234634,
        "longitude": -59.228647
    },
    "TDX": {
        "latitude": 12.2746,
        "longitude": 102.319
    },
    "TEA": {
        "latitude": 15.7759,
        "longitude": -87.4758
    },
    "TEB": {
        "latitude": 40.85010147090000,
        "longitude": -74.060798645
    },
    "TEC": {
        "latitude": -24.317801,
        "longitude": -50.6516
    },
    "TED": {
        "latitude": 57.06880187988280,
        "longitude": 8.705220222473150
    },
    "TEE": {
        "latitude": 35.4315986633,
        "longitude": 8.12071990967
    },
    "TEF": {
        "latitude": -21.71500015258790,
        "longitude": 122.22899627685500
    },
    "TEM": {
        "latitude": -34.421398,
        "longitude": 147.511993
    },
    "TEN": {
        "latitude": 27.883333,
        "longitude": 109.308889
    },
    "TEQ": {
        "latitude": 41.13819885253910,
        "longitude": 27.919099807739300
    },
    "TER": {
        "latitude": 38.761799,
        "longitude": -27.090799
    },
    "TET": {
        "latitude": -16.104799270629900,
        "longitude": 33.640201568603500
    },
    "TEU": {
        "latitude": -45.53310012817380,
        "longitude": 167.64999389648400
    },
    "TEV": {
        "latitude": 40.410269,
        "longitude": -1.217366
    },
    "TEZ": {
        "latitude": 26.7091007232666,
        "longitude": 92.78469848632810
    },
    "TFF": {
        "latitude": -3.38294,
        "longitude": -64.724098
    },
    "TFN": {
        "latitude": 28.4827,
        "longitude": -16.341499
    },
    "TFS": {
        "latitude": 28.0445,
        "longitude": -16.5725
    },
    "TFU": {
        "latitude": 30.31252,
        "longitude": 104.441284
    },
    "TGA": {
        "latitude": 1.387561,
        "longitude": 103.708291
    },
    "TGD": {
        "latitude": 42.359402,
        "longitude": 19.2519
    },
    "TGG": {
        "latitude": 5.3826398849487300,
        "longitude": 103.10299682617200
    },
    "TGJ": {
        "latitude": -21.096099853515600,
        "longitude": 167.8040008544920
    },
    "TGK": {
        "latitude": 47.1983333,
        "longitude": 38.8491667
    },
    "TGM": {
        "latitude": 46.46770095825200,
        "longitude": 24.412500381469700
    },
    "TGN": {
        "latitude": -38.211004,
        "longitude": 146.470817
    },
    "TGO": {
        "latitude": 43.556702,
        "longitude": 122.199997
    },
    "TGP": {
        "latitude": 61.589699,
        "longitude": 89.994003
    },
    "TGR": {
        "latitude": 33.067799,
        "longitude": 6.08867
    },
    "TGT": {
        "latitude": -5.09236,
        "longitude": 39.071201
    },
    "TGU": {
        "latitude": 14.0609,
        "longitude": -87.217201
    },
    "TGZ": {
        "latitude": 16.5636005402,
        "longitude": -93.02249908450000
    },
    "THE": {
        "latitude": -5.06025,
        "longitude": -42.823712
    },
    "THG": {
        "latitude": -24.494863,
        "longitude": 150.577967
    },
    "THL": {
        "latitude": 20.483800888061500,
        "longitude": 99.9354019165039
    },
    "THN": {
        "latitude": 58.31809997558590,
        "longitude": 12.345000267028800
    },
    "THQ": {
        "latitude": 34.559399,
        "longitude": 105.860001
    },
    "THR": {
        "latitude": 35.68920135498050,
        "longitude": 51.31340026855470
    },
    "THS": {
        "latitude": 17.238000869751000,
        "longitude": 99.81819915771480
    },
    "THU": {
        "latitude": 76.5311965942,
        "longitude": -68.7032012939
    },
    "THZ": {
        "latitude": 14.8757,
        "longitude": 5.26536
    },
    "TIA": {
        "latitude": 41.4146995544,
        "longitude": 19.7206001282
    },
    "TID": {
        "latitude": 35.341099,
        "longitude": 1.46315
    },
    "TIF": {
        "latitude": 21.483001,
        "longitude": 40.543442
    },
    "TIH": {
        "latitude": -15.119600296020500,
        "longitude": -148.2310028076170
    },
    "TIJ": {
        "latitude": 32.541099548339800,
        "longitude": -116.97000122070300
    },
    "TIK": {
        "latitude": 35.4147,
        "longitude": -97.386597
    },
    "TIM": {
        "latitude": -4.52978,
        "longitude": 136.887388
    },
    "TIN": {
        "latitude": 27.7003993988,
        "longitude": -8.167099952700000
    },
    "TIQ": {
        "latitude": 14.9992,
        "longitude": 145.619003
    },
    "TIU": {
        "latitude": -44.302799224853500,
        "longitude": 171.22500610351600
    },
    "TIV": {
        "latitude": 42.404701232910200,
        "longitude": 18.72330093383790
    },
    "TIW": {
        "latitude": 47.26789856,
        "longitude": -122.5780029
    },
    "TIX": {
        "latitude": 28.514799118042,
        "longitude": -80.799201965332
    },
    "TJA": {
        "latitude": -21.5557,
        "longitude": -64.701302
    },
    "TJG": {
        "latitude": -2.21656,
        "longitude": 115.435997
    },
    "TJH": {
        "latitude": 35.512798,
        "longitude": 134.787003
    },
    "TJI": {
        "latitude": 15.926599,
        "longitude": -85.938573
    },
    "TJK": {
        "latitude": 40.307430267334000,
        "longitude": 36.367408752441400
    },
    "TJM": {
        "latitude": 57.189601898200000,
        "longitude": 65.3243026733
    },
    "TJU": {
        "latitude": 37.98809814453130,
        "longitude": 69.80500030517580
    },
    "TKA": {
        "latitude": 62.320499420166,
        "longitude": -150.09399414062
    },
    "TKC": {
        "latitude": 4.08919000626,
        "longitude": 9.360529899600000
    },
    "TKD": {
        "latitude": 4.896059989929200,
        "longitude": -1.7747600078582800
    },
    "TKF": {
        "latitude": 39.319999694800000,
        "longitude": -120.13999939
    },
    "TKG": {
        "latitude": -5.246803,
        "longitude": 105.182531
    },
    "TKH": {
        "latitude": 15.277299881,
        "longitude": 100.29599762
    },
    "TKK": {
        "latitude": 7.461870193481450,
        "longitude": 151.84300231933600
    },
    "TKN": {
        "latitude": 27.836399,
        "longitude": 128.880997
    },
    "TKP": {
        "latitude": -14.709500312805200,
        "longitude": -145.24600219726600
    },
    "TKS": {
        "latitude": 34.132801,
        "longitude": 134.606995
    },
    "TKT": {
        "latitude": 16.895999908447300,
        "longitude": 99.25330352783200
    },
    "TKU": {
        "latitude": 60.514099,
        "longitude": 22.2628
    },
    "TKX": {
        "latitude": -14.45580005645750,
        "longitude": -145.02499389648400
    },
    "TLC": {
        "latitude": 19.337099,
        "longitude": -99.566002
    },
    "TLE": {
        "latitude": -23.3834,
        "longitude": 43.7285
    },
    "TLH": {
        "latitude": 30.3965,
        "longitude": -84.350304
    },
    "TLJ": {
        "latitude": 62.894401550300000,
        "longitude": -155.977005005
    },
    "TLL": {
        "latitude": 59.41329956050000,
        "longitude": 24.832799911500000
    },
    "TLM": {
        "latitude": 35.013426,
        "longitude": -1.457191
    },
    "TLN": {
        "latitude": 43.0973014832,
        "longitude": 6.14602994919
    },
    "TLQ": {
        "latitude": 43.0308,
        "longitude": 89.0987
    },
    "TLS": {
        "latitude": 43.629101,
        "longitude": 1.36382
    },
    "TLV": {
        "latitude": 32.01139831542970,
        "longitude": 34.88669967651370
    },
    "TLX": {
        "latitude": -35.37779998779300,
        "longitude": -71.60169982910160
    },
    "TMB": {
        "latitude": 25.6479,
        "longitude": -80.4328
    },
    "TME": {
        "latitude": 6.45108,
        "longitude": -71.7603
    },
    "TMH": {
        "latitude": -6.09669,
        "longitude": 140.303521
    },
    "TMJ": {
        "latitude": 37.287261,
        "longitude": 67.311869
    },
    "TML": {
        "latitude": 9.55718994140625,
        "longitude": -0.8632140159606930
    },
    "TMM": {
        "latitude": -18.109501,
        "longitude": 49.392502
    },
    "TMO": {
        "latitude": 7.24938,
        "longitude": -61.52893
    },
    "TMP": {
        "latitude": 61.414101,
        "longitude": 23.604401
    },
    "TMR": {
        "latitude": 22.8115005493,
        "longitude": 5.45107984543
    },
    "TMS": {
        "latitude": 0.378175,
        "longitude": 6.71215
    },
    "TMT": {
        "latitude": -1.4896,
        "longitude": -56.396801
    },
    "TMW": {
        "latitude": -31.077898,
        "longitude": 150.845484
    },
    "TMX": {
        "latitude": 29.237101,
        "longitude": 0.276033
    },
    "TNA": {
        "latitude": 36.857201,
        "longitude": 117.216003
    },
    "TND": {
        "latitude": 21.788299560546900,
        "longitude": -79.99720001220700
    },
    "TNE": {
        "latitude": 30.605100631700000,
        "longitude": 130.990997314
    },
    "TNF": {
        "latitude": 48.75189971923830,
        "longitude": 2.1061899662017800
    },
    "TNG": {
        "latitude": 35.731741,
        "longitude": -5.921459
    },
    "TNH": {
        "latitude": 42.2538888889,
        "longitude": 125.703333333
    },
    "TNN": {
        "latitude": 22.950399,
        "longitude": 120.206001
    },
    "TNR": {
        "latitude": -18.7969,
        "longitude": 47.478802
    },
    "TNW": {
        "latitude": -1.059722,
        "longitude": -77.583333
    },
    "TOD": {
        "latitude": 2.81818,
        "longitude": 104.160004
    },
    "TOE": {
        "latitude": 33.939701080322300,
        "longitude": 8.110560417175290
    },
    "TOF": {
        "latitude": 56.380298614502,
        "longitude": 85.208297729492
    },
    "TOG": {
        "latitude": 59.052799224853500,
        "longitude": -160.39700317382800
    },
    "TOI": {
        "latitude": 31.860399,
        "longitude": -86.012101
    },
    "TOJ": {
        "latitude": 40.487875,
        "longitude": -3.456808
    },
    "TOL": {
        "latitude": 41.5868,
        "longitude": -83.8078
    },
    "TOM": {
        "latitude": 16.730499,
        "longitude": -3.00758
    },
    "TOO": {
        "latitude": 8.826109886169430,
        "longitude": -82.95890045166020
    },
    "TOP": {
        "latitude": 39.069899,
        "longitude": -95.622606
    },
    "TOQ": {
        "latitude": -22.14109992980960,
        "longitude": -70.06289672851560
    },
    "TOS": {
        "latitude": 69.683296,
        "longitude": 18.9189
    },
    "TOU": {
        "latitude": -20.790127,
        "longitude": 165.259524
    },
    "TOY": {
        "latitude": 36.64830017089840,
        "longitude": 137.18800354003900
    },
    "TPA": {
        "latitude": 27.975500106811500,
        "longitude": -82.533203125
    },
    "TPC": {
        "latitude": -0.12295600026845900,
        "longitude": -76.33779907226560
    },
    "TPE": {
        "latitude": 25.0777,
        "longitude": 121.233002
    },
    "TPH": {
        "latitude": 38.06019974,
        "longitude": -117.086998
    },
    "TPJ": {
        "latitude": 27.3509,
        "longitude": 87.69525
    },
    "TPL": {
        "latitude": 31.15250015258790,
        "longitude": -97.40779876708980
    },
    "TPP": {
        "latitude": -6.508739948272710,
        "longitude": -76.37319946289060
    },
    "TPQ": {
        "latitude": 21.4195,
        "longitude": -104.843002
    },
    "TPS": {
        "latitude": 37.9114,
        "longitude": 12.488
    },
    "TQD": {
        "latitude": 33.33810043335,
        "longitude": 43.597099304199
    },
    "TQS": {
        "latitude": 0.7459,
        "longitude": -75.234
    },
    "TRA": {
        "latitude": 24.653900146500000,
        "longitude": 124.675003052
    },
    "TRC": {
        "latitude": 25.5683,
        "longitude": -103.411003
    },
    "TRD": {
        "latitude": 63.457802,
        "longitude": 10.924
    },
    "TRE": {
        "latitude": 56.49919891357420,
        "longitude": -6.869170188903810
    },
    "TRF": {
        "latitude": 59.1866989136,
        "longitude": 10.258600235
    },
    "TRG": {
        "latitude": -37.67190170288090,
        "longitude": 176.1959991455080
    },
    "TRI": {
        "latitude": 36.475201,
        "longitude": -82.407401
    },
    "TRK": {
        "latitude": 3.325145,
        "longitude": 117.564169
    },
    "TRM": {
        "latitude": 33.62670135498,
        "longitude": -116.16000366211
    },
    "TRN": {
        "latitude": 45.200802,
        "longitude": 7.64963
    },
    "TRO": {
        "latitude": -31.8885993958,
        "longitude": 152.514007568
    },
    "TRQ": {
        "latitude": -8.155534,
        "longitude": -70.782985
    },
    "TRR": {
        "latitude": 8.5385103225708,
        "longitude": 81.18190002441410
    },
    "TRS": {
        "latitude": 45.827499,
        "longitude": 13.4722
    },
    "TRT": {
        "latitude": -3.185833,
        "longitude": 119.91775
    },
    "TRU": {
        "latitude": -8.08141040802002,
        "longitude": -79.10880279541020
    },
    "TRV": {
        "latitude": 8.48211956024,
        "longitude": 76.9200973511
    },
    "TRW": {
        "latitude": 1.38164,
        "longitude": 173.147003
    },
    "TRZ": {
        "latitude": 10.766223,
        "longitude": 78.71774
    },
    "TSA": {
        "latitude": 25.069400787353500,
        "longitude": 121.552001953125
    },
    "TSB": {
        "latitude": -19.26189994812,
        "longitude": 17.732500076294
    },
    "TSF": {
        "latitude": 45.648399,
        "longitude": 12.1944
    },
    "TSJ": {
        "latitude": 34.2849006653,
        "longitude": 129.330993652
    },
    "TSN": {
        "latitude": 39.124401092500000,
        "longitude": 117.346000671
    },
    "TSR": {
        "latitude": 45.809898376464800,
        "longitude": 21.337900161743200
    },
    "TST": {
        "latitude": 7.50874,
        "longitude": 99.6166
    },
    "TSV": {
        "latitude": -19.252904,
        "longitude": 146.766512
    },
    "TTA": {
        "latitude": 28.448200225830100,
        "longitude": -11.161299705505400
    },
    "TTB": {
        "latitude": 39.9188,
        "longitude": 9.68298
    },
    "TTC": {
        "latitude": -25.564300537109400,
        "longitude": -70.37590026855470
    },
    "TTD": {
        "latitude": 45.54940032959,
        "longitude": -122.40100097656
    },
    "TTE": {
        "latitude": 0.831012,
        "longitude": 127.381611
    },
    "TTG": {
        "latitude": -22.6196,
        "longitude": -63.793701
    },
    "TTH": {
        "latitude": 17.666000366210900,
        "longitude": 54.024600982666000
    },
    "TTJ": {
        "latitude": 35.530102,
        "longitude": 134.167007
    },
    "TTN": {
        "latitude": 40.27669906616210,
        "longitude": -74.8134994506836
    },
    "TTQ": {
        "latitude": 10.42,
        "longitude": -83.6095
    },
    "TTT": {
        "latitude": 22.7549991607666,
        "longitude": 121.10199737548800
    },
    "TTU": {
        "latitude": 35.594299,
        "longitude": -5.32002
    },
    "TUA": {
        "latitude": 0.8095059990882870,
        "longitude": -77.70809936523440
    },
    "TUB": {
        "latitude": -23.365400314331100,
        "longitude": -149.5240020751950
    },
    "TUC": {
        "latitude": -26.8409,
        "longitude": -65.104897
    },
    "TUD": {
        "latitude": 13.736800193786600,
        "longitude": -13.65310001373290
    },
    "TUF": {
        "latitude": 47.4322013855,
        "longitude": 0.727605998516
    },
    "TUG": {
        "latitude": 17.6433676823,
        "longitude": 121.733150482
    },
    "TUI": {
        "latitude": 31.692188,
        "longitude": 38.731544
    },
    "TUK": {
        "latitude": 25.986400604248000,
        "longitude": 63.03020095825200
    },
    "TUL": {
        "latitude": 36.19839859008790,
        "longitude": -95.88809967041020
    },
    "TUM": {
        "latitude": -35.268657,
        "longitude": 148.240474
    },
    "TUN": {
        "latitude": 36.851002,
        "longitude": 10.2272
    },
    "TUO": {
        "latitude": -38.73970031738280,
        "longitude": 176.08399963378900
    },
    "TUP": {
        "latitude": 34.26810073852540,
        "longitude": -88.7698974609375
    },
    "TUR": {
        "latitude": -3.78601,
        "longitude": -49.720299
    },
    "TUS": {
        "latitude": 32.115004,
        "longitude": -110.938053
    },
    "TUU": {
        "latitude": 28.3654,
        "longitude": 36.6189
    },
    "TUV": {
        "latitude": 9.088994026184080,
        "longitude": -62.094173431396500
    },
    "TVC": {
        "latitude": 44.74140167236330,
        "longitude": -85.58219909667970
    },
    "TVL": {
        "latitude": 38.89390182495120,
        "longitude": -119.99500274658200
    },
    "TVY": {
        "latitude": 14.103899955749500,
        "longitude": 98.20359802246090
    },
    "TWF": {
        "latitude": 42.4818,
        "longitude": -114.487999
    },
    "TWT": {
        "latitude": 5.048196,
        "longitude": 119.743338
    },
    "TWU": {
        "latitude": 4.320159912109380,
        "longitude": 118.12799835205100
    },
    "TWZ": {
        "latitude": -44.2350006104,
        "longitude": 170.117996216
    },
    "TXC": {
        "latitude": 54.439999,
        "longitude": 30.2967
    },
    "TXE": {
        "latitude": 4.72113,
        "longitude": 96.851943
    },
    "TXK": {
        "latitude": 33.453701,
        "longitude": -93.990997
    },
    "TXN": {
        "latitude": 29.733299255371100,
        "longitude": 118.25599670410200
    },
    "TYB": {
        "latitude": -29.451099395752000,
        "longitude": 142.05799865722700
    },
    "TYF": {
        "latitude": 60.1576,
        "longitude": 12.9913
    },
    "TYL": {
        "latitude": -4.57664,
        "longitude": -81.254097
    },
    "TYM": {
        "latitude": 24.169099807739300,
        "longitude": -76.43910217285160
    },
    "TYN": {
        "latitude": 37.746899,
        "longitude": 112.627998
    },
    "TYR": {
        "latitude": 32.35409927368160,
        "longitude": -95.40239715576170
    },
    "TYS": {
        "latitude": 35.811001,
        "longitude": -83.994003
    },
    "TZA": {
        "latitude": 17.517239,
        "longitude": -88.195775
    },
    "TZL": {
        "latitude": 44.458698,
        "longitude": 18.7248
    },
    "TZN": {
        "latitude": 24.158701,
        "longitude": -77.589798
    },
    "TZR": {
        "latitude": 46.39310073852540,
        "longitude": 17.917499542236300
    },
    "TZX": {
        "latitude": 40.995098,
        "longitude": 39.7897
    },
    "UAB": {
        "latitude": 37.002102,
        "longitude": 35.4259
    },
    "UAI": {
        "latitude": -9.30331039428711,
        "longitude": 125.28700256347700
    },
    "UAK": {
        "latitude": 61.1605,
        "longitude": -45.425999
    },
    "UAM": {
        "latitude": 13.584,
        "longitude": 144.929998
    },
    "UAQ": {
        "latitude": -31.571501,
        "longitude": -68.418198
    },
    "UAR": {
        "latitude": 32.5143055556,
        "longitude": -1.98305555556
    },
    "UBA": {
        "latitude": -19.764722824097,
        "longitude": -47.966110229492
    },
    "UBJ": {
        "latitude": 33.930000305200000,
        "longitude": 131.279006958
    },
    "UBN": {
        "latitude": 47.646916,
        "longitude": 106.819833
    },
    "UBP": {
        "latitude": 15.2512998581,
        "longitude": 104.870002747
    },
    "UCB": {
        "latitude": 41.130266,
        "longitude": 113.107274
    },
    "UCT": {
        "latitude": 63.566898345947300,
        "longitude": 53.8046989440918
    },
    "UDI": {
        "latitude": -18.883579,
        "longitude": -48.225936
    },
    "UDJ": {
        "latitude": 48.634300231933600,
        "longitude": 22.263399124145500
    },
    "UDR": {
        "latitude": 24.617700576800000,
        "longitude": 73.89610290530000
    },
    "UEL": {
        "latitude": -17.855499267578100,
        "longitude": 36.86909866333010
    },
    "UEO": {
        "latitude": 26.363445,
        "longitude": 126.71384
    },
    "UET": {
        "latitude": 30.251399993896500,
        "longitude": 66.93779754638670
    },
    "UFA": {
        "latitude": 54.557498931885,
        "longitude": 55.874401092529
    },
    "UGA": {
        "latitude": 48.85499954223630,
        "longitude": 103.47599792480500
    },
    "UGC": {
        "latitude": 41.58430099487310,
        "longitude": 60.641700744628900
    },
    "UGO": {
        "latitude": -7.60306978225708,
        "longitude": 15.027799606323200
    },
    "UGU": {
        "latitude": -3.739503,
        "longitude": 137.031183
    },
    "UHE": {
        "latitude": 49.02939987182620,
        "longitude": 17.439699172973600
    },
    "UIB": {
        "latitude": 5.69076,
        "longitude": -76.6412
    },
    "UIH": {
        "latitude": 13.955,
        "longitude": 109.042
    },
    "UIN": {
        "latitude": 39.94269943,
        "longitude": -91.19460297
    },
    "UIO": {
        "latitude": -0.129166666667,
        "longitude": -78.3575
    },
    "UIP": {
        "latitude": 47.974998474121100,
        "longitude": -4.167789936065670
    },
    "UKB": {
        "latitude": 34.6328010559082,
        "longitude": 135.2239990234380
    },
    "UKI": {
        "latitude": 39.125999,
        "longitude": -123.200996
    },
    "UKK": {
        "latitude": 50.036571,
        "longitude": 82.493477
    },
    "UKS": {
        "latitude": 44.691822,
        "longitude": 33.57462
    },
    "UKX": {
        "latitude": 56.8567008972168,
        "longitude": 105.7300033569340
    },
    "ULA": {
        "latitude": -49.306816,
        "longitude": -67.802596
    },
    "ULD": {
        "latitude": -28.3206005096,
        "longitude": 31.4165000916
    },
    "ULH": {
        "latitude": 26.48,
        "longitude": 38.128889
    },
    "ULK": {
        "latitude": 60.7206001282,
        "longitude": 114.825996399
    },
    "ULN": {
        "latitude": 47.843102,
        "longitude": 106.766998
    },
    "ULP": {
        "latitude": -26.612199783325200,
        "longitude": 144.2530059814450
    },
    "ULQ": {
        "latitude": 4.08836,
        "longitude": -76.2351
    },
    "ULU": {
        "latitude": 2.8055601119995100,
        "longitude": 32.27180099487310
    },
    "ULV": {
        "latitude": 54.268299,
        "longitude": 48.2267
    },
    "ULY": {
        "latitude": 54.401001,
        "longitude": 48.8027
    },
    "UME": {
        "latitude": 63.791801452637,
        "longitude": 20.282800674438
    },
    "UND": {
        "latitude": 36.6651,
        "longitude": 68.910797
    },
    "UNI": {
        "latitude": 12.600135,
        "longitude": -61.411945
    },
    "UNN": {
        "latitude": 9.77762,
        "longitude": 98.585503
    },
    "UOX": {
        "latitude": 34.384300231934,
        "longitude": -89.536796569824
    },
    "UPB": {
        "latitude": 23.032800674400000,
        "longitude": -82.5793991089
    },
    "UPG": {
        "latitude": -5.06163,
        "longitude": 119.554001
    },
    "UPL": {
        "latitude": 10.8922,
        "longitude": -85.016197
    },
    "UPN": {
        "latitude": 19.3967,
        "longitude": -102.039001
    },
    "URA": {
        "latitude": 51.15079879760740,
        "longitude": 51.54309844970700
    },
    "URC": {
        "latitude": 43.907100677490200,
        "longitude": 87.47419738769530
    },
    "URE": {
        "latitude": 58.22990036010740,
        "longitude": 22.50950050354000
    },
    "URG": {
        "latitude": -29.7822,
        "longitude": -57.0382
    },
    "URJ": {
        "latitude": 60.10329818725590,
        "longitude": 64.82669830322270
    },
    "URO": {
        "latitude": 49.38420104980470,
        "longitude": 1.1748000383377100
    },
    "URS": {
        "latitude": 51.7505989074707,
        "longitude": 36.29560089111330
    },
    "URT": {
        "latitude": 9.13259983063,
        "longitude": 99.135597229
    },
    "URY": {
        "latitude": 31.412413,
        "longitude": 37.278898
    },
    "USA": {
        "latitude": 35.387798,
        "longitude": -80.709099
    },
    "USH": {
        "latitude": -54.8433,
        "longitude": -68.2958
    },
    "USK": {
        "latitude": 66.00469970703130,
        "longitude": 57.3671989440918
    },
    "USM": {
        "latitude": 9.54779,
        "longitude": 100.061996
    },
    "USN": {
        "latitude": 35.59349823,
        "longitude": 129.352005005
    },
    "USR": {
        "latitude": 64.550003051758,
        "longitude": 143.11500549316
    },
    "UST": {
        "latitude": 29.9592,
        "longitude": -81.339798
    },
    "USU": {
        "latitude": 12.121865,
        "longitude": 120.100801
    },
    "UTH": {
        "latitude": 17.386400222800000,
        "longitude": 102.788002014
    },
    "UTI": {
        "latitude": 60.8964,
        "longitude": 26.9384
    },
    "UTN": {
        "latitude": -28.39909935,
        "longitude": 21.260200500500000
    },
    "UTO": {
        "latitude": 65.99279785,
        "longitude": -153.7039948
    },
    "UTP": {
        "latitude": 12.679900169372600,
        "longitude": 101.00499725341800
    },
    "UTS": {
        "latitude": 65.43729400630000,
        "longitude": 52.20033645630000
    },
    "UTT": {
        "latitude": -31.546363184900000,
        "longitude": 28.6733551025
    },
    "UTW": {
        "latitude": -31.92020034790040,
        "longitude": 26.882200241088900
    },
    "UUA": {
        "latitude": 54.63999938964840,
        "longitude": 52.801700592041000
    },
    "UUD": {
        "latitude": 51.808614,
        "longitude": 107.439652
    },
    "UUN": {
        "latitude": 46.660301208496100,
        "longitude": 113.28500366210900
    },
    "UUS": {
        "latitude": 46.885461,
        "longitude": 142.717466
    },
    "UVE": {
        "latitude": -20.640600204467800,
        "longitude": 166.572998046875
    },
    "UVF": {
        "latitude": 13.7332,
        "longitude": -60.952599
    },
    "UYL": {
        "latitude": 12.0535,
        "longitude": 24.9562
    },
    "UZC": {
        "latitude": 43.898899,
        "longitude": 19.697701
    },
    "UZU": {
        "latitude": -29.7706,
        "longitude": -57.9789
    },
    "VAA": {
        "latitude": 63.050701,
        "longitude": 21.762199
    },
    "VAD": {
        "latitude": 30.9678001404,
        "longitude": -83.1930007935
    },
    "VAF": {
        "latitude": 44.9216,
        "longitude": 4.9699
    },
    "VAG": {
        "latitude": -21.591375,
        "longitude": -45.474116
    },
    "VAI": {
        "latitude": -2.6926,
        "longitude": 141.3028
    },
    "VAM": {
        "latitude": 3.470556,
        "longitude": 72.835833
    },
    "VAN": {
        "latitude": 38.46820068359380,
        "longitude": 43.332298278808600
    },
    "VAR": {
        "latitude": 43.232101,
        "longitude": 27.8251
    },
    "VAV": {
        "latitude": -18.58530044555660,
        "longitude": -173.96200561523400
    },
    "VAW": {
        "latitude": 70.355400085449,
        "longitude": 31.044900894165
    },
    "VBG": {
        "latitude": 34.737301,
        "longitude": -120.584
    },
    "VBS": {
        "latitude": 45.428902,
        "longitude": 10.3306
    },
    "VBY": {
        "latitude": 57.662799835205,
        "longitude": 18.346200942993
    },
    "VCA": {
        "latitude": 10.0851,
        "longitude": 105.711998
    },
    "VCE": {
        "latitude": 45.505299,
        "longitude": 12.3519
    },
    "VCP": {
        "latitude": -23.007404,
        "longitude": -47.134502
    },
    "VCS": {
        "latitude": 8.73183,
        "longitude": 106.633003
    },
    "VCT": {
        "latitude": 28.85260009765630,
        "longitude": -96.91850280761720
    },
    "VDB": {
        "latitude": 61.015598,
        "longitude": 9.28806
    },
    "VDC": {
        "latitude": -14.907885,
        "longitude": -40.914804
    },
    "VDE": {
        "latitude": 27.8148,
        "longitude": -17.8871
    },
    "VDH": {
        "latitude": 17.515,
        "longitude": 106.590556
    },
    "VDM": {
        "latitude": -40.8692,
        "longitude": -63.0004
    },
    "VDO": {
        "latitude": 21.120693,
        "longitude": 107.41539
    },
    "VDP": {
        "latitude": 9.22202777863,
        "longitude": -65.9935836792
    },
    "VDR": {
        "latitude": -31.9451999664,
        "longitude": -65.1463012695
    },
    "VDS": {
        "latitude": 70.065299987793,
        "longitude": 29.844699859619
    },
    "VDZ": {
        "latitude": 61.1339,
        "longitude": -146.248001
    },
    "VEL": {
        "latitude": 40.4408989,
        "longitude": -109.5100021
    },
    "VER": {
        "latitude": 19.1459007263,
        "longitude": -96.1873016357
    },
    "VEY": {
        "latitude": 63.42430114746090,
        "longitude": -20.278900146484400
    },
    "VFA": {
        "latitude": -18.09589958190920,
        "longitude": 25.839000701904300
    },
    "VGA": {
        "latitude": 16.530399,
        "longitude": 80.796799
    },
    "VGD": {
        "latitude": 59.282501220703100,
        "longitude": 39.944400787353500
    },
    "VGO": {
        "latitude": 42.2318,
        "longitude": -8.62677
    },
    "VGT": {
        "latitude": 36.210701,
        "longitude": -115.194
    },
    "VHC": {
        "latitude": -9.689069747924810,
        "longitude": 20.431900024414100
    },
    "VHM": {
        "latitude": 64.579102,
        "longitude": 16.833599
    },
    "VHY": {
        "latitude": 46.169700622558600,
        "longitude": 3.4037399291992200
    },
    "VIE": {
        "latitude": 48.110298,
        "longitude": 16.5697
    },
    "VIG": {
        "latitude": 8.624139,
        "longitude": -71.672668
    },
    "VII": {
        "latitude": 18.7376003265,
        "longitude": 105.67099762
    },
    "VIL": {
        "latitude": 23.7183,
        "longitude": -15.932
    },
    "VIN": {
        "latitude": 49.242531,
        "longitude": 28.613778
    },
    "VIR": {
        "latitude": -29.770599365234400,
        "longitude": 31.058399200439500
    },
    "VIS": {
        "latitude": 36.318699,
        "longitude": -119.392998
    },
    "VIT": {
        "latitude": 42.882801,
        "longitude": -2.72447
    },
    "VIX": {
        "latitude": -20.258,
        "longitude": -40.285
    },
    "VIY": {
        "latitude": 48.7741667,
        "longitude": 2.1916667
    },
    "VKG": {
        "latitude": 9.95802997234,
        "longitude": 105.132379532
    },
    "VKO": {
        "latitude": 55.5914993286,
        "longitude": 37.2615013123
    },
    "VKT": {
        "latitude": 67.48860168457030,
        "longitude": 63.993099212646500
    },
    "VLC": {
        "latitude": 39.4893,
        "longitude": -0.481625
    },
    "VLD": {
        "latitude": 30.782499313354500,
        "longitude": -83.27670288085940
    },
    "VLG": {
        "latitude": -37.2354,
        "longitude": -57.0292
    },
    "VLI": {
        "latitude": -17.699301,
        "longitude": 168.320007
    },
    "VLL": {
        "latitude": 41.7061,
        "longitude": -4.85194
    },
    "VLM": {
        "latitude": -21.255199432400000,
        "longitude": -63.4056015015
    },
    "VLN": {
        "latitude": 10.14973258972170,
        "longitude": -67.92839813232420
    },
    "VLR": {
        "latitude": -28.596399307251000,
        "longitude": -70.75599670410160
    },
    "VLV": {
        "latitude": 9.34047794342041,
        "longitude": -70.58406066894530
    },
    "VLY": {
        "latitude": 53.2481002808,
        "longitude": -4.53533983231
    },
    "VME": {
        "latitude": -33.7299003601,
        "longitude": -65.3873977661
    },
    "VMU": {
        "latitude": -7.49686002731,
        "longitude": 144.819900513
    },
    "VNE": {
        "latitude": 47.72330093383790,
        "longitude": -2.718559980392460
    },
    "VNO": {
        "latitude": 54.634102,
        "longitude": 25.285801
    },
    "VNS": {
        "latitude": 25.452129,
        "longitude": 82.861805
    },
    "VNT": {
        "latitude": 57.35779953,
        "longitude": 21.5442008972
    },
    "VNX": {
        "latitude": -22.018400192260700,
        "longitude": 35.31330108642580
    },
    "VNY": {
        "latitude": 34.209800720215,
        "longitude": -118.48999786377
    },
    "VOD": {
        "latitude": 50.216599,
        "longitude": 14.3958
    },
    "VOG": {
        "latitude": 48.782501220703100,
        "longitude": 44.34550094604490
    },
    "VOH": {
        "latitude": -13.3758,
        "longitude": 50.0028
    },
    "VOK": {
        "latitude": 43.938999176025,
        "longitude": -90.253402709961
    },
    "VOL": {
        "latitude": 39.219601,
        "longitude": 22.7943
    },
    "VOZ": {
        "latitude": 51.81420135498050,
        "longitude": 39.22959899902340
    },
    "VPE": {
        "latitude": -17.0435009003,
        "longitude": 15.683799743700000
    },
    "VPS": {
        "latitude": 30.4832,
        "longitude": -86.525398
    },
    "VPY": {
        "latitude": -19.15130043029790,
        "longitude": 33.42900085449220
    },
    "VPZ": {
        "latitude": 41.45399857,
        "longitude": -87.00710297
    },
    "VRA": {
        "latitude": 23.034401,
        "longitude": -81.435303
    },
    "VRB": {
        "latitude": 27.6556,
        "longitude": -80.417901
    },
    "VRC": {
        "latitude": 13.576399803161600,
        "longitude": 124.20600128173800
    },
    "VRE": {
        "latitude": -31.641000747680700,
        "longitude": 18.5447998046875
    },
    "VRK": {
        "latitude": 62.171101,
        "longitude": 27.868601
    },
    "VRL": {
        "latitude": 41.2743,
        "longitude": -7.72047
    },
    "VRN": {
        "latitude": 45.394955,
        "longitude": 10.887303
    },
    "VRO": {
        "latitude": 23.124001,
        "longitude": -81.301598
    },
    "VRU": {
        "latitude": -26.9824008942,
        "longitude": 24.7287998199
    },
    "VSA": {
        "latitude": 17.996999740600600,
        "longitude": -92.81739807128910
    },
    "VSE": {
        "latitude": 40.725498,
        "longitude": -7.88899
    },
    "VSG": {
        "latitude": 48.4174003601,
        "longitude": 39.3740997314
    },
    "VST": {
        "latitude": 59.58940124511720,
        "longitude": 16.63360023498540
    },
    "VTB": {
        "latitude": 55.126499176025,
        "longitude": 30.349599838257
    },
    "VTE": {
        "latitude": 17.988300323500000,
        "longitude": 102.56300354
    },
    "VTM": {
        "latitude": 31.208299636800000,
        "longitude": 35.012298584
    },
    "VTN": {
        "latitude": 42.85779953,
        "longitude": -100.5479965
    },
    "VTU": {
        "latitude": 20.987600326538100,
        "longitude": -76.93579864501950
    },
    "VTZ": {
        "latitude": 17.723506,
        "longitude": 83.227729
    },
    "VUP": {
        "latitude": 10.435,
        "longitude": -73.2495
    },
    "VVC": {
        "latitude": 4.16787,
        "longitude": -73.6138
    },
    "VVI": {
        "latitude": -17.6448,
        "longitude": -63.135399
    },
    "VVO": {
        "latitude": 43.396256,
        "longitude": 132.148155
    },
    "VVZ": {
        "latitude": 26.723499,
        "longitude": 8.62265
    },
    "VXC": {
        "latitude": -13.274,
        "longitude": 35.2663
    },
    "VXE": {
        "latitude": 16.8332,
        "longitude": -25.0553
    },
    "VXO": {
        "latitude": 56.929100036621100,
        "longitude": 14.727999687194800
    },
    "VYI": {
        "latitude": 63.75666809082,
        "longitude": 121.69333648682
    },
    "WAE": {
        "latitude": 20.504299,
        "longitude": 45.1996
    },
    "WAG": {
        "latitude": -39.96220016479490,
        "longitude": 175.02499389648400
    },
    "WAI": {
        "latitude": -14.898799896240200,
        "longitude": 47.993900299072300
    },
    "WAT": {
        "latitude": 52.187198638916000,
        "longitude": -7.0869598388671900
    },
    "WAW": {
        "latitude": 52.1656990051,
        "longitude": 20.967100143400000
    },
    "WBG": {
        "latitude": 54.459301,
        "longitude": 9.51633
    },
    "WBM": {
        "latitude": -5.635293,
        "longitude": 143.892231
    },
    "WCH": {
        "latitude": -42.93280029296880,
        "longitude": -72.6990966796875
    },
    "WDH": {
        "latitude": -22.4799,
        "longitude": 17.4709
    },
    "WDS": {
        "latitude": 32.592889,
        "longitude": 110.906296
    },
    "WEF": {
        "latitude": 36.646702,
        "longitude": 119.119003
    },
    "WEH": {
        "latitude": 37.187099,
        "longitude": 122.228996
    },
    "WEI": {
        "latitude": -12.6786003113,
        "longitude": 141.925003052
    },
    "WFI": {
        "latitude": -21.441601,
        "longitude": 47.111698
    },
    "WGA": {
        "latitude": -35.163484,
        "longitude": 147.46832
    },
    "WGE": {
        "latitude": -30.032800674438500,
        "longitude": 148.12600708007800
    },
    "WGN": {
        "latitude": 26.806123,
        "longitude": 110.641042
    },
    "WGT": {
        "latitude": -36.41579818725590,
        "longitude": 146.3070068359380
    },
    "WHB": {
        "latitude": -22.428395,
        "longitude": 116.887879
    },
    "WHK": {
        "latitude": -37.92060089111330,
        "longitude": 176.91400146484400
    },
    "WIC": {
        "latitude": 58.458900451660200,
        "longitude": -3.09306001663208
    },
    "WIE": {
        "latitude": 50.049800872802700,
        "longitude": 8.325400352478030
    },
    "WIL": {
        "latitude": -1.321720004081730,
        "longitude": 36.81480026245120
    },
    "WIN": {
        "latitude": -22.36359977722170,
        "longitude": 143.08599853515600
    },
    "WIR": {
        "latitude": -39.006900787353500,
        "longitude": 177.40699768066400
    },
    "WJF": {
        "latitude": 34.7411,
        "longitude": -118.219002
    },
    "WJR": {
        "latitude": 1.73324,
        "longitude": 40.091599
    },
    "WJU": {
        "latitude": 37.437113,
        "longitude": 127.960051
    },
    "WKA": {
        "latitude": -44.722954,
        "longitude": 169.248419
    },
    "WKB": {
        "latitude": -36.32109832763670,
        "longitude": 142.41900634765600
    },
    "WKF": {
        "latitude": -25.829999923700000,
        "longitude": 28.222499847400000
    },
    "WKJ": {
        "latitude": 45.4042015076,
        "longitude": 141.800994873
    },
    "WKK": {
        "latitude": 59.2826004028,
        "longitude": -158.617996216
    },
    "WLG": {
        "latitude": -41.3272018433,
        "longitude": 174.804992676
    },
    "WLS": {
        "latitude": -13.2383003235,
        "longitude": -176.199005127
    },
    "WMC": {
        "latitude": 40.8965988159,
        "longitude": -117.805999756
    },
    "WME": {
        "latitude": -27.28733,
        "longitude": 120.554937
    },
    "WMH": {
        "latitude": 36.3689002991,
        "longitude": -92.47049713130000
    },
    "WMI": {
        "latitude": 52.451099,
        "longitude": 20.6518
    },
    "WMN": {
        "latitude": -15.437742,
        "longitude": 49.689081
    },
    "WMR": {
        "latitude": -16.16390037536620,
        "longitude": 49.773799896240200
    },
    "WMT": {
        "latitude": 27.81638,
        "longitude": 106.33268
    },
    "WMX": {
        "latitude": -4.097324,
        "longitude": 138.952417
    },
    "WNI": {
        "latitude": -5.293996,
        "longitude": 123.634
    },
    "WNP": {
        "latitude": 13.58489990234380,
        "longitude": 123.2699966430660
    },
    "WNR": {
        "latitude": -25.41309928894040,
        "longitude": 142.66700744628900
    },
    "WNS": {
        "latitude": 26.2194,
        "longitude": 68.390099
    },
    "WNZ": {
        "latitude": 27.912201,
        "longitude": 120.851997
    },
    "WOE": {
        "latitude": 51.4491,
        "longitude": 4.34203
    },
    "WOL": {
        "latitude": -34.5611,
        "longitude": 150.789001
    },
    "WOS": {
        "latitude": 39.166801,
        "longitude": 127.486
    },
    "WPC": {
        "latitude": 49.520599365200000,
        "longitude": -113.997001648
    },
    "WPR": {
        "latitude": -53.2537,
        "longitude": -70.319199
    },
    "WPU": {
        "latitude": -54.931099,
        "longitude": -67.626297
    },
    "WRB": {
        "latitude": 32.640099,
        "longitude": -83.591904
    },
    "WRE": {
        "latitude": -35.769253,
        "longitude": 174.363713
    },
    "WRG": {
        "latitude": 56.48429871,
        "longitude": -132.3699951
    },
    "WRI": {
        "latitude": 40.0155983,
        "longitude": -74.59169769
    },
    "WRL": {
        "latitude": 43.965698,
        "longitude": -107.950996
    },
    "WRO": {
        "latitude": 51.102699,
        "longitude": 16.885799
    },
    "WRT": {
        "latitude": 53.745098,
        "longitude": -2.88306
    },
    "WSZ": {
        "latitude": -41.737111,
        "longitude": 171.579033
    },
    "WTB": {
        "latitude": -27.558332,
        "longitude": 151.793335
    },
    "WTK": {
        "latitude": 67.56610107421880,
        "longitude": -162.97500610351600
    },
    "WTN": {
        "latitude": 53.1661987305,
        "longitude": -0.523810982704
    },
    "WUH": {
        "latitude": 30.774798,
        "longitude": 114.213723
    },
    "WUN": {
        "latitude": -26.629199981689500,
        "longitude": 120.22100067138700
    },
    "WUS": {
        "latitude": 27.7019,
        "longitude": 118.000999
    },
    "WUU": {
        "latitude": 7.72583,
        "longitude": 27.975
    },
    "WUX": {
        "latitude": 31.494400024400000,
        "longitude": 120.429000854
    },
    "WUZ": {
        "latitude": 23.40316,
        "longitude": 111.09331
    },
    "WVB": {
        "latitude": -22.9799,
        "longitude": 14.6453
    },
    "WVK": {
        "latitude": -22.119699,
        "longitude": 48.021702
    },
    "WWA": {
        "latitude": 61.5717010498,
        "longitude": -149.539993286
    },
    "WWD": {
        "latitude": 39.008499145500000,
        "longitude": -74.9083023071
    },
    "WWK": {
        "latitude": -3.58383011818,
        "longitude": 143.669006348
    },
    "WWR": {
        "latitude": 36.438,
        "longitude": -99.5226667
    },
    "WWY": {
        "latitude": -33.9371986389,
        "longitude": 147.190994263
    },
    "WYA": {
        "latitude": -33.05889892578130,
        "longitude": 137.51400756835900
    },
    "WYE": {
        "latitude": 8.610469818115230,
        "longitude": -11.04539966583250
    },
    "WYS": {
        "latitude": 44.68840027,
        "longitude": -111.1179962
    },
    "XAI": {
        "latitude": 32.540819,
        "longitude": 114.079141
    },
    "XAP": {
        "latitude": -27.134199,
        "longitude": -52.656601
    },
    "XBJ": {
        "latitude": 32.896525,
        "longitude": 59.281258
    },
    "XCH": {
        "latitude": -10.449382,
        "longitude": 105.690931
    },
    "XCR": {
        "latitude": 48.773333,
        "longitude": 4.206111
    },
    "XEN": {
        "latitude": 40.580328,
        "longitude": 120.700374
    },
    "XFN": {
        "latitude": 32.152222,
        "longitude": 112.291666
    },
    "XFW": {
        "latitude": 53.5352783203125,
        "longitude": 9.835556030273440
    },
    "XGN": {
        "latitude": -16.755399703979500,
        "longitude": 14.965299606323200
    },
    "XGR": {
        "latitude": 58.711399,
        "longitude": -65.992798
    },
    "XIC": {
        "latitude": 27.9891,
        "longitude": 102.183998
    },
    "XIJ": {
        "latitude": 28.9347991943,
        "longitude": 47.791900634800000
    },
    "XIL": {
        "latitude": 43.91559982299810,
        "longitude": 115.96399688720700
    },
    "XIY": {
        "latitude": 34.447102,
        "longitude": 108.751999
    },
    "XJD": {
        "latitude": 25.1173000336,
        "longitude": 51.3149986267
    },
    "XJM": {
        "latitude": 33.05009841918950,
        "longitude": 73.63839721679690
    },
    "XKS": {
        "latitude": 53.52470016479490,
        "longitude": -88.6427993774414
    },
    "XLB": {
        "latitude": 58.6175003052,
        "longitude": -101.46900177
    },
    "XLS": {
        "latitude": 16.049814,
        "longitude": -16.461039
    },
    "XMH": {
        "latitude": -14.436800003051800,
        "longitude": -146.07000732421900
    },
    "XMN": {
        "latitude": 24.54400062561040,
        "longitude": 118.12799835205100
    },
    "XMS": {
        "latitude": -2.2991700172424300,
        "longitude": -78.12079620361330
    },
    "XNA": {
        "latitude": 36.281898,
        "longitude": -94.306801
    },
    "XNH": {
        "latitude": 30.935801,
        "longitude": 46.090099
    },
    "XNN": {
        "latitude": 36.528295,
        "longitude": 102.040157
    },
    "XPK": {
        "latitude": 55.7491989136,
        "longitude": -101.26599884
    },
    "XPL": {
        "latitude": 14.3824,
        "longitude": -87.621201
    },
    "XPP": {
        "latitude": 52.9965258788,
        "longitude": -97.2741937637
    },
    "XQP": {
        "latitude": 9.443160057067870,
        "longitude": -84.12979888916020
    },
    "XRH": {
        "latitude": -33.604652,
        "longitude": 150.783051
    },
    "XRR": {
        "latitude": 61.9706001282,
        "longitude": -132.42300415
    },
    "XRY": {
        "latitude": 36.744598,
        "longitude": -6.06011
    },
    "XSB": {
        "latitude": 24.283611,
        "longitude": 52.580278
    },
    "XSC": {
        "latitude": 21.515699,
        "longitude": -71.528503
    },
    "XSI": {
        "latitude": 56.7928009033,
        "longitude": -98.9072036743
    },
    "XSP": {
        "latitude": 1.41555,
        "longitude": 103.86673
    },
    "XTG": {
        "latitude": -27.986368,
        "longitude": 143.812065
    },
    "XTL": {
        "latitude": 58.7061,
        "longitude": -98.512199
    },
    "XUZ": {
        "latitude": 34.059056,
        "longitude": 117.555278
    },
    "XWA": {
        "latitude": 48.258387,
        "longitude": -103.748797
    },
    "XXN": {
        "latitude": 24.709800720214800,
        "longitude": 46.72520065307620
    },
    "YAA": {
        "latitude": 52.451501,
        "longitude": -125.303776
    },
    "YAC": {
        "latitude": 51.72719955444340,
        "longitude": -91.82440185546880
    },
    "YAG": {
        "latitude": 48.655749,
        "longitude": -93.44349
    },
    "YAH": {
        "latitude": 53.754699707,
        "longitude": -73.6753005981
    },
    "YAI": {
        "latitude": -36.58250045776370,
        "longitude": -72.03140258789060
    },
    "YAK": {
        "latitude": 59.508717,
        "longitude": -139.660435
    },
    "YAL": {
        "latitude": 50.582199,
        "longitude": -126.916
    },
    "YAM": {
        "latitude": 46.485001,
        "longitude": -84.509399
    },
    "YAO": {
        "latitude": 3.8360400199890100,
        "longitude": 11.523500442504900
    },
    "YAP": {
        "latitude": 9.49891,
        "longitude": 138.082993
    },
    "YAT": {
        "latitude": 52.9275016784668,
        "longitude": -82.43190002441410
    },
    "YAY": {
        "latitude": 51.391909,
        "longitude": -56.08321
    },
    "YAZ": {
        "latitude": 49.079833,
        "longitude": -125.775583
    },
    "YBB": {
        "latitude": 68.534401,
        "longitude": -89.808098
    },
    "YBC": {
        "latitude": 49.1325,
        "longitude": -68.204399
    },
    "YBE": {
        "latitude": 59.5614013671875,
        "longitude": -108.48100280761700
    },
    "YBG": {
        "latitude": 48.33060073852540,
        "longitude": -70.99639892578130
    },
    "YBK": {
        "latitude": 64.29889678960000,
        "longitude": -96.077796936
    },
    "YBL": {
        "latitude": 49.950802,
        "longitude": -125.271004
    },
    "YBP": {
        "latitude": 28.858431,
        "longitude": 104.526157
    },
    "YBR": {
        "latitude": 49.91,
        "longitude": -99.951897
    },
    "YBT": {
        "latitude": 57.8894,
        "longitude": -101.679001
    },
    "YBV": {
        "latitude": 52.358898,
        "longitude": -97.018303
    },
    "YBX": {
        "latitude": 51.4436,
        "longitude": -57.185299
    },
    "YBY": {
        "latitude": 54.304199,
        "longitude": -110.744003
    },
    "YCB": {
        "latitude": 69.1081008911,
        "longitude": -105.138000488
    },
    "YCC": {
        "latitude": 45.092637,
        "longitude": -74.567724
    },
    "YCD": {
        "latitude": 49.05497,
        "longitude": -123.869863
    },
    "YCE": {
        "latitude": 43.285599,
        "longitude": -81.508301
    },
    "YCG": {
        "latitude": 49.2963981628,
        "longitude": -117.632003784
    },
    "YCH": {
        "latitude": 47.007801,
        "longitude": -65.449203
    },
    "YCL": {
        "latitude": 47.990799,
        "longitude": -66.330299
    },
    "YCM": {
        "latitude": 43.19169998168950,
        "longitude": -79.17169952392580
    },
    "YCN": {
        "latitude": 49.10559844970700,
        "longitude": -81.01360321044920
    },
    "YCO": {
        "latitude": 67.816704,
        "longitude": -115.143997
    },
    "YCQ": {
        "latitude": 55.687198638916000,
        "longitude": -121.62699890136700
    },
    "YCR": {
        "latitude": 54.610599517822300,
        "longitude": -97.76080322265630
    },
    "YCS": {
        "latitude": 63.346900939900000,
        "longitude": -90.73110198970000
    },
    "YCY": {
        "latitude": 70.4860992432,
        "longitude": -68.5167007446
    },
    "YDA": {
        "latitude": 64.04309844970700,
        "longitude": -139.1280059814450
    },
    "YDB": {
        "latitude": 61.371101,
        "longitude": -139.041
    },
    "YDF": {
        "latitude": 49.21080017089840,
        "longitude": -57.39139938354490
    },
    "YDG": {
        "latitude": 44.5458450365,
        "longitude": -65.7854247093
    },
    "YDN": {
        "latitude": 51.100799560546900,
        "longitude": -100.052001953125
    },
    "YDO": {
        "latitude": 48.778499603271,
        "longitude": -72.375
    },
    "YDP": {
        "latitude": 56.550778,
        "longitude": -61.682224
    },
    "YDQ": {
        "latitude": 55.7422981262207,
        "longitude": -120.18299865722700
    },
    "YDT": {
        "latitude": 49.0742,
        "longitude": -123.012001
    },
    "YEC": {
        "latitude": 36.630373,
        "longitude": 128.34971
    },
    "YEG": {
        "latitude": 53.309700012200000,
        "longitude": -113.580001831
    },
    "YEI": {
        "latitude": 40.2551994324,
        "longitude": 29.5625991821
    },
    "YEK": {
        "latitude": 61.0942001343,
        "longitude": -94.07080078120000
    },
    "YEL": {
        "latitude": 46.351398468,
        "longitude": -82.5614013672
    },
    "YEM": {
        "latitude": 45.842435,
        "longitude": -81.857595
    },
    "YEN": {
        "latitude": 49.2103004456,
        "longitude": -102.966003418
    },
    "YEO": {
        "latitude": 51.0093994140625,
        "longitude": -2.638819932937620
    },
    "YER": {
        "latitude": 56.01890182495120,
        "longitude": -87.67610168457030
    },
    "YES": {
        "latitude": 30.700500488281,
        "longitude": 51.545101165771
    },
    "YET": {
        "latitude": 53.578899383500000,
        "longitude": -116.464996338
    },
    "YEV": {
        "latitude": 68.30419921880000,
        "longitude": -133.483001709
    },
    "YEY": {
        "latitude": 48.563903,
        "longitude": -78.249702
    },
    "YFA": {
        "latitude": 52.20140075683590,
        "longitude": -81.6968994140625
    },
    "YFB": {
        "latitude": 63.756402,
        "longitude": -68.555801
    },
    "YFC": {
        "latitude": 45.868900299072300,
        "longitude": -66.53720092773440
    },
    "YFE": {
        "latitude": 48.74610137939450,
        "longitude": -69.09719848632810
    },
    "YFH": {
        "latitude": 51.5619010925293,
        "longitude": -87.90779876708980
    },
    "YFO": {
        "latitude": 54.6781005859375,
        "longitude": -101.68199920654300
    },
    "YFR": {
        "latitude": 61.1808013916,
        "longitude": -113.690002441
    },
    "YFS": {
        "latitude": 61.76020050048830,
        "longitude": -121.23699951171900
    },
    "YGB": {
        "latitude": 49.69419860839840,
        "longitude": -124.51799774169900
    },
    "YGH": {
        "latitude": 66.24079895019530,
        "longitude": -128.6510009765630
    },
    "YGJ": {
        "latitude": 35.492199,
        "longitude": 133.235992
    },
    "YGK": {
        "latitude": 44.22529983520510,
        "longitude": -76.5969009399414
    },
    "YGL": {
        "latitude": 53.625301361084000,
        "longitude": -77.7042007446289
    },
    "YGM": {
        "latitude": 50.62810134887700,
        "longitude": -97.04329681396480
    },
    "YGO": {
        "latitude": 54.55889892578130,
        "longitude": -94.49140167236330
    },
    "YGP": {
        "latitude": 48.7752990723,
        "longitude": -64.4785995483
    },
    "YGQ": {
        "latitude": 49.77830123901370,
        "longitude": -86.93939971923830
    },
    "YGR": {
        "latitude": 47.425242,
        "longitude": -61.778612
    },
    "YGT": {
        "latitude": 69.3647003174,
        "longitude": -81.8161010742
    },
    "YGV": {
        "latitude": 50.281898,
        "longitude": -63.611401
    },
    "YGW": {
        "latitude": 55.281898498535200,
        "longitude": -77.76529693603520
    },
    "YGX": {
        "latitude": 56.35749816894530,
        "longitude": -94.71060180664060
    },
    "YGZ": {
        "latitude": 76.4261016846,
        "longitude": -82.90920257570000
    },
    "YHD": {
        "latitude": 49.831699,
        "longitude": -92.744202
    },
    "YHE": {
        "latitude": 49.368865,
        "longitude": -121.49495
    },
    "YHF": {
        "latitude": 49.71419906616210,
        "longitude": -83.68609619140630
    },
    "YHI": {
        "latitude": 70.76280212402340,
        "longitude": -117.80599975585900
    },
    "YHK": {
        "latitude": 68.635597229,
        "longitude": -95.84970092770000
    },
    "YHM": {
        "latitude": 43.173599243200000,
        "longitude": -79.93499755860000
    },
    "YHN": {
        "latitude": 49.19309997558590,
        "longitude": -84.75890350341800
    },
    "YHO": {
        "latitude": 55.448757,
        "longitude": -60.228124
    },
    "YHR": {
        "latitude": 50.46889877319340,
        "longitude": -59.63669967651370
    },
    "YHT": {
        "latitude": 60.7892,
        "longitude": -137.546005
    },
    "YHU": {
        "latitude": 45.5175018311,
        "longitude": -73.4169006348
    },
    "YHY": {
        "latitude": 60.8396987915,
        "longitude": -115.782997131
    },
    "YHZ": {
        "latitude": 44.8807983398,
        "longitude": -63.5085983276
    },
    "YIA": {
        "latitude": -7.905338,
        "longitude": 110.057264
    },
    "YIB": {
        "latitude": 48.7738990784,
        "longitude": -91.6386032104
    },
    "YIC": {
        "latitude": 27.8025,
        "longitude": 114.3062
    },
    "YIE": {
        "latitude": 47.3106,
        "longitude": 119.9117
    },
    "YIF": {
        "latitude": 51.2117004395,
        "longitude": -58.6582984924
    },
    "YIH": {
        "latitude": 30.554132,
        "longitude": 111.482563
    },
    "YIK": {
        "latitude": 62.417301177978500,
        "longitude": -77.92530059814450
    },
    "YIO": {
        "latitude": 72.6832962036,
        "longitude": -77.9666976929
    },
    "YIP": {
        "latitude": 42.23789978,
        "longitude": -83.53040314
    },
    "YIV": {
        "latitude": 53.857200622558600,
        "longitude": -94.65360260009770
    },
    "YIW": {
        "latitude": 29.3446998596,
        "longitude": 120.031997681
    },
    "YJF": {
        "latitude": 60.235801696800000,
        "longitude": -123.46900177
    },
    "YJN": {
        "latitude": 45.29439926147460,
        "longitude": -73.28109741210940
    },
    "YJT": {
        "latitude": 48.5442008972168,
        "longitude": -58.54999923706060
    },
    "YKA": {
        "latitude": 50.7022018433,
        "longitude": -120.444000244
    },
    "YKF": {
        "latitude": 43.460800170900000,
        "longitude": -80.3786010742
    },
    "YKG": {
        "latitude": 60.027198791503900,
        "longitude": -69.99919891357420
    },
    "YKH": {
        "latitude": 40.542524,
        "longitude": 122.3586
    },
    "YKJ": {
        "latitude": 57.256099700927700,
        "longitude": -105.61799621582000
    },
    "YKL": {
        "latitude": 54.805301666259800,
        "longitude": -66.8052978515625
    },
    "YKM": {
        "latitude": 46.56819916,
        "longitude": -120.5439987
    },
    "YKN": {
        "latitude": 42.916698455811,
        "longitude": -97.385902404785
    },
    "YKO": {
        "latitude": 37.5497,
        "longitude": 44.2381
    },
    "YKQ": {
        "latitude": 51.47330093383790,
        "longitude": -78.75830078125
    },
    "YKS": {
        "latitude": 62.093299865722700,
        "longitude": 129.77099609375
    },
    "YKX": {
        "latitude": 48.21030044555660,
        "longitude": -79.98139953613280
    },
    "YKY": {
        "latitude": 51.5175018311,
        "longitude": -109.180999756
    },
    "YKZ": {
        "latitude": 43.86220169067380,
        "longitude": -79.37000274658200
    },
    "YLC": {
        "latitude": 62.848253,
        "longitude": -69.877853
    },
    "YLD": {
        "latitude": 47.81999969482420,
        "longitude": -83.3467025756836
    },
    "YLH": {
        "latitude": 52.19559860229490,
        "longitude": -87.93419647216800
    },
    "YLI": {
        "latitude": 64.054722,
        "longitude": 24.725278
    },
    "YLJ": {
        "latitude": 54.125301361084000,
        "longitude": -108.52300262451200
    },
    "YLL": {
        "latitude": 53.309200286865200,
        "longitude": -110.072998046875
    },
    "YLR": {
        "latitude": 56.513301849365200,
        "longitude": -99.98529815673830
    },
    "YLT": {
        "latitude": 82.517799,
        "longitude": -62.280602
    },
    "YLW": {
        "latitude": 49.9561,
        "longitude": -119.377998
    },
    "YLX": {
        "latitude": 22.438056,
        "longitude": 110.120833
    },
    "YMA": {
        "latitude": 63.61640167236330,
        "longitude": -135.8679962158200
    },
    "YME": {
        "latitude": 48.85689926147460,
        "longitude": -67.45330047607420
    },
    "YMG": {
        "latitude": 49.083900451660200,
        "longitude": -85.86060333251950
    },
    "YMH": {
        "latitude": 52.302837,
        "longitude": -55.847626
    },
    "YMJ": {
        "latitude": 50.330299377441400,
        "longitude": -105.55899810791000
    },
    "YML": {
        "latitude": 47.59749984741210,
        "longitude": -70.2238998413086
    },
    "YMM": {
        "latitude": 56.653301239,
        "longitude": -111.222000122
    },
    "YMN": {
        "latitude": 55.077335,
        "longitude": -59.187942
    },
    "YMO": {
        "latitude": 51.291099548339800,
        "longitude": -80.60780334472660
    },
    "YMS": {
        "latitude": -5.893770217895510,
        "longitude": -76.11820220947270
    },
    "YMT": {
        "latitude": 49.77190017700200,
        "longitude": -74.5280990600586
    },
    "YMX": {
        "latitude": 45.679501,
        "longitude": -74.038696
    },
    "YNA": {
        "latitude": 50.189998626709000,
        "longitude": -61.78919982910160
    },
    "YNB": {
        "latitude": 24.144199,
        "longitude": 38.0634
    },
    "YNC": {
        "latitude": 53.01060104370120,
        "longitude": -78.83110046386720
    },
    "YND": {
        "latitude": 45.521702,
        "longitude": -75.563599
    },
    "YNE": {
        "latitude": 53.95830154418950,
        "longitude": -97.84420013427730
    },
    "YNG": {
        "latitude": 41.26070023,
        "longitude": -80.67910004
    },
    "YNJ": {
        "latitude": 42.8828010559,
        "longitude": 129.451004028
    },
    "YNL": {
        "latitude": 58.27669906616210,
        "longitude": -104.08200073242200
    },
    "YNM": {
        "latitude": 49.76169967651370,
        "longitude": -77.80280303955080
    },
    "YNS": {
        "latitude": 51.69110107421880,
        "longitude": -76.1355972290039
    },
    "YNT": {
        "latitude": 37.659724,
        "longitude": 120.978124
    },
    "YNY": {
        "latitude": 38.061298,
        "longitude": 128.669006
    },
    "YNZ": {
        "latitude": 33.425833,
        "longitude": 120.203056
    },
    "YOA": {
        "latitude": 64.6988983154,
        "longitude": -110.614997864
    },
    "YOC": {
        "latitude": 67.57060241699220,
        "longitude": -139.83900451660200
    },
    "YOD": {
        "latitude": 54.404998779296900,
        "longitude": -110.27899932861300
    },
    "YOH": {
        "latitude": 54.93330001831060,
        "longitude": -95.27890014648440
    },
    "YOJ": {
        "latitude": 58.62139892578130,
        "longitude": -117.16500091552700
    },
    "YOL": {
        "latitude": 9.257550239562990,
        "longitude": 12.430399894714400
    },
    "YOO": {
        "latitude": 43.922798,
        "longitude": -78.894997
    },
    "YOP": {
        "latitude": 58.49140167236330,
        "longitude": -119.40799713134800
    },
    "YOS": {
        "latitude": 44.5903015137,
        "longitude": -80.8375015259
    },
    "YOW": {
        "latitude": 45.322498,
        "longitude": -75.669197
    },
    "YPA": {
        "latitude": 53.214199066200000,
        "longitude": -105.672996521
    },
    "YPC": {
        "latitude": 69.3608381154,
        "longitude": -124.075469971
    },
    "YPE": {
        "latitude": 56.226898,
        "longitude": -117.446999
    },
    "YPG": {
        "latitude": 49.903099,
        "longitude": -98.273817
    },
    "YPH": {
        "latitude": 58.471900939941400,
        "longitude": -78.07689666748050
    },
    "YPJ": {
        "latitude": 59.29669952392580,
        "longitude": -69.59970092773440
    },
    "YPL": {
        "latitude": 51.4463996887207,
        "longitude": -90.21420288085940
    },
    "YPM": {
        "latitude": 51.819698333740200,
        "longitude": -93.97329711914060
    },
    "YPN": {
        "latitude": 49.83639907836910,
        "longitude": -64.2885971069336
    },
    "YPO": {
        "latitude": 54.98809814453130,
        "longitude": -85.44329833984380
    },
    "YPQ": {
        "latitude": 44.23,
        "longitude": -78.363297
    },
    "YPR": {
        "latitude": 54.286098480200000,
        "longitude": -130.445007324
    },
    "YPS": {
        "latitude": 45.6567001343,
        "longitude": -61.3680992126
    },
    "YPW": {
        "latitude": 49.83420181274410,
        "longitude": -124.5
    },
    "YPX": {
        "latitude": 60.05059814453130,
        "longitude": -77.28690338134770
    },
    "YPY": {
        "latitude": 58.7672004699707,
        "longitude": -111.11699676513700
    },
    "YPZ": {
        "latitude": 54.3764,
        "longitude": -125.950996
    },
    "YQA": {
        "latitude": 44.974700927734400,
        "longitude": -79.30329895019530
    },
    "YQB": {
        "latitude": 46.7911,
        "longitude": -71.393303
    },
    "YQC": {
        "latitude": 61.0463981628418,
        "longitude": -69.6177978515625
    },
    "YQD": {
        "latitude": 53.97140121459960,
        "longitude": -101.09100341796900
    },
    "YQF": {
        "latitude": 52.182201,
        "longitude": -113.893997
    },
    "YQG": {
        "latitude": 42.27560043334960,
        "longitude": -82.95559692382810
    },
    "YQH": {
        "latitude": 60.11640167236330,
        "longitude": -128.82200622558600
    },
    "YQI": {
        "latitude": 43.826900482177700,
        "longitude": -66.08809661865230
    },
    "YQK": {
        "latitude": 49.788299560546900,
        "longitude": -94.36309814453130
    },
    "YQL": {
        "latitude": 49.6302986145,
        "longitude": -112.800003052
    },
    "YQM": {
        "latitude": 46.112202,
        "longitude": -64.678596
    },
    "YQN": {
        "latitude": 50.18280029296880,
        "longitude": -86.69640350341800
    },
    "YQQ": {
        "latitude": 49.7108,
        "longitude": -124.887001
    },
    "YQR": {
        "latitude": 50.43190002441410,
        "longitude": -104.66600036621100
    },
    "YQS": {
        "latitude": 42.77000045776370,
        "longitude": -81.11080169677730
    },
    "YQT": {
        "latitude": 48.37189865112310,
        "longitude": -89.32389831542970
    },
    "YQU": {
        "latitude": 55.1796989441,
        "longitude": -118.885002136
    },
    "YQV": {
        "latitude": 51.26470184326170,
        "longitude": -102.46199798584000
    },
    "YQW": {
        "latitude": 52.769409,
        "longitude": -108.243742
    },
    "YQX": {
        "latitude": 48.936258,
        "longitude": -54.567719
    },
    "YQY": {
        "latitude": 46.1614,
        "longitude": -60.047798
    },
    "YQZ": {
        "latitude": 53.026100158691400,
        "longitude": -122.51000213623000
    },
    "YRA": {
        "latitude": 64.11609649658200,
        "longitude": -117.30999755859400
    },
    "YRB": {
        "latitude": 74.7169036865,
        "longitude": -94.9693984985
    },
    "YRF": {
        "latitude": 53.682501,
        "longitude": -57.042303
    },
    "YRI": {
        "latitude": 47.764400482177700,
        "longitude": -69.58470153808590
    },
    "YRJ": {
        "latitude": 48.52000045776370,
        "longitude": -72.2656021118164
    },
    "YRL": {
        "latitude": 51.066898345947300,
        "longitude": -93.79309844970700
    },
    "YRO": {
        "latitude": 45.4603004456,
        "longitude": -75.64610290530000
    },
    "YRQ": {
        "latitude": 46.35279846191410,
        "longitude": -72.67939758300780
    },
    "YRS": {
        "latitude": 54.167198181152300,
        "longitude": -93.55719757080080
    },
    "YRT": {
        "latitude": 62.8114013672,
        "longitude": -92.1157989502
    },
    "YRV": {
        "latitude": 50.962245,
        "longitude": -118.184258
    },
    "YSB": {
        "latitude": 46.625,
        "longitude": -80.79889678955080
    },
    "YSC": {
        "latitude": 45.438599,
        "longitude": -71.691399
    },
    "YSF": {
        "latitude": 59.250301361084000,
        "longitude": -105.84100341796900
    },
    "YSG": {
        "latitude": 62.418303,
        "longitude": -110.681998
    },
    "YSH": {
        "latitude": 44.945801,
        "longitude": -75.940598
    },
    "YSJ": {
        "latitude": 45.31610107421880,
        "longitude": -65.89029693603520
    },
    "YSK": {
        "latitude": 56.5377998352,
        "longitude": -79.2466964722
    },
    "YSL": {
        "latitude": 47.157097,
        "longitude": -67.836242
    },
    "YSM": {
        "latitude": 60.020302,
        "longitude": -111.961998
    },
    "YSN": {
        "latitude": 50.682802,
        "longitude": -119.228996
    },
    "YSP": {
        "latitude": 48.75529861450200,
        "longitude": -86.34439849853520
    },
    "YSQ": {
        "latitude": 44.938114,
        "longitude": 124.550178
    },
    "YST": {
        "latitude": 53.84560012817380,
        "longitude": -94.85189819335940
    },
    "YSU": {
        "latitude": 46.440601,
        "longitude": -63.833599
    },
    "YSY": {
        "latitude": 71.9938964844,
        "longitude": -125.242996216
    },
    "YTA": {
        "latitude": 45.86439895629880,
        "longitude": -77.25170135498050
    },
    "YTD": {
        "latitude": 55.31890106201170,
        "longitude": -97.70780181884770
    },
    "YTE": {
        "latitude": 64.230003,
        "longitude": -76.526703
    },
    "YTF": {
        "latitude": 48.50889968870000,
        "longitude": -71.64189910890000
    },
    "YTH": {
        "latitude": 55.80110168457030,
        "longitude": -97.86419677734380
    },
    "YTL": {
        "latitude": 53.81779861450200,
        "longitude": -89.89689636230470
    },
    "YTM": {
        "latitude": 46.409401,
        "longitude": -74.779999
    },
    "YTQ": {
        "latitude": 58.66780090332030,
        "longitude": -69.95580291748050
    },
    "YTR": {
        "latitude": 44.118900299072300,
        "longitude": -77.5280990600586
    },
    "YTS": {
        "latitude": 48.569698333700000,
        "longitude": -81.376701355
    },
    "YTY": {
        "latitude": 32.5634,
        "longitude": 119.7198
    },
    "YTZ": {
        "latitude": 43.627499,
        "longitude": -79.396202
    },
    "YUA": {
        "latitude": 25.737499,
        "longitude": 101.882004
    },
    "YUB": {
        "latitude": 69.433296,
        "longitude": -133.026001
    },
    "YUD": {
        "latitude": 56.53609848022460,
        "longitude": -76.51830291748050
    },
    "YUL": {
        "latitude": 45.4706001282,
        "longitude": -73.7407989502
    },
    "YUM": {
        "latitude": 32.656601,
        "longitude": -114.606003
    },
    "YUS": {
        "latitude": 32.836389,
        "longitude": 97.036389
    },
    "YUT": {
        "latitude": 66.5214,
        "longitude": -86.224701
    },
    "YUX": {
        "latitude": 68.7761,
        "longitude": -81.2425
    },
    "YUY": {
        "latitude": 48.20610046386720,
        "longitude": -78.83560180664060
    },
    "YVB": {
        "latitude": 48.071098,
        "longitude": -65.460297
    },
    "YVC": {
        "latitude": 55.151401519800000,
        "longitude": -105.262001038
    },
    "YVE": {
        "latitude": 50.24810028076170,
        "longitude": -119.33100128173800
    },
    "YVM": {
        "latitude": 67.546232,
        "longitude": -64.031754
    },
    "YVO": {
        "latitude": 48.0532989502,
        "longitude": -77.7827987671
    },
    "YVP": {
        "latitude": 58.096099853515600,
        "longitude": -68.4269027709961
    },
    "YVQ": {
        "latitude": 65.28160095214840,
        "longitude": -126.7979965209960
    },
    "YVR": {
        "latitude": 49.193901062,
        "longitude": -123.183998108
    },
    "YVV": {
        "latitude": 44.7458,
        "longitude": -81.107201
    },
    "YVZ": {
        "latitude": 52.655799865722700,
        "longitude": -94.0614013671875
    },
    "YWA": {
        "latitude": 45.95220184326170,
        "longitude": -77.31919860839840
    },
    "YWB": {
        "latitude": 61.5886001587,
        "longitude": -71.929397583
    },
    "YWG": {
        "latitude": 49.909999847400000,
        "longitude": -97.2398986816
    },
    "YWJ": {
        "latitude": 65.21109771728520,
        "longitude": -123.43599700927700
    },
    "YWK": {
        "latitude": 52.92190170288090,
        "longitude": -66.8644027709961
    },
    "YWL": {
        "latitude": 52.1831016541,
        "longitude": -122.054000854
    },
    "YWP": {
        "latitude": 52.9593933975,
        "longitude": -87.3748683929
    },
    "YWY": {
        "latitude": 63.20940017700200,
        "longitude": -123.43699645996100
    },
    "YXC": {
        "latitude": 49.610801696777,
        "longitude": -115.78199768066
    },
    "YXE": {
        "latitude": 52.170799255371100,
        "longitude": -106.69999694824200
    },
    "YXH": {
        "latitude": 50.018902,
        "longitude": -110.721001
    },
    "YXJ": {
        "latitude": 56.238098,
        "longitude": -120.739998
    },
    "YXK": {
        "latitude": 48.47809982299810,
        "longitude": -68.49690246582030
    },
    "YXL": {
        "latitude": 50.11389923095700,
        "longitude": -91.9052963256836
    },
    "YXN": {
        "latitude": 62.24000167850000,
        "longitude": -92.59809875490000
    },
    "YXP": {
        "latitude": 66.1449966431,
        "longitude": -65.71360015870000
    },
    "YXQ": {
        "latitude": 62.410301208496100,
        "longitude": -140.86700439453100
    },
    "YXR": {
        "latitude": 47.697400654600000,
        "longitude": -79.8473453522
    },
    "YXS": {
        "latitude": 53.8894004822,
        "longitude": -122.679000854
    },
    "YXT": {
        "latitude": 54.468498,
        "longitude": -128.576009
    },
    "YXU": {
        "latitude": 43.035599,
        "longitude": -81.1539
    },
    "YXX": {
        "latitude": 49.025299,
        "longitude": -122.361
    },
    "YXY": {
        "latitude": 60.709599,
        "longitude": -135.067001
    },
    "YXZ": {
        "latitude": 47.96670150756840,
        "longitude": -84.78669738769530
    },
    "YYA": {
        "latitude": 29.311699,
        "longitude": 113.281574
    },
    "YYB": {
        "latitude": 46.363602,
        "longitude": -79.422798
    },
    "YYC": {
        "latitude": 51.113899231,
        "longitude": -114.019996643
    },
    "YYD": {
        "latitude": 54.82469940185550,
        "longitude": -127.18299865722700
    },
    "YYE": {
        "latitude": 58.8363990784,
        "longitude": -122.597000122
    },
    "YYF": {
        "latitude": 49.46310043334960,
        "longitude": -119.60199737548800
    },
    "YYG": {
        "latitude": 46.290000915527300,
        "longitude": -63.12110137939450
    },
    "YYH": {
        "latitude": 69.5467,
        "longitude": -93.576698
    },
    "YYJ": {
        "latitude": 48.6469,
        "longitude": -123.426003
    },
    "YYL": {
        "latitude": 56.86389923095700,
        "longitude": -101.07599639892600
    },
    "YYN": {
        "latitude": 50.291900634800000,
        "longitude": -107.691001892
    },
    "YYQ": {
        "latitude": 58.739200592041000,
        "longitude": -94.06500244140630
    },
    "YYR": {
        "latitude": 53.3191986084,
        "longitude": -60.4258003235
    },
    "YYT": {
        "latitude": 47.618598938,
        "longitude": -52.7518997192
    },
    "YYU": {
        "latitude": 49.41389846801760,
        "longitude": -82.46749877929690
    },
    "YYW": {
        "latitude": 50.29029846191410,
        "longitude": -88.90969848632810
    },
    "YYY": {
        "latitude": 48.60860061645510,
        "longitude": -68.20809936523440
    },
    "YYZ": {
        "latitude": 43.6772003174,
        "longitude": -79.63059997560000
    },
    "YZA": {
        "latitude": 50.775258,
        "longitude": -121.321314
    },
    "YZE": {
        "latitude": 45.8853,
        "longitude": -82.567802
    },
    "YZF": {
        "latitude": 62.462799,
        "longitude": -114.440002
    },
    "YZG": {
        "latitude": 62.17940139770510,
        "longitude": -75.66719818115230
    },
    "YZH": {
        "latitude": 55.2930984497,
        "longitude": -114.777000427
    },
    "YZP": {
        "latitude": 53.25429916380000,
        "longitude": -131.813995361
    },
    "YZR": {
        "latitude": 42.9994010925293,
        "longitude": -82.30889892578130
    },
    "YZS": {
        "latitude": 64.1932983398,
        "longitude": -83.3593978882
    },
    "YZT": {
        "latitude": 50.680599212646500,
        "longitude": -127.36699676513700
    },
    "YZU": {
        "latitude": 54.14390182495120,
        "longitude": -115.78700256347700
    },
    "YZV": {
        "latitude": 50.22330093383790,
        "longitude": -66.2656021118164
    },
    "YZW": {
        "latitude": 60.17279815673830,
        "longitude": -132.7429962158200
    },
    "YZX": {
        "latitude": 44.98440170288090,
        "longitude": -64.91690063476560
    },
    "ZAC": {
        "latitude": 56.08940124511720,
        "longitude": -96.08920288085940
    },
    "ZAD": {
        "latitude": 44.108299,
        "longitude": 15.3467
    },
    "ZAG": {
        "latitude": 45.7429008484,
        "longitude": 16.0687999725
    },
    "ZAH": {
        "latitude": 29.47570037841800,
        "longitude": 60.90620040893560
    },
    "ZAL": {
        "latitude": -39.6500015259,
        "longitude": -73.0860977173
    },
    "ZAM": {
        "latitude": 6.922420024871830,
        "longitude": 122.05999755859400
    },
    "ZAO": {
        "latitude": 44.351398,
        "longitude": 1.47528
    },
    "ZAR": {
        "latitude": 11.1302,
        "longitude": 7.68581
    },
    "ZAZ": {
        "latitude": 41.666199,
        "longitude": -1.04155
    },
    "ZBF": {
        "latitude": 47.6297,
        "longitude": -65.738899
    },
    "ZBM": {
        "latitude": 45.290798,
        "longitude": -72.741402
    },
    "ZBR": {
        "latitude": 25.44573,
        "longitude": 60.38246
    },
    "ZCL": {
        "latitude": 22.8971004486,
        "longitude": -102.68699646
    },
    "ZCO": {
        "latitude": -38.9259,
        "longitude": -72.6515
    },
    "ZEC": {
        "latitude": -26.52409935,
        "longitude": 29.170099258400000
    },
    "ZEL": {
        "latitude": 52.185001,
        "longitude": -128.156994
    },
    "ZEM": {
        "latitude": 52.22639846801760,
        "longitude": -78.52249908447270
    },
    "ZER": {
        "latitude": 27.588301,
        "longitude": 93.828102
    },
    "ZFA": {
        "latitude": 62.20750045776370,
        "longitude": -133.37600708007800
    },
    "ZFD": {
        "latitude": 59.33440017700200,
        "longitude": -107.18199920654300
    },
    "ZFM": {
        "latitude": 67.40750122070310,
        "longitude": -134.86099243164100
    },
    "ZFN": {
        "latitude": 64.909697,
        "longitude": -125.572998
    },
    "ZGF": {
        "latitude": 49.015598,
        "longitude": -118.431
    },
    "ZGI": {
        "latitude": 54.839698791503900,
        "longitude": -94.07859802246090
    },
    "ZGR": {
        "latitude": 52.04560089111330,
        "longitude": -95.4657974243164
    },
    "ZGU": {
        "latitude": -14.218099594100000,
        "longitude": 167.587005615
    },
    "ZHA": {
        "latitude": 21.481667,
        "longitude": 110.590278
    },
    "ZHH": {
        "latitude": 69.548229,
        "longitude": -139.091608
    },
    "ZHI": {
        "latitude": 47.181599,
        "longitude": 7.41719
    },
    "ZHY": {
        "latitude": 37.573125,
        "longitude": 105.154454
    },
    "ZIA": {
        "latitude": 55.553299,
        "longitude": 38.150002
    },
    "ZIC": {
        "latitude": -38.245601654052700,
        "longitude": -72.34860229492190
    },
    "ZIG": {
        "latitude": 12.5556,
        "longitude": -16.281799
    },
    "ZIH": {
        "latitude": 17.601601,
        "longitude": -101.460999
    },
    "ZIX": {
        "latitude": 66.7965011597,
        "longitude": 123.361000061
    },
    "ZJG": {
        "latitude": 54.51890182495120,
        "longitude": -98.04609680175780
    },
    "ZJN": {
        "latitude": 52.120602,
        "longitude": -101.236
    },
    "ZKE": {
        "latitude": 52.282501220703100,
        "longitude": -81.67780303955080
    },
    "ZKP": {
        "latitude": 65.7485,
        "longitude": 150.8889
    },
    "ZLO": {
        "latitude": 19.1448,
        "longitude": -104.558998
    },
    "ZMG": {
        "latitude": 52.073612,
        "longitude": 11.626389
    },
    "ZMT": {
        "latitude": 54.02750015258790,
        "longitude": -132.125
    },
    "ZND": {
        "latitude": 13.779000282287600,
        "longitude": 8.983759880065920
    },
    "ZNE": {
        "latitude": -23.417800903300000,
        "longitude": 119.803001404
    },
    "ZNZ": {
        "latitude": -6.22202,
        "longitude": 39.224899
    },
    "ZOS": {
        "latitude": -40.611198,
        "longitude": -73.060997
    },
    "ZPB": {
        "latitude": 53.8911018371582,
        "longitude": -92.19640350341800
    },
    "ZQN": {
        "latitude": -45.021099,
        "longitude": 168.738998
    },
    "ZQZ": {
        "latitude": 40.738602,
        "longitude": 114.93
    },
    "ZRH": {
        "latitude": 47.458056,
        "longitude": 8.548056
    },
    "ZRI": {
        "latitude": -1.82842,
        "longitude": 136.062402
    },
    "ZRJ": {
        "latitude": 52.943599700927700,
        "longitude": -91.31279754638670
    },
    "ZSA": {
        "latitude": 24.063299,
        "longitude": -74.524002
    },
    "ZSE": {
        "latitude": -21.320899963378900,
        "longitude": 55.42499923706060
    },
    "ZSJ": {
        "latitude": 53.06420135498050,
        "longitude": -93.34439849853520
    },
    "ZST": {
        "latitude": 55.935410448,
        "longitude": -129.982434511
    },
    "ZTH": {
        "latitude": 37.7509,
        "longitude": 20.8843
    },
    "ZTM": {
        "latitude": 55.8656005859375,
        "longitude": -92.0813980102539
    },
    "ZTU": {
        "latitude": 41.557823,
        "longitude": 46.669464
    },
    "ZUC": {
        "latitude": 49.428204,
        "longitude": -91.720418
    },
    "ZUH": {
        "latitude": 22.006399,
        "longitude": 113.375999
    },
    "ZVA": {
        "latitude": -19.562799,
        "longitude": 45.450802
    },
    "ZVK": {
        "latitude": 16.55660057067870,
        "longitude": 104.76000213623000
    },
    "ZWA": {
        "latitude": -14.651700019836400,
        "longitude": 49.620601654052700
    },
    "ZWL": {
        "latitude": 58.10689926147460,
        "longitude": -103.1719970703130
    },
    "ZXT": {
        "latitude": 40.4955422161,
        "longitude": 49.9768066406
    },
    "ZYI": {
        "latitude": 27.5895,
        "longitude": 107.0007
    },
    "ZYL": {
        "latitude": 24.963832,
        "longitude": 91.864843
    },
    "ZZU": {
        "latitude": -11.444700241088900,
        "longitude": 34.01179885864260
    },
    "ZZV": {
        "latitude": 39.9444007874,
        "longitude": -81.89209747310000
    }
}
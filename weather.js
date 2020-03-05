/*
    This document has all the current data that goes into the main page
*/

var FLATLINE = 0;
var FLAT = 1;
var LINE = 2;

var SUNNY = ["icons/flatline/png/050-sun.png", "icons/flat/png/050-sun.png", "icons/line/png/050-sun.png"];
var SUNNY_HAZY = ["icons/flatline/png/033-sunrise.png", "icons/flat/png/033-sunrise.png", "icons/line/png/033-sunrise.png"];
var SUNNY_WINDY = ["icons/flatline/png/035-windy.png", "icons/flat/png/035-windy.png", "icons/line/png/035-windy.png"];
var SUNNY_RAIN = ["icons/flatline/png/038-rain-1.png", "icons/flat/png/038-rain-1.png", "icons/line/png/038-rain-1.png"];

var CLOUDY = ["icons/flatline/png/049-clouds.png", "icons/flat/png/049-clouds.png", "icons/line/png/049-clouds.png"];
var CLOUDY_PARTLY = ["icons/flatline/png/003-cloudy-4.png", "icons/flat/png/003-cloudy-4.png", "icons/line/png/003-cloudy-4.png"];
var CLOUDY_MOSTLY = ["icons/flatline/png/005-cloudy-3.png", "icons/flat/png/005-cloudy-3.png", "icons/line/png/005-cloudy-3.png"];
var CLOUDY_WINDY = ["icons/flatline/png/001-wind-1.png", "icons/flat/png/001-wind-1.png", "icons/line/png/001-wind-1.png"];

var FOG = ["icons/flatline/png/023-clouds-2.png", "icons/flat/png/023-clouds-2.png", "icons/line/png/023-clouds-2.png"];
var FOG_ICE = ["icons/flatline/png/048-temperature.png", "icons/flat/png/048-temperature.png", "icons/line/png/048-temperature.png"];

var RAIN = ["icons/flatline/png/010-rain-3.png", "icons/flat/png/010-rain-3.png", "icons/line/png/010-rain-3.png"];
var RAIN_HEAVY = ["icons/flatline/png/040-rain.png", "icons/flat/png/040-rain.png", "icons/line/png/040-rain.png"];
var RAIN_SHOWERS = ["icons/flatline/png/038-rain-1.png", "icons/flat/png/038-rain-1.png", "icons/line/png/038-rain-1.png"];
var RAIN_FREEZING = ["icons/flatline/png/046-temperature-1.png", "icons/flat/png/046-temperature-1.png", "icons/line/png/046-temperature-1.png"];

var RAIN_SNOW_MIX = ["icons/flatline/png/048-temperature.png", "icons/flat/png/048-temperature.png", "icons/line/png/048-temperature.png"];

var WINTERY_MIX = ["icons/flatline/png/046-temperature-1.png", "icons/flat/png/046-temperature-1.png", "icons/line/png/046-temperature-1.png"];

var THUNDERSTORM = ["icons/flatline/png/021-storm-1.png", "icons/flat/png/021-storm-1.png", "icons/line/png/021-storm-1.png"];

var SNOW = ["icons/flatline/png/008-snow-1.png", "icons/flat/png/008-snow-1.png", "icons/line/png/008-snow-1.png"];
var SNOW_SHOWERS = ["icons/flatline/png/042-snow.png", "icons/flat/png/042-snow.png", "icons/line/png/042-snow.png"];
var SNOW_HEAVY = ["icons/flatline/png/018-snowflake.png", "icons/flat/png/018-snowflake.png", "icons/line/png/018-snowflake.png"];

var BLIZZARD = ["icons/flatline/png/048-temperature.png", "icons/flat/png/048-temperature.png", "icons/line/png/048-temperature.png"];
var ICE = ["icons/flatline/png/030-clouds-1.png", "icons/flat/png/030-clouds-1.png", "icons/line/png/030-clouds-1.png"];





/*
    Each day has a high, low, forecast string, picture to show, and any extra notes 
    in an array 
*/
var HIGH = 0;
var LOW = 1;
var FORECAST = 2;
var PICTURE = 3;
var NOTE = 4;

var weekof = 'March 9-13';
var monday = [ 54, 33, 'Partly Cloudy', SUNNY_RAIN[FLATLINE], 'Showers at night'];
var tuesday = [ 56, 36, 'Sunny', SUNNY[FLATLINE], 'Cloud Intervals'];
var wednesday = [ 55, 40, 'Sunny', SUNNY[FLATLINE], 'Coronavirus'];
var thursday = [ 53, 38, 'Shower Chance', RAIN_SHOWERS[FLATLINE], 'Showers'];
var friday = [ 52, 39, 'Local Rain', RAIN_SHOWERS[FLATLINE], 'Showers at night'];





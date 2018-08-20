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
var SUNNY_WINDY = ["icons/flatline/png/035-windy.png", "icons/flat/png/035-windy.png", "icons/line/png/035-windy.png"];

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

var weekof = 'August 20-24';
var monday = [ 96, 58, 'Hot', FOG[FLATLINE], 'Hazy'];
var tuesday = [ 91, 53, 'Hot', SUNNY_WINDY[FLATLINE], 'Hazy'];
var wednesday = [ 76, 47, 'Hot', RAIN_SNOW_MIX[FLATLINE], 'Hazy'];
var thursday = [ 72, 48, 'Hot', WINDY[FLATLINE], 'Hazy'];
var friday = [ 69, 44, 'Hot', CLOUDY_MOSTLY[FLATLINE], 'Hazy'];





import React, {useState, useEffect} from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import DashboardCard from '../DashboardCards/DashboardCard/DashboardCard';
import Header from '../../Header/Header';
import KPI from '../KPI/KPI';
import './Dashboard.css'
import KPICard from '../DashboardCards/KPICard/KPICard';

const Dashboard = ({ title }) => {
  const mockData = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1656028800,
        "main": {
          "temp": 99.16,
          "feels_like": 105.93,
          "temp_min": 96.93,
          "temp_max": 99.16,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1009,
          "humidity": 38,
          "temp_kf": 1.24
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 20
        },
        "wind": {
          "speed": 10.85,
          "deg": 148,
          "gust": 10.78
        },
        "visibility": 10000,
        "pop": 0.05,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-24 00:00:00"
      },
      {
        "dt": 1656039600,
        "main": {
          "temp": 95.52,
          "feels_like": 100.54,
          "temp_min": 88.25,
          "temp_max": 95.52,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1012,
          "humidity": 41,
          "temp_kf": 4.04
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 9.91,
          "deg": 173,
          "gust": 14.65
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-24 03:00:00"
      },
      {
        "dt": 1656050400,
        "main": {
          "temp": 89.28,
          "feels_like": 94.57,
          "temp_min": 84.33,
          "temp_max": 89.28,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1012,
          "humidity": 53,
          "temp_kf": 2.75
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 59
        },
        "wind": {
          "speed": 6.64,
          "deg": 193,
          "gust": 11.34
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-24 06:00:00"
      },
      {
        "dt": 1656061200,
        "main": {
          "temp": 82.02,
          "feels_like": 85.62,
          "temp_min": 82.02,
          "temp_max": 82.02,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1011,
          "humidity": 66,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 98
        },
        "wind": {
          "speed": 7.54,
          "deg": 229,
          "gust": 15.48
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-24 09:00:00"
      },
      {
        "dt": 1656072000,
        "main": {
          "temp": 80.76,
          "feels_like": 84.06,
          "temp_min": 80.76,
          "temp_max": 80.76,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1013,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 62
        },
        "wind": {
          "speed": 6.2,
          "deg": 240,
          "gust": 12.12
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-24 12:00:00"
      },
      {
        "dt": 1656082800,
        "main": {
          "temp": 89.46,
          "feels_like": 92.77,
          "temp_min": 89.46,
          "temp_max": 89.46,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1013,
          "humidity": 48,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 4
        },
        "wind": {
          "speed": 5.64,
          "deg": 240,
          "gust": 6.6
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-24 15:00:00"
      },
      {
        "dt": 1656093600,
        "main": {
          "temp": 101.1,
          "feels_like": 102.99,
          "temp_min": 101.1,
          "temp_max": 101.1,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1012,
          "humidity": 28,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 5
        },
        "wind": {
          "speed": 2.37,
          "deg": 158,
          "gust": 5.17
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-24 18:00:00"
      },
      {
        "dt": 1656104400,
        "main": {
          "temp": 102.09,
          "feels_like": 104.68,
          "temp_min": 102.09,
          "temp_max": 102.09,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1010,
          "humidity": 28,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 16
        },
        "wind": {
          "speed": 11.54,
          "deg": 132,
          "gust": 7.45
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-24 21:00:00"
      },
      {
        "dt": 1656115200,
        "main": {
          "temp": 96.35,
          "feels_like": 96.84,
          "temp_min": 96.35,
          "temp_max": 96.35,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1010,
          "humidity": 31,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 18
        },
        "wind": {
          "speed": 13.85,
          "deg": 157,
          "gust": 13.44
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-25 00:00:00"
      },
      {
        "dt": 1656126000,
        "main": {
          "temp": 87.17,
          "feels_like": 89.37,
          "temp_min": 87.17,
          "temp_max": 87.17,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1011,
          "humidity": 49,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 3
        },
        "wind": {
          "speed": 11.74,
          "deg": 190,
          "gust": 19.15
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-25 03:00:00"
      },
      {
        "dt": 1656136800,
        "main": {
          "temp": 82.81,
          "feels_like": 86.77,
          "temp_min": 82.81,
          "temp_max": 82.81,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1011,
          "humidity": 65,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 9.24,
          "deg": 208,
          "gust": 18.61
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-25 06:00:00"
      },
      {
        "dt": 1656147600,
        "main": {
          "temp": 80.69,
          "feels_like": 83.95,
          "temp_min": 80.69,
          "temp_max": 80.69,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1012,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.2,
          "deg": 215,
          "gust": 16.42
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-25 09:00:00"
      },
      {
        "dt": 1656158400,
        "main": {
          "temp": 79.72,
          "feels_like": 79.72,
          "temp_min": 79.72,
          "temp_max": 79.72,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1014,
          "humidity": 71,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 4.81,
          "deg": 228,
          "gust": 10.27
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-25 12:00:00"
      },
      {
        "dt": 1656169200,
        "main": {
          "temp": 89.19,
          "feels_like": 91.9,
          "temp_min": 89.19,
          "temp_max": 89.19,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1015,
          "humidity": 47,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 4.85,
          "deg": 228,
          "gust": 6.11
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-25 15:00:00"
      },
      {
        "dt": 1656180000,
        "main": {
          "temp": 100.6,
          "feels_like": 101.05,
          "temp_min": 100.6,
          "temp_max": 100.6,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1014,
          "humidity": 26,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.09,
          "deg": 133,
          "gust": 8.52
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-25 18:00:00"
      },
      {
        "dt": 1656190800,
        "main": {
          "temp": 102.87,
          "feels_like": 101.28,
          "temp_min": 102.87,
          "temp_max": 102.87,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1012,
          "humidity": 20,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 13.56,
          "deg": 131,
          "gust": 10.56
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-25 21:00:00"
      },
      {
        "dt": 1656201600,
        "main": {
          "temp": 96.35,
          "feels_like": 95.99,
          "temp_min": 96.35,
          "temp_max": 96.35,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1011,
          "humidity": 29,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 12.95,
          "deg": 159,
          "gust": 11.99
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-26 00:00:00"
      },
      {
        "dt": 1656212400,
        "main": {
          "temp": 86.65,
          "feels_like": 88.86,
          "temp_min": 86.65,
          "temp_max": 86.65,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1014,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 11.23,
          "deg": 185,
          "gust": 17.54
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-26 03:00:00"
      },
      {
        "dt": 1656223200,
        "main": {
          "temp": 82.92,
          "feels_like": 86.25,
          "temp_min": 82.92,
          "temp_max": 82.92,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1015,
          "humidity": 62,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.9,
          "deg": 199,
          "gust": 15.14
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-26 06:00:00"
      },
      {
        "dt": 1656234000,
        "main": {
          "temp": 80.91,
          "feels_like": 83.98,
          "temp_min": 80.91,
          "temp_max": 80.91,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1015,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 5
        },
        "wind": {
          "speed": 4.68,
          "deg": 197,
          "gust": 8.77
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-26 09:00:00"
      },
      {
        "dt": 1656244800,
        "main": {
          "temp": 80.01,
          "feels_like": 82.85,
          "temp_min": 80.01,
          "temp_max": 80.01,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1016,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 4
        },
        "wind": {
          "speed": 4.34,
          "deg": 240,
          "gust": 7.85
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-26 12:00:00"
      },
      {
        "dt": 1656255600,
        "main": {
          "temp": 88.74,
          "feels_like": 91.54,
          "temp_min": 88.74,
          "temp_max": 88.74,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1017,
          "humidity": 48,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 5
        },
        "wind": {
          "speed": 4.05,
          "deg": 278,
          "gust": 3.51
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-26 15:00:00"
      },
      {
        "dt": 1656266400,
        "main": {
          "temp": 99.21,
          "feels_like": 100.44,
          "temp_min": 99.21,
          "temp_max": 99.21,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1016,
          "humidity": 29,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 9
        },
        "wind": {
          "speed": 2.3,
          "deg": 353,
          "gust": 4.56
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-26 18:00:00"
      },
      {
        "dt": 1656277200,
        "main": {
          "temp": 102.65,
          "feels_like": 103.14,
          "temp_min": 102.65,
          "temp_max": 102.65,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1013,
          "humidity": 24,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 28
        },
        "wind": {
          "speed": 2.66,
          "deg": 53,
          "gust": 5.7
        },
        "visibility": 10000,
        "pop": 0.26,
        "rain": {
          "3h": 0.11
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-26 21:00:00"
      },
      {
        "dt": 1656288000,
        "main": {
          "temp": 97.27,
          "feels_like": 97.36,
          "temp_min": 97.27,
          "temp_max": 97.27,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1012,
          "humidity": 29,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 47
        },
        "wind": {
          "speed": 9.95,
          "deg": 147,
          "gust": 8.81
        },
        "visibility": 10000,
        "pop": 0.06,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-27 00:00:00"
      },
      {
        "dt": 1656298800,
        "main": {
          "temp": 84.13,
          "feels_like": 87.75,
          "temp_min": 84.13,
          "temp_max": 84.13,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1015,
          "humidity": 60,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 10.76,
          "deg": 154,
          "gust": 19.06
        },
        "visibility": 10000,
        "pop": 0.73,
        "rain": {
          "3h": 0.94
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-27 03:00:00"
      },
      {
        "dt": 1656309600,
        "main": {
          "temp": 84.06,
          "feels_like": 88.16,
          "temp_min": 84.06,
          "temp_max": 84.06,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1016,
          "humidity": 62,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 89
        },
        "wind": {
          "speed": 6.85,
          "deg": 139,
          "gust": 14.16
        },
        "visibility": 10000,
        "pop": 0.65,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-27 06:00:00"
      },
      {
        "dt": 1656320400,
        "main": {
          "temp": 81.09,
          "feels_like": 84.96,
          "temp_min": 81.09,
          "temp_max": 81.09,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1016,
          "humidity": 71,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.62,
          "deg": 33,
          "gust": 3.36
        },
        "visibility": 10000,
        "pop": 0.75,
        "rain": {
          "3h": 0.41
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-27 09:00:00"
      },
      {
        "dt": 1656331200,
        "main": {
          "temp": 79.92,
          "feels_like": 79.92,
          "temp_min": 79.92,
          "temp_max": 79.92,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1017,
          "humidity": 76,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 0.98,
          "deg": 23,
          "gust": 3.27
        },
        "visibility": 10000,
        "pop": 0.83,
        "rain": {
          "3h": 0.41
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-27 12:00:00"
      },
      {
        "dt": 1656342000,
        "main": {
          "temp": 80.02,
          "feels_like": 84.02,
          "temp_min": 80.02,
          "temp_max": 80.02,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1017,
          "humidity": 78,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 6.89,
          "deg": 36,
          "gust": 11.52
        },
        "visibility": 10000,
        "pop": 0.94,
        "rain": {
          "3h": 5.8
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-27 15:00:00"
      },
      {
        "dt": 1656352800,
        "main": {
          "temp": 88.09,
          "feels_like": 93.56,
          "temp_min": 88.09,
          "temp_max": 88.09,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1016,
          "humidity": 56,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 8.77,
          "deg": 349,
          "gust": 13.27
        },
        "visibility": 10000,
        "pop": 0.95,
        "rain": {
          "3h": 2.31
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-27 18:00:00"
      },
      {
        "dt": 1656363600,
        "main": {
          "temp": 90.05,
          "feels_like": 94.24,
          "temp_min": 90.05,
          "temp_max": 90.05,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1013,
          "humidity": 49,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 6.46,
          "deg": 49,
          "gust": 12.71
        },
        "visibility": 10000,
        "pop": 0.51,
        "rain": {
          "3h": 0.23
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-27 21:00:00"
      },
      {
        "dt": 1656374400,
        "main": {
          "temp": 79.02,
          "feels_like": 79.02,
          "temp_min": 79.02,
          "temp_max": 79.02,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1013,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 5.06,
          "deg": 190,
          "gust": 11.61
        },
        "visibility": 10000,
        "pop": 0.79,
        "rain": {
          "3h": 2.59
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-28 00:00:00"
      },
      {
        "dt": 1656385200,
        "main": {
          "temp": 78.22,
          "feels_like": 79.84,
          "temp_min": 78.22,
          "temp_max": 78.22,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1015,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.44,
          "deg": 119,
          "gust": 7.7
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
          "3h": 5.07
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-28 03:00:00"
      },
      {
        "dt": 1656396000,
        "main": {
          "temp": 77.56,
          "feels_like": 79.2,
          "temp_min": 77.56,
          "temp_max": 77.56,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1014,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 5.01,
          "deg": 23,
          "gust": 14.9
        },
        "visibility": 7609,
        "pop": 1,
        "rain": {
          "3h": 1.93
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-28 06:00:00"
      },
      {
        "dt": 1656406800,
        "main": {
          "temp": 75.97,
          "feels_like": 77.65,
          "temp_min": 75.97,
          "temp_max": 75.97,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1014,
          "humidity": 93,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 7.23,
          "deg": 58,
          "gust": 14.9
        },
        "visibility": 10000,
        "pop": 0.91,
        "rain": {
          "3h": 4.29
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-28 09:00:00"
      },
      {
        "dt": 1656417600,
        "main": {
          "temp": 76.28,
          "feels_like": 77.97,
          "temp_min": 76.28,
          "temp_max": 76.28,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1015,
          "humidity": 93,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 8.37,
          "deg": 47,
          "gust": 16.24
        },
        "visibility": 10000,
        "pop": 0.91,
        "rain": {
          "3h": 1.02
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-28 12:00:00"
      },
      {
        "dt": 1656428400,
        "main": {
          "temp": 79.7,
          "feels_like": 79.7,
          "temp_min": 79.7,
          "temp_max": 79.7,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1015,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 9.44,
          "deg": 82,
          "gust": 17.54
        },
        "visibility": 7033,
        "pop": 1,
        "rain": {
          "3h": 3.21
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-28 15:00:00"
      },
      {
        "dt": 1656439200,
        "main": {
          "temp": 79.97,
          "feels_like": 79.97,
          "temp_min": 79.97,
          "temp_max": 79.97,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1015,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 10.47,
          "deg": 101,
          "gust": 18.34
        },
        "visibility": 4916,
        "pop": 1,
        "rain": {
          "3h": 6.42
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-28 18:00:00"
      },
      {
        "dt": 1656450000,
        "main": {
          "temp": 78.04,
          "feels_like": 79.59,
          "temp_min": 78.04,
          "temp_max": 78.04,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1014,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 9.42,
          "deg": 111,
          "gust": 21.09
        },
        "visibility": 5212,
        "pop": 1,
        "rain": {
          "3h": 7.02
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-06-28 21:00:00"
      }
    ],
    "city": {
      "id": 4699066,
      "name": "Houston",
      "coord": {
        "lat": 29.7633,
        "lon": -95.3633
      },
      "country": "US",
      "population": 2099451,
      "timezone": -18000,
      "sunrise": 1655983316,
      "sunset": 1656033920
    }
  }
  const [error, setError] = useState([null]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(mockData);

  const average_temperature = (data.list.map(item => item.main.temp).reduce((a,b) => a + b) / data.list.length).toFixed(1);
  useEffect(() => {
    (async () => {
    await fetch("http://127.0.0.1:8000/weather/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    })();
  }, [])


  if (data) {
    const options = {
        title: {
            text: null
        },
        series: [{
            type: 'bar',
            data: data.list.map(item => item.main.temp)
        }],
        plotOptions: {
            series: {
              borderWidth: 1,
              borderColor: '#555',

              point: {
                events: {
                  //mouseOver: setHoverData.bind(this)
                }
              }
            }
          },
          xAxis: {
            type: 'category',
            title: {
                text: null
            },
            min: 0,
            //max: 6,
            //scrollbar: {
            //    enabled: true
            //},
            tickLength: 0
          },
          tooltip: {
            backgroundColor: '#FCFFC5',
            borderColor: 'black',
            borderRadius: 10,
            borderWidth: 3
        }
      }
  
    return (
      <div>
      <Header title={title} />
      <main className='Dashboard'>
        <div className='content'>
          <KPICard className='div1' title='Average Temperature' value={`${average_temperature}°`}/>
          <DashboardCard className='div2 DashboardCard-kpiCard' title='Title 2'>
            <KPI/>
          </DashboardCard>
          <DashboardCard className='div3 DashboardCard-kpiCard' title='Title 3'>
            <KPI/>
          </DashboardCard>
          <DashboardCard className='div4 DashboardCard-kpiCard' title='Title 4'>
            <KPI/>
          </DashboardCard>
          <DashboardCard className='div5' title='Title 5'>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
          </DashboardCard>
          <DashboardCard className='div6' title='Title 6'>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
          </DashboardCard>
          <DashboardCard className='div7' title='Title 7'>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
          </DashboardCard>
          <DashboardCard className='div8' title='Title 8'>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
          </DashboardCard>
        </div>
      </main>
      </div>
    );
  } else {
    return (<div>Loading</div>)
  }
}
 
export default Dashboard;
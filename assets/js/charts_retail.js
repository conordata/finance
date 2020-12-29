/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// Helper functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

new Chart($("#retail-revenue-chart")[0].getContext('2d'), {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"],
    datasets: [{
      label: 'Revenue',
      data: [14850, 10920, 11000, 8950, 5000, 6100, 8000, 4000, 15000, 26800, 12100, 13000, 24050],
      borderWidth: 2,
      borderColor: colors.color_primary,
      backgroundColor: colors.color_bg,
      pointBackgroundColor: colors.color_primary
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: { display: false }
    },
    tooltips: {
      mode: 'index',
      callbacks: {
        footer: function footer(tooltipItems, data) {
          var sum = 0;
          tooltipItems.forEach(function (tooltipItem) {
            sum += data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          });
          return 'Sum: ' + sum;
        }
      },
      footerFontStyle: 'normal'
    },
    scales: {
      yAxes: [{
        stacked: true,
        gridLines: {
          color: colors.border_color,
          zeroLineColor: colors.border_color
        },
        ticks: {
          callback: function callback(value, index, values) {
            if (parseInt(value) >= 1000) {
              return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
              return '$' + value;
            }
          }
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        border: {
          display: true,
          color: colors.border_color
        },
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

new Chart($("#retail-sales-chart")[0].getContext('2d'), {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"],
    datasets: [{
      label: 'Sales',
      data: [2000, 1000, 2000, 4000, 5000, 6000, 8000, 4000, 5000, 6000, 2000, 3000, 4000],
      borderWidth: 2,
      borderColor: colors.color_primary,
      backgroundColor: colors.color_bg,
      pointBackgroundColor: colors.color_primary
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: { display: false }
    },
    tooltips: {
      mode: 'index',
      callbacks: {
        footer: function footer(tooltipItems, data) {
          var sum = 0;
          tooltipItems.forEach(function (tooltipItem) {
            sum += data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          });
          return 'Sum: ' + sum;
        }
      },
      footerFontStyle: 'normal'
    },
    scales: {
      yAxes: [{
        stacked: true,
        gridLines: {
          color: colors.border_color,
          zeroLineColor: colors.border_color
        },
        ticks: {
          callback: function callback(value, index, values) {
            if (parseInt(value) >= 1000) {
              return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
              return '$' + value;
            }
          }
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        border: {
          display: true,
          color: colors.border_color
        },
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

$(".retail-views-mini-chart").each(function (index, element) {
  var ctx = element.getContext('2d');
  var values = [];
  for (var i = 6; i >= 0; i--) {
    values.push(getRandomInt(150, 200));
  }

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["01", "02", "03", "04", "05", "06"],
      datasets: [{
        label: 'Sales',
        data: values,
        borderWidth: 2,
        borderColor: colors.color_primary,
        backgroundColor: colors.color_bg,
        pointBackgroundColor: colors.color_primary
      }]
    },
    options: {
      elements: { point: { radius: 0 } },
      maintainAspectRatio: false,
      legend: {
        display: false,
        labels: { display: false }
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false,
            zeroLineColor: colors.border_color,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        }],
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        }]
      }
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjI0ODRjODk0NmY2ZjNlYTExN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NoYXJ0c19yZXRhaWwuanMiXSwibmFtZXMiOlsiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiQ2hhcnQiLCIkIiwiZ2V0Q29udGV4dCIsInR5cGUiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJjb2xvcnMiLCJjb2xvcl9wcmltYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JfYmciLCJwb2ludEJhY2tncm91bmRDb2xvciIsIm9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwibGVnZW5kIiwiZGlzcGxheSIsInRvb2x0aXBzIiwibW9kZSIsImNhbGxiYWNrcyIsImZvb3RlciIsInRvb2x0aXBJdGVtcyIsInN1bSIsImZvckVhY2giLCJ0b29sdGlwSXRlbSIsImRhdGFzZXRJbmRleCIsImluZGV4IiwiZm9vdGVyRm9udFN0eWxlIiwic2NhbGVzIiwieUF4ZXMiLCJzdGFja2VkIiwiZ3JpZExpbmVzIiwiY29sb3IiLCJib3JkZXJfY29sb3IiLCJ6ZXJvTGluZUNvbG9yIiwidGlja3MiLCJjYWxsYmFjayIsInZhbHVlIiwidmFsdWVzIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJ4QXhlcyIsImJvcmRlciIsImJlZ2luQXRaZXJvIiwiZWFjaCIsImVsZW1lbnQiLCJjdHgiLCJpIiwicHVzaCIsImVsZW1lbnRzIiwicG9pbnQiLCJyYWRpdXMiLCJlbmFibGVkIiwiZHJhd0JvcmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyMjQ4NGM4OTQ2ZjZmM2VhMTE3ZCIsIi8vIEhlbHBlciBmdW5jdGlvbnNcbmZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5uZXcgQ2hhcnQoJChcIiNyZXRhaWwtcmV2ZW51ZS1jaGFydFwiKVswXS5nZXRDb250ZXh0KCcyZCcpLCB7XG4gIHR5cGU6ICdsaW5lJyxcbiAgZGF0YToge1xuICAgIGxhYmVsczpcbiAgICBbXG4gICAgXCIwMVwiLCBcIjAyXCIsIFwiMDNcIiwgXCIwNFwiLFxuICAgIFwiMDVcIiwgXCIwNlwiLCBcIjA3XCIsIFwiMDhcIixcbiAgICBcIjA5XCIsIFwiMTBcIiwgXCIxMVwiLCBcIjEyXCIsXG4gICAgXCIxM1wiXG4gICAgXSxcbiAgICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnUmV2ZW51ZScsXG4gICAgICBkYXRhOiBbMTQ4NTAsIDEwOTIwLCAxMTAwMCwgODk1MCwgNTAwMCwgNjEwMCwgODAwMCwgNDAwMCwgMTUwMDAsIDI2ODAwLCAxMjEwMCwgMTMwMDAsIDI0MDUwXSxcbiAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5jb2xvcl9wcmltYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JfYmcsXG4gICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yX3ByaW1hcnlcbiAgICB9XG4gICAgXVxuICB9LFxuICBvcHRpb25zOiB7XG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgbGVnZW5kOiB7XG4gICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgIGxhYmVsczogeyBkaXNwbGF5OiBmYWxzZSB9XG4gICAgfSxcbiAgICB0b29sdGlwczoge1xuICAgICAgbW9kZTogJ2luZGV4JyxcbiAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICBmb290ZXI6IGZ1bmN0aW9uKHRvb2x0aXBJdGVtcywgZGF0YSkge1xuICAgICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICAgIHRvb2x0aXBJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHRvb2x0aXBJdGVtKSB7XG4gICAgICAgICAgICBzdW0gKz0gZGF0YS5kYXRhc2V0c1t0b29sdGlwSXRlbS5kYXRhc2V0SW5kZXhdLmRhdGFbdG9vbHRpcEl0ZW0uaW5kZXhdO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiAnU3VtOiAnICsgc3VtO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZvb3RlckZvbnRTdHlsZTogJ25vcm1hbCdcbiAgICB9LFxuICAgIHNjYWxlczoge1xuICAgICAgeUF4ZXM6IFt7XG4gICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBjb2xvcnMuYm9yZGVyX2NvbG9yLFxuICAgICAgICAgIHplcm9MaW5lQ29sb3I6IGNvbG9ycy5ib3JkZXJfY29sb3IsXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24odmFsdWUsIGluZGV4LCB2YWx1ZXMpIHtcbiAgICAgICAgICBpZihwYXJzZUludCh2YWx1ZSkgPj0gMTAwMCl7XG4gICAgICAgICAgICByZXR1cm4gJyQnICsgdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnJCcgKyB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSxcbiAgICB4QXhlczogW3tcbiAgICAgIGdyaWRMaW5lcyA6IHtcbiAgICAgICAgZGlzcGxheSA6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYm9yZGVyOiB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGNvbG9yOiBjb2xvcnMuYm9yZGVyX2NvbG9yLFxuICAgICAgfSxcbiAgICAgIHRpY2tzOiB7XG4gICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXG4gICAgICB9XG4gICAgfV1cbiAgfVxufVxufSk7XG5cbm5ldyBDaGFydCgkKFwiI3JldGFpbC1zYWxlcy1jaGFydFwiKVswXS5nZXRDb250ZXh0KCcyZCcpLCB7XG4gIHR5cGU6ICdsaW5lJyxcbiAgZGF0YToge1xuICAgIGxhYmVsczpcbiAgICBbXG4gICAgXCIwMVwiLCBcIjAyXCIsIFwiMDNcIiwgXCIwNFwiLFxuICAgIFwiMDVcIiwgXCIwNlwiLCBcIjA3XCIsIFwiMDhcIixcbiAgICBcIjA5XCIsIFwiMTBcIiwgXCIxMVwiLCBcIjEyXCIsXG4gICAgXCIxM1wiXG4gICAgXSxcbiAgICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnU2FsZXMnLFxuICAgICAgZGF0YTogWzIwMDAsIDEwMDAsIDIwMDAsIDQwMDAsIDUwMDAsIDYwMDAsIDgwMDAsIDQwMDAsIDUwMDAsIDYwMDAsIDIwMDAsIDMwMDAsIDQwMDBdLFxuICAgICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgICBib3JkZXJDb2xvcjogY29sb3JzLmNvbG9yX3ByaW1hcnksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvcl9iZyxcbiAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JfcHJpbWFyeVxuICAgIH1cbiAgICBdXG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgbGFiZWxzOiB7IGRpc3BsYXk6IGZhbHNlIH1cbiAgICB9LFxuICAgIHRvb2x0aXBzOiB7XG4gICAgICBtb2RlOiAnaW5kZXgnLFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGZvb3RlcjogZnVuY3Rpb24odG9vbHRpcEl0ZW1zLCBkYXRhKSB7XG4gICAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgICAgdG9vbHRpcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24odG9vbHRpcEl0ZW0pIHtcbiAgICAgICAgICAgIHN1bSArPSBkYXRhLmRhdGFzZXRzW3Rvb2x0aXBJdGVtLmRhdGFzZXRJbmRleF0uZGF0YVt0b29sdGlwSXRlbS5pbmRleF07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuICdTdW06ICcgKyBzdW07XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZm9vdGVyRm9udFN0eWxlOiAnbm9ybWFsJ1xuICAgIH0sXG4gICAgc2NhbGVzOiB7XG4gICAgICB5QXhlczogW3tcbiAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgY29sb3I6IGNvbG9ycy5ib3JkZXJfY29sb3IsXG4gICAgICAgICAgemVyb0xpbmVDb2xvcjogY29sb3JzLmJvcmRlcl9jb2xvcixcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIHZhbHVlcykge1xuICAgICAgICAgIGlmKHBhcnNlSW50KHZhbHVlKSA+PSAxMDAwKXtcbiAgICAgICAgICAgIHJldHVybiAnJCcgKyB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICckJyArIHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dLFxuICAgIHhBeGVzOiBbe1xuICAgICAgZ3JpZExpbmVzIDoge1xuICAgICAgICBkaXNwbGF5IDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBib3JkZXI6IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ib3JkZXJfY29sb3IsXG4gICAgICB9LFxuICAgICAgdGlja3M6IHtcbiAgICAgICAgYmVnaW5BdFplcm86IHRydWVcbiAgICAgIH1cbiAgICB9XVxuICB9XG59XG59KTtcblxuJChcIi5yZXRhaWwtdmlld3MtbWluaS1jaGFydFwiKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICBsZXQgY3R4ID0gZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpXG4gIGxldCB2YWx1ZXMgPSBbXVxuICBmb3IgKHZhciBpID0gNjsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YWx1ZXMucHVzaChnZXRSYW5kb21JbnQoMTUwLCAyMDApKVxuICB9XG5cbiAgbmV3IENoYXJ0KGN0eCwge1xuICB0eXBlOiAnbGluZScsXG4gIGRhdGE6IHtcbiAgICBsYWJlbHM6XG4gICAgW1xuICAgIFwiMDFcIiwgXCIwMlwiLCBcIjAzXCIsIFwiMDRcIixcbiAgICBcIjA1XCIsIFwiMDZcIlxuICAgIF0sXG4gICAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ1NhbGVzJyxcbiAgICAgIGRhdGE6IHZhbHVlcyxcbiAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5jb2xvcl9wcmltYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JfYmcsXG4gICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yX3ByaW1hcnlcbiAgICB9XG4gICAgXVxuICB9LFxuICBvcHRpb25zOiB7XG4gICAgZWxlbWVudHM6IHsgcG9pbnQ6IHsgcmFkaXVzOiAwIH0gfSxcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgbGFiZWxzOiB7IGRpc3BsYXk6IGZhbHNlIH1cbiAgICB9LFxuICAgIHRvb2x0aXBzOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZVxuICAgIH0sXG4gICAgc2NhbGVzOiB7XG4gICAgICB5QXhlczogW3tcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgemVyb0xpbmVDb2xvcjogY29sb3JzLmJvcmRlcl9jb2xvcixcbiAgICAgICAgICBkcmF3Qm9yZGVyOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XSxcbiAgICB4QXhlczogW3tcbiAgICAgIGdyaWRMaW5lcyA6IHtcbiAgICAgICAgZGlzcGxheSA6IGZhbHNlLFxuICAgICAgICBkcmF3Qm9yZGVyOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHRpY2tzOiB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICB9XG4gICAgfV1cbiAgfVxufVxufSk7XG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jaGFydHNfcmV0YWlsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// Helper Functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$('.doughnut-chart').each(function (index, element) {
  var ctx = element.getContext('2d');
  var value1 = element.dataset.percent;
  var value2 = 100 - value1;
  var pie_color = '';

  switch (true) {
    case value1 <= 25:
      pie_color = colors.color_danger;
      break;
    case value1 <= 50:
      pie_color = colors.color_warning;
      break;
    default:
      pie_color = colors.color_success;
  }

  new Chart(ctx, {
    type: 'pie',
    data: {
      datasets: [{
        data: [value1, value2],
        borderWidth: 1,
        backgroundColor: [pie_color, colors.color_bg]
      }]
    },
    options: {
      tooltips: { enabled: false },
      cutoutPercentage: 85
    }
  });
});

$('.stats-chart').each(function (index, element) {
  var ctx = element.getContext('2d');
  var stats_data = [];

  for (var i = 6; i >= 0; i--) {
    stats_data.push(getRandomInt(100, 300));
  }

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["01", "02", "03", "04", "05", "06", "07", "08"],
      datasets: [{
        data: stats_data,
        borderWidth: 2,
        borderColor: colors.color_primary,
        backgroundColor: 'rgba(103, 116, 223,.12)',
        pointBackgroundColor: colors.color_primary
      }]
    },
    options: {
      elements: { point: { radius: 0 } },
      tooltips: {
        enabled: false
      },
      legend: {
        display: false,
        labels: { display: false }
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            zeroLineColor: colors.border_color
          },
          ticks: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false,
            zeroLineColor: colors.border_color
          },
          ticks: {
            display: false
          }
        }]
      }
    }
  });
});

new Chart($("#dashboard-chart")[0].getContext('2d'), {
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

if ($("#visitors-chart").length) {
  new Chart($('#visitors-chart'), {
    type: 'pie',
    data: {
      datasets: [{
        data: [12, 30, 15, 13, 20, 10],
        borderWidth: 1,
        backgroundColor: [colors.color_bg, colors.color_primary, colors.color_warning, colors.color_danger, colors.color_blue, colors.color_success]
      }]
    },
    options: {
      tooltips: { enabled: true },
      cutoutPercentage: 40,
      events: false,
      animation: {
        duration: 500,
        easing: "easeOutQuart",
        onComplete: function onComplete() {
          var ctx = this.chart.ctx;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function (dataset) {

            for (var i = 0; i < dataset.data.length; i++) {
              var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                  total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                  mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
                  start_angle = model.startAngle,
                  end_angle = model.endAngle,
                  mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = '#fff';
              if (i == 0) {
                ctx.fillStyle = '#444';
              }
              var percent = String(Math.round(dataset.data[i] / total * 100)) + "%";

              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 10);
            }
          });
        }
      }
    }
  });
}

new Chart($("#members-chart")[0].getContext('2d'), {
  type: 'bar',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [{
      label: 'Sales',
      data: [401, 362, 210, 85, 105, 125, 90, 150, 540, 980, 1102, 1150],
      borderWidth: 5,
      borderColor: colors.color_primary,
      backgroundColor: colors.color_primary
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        display: false
      }
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
        }
      }]
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjI0ODRjODk0NmY2ZjNlYTExN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NoYXJ0c19pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCIkIiwiZWFjaCIsImluZGV4IiwiZWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJ2YWx1ZTEiLCJkYXRhc2V0IiwicGVyY2VudCIsInZhbHVlMiIsInBpZV9jb2xvciIsImNvbG9ycyIsImNvbG9yX2RhbmdlciIsImNvbG9yX3dhcm5pbmciLCJjb2xvcl9zdWNjZXNzIiwiQ2hhcnQiLCJ0eXBlIiwiZGF0YSIsImRhdGFzZXRzIiwiYm9yZGVyV2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcl9iZyIsIm9wdGlvbnMiLCJ0b29sdGlwcyIsImVuYWJsZWQiLCJjdXRvdXRQZXJjZW50YWdlIiwic3RhdHNfZGF0YSIsImkiLCJwdXNoIiwibGFiZWxzIiwiYm9yZGVyQ29sb3IiLCJjb2xvcl9wcmltYXJ5IiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJlbGVtZW50cyIsInBvaW50IiwicmFkaXVzIiwibGVnZW5kIiwiZGlzcGxheSIsInNjYWxlcyIsInhBeGVzIiwiZ3JpZExpbmVzIiwiemVyb0xpbmVDb2xvciIsImJvcmRlcl9jb2xvciIsInRpY2tzIiwieUF4ZXMiLCJsYWJlbCIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJtb2RlIiwiY2FsbGJhY2tzIiwiZm9vdGVyIiwidG9vbHRpcEl0ZW1zIiwic3VtIiwiZm9yRWFjaCIsInRvb2x0aXBJdGVtIiwiZGF0YXNldEluZGV4IiwiZm9vdGVyRm9udFN0eWxlIiwic3RhY2tlZCIsImNvbG9yIiwiY2FsbGJhY2siLCJ2YWx1ZSIsInZhbHVlcyIsInBhcnNlSW50IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiYm9yZGVyIiwiYmVnaW5BdFplcm8iLCJsZW5ndGgiLCJjb2xvcl9ibHVlIiwiZXZlbnRzIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJlYXNpbmciLCJvbkNvbXBsZXRlIiwiY2hhcnQiLCJmb250IiwiaGVscGVycyIsImZvbnRTdHJpbmciLCJkZWZhdWx0cyIsImdsb2JhbCIsImRlZmF1bHRGb250RmFtaWx5IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwibW9kZWwiLCJfbWV0YSIsIk9iamVjdCIsImtleXMiLCJfbW9kZWwiLCJ0b3RhbCIsIm1pZF9yYWRpdXMiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwic3RhcnRfYW5nbGUiLCJzdGFydEFuZ2xlIiwiZW5kX2FuZ2xlIiwiZW5kQW5nbGUiLCJtaWRfYW5nbGUiLCJ4IiwiY29zIiwieSIsInNpbiIsImZpbGxTdHlsZSIsIlN0cmluZyIsInJvdW5kIiwiZmlsbFRleHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBLFNBQVNBLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM5QixTQUFPQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsTUFBaUJILE1BQU1ELEdBQU4sR0FBWSxDQUE3QixDQUFYLElBQThDQSxHQUFyRDtBQUNEOztBQUVESyxFQUFFLGlCQUFGLEVB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RCxJQUFqRCxFQUF1RCxJQUF2RCxDQUZSO0FBR0VFLG1CQUFhLENBSGY7QUFJRVcsbUJBQWFuQixPQUFPb0IsYUFKdEI7QUFLRVgsdUJBQWlCVCxPQUFPb0I7QUFMMUIsS0FEVTtBQVBOLEdBRjJDO0FBbUJqRFQsV0FBUztBQUNQd0IseUJBQXFCLEtBRGQ7QUFFUFYsWUFBUTtBQUNOQyxlQUFTLEtBREg7QUFFTlIsY0FBUTtBQUNOUSxpQkFBUztBQURIO0FBRkYsS0FGRDtBQVFQQyxZQUFRO0FBQ05NLGFBQU8sQ0FBQztBQUNOWSxpQkFBUyxJQURIO0FBRU5oQixtQkFBVztBQUNUaUIsaUJBQU85QyxPQUFPK0IsWUFETDtBQUVURCx5QkFBZTlCLE9BQU8rQjtBQUZiLFNBRkw7QUFNTkMsZUFBTztBQUNOZSxvQkFBVSxrQkFBU0MsS0FBVCxFQUFnQnpELEtBQWhCLEVBQXVCMEQsTUFBdkIsRUFBK0I7QUFDeEMsZ0JBQUdDLFNBQVNGLEtBQVQsS0FBbUIsSUFBdEIsRUFBMkI7QUFDekIscUJBQU8sTUFBTUEsTUFBTUcsUUFBTixHQUFpQkMsT0FBakIsQ0FBeUIsdUJBQXpCLEVBQWtELEdBQWxELENBQWI7QUFDRCxhQUZELE1BRU87QUFDTCxxQkFBTyxNQUFNSixLQUFiO0FBQ0Q7QUFDRjtBQVBNO0FBTkQsT0FBRCxDQUREO0FBaUJScEIsYUFBUSxDQUFFO0FBQ1JDLG1CQUFZO0FBQ1ZILG1CQUFVO0FBREE7QUFESixPQUFGO0FBakJBO0FBUkQ7QUFuQndDLENBQW5ELEUiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL2NoYXJ0c19pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyMjQ4NGM4OTQ2ZjZmM2VhMTE3ZCIsIi8vIEhlbHBlciBGdW5jdGlvbnNcbmZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG4kKCcuZG91Z2hudXQtY2hhcnQnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICBsZXQgY3R4ID0gZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpXG4gIGxldCB2YWx1ZTEgPSBlbGVtZW50LmRhdGFzZXQucGVyY2VudFxuICBsZXQgdmFsdWUyID0gMTAwIC0gdmFsdWUxXG4gIGxldCBwaWVfY29sb3IgPSAnJ1xuXG4gIHN3aXRjaCh0cnVlKSB7XG4gICAgY2FzZSB2YWx1ZTEgPD0gMjU6XG4gICAgcGllX2NvbG9yID0gY29sb3JzLmNvbG9yX2RhbmdlclxuICAgIGJyZWFrO1xuICAgIGNhc2UgdmFsdWUxIDw9IDUwOlxuICAgIHBpZV9jb2xvciA9IGNvbG9ycy5jb2xvcl93YXJuaW5nXG4gICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICBwaWVfY29sb3IgPSBjb2xvcnMuY29sb3Jfc3VjY2Vzc1xuICB9XG5cbiAgbmV3IENoYXJ0KGN0eCwge1xuICAgIHR5cGU6ICdwaWUnLFxuICAgIGRhdGE6IHtcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBkYXRhOiBbdmFsdWUxLCB2YWx1ZTJdLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbcGllX2NvbG9yLCBjb2xvcnMuY29sb3JfYmddXG4gICAgICB9XVxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgdG9vbHRpcHM6IHsgZW5hYmxlZDogZmFsc2UgfSxcbiAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDg1XG4gICAgfVxuICB9KVxufSk7XG5cbiQoJy5zdGF0cy1jaGFydCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gIGxldCBjdHggPSBlbGVtZW50LmdldENvbnRleHQoJzJkJylcbiAgbGV0IHN0YXRzX2RhdGEgPSBbXVxuXG4gIGZvciAodmFyIGkgPSA2OyBpID49IDA7IGktLSkge1xuICAgIHN0YXRzX2RhdGEucHVzaChnZXRSYW5kb21JbnQoMTAwLCAzMDApKTtcbiAgfVxuXG4gIG5ldyBDaGFydChjdHgsIHtcbiAgICB0eXBlOiAnbGluZScsXG4gICAgZGF0YToge1xuICAgICAgbGFiZWxzOlxuICAgICAgW1xuICAgICAgXCIwMVwiLCBcIjAyXCIsIFwiMDNcIiwgXCIwNFwiLFxuICAgICAgXCIwNVwiLCBcIjA2XCIsIFwiMDdcIiwgXCIwOFwiXG4gICAgICBdLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGRhdGE6IHN0YXRzX2RhdGEsXG4gICAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgICBib3JkZXJDb2xvcjogY29sb3JzLmNvbG9yX3ByaW1hcnksXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTAzLCAxMTYsIDIyMywuMTIpJyxcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvcl9wcmltYXJ5XG4gICAgICB9XVxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgZWxlbWVudHM6IHsgcG9pbnQ6IHsgcmFkaXVzOiAwIH0gfSxcbiAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICBsYWJlbHM6IHsgZGlzcGxheTogZmFsc2UgfVxuICAgICAgfSxcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgemVyb0xpbmVDb2xvcjogY29sb3JzLmJvcmRlcl9jb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHplcm9MaW5lQ29sb3I6IGNvbG9ycy5ib3JkZXJfY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG5cbm5ldyBDaGFydCgkKFwiI2Rhc2hib2FyZC1jaGFydFwiKVswXS5nZXRDb250ZXh0KCcyZCcpLCB7XG4gIHR5cGU6ICdsaW5lJyxcbiAgZGF0YToge1xuICAgIGxhYmVsczpcbiAgICBbXG4gICAgXCIwMVwiLCBcIjAyXCIsIFwiMDNcIiwgXCIwNFwiLFxuICAgIFwiMDVcIiwgXCIwNlwiLCBcIjA3XCIsIFwiMDhcIixcbiAgICBcIjA5XCIsIFwiMTBcIiwgXCIxMVwiLCBcIjEyXCIsXG4gICAgXCIxM1wiXG4gICAgXSxcbiAgICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnU2FsZXMnLFxuICAgICAgZGF0YTogWzIwMDAsIDEwMDAsIDIwMDAsIDQwMDAsIDUwMDAsIDYwMDAsIDgwMDAsIDQwMDAsIDUwMDAsIDYwMDAsIDIwMDAsIDMwMDAsIDQwMDBdLFxuICAgICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgICBib3JkZXJDb2xvcjogY29sb3JzLmNvbG9yX3ByaW1hcnksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvcl9iZyxcbiAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JfcHJpbWFyeVxuICAgIH1cbiAgICBdXG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgbGFiZWxzOiB7IGRpc3BsYXk6IGZhbHNlIH1cbiAgICB9LFxuICAgIHRvb2x0aXBzOiB7XG4gICAgICBtb2RlOiAnaW5kZXgnLFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGZvb3RlcjogZnVuY3Rpb24odG9vbHRpcEl0ZW1zLCBkYXRhKSB7XG4gICAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgICAgdG9vbHRpcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24odG9vbHRpcEl0ZW0pIHtcbiAgICAgICAgICAgIHN1bSArPSBkYXRhLmRhdGFzZXRzW3Rvb2x0aXBJdGVtLmRhdGFzZXRJbmRleF0uZGF0YVt0b29sdGlwSXRlbS5pbmRleF07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuICdTdW06ICcgKyBzdW07XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZm9vdGVyRm9udFN0eWxlOiAnbm9ybWFsJ1xuICAgIH0sXG4gICAgc2NhbGVzOiB7XG4gICAgICB5QXhlczogW3tcbiAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgY29sb3I6IGNvbG9ycy5ib3JkZXJfY29sb3IsXG4gICAgICAgICAgemVyb0xpbmVDb2xvcjogY29sb3JzLmJvcmRlcl9jb2xvcixcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIHZhbHVlcykge1xuICAgICAgICAgIGlmKHBhcnNlSW50KHZhbHVlKSA+PSAxMDAwKXtcbiAgICAgICAgICAgIHJldHVybiAnJCcgKyB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICckJyArIHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dLFxuICAgIHhBeGVzOiBbe1xuICAgICAgZ3JpZExpbmVzIDoge1xuICAgICAgICBkaXNwbGF5IDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBib3JkZXI6IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ib3JkZXJfY29sb3IsXG4gICAgICB9LFxuICAgICAgdGlja3M6IHtcbiAgICAgICAgYmVnaW5BdFplcm86IHRydWVcbiAgICAgIH1cbiAgICB9XVxuICB9XG59XG59KTtcblxuaWYgKCQoXCIjdmlzaXRvcnMtY2hhcnRcIikubGVuZ3RoKSB7XG4gIG5ldyBDaGFydCgkKCcjdmlzaXRvcnMtY2hhcnQnKSwge1xuICAgIHR5cGU6ICdwaWUnLFxuICAgIGRhdGE6IHtcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBkYXRhOiBbMTIsIDMwLCAxNSwgMTMsIDIwLCAxMF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtjb2xvcnMuY29sb3JfYmcsIGNvbG9ycy5jb2xvcl9wcmltYXJ5LCBjb2xvcnMuY29sb3Jfd2FybmluZywgY29sb3JzLmNvbG9yX2RhbmdlciwgY29sb3JzLmNvbG9yX2JsdWUsIGNvbG9ycy5jb2xvcl9zdWNjZXNzXVxuICAgICAgfV1cbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHRvb2x0aXBzOiB7IGVuYWJsZWQ6IHRydWUgfSxcbiAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDQwLFxuICAgICAgZXZlbnRzOiBmYWxzZSxcbiAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgY3R4ID0gdGhpcy5jaGFydC5jdHg7XG4gICAgICAgICAgY3R4LmZvbnQgPSBDaGFydC5oZWxwZXJzLmZvbnRTdHJpbmcoQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250RmFtaWx5LCAnbm9ybWFsJywgQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250RmFtaWx5KTtcbiAgICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICdib3R0b20nO1xuXG4gICAgICAgICAgdGhpcy5kYXRhLmRhdGFzZXRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGFzZXQpIHtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhc2V0LmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFyIG1vZGVsID0gZGF0YXNldC5fbWV0YVtPYmplY3Qua2V5cyhkYXRhc2V0Ll9tZXRhKVswXV0uZGF0YVtpXS5fbW9kZWwsXG4gICAgICAgICAgICAgIHRvdGFsID0gZGF0YXNldC5fbWV0YVtPYmplY3Qua2V5cyhkYXRhc2V0Ll9tZXRhKVswXV0udG90YWwsXG4gICAgICAgICAgICAgIG1pZF9yYWRpdXMgPSBtb2RlbC5pbm5lclJhZGl1cyArIChtb2RlbC5vdXRlclJhZGl1cyAtIG1vZGVsLmlubmVyUmFkaXVzKS8yLFxuICAgICAgICAgICAgICBzdGFydF9hbmdsZSA9IG1vZGVsLnN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgIGVuZF9hbmdsZSA9IG1vZGVsLmVuZEFuZ2xlLFxuICAgICAgICAgICAgICBtaWRfYW5nbGUgPSBzdGFydF9hbmdsZSArIChlbmRfYW5nbGUgLSBzdGFydF9hbmdsZSkvMjtcblxuICAgICAgICAgICAgICB2YXIgeCA9IG1pZF9yYWRpdXMgKiBNYXRoLmNvcyhtaWRfYW5nbGUpO1xuICAgICAgICAgICAgICB2YXIgeSA9IG1pZF9yYWRpdXMgKiBNYXRoLnNpbihtaWRfYW5nbGUpO1xuXG4gICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICAgICAgICAgIGlmIChpID09IDApe1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzQ0NCc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSBTdHJpbmcoTWF0aC5yb3VuZChkYXRhc2V0LmRhdGFbaV0vdG90YWwqMTAwKSkgKyBcIiVcIjtcblxuICAgICAgICAgIC8vIERpc3BsYXkgcGVyY2VudCBpbiBhbm90aGVyIGxpbmUsIGxpbmUgYnJlYWsgZG9lc24ndCB3b3JrIGZvciBmaWxsVGV4dFxuICAgICAgICAgIGN0eC5maWxsVGV4dChwZXJjZW50LCBtb2RlbC54ICsgeCwgbW9kZWwueSArIHkgKyAxMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxubmV3IENoYXJ0KCQoXCIjbWVtYmVycy1jaGFydFwiKVswXS5nZXRDb250ZXh0KCcyZCcpLCB7XG4gIHR5cGU6ICdiYXInLFxuICBkYXRhOiB7XG4gICAgbGFiZWxzOlxuICAgIFtcbiAgICBcIjAxXCIsIFwiMDJcIiwgXCIwM1wiLCBcIjA0XCIsXG4gICAgXCIwNVwiLCBcIjA2XCIsIFwiMDdcIiwgXCIwOFwiLFxuICAgIFwiMDlcIiwgXCIxMFwiLCBcIjExXCIsIFwiMTJcIlxuICAgIF0sXG4gICAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ1NhbGVzJyxcbiAgICAgIGRhdGE6IFs0MDEsIDM2MiwgMjEwLCA4NSwgMTA1LCAxMjUsIDkwLCAxNTAsIDU0MCwgOTgwLCAxMTAyLCAxMTUwXSxcbiAgICAgIGJvcmRlcldpZHRoOiA1LFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5jb2xvcl9wcmltYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JfcHJpbWFyeSxcbiAgICB9XG4gICAgXVxuICB9LFxuICBvcHRpb25zOiB7XG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgbGVnZW5kOiB7XG4gICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgc2NhbGVzOiB7XG4gICAgICB5QXhlczogW3tcbiAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgY29sb3I6IGNvbG9ycy5ib3JkZXJfY29sb3IsXG4gICAgICAgICAgemVyb0xpbmVDb2xvcjogY29sb3JzLmJvcmRlcl9jb2xvcixcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIHZhbHVlcykge1xuICAgICAgICAgIGlmKHBhcnNlSW50KHZhbHVlKSA+PSAxMDAwKXtcbiAgICAgICAgICAgIHJldHVybiAnJCcgKyB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICckJyArIHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dLFxuICAgIHhBeGVzIDogWyB7XG4gICAgICBncmlkTGluZXMgOiB7XG4gICAgICAgIGRpc3BsYXkgOiBmYWxzZVxuICAgICAgfVxuICAgIH0gXVxuICB9XG59XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2hhcnRzX2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
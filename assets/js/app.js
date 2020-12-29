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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
module.exports = __webpack_require__(12);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

$(function () {
  $('[data-toggle="tooltip"]').tooltip({ container: 'body' });
});
$(function () {
  $('[data-toggle="popover"]').popover();
});

$('.dropdown.notifications ul a.nav-link').click(function (e) {
  e.stopPropagation();
  $(this).tab('show');
});

if (document.getElementById('financial-sales')) {
  new Chart($("#financial-sales")[0].getContext('2d'), {
    type: 'line',
    data: {
      labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"],
      datasets: [{
        label: 'Invoices',
        data: [2000, 1000, 2000, 4000, 5000, 6000, 8000, 4000, 5000, 6000, 2000, 3000, 4000],
        borderWidth: 2,
        borderColor: colors.color_primary,
        backgroundColor: colors.color_bg,
        pointBackgroundColor: colors.color_primary
      }, {
        label: 'Earnings',
        data: [1242, 4432, 1331, 1222, 3433, 6332, 2211, 2453, 5431, 1213, 4222, 4000, 5000],
        borderWidth: 2,
        borderColor: colors.color_success,
        backgroundColor: colors.color_bg_success,
        pointBackgroundColor: colors.color_success
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
          stacked: false,
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
            beginAtZero: false
          }
        }]
      }
    }
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjI0ODRjODk0NmY2ZjNlYTExN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zbmFja2Jhci5zY3NzPzA0ZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvdmVuZG9yLWJvb3RzdHJhcC1kYXRhdGFibGVzLnNjc3M/MTg2ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy92ZW5kb3ItYm9vdHN0cmFwLWRhdGVwaWNrZXIuc2Nzcz9mOTEyIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3ZlbmRvci1ib290c3RyYXAtc3dpdGNoLnNjc3M/NjUxYSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy92ZW5kb3ItZHJhZ3VsYS5zY3NzP2ExODMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvdmVuZG9yLWZ1bGxjYWxlbmRhci5zY3NzP2Q5MTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvdmVuZG9yLW1vcnJpcy5zY3NzPzdhNWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvdmVuZG9yLXN1bW1lcm5vdGUuc2Nzcz80ZmZjIl0sIm5hbWVzIjpbIiQiLCJ0b29sdGlwIiwiY29udGFpbmVyIiwicG9wb3ZlciIsImNsaWNrIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInRhYiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJDaGFydCIsImdldENvbnRleHQiLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwiY29sb3JzIiwiY29sb3JfcHJpbWFyeSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yX2JnIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcl9zdWNjZXNzIiwiY29sb3JfYmdfc3VjY2VzcyIsIm9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwibGVnZW5kIiwiZGlzcGxheSIsInRvb2x0aXBzIiwibW9kZSIsImNhbGxiYWNrcyIsImZvb3RlciIsInRvb2x0aXBJdGVtcyIsInN1bSIsImZvckVhY2giLCJ0b29sdGlwSXRlbSIsImRhdGFzZXRJbmRleCIsImluZGV4IiwiZm9vdGVyRm9udFN0eWxlIiwic2NhbGVzIiwieUF4ZXMiLCJzdGFja2VkIiwiZ3JpZExpbmVzIiwiY29sb3IiLCJib3JkZXJfY29sb3IiLCJ6ZXJvTGluZUNvbG9yIiwidGlja3MiLCJjYWxsYmFjayIsInZhbHVlIiwidmFsdWVzIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJ4QXhlcyIsImJvcmRlciIsImJlZ2luQXRaZXJvIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REFBLEVBQUUsWUFBTTtBQUFFQSxJQUFFLHlCQUFGLEVBQTZCQyxPQUE3QixDQUFxQyxFQUFFQyxXQUFXLE1BQWIsRUFBckM7QUFBNkQsQ0FBdkU7QUFDQUYsRUFBRSxZQUFNO0FBQUVBLElBQUUseUJBQUYsRUFBNkJHLE9BQTdCO0FBQXdDLENBQWxEOztBQUVBSCxFQUFFLHVDQUFGLEVBQTJDSSxLQUEzQyxDQUFpRCxVQUFVQyxDQUFWLEVBQWE7QUFDNURBLElBQUVDLGVBQUY7QUFD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TmdCLG1CQUFPMUIsT0FBTzJCO0FBRlIsV0FKRjtBQVFORSxpQkFBTztBQUNMUyx5QkFBYTtBQURSO0FBUkQsU0FBRDtBQWpCQztBQW5CRDtBQTdCMEMsR0FBckQ7QUFnRkQsQzs7Ozs7O0FDM0ZELHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIyNDg0Yzg5NDZmNmYzZWExMTdkIiwiJCgoKSA9PiB7ICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKHsgY29udGFpbmVyOiAnYm9keScgfSkgfSk7XG4kKCgpID0+IHsgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKSB9KTtcblxuJCgnLmRyb3Bkb3duLm5vdGlmaWNhdGlvbnMgdWwgYS5uYXYtbGluaycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICQodGhpcykudGFiKCdzaG93Jyk7XG59KTtcblxuXG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluYW5jaWFsLXNhbGVzJykpIHtcbiAgbmV3IENoYXJ0KCQoXCIjZmluYW5jaWFsLXNhbGVzXCIpWzBdLmdldENvbnRleHQoJzJkJyksIHtcbiAgICB0eXBlOiAnbGluZScsXG4gICAgZGF0YToge1xuICAgICAgbGFiZWxzOlxuICAgICAgW1xuICAgICAgXCIwMVwiLCBcIjAyXCIsIFwiMDNcIiwgXCIwNFwiLFxuICAgICAgXCIwNVwiLCBcIjA2XCIsIFwiMDdcIiwgXCIwOFwiLFxuICAgICAgXCIwOVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiLFxuICAgICAgXCIxM1wiXG4gICAgICBdLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdJbnZvaWNlcycsXG4gICAgICAgIGRhdGE6IFsyMDAwLCAxMDAwLCAyMDAwLCA0MDAwLCA1MDAwLCA2MDAwLCA4MDAwLCA0MDAwLCA1MDAwLCA2MDAwLCAyMDAwLCAzMDAwLCA0MDAwXSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuY29sb3JfcHJpbWFyeSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JfYmcsXG4gICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JfcHJpbWFyeVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdFYXJuaW5ncycsXG4gICAgICAgIGRhdGE6IFsxMjQyLCA0NDMyLCAxMzMxLCAxMjIyLCAzNDMzLCA2MzMyLCAyMjExLCAyNDUzLCA1NDMxLCAxMjEzLCA0MjIyLCA0MDAwLCA1MDAwXSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuY29sb3Jfc3VjY2VzcyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JfYmdfc3VjY2VzcyxcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5jb2xvcl9zdWNjZXNzXG4gICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgbGFiZWxzOiB7IGRpc3BsYXk6IGZhbHNlIH1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBtb2RlOiAnaW5kZXgnLFxuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBmb290ZXI6IGZ1bmN0aW9uKHRvb2x0aXBJdGVtcywgZGF0YSkge1xuICAgICAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgICAgICB0b29sdGlwSXRlbXMuZm9yRWFjaChmdW5jdGlvbih0b29sdGlwSXRlbSkge1xuICAgICAgICAgICAgICBzdW0gKz0gZGF0YS5kYXRhc2V0c1t0b29sdGlwSXRlbS5kYXRhc2V0SW5kZXhdLmRhdGFbdG9vbHRpcEl0ZW0uaW5kZXhdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gJ1N1bTogJyArIHN1bTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXJGb250U3R5bGU6ICdub3JtYWwnXG4gICAgICB9LFxuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgIHN0YWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgY29sb3I6IGNvbG9ycy5ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICB6ZXJvTGluZUNvbG9yOiBjb2xvcnMuYm9yZGVyX2NvbG9yLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgdmFsdWVzKSB7XG4gICAgICAgICAgICBpZihwYXJzZUludCh2YWx1ZSkgPj0gMTAwMCl7XG4gICAgICAgICAgICAgIHJldHVybiAnJCcgKyB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAnJCcgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgeEF4ZXM6IFt7XG4gICAgICAgIGdyaWRMaW5lcyA6IHtcbiAgICAgICAgICBkaXNwbGF5IDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogY29sb3JzLmJvcmRlcl9jb2xvcixcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBiZWdpbkF0WmVybzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG4gIH1cbn0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3Mvc25hY2tiYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3MvdmVuZG9yLWJvb3RzdHJhcC1kYXRhdGFibGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zYXNzL3ZlbmRvci1ib290c3RyYXAtZGF0ZXBpY2tlci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy92ZW5kb3ItYm9vdHN0cmFwLXN3aXRjaC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy92ZW5kb3ItZHJhZ3VsYS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy92ZW5kb3ItZnVsbGNhbGVuZGFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy92ZW5kb3ItbW9ycmlzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy92ZW5kb3Itc3VtbWVybm90ZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9
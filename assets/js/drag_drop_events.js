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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),

/***/ 27:
/***/ (function(module, exports) {

var calEventStatus = [];

var isEventOverDiv = function isEventOverDiv(x, y) {

  var external_events = $('#external-events');
  var offset = external_events.offset();
  offset.right = external_events.width() + offset.left;
  offset.bottom = external_events.height() + offset.top;

  if (x >= offset.left && y >= offset.top && x <= offset.right && y <= offset.bottom) {
    return true;
  }
  return false;
};

function makeEventsDraggable() {
  $('.fc-draggable').each(function () {
    $(this).data('event', {
      title: $.trim($(this).text()),
      stick: true,
      color: $(this).data('color')
    });

    $(this).draggable({
      zIndex: 999,
      revert: true,
      revertDuration: 0
    });
    $("td").removeClass("fc-highlight");
  });
}

$('#external-events .fc-event').each(function () {
  $(this).css('background', $(this).data('color'));
  $(this).data('event', {
    title: $.trim($(this).text()),
    stick: true,
    color: $(this).data('color'),
    textColor: '#ffffff'
  });

  $(this).draggable({
    zIndex: 999,
    revert: true,
    revertDuration: 0
  });
});

$('#calendar1').fullCalendar({
  header: false,
  height: "parent",
  editable: true,
  droppable: true,
  dragRevertDuration: 0,
  eventLimit: true,
  eventClick: function eventClick(event, element) {
    $('#editEventModal').modal('show');
  },
  drop: function drop(date, jsEvent, ui) {
    if ($('.custom-control-input.drop-remove').is(':checked')) {
      $(this).remove();
    }

    if (typeof calEventStatus['calendar'] != 'undefined') {
      $(calEventStatus['calendar']).fullCalendar('removeEvents', calEventStatus['event_id']);
    }

    makeEventsDraggable();
  },
  eventReceive: function eventReceive(event) {
    makeEventsDraggable();
  },
  eventDrop: function eventDrop(event, delta, revertFunc, jsEvent, ui, view) {
    makeEventsDraggable();
  },
  eventDragStart: function eventDragStart(event, jsEvent, ui, view) {
    calEventStatus['calendar'] = '#calendar1';
    calEventStatus['event_id'] = event._id;
  },
  eventDragStop: function eventDragStop(event, jsEvent, ui, view) {

    if (isEventOverDiv(jsEvent.clientX, jsEvent.clientY)) {
      $('#calendar1').fullCalendar('removeEvents', event._id);
      var el = $("<div class='fc-event'>").appendTo('#external-events-listing').text(event.title);
      el.draggable({
        zIndex: 999,
        revert: true,
        revertDuration: 0
      });
      el.data('event', { title: event.title, id: event.id, stick: true });
    }

    calEventStatus = [];
    makeEventsDraggable();
  }
});

// $('#calendar1').fullCalendar('option', 'height', window.height);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjI0ODRjODk0NmY2ZjNlYTExN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RyYWdfZHJvcF9ldmVudHMuanMiXSwibmFtZXMiOlsiY2FsRXZlbnRTdGF0dXMiLCJpc0V2ZW50T3ZlckRpdiIsIngiLCJ5IiwiZXh0ZXJuYWxfZXZlbnRzIiwiJCIsIm9mZnNldCIsInJpZ2h0Iiwid2lkdGgiLCJsZWZ0IiwiYm90dG9tIiwiaGVpZ2h0IiwidG9wIiwibWFrZUV2ZW50c0RyYWdnYWJsZSIsImVhY2giLCJkYXRhIiwidGl0bGUiLCJ0cmltIiwidGV4dCIsInN0aWNrIiwiY29sb3IiLCJkcmFnZ2FibGUiLCJ6SW5kZXgiLCJyZXZlcnQiLCJyZXZlcnREdXJhdGlvbiIsInJlbW92ZUNsYXNzIiwiY3NzIiwidGV4dENvbG9yIiwiZnVsbENhbGVuZGFyIiwiaGVhZGVyIiwiZWRpdGFibGUiLCJkcm9wcGFibGUiLCJkcmFnUmV2ZXJ0RHVyYXRpb24iLCJldmVudExpbWl0IiwiZXZlbnRDbGljayIsImV2ZW50IiwiZWxlbWVudCIsIm1vZGFsIiwiZHJvcCIsImRhdGUiLCJqc0V2ZW50IiwidWkiLCJpcyIsInJlbW92ZSIsImV2ZW50UmVjZWl2ZSIsImV2ZW50RHJvcCIsImRlbHRhIiwicmV2ZXJ0RnVuYyIsInZpZXciLCJldmVudERyYWdTdGFydCIsIl9pZCIsImV2ZW50RHJhZ1N0b3AiLCJjbGllbnRYIiwiY2xpZW50WSIsImVsIiwiYXBwZW5kVG8iLCJpZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFD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QixNQUFNcUIsRUFBaEMsRUFBb0NyQyxPQUFPLElBQTNDLEVBQWpCO0FBQ0Q7O0FBRURuQixxQkFBaUIsRUFBakI7QUFDQWE7QUFDRDtBQTlDMEIsQ0FBN0I7O0FBaURBLG1FIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9kcmFnX2Ryb3BfZXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIyNDg0Yzg5NDZmNmYzZWExMTdkIiwidmFyIGNhbEV2ZW50U3RhdHVzID0gW107XG5cbnZhciBpc0V2ZW50T3ZlckRpdiA9IGZ1bmN0aW9uKHgsIHkpIHtcblxuICB2YXIgZXh0ZXJuYWxfZXZlbnRzID0gJCggJyNleHRlcm5hbC1ldmVudHMnICk7XG4gIHZhciBvZmZzZXQgPSBleHRlcm5hbF9ldmVudHMub2Zmc2V0KCk7XG4gIG9mZnNldC5yaWdodCA9IGV4dGVybmFsX2V2ZW50cy53aWR0aCgpICsgb2Zmc2V0LmxlZnQ7XG4gIG9mZnNldC5ib3R0b20gPSBleHRlcm5hbF9ldmVudHMuaGVpZ2h0KCkgKyBvZmZzZXQudG9wO1xuXG4gIGlmICh4ID49IG9mZnNldC5sZWZ0XG4gICAgJiYgeSA+PSBvZmZzZXQudG9wXG4gICAgJiYgeCA8PSBvZmZzZXQucmlnaHRcbiAgICAmJiB5IDw9IG9mZnNldCAuYm90dG9tKSB7IHJldHVybiB0cnVlOyB9XG4gICAgcmV0dXJuIGZhbHNlO1xuXG59XG5cblxuZnVuY3Rpb24gbWFrZUV2ZW50c0RyYWdnYWJsZSAoKSB7XG4gICQoJy5mYy1kcmFnZ2FibGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuZGF0YSgnZXZlbnQnLCB7XG4gICAgICB0aXRsZTogJC50cmltKCQodGhpcykudGV4dCgpKSxcbiAgICAgIHN0aWNrOiB0cnVlLFxuICAgICAgY29sb3I6ICQodGhpcykuZGF0YSgnY29sb3InKVxuICAgIH0pO1xuXG4gICAgJCh0aGlzKS5kcmFnZ2FibGUoe1xuICAgICAgekluZGV4OiA5OTksXG4gICAgICByZXZlcnQ6IHRydWUsXG4gICAgICByZXZlcnREdXJhdGlvbjogMFxuICAgIH0pO1xuICAgICQoXCJ0ZFwiKS5yZW1vdmVDbGFzcyhcImZjLWhpZ2hsaWdodFwiKTtcbiAgfSk7XG5cbn1cblxuJCgnI2V4dGVybmFsLWV2ZW50cyAuZmMtZXZlbnQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZCcsICQodGhpcykuZGF0YSgnY29sb3InKSk7XG4gICQodGhpcykuZGF0YSgnZXZlbnQnLCB7XG4gICAgdGl0bGU6ICQudHJpbSgkKHRoaXMpLnRleHQoKSksXG4gICAgc3RpY2s6IHRydWUsXG4gICAgY29sb3I6ICQodGhpcykuZGF0YSgnY29sb3InKSxcbiAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJ1xuICB9KTtcblxuICAkKHRoaXMpLmRyYWdnYWJsZSh7XG4gICAgekluZGV4OiA5OTksXG4gICAgcmV2ZXJ0OiB0cnVlLFxuICAgIHJldmVydER1cmF0aW9uOiAwXG4gIH0pO1xuXG59KTtcblxuJCgnI2NhbGVuZGFyMScpLmZ1bGxDYWxlbmRhcih7XG4gIGhlYWRlcjogZmFsc2UsXG4gIGhlaWdodDogXCJwYXJlbnRcIixcbiAgZWRpdGFibGU6IHRydWUsXG4gIGRyb3BwYWJsZTogdHJ1ZSxcbiAgZHJhZ1JldmVydER1cmF0aW9uOiAwLFxuICBldmVudExpbWl0OiB0cnVlLFxuICBldmVudENsaWNrOiBmdW5jdGlvbihldmVudCwgZWxlbWVudCkge1xuICAgICQoJyNlZGl0RXZlbnRNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gIH0sXG4gIGRyb3A6IGZ1bmN0aW9uKGRhdGUsIGpzRXZlbnQsIHVpKSB7XG4gICAgaWYgKCQoJy5jdXN0b20tY29udHJvbC1pbnB1dC5kcm9wLXJlbW92ZScpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2FsRXZlbnRTdGF0dXNbJ2NhbGVuZGFyJ10gIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICQoY2FsRXZlbnRTdGF0dXNbJ2NhbGVuZGFyJ10pLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJywgY2FsRXZlbnRTdGF0dXNbJ2V2ZW50X2lkJ10pO1xuICAgIH1cblxuICAgIG1ha2VFdmVudHNEcmFnZ2FibGUoKTtcbiAgfSxcbiAgZXZlbnRSZWNlaXZlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgbWFrZUV2ZW50c0RyYWdnYWJsZSgpO1xuICB9LFxuICBldmVudERyb3A6IGZ1bmN0aW9uKCBldmVudCwgZGVsdGEsIHJldmVydEZ1bmMsIGpzRXZlbnQsIHVpLCB2aWV3ICkge1xuICAgIG1ha2VFdmVudHNEcmFnZ2FibGUoKTtcbiAgfSxcbiAgZXZlbnREcmFnU3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwganNFdmVudCwgdWksIHZpZXcgKSB7XG4gICAgY2FsRXZlbnRTdGF0dXNbJ2NhbGVuZGFyJ10gPSAnI2NhbGVuZGFyMSc7XG4gICAgY2FsRXZlbnRTdGF0dXNbJ2V2ZW50X2lkJ10gPSBldmVudC5faWQ7XG4gIH0sXG4gIGV2ZW50RHJhZ1N0b3A6IGZ1bmN0aW9uKCBldmVudCwganNFdmVudCwgdWksIHZpZXcgKSB7XG5cbiAgICBpZihpc0V2ZW50T3ZlckRpdihqc0V2ZW50LmNsaWVudFgsIGpzRXZlbnQuY2xpZW50WSkpIHtcbiAgICAgICQoJyNjYWxlbmRhcjEnKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycsIGV2ZW50Ll9pZCk7XG4gICAgICB2YXIgZWwgPSAkKCBcIjxkaXYgY2xhc3M9J2ZjLWV2ZW50Jz5cIiApLmFwcGVuZFRvKCAnI2V4dGVybmFsLWV2ZW50cy1saXN0aW5nJyApLnRleHQoIGV2ZW50LnRpdGxlICk7XG4gICAgICBlbC5kcmFnZ2FibGUoe1xuICAgICAgICB6SW5kZXg6IDk5OSxcbiAgICAgICAgcmV2ZXJ0OiB0cnVlLFxuICAgICAgICByZXZlcnREdXJhdGlvbjogMFxuICAgICAgfSk7XG4gICAgICBlbC5kYXRhKCdldmVudCcsIHsgdGl0bGU6IGV2ZW50LnRpdGxlLCBpZCA6ZXZlbnQuaWQsIHN0aWNrOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGNhbEV2ZW50U3RhdHVzID0gW107XG4gICAgbWFrZUV2ZW50c0RyYWdnYWJsZSgpO1xuICB9XG59KTtcblxuLy8gJCgnI2NhbGVuZGFyMScpLmZ1bGxDYWxlbmRhcignb3B0aW9uJywgJ2hlaWdodCcsIHdpbmRvdy5oZWlnaHQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9kcmFnX2Ryb3BfZXZlbnRzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
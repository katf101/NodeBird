webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\hs\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\CodeBox\\Inflearn\\NodeBird\\front\\components\\FollowButton.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading;

  if (post.User.id === me.id) {
    return null;
  }

  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === post.User.id;
  });
  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, isFollowing ? "언팔로우" : "팔로우");
};

_s(FollowButton, "oQRGZ4+MgpAjZ6p1zzrPk3lOofY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZm9sbG93TG9hZGluZyIsInVuZm9sbG93TG9hZGluZyIsIlVzZXIiLCJpZCIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJ2Iiwib25DbGlja0J1dHRvbiIsInVzZUNhbGxiYWNrIiwidHlwZSIsIlVORk9MTE9XX1JFUVVFU1QiLCJkYXRhIiwiRk9MTE9XX1JFUVVFU1QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBYztFQUFBOztFQUFBLElBQVhDLElBQVcsUUFBWEEsSUFBVztFQUNqQyxJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztFQUNBLG1CQUErQ0MsK0RBQVcsQ0FDeEQsVUFBQ0MsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0MsSUFBakI7RUFBQSxDQUR3RCxDQUExRDtFQUFBLElBQVFDLEVBQVIsZ0JBQVFBLEVBQVI7RUFBQSxJQUFZQyxhQUFaLGdCQUFZQSxhQUFaO0VBQUEsSUFBMkJDLGVBQTNCLGdCQUEyQkEsZUFBM0I7O0VBR0EsSUFBSVIsSUFBSSxDQUFDUyxJQUFMLENBQVVDLEVBQVYsS0FBaUJKLEVBQUUsQ0FBQ0ksRUFBeEIsRUFBNEI7SUFDMUIsT0FBTyxJQUFQO0VBQ0Q7O0VBQ0QsSUFBTUMsV0FBVyxHQUFHTCxFQUFILGFBQUdBLEVBQUgsdUJBQUdBLEVBQUUsQ0FBRU0sVUFBSixDQUFlQyxJQUFmLENBQW9CLFVBQUNDLENBQUQ7SUFBQSxPQUFPQSxDQUFDLENBQUNKLEVBQUYsS0FBU1YsSUFBSSxDQUFDUyxJQUFMLENBQVVDLEVBQTFCO0VBQUEsQ0FBcEIsQ0FBcEI7RUFDQSxJQUFNSyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUN0QyxJQUFJTCxXQUFKLEVBQWlCO01BQ2ZWLFFBQVEsQ0FBQztRQUNQZ0IsSUFBSSxFQUFFQywrREFEQztRQUVQQyxJQUFJLEVBQUVuQixJQUFJLENBQUNTLElBQUwsQ0FBVUM7TUFGVCxDQUFELENBQVI7SUFJRCxDQUxELE1BS087TUFDTFQsUUFBUSxDQUFDO1FBQ1BnQixJQUFJLEVBQUVHLDZEQURDO1FBRVBELElBQUksRUFBRW5CLElBQUksQ0FBQ1MsSUFBTCxDQUFVQztNQUZULENBQUQsQ0FBUjtJQUlEO0VBQ0YsQ0FaZ0MsRUFZOUIsQ0FBQ0MsV0FBRCxDQVo4QixDQUFqQztFQWNBLE9BQ0UsTUFBQywyQ0FBRDtJQUFRLE9BQU8sRUFBRUosYUFBYSxJQUFJQyxlQUFsQztJQUFtRCxPQUFPLEVBQUVPLGFBQTVEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDR0osV0FBVyxHQUFHLE1BQUgsR0FBWSxLQUQxQixDQURGO0FBS0QsQ0E1QkQ7O0dBQU1aLFk7VUFDYUcsdUQsRUFDOEJDLHVEOzs7S0FGM0NKLFk7QUE4Qk5BLFlBQVksQ0FBQ3NCLFNBQWIsR0FBeUI7RUFDdkJyQixJQUFJLEVBQUVzQixpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURBLENBQXpCO0FBSWV6QiwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNzEwMTRmMDI5NWEzZjUzZWM0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEZPTExPV19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lLCBmb2xsb3dMb2FkaW5nLCB1bmZvbGxvd0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS51c2VyXHJcbiAgKTtcclxuICBpZiAocG9zdC5Vc2VyLmlkID09PSBtZS5pZCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKTtcclxuICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKGlzRm9sbG93aW5nKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbaXNGb2xsb3dpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gbG9hZGluZz17Zm9sbG93TG9hZGluZyB8fCB1bmZvbGxvd0xvYWRpbmd9IG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259PlxyXG4gICAgICB7aXNGb2xsb3dpbmcgPyBcIuyWuO2MlOuhnOyasFwiIDogXCLtjJTroZzsmrBcIn1cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
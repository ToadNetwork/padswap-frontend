'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var reactPopper = require('react-popper');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get__default['default'](theme, path, fallback);
}; };

var rotate$1 = styled.keyframes(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Svg = styled__default['default'].svg(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$V, templateObject_2$o, templateObject_3$b;

var Icon$1g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space, styledSystem.typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$U;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$6 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$3 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var _a$4, _b$1;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$6.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a$4[scales$6.SM] = {
        height: "38px",
        padding: "0 16px",
    },
    _a$4[scales$6.XS] = {
        height: "35px",
        fontSize: "14px",
        padding: "0 16px",
    },
    _a$4);
var styleVariants$2 = (_b$1 = {},
    _b$1[variants$3.PRIMARY] = {
        background: "linear-gradient( 51deg ,rgb(159 68 228) 0,rgb(75 205 255) 51%,rgb(159 68 228));",
        backgroundSize: "200%",
        transition: "0.5s",
        opacity: "1 !important",
        backgroundPosition: "bottom left",
        textTransform: "uppercase",
        color: "white",
        ":hover": {
            backgroundPosition: "top right",
        },
        ":disabled": {
            color: "white",
            backgroundColor: "transparent",
        },
    },
    _b$1[variants$3.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$1[variants$3.TERTIARY] = {
        backgroundColor: "card",
        height: "38px",
        borderRadius: "11px",
        boxShadow: "none",
        color: "primary",
    },
    _b$1[variants$3.SUBTLE] = {
        backgroundColor: "rgb(255 255 255 / 12%)",
        color: "white",
    },
    _b$1[variants$3.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b$1[variants$3.SUCCESS] = {
        backgroundColor: "#78aaff",
        color: "white",
    },
    _b$1[variants$3.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$1);

var getDisabledStyles = function (_a) {
    var $isLoading = _a.$isLoading, theme = _a.theme;
    if ($isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled__default['default'].button(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$1,
}), styledSystem.variant({
    variants: styleVariants$2,
}), styledSystem.layout, styledSystem.space);
var templateObject_1$T;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return (React__default['default'].createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default['default'].createElement(React__default['default'].Fragment, null,
            React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$3.PRIMARY,
    scale: scales$6.MD,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$S;

var Icon$1c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$18 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$17 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$16 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$13 = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default['default'].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default['default'].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0967 17.8521L7.87565 20.2891C6.91907 20.8414 5.69589 20.5136 5.1436 19.557L0.999729 12.3796C0.447444 11.4231 0.775193 10.1999 1.73178 9.64759L6.31754 7C6.53486 6.87453 6.76593 6.79448 6.99977 6.75691V6C6.99977 4.89543 7.8952 4 8.99977 4H14.9998C16.1043 4 16.9998 4.89543 16.9998 6V6.73545C17.299 6.75379 17.5986 6.83993 17.8759 7L22.4616 9.64759C23.4182 10.1999 23.746 11.4231 23.1937 12.3796L19.0498 19.557C18.4975 20.5136 17.2743 20.8414 16.3178 20.2891L12.0967 17.8521ZM8.99977 6L14.9998 6L14.9998 7.98154L11.2363 14.5H8.99977L8.99977 6ZM6.99977 14.5L6.99977 8.91551L2.73178 11.3796L6.87565 18.557L10.4386 16.5H8.99977C7.8952 16.5 6.99977 15.6046 6.99977 14.5ZM16.8759 8.73205L21.4616 11.3796L17.3178 18.557L12.732 15.9094L16.8759 8.73205Z" })));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React__default['default'].createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React__default['default'].createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React__default['default'].createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React__default['default'].createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React__default['default'].createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M15.6772 2.8668C15.9878 1.97095 15.2658 1.05469 14.2495 1.05469C13.4213 1.05469 12.75 1.67612 12.75 2.4427L12.75 5.07933C12.75 5.61801 13.2217 6.05469 13.8037 6.05469C14.2615 6.05469 14.667 5.78094 14.8069 5.37734L15.6772 2.8668Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M9.32279 2.8668C9.01225 1.97095 9.73416 1.05469 10.7505 1.05469C11.5787 1.05469 12.25 1.67612 12.25 2.4427L12.25 5.07934C12.25 5.61801 11.7783 6.05469 11.1963 6.05469C10.7385 6.05469 10.333 5.78094 10.1931 5.37734L9.32279 2.8668Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M10.825 1.26941C11.1413 1.50339 10.6373 1.71436 10.293 2.17982C9.94869 2.64527 9.89449 3.18896 9.57817 2.95498C9.26185 2.72101 9.32403 2.18322 9.66832 1.71776C10.0126 1.2523 10.5086 1.03544 10.825 1.26941Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M14.6507 1.39423C14.8957 1.70211 14.3543 1.77544 13.9012 2.13593C13.4482 2.49642 13.2551 3.00755 13.0102 2.69968C12.7652 2.3918 12.9644 1.88843 13.4174 1.52794C13.8705 1.16746 14.4057 1.08636 14.6507 1.39423Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M10.3026 1.54788C10.4525 1.65871 10.1853 1.79706 9.98717 2.06492C9.78903 2.33278 9.73495 2.62873 9.58511 2.51789C9.43528 2.40706 9.49314 2.11391 9.69127 1.84605C9.88941 1.57819 10.1528 1.43705 10.3026 1.54788Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M14.0738 1.5278C14.1899 1.67363 13.896 1.73812 13.6353 1.94557C13.3746 2.15302 13.2458 2.42489 13.1297 2.27905C13.0137 2.13322 13.1454 1.86503 13.4061 1.65758C13.6668 1.45012 13.9578 1.38196 14.0738 1.5278Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M13.406 5.80534C13.1769 5.64322 13.6402 5.49916 14.0299 5.10944C14.4196 4.71971 14.4298 4.07338 14.6827 4.32626C14.9356 4.57915 14.7916 5.0668 14.4019 5.45652C14.0122 5.84624 13.6351 5.96747 13.406 5.80534Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M10.6248 5.80534C10.3957 5.64322 10.8589 5.49916 11.2486 5.10944C11.6383 4.71971 11.6486 4.07338 11.9015 4.32626C12.1543 4.57915 12.0103 5.0668 11.6206 5.45652C11.2309 5.84624 10.8538 5.96747 10.6248 5.80534Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M13.9914 10.3006C12.9839 8.40915 12.4375 6.30469 12.4375 6.30469C12.4375 6.30469 11.9087 8.34165 10.9321 10.2086C10.6414 11.6927 9.56271 12.9024 8.10162 13.3682C6.2379 13.9624 4.40451 13.1384 3.73966 11.239C3.00517 10.5247 2.41808 9.75079 2.125 9.15553V10.3668C2.125 14.1503 3.02673 17.8564 4.72554 21.0547H20.1495C21.8483 17.8564 22.75 14.1503 22.75 10.3668V9.15553C22.4628 9.73876 21.8934 10.4935 21.1797 11.1956C20.5277 13.1259 18.6807 13.967 16.8028 13.3682C15.372 12.912 14.3079 11.7426 13.9914 10.3006Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.7881 7.51367C13.0461 8.29103 13.4582 9.39262 14.0101 10.4296C14.2401 11.4788 14.8691 12.3823 15.7478 12.9675L14.8711 21.0453L12.4716 21.026L6.31499 21.0756C5.03757 17.5852 4.57523 15.3977 4.04834 11.8082C4.82141 13.3685 6.48748 14.0096 8.17878 13.4698C9.62537 13.0081 10.6933 11.8093 10.9812 10.3385C11.509 9.3285 11.9046 8.26831 12.1552 7.51367H12.7881Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.335 21.0354L10.6112 11.4121C10.1532 12.3105 9.37201 13.0219 8.40008 13.3927C8.66771 15.748 9.05381 17.902 9.86757 21.0472L11.335 21.0354ZM8.91436 21.0549C8.26697 18.1715 7.86567 16.0604 7.58788 13.6114C6.85387 13.7286 6.14425 13.6244 5.53223 13.3211C5.85194 15.8033 6.40755 18.9391 7.32573 21.0677L8.91436 21.0549Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1731 9.68799C11.1115 9.81472 11.0477 9.94136 10.982 10.0672C10.6941 11.538 9.62616 12.7368 8.17957 13.1985C6.33435 13.7874 4.51917 12.9708 3.86091 11.0883C3.82538 11.0537 3.79019 11.019 3.75537 10.9842C3.76298 11.1884 3.78916 11.3929 3.8348 11.5958C4.24757 13.4306 6.09537 14.4351 8.21827 13.7576C10.1825 13.1307 11.3382 11.3971 11.1731 9.68799Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8289 9.68799C13.8905 9.81475 13.9542 9.94142 14.02 10.0673C14.3079 11.5381 15.3758 12.7369 16.8224 13.1986C18.6677 13.7875 20.4828 12.9709 21.1411 11.0884C21.1766 11.0538 21.2118 11.0191 21.2466 10.9843C21.239 11.1885 21.2128 11.393 21.1672 11.5959C20.7544 13.4308 18.9066 14.4353 16.7837 13.7578C14.8194 13.1309 13.6636 11.3971 13.8289 9.68799Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M16.25 7.99219C16.25 9.80885 14.5431 11.0547 12.4375 11.0547C10.3319 11.0547 8.625 9.80885 8.625 7.99219C8.625 6.17553 10.3319 4.92969 12.4375 4.92969C14.5431 4.92969 16.25 6.17553 16.25 7.99219Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M14.5349 6.09354C14.807 7.1091 13.4021 6.71163 11.9077 7.11205C10.4134 7.51246 9.39541 8.55914 9.12329 7.54357C8.85117 6.52801 9.87598 5.50694 11.3704 5.10652C12.8647 4.70611 14.2628 5.07797 14.5349 6.09354Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M11.0893 10.2853C10.7875 9.70556 11.9478 9.89409 13.237 9.49295C14.5262 9.09181 15.3014 7.75528 15.5484 8.54928C15.7955 9.34329 14.9187 10.2079 13.6295 10.609C12.3403 11.0102 11.3911 10.865 11.0893 10.2853Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M12.979 5.80657C13.1079 6.28763 12.3191 6.1324 11.4591 6.36283C10.5992 6.59326 9.99366 7.1221 9.86476 6.64104C9.73586 6.15998 10.3446 5.64328 11.2046 5.41284C12.0646 5.18241 12.8501 5.32552 12.979 5.80657Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M11.7222 8.09327C11.7222 8.76484 11.4227 9.01955 11.0533 9.01955C10.6838 9.01955 10.3843 8.76484 10.3843 8.09327C10.3843 7.4217 10.6838 7.16699 11.0533 7.16699C11.4227 7.16699 11.7222 7.4217 11.7222 8.09327Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M11.7222 7.94581C11.7222 8.61738 11.4227 8.87209 11.0533 8.87209C10.6838 8.87209 10.3843 8.61738 10.3843 7.94581C10.3843 7.27424 10.6838 7.01953 11.0533 7.01953C11.4227 7.01953 11.7222 7.27424 11.7222 7.94581Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M11.4119 7.41061C11.4587 7.67736 11.217 7.57296 10.9599 7.67813C10.7028 7.78331 10.5276 8.05822 10.4808 7.79148C10.434 7.52473 10.6103 7.25654 10.8674 7.15136C11.1245 7.04619 11.3651 7.14386 11.4119 7.41061Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M10.796 8.61486C10.7456 8.421 10.9921 8.50242 11.2088 8.3668C11.4256 8.23119 11.5783 7.83458 11.6194 8.10027C11.6605 8.36596 11.4909 8.60461 11.2742 8.74023C11.0575 8.87584 10.8465 8.80873 10.796 8.61486Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M14.1924 8.09327C14.1924 8.76484 13.8929 9.01955 13.5235 9.01955C13.154 9.01955 12.8545 8.76484 12.8545 8.09327C12.8545 7.4217 13.154 7.16699 13.5235 7.16699C13.8929 7.16699 14.1924 7.4217 14.1924 8.09327Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M14.1924 7.94581C14.1924 8.61738 13.8929 8.87209 13.5235 8.87209C13.154 8.87209 12.8545 8.61738 12.8545 7.94581C12.8545 7.27424 13.154 7.01953 13.5235 7.01953C13.8929 7.01953 14.1924 7.27424 14.1924 7.94581Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M13.8821 7.41061C13.9289 7.67736 13.6872 7.57296 13.4301 7.67813C13.173 7.78331 12.9978 8.05822 12.951 7.79148C12.9042 7.52473 13.0805 7.25654 13.3376 7.15136C13.5947 7.04619 13.8353 7.14386 13.8821 7.41061Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M13.2663 8.61486C13.2158 8.421 13.4623 8.50242 13.6791 8.3668C13.8958 8.23119 14.0485 7.83458 14.0896 8.10027C14.1307 8.36596 13.9612 8.60461 13.7444 8.74023C13.5277 8.87584 13.3167 8.80873 13.2663 8.61486Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M24.3751 9.78352C24.3751 10.8765 23.4126 11.6261 22.2254 11.6261C21.0381 11.6261 20.0757 10.8765 20.0757 9.78352C20.0757 8.6905 21.0381 7.94092 22.2254 7.94092C23.4126 7.94092 24.3751 8.6905 24.3751 9.78352Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M23.4327 8.66844C23.5873 9.24565 22.7888 9.01974 21.9395 9.24732C21.0902 9.47491 20.5116 10.0698 20.3569 9.49259C20.2023 8.91538 20.7847 8.33504 21.6341 8.10746C22.4834 7.87987 23.278 8.09123 23.4327 8.66844Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M21.468 11.1604C21.2965 10.8309 21.956 10.938 22.6887 10.7101C23.4214 10.4821 23.862 9.72242 24.0024 10.1737C24.1429 10.625 23.6445 11.1164 22.9118 11.3444C22.179 11.5724 21.6396 11.4899 21.468 11.1604Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M22.5483 8.5052C22.6216 8.77861 22.1733 8.69038 21.6845 8.82135C21.1957 8.95232 20.8516 9.2529 20.7783 8.97948C20.705 8.70606 21.051 8.41238 21.5398 8.28141C22.0286 8.15044 22.4751 8.23178 22.5483 8.5052Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M4.92439 9.78352C4.92439 10.8765 3.96194 11.6261 2.7747 11.6261C1.58745 11.6261 0.625 10.8765 0.625 9.78352C0.625 8.6905 1.58745 7.94092 2.7747 7.94092C3.96194 7.94092 4.92439 8.6905 4.92439 9.78352Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M3.982 8.66844C4.13667 9.24565 3.33817 9.01974 2.48882 9.24732C1.63947 9.47491 1.0609 10.0698 0.906238 9.49259C0.751574 8.91538 1.33404 8.33504 2.18339 8.10746C3.03274 7.87987 3.82734 8.09123 3.982 8.66844Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M2.01735 11.1604C1.8458 10.8309 2.5053 10.938 3.23802 10.7101C3.97074 10.4821 4.41134 9.72242 4.55176 10.1737C4.69218 10.625 4.19381 11.1164 3.46109 11.3444C2.72837 11.5724 2.1889 11.4899 2.01735 11.1604Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M3.09716 8.5052C3.17042 8.77861 2.72209 8.69038 2.23331 8.82135C1.74453 8.95232 1.40038 9.2529 1.32712 8.97948C1.25386 8.70606 1.59985 8.41238 2.08863 8.28141C2.57742 8.15044 3.0239 8.23178 3.09716 8.5052Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M21 21.4833C21 22.5878 20.7489 23.0547 12.4375 23.0547C4.12611 23.0547 3.875 22.5878 3.875 21.4833C3.875 20.3787 4.12611 20.3047 12.4375 20.3047C20.7489 20.3047 21 20.3787 21 21.4833Z", fill: "#D8D8D8" }),
        React__default['default'].createElement("path", { d: "M14.6123 21.583C14.5965 22.6393 13.9077 22.7662 9.15269 22.6767C5.64021 22.6106 4.71703 22.5202 4.72814 21.7777C4.73925 21.0352 5.09021 20.7512 9.18036 20.8281C13.9354 20.9176 14.6234 20.8405 14.6123 21.583Z", fill: "#EFF3F5" }),
        React__default['default'].createElement("path", { d: "M5.36878 22.06C5.19105 21.8607 5.32313 21.5819 5.55794 21.3186C5.79275 21.0553 6.04136 20.9072 6.21909 21.1065C6.39682 21.3058 6.26473 21.5845 6.02992 21.8478C5.79512 22.1111 5.54651 22.2593 5.36878 22.06Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M5.33188 22.0183C5.18225 21.8505 5.32355 21.5821 5.55836 21.3188C5.79317 21.0555 6.03256 20.897 6.18219 21.0648C6.33181 21.2326 6.19051 21.501 5.9557 21.7644C5.7209 22.0277 5.4815 22.1861 5.33188 22.0183Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M19.1715 22.06C18.9938 21.8607 19.1259 21.5819 19.3607 21.3186C19.5955 21.0553 19.8441 20.9072 20.0218 21.1065C20.1995 21.3058 20.0675 21.5845 19.8327 21.8478C19.5978 22.1111 19.3492 22.2593 19.1715 22.06Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M19.1374 22.0217C18.9855 21.8514 19.1261 21.5821 19.3609 21.3188C19.5957 21.0555 19.8358 20.8979 19.9877 21.0682C20.1397 21.2386 19.9991 21.5079 19.7643 21.7712C19.5295 22.0345 19.2893 22.1921 19.1374 22.0217Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M8.71657 22.2374C8.50579 22.001 8.66243 21.6704 8.94091 21.3581C9.21938 21.0459 9.51422 20.8702 9.725 21.1066C9.93579 21.3429 9.77914 21.6736 9.50066 21.9858C9.22219 22.2981 8.92735 22.4738 8.71657 22.2374Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M8.65967 22.1742C8.49136 21.9854 8.66193 21.6704 8.9404 21.3581C9.21887 21.0459 9.4998 20.8546 9.66811 21.0433C9.83643 21.2321 9.66585 21.5471 9.38738 21.8594C9.10891 22.1716 8.82799 22.3629 8.65967 22.1742Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M15.8196 22.2374C15.6088 22.001 15.7655 21.6704 16.0439 21.3581C16.3224 21.0459 16.6172 20.8702 16.828 21.1066C17.0388 21.3429 16.8822 21.6736 16.6037 21.9858C16.3252 22.2981 16.0304 22.4738 15.8196 22.2374Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M15.7716 22.1835C15.597 21.9878 15.7656 21.6705 16.0441 21.3582C16.3225 21.0459 16.6055 20.857 16.78 21.0527C16.9545 21.2483 16.786 21.5656 16.5075 21.8779C16.229 22.1902 15.9461 22.3792 15.7716 22.1835Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M12.1406 22.3976C11.8957 22.1229 12.0777 21.7387 12.4013 21.3759C12.7249 21.013 13.0675 20.8089 13.3125 21.0835C13.5574 21.3582 13.3754 21.7424 13.0518 22.1053C12.7282 22.4681 12.3856 22.6723 12.1406 22.3976Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M12.0921 22.3438C11.8835 22.1098 12.0775 21.7389 12.401 21.3761C12.7246 21.0132 13.0554 20.7957 13.264 21.0297C13.4726 21.2636 13.2787 21.6345 12.9551 21.9974C12.6315 22.3602 12.3008 22.5777 12.0921 22.3438Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M12.0489 13.7369C12.2981 13.494 12.7019 13.494 12.9511 13.7369L14.8132 15.5524C15.0623 15.7953 15.0623 16.1891 14.8132 16.432L12.9511 18.2475C12.7019 18.4904 12.2981 18.4904 12.0489 18.2475L10.1868 16.432C9.93772 16.1891 9.93772 15.7953 10.1868 15.5524L12.0489 13.7369Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { d: "M12.4726 13.2256V15.5732H10.125C10.125 15.4162 10.1849 15.2593 10.3046 15.1396L12.039 13.4052C12.1587 13.2855 12.3157 13.2256 12.4726 13.2256Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M12.4726 17.9209V15.5733H10.125C10.125 15.7302 10.1849 15.8872 10.3046 16.0069L12.039 17.7413C12.1587 17.861 12.3157 17.9209 12.4726 17.9209Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M12.4727 13.2256V15.5732H14.8203C14.8203 15.4162 14.7604 15.2593 14.6407 15.1396L12.9063 13.4052C12.7866 13.2855 12.6296 13.2256 12.4727 13.2256Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M12.4727 17.9209V15.5733H14.8203C14.8203 15.7302 14.7604 15.8872 14.6407 16.0069L12.9063 17.7413C12.7866 17.861 12.6296 17.9209 12.4727 17.9209Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M18.6595 15.807C18.7972 15.6548 19.0203 15.6548 19.158 15.807L20.1869 16.9442C20.3246 17.0964 20.3246 17.343 20.1869 17.4952L19.158 18.6324C19.0203 18.7846 18.7972 18.7846 18.6595 18.6324L17.6306 17.4952C17.4929 17.343 17.4929 17.0964 17.6306 16.9442L18.6595 15.807Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { d: "M18.9132 15.5596V16.9244H17.5483C17.5483 16.8332 17.5831 16.742 17.6528 16.6724L18.6611 15.664C18.7307 15.5944 18.822 15.5596 18.9132 15.5596Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M18.9132 18.2896V16.9247H17.5483C17.5483 17.0159 17.5831 17.1072 17.6528 17.1768L18.6611 18.1851C18.7307 18.2547 18.822 18.2896 18.9132 18.2896Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M18.9134 15.5596V16.9245H20.2783C20.2783 16.8332 20.2435 16.742 20.1739 16.6724L19.1655 15.664C19.0959 15.5944 19.0047 15.5596 18.9134 15.5596Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M18.9134 18.2896V16.9247H20.2783C20.2783 17.0159 20.2435 17.1072 20.1739 17.1768L19.1655 18.1851C19.0959 18.2547 19.0047 18.2896 18.9134 18.2896Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M5.64194 15.807C5.77959 15.6548 6.00277 15.6548 6.14042 15.807L7.16936 16.9442C7.30701 17.0964 7.30701 17.343 7.16936 17.4952L6.14042 18.6324C6.00277 18.7846 5.77959 18.7846 5.64194 18.6324L4.613 17.4952C4.47535 17.343 4.47535 17.0964 4.613 16.9442L5.64194 15.807Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { d: "M5.90931 15.5596V16.9245H4.54443C4.54443 16.8332 4.57924 16.742 4.64885 16.6724L5.65722 15.664C5.72683 15.5944 5.81807 15.5596 5.90931 15.5596Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M5.90931 18.2896V16.9247H4.54443C4.54443 17.0159 4.57924 17.1072 4.64885 17.1768L5.65722 18.1851C5.72683 18.2547 5.81807 18.2896 5.90931 18.2896Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M5.90905 15.5596V16.9245H7.27393C7.27393 16.8332 7.23912 16.742 7.16951 16.6724L6.16114 15.664C6.09153 15.5944 6.00029 15.5596 5.90905 15.5596Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M5.90905 18.2896V16.9247H7.27393C7.27393 17.0159 7.23912 17.1072 7.16951 17.1768L6.16114 18.1851C6.09153 18.2547 6.00029 18.2896 5.90905 18.2896Z", fill: "#9F0400" })));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M4.68179 7.04592C5.06573 7.78505 5.47899 8.47752 5.91436 9.12605C4.76866 8.20293 3.15483 7.94918 1.72791 8.60664L0.865295 9.00408L0.949991 9.1879C1.87444 11.1943 4.25037 12.0714 6.25678 11.147L7.1194 10.7495C7.7588 11.5306 8.42708 12.2337 9.10661 12.8671C7.54917 12.0868 5.60297 12.3946 4.36752 13.7424L4.07604 14.0604L5.17158 15.0646C6.8001 16.5573 9.33037 16.4472 10.8231 14.8187L11.0984 14.5183C11.8534 15.0744 12.6001 15.5528 13.3138 15.9628C13.5418 16.0939 13.7667 16.218 13.9874 16.3354C12.2933 15.9571 10.485 16.7202 9.6092 18.3189L9.47337 18.5669L10.514 19.137C12.4515 20.1983 14.8825 19.4881 15.9439 17.5507L16.0715 17.3177C16.4836 17.4877 16.862 17.6297 17.1977 17.747C17.6961 17.9213 18.1016 18.0417 18.3855 18.1191L18.8453 18.2339C19.2507 18.3192 19.6484 18.0598 19.7338 17.6545C19.819 17.2494 19.56 16.8519 19.1551 16.7662L19.1524 16.7657C19.1551 16.7662 19.0729 16.7518 18.7802 16.6719C18.527 16.6029 18.1551 16.4928 17.6927 16.3311C17.1224 16.1317 16.416 15.8546 15.6253 15.4802L15.9997 14.8317C17.1043 12.9186 16.4488 10.4722 14.5356 9.36762L13.8989 9.00001L13.4324 9.80801C12.4895 11.4411 12.8291 13.4627 14.1387 14.7066C14.1128 14.6919 14.0869 14.6771 14.0609 14.6622C12.797 13.9361 11.4285 12.9847 10.1078 11.7498L10.5391 11.324C12.1111 9.77192 12.1274 7.23931 10.5753 5.66723L9.93826 5.02195L9.41242 5.5411C8.11055 6.82638 7.87565 8.78411 8.71479 10.3119C7.73795 9.1976 6.82187 7.90232 6.03634 6.39938C7.08943 4.4961 6.42732 2.09216 4.53566 1.00001L3.4039 0.346588L2.82248 1.35364C1.71791 3.26682 2.37341 5.71318 4.28658 6.81775L4.68179 7.04592Z" })));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M15.3182 7.04592C14.9343 7.78505 14.521 8.47752 14.0856 9.12605C15.2313 8.20293 16.8452 7.94918 18.2721 8.60664L19.1347 9.00408L19.05 9.1879C18.1256 11.1943 15.7496 12.0714 13.7432 11.147L12.8806 10.7495C12.2412 11.5306 11.5729 12.2337 10.8934 12.8671C12.4508 12.0868 14.397 12.3946 15.6325 13.7424L15.924 14.0604L14.8284 15.0646C13.1999 16.5573 10.6696 16.4472 9.17692 14.8187L8.90162 14.5183C8.1466 15.0744 7.39992 15.5528 6.68625 15.9628C6.45816 16.0939 6.23335 16.218 6.01259 16.3354C7.70668 15.9571 9.51501 16.7202 10.3908 18.3189L10.5266 18.5669L9.486 19.137C7.54854 20.1983 5.11749 19.4881 4.05611 17.5507L3.92849 17.3177C3.51637 17.4877 3.13804 17.6297 2.80235 17.747C2.30389 17.9213 1.89839 18.0417 1.61448 18.1191L1.15466 18.2339C0.749332 18.3192 0.351572 18.0598 0.26624 17.6545C0.180958 17.2494 0.440012 16.8519 0.844932 16.7662L0.847556 16.7657C0.844932 16.7662 0.927067 16.7518 1.21981 16.6719C1.47301 16.6029 1.84485 16.4928 2.30733 16.3311C2.87756 16.1317 3.58397 15.8546 4.3747 15.4802L4.0003 14.8317C2.89573 12.9186 3.55123 10.4722 5.4644 9.36762L6.10112 9.00001L6.56763 9.80801C7.51049 11.4411 7.1709 13.4627 5.86133 14.7066C5.88719 14.6919 5.9131 14.6771 5.93906 14.6622C7.20296 13.9361 8.57146 12.9847 9.89223 11.7498L9.46094 11.324C7.88886 9.77192 7.87263 7.23931 9.42468 5.66723L10.0617 5.02195L10.5876 5.5411C11.8895 6.82638 12.1243 8.78411 11.2852 10.3119C12.2621 9.1976 13.1781 7.90232 13.9637 6.39938C12.9106 4.4961 13.5727 2.09216 15.4643 1.00001L16.5961 0.346588L17.1775 1.35364C18.2821 3.26682 17.6266 5.71318 15.7134 6.81775L15.3182 7.04592Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 5000 5000" }, props),
        React__default['default'].createElement("g", { fill: "#046202" },
            React__default['default'].createElement("path", { d: "M2118.8 4995 c-12.3 -2.5 -38.8 -7 -58.8 -10 -20 -3 -50.8 -8.8 -68.8 -12.8 -17.8 -3.8 -38.8 -8.5 -46.3 -10 -47 -10 -138.5 -34 -180 -47.3 -7.5 -2.5 -19.3 -5.8 -26.3 -7.5 -6.8 -1.5 -14.8 -3.8 -17.5 -5 -2.8 -1 -12.3 -4.5 -21.3 -7.5 -9 -3 -18.5 -6.5 -21.3 -7.8 -2.8 -1 -10 -3.5 -16.3 -5 -6.3 -1.8 -12.3 -4 -13.8 -4.8 -1.3 -1 -5.8 -2.5 -10 -3.5 -4 -1 -11.3 -3.5 -15.5 -5.5 -19.3 -8.3 -24.8 -10.5 -30.8 -12.3 -3.5 -0.8 -9 -2.8 -12.5 -4.3 -3.5 -1.5 -8.5 -3.5 -11.3 -4.8 -4.8 -1.8 -36.5 -15 -47.5 -19.8 -2.8 -1 -9 -3.8 -14.3 -6 -5 -2.3 -9.5 -4 -10.3 -4 -0.8 0 -14.8 -6.3 -31 -14 -16.3 -7.8 -34 -16 -39.5 -18.5 -26.8 -12 -132.3 -66.8 -140 -72.8 -1.5 -1 -8.8 -5.3 -16.3 -9.3 -35.5 -18.8 -101 -58.5 -140 -85 -86.8 -58.5 -83.3 -55.8 -90 -72 -5.8 -14 -6.3 -17.3 -6 -61 l0 -46.3 9.5 -23.8 c10 -25.8 43 -92.3 57 -115.5 5 -8 10.3 -17.8 12 -22 1.8 -4 4 -7.5 5.3 -7.5 1.3 0 2.3 -1.3 2.3 -2.8 0 -1.5 3.5 -7.5 7.5 -13.5 4.3 -6 7.5 -11.5 7.5 -12.3 0 -0.8 8 -13.8 17.5 -29.3 9.8 -15.3 17.5 -28.3 17.5 -28.8 0 -0.5 8 -12.8 17.5 -27 9.8 -14.5 17.5 -27.3 17.5 -28.8 0 -1.3 0.8 -2.8 2 -3.3 2 -0.8 28 -38.8 28 -40.8 0 -0.8 1 -2.8 2.5 -4.5 1.3 -1.8 15 -22 30.3 -45.5 15.5 -23.3 34.5 -51.8 42.5 -63 8.3 -11 14.8 -21 14.8 -21.8 0 -0.8 2.5 -4.3 5.5 -7.8 3 -3.5 7.8 -10.3 10.5 -15 4.8 -8 28 -42 46.5 -68.3 6 -8.5 6.5 -10.3 2.5 -8 -4.3 2.3 -5 2 -5 -2.3 0 -6.3 -0.5 -5.8 37.5 -31 17.3 -11.5 38.8 -26 47.8 -32.5 12.5 -8.8 19 -11.8 25.8 -11.8 8.3 0 9 0.5 9 7.5 0 5.3 -4.5 14 -14.3 27.8 -8 11.3 -21 29.5 -28.8 40.5 -8 11.3 -15.3 21.8 -16.5 23 -1 1.5 -7 9.8 -13 18.8 -6 9 -12 17.5 -13.3 18.8 -3.3 4 -63.8 92.8 -98.5 145 -59.5 89.8 -78.3 118.5 -78.3 121 0 1.3 -0.8 2.8 -1.8 3.3 -2.8 1 -26.3 37.3 -37.8 57.5 -10 17.5 -34.3 57 -37.5 60.8 -1 1.5 -2.8 4.3 -3.8 6.3 -1 2 -6 11.3 -11 20.3 -24.3 42.3 -39 71 -50.3 97.5 -10.5 23.8 -12.8 32.3 -14.3 50.3 -1 11.8 -1 28.3 0 36.8 l1.8 15.3 24 16.8 c45 31.3 85.8 58.3 88.3 58.3 1.3 0 2.3 1 2.3 2.3 0 1.3 2 2.8 4.5 3.5 4.3 1.5 11 5.5 36.8 21.3 24 14.8 74.3 43 76.5 43 1.3 0 2.3 1.3 2.3 2.5 0 1.5 2.3 2.5 4.8 2.5 2.8 0 5.3 0.8 5.8 2 0.5 1 16 9.5 34.5 19 18.5 9.5 36.5 19 40 21.3 7.3 4.8 21.8 12 45 21.8 9 4 22.3 10.3 29.8 14 7.3 3.8 14.8 7 16.8 7 2 0 3.5 1.3 3.5 2.5 0 1.5 2.3 2.5 5 2.5 2.8 0 5 1.3 5 2.5 0 1.5 1.3 2.5 3 2.5 3.8 0 42.5 15.3 45.5 18 1.5 1 4.5 2 7 2 2.5 0 4.5 1.3 4.5 2.5 0 1.5 1.3 2.5 3 2.5 1.5 0 11.3 3.3 21.8 7.3 52.3 20.3 66.3 25.5 91.5 34 15.3 5 29.8 10 32.5 11.3 17.3 7.5 166.3 49.8 210 59.5 76.5 17 136 28.8 160 31.8 7 0.8 25.5 3.5 41.3 6.3 15.8 2.5 40 6 53.8 7.5 13.8 1.5 33.5 3.8 43.8 5 129.3 16.3 346.5 18.5 490 4.8 34.3 -3.3 88.8 -9.5 106.3 -12.3 7 -1 22 -3.3 33.8 -4.8 20 -2.8 34.5 -5.3 105 -17.8 15.8 -2.8 53 -10.8 82.5 -17.8 29.5 -7 57.8 -13.8 62.5 -14.8 7.5 -1.8 49.8 -13.3 73.8 -20 27.8 -7.8 53.3 -15.5 57.5 -17.3 2.8 -1.3 23 -8 45 -15.3 22 -7 42.3 -13.8 45 -15 2.8 -1 10.8 -4 17.5 -6.3 11.3 -4 20.3 -7.5 35 -14 2.8 -1.3 11.3 -4.5 18.8 -7.3 7.5 -2.8 16.5 -6.5 20 -8 3.5 -1.5 8.5 -3.5 11.3 -4.8 4.5 -1.8 34.3 -14 48.3 -20 3 -1.3 8 -3.3 11.3 -4.5 3 -1.3 23.3 -10.8 45 -21.3 22 -10.5 40.3 -19 41 -19 2.3 0 19.5 -8.3 25.8 -12.5 3.5 -2.5 24.3 -13.5 46.3 -24.8 22 -11.5 41.3 -21.8 42.5 -22.8 2.5 -2 26.5 -15.3 38 -21 3.3 -1.5 5.8 -3.5 5.8 -4.5 0 -1.3 1 -2 2.3 -2 1.3 0 17.3 -9.3 35.8 -20.3 18.3 -11.3 37.3 -22.8 42 -25.5 4.8 -3 9 -6.3 9.5 -7.3 0.5 -1 2 -2 3.3 -2 5.5 0 160.8 -109 167.3 -117.5 0.8 -0.8 10.8 -8.8 22.5 -17.5 11.8 -8.8 21.8 -16.5 22.5 -17.3 0.8 -1 5.3 -4.5 10 -8 4.8 -3.8 11.5 -9.3 15 -12.3 3.5 -3 11.3 -9.8 17.5 -14.8 6.3 -5 11.8 -9.5 12.5 -10.3 0.8 -0.8 9.8 -8.5 20 -17.5 10.3 -9 22.3 -19.5 26.5 -23.8 4.3 -4 16.8 -15.3 27.8 -25 21 -18.3 114.5 -111.5 138.3 -137.5 40 -44.3 54.8 -61 80.5 -91.8 15.5 -18.8 38.3 -46.8 50.8 -62.3 12.3 -15.8 23.8 -30.3 25.5 -32.3 3.5 -4.3 35.8 -48 47.8 -65 8.8 -12 63.5 -94.3 78.8 -118 5 -8 9.3 -15.5 9.3 -17 0 -1.3 1 -2.5 2.3 -2.5 1.3 0 2.8 -2 3.5 -4.3 1 -2.5 4.3 -9 7.8 -14.5 3.5 -5.5 8.8 -14.3 11.5 -19.3 2.8 -5 8.3 -14 12.3 -20 16 -24 79.5 -147 109 -210.8 7.5 -16.5 28.8 -66.3 28.8 -67.5 0 -0.8 3.3 -8.3 7.3 -16.8 4 -8.8 8.8 -20.8 11 -27 2 -6.3 8.5 -23 14.3 -37.3 11.5 -29.3 21 -56 34.3 -96.5 5 -15 11.8 -36 15 -46.3 9.3 -27.8 38.5 -135 43.3 -158.8 1.3 -5.5 4.5 -19.5 7.5 -31.3 3 -11.8 6.3 -26.3 7.5 -32.5 1 -6.3 4.3 -23 7.3 -37.5 3 -14.5 6.5 -33.5 7.8 -42.5 1.3 -9 4 -27 6.3 -40 8.8 -53.3 11.3 -71.5 18.8 -142.5 8.5 -81.3 10.8 -131.3 10.8 -240 0 -105 -2.5 -169.5 -9.8 -235 -2 -18.5 -4.8 -43.8 -6 -56.3 -2.5 -21.5 -4.8 -38.3 -10 -71.8 -1.3 -8.8 -3.5 -23.5 -4.8 -33.3 -2.8 -18.5 -4.5 -28.8 -12.8 -72.5 -6.3 -34.5 -8 -42.5 -17.8 -82.5 -4.3 -17.8 -8.8 -36.5 -9.8 -41.3 -2.5 -10.5 -11.3 -44 -16.3 -61.3 -2 -6.8 -6 -21 -8.8 -31.3 -18.8 -66.3 -52 -165.5 -68.8 -203.8 -1.8 -4 -6.3 -15.3 -10 -25 -3.8 -9.5 -8.8 -22.3 -11.5 -28 -2.5 -6 -4.8 -11.5 -4.8 -12.5 0 -2 -11.5 -28.3 -25.3 -57.8 -5.5 -11.5 -9.8 -21.5 -9.8 -22.5 0 -2.5 -52.5 -108.3 -57.5 -115.5 -2.3 -3.5 -9.8 -17 -16.5 -30 -6.8 -13 -13 -24 -14 -24.5 -1.3 -0.5 -2 -3 -2 -5.8 0 -2.5 -1 -4.8 -2.5 -4.8 -1.3 0 -2.5 -1 -2.5 -2.3 0 -1.3 -12.5 -23 -27.8 -48.3 -15.5 -25.3 -29.8 -49.3 -32.3 -53.5 -3.8 -6.5 -39.3 -59.3 -71 -105.8 -5.3 -7.8 -10.5 -14.3 -11.8 -14.8 -1.3 -0.5 -2.3 -2.3 -2.3 -4 0 -1.5 -4.5 -8 -10 -14 -5.5 -6.3 -10 -12.5 -10 -14.3 0 -1.5 -1 -3.3 -2 -3.8 -1 -0.3 -9.3 -10.3 -18 -22 -9 -11.8 -18 -23.5 -20.3 -26.3 -2.5 -2.8 -11.5 -14 -20 -25 -8.8 -11 -19.8 -24.3 -24.5 -29.3 -4.8 -5.3 -10.3 -12 -12.3 -15 -2.3 -3.3 -4.5 -6.3 -5.5 -7 -0.8 -0.8 -8.8 -9.8 -17.5 -20 -9 -10.3 -22 -25 -29 -32.5 -7 -7.5 -17 -18.8 -22.5 -25 -14.8 -17.3 -122.5 -125 -134.3 -134.8 -5.8 -4.5 -22.3 -19.3 -36.5 -32.5 -14.3 -13.3 -28.3 -25.5 -31.3 -27.5 -3 -2 -5.8 -4.3 -6.5 -5.3 -0.8 -0.8 -8.5 -7.5 -17.5 -15 -8.8 -7.5 -18.3 -15.8 -21.3 -18.5 -2.8 -2.5 -14 -11.3 -25 -19.8 -11 -8.3 -20.5 -16 -21.3 -16.8 -0.8 -1 -18 -14.3 -38.8 -29.5 -20.5 -15.3 -38.5 -28.8 -40 -29.8 -1.3 -1.3 -6.5 -5 -11.3 -8.3 -4.8 -3.3 -11 -8 -13.5 -10.5 -2.8 -2.5 -6.3 -4.5 -8 -4.5 -1.8 0 -3.5 -0.8 -4 -1.8 -1.3 -2.8 -84.3 -58.3 -87 -58.3 -1.5 0 -2.5 -1 -2.5 -2.3 0 -1.3 -2 -2.8 -4.5 -3.5 -2.3 -1 -8.8 -4.3 -14.3 -7.8 -5.5 -3.5 -15 -9.3 -21.3 -12.8 -6.3 -3.5 -16.3 -9.8 -22.5 -13.8 -17.8 -11.3 -33 -20 -35.3 -20 -1.3 0 -2.3 -1 -2.3 -2.5 0 -1.3 -2.3 -2.5 -5 -2.5 -2.8 0 -5 -0.8 -5 -2 0 -1 -3.3 -3.3 -7.3 -5 -4 -1.8 -16.8 -8.5 -28 -14.8 -26 -14.3 -132.8 -68.3 -135.3 -68.3 -1 0 -11 -4.3 -22.5 -9.8 -29.5 -13.8 -55.8 -25.3 -57.8 -25.3 -1 0 -6.5 -2.3 -12.5 -4.8 -5.8 -2.8 -18.3 -7.8 -28 -11.5 -9.5 -3.8 -20.8 -8.3 -25 -10 -36.8 -16 -149.3 -54 -196.3 -66.3 -6.3 -1.8 -13.5 -4 -16.3 -5.3 -6 -2.5 -76.5 -20.8 -123.8 -32 -48 -11.3 -117.3 -24.5 -171.8 -32.8 -37 -5.5 -51 -7.5 -66.3 -10 -15.3 -2.3 -35.5 -4.5 -92 -10 -118.5 -11.5 -323.5 -12.3 -420 -1.3 -17.3 2 -45.8 4.8 -63.8 6.3 -27 2.3 -59.3 6.5 -107.5 13.8 -33.5 5 -125.5 21.8 -143.8 26 -4.8 1.3 -26.3 6.5 -47.5 11.8 -21.3 5 -42.8 10.3 -47.5 11.3 -8 1.8 -37.5 9.5 -56.3 14.8 -4 1 -14.3 4 -22.5 6.3 -8.3 2 -24.5 7.3 -36.3 11 -11.8 4 -33.5 11.3 -48.8 16 -43.3 14 -69 23.3 -105.8 38 -18.8 7.5 -35 13.8 -36 13.8 -1 0 -7.8 2.8 -15 6 -7.3 3.3 -22.8 10 -34.5 14.8 -11.8 4.8 -27.5 11.3 -35 14.5 -15.3 6.3 -165.3 81.5 -195 97.5 -10.3 5.8 -32.3 18.5 -48.8 28.5 -16.5 10 -34 20.5 -38.8 23.3 -21.3 12 -116.5 73.8 -120 77.8 -0.8 0.8 -10.8 8 -22.5 15.8 -11.8 8 -24.3 17.3 -28 20.8 -3.8 3.5 -7.8 6.3 -8.8 6.3 -1 0 -5.3 3 -9.5 6.5 -4 3.5 -16 12.8 -26.3 20.5 -10.3 7.8 -20.3 15.5 -22 17.3 -1.8 1.8 -11.5 9.3 -21.3 16.8 -10 7.5 -20.3 15.8 -23 18.3 -3 2.5 -12.5 10.8 -21.3 18.3 -9 7.5 -16.8 14.3 -17.5 15 -0.8 1 -3.5 3.3 -6.5 5.3 -3 2 -17 14.3 -31.3 27.5 -14.3 13.3 -30.8 28 -36.5 32.5 -11.8 9.8 -119.5 117.5 -134.3 134.8 -5.5 6.3 -15.5 17.5 -22.5 25 -7 7.5 -20 22.3 -29 32.5 -8.8 10.3 -16.8 19.3 -17.5 20 -1 0.8 -3.3 3.8 -5.5 7 -2 3 -7.5 9.8 -12.3 15 -4.8 5 -12.5 14.3 -17.3 20.5 -4.8 6.3 -10 12.8 -12 14.5 -1.8 2 -6.3 7.5 -10 12.5 -3.8 5 -9.3 12 -12.3 15.5 -7.3 8.5 -51.5 68.3 -61.5 83 -4.3 6.8 -8.8 12 -9.8 12 -1.3 0 -2 1.5 -2 3.3 0 1.5 -2.5 5.8 -5.3 9.3 -2.8 3.5 -15.3 21.5 -27.5 40 -12.3 18.5 -23.3 35 -24.3 36.3 -1 1.5 -3.8 6 -6.3 10 -14.8 24.8 -20.3 33.8 -26.8 43.8 -4 6.3 -10.3 17 -14 23.8 -3.8 7 -7.3 13 -8.3 13.8 -1.8 1.5 -5.8 8.5 -15.3 26.3 -3.8 7 -9.5 17 -13 22.5 -7.3 11.5 -91.5 180.8 -96.5 193.8 -2 4.8 -4.5 11 -5.5 13.8 -1.3 2.8 -5.8 13.5 -10 23.8 -10.5 25 -12 29 -15 35.8 -1.3 3 -4.8 11.8 -7.5 19.3 -2.8 7.5 -6 16 -7.3 18.8 -6.5 14.8 -10 23.8 -14 35 -2.3 7 -5.3 14.8 -6.3 17.5 -1.3 2.8 -8 23 -15 45 -7.3 22 -14 42.3 -15.3 45 -4.3 10.3 -36 125.8 -46 167.5 -3.5 15.3 -7.5 32.5 -9 38.8 -1.5 6.3 -3.5 15.3 -4.8 20 -3 11.8 -11.5 54.5 -15 76.3 -1.8 9.8 -4.5 26.5 -6.5 37.5 -2 11 -6 36.3 -8.5 56.3 -2.8 20 -6 44.3 -7.3 53.8 -2.5 18.8 -5.8 51.5 -11.3 121.3 -9.8 118 -7 291.8 6.3 420 5.5 54.8 7 67 9.5 83.3 1.5 9.3 3.8 23.8 5 32.5 1.5 8.5 3.3 20 4 25.5 4.8 30.8 7.3 45.5 13 73.8 3.5 17.3 7.3 36.3 8.3 42.5 2.5 15.8 19.8 91.8 22.5 98.3 1 3 3.3 11.3 5 18 16.3 71.5 75.8 248 105 312.8 2.8 5.5 7 16.3 10 23.5 15.5 39.3 83.3 178.3 107.8 221.8 3 5.3 8 14 10.8 19.5 3 5.5 6 10.5 6.8 11.3 0.8 0.8 2 2.5 2.5 3.8 0.5 1.5 7.3 13 14.8 25.8 13.5 22.8 14 23.3 27 27 9.8 3 18.3 3.5 31.3 2.3 18 -1.5 45.8 -8 50.5 -11.3 1.5 -1 6.5 -2.8 11.3 -3.8 4.8 -1 14.5 -4.3 21.3 -7.5 29.3 -13.3 48 -21.3 49.5 -21.3 4.3 0 194.8 -93.5 213 -104.5 4.3 -2.5 28.3 -15.3 53.8 -28.3 25.5 -12.8 46.8 -24.3 47.5 -25 0.8 -1 10.3 -6.3 21.3 -12 11 -5.8 23.5 -12.5 27.5 -14.8 4.3 -2.5 14.8 -8.5 23.8 -13.3 9 -4.5 16.8 -9 17.5 -10 0.8 -1 10.8 -6.5 22.3 -12.5 28.3 -14.8 46 -24.8 76.5 -42.8 4.3 -2.5 11.5 -6.3 16.3 -8.8 4.8 -2.3 9.3 -5 10 -6 0.8 -0.8 7.3 -4.5 14.5 -8.3 7.5 -3.8 21 -11.8 30.5 -17.8 9.5 -6 23.8 -14.3 31.8 -18.5 8 -4 21.8 -11.8 30.8 -17.5 9 -5.5 20.3 -12.5 25 -15.3 4.8 -2.8 12.8 -7.5 17.5 -10.3 4.8 -3 13.3 -7.8 18.8 -10.5 5.5 -3 10.5 -6.3 11.3 -7 0.8 -0.8 4.8 -3.3 9 -5.5 8 -4 50.3 -30 54.8 -33.5 1.5 -1 6 -3.8 10 -5.8 4.3 -2 15 -8.5 24.3 -14.3 11.5 -7.5 19.3 -10.8 25.5 -10.8 8.5 0 9 0.5 9 8.3 0 5.5 -2.5 10.8 -8.3 16.8 -4.5 4.8 -13 15 -19.3 22.5 -6.3 7.5 -11.8 14.3 -12.5 15 -1 0.8 -9 10.8 -18.3 22.5 -24.5 30.8 -28.5 35 -34.3 35 -4.5 0 -4.8 -0.8 -2.5 -5 2.8 -5 2.5 -5 -5.5 -0.3 -4.5 2.5 -21.8 12.5 -38 22.5 -16.5 9.8 -30.3 17.8 -30.8 17.8 -0.8 0 -5.8 3.3 -11.5 7.3 -5.8 3.8 -18.3 11.3 -28 16.3 -9.5 5 -22.5 12.5 -28.8 16.5 -12 7.8 -16 10 -37.5 22 -27.5 15 -46.5 26 -57.5 32.8 -6.3 3.8 -21.3 12.3 -33.8 18.8 -28.8 15.5 -43.3 23.5 -65 35.8 -21.8 12.5 -42.5 23.8 -65 35.8 -38.3 20.3 -116.3 61.5 -137.5 72.5 -12.3 6.5 -27 14 -32.5 17 -21.5 11.3 -118.5 57.8 -136.3 65.5 -10.3 4.5 -23.3 10 -28.8 12.5 -37.5 16.5 -49.5 21.3 -74.3 28.8 -32.5 10 -49 12.5 -83.3 12.5 -41.8 0 -74 -13.5 -80 -33.8 -1 -3.5 -4 -9.3 -6.5 -13 -2.8 -3.5 -4.8 -7.8 -4.8 -9 0 -1.5 -0.8 -3 -1.8 -3.5 -2.3 -1 -6.8 -8.5 -22.3 -37 -6.5 -11.8 -13.5 -24 -15.8 -27.5 -9 -13 -100.3 -200.5 -100.3 -205.8 0 -1.8 -1.5 -5.5 -17.3 -40.8 -4.3 -9.8 -7.8 -18.5 -7.8 -19.3 0 -1 -2.3 -7.3 -5.3 -13.8 -10.8 -24.8 -12.3 -28.3 -12.3 -30.8 0 -1.5 -1.5 -6.3 -3.5 -10.5 -2 -4.5 -6.5 -16.5 -10 -26.8 -10.8 -31.5 -14 -41 -16.5 -46.3 -1.3 -2.8 -3.5 -10 -5.3 -16.3 -1.5 -6.3 -3.5 -12.3 -4.8 -13.8 -1 -1.3 -2.5 -5.8 -3.5 -10 -1.5 -6.5 -7.5 -27.3 -20.8 -70 -2 -6.8 -7.5 -27 -12 -45 -4.5 -17.8 -10 -39.3 -12.3 -47.5 -6 -23.8 -14.3 -61 -17.8 -80 -1.8 -9.5 -6 -31.5 -9.5 -48.8 -5.8 -29.5 -8.8 -46.5 -14.5 -85 -1.5 -9 -3.5 -21.8 -5 -28.3 -1.3 -7.3 -2.3 -151.3 -2.3 -355 0 -359.3 0 -357 11 -415.5 2 -11 6 -35.3 9 -53.8 3 -18.5 6.3 -37 7.5 -41.3 1.3 -4 6.5 -26 11.5 -48.8 11.3 -51 12.5 -56.5 15.8 -67.5 1.3 -4.8 4.8 -17.8 7.8 -28.8 3 -11 6.3 -23.3 7.5 -27.5 1.3 -4 4.5 -16 7 -26.3 6.5 -24 12 -42.8 18 -60 2.5 -7.5 8.3 -25 12.5 -38.8 7.5 -24 20.8 -62 25 -72.5 1.3 -2.8 5.3 -12.8 8.8 -22.5 3.8 -9.5 8.3 -20.8 10 -25 1.8 -4 7 -17 11.5 -28.8 4.5 -11.8 9 -22.3 10.3 -23.8 1 -1.3 2 -4.3 2 -6.8 0 -2.5 1.3 -4.5 2.5 -4.5 1.5 0 2.5 -1.3 2.5 -3 0 -4.3 15 -41.3 23 -56.8 3.8 -7.3 7 -14.8 7 -16.8 0 -2 1.3 -3.5 2.5 -3.5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -4.8 0 -2.8 0.8 -5.3 2 -5.8 1 -0.3 5.8 -8.5 10.5 -18.3 4.8 -9.5 12 -23 16.3 -30 4.3 -6.8 10.8 -18.8 14.8 -26.3 4 -7.5 8 -14.3 8.8 -15 0.8 -0.8 3 -4 4.8 -7.3 2 -3.3 5.5 -9.5 7.8 -13.8 11 -19.5 41.5 -67.8 43.3 -68.5 1 -0.5 2 -2 2 -3.3 0 -1.5 10.3 -18 23 -36.8 30 -45 33 -49 35.3 -50 1 -0.5 1.8 -2 1.8 -3.3 0 -1.8 9.3 -15.3 20.8 -29.8 1.8 -2 5 -6.8 7.3 -10.3 2.3 -3.5 5.8 -8 7.5 -10 2 -2 13 -16.5 24.8 -32.3 11.8 -15.8 23 -30.5 25 -32.5 2 -2 7.5 -8.8 12.3 -15 4.8 -6.3 9.3 -11.8 10 -12.5 0.8 -0.8 5.5 -6.5 10.8 -13 5.3 -6.5 10.8 -13.3 12.5 -15 1.8 -2 9.3 -10.8 16.8 -19.5 7.5 -9 14.3 -16.8 15 -17.5 0.8 -0.8 5.8 -6.3 11 -12.5 35.8 -40.8 54 -60.3 107.5 -113.8 33.3 -33.3 71 -69.8 84 -81.3 13 -11.8 29.3 -26.3 36.3 -32.5 6.8 -6.3 13 -11.8 13.8 -12.5 2 -2 30.5 -26 37.3 -31.5 3.3 -2.5 10 -8.3 15 -12.3 5 -4.3 14 -11.5 20.3 -16.3 6.3 -4.8 11.8 -9.3 12.5 -10 0.8 -1 10.8 -8.8 22.5 -17.5 11.8 -8.8 21.8 -16.8 22.5 -17.5 5.3 -7 147.8 -106.3 175 -122 4.8 -2.8 19 -11.3 31.3 -18.8 20 -12.5 29 -17.8 57.5 -34.8 4.3 -2.5 11.5 -6.3 16.3 -8.8 4.8 -2.3 10 -5.3 11.3 -6.5 6.3 -5.5 164.3 -85.3 196.3 -99.3 33 -14.3 34.8 -15 43.3 -18.5 4.3 -1.8 16 -6.8 25.5 -10.8 9.8 -4.3 21 -8.8 25 -10.3 11.5 -4 41.5 -15.5 51.3 -19.8 4.8 -2 12.5 -5.3 17 -7.3 4.5 -2 9.3 -3.5 10.8 -3.5 1.5 0 6.3 -1.5 10.5 -3.5 10.3 -4.5 76.3 -26.5 79.5 -26.5 1.5 0 6.3 -1.8 10.5 -3.5 4.5 -2 14.3 -5.5 21.8 -7.5 7.5 -2 34 -9.3 58.8 -16 51.5 -14.3 121.8 -31.8 152.5 -38 7 -1.3 23.3 -4.8 36.3 -7.5 13 -2.5 45.8 -8.3 72.5 -12.5 26.8 -4 55 -8.5 62.8 -10 8.8 -1.5 135.5 -2.5 352.5 -2.5 280.8 0 343 0.5 362.5 3.5 91.8 14 128.5 20.5 189.8 34.3 24.3 5.5 137.5 34.5 158.8 40.8 52.8 15.8 72.8 22 77.5 24 2.8 1.3 10 3.8 16.3 5.3 6.3 1.8 12.5 4 13.8 4.8 1.5 1 8.3 3.3 15 5 7 1.8 13.8 4 15 5 1.5 1 7 3.3 12.5 4.8 10.5 3.3 15.8 5.3 26.3 9.8 3.5 1.5 12.5 5.3 20 8 7.5 2.8 16.3 6.3 19.5 7.5 3 1.5 8 3.5 11.3 5 3 1.3 11.8 4.8 19.3 7.5 14.8 5.5 16.8 6.3 37.5 15.8 7.5 3.3 17.8 7.5 22.5 9.3 17.3 6.3 139.3 65.8 176.3 86 8.3 4.5 24 13 35 19 11 6 21.3 11.5 22.5 12.5 1.5 1.3 6.5 4.3 11.3 7 69.3 38.8 218 137 242 159.8 1.8 1.8 4.3 3.3 5 3.3 1 0 4.5 2.5 8 5.8 3.5 3 15.8 13 27.5 21.8 11.8 8.8 21.8 16.5 22.5 17.5 0.8 0.8 6.3 5.3 12.5 10 6.3 4.8 15.3 12 20.3 16.3 5 4 11.8 9.8 15 12.3 6.8 5.5 35.3 29.5 37.3 31.5 0.8 0.8 7 6.3 13.8 12.5 7 6.3 23.3 20.8 36.3 32.5 13 11.5 50.8 48 84 81.3 53.5 53.5 71.8 73 107.5 113.8 5.3 6.3 10.3 11.8 11 12.5 0.8 0.8 7.5 8.5 15 17.5 7.5 8.8 15 17.5 16.8 19.5 1.8 1.8 7.3 8.5 12.5 15 5.3 6.5 11 13.3 12.8 15 1.8 2 6.3 7.5 10 12.5 3.8 5.3 8.3 10.8 9.8 12.5 1.8 1.8 9.8 12 17.5 22.5 8 10.5 17.5 22.8 21.3 26.8 3.8 4.3 7 8.8 7 10.5 0 1.5 1 3.3 2.3 3.8 1.3 0.5 10.3 12 20 25.8 9.8 13.8 18.8 26.3 20 27.8 3 3.5 65.5 98.3 73.3 111 3 4.8 7.8 12.8 10.8 17.5 5.3 8.3 11.3 18 22 36.3 2.5 4.3 5 9.5 5.8 12 1 2.3 2.5 4.3 3.8 4.3 1.3 0 2.3 1.3 2.3 2.8 0 1.5 2 5.8 4.5 9.3 2.8 3.8 9.5 15.8 15.5 26.8 6 11 14.5 26.8 19 35 20.3 37 79.8 159 86 176.3 1.8 4.8 6 15 9.3 22.5 9.5 20.8 10.3 22.8 15.8 37.5 5.3 14.3 7.3 19.3 12 30 1.5 3.5 5.3 12.5 8 20 2.8 7.5 6.3 16.3 7.5 19.5 5.5 12.5 7.3 17.3 10.3 26.8 1.5 5.5 3.8 11.3 4.8 12.5 1 1.5 3.3 8.3 5 15 1.8 7 4 13.8 5 15 0.8 1.5 3 7.5 4.8 13.8 1.5 6.3 4 13.5 5.3 16.3 3 6.8 15.5 47.8 26.3 87.5 18.3 65.8 24.3 87.8 26.3 97.5 1.3 5.5 7 32 13.3 58.8 11.3 49.5 18.3 85.3 25.8 132.5 2.3 14.5 5.3 32.5 6.8 40 1.5 8.5 2.8 143.5 3.5 359.8 l0.8 346 -6.5 42.8 c-3.8 23.5 -7.5 49 -8.8 56.5 -1 7.5 -4.3 26.3 -7.3 41.3 -3 15.3 -6.3 33 -7.5 39.5 -4 21.8 -29 121.8 -44.5 178 -4.3 15.3 -9.5 34.3 -11.8 42.5 -2.3 8.3 -5.8 18.5 -7.8 23 -1.8 4.3 -3.5 9 -3.5 10.5 0 3.3 -22 69.3 -26.5 79.5 -2 4.3 -3.5 9 -3.5 10.5 0 1.5 -1.5 6.3 -3.5 10.8 -2 4.5 -5.3 12.3 -7.3 17 -4.3 9.8 -15.8 39.8 -19.8 51.3 -1.5 4.3 -6 15.5 -10.3 25 -4 9.8 -9 21.3 -10.8 25.8 -2 4.3 -5 11.8 -7 16.3 -2 4.3 -7.3 16.5 -11.5 26.8 -14 32.3 -93.3 189.3 -99 196.3 -1.3 1.5 -4 6 -6 10 -2 4.3 -15.8 27.5 -30.5 52 -15 24.5 -27 45.3 -27 45.8 0 0.8 -1 2.5 -2.5 4.3 -1.3 1.8 -18 26.8 -37.3 55.5 -19 29 -41.8 62 -50.5 73.8 -8.5 11.8 -23.5 32 -33.3 45 -9.5 13 -19 25.3 -20.8 27 -1.8 2 -6.5 7.5 -10.3 12.5 -3.8 5.3 -7.5 9.8 -8.3 10.5 -0.8 0.8 -5.8 6.8 -10.8 13.8 -8.5 11 -30.5 38 -34 41.3 -0.8 0.8 -6.3 7.5 -12.5 15 -6.3 7.5 -11.8 14.3 -12.5 15 -2.5 2.5 -27 29.5 -46 51.3 -11 12.5 -45.8 48.5 -77.5 80.3 -51.3 51 -73.5 72.3 -120.3 113.8 -6.8 6 -13.8 12.3 -15.8 14 -1.8 1.8 -8.5 7.3 -15 12.5 -6.5 5.3 -16 13.3 -21 18 -5.3 4.8 -12 10.3 -15 12.5 -3.3 2 -7.3 5.3 -9 7 -1.8 1.8 -12 9.8 -22.5 17.5 -10.5 8 -20.8 15.8 -22.5 17.5 -1.8 1.8 -12 9.8 -22.5 17.5 -10.5 8 -19.8 15 -20.5 15.8 -0.8 0.8 -5.3 4.3 -10 7.5 -4.8 3.3 -10.3 7.5 -12.3 9.5 -1.8 1.8 -9.5 7.3 -17 12 -7.5 4.8 -15 9.8 -16.5 11.3 -6.5 5.5 -43.5 31 -70 47.8 -15.5 9.8 -33.5 21.5 -40.5 25.8 -19 12.3 -34.5 21.3 -39.3 23 -2.5 0.8 -4.5 2.3 -4.5 3.5 0 1.3 -1 2.3 -2.3 2.3 -1.3 0 -12.5 6.3 -25 13.8 -12.8 7.5 -23.5 13.8 -24 13.8 -0.8 0 -7 3.8 -14.3 8.3 -7.3 4.5 -21 12 -30.8 16.8 -9.5 4.8 -17.8 9.5 -18.3 10.5 -0.5 1.3 -3 2 -5.8 2 -2.5 0 -4.8 1.3 -4.8 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -4.8 2.5 -2.8 0 -5.3 1 -5.8 2 -1.3 3 -41 23 -45.5 23 -2.3 0 -4 1.3 -4 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -1.5 2.5 -3.5 2.5 -2 0 -9.5 3.3 -16.8 7 -15.5 8 -52.5 23 -56.8 23 -1.8 0 -3 1.3 -3 2.5 0 1.5 -2 2.5 -4.5 2.5 -2.5 0 -5.5 1 -6.8 2 -1.5 1.3 -12 5.8 -23.8 10.3 -11.8 4.5 -24.5 9.8 -28.8 11.5 -4 1.8 -15.3 6.3 -25 10 -9.5 3.5 -19.8 7.5 -22.5 8.8 -10.5 4.3 -48.5 17.5 -72.5 25 -13.8 4.3 -31.3 10 -38.8 12.5 -21 7.3 -39 12.5 -102.5 30 -15.8 4.3 -33.3 8.8 -38.8 10 -5.5 1 -21.8 5 -36.3 8.5 -14.5 3.8 -31 7.8 -36.8 9 -35 8 -28.5 6.8 -85.8 17.3 -14.5 2.8 -41.5 7.3 -60 10 -18.5 3 -40 6.5 -47.8 7.8 -8.8 1.5 -142.3 2.5 -363.8 2.3 -326.5 -0.3 -351.3 -0.8 -372.3 -4.8z" })),
        React__default['default'].createElement("g", { fill: "#39b102" },
            React__default['default'].createElement("path", { d: "M2489.3 4978.5 c-0.3 -0.3 -24.8 -1.3 -54.3 -2 -97.3 -3 -157.8 -7.3 -232.5 -16.3 -10.3 -1.3 -26 -3 -35 -4 -9 -0.8 -28 -3.8 -42.5 -6.3 -14.5 -2.5 -32.5 -5.5 -40 -6.3 -24.3 -2.8 -82.8 -14.3 -161.3 -31.8 -43.8 -9.8 -192.8 -52 -210 -59.5 -2.8 -1.3 -17.3 -6.3 -32.5 -11.3 -25.3 -8.5 -39.3 -13.8 -91.5 -34 -10.5 -4 -20.3 -7.3 -21.8 -7.3 -1.8 0 -3 -1 -3 -2.5 0 -1.3 -2 -2.5 -4.5 -2.5 -2.5 0 -5.5 -1 -6.8 -2 -3.3 -2.8 -42 -18 -45.8 -18 -1.8 0 -3 -1 -3 -2.5 0 -1.3 -2.3 -2.5 -5 -2.5 -2.8 0 -5 -1 -5 -2.5 0 -1.3 -1.5 -2.5 -3.5 -2.5 -2 0 -9.5 -3.3 -16.8 -7 -7.5 -3.8 -20.8 -10 -29.8 -14 -23.3 -9.8 -37.8 -17 -45 -21.8 -3.5 -2.3 -21.5 -11.8 -40 -21.3 -18.5 -9.5 -34 -18 -34.5 -19 -0.5 -1.3 -3 -2 -5.8 -2 -2.5 0 -4.8 -1 -4.8 -2.5 0 -1.3 -1 -2.5 -2.3 -2.5 -2.3 0 -52.5 -28.3 -76.5 -43 -25.8 -15.8 -32.5 -19.8 -36.8 -21.3 -2.5 -0.8 -4.5 -2.3 -4.5 -3.5 0 -1.3 -1 -2.3 -2.3 -2.3 -2.5 0 -43.3 -27 -88.3 -58.3 l-24.3 -17 -1.8 -18 c-2.3 -22 -2.3 -25.3 0.3 -50.5 2.8 -28.8 20.5 -69 64.5 -146 5 -9 10 -18.3 11 -20.3 1 -2 2.8 -4.8 3.8 -6.3 3.3 -3.8 27.5 -43.3 37.5 -60.8 11.5 -20.3 35 -56.5 37.8 -57.5 1 -0.5 1.8 -2 1.8 -3.3 0 -2.5 18.8 -31.3 78.3 -121 34.8 -52.3 95.3 -141 98.5 -145 1.3 -1.3 7.3 -9.8 13.3 -18.8 6 -9 12 -17.3 13 -18.8 1.3 -1.3 8.8 -12 17 -23.8 8.3 -11.8 21.3 -30 28.8 -40.5 14 -19.8 15 -23.3 3.8 -14.5 -9.8 7.8 -10.8 6 -2.5 -5.3 4 -5.8 19.5 -19.3 34.3 -30.3 15 -10.8 28.8 -21 30.8 -22.8 2 -1.8 7.8 -5.8 12.5 -9.3 4.8 -3.3 9.3 -6.8 10 -7.5 0.8 -0.8 10.8 -8.5 22.5 -17.5 19.5 -14.5 69.5 -54.5 72.5 -57.5 0.8 -0.8 7.5 -6.3 15 -12.5 7.5 -6.3 18.3 -15.5 23.8 -20.5 7.8 -7.3 12 -9.5 19 -9.5 l9 0 1.8 54.5 c2 62 7.8 129.3 15.5 178 16.5 108 42.5 210.8 67.3 266.8 7.5 16.5 4 17 55.3 -8.3 54.3 -26.8 110 -60.5 166 -100.5 27 -19.3 55.3 -40.5 57.5 -43 0.8 -0.8 5.3 -4.3 10.5 -8 5 -3.8 10.5 -8.3 12.5 -10 1.8 -1.8 8.5 -7.5 15 -12.8 6.5 -5.3 13.3 -10.8 15 -12.5 2 -1.8 13 -11.5 24.5 -21.8 11.8 -10.3 36 -33 53.8 -50.8 28.8 -28.3 33.5 -31.8 40 -31.3 7.3 0.8 7.5 1.3 8 13.3 1.5 33 11.5 132.5 18.3 181.3 1.3 9 3.5 25.8 5.3 37.5 9.5 69.3 31.5 187.3 49.5 263.8 37.5 161.8 89.8 322.8 134.8 417 7.8 16 14.8 29.3 15.8 29.3 4 0 32.3 -63.8 54.3 -122.5 12.3 -32.5 42.3 -122.8 52.8 -158.8 20.8 -70.5 35.5 -128.3 52.8 -205 1.3 -5.5 3.3 -15 4.8 -21.3 16.5 -71.3 40.3 -220.8 50.3 -316.3 1.3 -13.8 3.5 -36 5 -49.3 1.3 -13.3 2.5 -30.3 2.5 -37.8 0 -18.3 1.5 -21.8 10 -21.8 5.5 0 12 4.8 29.3 22 42 41.3 74.8 70.5 116.5 103.5 15.3 12.3 29.8 23.8 31.8 25.3 2 1.8 7.8 5.8 12.5 9.3 4.8 3.3 9.3 6.8 10 7.5 2 2.5 45.3 32 74.5 51 38.5 24.8 80.3 48.8 115.8 66 44.3 21.3 41.3 21 48.8 3.8 13 -29 37 -107.8 45.8 -149.5 15.8 -75 22.8 -116.8 27.8 -162.5 1.5 -13.8 3.8 -35 5 -47.5 1.3 -12.3 3.3 -51 4 -85.5 l1.8 -63.3 7.5 0 c5.5 0 11.5 3.5 21.5 12 7.8 6.8 24.8 21 38 32 13 10.8 29.3 24.3 36 29.8 6.5 5.5 14.5 11.5 17.3 13.5 3 2 5.8 4.5 6.5 5.3 0.8 0.8 10.8 8.8 22.5 17.5 11.8 9 21.8 16.8 22.5 17.5 0.8 0.8 5.3 4.3 10 7.5 4.8 3.3 9.3 6.8 10 7.5 0.8 0.8 5.3 4.3 10 7.5 4.8 3.3 9.3 6.8 10 7.5 0.8 0.8 12.8 9.5 27 19.5 14 10 36.5 25.8 50 35.3 13.3 9.5 35.5 24.5 49.3 33.3 13.8 9 35 22.5 47 30.5 25.8 16.5 91.8 56.5 111.8 67.3 7.5 4 15 8.3 16.3 9.3 1.5 1.3 8.8 5.5 16.3 9.5 7.5 4.3 21 11.8 30 16.5 21 11.8 138.8 70.5 160 80 41.8 18.3 105 42.5 106.8 40.5 2 -1.8 -19.3 -57.3 -38.8 -101.5 -12.3 -28 -66.8 -137.8 -82 -165 -5 -9 -12.3 -22.5 -16.5 -30 -4.3 -7.5 -10.8 -19.3 -14.8 -26.3 -6.5 -11.8 -48 -80.5 -72.3 -120 -16.8 -27 -84.8 -127.5 -102.5 -151.3 -2.5 -3.5 -15 -20.3 -27.8 -37.5 -20.8 -28.3 -64 -84.5 -67.3 -87.5 -0.8 -0.8 -8 -9.5 -16.3 -19.8 -8.3 -10.3 -23.3 -28.3 -33 -40 -14.3 -16.5 -18.3 -22.8 -18.3 -29 l0 -8 54.5 -1.8 c61.8 -2 129 -7.8 178 -15.5 108 -16.5 210.8 -42.5 266.8 -67.3 12 -5.5 13.5 -6.8 12 -11.8 -6 -21 -62.5 -124.5 -92 -168.3 -19.8 -29.3 -67.3 -94.8 -71.8 -98.8 -0.8 -0.8 -4.3 -5.3 -8 -10.5 -3.8 -5 -8.3 -10.5 -10 -12.5 -1.8 -1.8 -8.3 -9.5 -14.5 -17 -6.3 -7.5 -11.8 -14.3 -12.5 -15 -0.8 -0.8 -9.8 -10.8 -20 -22.5 -10.3 -11.8 -33 -35.8 -50.5 -53.5 -25.3 -25.8 -32 -33.8 -32 -39.3 0 -6.8 0.3 -6.8 19.5 -8.3 117.5 -9.5 214.8 -21.5 311.8 -38.8 36.5 -6.5 122.3 -24 148.8 -30.3 11.8 -2.8 26.3 -6 32.5 -7.5 77.8 -16.3 233.3 -63.8 330.3 -100.8 43 -16.3 100.5 -43.5 98.5 -46.5 -2 -3.5 -48 -25 -86.5 -40.3 -103 -41.3 -258.8 -88.3 -381 -115.3 -70 -15.3 -118.3 -24.8 -172.5 -33.8 -12.3 -2 -28.8 -4.8 -36.3 -6 -7.5 -1.3 -22.3 -3.5 -32.5 -4.8 -10.3 -1.5 -26.5 -3.8 -36.3 -5 -17.5 -2.5 -40.3 -5.3 -87.5 -10.3 -55 -5.8 -77.3 -7.5 -92.5 -7.5 l-16.3 0 0 -8.8 c0 -7.5 3 -11.8 27 -35.8 45.3 -45.5 73.8 -77.5 108.5 -121.3 12.3 -15.3 23.8 -29.8 25.3 -31.8 1.8 -2 5.8 -7.8 9.3 -12.5 3.3 -4.8 6.8 -9.3 7.5 -10 2.5 -2 32 -45.3 51 -74.5 24.8 -38.5 48.8 -80.3 66 -115.8 21.3 -44.3 21 -41.3 3.8 -48.8 -28.8 -13 -106.8 -36.8 -149.5 -45.8 -67.3 -14.3 -118.3 -23 -162.5 -27.8 -13.8 -1.5 -35 -3.8 -47.5 -5 -12.3 -1.3 -48.8 -3 -80.5 -4 l-58.3 -1.8 0 -7.5 c0 -6.8 7.5 -18.3 20.8 -32.3 1.8 -1.8 8 -9.5 14.3 -17 6.3 -7.5 11.8 -14.3 12.5 -15 3.3 -3 43.3 -53.8 65.3 -82.5 12.8 -17.3 24 -31.8 24.8 -32.5 8.3 -7.5 111.5 -159 137.5 -201.3 61.5 -100 87.3 -145.5 129.8 -230 32 -63.3 38.3 -76.3 58.8 -124.5 14 -32.5 27.8 -71.5 26 -73.3 -0.8 -0.5 -4 0 -7.3 1.3 -3.3 1.3 -16.8 6.5 -29.8 11.3 -23 8.3 -48 19 -87.5 36.5 -38.3 17.3 -161.5 80.8 -175.5 90.5 -3.5 2.5 -7.3 4.5 -8 4.5 -1 0 -9 4.5 -18 10 -9 5.5 -17 10 -17.5 10 -1.5 0 -72.8 43.5 -106 64.8 -33.8 21.5 -78.5 51 -80 52.8 -0.8 0.8 -12 8.5 -25 17.5 -21 14.3 -67.3 47.5 -77.5 55.8 -2 1.8 -7.8 5.8 -12.5 9.3 -4.8 3.3 -9.3 6.8 -10 7.5 -0.8 0.8 -10.8 8.5 -22.5 17.5 -19.5 14.5 -69.5 54.5 -72.5 57.5 -0.8 0.8 -7.5 6.3 -15 12.5 -7.5 6.3 -18.3 15.5 -23.8 20.5 -7.8 7.3 -12 9.5 -19 9.5 l-9 0 -1.8 -54.3 c-2 -62.3 -7.8 -129.5 -15.5 -178.3 -16.5 -108 -42.5 -210.8 -67.3 -266.8 -7.5 -16.5 -4 -17 -55.3 8.3 -54.3 26.8 -110 60.5 -166 100.5 -27 19.3 -55.3 40.5 -57.5 43 -0.8 0.8 -5.3 4.3 -10.5 8 -5 3.8 -10.5 8.3 -12.5 10 -1.8 1.8 -8.5 7.5 -15 12.8 -6.5 5.3 -13.3 10.8 -15 12.5 -2 1.8 -13 11.5 -24.5 21.8 -11.8 10.3 -35.8 33 -53.5 50.5 -27.5 27.3 -33.5 32 -40.3 32 l-7.8 0 -3 -39.3 c-6 -76.3 -13 -135 -28.3 -237 -11.5 -77.8 -31.3 -173.8 -56.3 -272.5 -24.8 -97.8 -33.3 -126.3 -60 -205 -11.3 -33 -23.8 -69 -27.8 -80 -15.8 -41.5 -46.3 -108.8 -49.5 -108.8 -0.8 0 -6.8 11 -13.3 24.5 -21.5 43.8 -57.8 139.8 -79.3 209.3 -5 16.5 -10 32.8 -11.3 36.3 -1.3 3.5 -5.8 18.8 -10 33.8 -4 15.3 -8.5 31 -9.8 35 -4 12.3 -29.8 116.5 -35.5 143 -26 121 -39.8 204.5 -54.8 331.5 -2.3 20.3 -5.8 58.5 -9 98.8 -1.5 20.5 -1.5 20.5 -8.5 20.5 -5.5 0 -12 -4.8 -29.3 -22 -42 -41.3 -74.8 -70.5 -116.5 -103.5 -15.3 -12.3 -29.8 -23.8 -31.8 -25.3 -2 -1.8 -7.8 -5.8 -12.5 -9.3 -4.8 -3.3 -9.3 -6.8 -10 -7.5 -2 -2.5 -45.3 -32 -74.5 -51 -38.5 -24.8 -80.3 -48.8 -115.8 -66 -44.3 -21.3 -41.3 -21 -48.8 -3.8 -13.3 29.8 -37 107 -46.3 152 -1.5 7 -3.8 17 -5 22.5 -7.3 32.5 -17 93 -22 137.5 -6.5 55 -7.8 73.8 -9.3 133.3 l-1.8 63 -7.5 0 c-5.5 0 -11.8 -3.5 -22.8 -13 -8.5 -7.3 -15.8 -13.8 -16.5 -14.5 -0.8 -0.8 -7.5 -6.3 -15 -12.5 -7.5 -6.3 -14.3 -11.8 -15 -12.8 -0.8 -0.8 -15.8 -13 -33.8 -27 -17.8 -14.3 -34.8 -27.5 -37.5 -30 -9.5 -7.8 -72.8 -54.5 -104 -77 -79 -56.8 -200.3 -133 -279.8 -176.8 -7.5 -4 -18.3 -10 -23.8 -13.3 -18.5 -10.8 -132.8 -67.8 -159 -79.5 -49.5 -22 -109.3 -45 -111.5 -42.8 -2 1.8 10.8 35.5 33.8 90.3 22.8 54 105 214.3 129.5 251.8 3.3 5.3 6 10 6 10.5 0 0.8 5.8 10.5 12.8 22 7.3 11.5 18.8 30.3 25.8 42 17.3 28.8 82.8 127.5 106 160 20.3 28 82.8 111.8 90.5 120.8 2.5 3 11.8 14.5 20.3 25.5 8.8 11 16.5 20.5 17.3 21.3 0.8 0.8 6.3 7.5 12.5 15 6.3 7.5 12.5 15.3 14.3 17 13.3 14 20.8 25.5 20.8 32.3 l0 7.5 -54.3 1.8 c-62 2 -129.3 7.8 -178.3 15.5 -108 16.5 -210.8 42.5 -266.8 67.3 -12 5.5 -13.5 6.8 -12 11.8 6 21 62.5 124.5 92 168.3 19.8 29.3 67.3 94.8 71.8 98.8 0.8 0.8 4.3 5.3 8 10.5 3.8 5 8.3 10.5 10 12.5 1.8 1.8 7.5 8.5 12.8 15 5.3 6.5 10.8 13.3 12.5 15 1.8 2 11.5 13 21.8 24.5 10.3 11.8 33 35.8 50.8 53.8 28.5 28.8 32 33.3 31.3 40 -0.8 7.3 -1.3 7.5 -13.3 8 -33 1.5 -132.5 11.5 -181.3 18.3 -9 1.3 -25.8 3.5 -37.5 5.3 -69.3 9.5 -186.3 31.3 -263.8 49.5 -159.5 37 -323 89.8 -417 134.8 -16 7.8 -29.3 14.8 -29.3 15.8 0 4 63.8 32.3 122.5 54.3 32.5 12.3 122.8 42.3 158.8 52.8 57.5 16.8 123.3 34 171.3 45 13 3 28.5 6.5 34.5 7.8 5.8 1.5 15.3 3.5 21.3 5 60.8 14 190.3 35.5 271.8 45 13 1.5 32.3 3.8 42.5 5 10.3 1.3 34.5 3.5 53.8 5 72.8 5.8 66.3 4.5 66.3 12.8 0 6 -5 12.3 -26.8 34.3 -44.8 44.8 -73.8 77 -108.8 121.3 -12.3 15.3 -23.8 29.8 -25.3 31.8 -1.8 2 -5.8 7.8 -9.3 12.5 -3.3 4.8 -6.8 9.3 -7.5 10 -0.8 0.8 -8.8 12 -17.5 25 -9 13 -16.8 24.3 -17.5 25 -2.8 2.5 -39.8 62 -53 85.3 -14.3 24.8 -42.5 81.8 -45.8 91.8 -1.5 5 0 6.3 13 12 30.5 13.8 106.3 36.8 152 46.3 7 1.5 17 3.8 22.5 5 13.8 3.3 31 6.3 58.8 11 41 6.8 53 8.5 78.8 11.3 13.8 1.5 35.3 3.8 47.5 5 12.5 1.3 48.8 3 80.8 4 l58.3 1.8 -0.8 9 c-0.8 7.8 -2.5 10.3 -14.5 18.3 -17.5 12 -20 12 -9 0.3 4.8 -5.3 8.3 -9.8 7.8 -10.3 -0.5 -0.5 -8.5 4 -18 10 -9.3 6 -20.3 12.5 -24.5 14.5 -4 2 -8.5 4.8 -10 5.8 -4.5 3.5 -46.8 29.5 -54.8 33.5 -4.3 2.3 -8.3 4.8 -9 5.5 -0.8 0.8 -5.8 4 -11.3 7 -5.5 2.8 -14 7.5 -18.8 10.5 -4.8 2.8 -12.8 7.5 -17.5 10.3 -4.8 2.8 -16 9.8 -25 15.3 -9 5.8 -22.8 13.5 -30.8 17.5 -8 4.3 -22.3 12.5 -31.8 18.5 -9.5 6 -23 14 -30.5 17.8 -7.3 3.8 -13.8 7.5 -14.5 8.3 -0.8 1 -5.3 3.8 -10 6 -4.8 2.5 -12 6.3 -16.3 8.8 -30.5 18 -48.3 28 -76.5 42.8 -11.5 6 -21.5 11.5 -22.3 12.5 -0.8 1 -8.5 5.5 -17.5 10 -9 4.8 -19.5 10.8 -23.8 13.3 -4 2.3 -16.5 9 -27.5 14.8 -11 5.8 -20.5 11 -21.3 12 -0.8 0.8 -22 12.3 -47.5 25 -25.5 13 -49.5 25.8 -53.8 28.3 -18.3 11 -208.8 104.5 -213 104.5 -1.5 0 -20.3 8 -49.5 21.3 -6.8 3.3 -16.5 6.5 -21.3 7.5 -4.8 1 -9.8 2.8 -11.3 3.8 -6 4.3 -34.5 10 -57.5 11.5 -19.5 1.3 -28.3 0.8 -38.8 -2.3 -13.8 -4 -14 -4.3 -27.5 -27.3 -7.5 -12.8 -14.3 -24.3 -14.8 -25.8 -0.5 -1.3 -1.8 -3 -2.5 -3.8 -0.8 -0.8 -3.8 -5.8 -6.8 -11.3 -2.8 -5.5 -7.8 -14.3 -10.8 -19.5 -24.5 -43.5 -92.3 -182.5 -107.8 -221.8 -3 -7.3 -7.3 -18 -10 -23.5 -15.3 -34 -42.5 -107.5 -64.5 -175.3 -22.5 -69.8 -33.5 -106.3 -40.5 -137.5 -1.8 -6.8 -4 -15 -5 -18 -2.8 -6.5 -20 -82.5 -22.5 -98.3 -1 -6.3 -4.8 -25.3 -8.3 -42.5 -5.8 -28.3 -8.3 -43 -13 -73.8 -0.8 -5.5 -2.5 -17 -4 -25.5 -1.3 -8.8 -3.5 -23.3 -5 -32.5 -2.5 -16.3 -4 -28.5 -9.5 -83.3 -9.8 -93 -11.5 -140 -11.3 -276.3 0.3 -77.5 1.5 -123.8 4.5 -156.3 7.5 -88.5 9.3 -106.3 11.8 -123.8 1.3 -9.5 4.5 -33.8 7.3 -53.8 2.5 -20 6.5 -45.3 8.5 -56.3 2 -11 4.8 -27.8 6.5 -37.5 3.5 -21.8 12 -64.5 15 -76.3 1.3 -4.8 3.3 -13.8 4.8 -20 1.5 -6.3 5.5 -23.5 9 -38.8 10 -41.8 41.8 -157.3 46 -167.5 1.3 -2.8 8 -23 15.3 -45 7 -22 13.8 -42.3 15 -45 1 -2.8 4 -10.5 6.3 -17.5 4 -11.3 7.5 -20.3 14 -35 1.3 -2.8 4.5 -11.3 7.3 -18.8 2.8 -7.5 6.5 -16.5 8 -20 1.5 -3.5 3.5 -8.5 4.8 -11.3 2.8 -6.8 17 -41.3 19.8 -47.5 1 -2.8 3.5 -9 5.5 -13.8 5 -13 89.3 -182.3 96.5 -193.8 3.5 -5.5 9.3 -15.5 13 -22.5 9.5 -17.8 13.5 -24.8 15.3 -26.3 1 -0.8 4.5 -6.8 8.3 -13.8 3.8 -6.8 10 -17.5 14 -23.8 6.5 -10 12 -19 26.8 -43.8 2.5 -4 5.3 -8.5 6.3 -10 1 -1.3 12 -17.8 24.3 -36.3 12.3 -18.5 24.8 -36.5 27.5 -40 2.8 -3.5 5.3 -7.8 5.3 -9.3 0 -1.8 0.8 -3.3 2 -3.3 1 0 5.5 -5.3 9.8 -11.8 10 -15 54.3 -74.8 61.5 -83.3 3 -3.5 8.5 -10.5 12.3 -15.5 3.8 -5 8.3 -10.5 10 -12.5 2 -1.8 7.3 -8.3 12 -14.5 4.8 -6.3 12.5 -15.5 17.3 -20.5 4.8 -5.3 10.3 -12 12.3 -15 2.3 -3.3 4.5 -6.3 5.5 -7 0.8 -0.8 8.8 -9.8 17.5 -20 9 -10.3 22 -25 29 -32.5 7 -7.5 17 -18.8 22.5 -25 14.8 -17.3 122.5 -125 134.3 -134.8 5.8 -4.5 22.3 -19.3 36.5 -32.5 14.3 -13.3 28.3 -25.5 31.3 -27.5 3 -2 5.8 -4.3 6.5 -5.3 0.8 -0.8 8.5 -7.5 17.5 -15 8.8 -7.5 18.3 -15.8 21.3 -18.3 2.8 -2.5 13 -10.8 23 -18.3 9.8 -7.5 19.5 -15 21.3 -16.8 1.8 -1.8 11.8 -9.5 22 -17.3 10.3 -7.8 22.3 -17 26.3 -20.5 4.3 -3.5 8.5 -6.5 9.5 -6.5 1 0 5 -2.8 8.8 -6.3 3.8 -3.5 16.3 -12.8 28 -20.8 11.8 -7.8 21.8 -15 22.5 -15.8 3.5 -4 98.8 -65.8 120 -77.8 4.8 -2.8 22.3 -13.3 38.8 -23.3 16.5 -10 38.5 -22.8 48.8 -28.5 29.8 -16 179.8 -91.3 195 -97.5 7.5 -3.3 23.3 -9.8 35 -14.5 11.8 -4.8 27.3 -11.5 34.5 -14.8 7.3 -3.3 14 -6 15 -6 1 0 17.3 -6.3 36 -13.8 36.8 -14.8 62.5 -24 105.8 -38 15.3 -4.8 37 -12 48.8 -16 11.8 -3.8 28 -9 36.3 -11 8.3 -2.3 18.5 -5.3 22.5 -6.3 18.8 -5.3 48.3 -13 56.3 -14.8 4.8 -1 26.3 -6.3 47.5 -11.3 21.3 -5.3 42.8 -10.5 47.5 -11.8 18.3 -4.3 110.3 -21 143.8 -26 46.8 -7 80.3 -11.3 106.3 -13.8 17.3 -1.5 47.5 -4.3 67.5 -6.5 59.8 -6 118 -7.8 231.3 -7 59.3 0.8 111.5 1.5 116.3 2 4.8 0.5 20.5 1.8 35 2.5 14.5 1 37.5 2.8 51.3 4.3 61.3 6 76 7.5 90.8 9.8 15.3 2.5 29.3 4.5 66.3 10 54.5 8.3 123.8 21.5 171.8 32.8 47.3 11.3 117.8 29.5 123.8 32 2.8 1.3 10 3.5 16.3 5.3 47 12.3 159.5 50.3 196.3 66.3 4.3 1.8 15.5 6.3 25 10 9.8 3.8 22.3 8.8 28 11.5 6 2.5 11.5 4.8 12.5 4.8 2 0 28.3 11.5 57.8 25.3 11.5 5.5 21.5 9.8 22.5 9.8 2.5 0 109.3 54 135.3 68.3 11.3 6.3 24 13 28 14.8 4 1.8 7.3 4 7.3 5 0 1.3 2.3 2 5 2 2.8 0 5 1.3 5 2.5 0 1.5 1 2.5 2.3 2.5 2.3 0 17.5 8.8 35.3 20 6.3 4 16.3 10.3 22.5 13.8 6.3 3.5 15.8 9.3 21.3 12.8 5.5 3.5 12 6.8 14.5 7.8 2.3 0.8 4.3 2.3 4.3 3.5 0 1.3 1 2.3 2.5 2.3 2.8 0 85.8 55.5 87 58.3 0.5 1 2.3 1.8 4 1.8 1.8 0 5.3 2 8 4.5 2.5 2.5 8.8 7.3 13.5 10.5 4.8 3.3 10 7 11.3 8.3 1.5 1 19.5 14.5 40 29.8 20.8 15.3 38 28.5 38.8 29.5 0.8 0.8 10.3 8.5 21.3 16.8 11 8.5 22.3 17.3 25 19.8 3 2.8 12.5 11 21.3 18.5 9 7.5 16.8 14.3 17.5 15 0.8 1 3.5 3.3 6.5 5.3 3 2 17 14.3 31.3 27.5 14.3 13.3 30.8 28 36.5 32.5 11.8 9.8 119.5 117.5 134.3 134.8 5.5 6.3 15.5 17.5 22.5 25 7 7.5 20 22.3 29 32.5 8.8 10.3 16.8 19.3 17.5 20 1 0.8 3.3 3.8 5.5 7 2 3 7.5 9.8 12.3 15 4.8 5 15.8 18.3 24.5 29.3 8.5 11 17.5 22.3 20 25 2.3 2.8 11.3 14.5 20.3 26.3 8.8 11.8 17 21.8 18 22 1 0.5 2 2.3 2 3.8 0 1.8 4.5 8 10 14.3 5.5 6 10 12.5 10 14 0 1.8 1 3.5 2.3 4 1.3 0.5 6.5 7 11.8 14.8 31.8 46.5 67.3 99.3 71 105.8 2.5 4.3 16.8 28.3 32.3 53.5 15.3 25.3 27.8 47 27.8 48.3 0 1.3 1.3 2.3 2.5 2.3 1.5 0 2.5 2.3 2.5 4.8 0 2.8 0.8 5.3 2 5.8 1 0.5 7.3 11.5 14 24.5 6.8 13 14.3 26.5 16.5 30 5 7.3 57.5 113 57.5 115.5 0 1 4.3 11 9.8 22.5 13.8 29.5 25.3 55.8 25.3 57.8 0 1 2.3 6.5 4.8 12.5 2.8 5.8 7.8 18.5 11.5 28 3.8 9.8 8.3 21 10 25 16.8 38.3 50 137.5 68.8 203.8 2.8 10.3 6.8 24.5 8.8 31.3 5 17.3 13.8 50.8 16.3 61.3 1 4.8 5.5 23.5 9.8 41.3 9.8 40 11.5 48 17.8 82.5 8.3 43.8 10 54 12.8 72.5 1.3 9.8 3.5 24.5 4.8 33.3 7 45.3 7.8 49.5 16 129.3 16 152.3 15.5 328.3 -1 488.8 -7.3 69.8 -9.8 88.8 -18.8 142.5 -2.3 13 -5 31 -6.3 40 -1.3 9 -4.8 28 -7.8 42.5 -3 14.5 -6.3 31.3 -7.3 37.5 -1.3 6.3 -4.5 20.8 -7.5 32.5 -3 11.8 -6.3 25.8 -7.5 31.3 -2.3 11.8 -16.3 64.8 -28.3 108.8 -15.5 56 -45 144.3 -64.3 192.8 -5.8 14.3 -12.3 31 -14.3 37.3 -2.3 6.3 -7 18.3 -11 27 -4 8.5 -7.3 16 -7.3 16.8 0 1.3 -21.3 51 -28.8 67.5 -13.8 29.8 -47.3 97.5 -63.3 127.5 -33.8 63.8 -38.8 72.8 -45.8 83.3 -4 6 -9.5 15 -12.3 20 -2.8 5 -8 13.8 -11.5 19.3 -3.5 5.5 -6.8 12 -7.8 14.5 -0.8 2.3 -2.3 4.3 -3.5 4.3 -1.3 0 -2.3 1.3 -2.3 2.5 0 1.5 -4.3 9 -9.3 17 -15.3 23.8 -70 106 -78.8 118 -12 17 -44.3 60.8 -47.8 65 -1.8 2 -13.3 16.5 -25.5 32.3 -12.5 15.5 -35.3 43.5 -50.8 62.3 -25.8 30.8 -40.5 47.5 -80.5 91.8 -23.8 26 -117.3 119.3 -138.3 137.5 -11 9.8 -23.5 21 -27.8 25 -4.3 4.3 -16.3 14.8 -26.5 23.8 -10.3 9 -19.3 16.8 -20 17.5 -0.8 0.8 -6.3 5.3 -12.5 10.3 -6.3 5 -14 11.8 -17.5 14.8 -3.5 3 -10.3 8.5 -15 12.3 -4.8 3.5 -9.3 7 -10 8 -0.8 0.8 -10.8 8.5 -22.5 17.3 -11.8 8.8 -21.8 16.8 -22.5 17.5 -6.5 8.5 -161.8 117.5 -167.3 117.5 -1.3 0 -2.8 1 -3.3 2 -0.5 1 -4.8 4.3 -9.5 7.3 -4.8 2.8 -23.8 14.3 -42 25.5 -18.5 11 -34.5 20.3 -35.8 20.3 -1.3 0 -2.3 0.8 -2.3 2 0 1 -2.5 3 -5.8 4.5 -11.5 5.8 -35.5 19 -38 21 -1.3 1 -20.5 11.3 -42.5 22.8 -22 11.3 -42.8 22.3 -46.3 24.8 -6.3 4.3 -23.5 12.5 -25.8 12.5 -0.8 0 -19 8.5 -41 19 -21.8 10.5 -42 20 -45 21.3 -3.3 1.3 -8.3 3.3 -11.3 4.5 -3.3 1.5 -14.3 6 -24.5 10.3 -25 10.5 -29 12 -35.5 15 -3.3 1.3 -12 4.8 -19.5 7.5 -7.5 2.8 -16 6 -18.8 7.3 -14.8 6.5 -23.8 10 -35 14 -6.8 2.3 -14.8 5.3 -17.5 6.3 -2.8 1.3 -23 8 -45 15 -22 7.3 -42.3 14 -45 15.3 -4.3 1.8 -29.8 9.5 -57.5 17.3 -24 6.8 -66.3 18.3 -73.8 20 -4.8 1 -33 7.8 -62.5 14.8 -29.5 7 -66.8 15 -82.5 17.8 -70.5 12.5 -85 15 -105 17.8 -11.8 1.5 -26.8 3.8 -33.8 4.8 -41 6.3 -60.3 8.5 -138.8 15 -48 3.8 -203.5 10.3 -205.8 8.5z" })),
        React__default['default'].createElement("g", { fill: "#ff5006" },
            React__default['default'].createElement("path", { d: "M2696 2989.3 c-4 -4.5 -14.5 -16.5 -23.5 -26.8 -9 -10.3 -16.8 -19.3 -17.5 -20 -0.8 -0.8 -7.5 -8.5 -15 -17.5 -7.5 -9 -14.3 -16.8 -15 -17.5 -0.8 -0.8 -7.5 -8.5 -15 -17.5 -7.5 -9 -15.5 -18 -17.5 -20 -2 -2 -10 -11 -17.5 -20 -7.5 -9 -14.3 -16.8 -15 -17.5 -0.8 -0.8 -5.3 -5.8 -10 -11.5 -7.8 -9 -23.8 -27.3 -43.5 -49.8 l-6.5 -7.5 -5.3 6.3 c-2.8 3.5 -7.5 9 -10.5 12.5 -3 3.5 -10.5 12.5 -16.8 20 -6.3 7.5 -12.5 15.3 -14.3 17 -1.8 1.8 -7.3 8.5 -12.5 15 -5.3 6.5 -10.5 13 -12 14.5 -1.3 1.5 -29.5 35 -62.3 74.3 -56.5 67.8 -60.3 71.8 -68.3 71.8 -8 0 -8.3 -0.3 -8.3 -10.5 0 -6 1.3 -24.3 2.5 -40.8 1.5 -16.5 3.8 -44 5 -61.3 2.3 -28.8 3.5 -45.5 10 -125 1.3 -15.8 3 -38.8 4 -50.8 l1.8 -22 -24.8 1.5 c-13.5 0.8 -40 2.5 -58.5 3.8 -18.5 1.3 -52.8 3.5 -76.3 5 -23.3 1.5 -57.8 3.8 -76.3 5 -18.5 1.3 -44.8 3 -58 3.8 l-24.5 1.5 0 -8.5 c0 -7.8 2 -10 19 -23.3 10.5 -8.3 20.3 -16 22 -17.3 1.5 -1.5 7.8 -6.5 14 -11.3 6.3 -4.8 13 -10 15 -11.8 4.5 -3.8 55.5 -43.8 66.3 -52.3 4.3 -3 25 -19.5 46.3 -36.5 21.5 -17 42.5 -33.5 47 -37 4.3 -3.5 8 -7 8 -7.8 0 -1 -17 -16.3 -37.8 -33.8 -21 -17.8 -39.3 -33.5 -40.8 -34.8 -1.5 -1.5 -10 -8.8 -19 -16.3 -9 -7.5 -16.8 -14.3 -17.5 -15 -0.8 -0.8 -8.5 -7.5 -17.5 -15 -9 -7.5 -16.8 -14.3 -17.5 -15 -0.8 -0.8 -8.5 -7.5 -17.5 -15 -9 -7.5 -16.8 -14.3 -17.5 -15 -0.8 -0.8 -8.5 -7.5 -17.5 -15 -30.5 -26 -30 -25.3 -30 -34.3 l0 -8.3 14.5 0 c7.8 0 23.8 1 35.5 2.3 11.8 1.5 35.3 3.8 52.5 5.3 17.3 1.5 42.5 3.8 56.3 5 13.8 1.3 38.5 3.5 55 5 16.5 1.5 40.8 3.8 53.8 5 13 1.3 31 3 39.8 3.8 l16 1.3 -1.8 -14.5 c-1 -7.8 -2.8 -25.3 -4 -38.5 -5.3 -52.5 -7.5 -74.3 -10 -98.3 -1.5 -13.8 -3.8 -36.3 -5.3 -50 -1.3 -13.8 -3.5 -35.8 -4.8 -48.8 -1.5 -13 -3.3 -34.3 -4.3 -46.8 l-1.5 -23.3 8.8 0 c6.8 0 10 1.8 15 8.3 20.5 26 50.5 64 55.5 70.5 3.3 4.3 15.3 19.5 26.8 34 11.5 14.5 23.8 30.3 27.3 34.8 7.3 9.8 46 59 52 66.3 5 6 18.5 23.8 21 27.3 2 3 2 3.3 42 -46 18.5 -22.8 34.3 -41.8 35 -42.5 0.8 -0.8 6.3 -7.5 12.5 -15 6.3 -7.5 13.3 -16 15.5 -18.8 2.3 -2.8 16.3 -19.5 30.8 -37.5 14.8 -18 29.3 -35.3 32.3 -38.8 2.8 -3.5 10.3 -12.5 16.5 -20 20.8 -25.3 20.5 -25 29.5 -25 l8.8 0 -1.8 19.5 c-1 10.5 -2.8 26 -4 34.3 -1.3 8.3 -3.5 25.3 -5 37.5 -1.5 12.5 -3.8 29.8 -5 38.8 -1.3 9 -3.5 25.8 -5 37.5 -1.5 11.8 -3.8 29.8 -5.3 40 -2.3 18 -4.3 31.5 -9.5 72.5 -1.3 10.3 -3.3 24 -4 30.8 l-1.5 11.8 9.5 -1 c5.3 -0.8 20.8 -2.5 34.5 -4 13.8 -1.5 34.5 -3.8 46.3 -5 11.8 -1.3 33 -3.5 47.5 -5 14.5 -1.5 35.3 -3.8 46.3 -5 11 -1.3 32.5 -3.5 47.5 -5 15.3 -1.5 35.8 -4 45.8 -5.3 10 -1.3 24.5 -2.3 32 -2.3 l13.5 0 0 8.5 c0 7.3 -2 10.3 -14.3 20.5 -8 6.8 -15 12.8 -15.8 13.5 -0.8 0.8 -9.8 8.5 -20 17.5 -10.3 9 -19.3 16.8 -20 17.5 -0.8 0.8 -8.5 7.5 -17.5 15 -9 7.5 -16.8 14.3 -17.5 15 -0.8 0.8 -9.8 8.5 -20 17.5 -10.3 9 -19.3 16.8 -20 17.5 -0.8 0.8 -8.5 7.5 -17.5 15 -9 7.5 -16.8 14.3 -17.5 15 -2 2 -23 20.5 -39.5 34.8 -8.5 7.3 -15.5 14.3 -15.5 15.3 0 1 6.5 6.8 14.3 12.8 8 6 16.8 12.8 19.5 15 2.8 2.5 22.5 18 43.8 34.8 21.3 16.8 42.8 33.8 47.5 37.5 4.8 3.8 26.8 21.3 48.8 38.5 22 17.5 41.8 33 43.8 34.8 2 1.8 8 6.3 13.3 10.3 7.5 5.8 9.3 8.8 9.3 16 l0 8.8 -20.5 -1.5 c-23.5 -1.8 -64.5 -5.3 -107 -9.3 -15.8 -1.3 -42.3 -3.8 -58.8 -5.3 -16.5 -1.3 -41.8 -3.5 -56.3 -4.8 -14.5 -1.5 -37.3 -3.3 -50.8 -4 l-24.3 -1.8 1.3 11 c0.8 6 2.3 23.5 3.8 38.5 1.5 15.3 3.8 38.3 5 51.3 1.3 13 3.5 36.8 5 52.5 3.3 33.8 6.8 70 10 101.3 1.3 12.5 3 31.3 3.8 42 l1.8 19.3 -8.8 0 c-6.5 0 -10.3 -2 -15.8 -8.3z" })),
        React__default['default'].createElement("g", { fill: "#d00489" },
            React__default['default'].createElement("path", { d: "M2813.3 3259 c-1 -2 -6 -8 -10.8 -13.3 -4.8 -5.3 -17.3 -19 -27.5 -30.8 -10.3 -11.8 -19.3 -21.8 -20 -22.5 -0.8 -0.8 -9.8 -10.8 -20 -22.5 -10.3 -11.8 -19.3 -21.8 -20 -22.5 -0.8 -0.8 -8.5 -9.8 -17.3 -20 -9 -10.3 -17.8 -20.5 -20 -22.5 -2.3 -2 -11.3 -12.3 -20.3 -22.5 -9 -10.3 -16.8 -19.3 -17.5 -20 -0.8 -0.8 -9.8 -10.8 -20 -22.5 -10.3 -11.8 -19.3 -21.8 -20 -22.5 -0.8 -0.8 -8.5 -9.8 -17.5 -20 -9 -10.3 -18 -20.5 -20 -22.5 -2 -2 -10.8 -11.5 -19 -21.3 l-15.3 -17.5 -1.5 -35.5 c-1 -25 -0.8 -35.8 1.3 -35.8 1.8 0 2.3 -7.3 1 -23.5 -1.3 -15.5 -1 -24 0.8 -25.3 1.5 -0.8 2.8 -7.8 2.8 -15 0 -15.5 2.5 -16 12.8 -2.5 3.5 4.5 13.3 16 21.5 25.5 8.3 9.3 18.3 21 22.3 25.8 4 4.8 8.8 10.5 11 12.5 2 2 10 11 17.5 20 7.5 9 14.3 16.8 15 17.5 0.8 0.8 7.5 8.5 15 17.5 7.5 9 14.3 16.8 15 17.5 0.8 0.8 8.5 9.8 17.5 20 9 10.3 19.8 22.5 24 27 l7.5 8.3 -0.8 -9.5 c-0.8 -10 -4.3 -45.5 -8.3 -85.8 -1.3 -13 -3.5 -36.8 -5 -52.5 -3.3 -35.3 -7.3 -74.8 -9 -90.5 -1 -10.5 -0.5 -12 3.5 -12 2.5 0 8.5 3.8 13.3 8.3 4.8 4.3 21.8 19.8 37.3 34.3 15.8 14.5 33.3 30.8 39 36.3 l10.3 10 3 31.3 c1.8 17.3 4 41.5 5.3 53.8 1.3 12.5 3.5 33.8 4.8 47.5 1.5 13.8 3.8 36.3 5 50 1.5 13.8 3.8 37.5 5.3 52.5 1.5 15.3 3.8 38.3 5 51.3 1.3 13 3.5 36.3 5 51.3 1.5 15.3 3.8 36.5 5.3 47.3 1.3 11 2.3 26.3 2.3 34.5 l0 14.5 -8.8 0 c-4.8 0 -9.5 -1.5 -10.5 -3.5z" }),
            React__default['default'].createElement("path", { d: "M2177.5 3237.5 c0 -10.8 1 -30.8 2.5 -44.3 1.3 -13.5 3.5 -39.8 5 -58.3 1.5 -18.5 3.8 -46 5 -61.3 1.3 -15 3.5 -42.8 5 -61.3 4.5 -55.8 7.5 -92.3 10.3 -122.3 1.5 -15.8 2.8 -39.3 2.8 -52.3 0 -19.5 0.5 -23.5 4 -24.5 7.5 -2.5 11.5 -5 14 -9.8 4 -7 8.3 -11.3 11.3 -11.3 4.3 0 15.5 -10.8 18 -16.8 1.3 -3.3 4.3 -5.8 6.8 -5.8 5 0 15.5 -9.8 15.5 -14.5 0 -1.8 1.8 -3 3.8 -3 5 0 21.3 -14.8 21.3 -19.3 0 -2 3 -3.3 7.8 -3.3 l7.5 0 -1.5 18.3 c-2.8 33.3 -6 75.3 -8.8 109.3 -2.8 34.8 -6.5 83 -9 113.8 -1.8 21.5 -8.8 28 65.5 -61.3 31.3 -37.8 57.8 -69.3 58.5 -70 0.8 -0.8 5.3 -6.3 10.3 -12.5 5 -6.3 12.3 -14.5 16 -18.8 3.5 -4 8.3 -10 10.5 -13 2 -3.3 4.5 -5.8 5.5 -5.8 1 0 3.3 31.5 5 70 l3.3 70 -6.5 8.5 c-3.5 4.8 -7.8 10 -9.5 12 -2 1.8 -9.5 10.5 -17 19.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.8 17.5 -16.3 19 -1.3 1.5 -19.8 23.3 -41 48.3 -35.8 41.8 -39.3 45.3 -47 45.3 l-8.3 0 0 -20z" }),
            React__default['default'].createElement("path", { d: "M3251.3 2821.3 c-1.3 -0.5 -17.8 -2.3 -36.3 -3.5 -18.5 -1.5 -46 -3.8 -61.3 -5.3 -15 -1.3 -41.5 -3.5 -58.8 -5 -17.3 -1.5 -44.3 -3.8 -60 -5 -15.8 -1.5 -42.3 -3.8 -58.8 -5 -16.5 -1.3 -43 -3.5 -58.8 -5 -15.8 -1.5 -44 -3.8 -62.5 -5 l-33.8 -2.5 -14.8 -15.8 c-8 -8.5 -22 -23.8 -31.3 -34 -9 -10 -23 -25.3 -30.8 -33.8 -8.5 -9 -14.5 -17.5 -14.5 -20.8 0 -3.5 1.3 -5.3 3.3 -4.5 1.5 0.5 17.8 2.3 35.5 3.8 35 2.8 70.3 5.8 117.5 10 16.5 1.5 43.5 3.8 60 5 16.5 1.5 35.8 3.3 42.5 4 14 1.5 14 1.5 -6.5 -14.5 -8 -6.3 -78 -61.8 -97.3 -77 -4.8 -3.8 -27.8 -22 -51 -40.3 l-42.5 -33.5 12.3 -0.8 c6.8 -0.5 13.8 -2 15.5 -3.5 2 -1.8 10.5 -2 24.3 -0.8 15 1.3 21.5 0.8 22.8 -1.3 1.3 -2.3 9 -2.5 28.5 -1.3 l26.5 2 39 30.3 c21.5 16.5 42.8 33 47.3 36.5 4.5 3.5 29.3 22.5 55 42.5 25.8 20 50.5 39 55 42.5 4.5 3.5 29.3 22.5 55 42.5 25.8 20 50 38.8 54 41.8 55 42 53.5 40.5 53.5 49.8 l0 8.5 -13 -0.3 c-7.3 0 -14.3 -0.5 -15.8 -1z" }),
            React__default['default'].createElement("path", { d: "M1720 2809.3 c0 -7 2 -9.8 13.3 -18 7 -5.5 13.5 -10.5 14.3 -11.3 0.8 -1 10.8 -8.8 22.5 -17.5 11.8 -9 34.3 -26.3 50.3 -38.8 16 -12.3 32.8 -25.3 37.3 -28.8 4.5 -3.5 19 -14.8 32.5 -25 13.5 -10.3 28 -21.5 32.5 -25 4.5 -3.5 19 -14.8 32.5 -25 13.5 -10.3 28 -21.5 32.5 -25 4.5 -3.5 19 -14.8 32.5 -25 13.5 -10.3 28 -21.5 32.5 -25 4.8 -3.5 11.3 -8.8 14.8 -11.5 6 -5 9.8 -5.5 44 -5.8 75.8 -0.5 95.5 1 93.3 7.3 -0.8 1.8 -32.8 28 -64.8 52.8 -11.3 8.8 -62.5 49 -67.3 53 -2 1.8 -8.8 7 -15 11.8 -6.3 4.8 -12.5 9.8 -14 11.3 -1.8 1.3 -11.5 9.3 -22 17.3 -10.5 8 -18.8 15 -18.5 15.3 0.8 0.3 46 -2.3 103.3 -6 22 -1.5 57.3 -3.8 78.3 -5.3 21 -1.3 47.3 -3.3 58 -4 18.8 -1.5 20 -1.5 20 3.3 0 4.8 -7 13.3 -11 13.3 -2.8 0 -9 6.8 -9 9.8 0 1.3 -10 13 -22 25.8 -12.3 12.8 -27.5 29.3 -34.3 36.5 -6.5 7 -13.5 13 -15.3 13 -2 0 -3.5 1.5 -3.5 3.5 0 4 -5 4.8 -75 9 -52.5 3.3 -107.5 6.5 -160 10 -21.3 1.3 -58.5 3.5 -82.5 5 -24 1.5 -56.8 3.8 -73 5 -16 1.5 -35.3 2.5 -43 2.5 l-14 0 0 -8.3z" }),
            React__default['default'].createElement("path", { d: "M2038.8 2464.8 c-5.5 -4.5 -10.5 -9 -11.3 -9.8 -0.8 -0.8 -7.5 -6.3 -15 -12.5 -7.5 -6.3 -14.3 -11.8 -15 -12.5 -0.8 -0.8 -7.5 -6.3 -15 -12.5 -7.5 -6.3 -14.3 -11.8 -15 -12.5 -0.8 -0.8 -7.5 -6.3 -15 -12.5 -7.5 -6.3 -14.3 -11.8 -15 -12.5 -0.8 -0.8 -7.5 -6.3 -15 -12.5 -7.5 -6.3 -16.5 -13.8 -19.8 -16.5 -3 -3 -45 -37.8 -93 -77.5 -82 -68.3 -87 -72.8 -87 -80.5 l-0.3 -8.5 22 1.5 c12 1 33 2.8 46.8 4 13.8 1.3 38.5 3.5 55 5 16.5 1.5 41.8 3.8 56.3 5 14.5 1.3 39.8 3.5 56.3 5 16.5 1.5 41.3 3.8 55 5 13.8 1.3 38 3.5 53.8 4.8 15.8 1.5 40.5 3.8 55 5 14.5 1.5 36 3.3 47.8 4.3 12 0.8 22.5 2.3 23.8 3.3 1.3 0.8 10.8 11 21 22.8 10.3 11.8 20.5 23 22.5 25 12.3 12 25 28.8 25 33 0 4.3 -1.3 4.8 -13 3.5 -7.3 -0.8 -26.8 -2.5 -43.3 -4 -16.5 -1.5 -41.3 -3.8 -55 -5 -13.8 -1.3 -39 -3.5 -56.3 -5 -17.3 -1.5 -40.8 -3.8 -52.5 -5.3 -11.8 -1.3 -24.5 -2.3 -28.8 -2.3 l-7.5 0 7.5 7 c4.3 3.8 14.8 13 23.8 20.5 9 7.5 16.8 14.3 17.5 15 0.8 0.8 8.5 7.5 17.5 15 9 7.5 16.8 14.3 17.5 15 0.8 0.8 8.5 7.5 17.5 15 9 7.5 16.8 14.3 17.5 15 0.8 0.8 8.5 7.5 17.5 15 24.5 20.8 27.3 23 48.8 41.5 l19.8 17.3 -33.5 1.5 c-18.5 1 -55 2.5 -81.3 3.5 l-47.5 1.8 -10 -8.3z" }),
            React__default['default'].createElement("path", { d: "M2824.3 2469.8 c-17.8 -1 -32.8 -2.5 -33.5 -3 -0.8 -0.8 3.5 -5.8 9.5 -11 5.8 -5.3 11.8 -10.5 13.3 -12 1.5 -1.3 10 -8.8 19 -16.3 9 -7.5 16.8 -14.3 17.5 -15 0.8 -0.8 9.8 -8.5 20 -17.5 10.3 -9 19.3 -16.8 20 -17.5 0.8 -0.8 8.5 -7.5 17.5 -15 9 -7.5 16.8 -14.3 17.5 -15 1 -1 20 -17.5 46.3 -40.3 4 -3.5 11.5 -10.3 16.3 -14.5 l8.8 -8.3 -16.3 1.5 c-9 1 -26.3 2.8 -38.8 4 -12.3 1.5 -33.3 3.8 -46.3 5 -24.8 2.5 -53.8 5.8 -93 10 -57.8 6.5 -57 6.5 -57 -0.3 0 -3.8 4.3 -10.3 11.3 -17.3 6 -6.3 11 -12.8 11.3 -14.5 0 -3.8 6 -10.5 9.5 -10.5 3.8 0 13 -11.3 13 -15.8 0 -2.5 2 -5 4.5 -6 2.3 -0.8 8 -5 12.5 -9.3 7 -6.5 10.5 -7.8 27.5 -9.5 10.5 -1 31 -3 45.5 -4.5 14.5 -1.5 36.5 -3.8 48.8 -5 12.5 -1.3 33.3 -3.5 46.3 -5 13 -1.3 34.5 -3.5 47.5 -5 13 -1.3 34.8 -3.5 48.3 -5 13.3 -1.3 35.3 -3.8 48.8 -5 13.3 -1.5 35.5 -3.8 49.3 -5.3 13.8 -1.3 35.3 -3.5 47.5 -5 12.5 -1.3 30.8 -3 40.8 -4 l18 -1.5 0 8.5 c0 5.3 -1.8 10 -4.5 12.3 -2.5 2 -14 12 -25.8 22 -12 9.8 -23.5 18 -25.8 18 -2.3 0 -4 1.5 -4 3.3 0 4.3 -23 24.3 -28 24.3 -2.5 0 -4.5 1.5 -4.5 3.3 0 4.8 -10.8 14.3 -15.8 14.3 -2.3 0 -4.3 1.5 -4.3 3.5 0 1.8 -5.3 7.8 -11.8 13 -6.8 5.3 -12.5 10.3 -13.3 11 -0.8 0.8 -8.5 7.5 -17.5 15 -9 7.5 -16.8 14.3 -17.5 15 -5 5.5 -24.8 20 -27.3 20 -1.5 0 -2.8 1.5 -3 3.3 0 1.5 -4.8 6.8 -10.5 11.5 -5.8 4.5 -16 13.3 -23 19 -6.8 5.8 -22 18.8 -33.8 28.8 -11.8 10 -27.3 23.3 -34.5 29.5 -26.3 22.3 -20 20.5 -69.8 20.3 -24.5 -0.3 -59 -1.3 -76.5 -2.5z" }),
            React__default['default'].createElement("path", { d: "M2301.3 2253 c-8.5 -7.8 -29.3 -27.5 -46.5 -43.5 l-31.3 -29 -3 -31 c-1.8 -17 -4.3 -39.8 -5.5 -50.8 -1.3 -11 -3.5 -31.5 -5 -45.5 -5.3 -52.3 -7.8 -77.5 -10 -98.3 -1.3 -11.8 -3.5 -33 -5 -47.5 -1.5 -14.5 -3.8 -37.5 -5.3 -51.3 -1.5 -13.8 -3.5 -33.5 -4.8 -43.8 -1.3 -10.3 -3.3 -30.3 -4 -44.3 l-1.8 -25.8 8.8 0 c9 0 10.5 1.3 27 22.5 4.8 6.3 9.3 11.8 10 12.5 0.8 0.8 5.3 6.3 10 12.5 11 14 15.5 19.8 19 23.5 1.3 1.5 41.3 51.3 88.5 110.3 47.3 59.3 86.5 108 87.5 108.8 0.8 0.8 5.3 6.3 10 12.5 4.8 6.3 9.3 11.8 10 12.5 0.8 0.8 5.3 6.3 10 12.5 4.8 6.3 10 12.8 11.8 14.5 2 2.3 2.5 13.3 1.8 40 -1.8 55.3 -3.8 83.3 -6 82.5 -1.8 -0.8 -31.5 -37.8 -50 -62 -3.5 -4.5 -15.8 -20.3 -27.3 -34.8 -11.5 -14.5 -23.5 -29.8 -26.8 -34 -23 -29.8 -50.3 -64 -56.5 -71.3 l-7.5 -8.8 1.5 16.3 c1 9 2.8 27.3 4 40.8 1.5 13.3 3.5 35.3 5 48.8 1.3 13.3 3.5 35.5 5 49.3 3.5 32 7.5 72.3 9.8 97 1.5 18.3 1.5 19.3 -3.5 19.3 -2.8 0 -11.8 -6.5 -20 -14.5z" }),
            React__default['default'].createElement("path", { d: "M2678.8 2253.3 c0.8 -8 2.5 -21.8 3.8 -30.8 3 -21 6.8 -48.5 10 -75 1.5 -11.8 3.8 -28.5 5 -37.5 2.3 -15.8 4.5 -34 10 -78 1.5 -11.5 3.3 -24.8 4 -29.5 l1.3 -8.8 -5.8 6.3 c-3.3 3.5 -10.8 12.5 -17 20 -6.3 7.5 -13.8 16.5 -16.5 20 -3 3.5 -17.5 21 -32.3 38.8 -14.5 18 -28.5 34.8 -30.8 37.5 -2.3 2.8 -9.3 11.3 -15.5 18.8 -6.3 7.5 -13.8 16.5 -16.5 20 -3 3.5 -14.3 17 -25 30 l-19.8 23.8 -0.8 -23.5 c-0.3 -13 -1.8 -25 -3.3 -26.8 -1.5 -2 -2 -11 -0.8 -24.3 1 -14.5 0.8 -21.5 -1.3 -22.8 -3 -2 -3.3 -16.8 -0.8 -25.8 1 -3 4.5 -8.5 8 -12.5 3.5 -3.8 11.3 -13.3 17.5 -20.8 6.3 -7.5 11.8 -14.3 12.5 -15 0.8 -0.8 7.5 -8.5 15 -17.5 7.5 -9 14.3 -16.8 15 -17.5 0.8 -0.8 6.3 -7.5 12.5 -15 6.3 -7.5 11.8 -14.3 12.5 -15 0.8 -0.8 13 -15.3 27.5 -32.5 14.3 -17.3 26.8 -31.8 27.5 -32.5 0.8 -0.8 6.3 -7.5 12.5 -15 6.3 -7.5 11.8 -14.3 12.5 -15 0.8 -0.8 7.5 -8.5 15 -17.5 7.5 -9 14.3 -16.8 15 -17.5 0.8 -0.8 6.3 -7.5 12.5 -15 6.3 -7.5 11.8 -14.3 12.5 -15 0.8 -0.8 13.3 -15.3 27.5 -32.5 14.5 -17 28.5 -33.8 31 -36.8 3.3 -4 7.8 -5.8 13.5 -5.8 l8.8 0 -1.8 18.3 c-1 9.8 -2.8 24.8 -4 33 -1.3 8.3 -3.5 24.5 -5 36.3 -1.5 11.8 -3.8 28 -5 36.3 -1.3 8.3 -4.8 33 -7.5 55 -2.8 22 -6.3 47.3 -7.5 56.3 -1.3 9 -3.5 25.8 -5 37.5 -1.5 11.8 -3.8 28.5 -5 37.5 -1.3 9 -3.5 25.8 -5 37.5 -1.5 11.8 -3.8 28.5 -5 37.5 -1.3 9 -3.5 26.5 -5.3 38.8 -3 22 -7 31.3 -14 31.3 -1.8 0 -3.3 1.5 -3.3 3.5 0 4.5 -16.5 19 -21.3 19 -2 0 -3.8 1.5 -3.8 3.3 0 4.5 -26.5 29.3 -31.3 29.3 -2 0 -3.8 1.3 -3.8 3 0 5.3 -13.3 17 -19.5 17 -5.8 0 -5.8 -0.5 -4.3 -14.3z" })),
        React__default['default'].createElement("g", { fill: "#ff00a6" },
            React__default['default'].createElement("path", { d: "M2489 3675.8 c-1 -24.5 -2.8 -65.3 -4 -90.8 -1.5 -25.5 -2.5 -57.3 -2.5 -70.5 0 -13.3 -1 -24.8 -2 -25.5 -1.3 -0.8 -2.3 -22.5 -2.5 -48.3 0 -25.8 -1.3 -70 -2.8 -98.3 -1.5 -28.3 -3.8 -79.3 -5.3 -113.8 -6 -142.3 -7.8 -182.8 -10.3 -237 -2.5 -52 -2.5 -57.5 1.5 -63.3 3.3 -5 3.8 -10 3 -20.5 -0.8 -8 -1.8 -24.3 -2.5 -36.8 -0.5 -12.3 -1.3 -24.3 -1.8 -26.3 -0.5 -2 -0.5 -14.5 -0.3 -27.5 l0.5 -23.8 10 -11.3 c5.5 -6.3 13.5 -16 18 -21.8 4.5 -5.8 9.8 -10.5 11.8 -10.5 2 0 8 5.3 13 11.8 5.3 6.5 13.3 16 18.3 21.3 8 8.5 8.8 10.5 8.8 23.8 0 8 -0.8 15.5 -1.8 16.5 -1 0.8 -1.5 12.3 -1 25.3 0.3 13 -0.3 23.8 -1.5 23.8 -3.5 0 -0.8 55.8 3.3 60 2.8 3.3 3 11.8 1 48.8 -1.3 24.8 -3.5 75.5 -5 112.5 -2.8 73 -6 148.5 -10 241.3 -6 136.5 -7.5 175 -10 242.5 -1.5 39.3 -3.5 87 -4.5 106.3 l-1.8 35 -9 0.8 -9.3 0.8 -1.5 -44.5z" }),
            React__default['default'].createElement("path", { d: "M3352.5 3375.5 c-3.5 -3.8 -19.3 -18.5 -35 -33 -15.8 -14.5 -30.5 -28 -32.5 -30 -2 -2 -16.8 -15.5 -32.5 -30 -15.8 -14.5 -30.5 -28 -32.5 -30 -7.3 -7.3 -54.5 -50.8 -97.5 -90 -15.8 -14.5 -30.5 -28 -32.5 -30 -2 -2 -16.8 -15.5 -32.5 -30 -15.8 -14.5 -30.5 -28 -32.5 -30 -2 -2 -17.8 -16.8 -35 -32.5 -17.3 -15.8 -33 -30.5 -35 -32.5 -2 -2 -16.8 -15.5 -32.5 -30 -15.8 -14.5 -30.5 -28 -32.5 -30 -2 -2 -10.5 -10 -18.8 -17.5 -8.3 -7.5 -29.5 -27.3 -47.3 -43.8 -17.8 -16.5 -33.8 -31 -35.5 -32 -2 -1 -3.5 -5.8 -3.5 -10.3 0 -6.5 -2.3 -10.3 -11.8 -19 -32.5 -29.5 -67.8 -62.3 -76 -70 l-9.3 -8.8 -3 -32.5 c-1.5 -17.8 -3.3 -34.8 -4.3 -37.3 -1.3 -4.5 -0.3 -4.8 12 -3.3 7.5 1 19.8 1.8 27 1.8 13.8 0 13.8 0 30 17 9.3 9.3 21 22.3 26.5 28.5 36.3 41.5 52.3 57 58.8 57 7 0 7 0 47.5 45.3 11.8 12.8 23 25.3 25 27.3 2 2 13.3 14.5 25 27.5 11.8 13 23 25.5 25 27.5 2 2 13.3 14.5 25 27.5 11.8 13 23 25.5 25 27.5 2 2 13.3 14.5 25 27.5 11.8 13 27 30 34 37.5 7 7.5 18.3 20 25 27.5 6.8 7.5 12.8 14.3 13.5 15 0.8 0.8 12 13 25 27.5 13 14.5 24.3 26.8 25 27.5 0.8 0.8 12 13 25 27.5 13 14.5 25.5 28 27.5 30 2 2 8.3 8.8 13.5 15 5.3 6.3 15.5 17.5 22.5 25 7 7.5 22.3 24.5 34 37.5 11.8 13 23 25.5 25 27.5 2 2 13.3 14.5 25 27.5 11.8 13 23 25.5 25 27.5 16.5 16.5 22.5 25.5 22.5 33.8 0 8.3 -0.5 8.8 -8 8.8 -5.8 -0.3 -10.3 -2.3 -14.5 -7z" }),
            React__default['default'].createElement("path", { d: "M1610 3361.8 c0 -6 2.5 -11 9.3 -18 9.8 -10.8 20.3 -22 77 -82.5 20.8 -22 44.3 -47.3 52.5 -56.3 8.3 -8.8 18 -19 22 -22.8 3.8 -3.8 6.8 -8 6.8 -9.8 0 -3.5 6.3 -10 9.5 -10 1.3 0 7.3 -5.3 13.3 -11.8 5.8 -6.8 27.8 -30 48.3 -52 20.8 -22 45 -47.8 54 -57.3 9 -9.8 19 -20.5 22.5 -24 3.5 -3.5 20.3 -21.5 37.5 -40 17.3 -18.5 34 -36.5 37.5 -40 6.5 -6.8 18 -19 77.5 -82.5 69 -73.8 67.8 -72.5 75.5 -72.5 4.5 0 7 -1.3 7 -3.8 0 -2 1.5 -3.8 3.5 -3.8 4.5 0 31.8 -30 30 -32.8 -0.8 -1.3 0.3 -2.3 2.3 -2.3 3.8 0 39.3 -36.5 39.3 -40.5 0 -3 6.5 -9.5 9.5 -9.5 1.3 0 4 -2 6.5 -4.8 3.3 -3.5 9.5 -5 29.8 -6.3 14 -1 29 -2.3 33.5 -3 l8 -1.5 -1 12 c-0.8 6.8 -1.8 21 -2.8 31.8 -1 14.3 -2.3 19.3 -5 19.3 -2 0 -3.5 1.5 -3.5 3.3 0 4.5 -16.3 19.3 -21.3 19.3 -2 0 -3.8 1.5 -3.8 3.3 0 4.8 -10.8 14.3 -15.8 14.3 -2.5 0 -5.3 2.5 -6.5 5.8 -2.5 6 -13.8 16.8 -18 16.8 -3.3 0 -9.8 6.3 -9.8 9.5 0 3.5 -8 9.8 -13.8 11 -4 0.8 -4.8 2.5 -4.3 10 1 10.5 1.8 9.5 -32 39.5 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -12 10.8 -25 22.5 -13 11.8 -24.3 21.8 -25 22.5 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -23 20.5 -25 22.5 -2 2 -13.3 12.3 -25 22.5 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -12 10.8 -25 22.5 -13 11.8 -24.3 21.8 -25 22.5 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -12 10.8 -25 22.5 -13 11.8 -24.3 21.8 -25 22.5 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -26.3 23.5 -32.5 29.3 -8.5 8 -13.3 10.8 -19.3 10.8 -7.8 0 -8.3 -0.5 -8.3 -8.3z" }),
            React__default['default'].createElement("path", { d: "M2175 3213.8 c0 -7.8 0.8 -8.8 6.3 -8.8 6.5 0 7.3 2.3 4.8 12 -1 3.3 -3.5 5.5 -6.3 5.5 -3.8 0 -4.8 -1.8 -4.8 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2177.5 3188.8 c0 -7.8 0.8 -8.8 6.3 -8.8 6.5 0 7.3 2.3 4.8 12 -1 3.3 -3.5 5.5 -6.3 5.5 -3.8 0 -4.8 -1.8 -4.8 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2677.5 3098.8 c0 -8.5 0 -8.5 5.3 -4.3 2.8 2.3 6.3 6.3 7.5 8.8 2 3.5 1.3 4.3 -5.3 4.3 -7 0 -7.5 -0.8 -7.5 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2185 3091.3 c0 -7.8 0.8 -8.8 6.3 -8.8 6.5 0 7.3 2.3 4.8 12 -1 3.3 -3.5 5.5 -6.3 5.5 -3.8 0 -4.8 -1.8 -4.8 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2807.5 3063.8 c0 -2 -1 -3.8 -2.3 -3.8 -1.3 0 -1.8 -2.3 -1 -5 2.3 -8.8 8.3 -6 8.3 3.8 0 4.8 -1 8.8 -2.5 8.8 -1.3 0 -2.5 -1.8 -2.5 -3.8z" }),
            React__default['default'].createElement("path", { d: "M2805 3033.8 c0 -2 -1 -3.8 -2.3 -3.8 -1.3 0 -1.8 -2.3 -1 -5 2.3 -8.8 8.3 -6 8.3 3.8 0 4.8 -1 8.8 -2.5 8.8 -1.3 0 -2.5 -1.8 -2.5 -3.8z" }),
            React__default['default'].createElement("path", { d: "M1772.5 2811.3 c0 -2 1.5 -3.8 3.5 -3.8 2 0 4 -1.3 4.5 -2.8 1.3 -3.8 14.5 0 14.5 4 0 4 -5.5 6.3 -15.3 6.3 -4.8 0 -7.3 -1.3 -7.3 -3.8z" }),
            React__default['default'].createElement("path", { d: "M1897.5 2803.8 c0 -2 1.5 -3.8 3.5 -3.8 2 0 4 -1.3 4.5 -2.8 1.3 -3.8 14.5 0 14.5 4 0 4 -5.5 6.3 -15.3 6.3 -4.8 0 -7.3 -1.3 -7.3 -3.8z" }),
            React__default['default'].createElement("path", { d: "M3072.5 2801.5 c0 -4.8 8.3 -6.5 13.3 -2.8 6.3 4.5 5.3 6.3 -4.5 6.3 -5.8 0 -8.8 -1.3 -8.8 -3.5z" }),
            React__default['default'].createElement("path", { d: "M2990 2794 c0 -4.8 8.3 -6.5 13.3 -2.8 6.3 4.5 5.3 6.3 -4.5 6.3 -5.8 0 -8.8 -1.3 -8.8 -3.5z" }),
            React__default['default'].createElement("path", { d: "M1755 2776.3 l0 -8.8 12 0 11.8 0.3 -10 8.5 c-5.5 4.8 -10.8 8.8 -11.8 8.8 -1.3 0 -2 -4 -2 -8.8z" }),
            React__default['default'].createElement("path", { d: "M1842.5 2710 l0 -10 11.3 0 c6.3 0 11.3 0.8 11 2 0 1 -5 5.5 -11.3 9.8 l-11 8.3 0 -10z" }),
            React__default['default'].createElement("path", { d: "M2028.8 2539.8 c-20.5 -1 -69.5 -3 -108.8 -4.5 -87.8 -3.5 -173.5 -7 -247.5 -10.3 -106.8 -4.5 -272.3 -11.3 -350.8 -14 l-44.3 -1.8 0 -9.3 0 -9.5 47 -1.5 c25.8 -1 67 -2.8 91.5 -4 24.8 -1.5 55.8 -2.5 69.3 -2.5 14.8 0 25 -1 26 -2.8 1 -1.5 10.5 -2.5 23.5 -2.5 39.8 0.3 118.5 -2 235.3 -7.3 29.5 -1.3 84.8 -3.5 122.5 -5 37.8 -1.5 88 -3.8 111.3 -5 35.5 -1.8 43.5 -1.8 48 1.5 6.3 4 47 5 49.3 1.3 0.8 -1.3 11 -1.5 22.8 -1 11.5 0.8 22.5 0.5 24.3 -1 1.8 -1.3 15.3 -1.8 30 -1.3 l26.8 1 22 18.8 c12 10.5 22.3 19.8 22.8 21 0.5 1 -1.5 3 -4.3 4.5 -2.8 1.5 -6.3 4.3 -8.3 6 -1.8 1.8 -10.8 9 -20.3 16.3 -13.8 10.8 -18 12.8 -23.3 11.5 -7.3 -2 -36.3 -3 -82.3 -3 -22.5 0 -31 0.8 -34 3.5 -2 2 -5.5 3.3 -7.5 3.3 -2 -0.3 -20.3 -1.3 -41 -2.5z" }),
            React__default['default'].createElement("path", { d: "M2917.5 2539.3 c-4.8 -4.5 -41.8 -7.8 -44 -3.8 -1 1.8 -9.8 2.3 -24 1.5 -12 -0.8 -22.8 -0.5 -23.5 0.8 -0.8 1.3 -7.3 2.3 -14.3 2.3 -10.3 0 -14.5 -1.3 -20 -6 -4 -3.5 -15 -12 -24.5 -19.3 -9.5 -7.3 -17.3 -14 -17.3 -15 0 -1 2.5 -3.5 5.8 -5.5 3 -2.3 11.8 -9.8 19.3 -16.8 17.3 -16.3 27.3 -21 36.5 -17.3 3.8 1.3 15.5 2.5 25.8 2.8 10.5 0 37.5 0.5 60.3 1 25 0.5 42.3 -0.3 44 -1.8 3.5 -2.8 84.5 -0.3 324.8 10.5 34.5 1.5 85.5 3.3 113.8 4 65 1.5 80 2 141.3 5.5 53 2.8 167.8 7.8 185.8 7.8 l10.5 0 0 10 0 10 -11.8 0 c-6.8 0.3 -37.3 1.3 -68.3 2.5 -31 1.3 -86.5 3.5 -123.8 5 -37 1.3 -91.8 3.5 -121.3 5 -29.5 1.5 -81.3 3.8 -115 5 -33.8 1.5 -87.8 3.8 -120 5 -32.3 1.3 -86.3 3.5 -120 5 -33.8 1.3 -73.5 3 -88.8 4 -22.3 1.3 -28.3 0.8 -31.3 -2.3z" }),
            React__default['default'].createElement("path", { d: "M3062.3 2360.3 c1.8 -1.3 2.5 -3.5 1.8 -5 -1 -1.8 0 -2.8 2.8 -2.8 2.8 0 6 -1.3 7.8 -3 2.3 -2.3 3 -1.3 3 5 0 7.5 -0.5 8 -9.3 8 -6.5 0 -8.5 -0.8 -6 -2.3z" }),
            React__default['default'].createElement("path", { d: "M1887.5 2332.3 l0 -7.5 7.5 5.3 c11 7.8 11.3 10 1.5 10 -8.3 0 -9 -0.5 -9 -7.8z" }),
            React__default['default'].createElement("path", { d: "M2327.3 2319 c-0.5 -0.5 -16.8 -2.3 -36 -3.8 -31.5 -2.5 -35.5 -3.3 -39.5 -8.3 -2.8 -3.3 -13.3 -15.3 -23.8 -27 -10.8 -11.5 -23.8 -26.3 -29.3 -32.5 -12.8 -14.3 -13.5 -15 -21.5 -15 -4.8 0 -9.3 -3 -14.8 -9.3 -4.5 -5.3 -12.8 -14.5 -18.5 -20.8 -5.5 -6.3 -18.8 -20.8 -29 -32.5 -10.3 -11.8 -20.5 -23 -22.5 -25 -2 -2 -12.3 -13.3 -22.5 -25 -10.3 -11.8 -19.3 -21.8 -20 -22.5 -0.8 -0.8 -10.8 -12 -22.5 -25 -11.8 -13 -21.8 -24.3 -22.5 -25 -0.8 -0.8 -9.8 -10.8 -20 -22.5 -10.3 -11.8 -20.5 -23 -22.5 -25 -2 -2 -8.3 -8.8 -13.5 -15 -5.5 -6.3 -18.5 -20.8 -29 -32.5 -10.5 -11.8 -23.5 -26.3 -29 -32.5 -5.3 -6.3 -11.5 -13 -13.5 -15 -2 -2 -12.3 -13.3 -22.5 -25 -10.3 -11.8 -19.3 -21.8 -20 -22.5 -0.8 -0.8 -9.8 -10.8 -20 -22.5 -10.3 -11.8 -24.5 -27.5 -31.5 -35 -7 -7.5 -17.3 -18.8 -22.5 -25 -5.3 -6.3 -11.5 -13 -13.5 -15 -2 -2 -12.3 -13.3 -22.5 -25 -10.3 -11.8 -19.3 -21.8 -20 -22.5 -0.8 -0.8 -10.8 -12 -22.5 -25 -11.8 -13 -21.8 -24.3 -22.5 -25 -0.8 -0.8 -9.5 -10.5 -19.3 -21.5 -14.5 -16 -18.3 -22 -18.3 -28.3 0 -7 0.8 -7.8 7.8 -7.8 8.8 0 8.3 -0.5 68.5 56 20.5 19.5 45.3 42.5 55 51.5 9.5 9 19 18 21.3 20 2 2 17.8 16.8 35 32.5 17 15.8 35 32.8 40 37.5 4.8 4.8 24 22.8 42.5 40 18.5 17.3 35.5 33 37.5 35 2 2 19 17.8 37.5 35 18.5 17.3 36.5 34 40 37.5 3.5 3.5 20.3 19.3 37.5 35 17.3 15.8 34 31.5 37.5 35 3.5 3.5 21.5 20.3 40 37.5 18.5 17.3 36.5 34 40 37.5 3.5 3.5 20 19 37 34.8 25 23 30.5 29.5 30.5 35.3 0 5.8 5.8 12.3 31.8 36.5 17.8 16.5 39.5 37 48.5 46 l16.8 16.3 1.5 21.3 c1 11.8 2.3 24.3 3 28.3 1.3 5.8 -1 8.8 -4.3 5.8z" }),
            React__default['default'].createElement("path", { d: "M2671 2309.8 c1 -6 2.8 -19.3 4 -29.3 2.3 -16.3 3.3 -18.8 11.3 -25.8 4.8 -4.3 8.8 -9.3 8.8 -11.3 0 -2 1.8 -3.5 3.8 -3.5 4.8 0 31.3 -24.8 31.3 -29.3 0 -1.8 1.8 -3.3 3.8 -3.3 4.8 0 21.3 -14.5 21.3 -19 0 -2 1.5 -3.5 3.3 -3.5 5.5 0 11.8 -8.5 11.8 -15.5 0 -4.3 3 -9.3 9.5 -14.5 5 -4.5 21.5 -19.5 36.8 -33.5 15 -14 33.5 -30.8 41.3 -37.8 7.5 -6.8 15.5 -14.3 17.5 -16.3 2 -2 15.5 -14.5 30 -27.5 14.5 -13 28 -25.5 30 -27.5 2 -2 16.8 -15.5 32.5 -30 15.8 -14.5 29.3 -26.8 30 -27.5 0.8 -0.8 14.3 -13 30 -27.5 15.8 -14.5 30.5 -28 32.5 -30 2 -2 15.5 -14.5 30 -27.5 14.5 -13 28 -25.5 30 -27.5 2 -2 13.5 -12.8 25.8 -23.5 12 -10.8 21.8 -20.8 21.8 -22 0 -3.3 6.5 -9.5 10 -9.5 3.8 0 22.5 -17.8 22.5 -21.5 0 -1.5 2.5 -3.8 5.8 -4.5 3 -0.8 12.8 -8.5 21.8 -17 9 -8.8 28 -26.5 42.5 -39.5 14.5 -13 28 -25.5 30 -27.5 2 -2 15.5 -14.5 30 -27.5 14.5 -13 28 -25.8 30.3 -28 2.5 -2.8 7.8 -4.5 13.3 -4.5 8.5 0 9 0.5 9 8.3 0 6.3 -3 11.3 -14.5 23 -7.8 8.5 -19.8 21.3 -26.5 28.8 -6.8 7.5 -18 20 -25 27.5 -7 7.8 -18.3 20 -25.3 27.5 -45.5 50 -60 65 -63 65 -1.8 0 -3.3 1.5 -3.3 3.3 0 4 -14.5 21.8 -17.8 21.8 -3.5 0 -9.8 6.5 -9.8 10 0 2.5 -33.8 41.3 -50 57.5 -2 2 -9.3 10 -16 17.5 -6.8 7.5 -18 20 -25 27.5 -7 7.5 -23.5 25.5 -36.5 40 -13 14.5 -25.5 28 -27.5 30 -2 2 -14.5 15.5 -27.5 30 -13 14.5 -29.5 32.5 -36.5 40 -7 7.5 -18.3 20 -25 27.5 -6.8 7.5 -14 15.5 -16 17.5 -2 2 -8.8 9.5 -15 16.3 -9.8 11 -39.3 43.3 -74.8 81.8 -7 7.8 -13 12 -16.8 12 -3.3 0 -10.3 3.8 -15.3 8.3 -5.3 4.8 -11.5 9.3 -14 10 -2.5 1 -4 2.8 -3.3 4 1.8 2.8 -10.3 17.8 -14 17.8 -3.3 0 -9.5 6.5 -9.5 10 0 1.5 -1.5 4.3 -3 6 -1.8 1.8 -7.5 7.8 -12.5 13.5 -8.5 9.3 -10.5 10.3 -27.5 12.8 -10 1.3 -26 3.3 -35.8 4 -9.5 0.8 -19.8 2.3 -22.3 3 -4.3 1.3 -4.5 0.3 -3 -9.5z" }),
            React__default['default'].createElement("path", { d: "M3173.3 2263.8 c1.8 -3.5 4.8 -6.3 7 -6.3 2 0 5 -1.3 6.8 -3 2.3 -2.3 3 -1.3 3 4.8 0 8 -3.5 10.8 -13.8 10.8 -5.3 0 -5.5 -0.5 -3 -6.3z" }),
            React__default['default'].createElement("path", { d: "M2487.5 2234.5 c-5.8 -7.3 -13.3 -17 -17 -21.8 -7 -8.8 -11.3 -27.8 -7.5 -33.5 1.3 -1.5 2 -19.3 1.8 -39.3 0 -20 0.5 -38 1.5 -40.3 0.8 -2.3 -0.3 -5.8 -2.5 -8 -4.5 -4.5 -4.8 10.3 8.8 -335.5 2.3 -54.5 4 -106 7 -206.3 0.3 -7.5 1.3 -34.5 2.8 -60 1.3 -25.5 3.5 -81.8 5 -125 1.8 -43.3 3.5 -80.3 4 -81.8 0.5 -1.8 5 -3.3 9.8 -3.3 l8.5 0 1.5 43 c1 23.8 2.8 66.3 4 94.5 1.3 28.3 3.5 80.5 5 116.3 1.5 35.8 3.8 89.8 5 120 1.3 30.3 3.5 83.8 5 118.8 1.5 35 3.8 87.5 5 116.3 8.5 188.3 8.8 190.8 4.5 195.5 -5.3 6 -7.8 17.5 -4.3 19.5 1.8 1.3 2.5 10 2 24 -0.5 12 0 22.8 1 23.8 1 1 1.8 12.5 1.8 25.8 0 23.8 -0.3 24.3 -9 35 -16.8 21.3 -29 35.3 -31 35.3 -1.3 0 -6.8 -6 -12.5 -13z" }),
            React__default['default'].createElement("path", { d: "M3205.8 2236.3 c1.8 -3.5 4.8 -6.3 7 -6.3 2 0 5 -1.3 6.8 -3 2.3 -2.3 3 -1.3 3 4.8 0 8 -3.5 10.8 -13.8 10.8 -5.3 0 -5.5 -0.5 -3 -6.3z" }),
            React__default['default'].createElement("path", { d: "M3005 2206.5 c0 -6 0.8 -6.5 11.3 -6.5 9.5 0 11.3 0.8 11.3 5 0 2.8 -1.5 5 -3.5 5 -1.8 0 -7 0.8 -11.3 1.5 -7 1.5 -7.8 1 -7.8 -5z" }),
            React__default['default'].createElement("path", { d: "M1879.5 2205.8 c-5 -0.8 -7 -2.5 -7 -6 0 -3.8 1.8 -4.8 8.8 -4.8 7.8 0 8.8 0.8 8.8 6.3 0 3.5 -0.8 6 -1.8 6 -1.3 -0.3 -5 -1 -8.8 -1.5z" }),
            React__default['default'].createElement("path", { d: "M1767 2195.8 c-5 -0.8 -7 -2.5 -7 -6 0 -3.8 1.8 -4.8 8.8 -4.8 7.8 0 8.8 0.8 8.8 6.3 0 3.5 -0.8 6 -1.8 6 -1.3 -0.3 -5 -1 -8.8 -1.5z" }),
            React__default['default'].createElement("path", { d: "M2200 1983.8 c0 -7 1 -8.8 5 -8.8 2.8 0 5 1.5 5 3.3 0 1.5 0.8 5.5 1.5 8.8 1.3 4.8 0.5 5.5 -5 5.5 -5.8 0 -6.5 -1 -6.5 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2630 1961.3 c0 -8.5 0.3 -8.8 10 -8.8 l10.3 0 -7 8.8 c-9 11.3 -13.3 11.3 -13.3 0z" }),
            React__default['default'].createElement("path", { d: "M2195 1936.3 c0 -7 1 -8.8 5 -8.8 2.8 0 5 1.5 5 3.3 0 1.5 0.8 5.5 1.5 8.8 1.3 4.8 0.5 5.5 -5 5.5 -5.8 0 -6.5 -1 -6.5 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2657.5 1928.8 c0 -8.5 0.3 -8.8 10 -8.8 l10.3 0 -7 8.8 c-9 11.3 -13.3 11.3 -13.3 0z" }),
            React__default['default'].createElement("path", { d: "M2187.5 1858.8 c0 -7 1 -8.8 5 -8.8 2.8 0 5 1.5 5 3.3 0 1.5 0.8 5.5 1.5 8.8 1.3 4.8 0.5 5.5 -5 5.5 -5.8 0 -6.5 -1 -6.5 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2809.3 1862.5 c-0.8 -2.8 -0.3 -5 1 -5 1.3 0 2.3 -1.8 2.3 -3.8 0 -2 1.8 -3.8 3.8 -3.8 2.5 0 3.8 2.8 3.8 8.8 0 7 -1 8.8 -4.8 8.8 -2.5 0 -5.3 -2.3 -6 -5z" }),
            React__default['default'].createElement("path", { d: "M2247 1822 l-6.8 -8.3 6.3 -0.8 c8.3 -1 9 -0.3 8 9.5 l-0.8 8 -6.8 -8.5z" }),
            React__default['default'].createElement("path", { d: "M2182.5 1811.3 c0 -7 1 -8.8 5 -8.8 2.8 0 5 1.5 5 3.3 0 1.5 0.8 5.5 1.5 8.8 1.3 4.8 0.5 5.5 -5 5.5 -5.8 0 -6.5 -1 -6.5 -8.8z" })),
        React__default['default'].createElement("g", { fill: "#fb40ee" },
            React__default['default'].createElement("path", { d: "M1816.5 4109.5 c-6.8 -10.5 -26.3 -64.8 -35.3 -98.3 -17.5 -64 -32.8 -141 -41.3 -207.5 -5.8 -44 -9.8 -97.8 -11.5 -149.5 -1.3 -41.3 -2.5 -54.3 -4.8 -53.3 -4.5 1.5 -7.8 -48.5 -3.5 -51.3 2.3 -1.3 2.5 -8.3 1.3 -25.8 -1 -15 -0.8 -24 0.8 -24 1.5 0 2 -5 1 -12.5 -0.8 -6.8 -0.5 -12.5 0.8 -12.5 1.3 0 2.3 -9 2.5 -20.3 0 -11 1.3 -21 2.5 -21.8 1.3 -1 2.5 -9 2.5 -18 0.3 -9.3 1.8 -16.5 3.3 -17 1.5 -0.5 2.8 -6 2.8 -12.5 0 -14.5 5 -43 7.5 -43 1 0 2.5 -7.5 3.3 -16.8 1 -9.5 2.8 -17.3 4.3 -17.8 1.3 -0.5 2.5 -4.8 2.5 -9.8 0 -4.8 1.8 -10.3 3.8 -12.3 2 -2.3 3.8 -8.3 3.8 -13.8 0 -5.3 1 -9.8 2.3 -9.8 1 0 2.8 -6 3.5 -13 1 -7.3 2.8 -13.5 4.3 -14 1.3 -0.5 2.5 -3.8 2.5 -7 0 -4.3 4.3 -10 13.5 -18.8 22.3 -20.5 30 -25.8 47.3 -32.3 9.3 -3.3 16.8 -7.5 16.8 -9.3 0 -1.8 2.5 -3.3 5.8 -3.3 9.5 0 16.8 -3 16.8 -6.5 0 -2 2.5 -3.5 5.8 -3.5 9.5 0 16.8 -3 16.8 -6.5 0 -2 2.5 -3.5 6.3 -3.5 7.5 0 31.3 -11.5 31.3 -15 0 -1.5 2.3 -2.5 5 -2.5 2.8 0 5 -1 5 -2.5 0 -1.3 2.3 -2.5 5 -2.5 2.8 0 5 -1 5 -2.5 0 -1.3 2.3 -2.5 5 -2.5 2.8 0 5 -1 5 -2.5 0 -1.3 2.3 -2.5 5 -2.5 2.8 0 5 -1 5 -2.5 0 -1.3 2.3 -2.5 5 -2.5 7 0 40 -16.8 41.8 -21.3 0.8 -2 4 -3.8 7.3 -3.8 3.3 0 7.3 -2.3 9 -5 1.8 -2.8 5.5 -5 8.3 -5 2.8 0 21.3 -10 41.3 -22 48.5 -29.5 55 -33.8 55 -37 0 -1.5 3.5 -3.5 7.5 -4.3 4.5 -1 7.5 -3.3 7.5 -5.5 0 -2 1.8 -3.8 4.3 -3.8 6 0 28.3 -15 28.3 -19 0 -2.3 2.8 -3.5 7.8 -3.5 l8 0 -1.5 20.8 c-5.5 71 -7.3 90.5 -8.8 91.8 -1 0.8 -1.8 10.3 -1.8 21.3 -0.3 26.5 -4 76.3 -6 76.3 -0.8 0 -1 5.3 -0.5 11.5 0.5 6.5 -0.3 12.3 -1.3 13.3 -1.3 0.8 -1.8 9.8 -1 19.8 l1.3 18.5 38.8 -45.5 c21.3 -25.3 40 -47 41.3 -48.5 1.5 -1.5 8.8 -10 16.3 -19 7.5 -9 14.3 -16.8 15 -17.5 0.8 -0.8 7.5 -8.5 15 -17.5 7.5 -9 14.3 -16.8 15 -17.5 0.8 -0.8 7.5 -8.5 15 -17.5 7.5 -9 15 -17.5 16.5 -19 1.5 -1.8 5.5 -6.5 9.3 -11 3.8 -4.3 7.8 -7.3 9 -6.5 1.3 0.8 3 6.8 3.8 13.3 5.3 36.3 21.8 110.3 36.3 163.3 19.3 69.3 38.5 127.8 62 187.5 5.5 14.3 6.5 20.5 7 50.8 0.3 18.8 1.3 35 2.3 36 6.3 6.3 -8.8 40.8 -44.3 102 -28.8 49.5 -73.3 113.8 -78.5 113.8 -1.8 0 -3.3 1.8 -3.3 4 0 3.3 -11.5 20.3 -17.5 26 -0.8 0.8 -5.5 6.5 -10.8 13 -5.3 6.5 -10.8 13.3 -12.5 15 -1.8 1.8 -9.8 10.8 -17.8 20.3 -8 9.3 -16.3 16.8 -18 16.8 -2 0 -3.5 1.8 -3.5 3.8 0 2.3 -2.8 6.8 -6.3 10.3 -5.5 5.5 -6.3 5.8 -6.3 1.5 0 -2.5 -0.5 -5.3 -1.3 -5.8 -0.5 -0.8 -15.5 13 -33 30.3 -17.5 17.3 -41.5 39.8 -53.3 50 -11.5 10.3 -22.5 20 -24.5 21.8 -1.8 1.8 -8.5 7.3 -15 12.5 -6.5 5.3 -13.3 11 -15 12.8 -2 1.8 -7.5 6.3 -12.5 10 -5.3 3.8 -9.8 7.3 -10.5 8 -5.3 5.8 -76.3 56.8 -105 75.5 -69.8 45.3 -159.3 92 -176.3 92 -2 0 -5.3 -2.5 -7.3 -5.5z" }),
            React__default['default'].createElement("path", { d: "M3152 4111.3 c-30.8 -11.5 -102 -50 -152.5 -82.8 -29.3 -19 -72.5 -48.5 -74.5 -51 -0.8 -0.8 -5.3 -4.3 -10 -7.5 -4.8 -3.5 -10.5 -7.5 -12.5 -9.3 -2 -1.5 -16.5 -13 -31.8 -25.3 -41.5 -33 -74.5 -62.3 -116.3 -103.5 -20.5 -20 -22 -21.3 -23.5 -15.8 l-1.5 6 -7.8 -8.3 c-14.5 -14.8 -35.3 -37.5 -49.3 -53.8 -7.5 -8.8 -14.8 -17.3 -16.3 -18.8 -1.3 -1.5 -5.5 -6.8 -9.3 -12 -3.8 -5 -8.3 -10.5 -10 -12.5 -1.8 -1.8 -6.5 -7.8 -10.8 -13.3 -4 -5.5 -8.3 -11 -9.3 -12.5 -7 -8.5 -23.8 -32.3 -37.3 -53.3 -8.8 -13.3 -16.8 -24.5 -17.8 -25 -1.3 -0.5 -2 -2.5 -2 -4.5 0 -2 -1 -3.5 -2 -3.5 -1.3 0 -4 -4.3 -6.3 -9.3 -2.3 -5.3 -5.8 -11.8 -8 -14.5 -2 -2.8 -10.3 -18 -18.5 -33.8 l-14.8 -28.8 0 -26.3 c-0.3 -51.8 4.8 -124.5 8.5 -127 4.5 -3 8.5 -12.3 8.5 -20.3 0 -4 1.3 -7.8 2.5 -8.3 3.3 -1 22.5 -56 22.5 -64.3 0 -9.5 8 -36.3 11.8 -39 1.8 -1.3 4.3 -10.8 5.5 -21 1.3 -10.3 3.5 -19.3 4.8 -20 3.8 -2.5 8 -18.5 10.3 -39.3 1.3 -10.8 3.5 -20 5 -20.5 1.5 -0.5 2.8 -4.8 2.8 -9.5 0 -4.8 2.8 -22.5 6 -39.3 3.5 -16.8 7 -35.8 8 -42.3 0.8 -6.8 2.5 -12 3.8 -12 1.3 0 2.3 -3 2.3 -6.8 l0.3 -7 9 10 c17.8 19.8 27.3 30.3 43.3 48.8 9 10.3 18 20.5 20 22.5 2 2 11 12.3 20 22.5 9 10.3 16.8 19.3 17.5 20 0.8 0.8 9.8 10.8 20 22.5 10.3 11.8 19.3 21.8 20 22.5 0.8 0.8 9.8 10.8 20 22.5 10.3 11.8 22.5 25.3 27 30.3 4.5 5 10 11.3 12 13.8 4.3 5.3 4 1.3 -1.5 -54 -4.3 -43.3 -7.5 -76 -10.3 -102.5 -1.3 -14.5 -3.5 -37 -4.8 -50 -6 -58.8 -6 -62.5 -1.5 -62.5 2.5 0 21.3 11.3 42 25.3 38 25.3 94.8 60.3 105 64.8 3.3 1.3 11.5 5.8 18.3 10 18.3 11 121.3 62.5 125 62.5 1.8 0 4.5 1.5 6 3.5 1.8 2 6.8 4.5 11 5.3 4.5 1 9.8 3.3 11.8 5 2 1.8 7.3 4.3 11.8 5.5 7.3 1.8 26 17.8 66.3 55.8 14 13.3 15 14.8 22 40 28 97.8 42.3 188.8 46.5 295 1.5 36.5 1.3 40.8 -2 38.3 -3.3 -2.8 -4 4.3 -5.5 60 -0.8 34.5 -2.8 73.3 -4 85.5 -1.3 12.5 -3.5 33.8 -5 47.5 -5 45.8 -12 87.5 -27.8 162.5 -9.3 44 -34.8 127 -46.8 151.3 -7.5 15.3 -11.3 16.8 -26 11.3z" }),
            React__default['default'].createElement("path", { d: "M1396.8 3277 c2.8 -3.3 -3.5 -4 -55 -5.5 -31.8 -1 -68 -2.8 -80.5 -4 -12.3 -1.3 -33.8 -3.5 -47.5 -5 -23.8 -2.5 -35 -4 -73 -10.3 -78.3 -12.3 -168.3 -35.5 -225 -57.5 -30.8 -12 -32.5 -13.8 -28.3 -28 4 -13.8 29.5 -66.3 47 -96.5 13.3 -23.3 50.3 -82.8 53 -85.3 0.8 -0.8 8.5 -12 17.5 -25 8.8 -13 16.8 -24.3 17.5 -25 0.8 -0.8 4.3 -5.3 7.5 -10 3.5 -4.8 7.5 -10.5 9.3 -12.5 1.5 -2 13 -16.5 25.3 -31.8 35 -44.3 64 -76.5 108.8 -121.3 23.3 -23.3 26 -27 20.5 -27 -3.5 0 -6.3 -0.5 -6.3 -1.3 0 -2.3 20.3 -21 52 -48.5 8.5 -7.5 15.5 -15 15.5 -17 0 -1.8 2 -3.3 4.5 -3.3 5.3 0 20.5 -12.8 20.5 -17 0 -1.8 1.8 -3 4 -3 5.8 0 18.5 -9.8 18.5 -14 0 -2 2 -3.5 4.5 -3.5 2.3 0 11.8 -5.3 20.8 -11.8 9 -6.8 25 -17.5 35.5 -24.5 10.5 -6.8 19.3 -14 19.3 -15.5 0 -1.8 1.3 -3.3 2.8 -3.3 1.5 0 4.3 -1.8 6.3 -3.8 2.3 -2 6.3 -3.8 9.3 -3.8 6.3 -0.3 14.3 -5.5 14.3 -9.5 0 -1.8 3 -3.5 7 -4.3 7.5 -1.8 15.5 -5.5 52.8 -24.8 28.8 -15.3 31.5 -15.5 82.8 -12.8 55.8 3 65.8 4.5 77.8 10.3 6.5 3.3 13.8 6 16.5 6 2.5 0 5.8 1 7 2.3 3.3 3 57.5 20.8 81.3 26.5 10.3 2.5 21 6 23.8 7.8 2.8 1.8 12.3 4.3 20.8 5.8 8.8 1.5 17.3 3.5 18.8 4.8 4 3.3 34 10.5 43.3 10.5 4 0 10.5 1.8 14.5 3.8 3.8 2 9.8 3.8 13 3.8 3.5 0 20 2.8 36.8 6 16.8 3.5 35.8 7 42.5 8 6.5 0.8 12.5 2.5 13.3 3.8 0.8 1.3 3.5 2.3 6.3 2.3 2.5 0 4.8 0.8 4.8 2 0 1 -10.5 9.8 -23.3 19.3 -12.5 9.8 -24.8 19 -26.8 20.5 -2 1.8 -15.5 12.3 -30 23.3 -14.5 11 -29 22.5 -32.5 25 -3.3 2.8 -8 5 -10.3 5 -2.5 0 -4.8 1.8 -5.3 3.8 -1 5.3 -77 63.8 -82.5 63.8 -2.5 0 -4.5 1.5 -4.5 3.3 0 3.5 -2.3 5.5 -21.8 20.3 -7.3 5.5 -12.8 10.5 -12 11 0.5 0.5 18.3 -0.3 39.3 -1.8 46.3 -3.3 97.5 -6.8 159.5 -10.5 25.5 -1.5 57.3 -3.5 70.8 -4.5 22.3 -1.5 24.3 -1.3 24.3 2.8 0 2.5 -12.3 22.8 -27.3 45 -24.8 37.3 -54.5 85.5 -71.3 115.3 -3.5 6.5 -9.3 16.5 -12.5 22.5 -10.8 19.5 -42.8 82.8 -57.5 114.3 -12.8 27.3 -17.5 34.3 -36 54.3 -11.8 12.8 -22.3 23.3 -23.5 23.3 -3.3 0 -9.5 6.5 -9.5 10 0 1.5 -3.8 6.5 -8 11 -4.5 4.5 -15.8 16 -24.8 25.8 l-16.5 17.5 -31 7.8 c-90 22.5 -168.5 33.5 -264.8 37 -41 1.5 -46 1.3 -43.3 -2z" }),
            React__default['default'].createElement("path", { d: "M3543.8 3278.3 c-53.8 -1.8 -124.5 -10.3 -185 -22.3 -32.8 -6.5 -79 -17.3 -88.8 -20.8 -3.5 -1.3 -13.3 -4.3 -22 -6.8 -14.3 -4 -17.3 -6.3 -30 -21 -7.8 -9 -16 -18 -18 -20 -18.8 -18.3 -44.8 -50.5 -47.3 -58 -1.8 -5.3 -4 -9.5 -5 -9.5 -1 0 -3 -5 -4.8 -11.3 -1.8 -6.3 -4 -11.3 -5.5 -11.3 -1.3 0 -2.5 -1.8 -2.5 -3.8 0 -4.5 -13 -32.3 -15.5 -33.3 -1.3 -0.5 -2 -3 -2 -5.8 0 -2.5 -1 -4.8 -2.5 -4.8 -1.3 0 -2.5 -2.3 -2.5 -5 0 -2.8 -1 -5 -2.5 -5 -1.3 0 -2.5 -2.3 -2.5 -5 0 -2.8 -1 -5 -2.5 -5 -1.3 0 -2.5 -2.3 -2.5 -4.8 0 -2.8 -0.8 -5.3 -1.8 -5.8 -1.3 -0.3 -7 -10.8 -13 -23.3 -6.3 -12.3 -12 -23 -12.8 -23.8 -1 -0.8 -3.3 -5 -5.3 -9.3 -2 -4.5 -4.3 -8.3 -5.3 -8.3 -1.3 0 -2 -1.3 -2 -3 0 -4.8 -53.8 -93 -61.8 -101.5 -1.8 -1.8 -3.3 -4.3 -3.3 -5.5 0 -1.3 -1.5 -3.8 -3.3 -5.5 -1.8 -1.8 -7.5 -10.3 -13 -18.8 -5.5 -8.8 -10.8 -15.8 -11.8 -15.8 -1.3 0 -2 -3.3 -2 -7.5 0 -7.5 0.3 -7.5 13.3 -7.5 7 0 22.5 1 34.3 2.3 11.8 1.5 37 3.8 56.3 5.3 19.3 1.5 46.3 3.8 60 5 13.8 1.3 39.8 3.5 57.5 5 18 1.5 43.8 3.8 57.3 5.3 13.8 1.3 25.3 1.8 25.8 1.3 1 -0.8 -11.5 -10.8 -52.8 -42.3 -4 -3 -28.3 -21.8 -54 -41.8 -25.8 -20 -50.5 -39 -55 -42.5 -43 -32.8 -91.5 -71 -92 -72.8 -0.5 -1.3 2 -2.3 5.5 -2.3 3.5 0 6.5 -1 6.5 -2.3 0 -1.3 5.3 -3 12 -3.8 6.5 -1 25.5 -4.5 42.3 -8 16.8 -3.3 34.5 -6 39.5 -6 4.8 0 8.8 -1 8.8 -2.5 0 -1.3 4.5 -2.5 10 -2.5 12 0 48 -9.3 50.3 -12.8 0.8 -1.5 9.8 -3.8 20 -5 10.3 -1.3 19.8 -3.8 21 -5.5 2.8 -3.8 29.5 -11.8 39 -11.8 8.3 0 63.3 -19.3 64.3 -22.5 0.5 -1.3 4.3 -2.5 8.3 -2.5 8 0 17.3 -4 20.3 -8.5 1.8 -2.8 31.5 -5.5 78.3 -7.5 53.3 -2.3 51.5 -2.5 82 12.8 46.5 23.5 52.5 26.8 63 34 5.5 3.8 10.8 6.8 11.5 6.8 2.5 0 99.3 66 102.3 69.8 0.8 1 9.3 7.8 18.8 15.3 32 24.8 91.3 77.3 91.3 81 0 0.8 -2.5 1.5 -5.8 1.5 -4.8 0 0 6 25.8 32 17.3 17.5 39.8 41.3 50 53 10.3 11.8 19.3 21.8 20 22.5 0.8 0.8 6.3 7.5 12.5 15 6.3 7.5 12.8 15.3 14.5 17 1.8 2 6.3 7.5 10 12.5 3.8 5.3 7.3 9.8 8 10.5 4.5 4 52.5 70 71.8 98.8 45.5 67.8 99.5 173 94.8 185 -3.3 9 -69 32 -141.5 50 -47.5 11.8 -117 24.8 -168.8 31.3 -44.3 5.8 -97.8 9.8 -149.5 11.5 -45.3 1.5 -53.8 2.3 -51.5 5 3 3.8 -1.3 3.8 -59 1.8z" }),
            React__default['default'].createElement("path", { d: "M1720 3271.8 c0 -0.5 4 -4.5 8.8 -9 l8.8 -7.8 0 8.8 c0 8.3 -0.5 8.8 -8.8 8.8 -4.8 0 -8.8 -0.5 -8.8 -0.8z" }),
            React__default['default'].createElement("path", { d: "M3052.8 3026.3 l-7.8 -8.8 8.8 0 c8.3 0 8.8 0.5 8.8 8.8 0 4.8 -0.5 8.8 -0.8 8.8 -0.5 0 -4.5 -4 -9 -8.8z" }),
            React__default['default'].createElement("path", { d: "M3702.5 2506.3 c0 -2 1.8 -3.8 3.8 -3.8 2 0 3.8 -1 3.8 -2.5 0 -1.3 -1.8 -2.5 -3.8 -2.5 -2 0 -3.8 -1.8 -3.8 -3.8 0 -2.8 2.8 -3.8 10 -3.8 l10 0 0 10 0 10 -10 0 c-7.3 0 -10 -1 -10 -3.8z" }),
            React__default['default'].createElement("path", { d: "M1275 2498.8 c0 -8.3 0.5 -8.8 8.8 -8.8 6 0 8.8 1.3 8.8 3.8 0 2 -1.8 3.8 -3.8 3.8 -2 0 -3.8 1.3 -3.8 2.5 0 1.5 1.8 2.5 3.8 2.5 2 0 3.8 1.3 3.8 2.5 0 1.5 -4 2.5 -8.8 2.5 -8.3 0 -8.8 -0.5 -8.8 -8.8z" }),
            React__default['default'].createElement("path", { d: "M1474.5 2475.8 c-36 -18 -81 -44 -114.5 -66.5 -23.3 -15.5 -84.3 -60.3 -87.5 -64 -0.8 -1 -7.5 -6.5 -15 -12.8 -21 -17.3 -46.8 -39.8 -64.5 -56.8 -5.3 -5.3 -5.3 -5.8 -1 -5.8 2.5 0 5.3 -0.5 6 -1.3 0.5 -0.8 -13 -15.5 -30.5 -33 -17.3 -17.8 -39.8 -41.5 -50 -53.3 -10.3 -11.5 -20 -22.5 -21.8 -24.5 -1.8 -1.8 -7.3 -8.5 -12.5 -15 -5.3 -6.5 -11 -13.3 -12.8 -15 -1.8 -2 -6.3 -7.5 -10 -12.5 -3.8 -5.3 -7.3 -9.8 -8 -10.5 -4.5 -4 -52.5 -70 -71.8 -98.8 -45.5 -67.8 -99.5 -173 -94.8 -185 3.3 -9 69 -32 141.5 -50 47.5 -11.8 117 -24.8 168.8 -31.3 44.3 -5.8 97.8 -9.8 149.5 -11.5 42.5 -1.3 53.8 -2.5 51.8 -4.8 -3.8 -4.5 43.5 -8 49 -3.8 2.5 2.3 9.8 2.8 25.8 1.5 13.5 -1 23 -0.8 23.8 0.8 1 1.3 5.5 1.8 10.3 1 4.8 -0.8 10.5 -0.5 13 0.5 2.5 1 12.5 2.3 22.3 2.5 10 0.3 19.3 1.5 20.8 2.3 1.5 1 9.8 2.3 18 2.8 8.5 0.5 16.5 2 18 3.5 1.5 1.5 7.5 2.8 13.3 2.8 12 0 35 4 42.3 7.3 2.8 1.3 11.5 3.3 19.3 4 8 1 15 2.8 15.8 4 1 1.3 4.8 2.3 8.5 2.3 4 0 10.5 1.8 14.3 3.8 4 2 10.3 3.8 14 3.8 3.8 0 7.3 1 8 2.3 0.8 1 7 2.8 13.8 3.8 7 1 13.3 2.8 14 4 0.8 1.5 4 2.5 7.3 2.5 9.3 0 62.3 58.3 71.3 78.3 2.8 6.5 7.3 16.5 10 22.5 2.5 5.8 7.3 16.3 10.3 23 11.3 25 54.8 110.8 70.5 138.8 33.3 59 69.8 116.8 99.8 157.8 6.8 9.3 12.3 18.5 12.3 21 0 5 3.5 5 -63.8 -1.3 -15 -1.5 -42 -3.8 -60 -5.3 -17.8 -1.5 -33.3 -3.3 -34.3 -3.8 -1 -0.8 -11.3 -1.5 -22.5 -2 -27.3 -1.3 -84.8 -6.3 -89.5 -8 -2 -0.8 -12.3 -1.5 -22.5 -1.8 l-19 -0.5 91.5 76 c50.3 42 91.8 76.8 92.5 77.5 0.8 1 7.5 6.5 15 12.8 7.5 6.3 17.3 14.3 21.3 18 4.3 4 8.3 7 9.5 7 1 0 1.8 1 1.8 2.3 0 1.3 -4.8 3 -10.5 4 -12.8 2 -56.8 10.5 -70.8 13.8 -90.8 21 -167.5 43.5 -246.3 72.5 -18.3 6.8 -24.8 7.8 -45 7.8 -46.5 0 -69.5 1 -71.5 3 -4.5 4.5 -17.5 0.8 -44 -12.5z" }),
            React__default['default'].createElement("path", { d: "M3474.5 2488.5 c-1.5 -1.5 -47.8 -3.5 -73.3 -3.5 -10.8 0.3 -21 -2 -36.3 -7.5 -80.3 -29.3 -155.5 -51.5 -246.3 -72.5 -17 -4 -59.3 -12.3 -72 -14 -6.5 -0.8 -12.3 -2.5 -13 -3.5 -0.8 -1.3 5.8 -8 14.5 -15.3 8.5 -7.5 16 -14 16.8 -14.8 0.8 -0.8 7.5 -6.3 15 -12.5 7.5 -6.3 14.3 -11.8 15 -12.5 0.8 -0.8 8.5 -7.5 17.5 -15 9 -7.5 16.8 -14.3 17.5 -15 0.8 -0.8 6.5 -5.8 13.3 -11 6.5 -5.3 11.8 -11.3 11.8 -13 0 -2 1.8 -3.5 4 -3.5 3 0 28.3 -19.3 36 -27.5 0.8 -0.8 15.3 -13.3 32.5 -27.5 17.3 -14.5 33.5 -28.3 36.3 -31 5 -4.5 4.8 -4.5 -6 -3 -6.3 1 -22.5 2.8 -36.3 4.3 -64.5 6.5 -98.5 10 -145.3 15.3 -15 1.8 -35.3 3 -45 3.3 -9.5 0 -18.3 0.8 -19 1.8 -0.8 1.3 -10 2.8 -20.5 3.5 l-19.3 1.8 0 -9.3 c0 -5 1.3 -9 2.5 -9 1.5 0 2.5 -1.8 2.5 -3.8 0 -2 1.5 -3.8 3.5 -3.8 4 0 19 -22.3 19 -28.3 0 -2.5 1.8 -4.3 3.8 -4.3 2.3 0 4.5 -3 5.5 -7.5 0.8 -4 2.8 -7.5 4.3 -7.5 3.3 0 7.5 -6.5 37 -55 12 -20 22 -38.5 22 -41.3 0 -2.8 2.3 -6.5 5 -8.3 2.8 -1.8 5 -5.8 5 -9 0 -3.3 1.8 -6.5 3.8 -7.3 4.5 -1.8 21.3 -34.8 21.3 -41.8 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1 -5 2.5 -5 3.5 0 15 -23.8 15 -31.3 0 -3.8 1.5 -6.3 3.5 -6.3 3.5 0 6.5 -7.3 6.5 -16.8 0 -3.3 1.5 -5.8 3.5 -5.8 4.3 0 7.3 -10.5 3.8 -12.8 -1.5 -1 3.8 -8.5 12.5 -17.8 8.5 -9 15.3 -17.8 15.3 -19.3 0 -3.8 6.3 -10.3 9.8 -10.3 3.5 0 17.8 -18 16.3 -20.5 -0.8 -1 1.3 -3 4.5 -4.3 3.3 -1.3 10 -6.8 15.3 -12.5 7 -7.8 11.3 -10.3 17 -10.3 10.3 0 34.8 -7.3 34.8 -10.3 0 -1.3 4.5 -2.3 10 -2.3 5.5 0 10 -1 10 -2.3 0 -1 7.5 -2.8 16.5 -3.5 9.3 -0.8 17.3 -2.3 18.3 -3.8 2 -3.3 27.5 -8 42 -8 6 0 10.8 -1 10.8 -2.5 0 -1.5 7.5 -2.5 17.3 -2.5 10.8 0 17.8 -1 18.3 -2.8 0.8 -2 11.8 -3.3 32 -3.8 19.8 -0.5 31.5 -2 32.8 -3.8 1.3 -2 8.3 -2.3 24.8 -1 16.8 1.3 23.5 1 25 -1 1.3 -2.3 9.8 -2.5 30.8 -1.3 22.3 1.3 28.8 2.5 26.8 4.8 -2 2.3 11 3.5 55.8 4.8 31.8 1 68.3 2.8 80.5 4 12.5 1.3 33.8 3.5 47.5 5 44 4.8 97 13.8 162.5 27.8 59 12.5 156.3 44.5 164 53.8 4.3 5.3 0.3 17.8 -18.3 55.8 -17.3 35.5 -41.3 77.5 -66 115.8 -19 29.3 -48.5 72.5 -51 74.5 -0.8 0.8 -4.3 5.3 -7.5 10 -3.5 4.8 -7.5 10.5 -9.3 12.5 -1.5 2 -13 16.5 -25.3 31.8 -34.8 43.8 -63.3 75.8 -108.5 121.3 -15 15 -27 27.8 -27 28.3 0 0.8 3 1.3 6.5 1.3 5.8 0 6 0.5 2.5 3.8 -2 2 -5.5 3.8 -7.5 3.8 -2.3 0 -4 1.5 -4 3.5 0 2 -8.8 11.3 -19.3 20.8 -10.8 9.3 -20 17.5 -20.8 18.3 -7.5 7.8 -27.8 22.5 -31 22.5 -2.3 0 -4 1.5 -4 3.3 0 3.5 -50.3 42.3 -82.5 63.5 -33.8 22.3 -70.8 43.8 -106.8 62.5 -28.3 14.5 -38 18.3 -46.5 18.3 -6 0 -11.5 -0.8 -12.3 -1.5z" }),
            React__default['default'].createElement("path", { d: "M2905 2045.3 c0 -7.3 0.8 -7.8 9 -7.8 9.8 0 9.5 2.3 -1.5 10 l-7.5 5.3 0 -7.5z" }),
            React__default['default'].createElement("path", { d: "M3007.5 2027.5 c7.8 -11 10 -11.3 10 -1.5 0 8.3 -0.5 9 -7.8 9 l-7.5 0 5.3 -7.5z" }),
            React__default['default'].createElement("path", { d: "M2202 2025.3 c-0.3 -1 -19.3 -14.5 -42 -29.5 -85.8 -57.3 -152.5 -94.5 -266.3 -148.5 -19.8 -9.3 -28.8 -15.3 -42.8 -28.8 -9.5 -9.5 -30.3 -29 -45.5 -43.3 -15.5 -14.3 -28 -27.8 -28 -30 0 -7 -8.5 -37.8 -10.5 -37.8 -1 0 -2 -4.5 -2 -10 0 -5.5 -1 -10 -2.3 -10 -1 0 -3 -7.8 -3.8 -17.5 -1 -9.5 -2.8 -17.5 -4 -17.5 -2.5 0 -7.5 -27.8 -7.5 -42 0 -5.8 -1 -10.5 -2.5 -10.5 -1.5 0 -2.5 -7.5 -2.5 -17.3 0 -10.3 -1 -17.8 -2.8 -18.3 -1.8 -0.5 -3 -12.5 -3.8 -32 -0.8 -18.5 -2.3 -31.5 -3.8 -32.3 -1.8 -0.5 -2 -8.8 -0.8 -24.5 1.3 -17.5 1 -24.3 -1.3 -25.8 -2.3 -1.3 -2.5 -7.5 -1.3 -23.5 1.3 -16.3 2.5 -21 4.8 -19 2.3 2 3.3 -12 4.8 -60.8 1.5 -59.3 2.8 -78 9.3 -133 5 -44.5 14.8 -105 22 -137.5 1.3 -5.5 3.5 -15.5 5 -22.5 12.8 -61 44.8 -158.5 54.3 -166.5 5.3 -4.3 17.8 -0.3 55.8 18.3 35.5 17.3 77.5 41.3 115.8 66 29.3 19 72.5 48.5 74.5 51 0.8 0.8 5.3 4.3 10 7.5 4.8 3.5 10.5 7.5 12.5 9.3 2 1.5 16.5 13 31.8 25.3 41.5 33 74.5 62.3 116.3 103.5 19 18.8 22 20.8 22 15.5 0 -3.3 0.5 -6 1.3 -6 2 0 20.3 18.8 41.3 42.5 10.3 11.8 19.3 21.8 20 22.5 6.3 6.3 30.8 36.8 49.3 61.3 39.5 52.5 68.3 97.5 95.5 149.3 l15.5 29.3 -1 29.5 c-3.3 101.5 -3.3 100.8 -11.8 123.3 -23 62 -47 141 -62.3 203.8 -14.3 58.3 -17.5 74.3 -25.5 121 -4.3 26.5 -6 32.8 -8 30 -0.5 -0.5 -32.8 -41 -71.8 -89.8 -39 -48.8 -71.5 -89.3 -72.5 -90 -0.8 -0.8 -5.3 -6.3 -10 -12.5 -4.8 -6.3 -9.3 -11.8 -10 -12.5 -0.8 -0.8 -5.3 -6.3 -10 -12.5 -4.8 -6.3 -11.3 -14 -14.5 -17.5 l-5.5 -6.3 1.8 22.5 c1 12.5 2 26.5 2 31.3 0 4.8 0.8 9.3 1.8 10 0.8 0.8 2 11.8 2.5 24.5 0.3 12.5 1.5 23 2.3 23 1.8 0 5.5 41.5 5.8 62.5 0.3 7.5 1 14.3 2 15.3 1 0.8 2.3 11.3 2.5 23.8 0.5 12.3 1.5 22.8 2.5 23.5 0.8 0.8 2.3 10.5 3.3 22 l2 20.5 -6.5 0 c-3.5 0 -6.8 -1 -7.3 -2.3z" }),
            React__default['default'].createElement("path", { d: "M2790 2019.3 c0 -1.8 1 -9.5 2.3 -17 1.3 -7.5 3.5 -23.5 5.3 -36 1.5 -12.3 5 -38.3 7.5 -57.5 2.8 -19.3 6 -44 7.5 -55 1.5 -11 3.8 -27.3 5 -36.3 1.3 -9 3.5 -25.8 5 -37.5 1.5 -11.8 3.3 -24.5 4 -28.8 l1 -7.5 -5.5 6.3 c-3.3 3.5 -17.5 20.3 -32 37.5 -14.3 17.3 -26.8 31.8 -27.5 32.5 -0.8 0.8 -6.3 7.5 -12.5 15 -6.3 7.5 -11.8 14.3 -12.5 15 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -6.3 7.5 -12.5 15 -19 23.3 -23.3 27.5 -26.8 27.5 -2 0 -2.8 1.3 -2 2.5 2 3.3 -20.5 30 -25.3 30 -1.8 0 -2.8 1.5 -2.3 3.3 0.8 1.5 -2.5 7 -6.8 11.8 l-8.3 8.5 -0.8 -9.3 c-0.5 -5 -1.8 -9.3 -2.8 -9.3 -1.3 0 -3 -5.3 -3.8 -11.8 -1 -6.8 -4.5 -25.8 -8 -42.5 -3.3 -16.8 -6 -34.5 -6 -39.3 0 -4.8 -1.3 -9 -2.5 -9.5 -1.5 -0.5 -3.8 -7.5 -4.8 -15.8 -3 -21.3 -8.5 -43.8 -10.8 -43.8 -1 0 -2.5 -4.3 -3.3 -9.3 -3 -18.5 -6.8 -33.3 -8.5 -33.3 -1 0 -3.8 -8.3 -6.3 -18 -5.8 -24.8 -24.8 -83 -27 -84 -1.3 -0.5 -2 -2.8 -2 -5 0 -5.8 -5.8 -21.3 -9.3 -25 -1.8 -1.8 -3.3 -5.5 -3.3 -8 0 -2.8 -2 -10.3 -4.8 -16.8 -4.3 -11.3 -5.8 -23.5 -9 -79.3 l-1.5 -22.3 11.5 -21.8 c6.3 -12.3 11.3 -24.3 11.3 -27 0 -2.8 1.8 -5.5 3.8 -6.5 4 -1.5 10 -13.5 12.5 -24.5 0.8 -4 2.8 -7 4.5 -7 4 0 11.8 -13 11.8 -19.8 0 -3 1.5 -5.3 3.3 -5.3 1.5 0 11 -12 20.5 -26.8 9.8 -14.8 28 -40.5 40.8 -57.5 12.5 -17 23 -32.5 23 -34.5 0 -2 1.5 -3.8 3.3 -3.8 4 0 21.8 -21 21.8 -25.5 0 -1.8 2.5 -4.5 5.8 -5.8 3 -1.5 5.8 -5 6.3 -8.3 0.5 -3.3 2.8 -6.5 5 -7.3 2.3 -0.8 11.3 -8.8 20 -17.5 14.3 -15 15.5 -15.8 15.5 -9.8 0 3.5 0.3 6.5 0.8 6.5 0.5 0 15.5 -14.5 33.3 -32 17.8 -17.5 41.8 -40.3 53.5 -50.5 11.5 -10.3 22.5 -20 24.5 -21.8 1.8 -1.8 8.5 -7.3 15 -12.5 6.5 -5.3 13.3 -11 15 -12.8 2 -1.8 7.5 -6.3 12.5 -10 5.3 -3.8 9.8 -7.3 10.5 -8 5.3 -5.8 76.3 -56.8 105 -75.5 77.3 -50 166.8 -95.8 178.8 -91 9 3.3 32 69 50 141.5 11.8 47.5 24.8 117 31.3 168.8 5.8 44 9.8 97.8 11.5 149.5 1.5 46.8 2.3 54.3 5.5 53 3.3 -1.3 3.5 4.3 2 40.5 -3 76 -9.8 135.3 -23 202 -6.5 32.8 -17.3 79 -20.8 88.8 -1.3 3.5 -3.8 11.8 -5.8 18.5 -3.3 11.8 -11.5 21.5 -18.5 21.5 -2 0 -3.5 1.5 -3.5 3.3 0 4 -18.5 21.8 -22.5 21.8 -3.5 0 -10 6.3 -10 9.5 0 6.8 -25.8 24.3 -53.8 36.5 -95.3 41.8 -191.8 95 -280.8 154.3 -38.3 25.8 -50.5 31.5 -50.5 24z" }),
            React__default['default'].createElement("path", { d: "M2526.5 1877 c-2.5 -9.5 -1.8 -12 3.5 -12 4 0 5 1.8 5 8.8 0 10 -6 12.3 -8.5 3.3z" })),
        React__default['default'].createElement("g", { fill: "#fb9ff5" },
            React__default['default'].createElement("path", { d: "M2496.5 4748.8 c-5.8 -5.8 -32.8 -62.5 -46 -96.3 -26.5 -67.8 -44 -120.3 -69.3 -206.3 -13.3 -44.5 -35.8 -132.8 -46.3 -181.3 -9.3 -42.3 -26 -130 -32.3 -168.8 -10.3 -61.5 -9.8 -59.3 -12.8 -81.3 -7 -56.3 -9.8 -79 -12.5 -105 -1.5 -15.8 -3.8 -39.5 -5 -52.5 -3.8 -36 -3.8 -60.8 -0.5 -62 1.8 -0.5 3 -3 3 -5.8 0 -2.5 1.5 -4.8 3.5 -4.8 1.8 0 10 -7.5 18 -16.8 8 -9.5 16 -18.5 17.8 -20.3 1.8 -1.8 7.3 -8.5 12.5 -15 5.3 -6.5 10 -12.3 10.8 -13 6 -5.8 17.5 -22.8 17.5 -26 0 -2.3 1.5 -4 3.3 -4 3 0 22.8 -26.3 48.5 -65 19 -28.5 46.3 -76.5 64.3 -112.5 8.8 -17.8 16.5 -31.5 17.5 -30.8 0.8 1 1.5 12.3 1.5 25.5 0 13 1 44.8 2.5 70.3 1.3 25.5 3 66.3 4 90.8 0.8 24.8 2.5 43.8 3.5 42.5 1.3 -1 3.5 -35.8 5 -77 1.8 -41.3 3.8 -88.8 4.5 -105.5 l1.8 -30.5 17.5 34.3 c9.8 18.8 18.3 34.8 19.5 35 1 0.5 1.3 2 0.3 3.3 -0.8 1.3 -0.3 2.3 1 2.3 1.3 0 4.3 4.5 7 10 2.5 5.5 5.8 10 6.8 10 1.3 0 1.3 1.3 0.5 2.5 -0.8 1.5 -0.3 2.5 1 2.5 1.5 0 2.8 1.5 2.8 3.5 0 2 0.8 4 2 4.5 1 0.5 9 11.8 17.8 25 13.5 21 30.3 44.8 37.3 53.3 1 1.5 5.3 7 9.3 12.5 4.3 5.5 9 11.5 10.8 13.3 1.8 2 6.3 7.5 10 12.5 3.8 5.3 8 10.5 9.3 12 1.5 1.5 8.8 10 16.3 18.8 16.3 19 39.3 44 46.3 50.5 4 3.8 4.8 7.3 4.3 21.3 -0.8 23.8 -7 88 -13.3 139.3 -10.8 88.8 -31.5 213.5 -45 271.3 -1.5 6.3 -3.5 15.8 -4.8 21.3 -36.5 162 -82.3 312.5 -129.3 423.8 -13.8 32.5 -27 59.3 -33 67 -4.3 5.8 -4.5 5.8 -8.8 1.8z" }),
            React__default['default'].createElement("path", { d: "M907.5 4088 c0 -13 19.8 -65.8 50.5 -135.5 7 -15.5 57.3 -116.3 66.5 -132.8 4 -7.5 13.3 -24.3 20.5 -37.3 15.3 -27.8 43.8 -76.8 58.3 -100 5.5 -9 15.3 -24.5 21.5 -34.8 22.8 -36.8 94 -142.8 112.5 -167.8 2.8 -3.5 16.8 -22.5 31.8 -42.5 14.8 -20 27.5 -36.8 28.5 -37.5 0.8 -0.8 4.3 -5.3 7.5 -10 3.5 -4.8 7.5 -10.5 9.3 -12.5 1.5 -2 10.5 -13.3 19.8 -25 9.5 -11.8 17.5 -21.8 18.5 -22.5 0.8 -0.8 6.3 -7.5 12.5 -15 6.3 -7.5 12.5 -15.3 14.3 -17 1.8 -1.8 7 -8 12 -14 l8.8 -11 39.5 -1.5 c74 -3.3 124.8 -9.3 195.5 -23 27.5 -5.5 95.5 -22 104.8 -25.5 8.5 -3.3 -1.3 9.5 -36 46 -20.5 22 -44.8 47.5 -53.8 57.3 -9 9.5 -18 19 -20 21.3 -2 2 -6 6.5 -8.8 10 -3.8 4.8 7 -3.8 18.8 -15 0.8 -0.8 10.8 -9.8 22.5 -20 11.8 -10.3 21.8 -19.3 22.5 -20 0.8 -0.8 10.8 -9.8 22.5 -20 11.8 -10.3 23 -20.5 25 -22.5 2 -2 13.3 -12.3 25 -22.5 11.8 -10.3 24.5 -21.8 28.8 -25.5 4 -3.8 8 -6.3 8.8 -5.5 0.8 0.8 -0.5 2.8 -2.5 4.3 -2 1.8 -3.5 5.5 -3 8.8 0.5 3 -0.8 6 -2.8 7 -2.3 0.8 -3 3.5 -2.3 7.3 0.8 4 -0.3 6.8 -2.8 7.8 -2.3 0.8 -3.3 3.3 -2.5 6.3 0.8 2.5 0.3 4.8 -0.8 4.8 -1.3 0 -2.5 3.5 -2.5 8 -0.3 4.5 -1.5 8.5 -3.3 9 -1.5 0.5 -2.3 2 -1.5 3.3 2 2.8 -3.3 22.3 -6 22.3 -1 0 -1.5 3.3 -0.8 7.3 0.5 4.3 -0.5 8.5 -2.5 10.5 -2 1.8 -3 5.8 -2.5 9 0.5 3.3 0 5.8 -1 5.8 -1.3 0 -2.5 4.8 -2.8 10.5 -0.3 5.8 -1.5 11 -2.8 11.5 -1.3 0.3 -2 3 -1.3 5.5 0.8 2.8 0.3 5 -1 5 -1.3 0 -2 3.5 -1.3 7.5 0.5 4.3 0 7.5 -1 7.5 -1.3 0 -2.5 6.5 -2.8 14.5 -0.5 7.8 -1.8 14.5 -2.8 15 -1.3 0.3 -1.8 3.5 -1 6.8 0.5 3.5 0 6.3 -1 6.3 -1.3 0 -2 5 -1.5 11.3 0.5 6.3 0 11.3 -1.3 11.3 -1.3 0 -2 3.5 -1.3 7.5 0.5 4.3 0 7.5 -1 7.5 -1.3 0 -1.8 6.3 -1.5 13.8 0.5 7.5 0 13.8 -1.3 13.8 -1 0 -1.5 5.5 -1.3 12.5 0.5 6.8 0 12.5 -1.3 12.5 -1 0 -1.8 11.3 -1.3 25 0.5 13.8 -0.3 25 -1.5 25 -1.3 0 -1.8 8.8 -1 19.8 l1 19.8 -9.3 8.5 c-5.3 4.5 -10.8 9.5 -12.3 10.8 -1.5 1.5 -9 7.5 -16.5 13.8 -7.5 6.3 -14.3 11.8 -15 12.5 -3 3 -53 43 -72.5 57.5 -11.8 9 -21.8 16.8 -22.5 17.5 -0.8 0.8 -5.3 4.3 -10 7.5 -4.8 3.5 -10.5 7.5 -12.5 9.3 -27.3 22.3 -122.3 87.5 -175 120.8 -11.8 7.3 -26.8 16.8 -33.8 21.3 -35.8 22.8 -111.8 67.3 -150 87.8 -12.3 6.5 -31.5 16.8 -42.5 22.8 -29.3 15.8 -127 63.3 -130 63.3 -0.8 0 -7 2.8 -14.3 6 -32.5 14.8 -78.8 31.8 -96.3 35.3 -7 1.5 -8.3 1 -8.3 -3.3z" }),
            React__default['default'].createElement("path", { d: "M4053.8 4082.8 c-27 -9.3 -54.3 -20.3 -86.3 -34.3 -21.3 -9.5 -139 -68.3 -160 -80 -9 -4.8 -22.5 -12.3 -30 -16.5 -7.5 -4 -14.8 -8.3 -16.3 -9.5 -1.3 -1 -8.8 -5.3 -16.3 -9.3 -20 -10.8 -86 -50.8 -111.8 -67.3 -12 -8 -33.3 -21.5 -47 -30.5 -13.8 -8.8 -36.3 -24 -50 -33.8 -13.8 -9.8 -36.3 -25.5 -50 -35.3 -13.8 -9.8 -25.5 -18.3 -26.3 -19 -0.8 -0.8 -5.3 -4.3 -10 -7.5 -4.8 -3.3 -9.3 -6.8 -10 -7.5 -0.8 -0.8 -5.3 -4.3 -10 -7.5 -4.8 -3.3 -9.3 -6.8 -10 -7.5 -0.8 -0.8 -10.8 -8.5 -22.5 -17.5 -11.8 -8.8 -21.8 -16.8 -22.5 -17.5 -0.8 -0.8 -5.3 -4.3 -10.5 -8 -5 -3.8 -10.5 -8.3 -12.5 -10 -1.8 -1.8 -12.3 -10.5 -23.3 -19.5 -11 -8.8 -30.3 -25 -42.8 -35.8 l-23 -19.5 -1.5 -33 c-5.8 -117 -27 -237.8 -57.3 -324.3 -2.3 -6 -3.8 -11.3 -3.5 -11.5 0.3 -0.5 7.3 5.8 15.5 13.5 8.5 7.8 28 26 43.8 40.5 15.8 14.5 30.5 28 32.5 30 2 2 16.8 15.5 32.5 30 15.8 14.5 30.8 28.5 33.3 31 2.3 2.8 4.8 4.3 5.5 3.8 0.5 -0.8 -4.3 -6.8 -10.8 -13.8 -6.5 -6.8 -21.3 -23 -33 -36 -11.8 -13 -23 -25.5 -25 -27.5 -2 -2 -13.3 -14.5 -25 -27.5 -11.8 -13 -26.8 -29.8 -33.8 -37 -6.8 -7.3 -12.8 -14.3 -13.3 -15.5 -0.5 -1 8 0.8 18.8 4.3 23.8 7.8 27 8.5 64.5 18.3 61.3 15.5 129 27 192.5 32.3 16.5 1.5 45.8 3.3 65 4 32.8 1.3 35.3 1.8 40 7.3 11 13 55.5 66.3 62.8 75.5 26.5 33 40.8 51.8 64.8 83.8 14.8 19.8 28.8 38.8 31.5 42.3 17.8 24 85.5 124.3 102.3 151.3 24.8 40.3 66 108.5 72.8 120.8 4 7 10.5 19 14.5 26.3 4 7 11.3 20.3 16.3 29.3 15.3 27.3 69.8 137 82 165 23.8 53.5 42 104 42 115.3 0 7 -7.3 6 -38.8 -5z" }),
            React__default['default'].createElement("path", { d: "M2474.5 3410 c-43.3 -111.8 -72.8 -212 -93 -315 -12.8 -66.3 -12.8 -59 -0.3 -73 4.3 -4.5 13.8 -15.5 21.3 -24.5 7.5 -9 14.3 -16.8 15 -17.5 0.8 -0.8 7.5 -8.5 15 -17.5 7.5 -9 16.3 -19.3 19.5 -22.8 3 -3.5 7.3 -8.5 9.3 -11.3 3.3 -4.5 3.5 -4.3 3.8 4 0 4.8 1 29.5 2.5 55 1.3 25.5 3.5 76 5 112.5 1.5 36.5 3.8 90.5 5 120 6.8 153 8 185 7.3 198.8 l-1 15 -9.3 -23.8z" }),
            React__default['default'].createElement("path", { d: "M2516.3 3366.3 c1.5 -40.3 2.8 -74.5 8.8 -216.3 1.3 -33.8 3.5 -90 5 -125 1.3 -35 3 -71 4 -80 l1.5 -16 8 8.8 c25 28 44.5 49.8 53 59.8 5.3 6.3 12.8 14.5 16.5 18.8 6.5 7 9.8 21.3 4.8 21.3 -1 0 -1.5 2.8 -0.8 6.3 0.5 3.5 0 6.3 -1.3 6.3 -1.3 0 -1.8 4 -1.3 8.8 0.5 5 0 8.8 -1.5 8.8 -1.5 0 -2 2.3 -1.3 5 0.8 2.8 0.3 5 -1 5 -1.3 0 -2 3.5 -1.3 7.5 0.5 4.3 0 7.5 -1.5 7.5 -1.5 0 -2 2.3 -1.3 5 0.8 2.8 0.3 5 -1 5 -1.3 0 -2 3.5 -1.3 7.5 0.5 4.3 0 7.5 -1 7.5 -1.3 0 -2.5 4.8 -2.8 10.5 -0.3 5.8 -1.5 11 -3 11.5 -1.3 0.5 -1.8 2.5 -1 4.5 0.8 2 0.3 3.5 -1.3 3.5 -1.3 0 -1.8 2.5 -1.3 5.8 1.3 6.5 -8.5 45.3 -11.8 46.3 -1.3 0.5 -1.5 2.5 -0.8 4.5 0.8 2 0 3.5 -1.8 3.5 -1.5 0 -2 1.3 -1 2.8 2.3 4 -4.3 30 -8 31.5 -1.5 0.5 -2.5 3.3 -1.8 6 0.8 2.5 0 4.8 -1.5 4.8 -1.3 0 -2 1.8 -1.3 3.8 1 2 0.5 3.8 -1 3.8 -1.5 0 -2 2.3 -1.3 5 0.8 3 0 5 -1.5 5 -1.8 0 -2.3 1.3 -1.5 2.8 2 3.3 -18.3 66.3 -22.8 71 -1.8 1.8 -2.5 3.8 -1.8 4.8 2 2 -6.8 24 -9.5 24 -1.5 0 -1.8 1.3 -1 2.5 0.8 1.5 0.5 2.5 -0.8 2.5 -1.5 0 -2 2 -1.3 4.5 0.5 2.3 -1.3 9.5 -4.3 15.5 l-5 11.3 1.3 -42.5z" }),
            React__default['default'].createElement("path", { d: "M1802.5 3197.5 c3.5 -3 10.3 -9 15 -13.3 4.8 -4.5 19.5 -17.5 32.5 -29.3 13 -11.8 24.3 -21.8 25 -22.5 0.8 -0.8 10.8 -9.8 22.5 -20 11.8 -10.3 21.8 -19.3 22.5 -20 0.8 -0.8 10.8 -9.8 22.5 -20 11.8 -10.3 23 -20.5 25 -22.5 2 -2 13.3 -12.3 25 -22.5 11.8 -10.3 21.8 -19.3 22.5 -20 0.8 -0.8 10.8 -9.8 22.5 -20 11.8 -10.3 21.8 -19.3 22.5 -20 0.8 -0.8 12 -10.8 25 -22.5 13 -11.8 24.3 -21.8 25 -22.5 0.8 -0.8 10.8 -9.8 22.5 -20 11.8 -10.3 21.8 -19.3 22.5 -20 0.8 -0.8 10.8 -9.8 22.3 -20 11.8 -10.3 25.3 -22.5 30 -26.8 4.8 -4.5 9.3 -7.8 9.8 -7.3 0.8 1 0 14.8 -7 100.3 -4 48 -5.3 56.3 -9 56.3 -2 0 -3.5 1.5 -3.5 3.5 0 4 -22.3 19 -28.3 19 -2.5 0 -4.3 1.8 -4.3 3.8 0 2.3 -3 4.5 -7.5 5.5 -4 0.8 -7.5 2.8 -7.5 4.3 0 3.3 -6.5 7.5 -55 37 -20 12 -38.5 22 -41.3 22 -2.8 0 -6.5 2.3 -8.3 5 -1.8 2.8 -5.8 5 -9 5 -3.3 0 -6.5 1.8 -7.3 3.8 -1.8 4.5 -34.8 21.3 -41.8 21.3 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1 -5 2.5 0 3.5 -28 16.8 -33 15.5 -2.8 -0.5 -4.5 0.5 -4.5 2.8 0 4 -10.5 8 -18 7 -2.5 -0.3 -4.5 1 -4.5 3 0 4 -10.8 8 -18 7 -2.5 -0.3 -4.5 1 -4.5 2.8 0 1.8 -11.8 7.8 -27 13.8 -37 14.8 -38.3 15 -30.5 8.3z" }),
            React__default['default'].createElement("path", { d: "M3151.3 3183 c-5.5 -2.3 -11.8 -5.3 -13.8 -6.8 -2 -1.3 -4.3 -2.5 -5 -2.5 -5 -0.8 -14.5 -5 -18.5 -8.5 -2.5 -2.3 -5.3 -3.8 -6.3 -3.5 -2.8 1.3 -11.5 -2.3 -15.8 -6.3 -2.5 -2 -4.5 -3 -4.5 -2.3 0 1.8 -108.3 -52.5 -126.3 -63.3 -6.8 -4.3 -15 -8.8 -18.3 -10 -10.3 -4.5 -67 -39.5 -105 -64.8 -42.5 -28.5 -38.5 -22 -43 -70.3 -1.8 -15.8 -4 -38.8 -5.3 -51.3 -1.3 -12.3 -3 -30.3 -3.8 -40 l-1.8 -17.5 8.5 7.3 c4.8 4 22.5 20.3 39.8 36.3 17 16 38 35.3 46.3 42.8 8.3 7.5 16.8 15.5 18.8 17.5 2 2 16.8 15.5 32.5 30 15.8 14.5 30.5 28 32.5 30 2 2 17.8 16.8 35 32.5 17.3 15.8 33 30.5 35 32.5 2 2 16.8 15.5 32.5 30 15.8 14.5 30.5 28 32.5 30 2 2 16.8 15.5 32.5 30 37.5 34.3 35.8 32.5 33.3 32.3 -1 0 -6.5 -2 -12 -4.3z" }),
            React__default['default'].createElement("path", { d: "M3159.8 3143 c-7.5 -7.8 -24.3 -26 -37.3 -40.5 -13 -14.5 -24.3 -26.8 -25 -27.5 -0.8 -0.8 -10.8 -12 -22.5 -25 -11.8 -13 -23 -25.5 -25 -27.5 -2 -2 -13.3 -14.5 -25 -27.5 -11.8 -13 -23 -25.5 -25 -27.5 -2 -2 -13.3 -14.5 -25 -27.5 -11.8 -13 -23 -25.5 -25 -27.5 -2 -2 -13.3 -14.5 -25 -27.5 -11.8 -13 -23 -25.5 -25 -27.5 -2 -2 -13.3 -14.5 -25 -27.5 -11.8 -13 -27 -29.8 -34.3 -37.3 -7 -7.8 -12.5 -14.3 -12.3 -14.8 1.3 -1.3 121 8.3 137.3 11 5.5 0.8 9.3 2.8 9.3 5 0 2 0.8 3.5 2 3.5 1 0 6.3 7 11.8 15.8 5.5 8.5 11.3 17 13 18.8 1.8 1.8 3.3 4.3 3.3 5.5 0 1.3 1.5 3.8 3.3 5.5 8 8.5 61.8 96.8 61.8 101.5 0 1.8 0.8 3 2 3 1 0 3.3 3.8 5.3 8.3 2 4.3 4.3 8.5 5.3 9.3 0.8 0.8 6.5 11.5 12.8 23.8 6 12.5 11.8 23 13 23.3 1 0.5 1.8 3 1.8 5.8 0 2.5 1.3 4.8 2.5 4.8 1.5 0 2.5 2.3 2.5 5 0 2.8 1.3 5 2.5 5 1.5 0 2.5 2.3 2.5 5 0 2.8 1.3 5 2.5 5 1.5 0 2.5 2.3 2.5 4.8 0 2.8 0.8 5.3 2 5.8 2.5 1 17 32.3 16.3 35 -0.5 1 0.3 2 1.5 2 2.5 0 9.3 17.3 8.3 20.8 -0.3 1 0.5 1.8 1.8 1.8 2.3 0 9.3 17.5 8 19.8 -0.5 0.5 0.5 1.8 1.8 2.5 2.8 1.8 11 20.5 9.8 22 -0.5 0.3 -7 -5.8 -14.5 -13.8z" }),
            React__default['default'].createElement("path", { d: "M1826.8 3133.5 c-2.8 -4.8 53.8 -121.5 89.5 -184.8 29.8 -53 90 -146.3 99.3 -154.3 3.8 -3.5 9.5 -4.5 22.5 -4.5 9.5 0 30.5 -1 46.5 -2.3 48.8 -4 77 -5.3 74.3 -3.3 -1.3 1 -10.3 10.3 -20 20.5 -84.5 90.5 -123.8 132.5 -131.3 140 -3.5 3.5 -20.3 21.5 -37.5 40 -17.3 18.5 -34 36.5 -37.5 40 -3.5 3.5 -20.3 21.5 -37.5 40 -54 58 -66.8 70.8 -68.3 68.5z" }),
            React__default['default'].createElement("path", { d: "M1175 2730.8 c-25.5 -1.5 -75 -6 -95 -8.3 -70.5 -8.3 -80.5 -9.5 -118.8 -15.3 -18.5 -2.5 -74.5 -11.8 -112.5 -18.5 -24.5 -4.3 -66.3 -12.5 -83 -16.3 -6 -1.5 -15.5 -3.5 -21.3 -5 -6 -1.3 -21.5 -4.8 -34.5 -7.8 -133 -30.3 -289.3 -79 -390 -121.5 -52.8 -22.5 -73 -33.8 -70.8 -39.8 1.5 -4.3 62.5 -34 98.3 -48 179.5 -69.8 372.5 -119.3 611.3 -156.8 4.3 -0.8 16 -2.3 26.3 -3.8 56.3 -7 79 -9.8 105 -12.5 15.8 -1.5 39.5 -3.8 52.5 -5 13 -1.3 31.8 -2.5 41.8 -2.8 l18 -0.5 13.3 12.5 c7.3 7 17.8 16.5 23.3 21 5.5 4.8 10.5 9 11.3 9.8 0.8 0.8 7.5 6.3 15 12.5 7.5 6.3 14.3 11.8 15 12.8 0.8 0.8 14.8 11.5 31.3 24 56.8 42.5 105.5 73 167.5 104.8 19 9.8 35.3 19 35.8 20.8 0.8 2 -6.3 2.8 -22.8 2.8 -13 0 -43.3 1 -67 2.5 -24 1.3 -65.8 3 -93 4 -27.3 0.8 -48.8 2.5 -47.5 3.5 1.8 1.8 67.3 5 195 9.3 23.8 0.8 42.5 2.5 41.8 3.5 -0.8 1.3 -4.3 2.3 -7.8 2.3 -3.5 0 -7.8 1.5 -9.3 3.5 -3.5 4.5 -65.8 35.8 -74.5 37.8 -4 0.8 -7 2.5 -7 4.3 0 4 -8 9.3 -14.3 9.5 -3 0 -7 1.8 -9.3 3.8 -2 2 -4.8 3.8 -6.3 3.8 -1.5 0 -2.8 1.5 -2.8 3.3 0 1.5 -8.8 8.8 -19.3 15.5 -10.5 7 -26.5 17.8 -35.5 24.5 -9 6.5 -18.5 11.8 -20.8 11.8 -2.5 0 -4.5 1.5 -4.5 3.5 0 4.3 -12.8 14 -18.5 14 -2.3 0 -4 1.3 -4 3 0 4.3 -15.3 17 -20.5 17 -2.5 0 -4.5 1.5 -4.5 3.3 0 2 -7 9.5 -15.5 17 -13.8 11.8 -34 29.8 -44 39.3 -1.8 1.5 -6.3 2.8 -10 2.5 -3.8 -0.3 -11.8 -0.8 -18 -1.3z" }),
            React__default['default'].createElement("path", { d: "M3783.5 2716.8 c-21.8 -20.3 -47.3 -42 -69.8 -59.3 -9.5 -7.5 -18 -14.3 -18.8 -15.3 -3 -3.8 -99.8 -69.8 -102.3 -69.8 -0.8 0 -6 -3 -11.5 -6.8 -5.5 -4 -15.5 -9.8 -22.5 -13.5 -32.8 -16.5 -73 -36.8 -77.5 -38.8 -3.3 -1.3 10 -2.8 36.3 -3.8 22.8 -0.8 76.3 -3 118.8 -4.8 42.8 -1.8 78 -3.5 78.5 -4 3 -3 -1.5 -3.3 -194 -10.3 -22.5 -0.8 -40.8 -2.3 -40.5 -3 0 -0.8 16.5 -9.5 36.8 -19.5 35.3 -17.3 84.5 -45.8 118.3 -68.3 31 -20.8 79.8 -58.5 79.8 -61.8 0 -1.8 1.8 -3.3 4 -3.3 3.3 0 23.5 -14.8 31 -22.5 0.8 -0.8 10 -9 20.8 -18.3 10.5 -9.5 19.3 -18.8 19.3 -20.8 0 -6 33.3 -5 118.8 4 47.3 5 70 7.8 87.5 10.3 9.8 1.3 26 3.5 36.3 5 10.3 1.3 25 3.5 32.5 4.8 7.5 1.3 24 4 36.3 6 43.3 7.3 67.8 11.8 108.8 20.3 143.8 30 247 58.3 378.5 103.8 68.3 23.8 159.5 63.8 162.5 71.5 4 10.3 -91.5 52 -204.8 89.8 -71.8 23.8 -187 56.5 -233.8 66.3 -6.3 1.5 -20.8 4.8 -32.5 7.5 -134.5 31.8 -293.8 55.8 -460.3 68.8 l-19 1.5 -17.3 -16z" }),
            React__default['default'].createElement("path", { d: "M1958.8 2617.5 c-0.8 -1.3 -3 -1.8 -5 -1 -2 0.8 -5 0.5 -6.8 -0.5 -1.8 -1.3 -6.3 -1.8 -10 -1.3 -3.5 0.3 -7.3 -0.5 -8 -2 -1 -1.5 -3.3 -2 -5 -1.3 -2 0.8 -4.3 0.3 -5 -1 -0.8 -1.3 -4 -1.8 -7.5 -1.3 -3.3 0.8 -6.8 0 -7.5 -1.5 -1 -1.3 -3.3 -2 -5 -1.3 -2 0.8 -4.3 0.3 -5 -1.3 -1 -1.5 -3.3 -2 -5.3 -1 -2 0.8 -5.8 0.5 -8 -0.5 -2.5 -1 -8.5 -2.5 -13.3 -3 -4.8 -0.5 -10 -2.3 -11.8 -3.8 -1.8 -1.5 -3.3 -1.8 -3.3 -0.8 0 1 -1.5 0.5 -3.3 -1 -2 -1.5 -4.3 -2 -5 -1.3 -1.8 2 -44.3 -8.8 -48.5 -12.3 -1.8 -1.3 -3.3 -1.5 -3.3 -0.5 0 1 -1.5 0.5 -3.3 -1 -2 -1.5 -4 -2 -4.8 -1.3 -2 1.8 -29 -6.3 -31 -9.3 -0.8 -1.3 -2.5 -1.8 -3.8 -0.8 -1.3 0.8 -4 0 -6 -1.5 -2 -1.8 -3.8 -2.3 -3.8 -1.3 0 1 -1.5 0.5 -3.3 -1 -2 -1.5 -4.3 -2 -5 -1.3 -0.8 0.8 -3 0.5 -4.8 -0.5 -1.8 -1.3 -5.3 -2.5 -7.8 -2.8 -5.3 -0.8 -51.5 -16.3 -63 -21 -4 -1.8 -9.5 -3.5 -12.3 -4 -2.5 -0.5 -10 -3.5 -16.5 -6.8 -6.8 -3.5 -12.5 -5.5 -13.3 -5 -0.5 0.5 -6 -1.3 -12 -4 l-11 -5 45 1.3 c24.8 0.8 72 2.5 105 3.8 113.3 4.8 180.3 7.5 251.3 10 39.3 1.5 75.3 3.3 80 4 l8.8 1.5 -6.5 5.3 c-3.5 3 -10 8.3 -14.5 11.8 -4.8 3.5 -19.3 14.8 -32.8 25 -13.5 10.3 -28 21.5 -32.5 25 -4.8 3.5 -11.5 8.8 -15.3 12 -7 5.8 -18.3 7.5 -21 3z" }),
            React__default['default'].createElement("path", { d: "M3014.8 2614.3 c-3.5 -3 -9.5 -7.8 -13 -10.5 -3.5 -2.8 -24.8 -19 -47 -36.3 l-40.5 -31.3 19.8 -1.8 c11 -0.8 51.8 -2.8 91 -4.5 72.3 -2.8 135.5 -5.5 243.8 -10 33 -1.3 78 -3 100 -3.8 l40 -1.3 -10 4.8 c-5.5 2.5 -12.3 4.3 -15.3 3.5 -3 -0.5 -7 0.8 -9.3 3 -5.5 5.3 -19.8 11 -24 9.3 -1.8 -0.5 -4.3 0.3 -5.3 2 -2.5 4 -56.8 22.5 -66.8 22.8 -4.5 0.3 -8.3 1 -8.3 2 0 0.8 -3.5 1.8 -8 1.8 -4.5 0.3 -8.5 1.5 -9 3 -0.5 1.5 -2.5 2 -4.5 1.3 -2 -0.8 -5 0.3 -6.8 2.5 -3.5 4.3 -14 7.3 -28.8 8 -6 0.3 -11.8 1.8 -12.8 3.3 -2.3 3.8 -49.3 15.8 -54.3 13.8 -2.3 -0.8 -5 0 -6 1.8 -1 1.8 -6.5 3.3 -12.3 3.3 -5.8 0 -10.3 1 -10.3 2.3 0 1.3 -3.3 1.8 -7.5 0.8 -4.5 -1 -7.5 -0.5 -7.5 0.8 0 1.5 -2.3 2 -5 1.3 -3 -0.8 -5 0 -5 1.8 0 2 -2.5 2.3 -7.5 1.3 -4.5 -1 -7.5 -0.5 -7.5 0.8 0 1.5 -2.3 2 -5 1.3 -3 -0.8 -5 0 -5 1.8 0 2.3 -2.5 2.5 -8.8 1.5 -5.5 -1.3 -8.8 -0.8 -8.8 1 0 1.5 -2.5 2 -6.3 1 -3.8 -1 -6.3 -0.5 -6.3 1.3 0 5 -16 2.8 -22.8 -3z" }),
            React__default['default'].createElement("path", { d: "M1600 2481 c36.8 -17.3 157.5 -55.5 231.3 -73.3 45.3 -11 49.3 -12 77.5 -17.5 45.8 -9 46.8 -9 56.5 -1.3 4.8 4 9 7.8 9.8 8.5 0.8 0.8 7.5 6.3 15 12.5 7.5 6.3 14.3 11.8 15 12.5 0.8 0.8 7.5 6.3 15 12.5 7.5 6.3 16.8 13.8 20.3 17 3.5 3 8.5 7.3 11.3 9 4 3.3 3 3.8 -11.5 5 -9 1 -45.5 2.8 -81.3 4.3 -61.8 2.3 -100.5 4 -236.3 9.5 -134.8 5.8 -132.3 5.8 -122.5 1.3z" }),
            React__default['default'].createElement("path", { d: "M3310 2482.5 c-20 -1.3 -68.8 -3.3 -108.8 -4.8 -39.8 -1.8 -97.8 -4 -128.8 -5.3 -31 -1.3 -74.3 -3.3 -96.3 -4 l-39.8 -1.5 7.3 -6.5 c4.3 -3.3 13.3 -11 20 -16.8 7 -6 21.5 -18.5 32.8 -27.8 11 -9.5 25 -21.5 31.3 -26.5 6 -5.3 12.8 -9 14.8 -8.3 2 0.5 8.3 1.8 13.8 2.5 93.3 14.8 271.3 65 343.8 97 8.5 3.8 7.8 3.8 -22.5 3.8 -17.3 -0.3 -47.5 -1 -67.5 -2z" }),
            React__default['default'].createElement("path", { d: "M2158.8 2231 c-2.8 -0.3 -20.8 -2 -40 -3.5 -75 -6 -82 -7 -88.3 -14.5 -9.3 -10.8 -58.5 -84.5 -75.5 -113 -33 -55 -81 -145.8 -102 -192.5 -2.8 -6.3 -7.3 -16.3 -10 -22.5 -2.8 -6.3 -7.3 -16.5 -10 -22.8 -3 -6.3 -7.5 -17.5 -10.5 -25 l-5.3 -13.5 13.3 13.8 c7.3 7.5 21.8 23.3 32 35 10.3 11.8 20.5 23 22.5 25 2 2 8.3 8.8 13.5 15 5.5 6.3 18.5 20.8 29 32.5 10.5 11.8 23.5 26.3 29 32.5 5.3 6.3 11.5 13 13.5 15 2 2 12.3 13.3 22.5 25 10.3 11.8 19.3 21.8 20 22.5 0.8 0.8 10.8 12 22.5 25 11.8 13 21.8 24.3 22.5 25 0.8 0.8 9.8 10.8 20 22.5 10.3 11.8 20.5 23 22.5 25 2 2 12.3 13.3 22.5 25 10.3 11.8 19.3 21.8 20 22.5 0.8 0.8 10.8 11.8 22.3 24.5 l20.8 23 -10.8 -0.3 c-6 -0.3 -13.3 -0.8 -16 -1.3z" }),
            React__default['default'].createElement("path", { d: "M2824.3 2228 c2.5 -2.3 9.5 -10 15.8 -16.8 6.3 -7 23 -25.5 37.5 -41.3 14.5 -15.8 31.3 -34.3 37.5 -41.3 6.3 -6.8 13 -14.3 15 -16.3 2 -2 8.8 -9.5 15 -16.3 6.3 -7 23 -25.5 37.5 -41.3 14.5 -15.8 31.3 -34.3 37.5 -41.3 6.3 -6.8 13 -14.3 15 -16.3 2 -2 14.5 -15.5 27.5 -30 13 -14.5 29.5 -32.5 36.5 -40 7 -7.5 18.3 -20 25 -27.5 6.8 -7.5 14 -15.5 16 -17.5 2 -2 13.8 -14.8 26 -28.3 12.3 -13.3 22.5 -24 23 -23.5 2 2 -10.5 29.3 -13.5 29.3 -1.8 0 -2.5 1.3 -1.8 2.5 2.3 3.8 -4.3 20 -8.3 20 -1.8 0 -2.5 1.3 -1.8 2.5 2.3 3.8 -4.3 20 -8 20 -1.8 0 -2.5 1.5 -1.8 3.5 1.5 4 -13 34 -16.5 34 -1.3 0 -1.8 1.8 -1 3.8 1 2 -0.3 4.3 -2.3 5.3 -2.3 0.8 -3.3 3 -2.5 5 0.8 1.8 -0.5 4 -2.5 5 -2.3 0.8 -3.3 3 -2.5 5 0.8 1.8 -0.5 4 -2.5 5 -2.3 0.8 -3.3 3 -2.5 5 0.8 1.8 -0.5 4.3 -2.8 5 -2.3 0.8 -3.5 2.5 -2.8 3.8 2 3 -18.3 42.3 -22.5 43.8 -1.8 0.8 -2.8 3 -2 4.8 0.5 2 -1.5 6.3 -4.8 9.5 -3.3 3.3 -5.8 7 -5.3 8.3 0.5 1.5 -9.8 19.8 -22.5 41 -30.8 51.5 -35 57.5 -38.8 57.5 -1.8 0 -2.8 1 -1.8 2.5 2 3.3 -4.3 12.5 -8.3 12.5 -1.8 0 -2.8 1 -1.8 2.5 2 3.3 -16 30 -20.3 30 -2 0 -2.8 1.5 -2 3.8 1 2.3 0 3.8 -2.5 3.8 -2.3 0 -4 2 -4 4.8 0 5.3 -4.8 6.5 -32.5 9 -9 0.8 -25.3 2.5 -36.3 3.8 -11 1.3 -32.3 3.5 -47.5 5 -15 1.5 -31.3 3.3 -35.8 3.8 -8.3 1 -8.3 0.8 -3.8 -3.3z" }),
            React__default['default'].createElement("path", { d: "M2770 2172 c0 -3.3 1 -12.3 2.3 -19.8 1.3 -7.5 3.8 -24.3 5.3 -37.3 1.8 -13 4 -30 5 -37.5 1.3 -7.5 3.5 -24.5 5.3 -37.5 l3 -24 41.5 -27.8 c75.3 -50 132.5 -83 217.8 -124.8 55.5 -27.3 117.3 -54.5 119.3 -52.5 0.5 0.5 -2.8 4 -7.3 7.8 -4.5 3.8 -20.5 18.3 -35.8 32.3 -15 14 -33.8 31 -41.3 38 -7.5 6.8 -15.5 14 -17.5 16 -2 2 -16.8 15.5 -32.5 30 -15.8 14.5 -29.3 26.8 -30 27.5 -0.8 0.8 -14.3 13 -30 27.5 -15.8 14.5 -30.5 28 -32.5 30 -2 2 -15.5 14.5 -30 27.5 -14.5 13 -28 25.5 -30 27.5 -2 2 -15.5 14.5 -30 27.5 -14.5 13 -28 25.5 -30 27.5 -2 2 -14.8 13.8 -28 26 -21.5 19.5 -24.5 21.5 -24.5 16z" }),
            React__default['default'].createElement("path", { d: "M2224.5 2168.3 c-0.3 -1.3 -14.8 -15 -32 -30.8 -17.3 -15.8 -34 -31.5 -37.5 -35 -3.5 -3.5 -21.5 -20.3 -40 -37.5 -18.5 -17.3 -36.5 -34 -40 -37.5 -3.5 -3.5 -20.3 -19.3 -37.5 -35 -17.3 -15.8 -34 -31.5 -37.5 -35 -3.5 -3.5 -14.3 -13.5 -23.8 -22.5 -9.8 -9 -33.8 -31.5 -53.8 -50 -58.3 -54.3 -67.5 -63.3 -66.8 -64.3 3 -2.8 139.5 63.8 195.5 95.5 45.8 25.8 150.8 93 160.3 102.5 2.8 2.8 5.3 18.3 11 73.8 1.5 14.5 4 35.3 5.3 46 2.8 24.8 2.8 31.5 0 31.5 -1.3 0 -2.8 -0.8 -3.3 -1.8z" }),
            React__default['default'].createElement("path", { d: "M2463.8 2091.5 c-1.5 -1.5 -6.5 -7.8 -11.3 -14 -4.8 -6.3 -9.3 -11.8 -10 -12.5 -0.8 -0.8 -5.3 -6.3 -10 -12.5 -4.8 -6.3 -9.3 -11.8 -10 -12.5 -2.3 -2 -41.3 -51 -43.5 -54.3 -2.3 -4 8.3 -68.5 18.5 -112 20.8 -90.3 43.5 -167.5 72 -245 15.3 -41.8 15 -41.8 15.3 -6.3 0.3 17.3 -0.8 54.3 -2.3 82.5 -2.8 58.8 -6.3 148 -10.3 257.5 -3.8 106.3 -5.5 132.5 -8.5 129z" }),
            React__default['default'].createElement("path", { d: "M2533 2018.3 c-1.8 -38.3 -4.3 -94.3 -5.5 -124.5 -1.3 -30.3 -3.5 -80.8 -5 -112.5 -1.3 -31.5 -3.8 -86.3 -5.3 -121.3 -1.5 -35 -2.3 -70.5 -2 -78.8 l1 -15 8.8 22.5 c4.8 12.5 8.5 24 8.5 25.8 -0.3 1.5 0.5 3 2 3 1.3 0 1.5 1.3 0.8 2.5 -0.8 1.5 -0.5 2.5 0.5 2.5 2 0 9.3 20.8 8.3 24 -0.3 1 0.5 2.5 1.8 3.3 2.5 1.8 23.5 63.5 24 70.5 0.3 2.8 1.3 4.8 2.5 4.8 1.3 0 1.8 2.3 1 5 -0.8 2.8 -0.3 5 1.3 5 1.5 0 2 1.8 1 3.8 -0.8 2 0 3.8 1.3 3.8 1.5 0 2.3 2.3 1.5 5 -0.8 2.8 -0.5 5 0.5 5 2.8 0 10.8 29.8 9 32.8 -1 1.3 -0.3 2.3 1.3 2.3 1.8 0 2.5 1.5 1.8 3.5 -0.8 2 -0.8 4 0.3 4.5 2.8 1.3 13.5 46.5 11.8 49.5 -0.8 1.3 -0.3 2.5 1.3 2.5 1.8 0 2.5 1.5 1.8 3.5 -0.8 2 -0.5 4 0.8 4.5 1.3 0.5 2.8 5.5 3 11.3 0.5 6 1.8 10.8 3 10.8 1 0 1.5 3.5 1 7.5 -0.8 4.3 0 7.5 1.3 7.5 1.3 0 1.8 2.3 1 5 -0.8 2.8 -0.3 5 1.3 5 1.5 0 2 3.3 1.5 7.5 -0.8 4.3 0 7.5 1.3 7.5 1.3 0 1.8 2.3 1 5 -0.8 2.8 -0.3 5 1.3 5 1.5 0 2 3.8 1.5 8.8 -0.5 4.8 0 8.8 1.3 8.8 1.3 0 1.8 2.8 1.3 6.3 -0.8 3.5 -0.3 6.3 0.8 6.3 2.8 0 3 21.8 0.5 23 -1.3 0.5 -7 7 -13.3 14.5 -6.3 7.5 -11.8 14.3 -12.5 15 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -6.3 7.5 -12.5 15 -6.3 7.5 -14 17 -17.8 20.8 l-6.3 7 -3 -69.5z" }),
            React__default['default'].createElement("path", { d: "M1771 1786.3 c-3 -2 -6 -3 -6.8 -2.3 -0.8 0.8 -4 0 -7.3 -1.8 -3 -1.8 -6.8 -3.5 -8.3 -3.8 -1.3 0 -3 -0.5 -3.8 -0.8 -0.8 -0.3 -4 -1 -7.5 -1.8 -3.5 -0.5 -8 -1.8 -10 -2.8 -2 -0.8 -6.3 -2 -9.5 -2.5 -3 -0.5 -8.8 -2.3 -12.5 -3.8 -3.8 -1.5 -8 -2.5 -9.5 -2.3 -1.8 0.3 -6.3 -1 -10 -2.5 -4 -1.8 -8.3 -2.8 -9.5 -2.5 -1.3 0.3 -4 -0.3 -6.3 -1.3 -2.3 -1 -8 -2.3 -12.8 -2.8 -4.8 -0.5 -9.8 -2 -11 -3.3 -1.3 -1.3 -3.5 -1.5 -5.3 -1 -1.8 0.8 -4 0.3 -4.8 -1.3 -1 -1.5 -3.3 -2 -5.3 -1 -2 0.8 -5.8 0.5 -8 -0.5 -2.5 -1 -10 -2.3 -17 -3 -6.8 -0.5 -13.8 -2.3 -15.3 -3.5 -1.5 -1.3 -3.5 -1.5 -4.3 -0.8 -0.8 1 -3.5 0.8 -6 -0.3 -2.5 -1 -8.5 -1.8 -13.5 -1.5 -5.3 0.3 -10 -0.5 -10.8 -2 -1 -1.5 -3.3 -2 -5.3 -1 -2 0.8 -5.8 0.5 -8 -0.5 -2.5 -1 -9.3 -1.8 -15 -1.5 -5.8 0.5 -12 -0.3 -13.8 -1.3 -1.8 -1 -7.3 -1.8 -12.5 -1.3 -5.3 0.3 -10.8 -0.3 -12.3 -1.3 -1.5 -0.8 -13.3 -1.5 -26 -1.3 -13 0.3 -24 -0.5 -24.8 -2 -1 -1.3 -9 -1.8 -19.8 -1 l-18.3 1.5 -9.3 -11.5 c-5.3 -6.5 -10.8 -13 -12.5 -14.8 -1.8 -1.8 -8 -9.5 -14.3 -17 -6.3 -7.5 -11.8 -14.3 -12.5 -15 -0.8 -0.8 -8.5 -10.3 -17.3 -21.3 -8.5 -11 -17.8 -22.5 -20.3 -25.5 -7.8 -9 -70.3 -92.8 -90.5 -120.8 -23.3 -32.5 -88.8 -131.3 -106 -160 -7 -11.8 -18.5 -30.5 -25.8 -42 -7 -11.5 -12.8 -21.3 -12.8 -22 0 -0.5 -2.8 -5.3 -6 -10.5 -24.5 -37.5 -106.8 -197.8 -129.5 -251.8 -25.3 -60 -33.5 -82.3 -36 -98 -1.5 -9.8 -1.3 -10.8 3.5 -10.8 11.8 0 68.5 20.8 125.3 46.3 26.3 11.8 140.5 68.8 159 79.5 5.5 3.3 16.3 9.3 23.8 13.3 79.5 43.8 200.8 120 279.8 176.8 31.3 22.5 94.5 69.3 104 77 2.8 2.5 19.8 15.8 37.5 30 18 14 33 26.3 33.8 27 0.8 1 7.5 6.5 15 12.8 7.5 6.3 14.3 11.8 15 12.5 0.8 0.8 8.5 7.5 17.3 15 l15.8 13.8 -1 15.5 c-0.5 8.8 0 15.8 1.3 15.8 1.3 0 1.8 11.3 1.3 25 -0.3 13.8 0 25.3 1.3 25.8 1 0.3 2 11.5 2.5 24.8 0.3 13.5 1.5 24.5 2.8 24.5 1 0 1.5 3.3 1 7.5 -0.5 4 -0.3 7.8 0.8 8 1 0.5 2 8 2.5 17 0.5 9 1.8 16.8 2.8 17.5 1 0.8 2 7.3 2.5 14.5 0.5 7 1.8 13 3 13 1 0 1.5 3.5 1 7.5 -0.8 4.3 0 7.5 1.3 7.5 1.3 0 1.8 2.3 1 5 -0.8 2.8 -0.5 5 0.8 5 1.8 0 5.8 20.3 6.3 30 0 2 1 4.5 2 5.3 1.3 0.8 2.3 5.5 2.5 10.5 0.3 5 1 9.3 1.8 9.3 1.8 0 11.5 37.8 10.5 40.8 -0.3 1 0.8 1.8 2.3 1.8 1.5 0 2.3 2.3 1.5 5 -0.8 2.5 -0.3 5 0.8 5.5 1 0.5 2.8 3.5 3.8 7 1.8 6.3 -1.5 3.8 -26.3 -20 -2 -2 -11.8 -11 -21.3 -20 -9.8 -9 -34.5 -32 -55 -51.5 -60.3 -56.5 -65.8 -61 -43.8 -36 10.3 11.8 19.3 21.8 20 22.5 0.8 0.8 10.8 12 22.5 25 11.8 13 21.8 24.3 22.5 25 0.8 0.8 9.8 10.8 20 22.5 10.3 11.5 22 24.5 26 28.8 3.8 4 11.5 12.8 16.8 19 8 9.5 9 12 5.8 13.3 -5 2 -4 2 -10 -2.3z" }),
            React__default['default'].createElement("path", { d: "M3234 1783 c-0.8 -1.3 2.3 -6 6.8 -10.8 4.5 -4.8 18.8 -20.5 31.8 -34.8 13 -14.5 29.5 -32.5 36.5 -40 7 -7.5 18.3 -20 25 -27.5 6.8 -7.5 18.8 -20.3 26.5 -28.5 7.8 -8.5 13.8 -15.8 13 -16.3 -0.5 -0.5 -3 1 -5.3 3.8 -2.5 2.5 -16.3 15.5 -30.8 28.5 -14.5 13 -28 25.5 -30 27.5 -2 2 -15.5 14.5 -30 27.5 -14.5 13 -33.5 30.8 -42.5 39.3 -9 8.5 -17 14.8 -18.3 13.5 -1.5 -1.5 0.8 -11 10.8 -41.5 15 -47 34 -152.3 39.8 -222.5 1.5 -16.5 3.3 -45.5 4.3 -64.8 l1.5 -34.5 9 -8 c4.8 -4.3 10 -9 11.5 -10.3 1.5 -1.5 9 -7.5 16.5 -13.8 7.5 -6.3 14.3 -11.8 15 -12.5 3 -3 53 -43 72.5 -57.5 11.8 -9 21.8 -16.8 22.5 -17.5 0.8 -0.8 5.3 -4.3 10 -7.5 4.8 -3.5 10.5 -7.5 12.5 -9.3 10.3 -8.3 56.5 -41.5 77.5 -55.8 13 -9 24.3 -16.8 25 -17.5 1.5 -1.8 46.3 -31.3 80 -52.8 33.3 -21.3 104.5 -64.8 106 -64.8 0.5 0 8.5 -4.5 17.5 -10 9 -5.5 17 -10 18 -10 0.8 0 4.5 -2 8 -4.5 14 -9.8 137.3 -73.3 175.5 -90.5 54.8 -24.5 87.5 -37.8 118.5 -47.8 20.3 -6.5 24 -6.3 24 1.8 0 8.8 -14.3 50.8 -28.8 84.8 -21 49.3 -27 61.8 -59 125 -42.5 84.5 -68.3 130 -129.8 230 -26 42.3 -129.3 193.8 -137.5 201.3 -0.8 0.8 -12 15.3 -24.8 32.5 -22 28.8 -62 79.5 -65.3 82.5 -0.8 0.8 -6.3 7.5 -12.5 15 -6.3 7.5 -12.5 15.3 -14.3 17 -1.8 1.8 -7.3 8.3 -12.5 14.5 l-9.3 11.5 -23.3 -1 c-14.5 -0.8 -23.3 -0.3 -23.3 1.3 0 1.5 -9.3 2 -25 1.3 -15.3 -0.8 -25.3 -0.3 -25.8 1.3 -0.5 1.5 -11.5 2.5 -25 2.8 -13.3 0.3 -24.3 1.3 -24.3 2.5 0 1 -3 1.3 -6.8 0.5 -3.8 -1 -7.3 -0.8 -8.3 1 -0.8 1.5 -8.8 2.8 -17.8 3.3 -8.8 0.3 -16.8 1.5 -17.5 2.8 -1 1 -7.5 2.3 -14.5 2.3 -7 0 -12.8 1.3 -12.8 2.5 0 1.3 -3.3 1.5 -7.5 0.5 -4.5 -1 -7.5 -0.5 -7.5 0.8 0 1.5 -2.3 2 -5 1.3 -2.8 -0.8 -5 -0.3 -5 1 0 3 -23.8 8.5 -28.8 6.8 -2 -0.8 -5.5 0.3 -7.8 2.8 -2.8 2.8 -6.3 3.5 -11.3 2.5 -4.3 -1 -7.3 -0.5 -7.3 0.8 0 3.3 -26.3 11.3 -35.5 11 -4 0 -7 0.8 -7 2 0 1 -2 1.5 -4.8 0.8 -2.8 -0.8 -5.3 0.5 -6 2.8 -1.8 4.3 -5.8 5.3 -7.8 2z" }),
            React__default['default'].createElement("path", { d: "M2511.8 1516.5 c-1 -2.5 -1.8 -14.8 -1.8 -27.5 0 -12.8 -1 -43.3 -2.5 -68 -1.3 -24.5 -3 -64.8 -4 -89.3 -0.8 -24.8 -2.5 -43.8 -3.5 -42.5 -1.3 1 -3.5 39.3 -5 84.5 -1.8 45.5 -3.8 92.8 -4.8 105.5 l-1.5 23 -16.3 -31.5 c-29 -56.3 -58.8 -103.5 -100.8 -159.5 -18.5 -24.5 -43 -55 -49.3 -61.3 -0.8 -0.8 -9.8 -10.8 -20 -22.5 -10.3 -11.8 -22.5 -25 -27 -29.8 l-8.5 -8.5 1.5 -20.3 c3.3 -39.5 6.8 -78 9 -98.3 15 -127 28.8 -210.5 54.8 -331.5 5.8 -26.5 31.5 -130.8 35.5 -143 1.3 -4 5.8 -19.8 9.8 -35 4.3 -15 8.8 -30.3 10 -33.8 1.3 -3.5 6.3 -19.8 11.3 -36.3 29.3 -95.3 83.3 -229.5 97 -240.8 4.5 -3.8 9 1.8 21.5 26.5 20.3 40.3 37 83 66.3 169.3 26.8 78.8 35.3 107.3 60 205 25 98.8 44.8 194.8 56.3 272.5 12 81.3 18.3 128.5 22.5 176.3 1.5 15.8 4 40.3 5.3 54.5 4.3 44.3 4 46.3 -8 59.5 -6 6.3 -13.3 12.5 -16.5 13.8 -3.3 1.3 -5 3.5 -4.3 5 2 3 -5.8 12.3 -10.5 12.3 -1.8 0 -3.3 1.8 -3.3 4 0 5 -17.5 26 -21.8 26 -1.8 0 -3.3 1.8 -3.3 3.8 0 2 -10.5 17.5 -23 34.5 -12.8 17 -31 42.8 -40.8 57.5 -9.5 14.8 -19 26.8 -20.8 26.8 -1.8 0 -2.5 1.3 -1.8 2.5 2.3 3.5 -9 22.5 -13 22.5 -2 0 -2.8 1.3 -2 2.5 0.8 1.5 0.3 2.5 -1.3 2.5 -1.5 0 -2 1 -1.3 2.5 2 3.3 -8 22.5 -12.5 24.3 -2 0.8 -3.3 2.3 -2.5 3.5 2 2.8 -20.8 47.3 -24 47.3 -1.3 0 -2 1 -1.3 2.3 1 1.3 0.5 4.8 -0.5 8 -2 5 -2.3 5 -3.8 1.3z" }))));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear_logoround)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear_logoround", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#F6AF5B" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#F6AF5B" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#AE5714" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#AE5714" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#E17A2F" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#F6AF5B" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#F7D29B" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#E7974D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#E17A2F" }),
        React__default['default'].createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#AE5714" }),
        React__default['default'].createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#AE5714" })));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#FFAF00" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#EB8C00" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#FEED8D" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#FFC700" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#EB8C00" }),
        React__default['default'].createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#EB8C00" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#9A6AFF" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#9A6AFF" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#A880FD" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#A880FD" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#7645D9" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#9A6AFF" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#CAB3F8" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#8F5BFD" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#7645D9" }),
        React__default['default'].createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#452A7A" }),
        React__default['default'].createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#452A7A" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#C0C4C6" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#C0C4C6" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#969696" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#C0C4C6" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#D8D8D8" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#B2B2B2" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#969696" }),
        React__default['default'].createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#7D7D7D" })));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#0098A1" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0022L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#84F0F9" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#0098A1" }),
        React__default['default'].createElement("path", { d: "M9.95096 14.0798C9.03126 14.1218 8.69439 13.361 8.65076 12.4055C8.60713 11.4501 8.87326 10.6617 9.79296 10.6197C10.7127 10.5777 11.0495 11.3385 11.0932 12.294C11.1368 13.2495 10.8707 14.0378 9.95096 14.0798Z", fill: "#017178" }),
        React__default['default'].createElement("path", { d: "M15.1199 14.0803C14.2002 14.1223 13.8633 13.3615 13.8197 12.406C13.7761 11.4505 14.0422 10.6622 14.9619 10.6202C15.8816 10.5782 16.2185 11.339 16.2621 12.2945C16.3057 13.25 16.0396 14.0383 15.1199 14.0803Z", fill: "#017178" })));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React__default['default'].createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React__default['default'].createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React__default['default'].createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React__default['default'].createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React__default['default'].createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React__default['default'].createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React__default['default'].createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React__default['default'].createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React__default['default'].createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React__default['default'].createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React__default['default'].createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React__default['default'].createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$B = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear_pancakes)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear_pancakes", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 5000 5000" }, props),
        React__default['default'].createElement("g", { fill: "#046202" },
            React__default['default'].createElement("path", { d: "M2118.8 4995 c-12.3 -2.5 -38.8 -7 -58.8 -10 -20 -3 -50.8 -8.8 -68.8 -12.8 -17.8 -3.8 -38.8 -8.5 -46.3 -10 -47 -10 -138.5 -34 -180 -47.3 -7.5 -2.5 -19.3 -5.8 -26.3 -7.5 -6.8 -1.5 -14.8 -3.8 -17.5 -5 -2.8 -1 -12.3 -4.5 -21.3 -7.5 -9 -3 -18.5 -6.5 -21.3 -7.8 -2.8 -1 -10 -3.5 -16.3 -5 -6.3 -1.8 -12.3 -4 -13.8 -4.8 -1.3 -1 -5.8 -2.5 -10 -3.5 -4 -1 -11.3 -3.5 -15.5 -5.5 -19.3 -8.3 -24.8 -10.5 -30.8 -12.3 -3.5 -0.8 -9 -2.8 -12.5 -4.3 -3.5 -1.5 -8.5 -3.5 -11.3 -4.8 -4.8 -1.8 -36.5 -15 -47.5 -19.8 -2.8 -1 -9 -3.8 -14.3 -6 -5 -2.3 -9.5 -4 -10.3 -4 -0.8 0 -14.8 -6.3 -31 -14 -16.3 -7.8 -34 -16 -39.5 -18.5 -26.8 -12 -132.3 -66.8 -140 -72.8 -1.5 -1 -8.8 -5.3 -16.3 -9.3 -35.5 -18.8 -101 -58.5 -140 -85 -86.8 -58.5 -83.3 -55.8 -90 -72 -5.8 -14 -6.3 -17.3 -6 -61 l0 -46.3 9.5 -23.8 c10 -25.8 43 -92.3 57 -115.5 5 -8 10.3 -17.8 12 -22 1.8 -4 4 -7.5 5.3 -7.5 1.3 0 2.3 -1.3 2.3 -2.8 0 -1.5 3.5 -7.5 7.5 -13.5 4.3 -6 7.5 -11.5 7.5 -12.3 0 -0.8 8 -13.8 17.5 -29.3 9.8 -15.3 17.5 -28.3 17.5 -28.8 0 -0.5 8 -12.8 17.5 -27 9.8 -14.5 17.5 -27.3 17.5 -28.8 0 -1.3 0.8 -2.8 2 -3.3 2 -0.8 28 -38.8 28 -40.8 0 -0.8 1 -2.8 2.5 -4.5 1.3 -1.8 15 -22 30.3 -45.5 15.5 -23.3 34.5 -51.8 42.5 -63 8.3 -11 14.8 -21 14.8 -21.8 0 -0.8 2.5 -4.3 5.5 -7.8 3 -3.5 7.8 -10.3 10.5 -15 4.8 -8 28 -42 46.5 -68.3 6 -8.5 6.5 -10.3 2.5 -8 -4.3 2.3 -5 2 -5 -2.3 0 -6.3 -0.5 -5.8 37.5 -31 17.3 -11.5 38.8 -26 47.8 -32.5 12.5 -8.8 19 -11.8 25.8 -11.8 8.3 0 9 0.5 9 7.5 0 5.3 -4.5 14 -14.3 27.8 -8 11.3 -21 29.5 -28.8 40.5 -8 11.3 -15.3 21.8 -16.5 23 -1 1.5 -7 9.8 -13 18.8 -6 9 -12 17.5 -13.3 18.8 -3.3 4 -63.8 92.8 -98.5 145 -59.5 89.8 -78.3 118.5 -78.3 121 0 1.3 -0.8 2.8 -1.8 3.3 -2.8 1 -26.3 37.3 -37.8 57.5 -10 17.5 -34.3 57 -37.5 60.8 -1 1.5 -2.8 4.3 -3.8 6.3 -1 2 -6 11.3 -11 20.3 -24.3 42.3 -39 71 -50.3 97.5 -10.5 23.8 -12.8 32.3 -14.3 50.3 -1 11.8 -1 28.3 0 36.8 l1.8 15.3 24 16.8 c45 31.3 85.8 58.3 88.3 58.3 1.3 0 2.3 1 2.3 2.3 0 1.3 2 2.8 4.5 3.5 4.3 1.5 11 5.5 36.8 21.3 24 14.8 74.3 43 76.5 43 1.3 0 2.3 1.3 2.3 2.5 0 1.5 2.3 2.5 4.8 2.5 2.8 0 5.3 0.8 5.8 2 0.5 1 16 9.5 34.5 19 18.5 9.5 36.5 19 40 21.3 7.3 4.8 21.8 12 45 21.8 9 4 22.3 10.3 29.8 14 7.3 3.8 14.8 7 16.8 7 2 0 3.5 1.3 3.5 2.5 0 1.5 2.3 2.5 5 2.5 2.8 0 5 1.3 5 2.5 0 1.5 1.3 2.5 3 2.5 3.8 0 42.5 15.3 45.5 18 1.5 1 4.5 2 7 2 2.5 0 4.5 1.3 4.5 2.5 0 1.5 1.3 2.5 3 2.5 1.5 0 11.3 3.3 21.8 7.3 52.3 20.3 66.3 25.5 91.5 34 15.3 5 29.8 10 32.5 11.3 17.3 7.5 166.3 49.8 210 59.5 76.5 17 136 28.8 160 31.8 7 0.8 25.5 3.5 41.3 6.3 15.8 2.5 40 6 53.8 7.5 13.8 1.5 33.5 3.8 43.8 5 129.3 16.3 346.5 18.5 490 4.8 34.3 -3.3 88.8 -9.5 106.3 -12.3 7 -1 22 -3.3 33.8 -4.8 20 -2.8 34.5 -5.3 105 -17.8 15.8 -2.8 53 -10.8 82.5 -17.8 29.5 -7 57.8 -13.8 62.5 -14.8 7.5 -1.8 49.8 -13.3 73.8 -20 27.8 -7.8 53.3 -15.5 57.5 -17.3 2.8 -1.3 23 -8 45 -15.3 22 -7 42.3 -13.8 45 -15 2.8 -1 10.8 -4 17.5 -6.3 11.3 -4 20.3 -7.5 35 -14 2.8 -1.3 11.3 -4.5 18.8 -7.3 7.5 -2.8 16.5 -6.5 20 -8 3.5 -1.5 8.5 -3.5 11.3 -4.8 4.5 -1.8 34.3 -14 48.3 -20 3 -1.3 8 -3.3 11.3 -4.5 3 -1.3 23.3 -10.8 45 -21.3 22 -10.5 40.3 -19 41 -19 2.3 0 19.5 -8.3 25.8 -12.5 3.5 -2.5 24.3 -13.5 46.3 -24.8 22 -11.5 41.3 -21.8 42.5 -22.8 2.5 -2 26.5 -15.3 38 -21 3.3 -1.5 5.8 -3.5 5.8 -4.5 0 -1.3 1 -2 2.3 -2 1.3 0 17.3 -9.3 35.8 -20.3 18.3 -11.3 37.3 -22.8 42 -25.5 4.8 -3 9 -6.3 9.5 -7.3 0.5 -1 2 -2 3.3 -2 5.5 0 160.8 -109 167.3 -117.5 0.8 -0.8 10.8 -8.8 22.5 -17.5 11.8 -8.8 21.8 -16.5 22.5 -17.3 0.8 -1 5.3 -4.5 10 -8 4.8 -3.8 11.5 -9.3 15 -12.3 3.5 -3 11.3 -9.8 17.5 -14.8 6.3 -5 11.8 -9.5 12.5 -10.3 0.8 -0.8 9.8 -8.5 20 -17.5 10.3 -9 22.3 -19.5 26.5 -23.8 4.3 -4 16.8 -15.3 27.8 -25 21 -18.3 114.5 -111.5 138.3 -137.5 40 -44.3 54.8 -61 80.5 -91.8 15.5 -18.8 38.3 -46.8 50.8 -62.3 12.3 -15.8 23.8 -30.3 25.5 -32.3 3.5 -4.3 35.8 -48 47.8 -65 8.8 -12 63.5 -94.3 78.8 -118 5 -8 9.3 -15.5 9.3 -17 0 -1.3 1 -2.5 2.3 -2.5 1.3 0 2.8 -2 3.5 -4.3 1 -2.5 4.3 -9 7.8 -14.5 3.5 -5.5 8.8 -14.3 11.5 -19.3 2.8 -5 8.3 -14 12.3 -20 16 -24 79.5 -147 109 -210.8 7.5 -16.5 28.8 -66.3 28.8 -67.5 0 -0.8 3.3 -8.3 7.3 -16.8 4 -8.8 8.8 -20.8 11 -27 2 -6.3 8.5 -23 14.3 -37.3 11.5 -29.3 21 -56 34.3 -96.5 5 -15 11.8 -36 15 -46.3 9.3 -27.8 38.5 -135 43.3 -158.8 1.3 -5.5 4.5 -19.5 7.5 -31.3 3 -11.8 6.3 -26.3 7.5 -32.5 1 -6.3 4.3 -23 7.3 -37.5 3 -14.5 6.5 -33.5 7.8 -42.5 1.3 -9 4 -27 6.3 -40 8.8 -53.3 11.3 -71.5 18.8 -142.5 8.5 -81.3 10.8 -131.3 10.8 -240 0 -105 -2.5 -169.5 -9.8 -235 -2 -18.5 -4.8 -43.8 -6 -56.3 -2.5 -21.5 -4.8 -38.3 -10 -71.8 -1.3 -8.8 -3.5 -23.5 -4.8 -33.3 -2.8 -18.5 -4.5 -28.8 -12.8 -72.5 -6.3 -34.5 -8 -42.5 -17.8 -82.5 -4.3 -17.8 -8.8 -36.5 -9.8 -41.3 -2.5 -10.5 -11.3 -44 -16.3 -61.3 -2 -6.8 -6 -21 -8.8 -31.3 -18.8 -66.3 -52 -165.5 -68.8 -203.8 -1.8 -4 -6.3 -15.3 -10 -25 -3.8 -9.5 -8.8 -22.3 -11.5 -28 -2.5 -6 -4.8 -11.5 -4.8 -12.5 0 -2 -11.5 -28.3 -25.3 -57.8 -5.5 -11.5 -9.8 -21.5 -9.8 -22.5 0 -2.5 -52.5 -108.3 -57.5 -115.5 -2.3 -3.5 -9.8 -17 -16.5 -30 -6.8 -13 -13 -24 -14 -24.5 -1.3 -0.5 -2 -3 -2 -5.8 0 -2.5 -1 -4.8 -2.5 -4.8 -1.3 0 -2.5 -1 -2.5 -2.3 0 -1.3 -12.5 -23 -27.8 -48.3 -15.5 -25.3 -29.8 -49.3 -32.3 -53.5 -3.8 -6.5 -39.3 -59.3 -71 -105.8 -5.3 -7.8 -10.5 -14.3 -11.8 -14.8 -1.3 -0.5 -2.3 -2.3 -2.3 -4 0 -1.5 -4.5 -8 -10 -14 -5.5 -6.3 -10 -12.5 -10 -14.3 0 -1.5 -1 -3.3 -2 -3.8 -1 -0.3 -9.3 -10.3 -18 -22 -9 -11.8 -18 -23.5 -20.3 -26.3 -2.5 -2.8 -11.5 -14 -20 -25 -8.8 -11 -19.8 -24.3 -24.5 -29.3 -4.8 -5.3 -10.3 -12 -12.3 -15 -2.3 -3.3 -4.5 -6.3 -5.5 -7 -0.8 -0.8 -8.8 -9.8 -17.5 -20 -9 -10.3 -22 -25 -29 -32.5 -7 -7.5 -17 -18.8 -22.5 -25 -14.8 -17.3 -122.5 -125 -134.3 -134.8 -5.8 -4.5 -22.3 -19.3 -36.5 -32.5 -14.3 -13.3 -28.3 -25.5 -31.3 -27.5 -3 -2 -5.8 -4.3 -6.5 -5.3 -0.8 -0.8 -8.5 -7.5 -17.5 -15 -8.8 -7.5 -18.3 -15.8 -21.3 -18.5 -2.8 -2.5 -14 -11.3 -25 -19.8 -11 -8.3 -20.5 -16 -21.3 -16.8 -0.8 -1 -18 -14.3 -38.8 -29.5 -20.5 -15.3 -38.5 -28.8 -40 -29.8 -1.3 -1.3 -6.5 -5 -11.3 -8.3 -4.8 -3.3 -11 -8 -13.5 -10.5 -2.8 -2.5 -6.3 -4.5 -8 -4.5 -1.8 0 -3.5 -0.8 -4 -1.8 -1.3 -2.8 -84.3 -58.3 -87 -58.3 -1.5 0 -2.5 -1 -2.5 -2.3 0 -1.3 -2 -2.8 -4.5 -3.5 -2.3 -1 -8.8 -4.3 -14.3 -7.8 -5.5 -3.5 -15 -9.3 -21.3 -12.8 -6.3 -3.5 -16.3 -9.8 -22.5 -13.8 -17.8 -11.3 -33 -20 -35.3 -20 -1.3 0 -2.3 -1 -2.3 -2.5 0 -1.3 -2.3 -2.5 -5 -2.5 -2.8 0 -5 -0.8 -5 -2 0 -1 -3.3 -3.3 -7.3 -5 -4 -1.8 -16.8 -8.5 -28 -14.8 -26 -14.3 -132.8 -68.3 -135.3 -68.3 -1 0 -11 -4.3 -22.5 -9.8 -29.5 -13.8 -55.8 -25.3 -57.8 -25.3 -1 0 -6.5 -2.3 -12.5 -4.8 -5.8 -2.8 -18.3 -7.8 -28 -11.5 -9.5 -3.8 -20.8 -8.3 -25 -10 -36.8 -16 -149.3 -54 -196.3 -66.3 -6.3 -1.8 -13.5 -4 -16.3 -5.3 -6 -2.5 -76.5 -20.8 -123.8 -32 -48 -11.3 -117.3 -24.5 -171.8 -32.8 -37 -5.5 -51 -7.5 -66.3 -10 -15.3 -2.3 -35.5 -4.5 -92 -10 -118.5 -11.5 -323.5 -12.3 -420 -1.3 -17.3 2 -45.8 4.8 -63.8 6.3 -27 2.3 -59.3 6.5 -107.5 13.8 -33.5 5 -125.5 21.8 -143.8 26 -4.8 1.3 -26.3 6.5 -47.5 11.8 -21.3 5 -42.8 10.3 -47.5 11.3 -8 1.8 -37.5 9.5 -56.3 14.8 -4 1 -14.3 4 -22.5 6.3 -8.3 2 -24.5 7.3 -36.3 11 -11.8 4 -33.5 11.3 -48.8 16 -43.3 14 -69 23.3 -105.8 38 -18.8 7.5 -35 13.8 -36 13.8 -1 0 -7.8 2.8 -15 6 -7.3 3.3 -22.8 10 -34.5 14.8 -11.8 4.8 -27.5 11.3 -35 14.5 -15.3 6.3 -165.3 81.5 -195 97.5 -10.3 5.8 -32.3 18.5 -48.8 28.5 -16.5 10 -34 20.5 -38.8 23.3 -21.3 12 -116.5 73.8 -120 77.8 -0.8 0.8 -10.8 8 -22.5 15.8 -11.8 8 -24.3 17.3 -28 20.8 -3.8 3.5 -7.8 6.3 -8.8 6.3 -1 0 -5.3 3 -9.5 6.5 -4 3.5 -16 12.8 -26.3 20.5 -10.3 7.8 -20.3 15.5 -22 17.3 -1.8 1.8 -11.5 9.3 -21.3 16.8 -10 7.5 -20.3 15.8 -23 18.3 -3 2.5 -12.5 10.8 -21.3 18.3 -9 7.5 -16.8 14.3 -17.5 15 -0.8 1 -3.5 3.3 -6.5 5.3 -3 2 -17 14.3 -31.3 27.5 -14.3 13.3 -30.8 28 -36.5 32.5 -11.8 9.8 -119.5 117.5 -134.3 134.8 -5.5 6.3 -15.5 17.5 -22.5 25 -7 7.5 -20 22.3 -29 32.5 -8.8 10.3 -16.8 19.3 -17.5 20 -1 0.8 -3.3 3.8 -5.5 7 -2 3 -7.5 9.8 -12.3 15 -4.8 5 -12.5 14.3 -17.3 20.5 -4.8 6.3 -10 12.8 -12 14.5 -1.8 2 -6.3 7.5 -10 12.5 -3.8 5 -9.3 12 -12.3 15.5 -7.3 8.5 -51.5 68.3 -61.5 83 -4.3 6.8 -8.8 12 -9.8 12 -1.3 0 -2 1.5 -2 3.3 0 1.5 -2.5 5.8 -5.3 9.3 -2.8 3.5 -15.3 21.5 -27.5 40 -12.3 18.5 -23.3 35 -24.3 36.3 -1 1.5 -3.8 6 -6.3 10 -14.8 24.8 -20.3 33.8 -26.8 43.8 -4 6.3 -10.3 17 -14 23.8 -3.8 7 -7.3 13 -8.3 13.8 -1.8 1.5 -5.8 8.5 -15.3 26.3 -3.8 7 -9.5 17 -13 22.5 -7.3 11.5 -91.5 180.8 -96.5 193.8 -2 4.8 -4.5 11 -5.5 13.8 -1.3 2.8 -5.8 13.5 -10 23.8 -10.5 25 -12 29 -15 35.8 -1.3 3 -4.8 11.8 -7.5 19.3 -2.8 7.5 -6 16 -7.3 18.8 -6.5 14.8 -10 23.8 -14 35 -2.3 7 -5.3 14.8 -6.3 17.5 -1.3 2.8 -8 23 -15 45 -7.3 22 -14 42.3 -15.3 45 -4.3 10.3 -36 125.8 -46 167.5 -3.5 15.3 -7.5 32.5 -9 38.8 -1.5 6.3 -3.5 15.3 -4.8 20 -3 11.8 -11.5 54.5 -15 76.3 -1.8 9.8 -4.5 26.5 -6.5 37.5 -2 11 -6 36.3 -8.5 56.3 -2.8 20 -6 44.3 -7.3 53.8 -2.5 18.8 -5.8 51.5 -11.3 121.3 -9.8 118 -7 291.8 6.3 420 5.5 54.8 7 67 9.5 83.3 1.5 9.3 3.8 23.8 5 32.5 1.5 8.5 3.3 20 4 25.5 4.8 30.8 7.3 45.5 13 73.8 3.5 17.3 7.3 36.3 8.3 42.5 2.5 15.8 19.8 91.8 22.5 98.3 1 3 3.3 11.3 5 18 16.3 71.5 75.8 248 105 312.8 2.8 5.5 7 16.3 10 23.5 15.5 39.3 83.3 178.3 107.8 221.8 3 5.3 8 14 10.8 19.5 3 5.5 6 10.5 6.8 11.3 0.8 0.8 2 2.5 2.5 3.8 0.5 1.5 7.3 13 14.8 25.8 13.5 22.8 14 23.3 27 27 9.8 3 18.3 3.5 31.3 2.3 18 -1.5 45.8 -8 50.5 -11.3 1.5 -1 6.5 -2.8 11.3 -3.8 4.8 -1 14.5 -4.3 21.3 -7.5 29.3 -13.3 48 -21.3 49.5 -21.3 4.3 0 194.8 -93.5 213 -104.5 4.3 -2.5 28.3 -15.3 53.8 -28.3 25.5 -12.8 46.8 -24.3 47.5 -25 0.8 -1 10.3 -6.3 21.3 -12 11 -5.8 23.5 -12.5 27.5 -14.8 4.3 -2.5 14.8 -8.5 23.8 -13.3 9 -4.5 16.8 -9 17.5 -10 0.8 -1 10.8 -6.5 22.3 -12.5 28.3 -14.8 46 -24.8 76.5 -42.8 4.3 -2.5 11.5 -6.3 16.3 -8.8 4.8 -2.3 9.3 -5 10 -6 0.8 -0.8 7.3 -4.5 14.5 -8.3 7.5 -3.8 21 -11.8 30.5 -17.8 9.5 -6 23.8 -14.3 31.8 -18.5 8 -4 21.8 -11.8 30.8 -17.5 9 -5.5 20.3 -12.5 25 -15.3 4.8 -2.8 12.8 -7.5 17.5 -10.3 4.8 -3 13.3 -7.8 18.8 -10.5 5.5 -3 10.5 -6.3 11.3 -7 0.8 -0.8 4.8 -3.3 9 -5.5 8 -4 50.3 -30 54.8 -33.5 1.5 -1 6 -3.8 10 -5.8 4.3 -2 15 -8.5 24.3 -14.3 11.5 -7.5 19.3 -10.8 25.5 -10.8 8.5 0 9 0.5 9 8.3 0 5.5 -2.5 10.8 -8.3 16.8 -4.5 4.8 -13 15 -19.3 22.5 -6.3 7.5 -11.8 14.3 -12.5 15 -1 0.8 -9 10.8 -18.3 22.5 -24.5 30.8 -28.5 35 -34.3 35 -4.5 0 -4.8 -0.8 -2.5 -5 2.8 -5 2.5 -5 -5.5 -0.3 -4.5 2.5 -21.8 12.5 -38 22.5 -16.5 9.8 -30.3 17.8 -30.8 17.8 -0.8 0 -5.8 3.3 -11.5 7.3 -5.8 3.8 -18.3 11.3 -28 16.3 -9.5 5 -22.5 12.5 -28.8 16.5 -12 7.8 -16 10 -37.5 22 -27.5 15 -46.5 26 -57.5 32.8 -6.3 3.8 -21.3 12.3 -33.8 18.8 -28.8 15.5 -43.3 23.5 -65 35.8 -21.8 12.5 -42.5 23.8 -65 35.8 -38.3 20.3 -116.3 61.5 -137.5 72.5 -12.3 6.5 -27 14 -32.5 17 -21.5 11.3 -118.5 57.8 -136.3 65.5 -10.3 4.5 -23.3 10 -28.8 12.5 -37.5 16.5 -49.5 21.3 -74.3 28.8 -32.5 10 -49 12.5 -83.3 12.5 -41.8 0 -74 -13.5 -80 -33.8 -1 -3.5 -4 -9.3 -6.5 -13 -2.8 -3.5 -4.8 -7.8 -4.8 -9 0 -1.5 -0.8 -3 -1.8 -3.5 -2.3 -1 -6.8 -8.5 -22.3 -37 -6.5 -11.8 -13.5 -24 -15.8 -27.5 -9 -13 -100.3 -200.5 -100.3 -205.8 0 -1.8 -1.5 -5.5 -17.3 -40.8 -4.3 -9.8 -7.8 -18.5 -7.8 -19.3 0 -1 -2.3 -7.3 -5.3 -13.8 -10.8 -24.8 -12.3 -28.3 -12.3 -30.8 0 -1.5 -1.5 -6.3 -3.5 -10.5 -2 -4.5 -6.5 -16.5 -10 -26.8 -10.8 -31.5 -14 -41 -16.5 -46.3 -1.3 -2.8 -3.5 -10 -5.3 -16.3 -1.5 -6.3 -3.5 -12.3 -4.8 -13.8 -1 -1.3 -2.5 -5.8 -3.5 -10 -1.5 -6.5 -7.5 -27.3 -20.8 -70 -2 -6.8 -7.5 -27 -12 -45 -4.5 -17.8 -10 -39.3 -12.3 -47.5 -6 -23.8 -14.3 -61 -17.8 -80 -1.8 -9.5 -6 -31.5 -9.5 -48.8 -5.8 -29.5 -8.8 -46.5 -14.5 -85 -1.5 -9 -3.5 -21.8 -5 -28.3 -1.3 -7.3 -2.3 -151.3 -2.3 -355 0 -359.3 0 -357 11 -415.5 2 -11 6 -35.3 9 -53.8 3 -18.5 6.3 -37 7.5 -41.3 1.3 -4 6.5 -26 11.5 -48.8 11.3 -51 12.5 -56.5 15.8 -67.5 1.3 -4.8 4.8 -17.8 7.8 -28.8 3 -11 6.3 -23.3 7.5 -27.5 1.3 -4 4.5 -16 7 -26.3 6.5 -24 12 -42.8 18 -60 2.5 -7.5 8.3 -25 12.5 -38.8 7.5 -24 20.8 -62 25 -72.5 1.3 -2.8 5.3 -12.8 8.8 -22.5 3.8 -9.5 8.3 -20.8 10 -25 1.8 -4 7 -17 11.5 -28.8 4.5 -11.8 9 -22.3 10.3 -23.8 1 -1.3 2 -4.3 2 -6.8 0 -2.5 1.3 -4.5 2.5 -4.5 1.5 0 2.5 -1.3 2.5 -3 0 -4.3 15 -41.3 23 -56.8 3.8 -7.3 7 -14.8 7 -16.8 0 -2 1.3 -3.5 2.5 -3.5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -4.8 0 -2.8 0.8 -5.3 2 -5.8 1 -0.3 5.8 -8.5 10.5 -18.3 4.8 -9.5 12 -23 16.3 -30 4.3 -6.8 10.8 -18.8 14.8 -26.3 4 -7.5 8 -14.3 8.8 -15 0.8 -0.8 3 -4 4.8 -7.3 2 -3.3 5.5 -9.5 7.8 -13.8 11 -19.5 41.5 -67.8 43.3 -68.5 1 -0.5 2 -2 2 -3.3 0 -1.5 10.3 -18 23 -36.8 30 -45 33 -49 35.3 -50 1 -0.5 1.8 -2 1.8 -3.3 0 -1.8 9.3 -15.3 20.8 -29.8 1.8 -2 5 -6.8 7.3 -10.3 2.3 -3.5 5.8 -8 7.5 -10 2 -2 13 -16.5 24.8 -32.3 11.8 -15.8 23 -30.5 25 -32.5 2 -2 7.5 -8.8 12.3 -15 4.8 -6.3 9.3 -11.8 10 -12.5 0.8 -0.8 5.5 -6.5 10.8 -13 5.3 -6.5 10.8 -13.3 12.5 -15 1.8 -2 9.3 -10.8 16.8 -19.5 7.5 -9 14.3 -16.8 15 -17.5 0.8 -0.8 5.8 -6.3 11 -12.5 35.8 -40.8 54 -60.3 107.5 -113.8 33.3 -33.3 71 -69.8 84 -81.3 13 -11.8 29.3 -26.3 36.3 -32.5 6.8 -6.3 13 -11.8 13.8 -12.5 2 -2 30.5 -26 37.3 -31.5 3.3 -2.5 10 -8.3 15 -12.3 5 -4.3 14 -11.5 20.3 -16.3 6.3 -4.8 11.8 -9.3 12.5 -10 0.8 -1 10.8 -8.8 22.5 -17.5 11.8 -8.8 21.8 -16.8 22.5 -17.5 5.3 -7 147.8 -106.3 175 -122 4.8 -2.8 19 -11.3 31.3 -18.8 20 -12.5 29 -17.8 57.5 -34.8 4.3 -2.5 11.5 -6.3 16.3 -8.8 4.8 -2.3 10 -5.3 11.3 -6.5 6.3 -5.5 164.3 -85.3 196.3 -99.3 33 -14.3 34.8 -15 43.3 -18.5 4.3 -1.8 16 -6.8 25.5 -10.8 9.8 -4.3 21 -8.8 25 -10.3 11.5 -4 41.5 -15.5 51.3 -19.8 4.8 -2 12.5 -5.3 17 -7.3 4.5 -2 9.3 -3.5 10.8 -3.5 1.5 0 6.3 -1.5 10.5 -3.5 10.3 -4.5 76.3 -26.5 79.5 -26.5 1.5 0 6.3 -1.8 10.5 -3.5 4.5 -2 14.3 -5.5 21.8 -7.5 7.5 -2 34 -9.3 58.8 -16 51.5 -14.3 121.8 -31.8 152.5 -38 7 -1.3 23.3 -4.8 36.3 -7.5 13 -2.5 45.8 -8.3 72.5 -12.5 26.8 -4 55 -8.5 62.8 -10 8.8 -1.5 135.5 -2.5 352.5 -2.5 280.8 0 343 0.5 362.5 3.5 91.8 14 128.5 20.5 189.8 34.3 24.3 5.5 137.5 34.5 158.8 40.8 52.8 15.8 72.8 22 77.5 24 2.8 1.3 10 3.8 16.3 5.3 6.3 1.8 12.5 4 13.8 4.8 1.5 1 8.3 3.3 15 5 7 1.8 13.8 4 15 5 1.5 1 7 3.3 12.5 4.8 10.5 3.3 15.8 5.3 26.3 9.8 3.5 1.5 12.5 5.3 20 8 7.5 2.8 16.3 6.3 19.5 7.5 3 1.5 8 3.5 11.3 5 3 1.3 11.8 4.8 19.3 7.5 14.8 5.5 16.8 6.3 37.5 15.8 7.5 3.3 17.8 7.5 22.5 9.3 17.3 6.3 139.3 65.8 176.3 86 8.3 4.5 24 13 35 19 11 6 21.3 11.5 22.5 12.5 1.5 1.3 6.5 4.3 11.3 7 69.3 38.8 218 137 242 159.8 1.8 1.8 4.3 3.3 5 3.3 1 0 4.5 2.5 8 5.8 3.5 3 15.8 13 27.5 21.8 11.8 8.8 21.8 16.5 22.5 17.5 0.8 0.8 6.3 5.3 12.5 10 6.3 4.8 15.3 12 20.3 16.3 5 4 11.8 9.8 15 12.3 6.8 5.5 35.3 29.5 37.3 31.5 0.8 0.8 7 6.3 13.8 12.5 7 6.3 23.3 20.8 36.3 32.5 13 11.5 50.8 48 84 81.3 53.5 53.5 71.8 73 107.5 113.8 5.3 6.3 10.3 11.8 11 12.5 0.8 0.8 7.5 8.5 15 17.5 7.5 8.8 15 17.5 16.8 19.5 1.8 1.8 7.3 8.5 12.5 15 5.3 6.5 11 13.3 12.8 15 1.8 2 6.3 7.5 10 12.5 3.8 5.3 8.3 10.8 9.8 12.5 1.8 1.8 9.8 12 17.5 22.5 8 10.5 17.5 22.8 21.3 26.8 3.8 4.3 7 8.8 7 10.5 0 1.5 1 3.3 2.3 3.8 1.3 0.5 10.3 12 20 25.8 9.8 13.8 18.8 26.3 20 27.8 3 3.5 65.5 98.3 73.3 111 3 4.8 7.8 12.8 10.8 17.5 5.3 8.3 11.3 18 22 36.3 2.5 4.3 5 9.5 5.8 12 1 2.3 2.5 4.3 3.8 4.3 1.3 0 2.3 1.3 2.3 2.8 0 1.5 2 5.8 4.5 9.3 2.8 3.8 9.5 15.8 15.5 26.8 6 11 14.5 26.8 19 35 20.3 37 79.8 159 86 176.3 1.8 4.8 6 15 9.3 22.5 9.5 20.8 10.3 22.8 15.8 37.5 5.3 14.3 7.3 19.3 12 30 1.5 3.5 5.3 12.5 8 20 2.8 7.5 6.3 16.3 7.5 19.5 5.5 12.5 7.3 17.3 10.3 26.8 1.5 5.5 3.8 11.3 4.8 12.5 1 1.5 3.3 8.3 5 15 1.8 7 4 13.8 5 15 0.8 1.5 3 7.5 4.8 13.8 1.5 6.3 4 13.5 5.3 16.3 3 6.8 15.5 47.8 26.3 87.5 18.3 65.8 24.3 87.8 26.3 97.5 1.3 5.5 7 32 13.3 58.8 11.3 49.5 18.3 85.3 25.8 132.5 2.3 14.5 5.3 32.5 6.8 40 1.5 8.5 2.8 143.5 3.5 359.8 l0.8 346 -6.5 42.8 c-3.8 23.5 -7.5 49 -8.8 56.5 -1 7.5 -4.3 26.3 -7.3 41.3 -3 15.3 -6.3 33 -7.5 39.5 -4 21.8 -29 121.8 -44.5 178 -4.3 15.3 -9.5 34.3 -11.8 42.5 -2.3 8.3 -5.8 18.5 -7.8 23 -1.8 4.3 -3.5 9 -3.5 10.5 0 3.3 -22 69.3 -26.5 79.5 -2 4.3 -3.5 9 -3.5 10.5 0 1.5 -1.5 6.3 -3.5 10.8 -2 4.5 -5.3 12.3 -7.3 17 -4.3 9.8 -15.8 39.8 -19.8 51.3 -1.5 4.3 -6 15.5 -10.3 25 -4 9.8 -9 21.3 -10.8 25.8 -2 4.3 -5 11.8 -7 16.3 -2 4.3 -7.3 16.5 -11.5 26.8 -14 32.3 -93.3 189.3 -99 196.3 -1.3 1.5 -4 6 -6 10 -2 4.3 -15.8 27.5 -30.5 52 -15 24.5 -27 45.3 -27 45.8 0 0.8 -1 2.5 -2.5 4.3 -1.3 1.8 -18 26.8 -37.3 55.5 -19 29 -41.8 62 -50.5 73.8 -8.5 11.8 -23.5 32 -33.3 45 -9.5 13 -19 25.3 -20.8 27 -1.8 2 -6.5 7.5 -10.3 12.5 -3.8 5.3 -7.5 9.8 -8.3 10.5 -0.8 0.8 -5.8 6.8 -10.8 13.8 -8.5 11 -30.5 38 -34 41.3 -0.8 0.8 -6.3 7.5 -12.5 15 -6.3 7.5 -11.8 14.3 -12.5 15 -2.5 2.5 -27 29.5 -46 51.3 -11 12.5 -45.8 48.5 -77.5 80.3 -51.3 51 -73.5 72.3 -120.3 113.8 -6.8 6 -13.8 12.3 -15.8 14 -1.8 1.8 -8.5 7.3 -15 12.5 -6.5 5.3 -16 13.3 -21 18 -5.3 4.8 -12 10.3 -15 12.5 -3.3 2 -7.3 5.3 -9 7 -1.8 1.8 -12 9.8 -22.5 17.5 -10.5 8 -20.8 15.8 -22.5 17.5 -1.8 1.8 -12 9.8 -22.5 17.5 -10.5 8 -19.8 15 -20.5 15.8 -0.8 0.8 -5.3 4.3 -10 7.5 -4.8 3.3 -10.3 7.5 -12.3 9.5 -1.8 1.8 -9.5 7.3 -17 12 -7.5 4.8 -15 9.8 -16.5 11.3 -6.5 5.5 -43.5 31 -70 47.8 -15.5 9.8 -33.5 21.5 -40.5 25.8 -19 12.3 -34.5 21.3 -39.3 23 -2.5 0.8 -4.5 2.3 -4.5 3.5 0 1.3 -1 2.3 -2.3 2.3 -1.3 0 -12.5 6.3 -25 13.8 -12.8 7.5 -23.5 13.8 -24 13.8 -0.8 0 -7 3.8 -14.3 8.3 -7.3 4.5 -21 12 -30.8 16.8 -9.5 4.8 -17.8 9.5 -18.3 10.5 -0.5 1.3 -3 2 -5.8 2 -2.5 0 -4.8 1.3 -4.8 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -4.8 2.5 -2.8 0 -5.3 1 -5.8 2 -1.3 3 -41 23 -45.5 23 -2.3 0 -4 1.3 -4 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -1.5 2.5 -3.5 2.5 -2 0 -9.5 3.3 -16.8 7 -15.5 8 -52.5 23 -56.8 23 -1.8 0 -3 1.3 -3 2.5 0 1.5 -2 2.5 -4.5 2.5 -2.5 0 -5.5 1 -6.8 2 -1.5 1.3 -12 5.8 -23.8 10.3 -11.8 4.5 -24.5 9.8 -28.8 11.5 -4 1.8 -15.3 6.3 -25 10 -9.5 3.5 -19.8 7.5 -22.5 8.8 -10.5 4.3 -48.5 17.5 -72.5 25 -13.8 4.3 -31.3 10 -38.8 12.5 -21 7.3 -39 12.5 -102.5 30 -15.8 4.3 -33.3 8.8 -38.8 10 -5.5 1 -21.8 5 -36.3 8.5 -14.5 3.8 -31 7.8 -36.8 9 -35 8 -28.5 6.8 -85.8 17.3 -14.5 2.8 -41.5 7.3 -60 10 -18.5 3 -40 6.5 -47.8 7.8 -8.8 1.5 -142.3 2.5 -363.8 2.3 -326.5 -0.3 -351.3 -0.8 -372.3 -4.8z" })),
        React__default['default'].createElement("g", { fill: "#39b102" },
            React__default['default'].createElement("path", { d: "M2489.3 4978.5 c-0.3 -0.3 -24.8 -1.3 -54.3 -2 -97.3 -3 -157.8 -7.3 -232.5 -16.3 -10.3 -1.3 -26 -3 -35 -4 -9 -0.8 -28 -3.8 -42.5 -6.3 -14.5 -2.5 -32.5 -5.5 -40 -6.3 -24.3 -2.8 -82.8 -14.3 -161.3 -31.8 -43.8 -9.8 -192.8 -52 -210 -59.5 -2.8 -1.3 -17.3 -6.3 -32.5 -11.3 -25.3 -8.5 -39.3 -13.8 -91.5 -34 -10.5 -4 -20.3 -7.3 -21.8 -7.3 -1.8 0 -3 -1 -3 -2.5 0 -1.3 -2 -2.5 -4.5 -2.5 -2.5 0 -5.5 -1 -6.8 -2 -3.3 -2.8 -42 -18 -45.8 -18 -1.8 0 -3 -1 -3 -2.5 0 -1.3 -2.3 -2.5 -5 -2.5 -2.8 0 -5 -1 -5 -2.5 0 -1.3 -1.5 -2.5 -3.5 -2.5 -2 0 -9.5 -3.3 -16.8 -7 -7.5 -3.8 -20.8 -10 -29.8 -14 -23.3 -9.8 -37.8 -17 -45 -21.8 -3.5 -2.3 -21.5 -11.8 -40 -21.3 -18.5 -9.5 -34 -18 -34.5 -19 -0.5 -1.3 -3 -2 -5.8 -2 -2.5 0 -4.8 -1 -4.8 -2.5 0 -1.3 -1 -2.5 -2.3 -2.5 -2.3 0 -52.5 -28.3 -76.5 -43 -25.8 -15.8 -32.5 -19.8 -36.8 -21.3 -2.5 -0.8 -4.5 -2.3 -4.5 -3.5 0 -1.3 -1 -2.3 -2.3 -2.3 -2.5 0 -43.3 -27 -88.3 -58.3 l-24.3 -17 -1.8 -18 c-2.3 -22 -2.3 -25.3 0.3 -50.5 2.8 -28.8 20.5 -69 64.5 -146 5 -9 10 -18.3 11 -20.3 1 -2 2.8 -4.8 3.8 -6.3 3.3 -3.8 27.5 -43.3 37.5 -60.8 11.5 -20.3 35 -56.5 37.8 -57.5 1 -0.5 1.8 -2 1.8 -3.3 0 -2.5 18.8 -31.3 78.3 -121 34.8 -52.3 95.3 -141 98.5 -145 1.3 -1.3 7.3 -9.8 13.3 -18.8 6 -9 12 -17.3 13 -18.8 1.3 -1.3 8.8 -12 17 -23.8 8.3 -11.8 21.3 -30 28.8 -40.5 14 -19.8 15 -23.3 3.8 -14.5 -9.8 7.8 -10.8 6 -2.5 -5.3 4 -5.8 19.5 -19.3 34.3 -30.3 15 -10.8 28.8 -21 30.8 -22.8 2 -1.8 7.8 -5.8 12.5 -9.3 4.8 -3.3 9.3 -6.8 10 -7.5 0.8 -0.8 10.8 -8.5 22.5 -17.5 19.5 -14.5 69.5 -54.5 72.5 -57.5 0.8 -0.8 7.5 -6.3 15 -12.5 7.5 -6.3 18.3 -15.5 23.8 -20.5 7.8 -7.3 12 -9.5 19 -9.5 l9 0 1.8 54.5 c2 62 7.8 129.3 15.5 178 16.5 108 42.5 210.8 67.3 266.8 7.5 16.5 4 17 55.3 -8.3 54.3 -26.8 110 -60.5 166 -100.5 27 -19.3 55.3 -40.5 57.5 -43 0.8 -0.8 5.3 -4.3 10.5 -8 5 -3.8 10.5 -8.3 12.5 -10 1.8 -1.8 8.5 -7.5 15 -12.8 6.5 -5.3 13.3 -10.8 15 -12.5 2 -1.8 13 -11.5 24.5 -21.8 11.8 -10.3 36 -33 53.8 -50.8 28.8 -28.3 33.5 -31.8 40 -31.3 7.3 0.8 7.5 1.3 8 13.3 1.5 33 11.5 132.5 18.3 181.3 1.3 9 3.5 25.8 5.3 37.5 9.5 69.3 31.5 187.3 49.5 263.8 37.5 161.8 89.8 322.8 134.8 417 7.8 16 14.8 29.3 15.8 29.3 4 0 32.3 -63.8 54.3 -122.5 12.3 -32.5 42.3 -122.8 52.8 -158.8 20.8 -70.5 35.5 -128.3 52.8 -205 1.3 -5.5 3.3 -15 4.8 -21.3 16.5 -71.3 40.3 -220.8 50.3 -316.3 1.3 -13.8 3.5 -36 5 -49.3 1.3 -13.3 2.5 -30.3 2.5 -37.8 0 -18.3 1.5 -21.8 10 -21.8 5.5 0 12 4.8 29.3 22 42 41.3 74.8 70.5 116.5 103.5 15.3 12.3 29.8 23.8 31.8 25.3 2 1.8 7.8 5.8 12.5 9.3 4.8 3.3 9.3 6.8 10 7.5 2 2.5 45.3 32 74.5 51 38.5 24.8 80.3 48.8 115.8 66 44.3 21.3 41.3 21 48.8 3.8 13 -29 37 -107.8 45.8 -149.5 15.8 -75 22.8 -116.8 27.8 -162.5 1.5 -13.8 3.8 -35 5 -47.5 1.3 -12.3 3.3 -51 4 -85.5 l1.8 -63.3 7.5 0 c5.5 0 11.5 3.5 21.5 12 7.8 6.8 24.8 21 38 32 13 10.8 29.3 24.3 36 29.8 6.5 5.5 14.5 11.5 17.3 13.5 3 2 5.8 4.5 6.5 5.3 0.8 0.8 10.8 8.8 22.5 17.5 11.8 9 21.8 16.8 22.5 17.5 0.8 0.8 5.3 4.3 10 7.5 4.8 3.3 9.3 6.8 10 7.5 0.8 0.8 5.3 4.3 10 7.5 4.8 3.3 9.3 6.8 10 7.5 0.8 0.8 12.8 9.5 27 19.5 14 10 36.5 25.8 50 35.3 13.3 9.5 35.5 24.5 49.3 33.3 13.8 9 35 22.5 47 30.5 25.8 16.5 91.8 56.5 111.8 67.3 7.5 4 15 8.3 16.3 9.3 1.5 1.3 8.8 5.5 16.3 9.5 7.5 4.3 21 11.8 30 16.5 21 11.8 138.8 70.5 160 80 41.8 18.3 105 42.5 106.8 40.5 2 -1.8 -19.3 -57.3 -38.8 -101.5 -12.3 -28 -66.8 -137.8 -82 -165 -5 -9 -12.3 -22.5 -16.5 -30 -4.3 -7.5 -10.8 -19.3 -14.8 -26.3 -6.5 -11.8 -48 -80.5 -72.3 -120 -16.8 -27 -84.8 -127.5 -102.5 -151.3 -2.5 -3.5 -15 -20.3 -27.8 -37.5 -20.8 -28.3 -64 -84.5 -67.3 -87.5 -0.8 -0.8 -8 -9.5 -16.3 -19.8 -8.3 -10.3 -23.3 -28.3 -33 -40 -14.3 -16.5 -18.3 -22.8 -18.3 -29 l0 -8 54.5 -1.8 c61.8 -2 129 -7.8 178 -15.5 108 -16.5 210.8 -42.5 266.8 -67.3 12 -5.5 13.5 -6.8 12 -11.8 -6 -21 -62.5 -124.5 -92 -168.3 -19.8 -29.3 -67.3 -94.8 -71.8 -98.8 -0.8 -0.8 -4.3 -5.3 -8 -10.5 -3.8 -5 -8.3 -10.5 -10 -12.5 -1.8 -1.8 -8.3 -9.5 -14.5 -17 -6.3 -7.5 -11.8 -14.3 -12.5 -15 -0.8 -0.8 -9.8 -10.8 -20 -22.5 -10.3 -11.8 -33 -35.8 -50.5 -53.5 -25.3 -25.8 -32 -33.8 -32 -39.3 0 -6.8 0.3 -6.8 19.5 -8.3 117.5 -9.5 214.8 -21.5 311.8 -38.8 36.5 -6.5 122.3 -24 148.8 -30.3 11.8 -2.8 26.3 -6 32.5 -7.5 77.8 -16.3 233.3 -63.8 330.3 -100.8 43 -16.3 100.5 -43.5 98.5 -46.5 -2 -3.5 -48 -25 -86.5 -40.3 -103 -41.3 -258.8 -88.3 -381 -115.3 -70 -15.3 -118.3 -24.8 -172.5 -33.8 -12.3 -2 -28.8 -4.8 -36.3 -6 -7.5 -1.3 -22.3 -3.5 -32.5 -4.8 -10.3 -1.5 -26.5 -3.8 -36.3 -5 -17.5 -2.5 -40.3 -5.3 -87.5 -10.3 -55 -5.8 -77.3 -7.5 -92.5 -7.5 l-16.3 0 0 -8.8 c0 -7.5 3 -11.8 27 -35.8 45.3 -45.5 73.8 -77.5 108.5 -121.3 12.3 -15.3 23.8 -29.8 25.3 -31.8 1.8 -2 5.8 -7.8 9.3 -12.5 3.3 -4.8 6.8 -9.3 7.5 -10 2.5 -2 32 -45.3 51 -74.5 24.8 -38.5 48.8 -80.3 66 -115.8 21.3 -44.3 21 -41.3 3.8 -48.8 -28.8 -13 -106.8 -36.8 -149.5 -45.8 -67.3 -14.3 -118.3 -23 -162.5 -27.8 -13.8 -1.5 -35 -3.8 -47.5 -5 -12.3 -1.3 -48.8 -3 -80.5 -4 l-58.3 -1.8 0 -7.5 c0 -6.8 7.5 -18.3 20.8 -32.3 1.8 -1.8 8 -9.5 14.3 -17 6.3 -7.5 11.8 -14.3 12.5 -15 3.3 -3 43.3 -53.8 65.3 -82.5 12.8 -17.3 24 -31.8 24.8 -32.5 8.3 -7.5 111.5 -159 137.5 -201.3 61.5 -100 87.3 -145.5 129.8 -230 32 -63.3 38.3 -76.3 58.8 -124.5 14 -32.5 27.8 -71.5 26 -73.3 -0.8 -0.5 -4 0 -7.3 1.3 -3.3 1.3 -16.8 6.5 -29.8 11.3 -23 8.3 -48 19 -87.5 36.5 -38.3 17.3 -161.5 80.8 -175.5 90.5 -3.5 2.5 -7.3 4.5 -8 4.5 -1 0 -9 4.5 -18 10 -9 5.5 -17 10 -17.5 10 -1.5 0 -72.8 43.5 -106 64.8 -33.8 21.5 -78.5 51 -80 52.8 -0.8 0.8 -12 8.5 -25 17.5 -21 14.3 -67.3 47.5 -77.5 55.8 -2 1.8 -7.8 5.8 -12.5 9.3 -4.8 3.3 -9.3 6.8 -10 7.5 -0.8 0.8 -10.8 8.5 -22.5 17.5 -19.5 14.5 -69.5 54.5 -72.5 57.5 -0.8 0.8 -7.5 6.3 -15 12.5 -7.5 6.3 -18.3 15.5 -23.8 20.5 -7.8 7.3 -12 9.5 -19 9.5 l-9 0 -1.8 -54.3 c-2 -62.3 -7.8 -129.5 -15.5 -178.3 -16.5 -108 -42.5 -210.8 -67.3 -266.8 -7.5 -16.5 -4 -17 -55.3 8.3 -54.3 26.8 -110 60.5 -166 100.5 -27 19.3 -55.3 40.5 -57.5 43 -0.8 0.8 -5.3 4.3 -10.5 8 -5 3.8 -10.5 8.3 -12.5 10 -1.8 1.8 -8.5 7.5 -15 12.8 -6.5 5.3 -13.3 10.8 -15 12.5 -2 1.8 -13 11.5 -24.5 21.8 -11.8 10.3 -35.8 33 -53.5 50.5 -27.5 27.3 -33.5 32 -40.3 32 l-7.8 0 -3 -39.3 c-6 -76.3 -13 -135 -28.3 -237 -11.5 -77.8 -31.3 -173.8 -56.3 -272.5 -24.8 -97.8 -33.3 -126.3 -60 -205 -11.3 -33 -23.8 -69 -27.8 -80 -15.8 -41.5 -46.3 -108.8 -49.5 -108.8 -0.8 0 -6.8 11 -13.3 24.5 -21.5 43.8 -57.8 139.8 -79.3 209.3 -5 16.5 -10 32.8 -11.3 36.3 -1.3 3.5 -5.8 18.8 -10 33.8 -4 15.3 -8.5 31 -9.8 35 -4 12.3 -29.8 116.5 -35.5 143 -26 121 -39.8 204.5 -54.8 331.5 -2.3 20.3 -5.8 58.5 -9 98.8 -1.5 20.5 -1.5 20.5 -8.5 20.5 -5.5 0 -12 -4.8 -29.3 -22 -42 -41.3 -74.8 -70.5 -116.5 -103.5 -15.3 -12.3 -29.8 -23.8 -31.8 -25.3 -2 -1.8 -7.8 -5.8 -12.5 -9.3 -4.8 -3.3 -9.3 -6.8 -10 -7.5 -2 -2.5 -45.3 -32 -74.5 -51 -38.5 -24.8 -80.3 -48.8 -115.8 -66 -44.3 -21.3 -41.3 -21 -48.8 -3.8 -13.3 29.8 -37 107 -46.3 152 -1.5 7 -3.8 17 -5 22.5 -7.3 32.5 -17 93 -22 137.5 -6.5 55 -7.8 73.8 -9.3 133.3 l-1.8 63 -7.5 0 c-5.5 0 -11.8 -3.5 -22.8 -13 -8.5 -7.3 -15.8 -13.8 -16.5 -14.5 -0.8 -0.8 -7.5 -6.3 -15 -12.5 -7.5 -6.3 -14.3 -11.8 -15 -12.8 -0.8 -0.8 -15.8 -13 -33.8 -27 -17.8 -14.3 -34.8 -27.5 -37.5 -30 -9.5 -7.8 -72.8 -54.5 -104 -77 -79 -56.8 -200.3 -133 -279.8 -176.8 -7.5 -4 -18.3 -10 -23.8 -13.3 -18.5 -10.8 -132.8 -67.8 -159 -79.5 -49.5 -22 -109.3 -45 -111.5 -42.8 -2 1.8 10.8 35.5 33.8 90.3 22.8 54 105 214.3 129.5 251.8 3.3 5.3 6 10 6 10.5 0 0.8 5.8 10.5 12.8 22 7.3 11.5 18.8 30.3 25.8 42 17.3 28.8 82.8 127.5 106 160 20.3 28 82.8 111.8 90.5 120.8 2.5 3 11.8 14.5 20.3 25.5 8.8 11 16.5 20.5 17.3 21.3 0.8 0.8 6.3 7.5 12.5 15 6.3 7.5 12.5 15.3 14.3 17 13.3 14 20.8 25.5 20.8 32.3 l0 7.5 -54.3 1.8 c-62 2 -129.3 7.8 -178.3 15.5 -108 16.5 -210.8 42.5 -266.8 67.3 -12 5.5 -13.5 6.8 -12 11.8 6 21 62.5 124.5 92 168.3 19.8 29.3 67.3 94.8 71.8 98.8 0.8 0.8 4.3 5.3 8 10.5 3.8 5 8.3 10.5 10 12.5 1.8 1.8 7.5 8.5 12.8 15 5.3 6.5 10.8 13.3 12.5 15 1.8 2 11.5 13 21.8 24.5 10.3 11.8 33 35.8 50.8 53.8 28.5 28.8 32 33.3 31.3 40 -0.8 7.3 -1.3 7.5 -13.3 8 -33 1.5 -132.5 11.5 -181.3 18.3 -9 1.3 -25.8 3.5 -37.5 5.3 -69.3 9.5 -186.3 31.3 -263.8 49.5 -159.5 37 -323 89.8 -417 134.8 -16 7.8 -29.3 14.8 -29.3 15.8 0 4 63.8 32.3 122.5 54.3 32.5 12.3 122.8 42.3 158.8 52.8 57.5 16.8 123.3 34 171.3 45 13 3 28.5 6.5 34.5 7.8 5.8 1.5 15.3 3.5 21.3 5 60.8 14 190.3 35.5 271.8 45 13 1.5 32.3 3.8 42.5 5 10.3 1.3 34.5 3.5 53.8 5 72.8 5.8 66.3 4.5 66.3 12.8 0 6 -5 12.3 -26.8 34.3 -44.8 44.8 -73.8 77 -108.8 121.3 -12.3 15.3 -23.8 29.8 -25.3 31.8 -1.8 2 -5.8 7.8 -9.3 12.5 -3.3 4.8 -6.8 9.3 -7.5 10 -0.8 0.8 -8.8 12 -17.5 25 -9 13 -16.8 24.3 -17.5 25 -2.8 2.5 -39.8 62 -53 85.3 -14.3 24.8 -42.5 81.8 -45.8 91.8 -1.5 5 0 6.3 13 12 30.5 13.8 106.3 36.8 152 46.3 7 1.5 17 3.8 22.5 5 13.8 3.3 31 6.3 58.8 11 41 6.8 53 8.5 78.8 11.3 13.8 1.5 35.3 3.8 47.5 5 12.5 1.3 48.8 3 80.8 4 l58.3 1.8 -0.8 9 c-0.8 7.8 -2.5 10.3 -14.5 18.3 -17.5 12 -20 12 -9 0.3 4.8 -5.3 8.3 -9.8 7.8 -10.3 -0.5 -0.5 -8.5 4 -18 10 -9.3 6 -20.3 12.5 -24.5 14.5 -4 2 -8.5 4.8 -10 5.8 -4.5 3.5 -46.8 29.5 -54.8 33.5 -4.3 2.3 -8.3 4.8 -9 5.5 -0.8 0.8 -5.8 4 -11.3 7 -5.5 2.8 -14 7.5 -18.8 10.5 -4.8 2.8 -12.8 7.5 -17.5 10.3 -4.8 2.8 -16 9.8 -25 15.3 -9 5.8 -22.8 13.5 -30.8 17.5 -8 4.3 -22.3 12.5 -31.8 18.5 -9.5 6 -23 14 -30.5 17.8 -7.3 3.8 -13.8 7.5 -14.5 8.3 -0.8 1 -5.3 3.8 -10 6 -4.8 2.5 -12 6.3 -16.3 8.8 -30.5 18 -48.3 28 -76.5 42.8 -11.5 6 -21.5 11.5 -22.3 12.5 -0.8 1 -8.5 5.5 -17.5 10 -9 4.8 -19.5 10.8 -23.8 13.3 -4 2.3 -16.5 9 -27.5 14.8 -11 5.8 -20.5 11 -21.3 12 -0.8 0.8 -22 12.3 -47.5 25 -25.5 13 -49.5 25.8 -53.8 28.3 -18.3 11 -208.8 104.5 -213 104.5 -1.5 0 -20.3 8 -49.5 21.3 -6.8 3.3 -16.5 6.5 -21.3 7.5 -4.8 1 -9.8 2.8 -11.3 3.8 -6 4.3 -34.5 10 -57.5 11.5 -19.5 1.3 -28.3 0.8 -38.8 -2.3 -13.8 -4 -14 -4.3 -27.5 -27.3 -7.5 -12.8 -14.3 -24.3 -14.8 -25.8 -0.5 -1.3 -1.8 -3 -2.5 -3.8 -0.8 -0.8 -3.8 -5.8 -6.8 -11.3 -2.8 -5.5 -7.8 -14.3 -10.8 -19.5 -24.5 -43.5 -92.3 -182.5 -107.8 -221.8 -3 -7.3 -7.3 -18 -10 -23.5 -15.3 -34 -42.5 -107.5 -64.5 -175.3 -22.5 -69.8 -33.5 -106.3 -40.5 -137.5 -1.8 -6.8 -4 -15 -5 -18 -2.8 -6.5 -20 -82.5 -22.5 -98.3 -1 -6.3 -4.8 -25.3 -8.3 -42.5 -5.8 -28.3 -8.3 -43 -13 -73.8 -0.8 -5.5 -2.5 -17 -4 -25.5 -1.3 -8.8 -3.5 -23.3 -5 -32.5 -2.5 -16.3 -4 -28.5 -9.5 -83.3 -9.8 -93 -11.5 -140 -11.3 -276.3 0.3 -77.5 1.5 -123.8 4.5 -156.3 7.5 -88.5 9.3 -106.3 11.8 -123.8 1.3 -9.5 4.5 -33.8 7.3 -53.8 2.5 -20 6.5 -45.3 8.5 -56.3 2 -11 4.8 -27.8 6.5 -37.5 3.5 -21.8 12 -64.5 15 -76.3 1.3 -4.8 3.3 -13.8 4.8 -20 1.5 -6.3 5.5 -23.5 9 -38.8 10 -41.8 41.8 -157.3 46 -167.5 1.3 -2.8 8 -23 15.3 -45 7 -22 13.8 -42.3 15 -45 1 -2.8 4 -10.5 6.3 -17.5 4 -11.3 7.5 -20.3 14 -35 1.3 -2.8 4.5 -11.3 7.3 -18.8 2.8 -7.5 6.5 -16.5 8 -20 1.5 -3.5 3.5 -8.5 4.8 -11.3 2.8 -6.8 17 -41.3 19.8 -47.5 1 -2.8 3.5 -9 5.5 -13.8 5 -13 89.3 -182.3 96.5 -193.8 3.5 -5.5 9.3 -15.5 13 -22.5 9.5 -17.8 13.5 -24.8 15.3 -26.3 1 -0.8 4.5 -6.8 8.3 -13.8 3.8 -6.8 10 -17.5 14 -23.8 6.5 -10 12 -19 26.8 -43.8 2.5 -4 5.3 -8.5 6.3 -10 1 -1.3 12 -17.8 24.3 -36.3 12.3 -18.5 24.8 -36.5 27.5 -40 2.8 -3.5 5.3 -7.8 5.3 -9.3 0 -1.8 0.8 -3.3 2 -3.3 1 0 5.5 -5.3 9.8 -11.8 10 -15 54.3 -74.8 61.5 -83.3 3 -3.5 8.5 -10.5 12.3 -15.5 3.8 -5 8.3 -10.5 10 -12.5 2 -1.8 7.3 -8.3 12 -14.5 4.8 -6.3 12.5 -15.5 17.3 -20.5 4.8 -5.3 10.3 -12 12.3 -15 2.3 -3.3 4.5 -6.3 5.5 -7 0.8 -0.8 8.8 -9.8 17.5 -20 9 -10.3 22 -25 29 -32.5 7 -7.5 17 -18.8 22.5 -25 14.8 -17.3 122.5 -125 134.3 -134.8 5.8 -4.5 22.3 -19.3 36.5 -32.5 14.3 -13.3 28.3 -25.5 31.3 -27.5 3 -2 5.8 -4.3 6.5 -5.3 0.8 -0.8 8.5 -7.5 17.5 -15 8.8 -7.5 18.3 -15.8 21.3 -18.3 2.8 -2.5 13 -10.8 23 -18.3 9.8 -7.5 19.5 -15 21.3 -16.8 1.8 -1.8 11.8 -9.5 22 -17.3 10.3 -7.8 22.3 -17 26.3 -20.5 4.3 -3.5 8.5 -6.5 9.5 -6.5 1 0 5 -2.8 8.8 -6.3 3.8 -3.5 16.3 -12.8 28 -20.8 11.8 -7.8 21.8 -15 22.5 -15.8 3.5 -4 98.8 -65.8 120 -77.8 4.8 -2.8 22.3 -13.3 38.8 -23.3 16.5 -10 38.5 -22.8 48.8 -28.5 29.8 -16 179.8 -91.3 195 -97.5 7.5 -3.3 23.3 -9.8 35 -14.5 11.8 -4.8 27.3 -11.5 34.5 -14.8 7.3 -3.3 14 -6 15 -6 1 0 17.3 -6.3 36 -13.8 36.8 -14.8 62.5 -24 105.8 -38 15.3 -4.8 37 -12 48.8 -16 11.8 -3.8 28 -9 36.3 -11 8.3 -2.3 18.5 -5.3 22.5 -6.3 18.8 -5.3 48.3 -13 56.3 -14.8 4.8 -1 26.3 -6.3 47.5 -11.3 21.3 -5.3 42.8 -10.5 47.5 -11.8 18.3 -4.3 110.3 -21 143.8 -26 46.8 -7 80.3 -11.3 106.3 -13.8 17.3 -1.5 47.5 -4.3 67.5 -6.5 59.8 -6 118 -7.8 231.3 -7 59.3 0.8 111.5 1.5 116.3 2 4.8 0.5 20.5 1.8 35 2.5 14.5 1 37.5 2.8 51.3 4.3 61.3 6 76 7.5 90.8 9.8 15.3 2.5 29.3 4.5 66.3 10 54.5 8.3 123.8 21.5 171.8 32.8 47.3 11.3 117.8 29.5 123.8 32 2.8 1.3 10 3.5 16.3 5.3 47 12.3 159.5 50.3 196.3 66.3 4.3 1.8 15.5 6.3 25 10 9.8 3.8 22.3 8.8 28 11.5 6 2.5 11.5 4.8 12.5 4.8 2 0 28.3 11.5 57.8 25.3 11.5 5.5 21.5 9.8 22.5 9.8 2.5 0 109.3 54 135.3 68.3 11.3 6.3 24 13 28 14.8 4 1.8 7.3 4 7.3 5 0 1.3 2.3 2 5 2 2.8 0 5 1.3 5 2.5 0 1.5 1 2.5 2.3 2.5 2.3 0 17.5 8.8 35.3 20 6.3 4 16.3 10.3 22.5 13.8 6.3 3.5 15.8 9.3 21.3 12.8 5.5 3.5 12 6.8 14.5 7.8 2.3 0.8 4.3 2.3 4.3 3.5 0 1.3 1 2.3 2.5 2.3 2.8 0 85.8 55.5 87 58.3 0.5 1 2.3 1.8 4 1.8 1.8 0 5.3 2 8 4.5 2.5 2.5 8.8 7.3 13.5 10.5 4.8 3.3 10 7 11.3 8.3 1.5 1 19.5 14.5 40 29.8 20.8 15.3 38 28.5 38.8 29.5 0.8 0.8 10.3 8.5 21.3 16.8 11 8.5 22.3 17.3 25 19.8 3 2.8 12.5 11 21.3 18.5 9 7.5 16.8 14.3 17.5 15 0.8 1 3.5 3.3 6.5 5.3 3 2 17 14.3 31.3 27.5 14.3 13.3 30.8 28 36.5 32.5 11.8 9.8 119.5 117.5 134.3 134.8 5.5 6.3 15.5 17.5 22.5 25 7 7.5 20 22.3 29 32.5 8.8 10.3 16.8 19.3 17.5 20 1 0.8 3.3 3.8 5.5 7 2 3 7.5 9.8 12.3 15 4.8 5 15.8 18.3 24.5 29.3 8.5 11 17.5 22.3 20 25 2.3 2.8 11.3 14.5 20.3 26.3 8.8 11.8 17 21.8 18 22 1 0.5 2 2.3 2 3.8 0 1.8 4.5 8 10 14.3 5.5 6 10 12.5 10 14 0 1.8 1 3.5 2.3 4 1.3 0.5 6.5 7 11.8 14.8 31.8 46.5 67.3 99.3 71 105.8 2.5 4.3 16.8 28.3 32.3 53.5 15.3 25.3 27.8 47 27.8 48.3 0 1.3 1.3 2.3 2.5 2.3 1.5 0 2.5 2.3 2.5 4.8 0 2.8 0.8 5.3 2 5.8 1 0.5 7.3 11.5 14 24.5 6.8 13 14.3 26.5 16.5 30 5 7.3 57.5 113 57.5 115.5 0 1 4.3 11 9.8 22.5 13.8 29.5 25.3 55.8 25.3 57.8 0 1 2.3 6.5 4.8 12.5 2.8 5.8 7.8 18.5 11.5 28 3.8 9.8 8.3 21 10 25 16.8 38.3 50 137.5 68.8 203.8 2.8 10.3 6.8 24.5 8.8 31.3 5 17.3 13.8 50.8 16.3 61.3 1 4.8 5.5 23.5 9.8 41.3 9.8 40 11.5 48 17.8 82.5 8.3 43.8 10 54 12.8 72.5 1.3 9.8 3.5 24.5 4.8 33.3 7 45.3 7.8 49.5 16 129.3 16 152.3 15.5 328.3 -1 488.8 -7.3 69.8 -9.8 88.8 -18.8 142.5 -2.3 13 -5 31 -6.3 40 -1.3 9 -4.8 28 -7.8 42.5 -3 14.5 -6.3 31.3 -7.3 37.5 -1.3 6.3 -4.5 20.8 -7.5 32.5 -3 11.8 -6.3 25.8 -7.5 31.3 -2.3 11.8 -16.3 64.8 -28.3 108.8 -15.5 56 -45 144.3 -64.3 192.8 -5.8 14.3 -12.3 31 -14.3 37.3 -2.3 6.3 -7 18.3 -11 27 -4 8.5 -7.3 16 -7.3 16.8 0 1.3 -21.3 51 -28.8 67.5 -13.8 29.8 -47.3 97.5 -63.3 127.5 -33.8 63.8 -38.8 72.8 -45.8 83.3 -4 6 -9.5 15 -12.3 20 -2.8 5 -8 13.8 -11.5 19.3 -3.5 5.5 -6.8 12 -7.8 14.5 -0.8 2.3 -2.3 4.3 -3.5 4.3 -1.3 0 -2.3 1.3 -2.3 2.5 0 1.5 -4.3 9 -9.3 17 -15.3 23.8 -70 106 -78.8 118 -12 17 -44.3 60.8 -47.8 65 -1.8 2 -13.3 16.5 -25.5 32.3 -12.5 15.5 -35.3 43.5 -50.8 62.3 -25.8 30.8 -40.5 47.5 -80.5 91.8 -23.8 26 -117.3 119.3 -138.3 137.5 -11 9.8 -23.5 21 -27.8 25 -4.3 4.3 -16.3 14.8 -26.5 23.8 -10.3 9 -19.3 16.8 -20 17.5 -0.8 0.8 -6.3 5.3 -12.5 10.3 -6.3 5 -14 11.8 -17.5 14.8 -3.5 3 -10.3 8.5 -15 12.3 -4.8 3.5 -9.3 7 -10 8 -0.8 0.8 -10.8 8.5 -22.5 17.3 -11.8 8.8 -21.8 16.8 -22.5 17.5 -6.5 8.5 -161.8 117.5 -167.3 117.5 -1.3 0 -2.8 1 -3.3 2 -0.5 1 -4.8 4.3 -9.5 7.3 -4.8 2.8 -23.8 14.3 -42 25.5 -18.5 11 -34.5 20.3 -35.8 20.3 -1.3 0 -2.3 0.8 -2.3 2 0 1 -2.5 3 -5.8 4.5 -11.5 5.8 -35.5 19 -38 21 -1.3 1 -20.5 11.3 -42.5 22.8 -22 11.3 -42.8 22.3 -46.3 24.8 -6.3 4.3 -23.5 12.5 -25.8 12.5 -0.8 0 -19 8.5 -41 19 -21.8 10.5 -42 20 -45 21.3 -3.3 1.3 -8.3 3.3 -11.3 4.5 -3.3 1.5 -14.3 6 -24.5 10.3 -25 10.5 -29 12 -35.5 15 -3.3 1.3 -12 4.8 -19.5 7.5 -7.5 2.8 -16 6 -18.8 7.3 -14.8 6.5 -23.8 10 -35 14 -6.8 2.3 -14.8 5.3 -17.5 6.3 -2.8 1.3 -23 8 -45 15 -22 7.3 -42.3 14 -45 15.3 -4.3 1.8 -29.8 9.5 -57.5 17.3 -24 6.8 -66.3 18.3 -73.8 20 -4.8 1 -33 7.8 -62.5 14.8 -29.5 7 -66.8 15 -82.5 17.8 -70.5 12.5 -85 15 -105 17.8 -11.8 1.5 -26.8 3.8 -33.8 4.8 -41 6.3 -60.3 8.5 -138.8 15 -48 3.8 -203.5 10.3 -205.8 8.5z" })),
        React__default['default'].createElement("g", { fill: "#ff5006" },
            React__default['default'].createElement("path", { d: "M2696 2989.3 c-4 -4.5 -14.5 -16.5 -23.5 -26.8 -9 -10.3 -16.8 -19.3 -17.5 -20 -0.8 -0.8 -7.5 -8.5 -15 -17.5 -7.5 -9 -14.3 -16.8 -15 -17.5 -0.8 -0.8 -7.5 -8.5 -15 -17.5 -7.5 -9 -15.5 -18 -17.5 -20 -2 -2 -10 -11 -17.5 -20 -7.5 -9 -14.3 -16.8 -15 -17.5 -0.8 -0.8 -5.3 -5.8 -10 -11.5 -7.8 -9 -23.8 -27.3 -43.5 -49.8 l-6.5 -7.5 -5.3 6.3 c-2.8 3.5 -7.5 9 -10.5 12.5 -3 3.5 -10.5 12.5 -16.8 20 -6.3 7.5 -12.5 15.3 -14.3 17 -1.8 1.8 -7.3 8.5 -12.5 15 -5.3 6.5 -10.5 13 -12 14.5 -1.3 1.5 -29.5 35 -62.3 74.3 -56.5 67.8 -60.3 71.8 -68.3 71.8 -8 0 -8.3 -0.3 -8.3 -10.5 0 -6 1.3 -24.3 2.5 -40.8 1.5 -16.5 3.8 -44 5 -61.3 2.3 -28.8 3.5 -45.5 10 -125 1.3 -15.8 3 -38.8 4 -50.8 l1.8 -22 -24.8 1.5 c-13.5 0.8 -40 2.5 -58.5 3.8 -18.5 1.3 -52.8 3.5 -76.3 5 -23.3 1.5 -57.8 3.8 -76.3 5 -18.5 1.3 -44.8 3 -58 3.8 l-24.5 1.5 0 -8.5 c0 -7.8 2 -10 19 -23.3 10.5 -8.3 20.3 -16 22 -17.3 1.5 -1.5 7.8 -6.5 14 -11.3 6.3 -4.8 13 -10 15 -11.8 4.5 -3.8 55.5 -43.8 66.3 -52.3 4.3 -3 25 -19.5 46.3 -36.5 21.5 -17 42.5 -33.5 47 -37 4.3 -3.5 8 -7 8 -7.8 0 -1 -17 -16.3 -37.8 -33.8 -21 -17.8 -39.3 -33.5 -40.8 -34.8 -1.5 -1.5 -10 -8.8 -19 -16.3 -9 -7.5 -16.8 -14.3 -17.5 -15 -0.8 -0.8 -8.5 -7.5 -17.5 -15 -9 -7.5 -16.8 -14.3 -17.5 -15 -0.8 -0.8 -8.5 -7.5 -17.5 -15 -9 -7.5 -16.8 -14.3 -17.5 -15 -0.8 -0.8 -8.5 -7.5 -17.5 -15 -30.5 -26 -30 -25.3 -30 -34.3 l0 -8.3 14.5 0 c7.8 0 23.8 1 35.5 2.3 11.8 1.5 35.3 3.8 52.5 5.3 17.3 1.5 42.5 3.8 56.3 5 13.8 1.3 38.5 3.5 55 5 16.5 1.5 40.8 3.8 53.8 5 13 1.3 31 3 39.8 3.8 l16 1.3 -1.8 -14.5 c-1 -7.8 -2.8 -25.3 -4 -38.5 -5.3 -52.5 -7.5 -74.3 -10 -98.3 -1.5 -13.8 -3.8 -36.3 -5.3 -50 -1.3 -13.8 -3.5 -35.8 -4.8 -48.8 -1.5 -13 -3.3 -34.3 -4.3 -46.8 l-1.5 -23.3 8.8 0 c6.8 0 10 1.8 15 8.3 20.5 26 50.5 64 55.5 70.5 3.3 4.3 15.3 19.5 26.8 34 11.5 14.5 23.8 30.3 27.3 34.8 7.3 9.8 46 59 52 66.3 5 6 18.5 23.8 21 27.3 2 3 2 3.3 42 -46 18.5 -22.8 34.3 -41.8 35 -42.5 0.8 -0.8 6.3 -7.5 12.5 -15 6.3 -7.5 13.3 -16 15.5 -18.8 2.3 -2.8 16.3 -19.5 30.8 -37.5 14.8 -18 29.3 -35.3 32.3 -38.8 2.8 -3.5 10.3 -12.5 16.5 -20 20.8 -25.3 20.5 -25 29.5 -25 l8.8 0 -1.8 19.5 c-1 10.5 -2.8 26 -4 34.3 -1.3 8.3 -3.5 25.3 -5 37.5 -1.5 12.5 -3.8 29.8 -5 38.8 -1.3 9 -3.5 25.8 -5 37.5 -1.5 11.8 -3.8 29.8 -5.3 40 -2.3 18 -4.3 31.5 -9.5 72.5 -1.3 10.3 -3.3 24 -4 30.8 l-1.5 11.8 9.5 -1 c5.3 -0.8 20.8 -2.5 34.5 -4 13.8 -1.5 34.5 -3.8 46.3 -5 11.8 -1.3 33 -3.5 47.5 -5 14.5 -1.5 35.3 -3.8 46.3 -5 11 -1.3 32.5 -3.5 47.5 -5 15.3 -1.5 35.8 -4 45.8 -5.3 10 -1.3 24.5 -2.3 32 -2.3 l13.5 0 0 8.5 c0 7.3 -2 10.3 -14.3 20.5 -8 6.8 -15 12.8 -15.8 13.5 -0.8 0.8 -9.8 8.5 -20 17.5 -10.3 9 -19.3 16.8 -20 17.5 -0.8 0.8 -8.5 7.5 -17.5 15 -9 7.5 -16.8 14.3 -17.5 15 -0.8 0.8 -9.8 8.5 -20 17.5 -10.3 9 -19.3 16.8 -20 17.5 -0.8 0.8 -8.5 7.5 -17.5 15 -9 7.5 -16.8 14.3 -17.5 15 -2 2 -23 20.5 -39.5 34.8 -8.5 7.3 -15.5 14.3 -15.5 15.3 0 1 6.5 6.8 14.3 12.8 8 6 16.8 12.8 19.5 15 2.8 2.5 22.5 18 43.8 34.8 21.3 16.8 42.8 33.8 47.5 37.5 4.8 3.8 26.8 21.3 48.8 38.5 22 17.5 41.8 33 43.8 34.8 2 1.8 8 6.3 13.3 10.3 7.5 5.8 9.3 8.8 9.3 16 l0 8.8 -20.5 -1.5 c-23.5 -1.8 -64.5 -5.3 -107 -9.3 -15.8 -1.3 -42.3 -3.8 -58.8 -5.3 -16.5 -1.3 -41.8 -3.5 -56.3 -4.8 -14.5 -1.5 -37.3 -3.3 -50.8 -4 l-24.3 -1.8 1.3 11 c0.8 6 2.3 23.5 3.8 38.5 1.5 15.3 3.8 38.3 5 51.3 1.3 13 3.5 36.8 5 52.5 3.3 33.8 6.8 70 10 101.3 1.3 12.5 3 31.3 3.8 42 l1.8 19.3 -8.8 0 c-6.5 0 -10.3 -2 -15.8 -8.3z" })),
        React__default['default'].createElement("g", { fill: "#d00489" },
            React__default['default'].createElement("path", { d: "M2813.3 3259 c-1 -2 -6 -8 -10.8 -13.3 -4.8 -5.3 -17.3 -19 -27.5 -30.8 -10.3 -11.8 -19.3 -21.8 -20 -22.5 -0.8 -0.8 -9.8 -10.8 -20 -22.5 -10.3 -11.8 -19.3 -21.8 -20 -22.5 -0.8 -0.8 -8.5 -9.8 -17.3 -20 -9 -10.3 -17.8 -20.5 -20 -22.5 -2.3 -2 -11.3 -12.3 -20.3 -22.5 -9 -10.3 -16.8 -19.3 -17.5 -20 -0.8 -0.8 -9.8 -10.8 -20 -22.5 -10.3 -11.8 -19.3 -21.8 -20 -22.5 -0.8 -0.8 -8.5 -9.8 -17.5 -20 -9 -10.3 -18 -20.5 -20 -22.5 -2 -2 -10.8 -11.5 -19 -21.3 l-15.3 -17.5 -1.5 -35.5 c-1 -25 -0.8 -35.8 1.3 -35.8 1.8 0 2.3 -7.3 1 -23.5 -1.3 -15.5 -1 -24 0.8 -25.3 1.5 -0.8 2.8 -7.8 2.8 -15 0 -15.5 2.5 -16 12.8 -2.5 3.5 4.5 13.3 16 21.5 25.5 8.3 9.3 18.3 21 22.3 25.8 4 4.8 8.8 10.5 11 12.5 2 2 10 11 17.5 20 7.5 9 14.3 16.8 15 17.5 0.8 0.8 7.5 8.5 15 17.5 7.5 9 14.3 16.8 15 17.5 0.8 0.8 8.5 9.8 17.5 20 9 10.3 19.8 22.5 24 27 l7.5 8.3 -0.8 -9.5 c-0.8 -10 -4.3 -45.5 -8.3 -85.8 -1.3 -13 -3.5 -36.8 -5 -52.5 -3.3 -35.3 -7.3 -74.8 -9 -90.5 -1 -10.5 -0.5 -12 3.5 -12 2.5 0 8.5 3.8 13.3 8.3 4.8 4.3 21.8 19.8 37.3 34.3 15.8 14.5 33.3 30.8 39 36.3 l10.3 10 3 31.3 c1.8 17.3 4 41.5 5.3 53.8 1.3 12.5 3.5 33.8 4.8 47.5 1.5 13.8 3.8 36.3 5 50 1.5 13.8 3.8 37.5 5.3 52.5 1.5 15.3 3.8 38.3 5 51.3 1.3 13 3.5 36.3 5 51.3 1.5 15.3 3.8 36.5 5.3 47.3 1.3 11 2.3 26.3 2.3 34.5 l0 14.5 -8.8 0 c-4.8 0 -9.5 -1.5 -10.5 -3.5z" }),
            React__default['default'].createElement("path", { d: "M2177.5 3237.5 c0 -10.8 1 -30.8 2.5 -44.3 1.3 -13.5 3.5 -39.8 5 -58.3 1.5 -18.5 3.8 -46 5 -61.3 1.3 -15 3.5 -42.8 5 -61.3 4.5 -55.8 7.5 -92.3 10.3 -122.3 1.5 -15.8 2.8 -39.3 2.8 -52.3 0 -19.5 0.5 -23.5 4 -24.5 7.5 -2.5 11.5 -5 14 -9.8 4 -7 8.3 -11.3 11.3 -11.3 4.3 0 15.5 -10.8 18 -16.8 1.3 -3.3 4.3 -5.8 6.8 -5.8 5 0 15.5 -9.8 15.5 -14.5 0 -1.8 1.8 -3 3.8 -3 5 0 21.3 -14.8 21.3 -19.3 0 -2 3 -3.3 7.8 -3.3 l7.5 0 -1.5 18.3 c-2.8 33.3 -6 75.3 -8.8 109.3 -2.8 34.8 -6.5 83 -9 113.8 -1.8 21.5 -8.8 28 65.5 -61.3 31.3 -37.8 57.8 -69.3 58.5 -70 0.8 -0.8 5.3 -6.3 10.3 -12.5 5 -6.3 12.3 -14.5 16 -18.8 3.5 -4 8.3 -10 10.5 -13 2 -3.3 4.5 -5.8 5.5 -5.8 1 0 3.3 31.5 5 70 l3.3 70 -6.5 8.5 c-3.5 4.8 -7.8 10 -9.5 12 -2 1.8 -9.5 10.5 -17 19.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.8 17.5 -16.3 19 -1.3 1.5 -19.8 23.3 -41 48.3 -35.8 41.8 -39.3 45.3 -47 45.3 l-8.3 0 0 -20z" }),
            React__default['default'].createElement("path", { d: "M3251.3 2821.3 c-1.3 -0.5 -17.8 -2.3 -36.3 -3.5 -18.5 -1.5 -46 -3.8 -61.3 -5.3 -15 -1.3 -41.5 -3.5 -58.8 -5 -17.3 -1.5 -44.3 -3.8 -60 -5 -15.8 -1.5 -42.3 -3.8 -58.8 -5 -16.5 -1.3 -43 -3.5 -58.8 -5 -15.8 -1.5 -44 -3.8 -62.5 -5 l-33.8 -2.5 -14.8 -15.8 c-8 -8.5 -22 -23.8 -31.3 -34 -9 -10 -23 -25.3 -30.8 -33.8 -8.5 -9 -14.5 -17.5 -14.5 -20.8 0 -3.5 1.3 -5.3 3.3 -4.5 1.5 0.5 17.8 2.3 35.5 3.8 35 2.8 70.3 5.8 117.5 10 16.5 1.5 43.5 3.8 60 5 16.5 1.5 35.8 3.3 42.5 4 14 1.5 14 1.5 -6.5 -14.5 -8 -6.3 -78 -61.8 -97.3 -77 -4.8 -3.8 -27.8 -22 -51 -40.3 l-42.5 -33.5 12.3 -0.8 c6.8 -0.5 13.8 -2 15.5 -3.5 2 -1.8 10.5 -2 24.3 -0.8 15 1.3 21.5 0.8 22.8 -1.3 1.3 -2.3 9 -2.5 28.5 -1.3 l26.5 2 39 30.3 c21.5 16.5 42.8 33 47.3 36.5 4.5 3.5 29.3 22.5 55 42.5 25.8 20 50.5 39 55 42.5 4.5 3.5 29.3 22.5 55 42.5 25.8 20 50 38.8 54 41.8 55 42 53.5 40.5 53.5 49.8 l0 8.5 -13 -0.3 c-7.3 0 -14.3 -0.5 -15.8 -1z" }),
            React__default['default'].createElement("path", { d: "M1720 2809.3 c0 -7 2 -9.8 13.3 -18 7 -5.5 13.5 -10.5 14.3 -11.3 0.8 -1 10.8 -8.8 22.5 -17.5 11.8 -9 34.3 -26.3 50.3 -38.8 16 -12.3 32.8 -25.3 37.3 -28.8 4.5 -3.5 19 -14.8 32.5 -25 13.5 -10.3 28 -21.5 32.5 -25 4.5 -3.5 19 -14.8 32.5 -25 13.5 -10.3 28 -21.5 32.5 -25 4.5 -3.5 19 -14.8 32.5 -25 13.5 -10.3 28 -21.5 32.5 -25 4.8 -3.5 11.3 -8.8 14.8 -11.5 6 -5 9.8 -5.5 44 -5.8 75.8 -0.5 95.5 1 93.3 7.3 -0.8 1.8 -32.8 28 -64.8 52.8 -11.3 8.8 -62.5 49 -67.3 53 -2 1.8 -8.8 7 -15 11.8 -6.3 4.8 -12.5 9.8 -14 11.3 -1.8 1.3 -11.5 9.3 -22 17.3 -10.5 8 -18.8 15 -18.5 15.3 0.8 0.3 46 -2.3 103.3 -6 22 -1.5 57.3 -3.8 78.3 -5.3 21 -1.3 47.3 -3.3 58 -4 18.8 -1.5 20 -1.5 20 3.3 0 4.8 -7 13.3 -11 13.3 -2.8 0 -9 6.8 -9 9.8 0 1.3 -10 13 -22 25.8 -12.3 12.8 -27.5 29.3 -34.3 36.5 -6.5 7 -13.5 13 -15.3 13 -2 0 -3.5 1.5 -3.5 3.5 0 4 -5 4.8 -75 9 -52.5 3.3 -107.5 6.5 -160 10 -21.3 1.3 -58.5 3.5 -82.5 5 -24 1.5 -56.8 3.8 -73 5 -16 1.5 -35.3 2.5 -43 2.5 l-14 0 0 -8.3z" }),
            React__default['default'].createElement("path", { d: "M2038.8 2464.8 c-5.5 -4.5 -10.5 -9 -11.3 -9.8 -0.8 -0.8 -7.5 -6.3 -15 -12.5 -7.5 -6.3 -14.3 -11.8 -15 -12.5 -0.8 -0.8 -7.5 -6.3 -15 -12.5 -7.5 -6.3 -14.3 -11.8 -15 -12.5 -0.8 -0.8 -7.5 -6.3 -15 -12.5 -7.5 -6.3 -14.3 -11.8 -15 -12.5 -0.8 -0.8 -7.5 -6.3 -15 -12.5 -7.5 -6.3 -16.5 -13.8 -19.8 -16.5 -3 -3 -45 -37.8 -93 -77.5 -82 -68.3 -87 -72.8 -87 -80.5 l-0.3 -8.5 22 1.5 c12 1 33 2.8 46.8 4 13.8 1.3 38.5 3.5 55 5 16.5 1.5 41.8 3.8 56.3 5 14.5 1.3 39.8 3.5 56.3 5 16.5 1.5 41.3 3.8 55 5 13.8 1.3 38 3.5 53.8 4.8 15.8 1.5 40.5 3.8 55 5 14.5 1.5 36 3.3 47.8 4.3 12 0.8 22.5 2.3 23.8 3.3 1.3 0.8 10.8 11 21 22.8 10.3 11.8 20.5 23 22.5 25 12.3 12 25 28.8 25 33 0 4.3 -1.3 4.8 -13 3.5 -7.3 -0.8 -26.8 -2.5 -43.3 -4 -16.5 -1.5 -41.3 -3.8 -55 -5 -13.8 -1.3 -39 -3.5 -56.3 -5 -17.3 -1.5 -40.8 -3.8 -52.5 -5.3 -11.8 -1.3 -24.5 -2.3 -28.8 -2.3 l-7.5 0 7.5 7 c4.3 3.8 14.8 13 23.8 20.5 9 7.5 16.8 14.3 17.5 15 0.8 0.8 8.5 7.5 17.5 15 9 7.5 16.8 14.3 17.5 15 0.8 0.8 8.5 7.5 17.5 15 9 7.5 16.8 14.3 17.5 15 0.8 0.8 8.5 7.5 17.5 15 24.5 20.8 27.3 23 48.8 41.5 l19.8 17.3 -33.5 1.5 c-18.5 1 -55 2.5 -81.3 3.5 l-47.5 1.8 -10 -8.3z" }),
            React__default['default'].createElement("path", { d: "M2824.3 2469.8 c-17.8 -1 -32.8 -2.5 -33.5 -3 -0.8 -0.8 3.5 -5.8 9.5 -11 5.8 -5.3 11.8 -10.5 13.3 -12 1.5 -1.3 10 -8.8 19 -16.3 9 -7.5 16.8 -14.3 17.5 -15 0.8 -0.8 9.8 -8.5 20 -17.5 10.3 -9 19.3 -16.8 20 -17.5 0.8 -0.8 8.5 -7.5 17.5 -15 9 -7.5 16.8 -14.3 17.5 -15 1 -1 20 -17.5 46.3 -40.3 4 -3.5 11.5 -10.3 16.3 -14.5 l8.8 -8.3 -16.3 1.5 c-9 1 -26.3 2.8 -38.8 4 -12.3 1.5 -33.3 3.8 -46.3 5 -24.8 2.5 -53.8 5.8 -93 10 -57.8 6.5 -57 6.5 -57 -0.3 0 -3.8 4.3 -10.3 11.3 -17.3 6 -6.3 11 -12.8 11.3 -14.5 0 -3.8 6 -10.5 9.5 -10.5 3.8 0 13 -11.3 13 -15.8 0 -2.5 2 -5 4.5 -6 2.3 -0.8 8 -5 12.5 -9.3 7 -6.5 10.5 -7.8 27.5 -9.5 10.5 -1 31 -3 45.5 -4.5 14.5 -1.5 36.5 -3.8 48.8 -5 12.5 -1.3 33.3 -3.5 46.3 -5 13 -1.3 34.5 -3.5 47.5 -5 13 -1.3 34.8 -3.5 48.3 -5 13.3 -1.3 35.3 -3.8 48.8 -5 13.3 -1.5 35.5 -3.8 49.3 -5.3 13.8 -1.3 35.3 -3.5 47.5 -5 12.5 -1.3 30.8 -3 40.8 -4 l18 -1.5 0 8.5 c0 5.3 -1.8 10 -4.5 12.3 -2.5 2 -14 12 -25.8 22 -12 9.8 -23.5 18 -25.8 18 -2.3 0 -4 1.5 -4 3.3 0 4.3 -23 24.3 -28 24.3 -2.5 0 -4.5 1.5 -4.5 3.3 0 4.8 -10.8 14.3 -15.8 14.3 -2.3 0 -4.3 1.5 -4.3 3.5 0 1.8 -5.3 7.8 -11.8 13 -6.8 5.3 -12.5 10.3 -13.3 11 -0.8 0.8 -8.5 7.5 -17.5 15 -9 7.5 -16.8 14.3 -17.5 15 -5 5.5 -24.8 20 -27.3 20 -1.5 0 -2.8 1.5 -3 3.3 0 1.5 -4.8 6.8 -10.5 11.5 -5.8 4.5 -16 13.3 -23 19 -6.8 5.8 -22 18.8 -33.8 28.8 -11.8 10 -27.3 23.3 -34.5 29.5 -26.3 22.3 -20 20.5 -69.8 20.3 -24.5 -0.3 -59 -1.3 -76.5 -2.5z" }),
            React__default['default'].createElement("path", { d: "M2301.3 2253 c-8.5 -7.8 -29.3 -27.5 -46.5 -43.5 l-31.3 -29 -3 -31 c-1.8 -17 -4.3 -39.8 -5.5 -50.8 -1.3 -11 -3.5 -31.5 -5 -45.5 -5.3 -52.3 -7.8 -77.5 -10 -98.3 -1.3 -11.8 -3.5 -33 -5 -47.5 -1.5 -14.5 -3.8 -37.5 -5.3 -51.3 -1.5 -13.8 -3.5 -33.5 -4.8 -43.8 -1.3 -10.3 -3.3 -30.3 -4 -44.3 l-1.8 -25.8 8.8 0 c9 0 10.5 1.3 27 22.5 4.8 6.3 9.3 11.8 10 12.5 0.8 0.8 5.3 6.3 10 12.5 11 14 15.5 19.8 19 23.5 1.3 1.5 41.3 51.3 88.5 110.3 47.3 59.3 86.5 108 87.5 108.8 0.8 0.8 5.3 6.3 10 12.5 4.8 6.3 9.3 11.8 10 12.5 0.8 0.8 5.3 6.3 10 12.5 4.8 6.3 10 12.8 11.8 14.5 2 2.3 2.5 13.3 1.8 40 -1.8 55.3 -3.8 83.3 -6 82.5 -1.8 -0.8 -31.5 -37.8 -50 -62 -3.5 -4.5 -15.8 -20.3 -27.3 -34.8 -11.5 -14.5 -23.5 -29.8 -26.8 -34 -23 -29.8 -50.3 -64 -56.5 -71.3 l-7.5 -8.8 1.5 16.3 c1 9 2.8 27.3 4 40.8 1.5 13.3 3.5 35.3 5 48.8 1.3 13.3 3.5 35.5 5 49.3 3.5 32 7.5 72.3 9.8 97 1.5 18.3 1.5 19.3 -3.5 19.3 -2.8 0 -11.8 -6.5 -20 -14.5z" }),
            React__default['default'].createElement("path", { d: "M2678.8 2253.3 c0.8 -8 2.5 -21.8 3.8 -30.8 3 -21 6.8 -48.5 10 -75 1.5 -11.8 3.8 -28.5 5 -37.5 2.3 -15.8 4.5 -34 10 -78 1.5 -11.5 3.3 -24.8 4 -29.5 l1.3 -8.8 -5.8 6.3 c-3.3 3.5 -10.8 12.5 -17 20 -6.3 7.5 -13.8 16.5 -16.5 20 -3 3.5 -17.5 21 -32.3 38.8 -14.5 18 -28.5 34.8 -30.8 37.5 -2.3 2.8 -9.3 11.3 -15.5 18.8 -6.3 7.5 -13.8 16.5 -16.5 20 -3 3.5 -14.3 17 -25 30 l-19.8 23.8 -0.8 -23.5 c-0.3 -13 -1.8 -25 -3.3 -26.8 -1.5 -2 -2 -11 -0.8 -24.3 1 -14.5 0.8 -21.5 -1.3 -22.8 -3 -2 -3.3 -16.8 -0.8 -25.8 1 -3 4.5 -8.5 8 -12.5 3.5 -3.8 11.3 -13.3 17.5 -20.8 6.3 -7.5 11.8 -14.3 12.5 -15 0.8 -0.8 7.5 -8.5 15 -17.5 7.5 -9 14.3 -16.8 15 -17.5 0.8 -0.8 6.3 -7.5 12.5 -15 6.3 -7.5 11.8 -14.3 12.5 -15 0.8 -0.8 13 -15.3 27.5 -32.5 14.3 -17.3 26.8 -31.8 27.5 -32.5 0.8 -0.8 6.3 -7.5 12.5 -15 6.3 -7.5 11.8 -14.3 12.5 -15 0.8 -0.8 7.5 -8.5 15 -17.5 7.5 -9 14.3 -16.8 15 -17.5 0.8 -0.8 6.3 -7.5 12.5 -15 6.3 -7.5 11.8 -14.3 12.5 -15 0.8 -0.8 13.3 -15.3 27.5 -32.5 14.5 -17 28.5 -33.8 31 -36.8 3.3 -4 7.8 -5.8 13.5 -5.8 l8.8 0 -1.8 18.3 c-1 9.8 -2.8 24.8 -4 33 -1.3 8.3 -3.5 24.5 -5 36.3 -1.5 11.8 -3.8 28 -5 36.3 -1.3 8.3 -4.8 33 -7.5 55 -2.8 22 -6.3 47.3 -7.5 56.3 -1.3 9 -3.5 25.8 -5 37.5 -1.5 11.8 -3.8 28.5 -5 37.5 -1.3 9 -3.5 25.8 -5 37.5 -1.5 11.8 -3.8 28.5 -5 37.5 -1.3 9 -3.5 26.5 -5.3 38.8 -3 22 -7 31.3 -14 31.3 -1.8 0 -3.3 1.5 -3.3 3.5 0 4.5 -16.5 19 -21.3 19 -2 0 -3.8 1.5 -3.8 3.3 0 4.5 -26.5 29.3 -31.3 29.3 -2 0 -3.8 1.3 -3.8 3 0 5.3 -13.3 17 -19.5 17 -5.8 0 -5.8 -0.5 -4.3 -14.3z" })),
        React__default['default'].createElement("g", { fill: "#ff00a6" },
            React__default['default'].createElement("path", { d: "M2489 3675.8 c-1 -24.5 -2.8 -65.3 -4 -90.8 -1.5 -25.5 -2.5 -57.3 -2.5 -70.5 0 -13.3 -1 -24.8 -2 -25.5 -1.3 -0.8 -2.3 -22.5 -2.5 -48.3 0 -25.8 -1.3 -70 -2.8 -98.3 -1.5 -28.3 -3.8 -79.3 -5.3 -113.8 -6 -142.3 -7.8 -182.8 -10.3 -237 -2.5 -52 -2.5 -57.5 1.5 -63.3 3.3 -5 3.8 -10 3 -20.5 -0.8 -8 -1.8 -24.3 -2.5 -36.8 -0.5 -12.3 -1.3 -24.3 -1.8 -26.3 -0.5 -2 -0.5 -14.5 -0.3 -27.5 l0.5 -23.8 10 -11.3 c5.5 -6.3 13.5 -16 18 -21.8 4.5 -5.8 9.8 -10.5 11.8 -10.5 2 0 8 5.3 13 11.8 5.3 6.5 13.3 16 18.3 21.3 8 8.5 8.8 10.5 8.8 23.8 0 8 -0.8 15.5 -1.8 16.5 -1 0.8 -1.5 12.3 -1 25.3 0.3 13 -0.3 23.8 -1.5 23.8 -3.5 0 -0.8 55.8 3.3 60 2.8 3.3 3 11.8 1 48.8 -1.3 24.8 -3.5 75.5 -5 112.5 -2.8 73 -6 148.5 -10 241.3 -6 136.5 -7.5 175 -10 242.5 -1.5 39.3 -3.5 87 -4.5 106.3 l-1.8 35 -9 0.8 -9.3 0.8 -1.5 -44.5z" }),
            React__default['default'].createElement("path", { d: "M3352.5 3375.5 c-3.5 -3.8 -19.3 -18.5 -35 -33 -15.8 -14.5 -30.5 -28 -32.5 -30 -2 -2 -16.8 -15.5 -32.5 -30 -15.8 -14.5 -30.5 -28 -32.5 -30 -7.3 -7.3 -54.5 -50.8 -97.5 -90 -15.8 -14.5 -30.5 -28 -32.5 -30 -2 -2 -16.8 -15.5 -32.5 -30 -15.8 -14.5 -30.5 -28 -32.5 -30 -2 -2 -17.8 -16.8 -35 -32.5 -17.3 -15.8 -33 -30.5 -35 -32.5 -2 -2 -16.8 -15.5 -32.5 -30 -15.8 -14.5 -30.5 -28 -32.5 -30 -2 -2 -10.5 -10 -18.8 -17.5 -8.3 -7.5 -29.5 -27.3 -47.3 -43.8 -17.8 -16.5 -33.8 -31 -35.5 -32 -2 -1 -3.5 -5.8 -3.5 -10.3 0 -6.5 -2.3 -10.3 -11.8 -19 -32.5 -29.5 -67.8 -62.3 -76 -70 l-9.3 -8.8 -3 -32.5 c-1.5 -17.8 -3.3 -34.8 -4.3 -37.3 -1.3 -4.5 -0.3 -4.8 12 -3.3 7.5 1 19.8 1.8 27 1.8 13.8 0 13.8 0 30 17 9.3 9.3 21 22.3 26.5 28.5 36.3 41.5 52.3 57 58.8 57 7 0 7 0 47.5 45.3 11.8 12.8 23 25.3 25 27.3 2 2 13.3 14.5 25 27.5 11.8 13 23 25.5 25 27.5 2 2 13.3 14.5 25 27.5 11.8 13 23 25.5 25 27.5 2 2 13.3 14.5 25 27.5 11.8 13 27 30 34 37.5 7 7.5 18.3 20 25 27.5 6.8 7.5 12.8 14.3 13.5 15 0.8 0.8 12 13 25 27.5 13 14.5 24.3 26.8 25 27.5 0.8 0.8 12 13 25 27.5 13 14.5 25.5 28 27.5 30 2 2 8.3 8.8 13.5 15 5.3 6.3 15.5 17.5 22.5 25 7 7.5 22.3 24.5 34 37.5 11.8 13 23 25.5 25 27.5 2 2 13.3 14.5 25 27.5 11.8 13 23 25.5 25 27.5 16.5 16.5 22.5 25.5 22.5 33.8 0 8.3 -0.5 8.8 -8 8.8 -5.8 -0.3 -10.3 -2.3 -14.5 -7z" }),
            React__default['default'].createElement("path", { d: "M1610 3361.8 c0 -6 2.5 -11 9.3 -18 9.8 -10.8 20.3 -22 77 -82.5 20.8 -22 44.3 -47.3 52.5 -56.3 8.3 -8.8 18 -19 22 -22.8 3.8 -3.8 6.8 -8 6.8 -9.8 0 -3.5 6.3 -10 9.5 -10 1.3 0 7.3 -5.3 13.3 -11.8 5.8 -6.8 27.8 -30 48.3 -52 20.8 -22 45 -47.8 54 -57.3 9 -9.8 19 -20.5 22.5 -24 3.5 -3.5 20.3 -21.5 37.5 -40 17.3 -18.5 34 -36.5 37.5 -40 6.5 -6.8 18 -19 77.5 -82.5 69 -73.8 67.8 -72.5 75.5 -72.5 4.5 0 7 -1.3 7 -3.8 0 -2 1.5 -3.8 3.5 -3.8 4.5 0 31.8 -30 30 -32.8 -0.8 -1.3 0.3 -2.3 2.3 -2.3 3.8 0 39.3 -36.5 39.3 -40.5 0 -3 6.5 -9.5 9.5 -9.5 1.3 0 4 -2 6.5 -4.8 3.3 -3.5 9.5 -5 29.8 -6.3 14 -1 29 -2.3 33.5 -3 l8 -1.5 -1 12 c-0.8 6.8 -1.8 21 -2.8 31.8 -1 14.3 -2.3 19.3 -5 19.3 -2 0 -3.5 1.5 -3.5 3.3 0 4.5 -16.3 19.3 -21.3 19.3 -2 0 -3.8 1.5 -3.8 3.3 0 4.8 -10.8 14.3 -15.8 14.3 -2.5 0 -5.3 2.5 -6.5 5.8 -2.5 6 -13.8 16.8 -18 16.8 -3.3 0 -9.8 6.3 -9.8 9.5 0 3.5 -8 9.8 -13.8 11 -4 0.8 -4.8 2.5 -4.3 10 1 10.5 1.8 9.5 -32 39.5 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -12 10.8 -25 22.5 -13 11.8 -24.3 21.8 -25 22.5 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -23 20.5 -25 22.5 -2 2 -13.3 12.3 -25 22.5 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -12 10.8 -25 22.5 -13 11.8 -24.3 21.8 -25 22.5 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -21.8 19.3 -22.5 20 -0.8 0.8 -12 10.8 -25 22.5 -13 11.8 -24.3 21.8 -25 22.5 -0.8 0.8 -10.8 9.8 -22.5 20 -11.8 10.3 -26.3 23.5 -32.5 29.3 -8.5 8 -13.3 10.8 -19.3 10.8 -7.8 0 -8.3 -0.5 -8.3 -8.3z" }),
            React__default['default'].createElement("path", { d: "M2175 3213.8 c0 -7.8 0.8 -8.8 6.3 -8.8 6.5 0 7.3 2.3 4.8 12 -1 3.3 -3.5 5.5 -6.3 5.5 -3.8 0 -4.8 -1.8 -4.8 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2177.5 3188.8 c0 -7.8 0.8 -8.8 6.3 -8.8 6.5 0 7.3 2.3 4.8 12 -1 3.3 -3.5 5.5 -6.3 5.5 -3.8 0 -4.8 -1.8 -4.8 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2677.5 3098.8 c0 -8.5 0 -8.5 5.3 -4.3 2.8 2.3 6.3 6.3 7.5 8.8 2 3.5 1.3 4.3 -5.3 4.3 -7 0 -7.5 -0.8 -7.5 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2185 3091.3 c0 -7.8 0.8 -8.8 6.3 -8.8 6.5 0 7.3 2.3 4.8 12 -1 3.3 -3.5 5.5 -6.3 5.5 -3.8 0 -4.8 -1.8 -4.8 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2807.5 3063.8 c0 -2 -1 -3.8 -2.3 -3.8 -1.3 0 -1.8 -2.3 -1 -5 2.3 -8.8 8.3 -6 8.3 3.8 0 4.8 -1 8.8 -2.5 8.8 -1.3 0 -2.5 -1.8 -2.5 -3.8z" }),
            React__default['default'].createElement("path", { d: "M2805 3033.8 c0 -2 -1 -3.8 -2.3 -3.8 -1.3 0 -1.8 -2.3 -1 -5 2.3 -8.8 8.3 -6 8.3 3.8 0 4.8 -1 8.8 -2.5 8.8 -1.3 0 -2.5 -1.8 -2.5 -3.8z" }),
            React__default['default'].createElement("path", { d: "M1772.5 2811.3 c0 -2 1.5 -3.8 3.5 -3.8 2 0 4 -1.3 4.5 -2.8 1.3 -3.8 14.5 0 14.5 4 0 4 -5.5 6.3 -15.3 6.3 -4.8 0 -7.3 -1.3 -7.3 -3.8z" }),
            React__default['default'].createElement("path", { d: "M1897.5 2803.8 c0 -2 1.5 -3.8 3.5 -3.8 2 0 4 -1.3 4.5 -2.8 1.3 -3.8 14.5 0 14.5 4 0 4 -5.5 6.3 -15.3 6.3 -4.8 0 -7.3 -1.3 -7.3 -3.8z" }),
            React__default['default'].createElement("path", { d: "M3072.5 2801.5 c0 -4.8 8.3 -6.5 13.3 -2.8 6.3 4.5 5.3 6.3 -4.5 6.3 -5.8 0 -8.8 -1.3 -8.8 -3.5z" }),
            React__default['default'].createElement("path", { d: "M2990 2794 c0 -4.8 8.3 -6.5 13.3 -2.8 6.3 4.5 5.3 6.3 -4.5 6.3 -5.8 0 -8.8 -1.3 -8.8 -3.5z" }),
            React__default['default'].createElement("path", { d: "M1755 2776.3 l0 -8.8 12 0 11.8 0.3 -10 8.5 c-5.5 4.8 -10.8 8.8 -11.8 8.8 -1.3 0 -2 -4 -2 -8.8z" }),
            React__default['default'].createElement("path", { d: "M1842.5 2710 l0 -10 11.3 0 c6.3 0 11.3 0.8 11 2 0 1 -5 5.5 -11.3 9.8 l-11 8.3 0 -10z" }),
            React__default['default'].createElement("path", { d: "M2028.8 2539.8 c-20.5 -1 -69.5 -3 -108.8 -4.5 -87.8 -3.5 -173.5 -7 -247.5 -10.3 -106.8 -4.5 -272.3 -11.3 -350.8 -14 l-44.3 -1.8 0 -9.3 0 -9.5 47 -1.5 c25.8 -1 67 -2.8 91.5 -4 24.8 -1.5 55.8 -2.5 69.3 -2.5 14.8 0 25 -1 26 -2.8 1 -1.5 10.5 -2.5 23.5 -2.5 39.8 0.3 118.5 -2 235.3 -7.3 29.5 -1.3 84.8 -3.5 122.5 -5 37.8 -1.5 88 -3.8 111.3 -5 35.5 -1.8 43.5 -1.8 48 1.5 6.3 4 47 5 49.3 1.3 0.8 -1.3 11 -1.5 22.8 -1 11.5 0.8 22.5 0.5 24.3 -1 1.8 -1.3 15.3 -1.8 30 -1.3 l26.8 1 22 18.8 c12 10.5 22.3 19.8 22.8 21 0.5 1 -1.5 3 -4.3 4.5 -2.8 1.5 -6.3 4.3 -8.3 6 -1.8 1.8 -10.8 9 -20.3 16.3 -13.8 10.8 -18 12.8 -23.3 11.5 -7.3 -2 -36.3 -3 -82.3 -3 -22.5 0 -31 0.8 -34 3.5 -2 2 -5.5 3.3 -7.5 3.3 -2 -0.3 -20.3 -1.3 -41 -2.5z" }),
            React__default['default'].createElement("path", { d: "M2917.5 2539.3 c-4.8 -4.5 -41.8 -7.8 -44 -3.8 -1 1.8 -9.8 2.3 -24 1.5 -12 -0.8 -22.8 -0.5 -23.5 0.8 -0.8 1.3 -7.3 2.3 -14.3 2.3 -10.3 0 -14.5 -1.3 -20 -6 -4 -3.5 -15 -12 -24.5 -19.3 -9.5 -7.3 -17.3 -14 -17.3 -15 0 -1 2.5 -3.5 5.8 -5.5 3 -2.3 11.8 -9.8 19.3 -16.8 17.3 -16.3 27.3 -21 36.5 -17.3 3.8 1.3 15.5 2.5 25.8 2.8 10.5 0 37.5 0.5 60.3 1 25 0.5 42.3 -0.3 44 -1.8 3.5 -2.8 84.5 -0.3 324.8 10.5 34.5 1.5 85.5 3.3 113.8 4 65 1.5 80 2 141.3 5.5 53 2.8 167.8 7.8 185.8 7.8 l10.5 0 0 10 0 10 -11.8 0 c-6.8 0.3 -37.3 1.3 -68.3 2.5 -31 1.3 -86.5 3.5 -123.8 5 -37 1.3 -91.8 3.5 -121.3 5 -29.5 1.5 -81.3 3.8 -115 5 -33.8 1.5 -87.8 3.8 -120 5 -32.3 1.3 -86.3 3.5 -120 5 -33.8 1.3 -73.5 3 -88.8 4 -22.3 1.3 -28.3 0.8 -31.3 -2.3z" }),
            React__default['default'].createElement("path", { d: "M3062.3 2360.3 c1.8 -1.3 2.5 -3.5 1.8 -5 -1 -1.8 0 -2.8 2.8 -2.8 2.8 0 6 -1.3 7.8 -3 2.3 -2.3 3 -1.3 3 5 0 7.5 -0.5 8 -9.3 8 -6.5 0 -8.5 -0.8 -6 -2.3z" }),
            React__default['default'].createElement("path", { d: "M1887.5 2332.3 l0 -7.5 7.5 5.3 c11 7.8 11.3 10 1.5 10 -8.3 0 -9 -0.5 -9 -7.8z" }),
            React__default['default'].createElement("path", { d: "M2327.3 2319 c-0.5 -0.5 -16.8 -2.3 -36 -3.8 -31.5 -2.5 -35.5 -3.3 -39.5 -8.3 -2.8 -3.3 -13.3 -15.3 -23.8 -27 -10.8 -11.5 -23.8 -26.3 -29.3 -32.5 -12.8 -14.3 -13.5 -15 -21.5 -15 -4.8 0 -9.3 -3 -14.8 -9.3 -4.5 -5.3 -12.8 -14.5 -18.5 -20.8 -5.5 -6.3 -18.8 -20.8 -29 -32.5 -10.3 -11.8 -20.5 -23 -22.5 -25 -2 -2 -12.3 -13.3 -22.5 -25 -10.3 -11.8 -19.3 -21.8 -20 -22.5 -0.8 -0.8 -10.8 -12 -22.5 -25 -11.8 -13 -21.8 -24.3 -22.5 -25 -0.8 -0.8 -9.8 -10.8 -20 -22.5 -10.3 -11.8 -20.5 -23 -22.5 -25 -2 -2 -8.3 -8.8 -13.5 -15 -5.5 -6.3 -18.5 -20.8 -29 -32.5 -10.5 -11.8 -23.5 -26.3 -29 -32.5 -5.3 -6.3 -11.5 -13 -13.5 -15 -2 -2 -12.3 -13.3 -22.5 -25 -10.3 -11.8 -19.3 -21.8 -20 -22.5 -0.8 -0.8 -9.8 -10.8 -20 -22.5 -10.3 -11.8 -24.5 -27.5 -31.5 -35 -7 -7.5 -17.3 -18.8 -22.5 -25 -5.3 -6.3 -11.5 -13 -13.5 -15 -2 -2 -12.3 -13.3 -22.5 -25 -10.3 -11.8 -19.3 -21.8 -20 -22.5 -0.8 -0.8 -10.8 -12 -22.5 -25 -11.8 -13 -21.8 -24.3 -22.5 -25 -0.8 -0.8 -9.5 -10.5 -19.3 -21.5 -14.5 -16 -18.3 -22 -18.3 -28.3 0 -7 0.8 -7.8 7.8 -7.8 8.8 0 8.3 -0.5 68.5 56 20.5 19.5 45.3 42.5 55 51.5 9.5 9 19 18 21.3 20 2 2 17.8 16.8 35 32.5 17 15.8 35 32.8 40 37.5 4.8 4.8 24 22.8 42.5 40 18.5 17.3 35.5 33 37.5 35 2 2 19 17.8 37.5 35 18.5 17.3 36.5 34 40 37.5 3.5 3.5 20.3 19.3 37.5 35 17.3 15.8 34 31.5 37.5 35 3.5 3.5 21.5 20.3 40 37.5 18.5 17.3 36.5 34 40 37.5 3.5 3.5 20 19 37 34.8 25 23 30.5 29.5 30.5 35.3 0 5.8 5.8 12.3 31.8 36.5 17.8 16.5 39.5 37 48.5 46 l16.8 16.3 1.5 21.3 c1 11.8 2.3 24.3 3 28.3 1.3 5.8 -1 8.8 -4.3 5.8z" }),
            React__default['default'].createElement("path", { d: "M2671 2309.8 c1 -6 2.8 -19.3 4 -29.3 2.3 -16.3 3.3 -18.8 11.3 -25.8 4.8 -4.3 8.8 -9.3 8.8 -11.3 0 -2 1.8 -3.5 3.8 -3.5 4.8 0 31.3 -24.8 31.3 -29.3 0 -1.8 1.8 -3.3 3.8 -3.3 4.8 0 21.3 -14.5 21.3 -19 0 -2 1.5 -3.5 3.3 -3.5 5.5 0 11.8 -8.5 11.8 -15.5 0 -4.3 3 -9.3 9.5 -14.5 5 -4.5 21.5 -19.5 36.8 -33.5 15 -14 33.5 -30.8 41.3 -37.8 7.5 -6.8 15.5 -14.3 17.5 -16.3 2 -2 15.5 -14.5 30 -27.5 14.5 -13 28 -25.5 30 -27.5 2 -2 16.8 -15.5 32.5 -30 15.8 -14.5 29.3 -26.8 30 -27.5 0.8 -0.8 14.3 -13 30 -27.5 15.8 -14.5 30.5 -28 32.5 -30 2 -2 15.5 -14.5 30 -27.5 14.5 -13 28 -25.5 30 -27.5 2 -2 13.5 -12.8 25.8 -23.5 12 -10.8 21.8 -20.8 21.8 -22 0 -3.3 6.5 -9.5 10 -9.5 3.8 0 22.5 -17.8 22.5 -21.5 0 -1.5 2.5 -3.8 5.8 -4.5 3 -0.8 12.8 -8.5 21.8 -17 9 -8.8 28 -26.5 42.5 -39.5 14.5 -13 28 -25.5 30 -27.5 2 -2 15.5 -14.5 30 -27.5 14.5 -13 28 -25.8 30.3 -28 2.5 -2.8 7.8 -4.5 13.3 -4.5 8.5 0 9 0.5 9 8.3 0 6.3 -3 11.3 -14.5 23 -7.8 8.5 -19.8 21.3 -26.5 28.8 -6.8 7.5 -18 20 -25 27.5 -7 7.8 -18.3 20 -25.3 27.5 -45.5 50 -60 65 -63 65 -1.8 0 -3.3 1.5 -3.3 3.3 0 4 -14.5 21.8 -17.8 21.8 -3.5 0 -9.8 6.5 -9.8 10 0 2.5 -33.8 41.3 -50 57.5 -2 2 -9.3 10 -16 17.5 -6.8 7.5 -18 20 -25 27.5 -7 7.5 -23.5 25.5 -36.5 40 -13 14.5 -25.5 28 -27.5 30 -2 2 -14.5 15.5 -27.5 30 -13 14.5 -29.5 32.5 -36.5 40 -7 7.5 -18.3 20 -25 27.5 -6.8 7.5 -14 15.5 -16 17.5 -2 2 -8.8 9.5 -15 16.3 -9.8 11 -39.3 43.3 -74.8 81.8 -7 7.8 -13 12 -16.8 12 -3.3 0 -10.3 3.8 -15.3 8.3 -5.3 4.8 -11.5 9.3 -14 10 -2.5 1 -4 2.8 -3.3 4 1.8 2.8 -10.3 17.8 -14 17.8 -3.3 0 -9.5 6.5 -9.5 10 0 1.5 -1.5 4.3 -3 6 -1.8 1.8 -7.5 7.8 -12.5 13.5 -8.5 9.3 -10.5 10.3 -27.5 12.8 -10 1.3 -26 3.3 -35.8 4 -9.5 0.8 -19.8 2.3 -22.3 3 -4.3 1.3 -4.5 0.3 -3 -9.5z" }),
            React__default['default'].createElement("path", { d: "M3173.3 2263.8 c1.8 -3.5 4.8 -6.3 7 -6.3 2 0 5 -1.3 6.8 -3 2.3 -2.3 3 -1.3 3 4.8 0 8 -3.5 10.8 -13.8 10.8 -5.3 0 -5.5 -0.5 -3 -6.3z" }),
            React__default['default'].createElement("path", { d: "M2487.5 2234.5 c-5.8 -7.3 -13.3 -17 -17 -21.8 -7 -8.8 -11.3 -27.8 -7.5 -33.5 1.3 -1.5 2 -19.3 1.8 -39.3 0 -20 0.5 -38 1.5 -40.3 0.8 -2.3 -0.3 -5.8 -2.5 -8 -4.5 -4.5 -4.8 10.3 8.8 -335.5 2.3 -54.5 4 -106 7 -206.3 0.3 -7.5 1.3 -34.5 2.8 -60 1.3 -25.5 3.5 -81.8 5 -125 1.8 -43.3 3.5 -80.3 4 -81.8 0.5 -1.8 5 -3.3 9.8 -3.3 l8.5 0 1.5 43 c1 23.8 2.8 66.3 4 94.5 1.3 28.3 3.5 80.5 5 116.3 1.5 35.8 3.8 89.8 5 120 1.3 30.3 3.5 83.8 5 118.8 1.5 35 3.8 87.5 5 116.3 8.5 188.3 8.8 190.8 4.5 195.5 -5.3 6 -7.8 17.5 -4.3 19.5 1.8 1.3 2.5 10 2 24 -0.5 12 0 22.8 1 23.8 1 1 1.8 12.5 1.8 25.8 0 23.8 -0.3 24.3 -9 35 -16.8 21.3 -29 35.3 -31 35.3 -1.3 0 -6.8 -6 -12.5 -13z" }),
            React__default['default'].createElement("path", { d: "M3205.8 2236.3 c1.8 -3.5 4.8 -6.3 7 -6.3 2 0 5 -1.3 6.8 -3 2.3 -2.3 3 -1.3 3 4.8 0 8 -3.5 10.8 -13.8 10.8 -5.3 0 -5.5 -0.5 -3 -6.3z" }),
            React__default['default'].createElement("path", { d: "M3005 2206.5 c0 -6 0.8 -6.5 11.3 -6.5 9.5 0 11.3 0.8 11.3 5 0 2.8 -1.5 5 -3.5 5 -1.8 0 -7 0.8 -11.3 1.5 -7 1.5 -7.8 1 -7.8 -5z" }),
            React__default['default'].createElement("path", { d: "M1879.5 2205.8 c-5 -0.8 -7 -2.5 -7 -6 0 -3.8 1.8 -4.8 8.8 -4.8 7.8 0 8.8 0.8 8.8 6.3 0 3.5 -0.8 6 -1.8 6 -1.3 -0.3 -5 -1 -8.8 -1.5z" }),
            React__default['default'].createElement("path", { d: "M1767 2195.8 c-5 -0.8 -7 -2.5 -7 -6 0 -3.8 1.8 -4.8 8.8 -4.8 7.8 0 8.8 0.8 8.8 6.3 0 3.5 -0.8 6 -1.8 6 -1.3 -0.3 -5 -1 -8.8 -1.5z" }),
            React__default['default'].createElement("path", { d: "M2200 1983.8 c0 -7 1 -8.8 5 -8.8 2.8 0 5 1.5 5 3.3 0 1.5 0.8 5.5 1.5 8.8 1.3 4.8 0.5 5.5 -5 5.5 -5.8 0 -6.5 -1 -6.5 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2630 1961.3 c0 -8.5 0.3 -8.8 10 -8.8 l10.3 0 -7 8.8 c-9 11.3 -13.3 11.3 -13.3 0z" }),
            React__default['default'].createElement("path", { d: "M2195 1936.3 c0 -7 1 -8.8 5 -8.8 2.8 0 5 1.5 5 3.3 0 1.5 0.8 5.5 1.5 8.8 1.3 4.8 0.5 5.5 -5 5.5 -5.8 0 -6.5 -1 -6.5 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2657.5 1928.8 c0 -8.5 0.3 -8.8 10 -8.8 l10.3 0 -7 8.8 c-9 11.3 -13.3 11.3 -13.3 0z" }),
            React__default['default'].createElement("path", { d: "M2187.5 1858.8 c0 -7 1 -8.8 5 -8.8 2.8 0 5 1.5 5 3.3 0 1.5 0.8 5.5 1.5 8.8 1.3 4.8 0.5 5.5 -5 5.5 -5.8 0 -6.5 -1 -6.5 -8.8z" }),
            React__default['default'].createElement("path", { d: "M2809.3 1862.5 c-0.8 -2.8 -0.3 -5 1 -5 1.3 0 2.3 -1.8 2.3 -3.8 0 -2 1.8 -3.8 3.8 -3.8 2.5 0 3.8 2.8 3.8 8.8 0 7 -1 8.8 -4.8 8.8 -2.5 0 -5.3 -2.3 -6 -5z" }),
            React__default['default'].createElement("path", { d: "M2247 1822 l-6.8 -8.3 6.3 -0.8 c8.3 -1 9 -0.3 8 9.5 l-0.8 8 -6.8 -8.5z" }),
            React__default['default'].createElement("path", { d: "M2182.5 1811.3 c0 -7 1 -8.8 5 -8.8 2.8 0 5 1.5 5 3.3 0 1.5 0.8 5.5 1.5 8.8 1.3 4.8 0.5 5.5 -5 5.5 -5.8 0 -6.5 -1 -6.5 -8.8z" })),
        React__default['default'].createElement("g", { fill: "#fb40ee" },
            React__default['default'].createElement("path", { d: "M1816.5 4109.5 c-6.8 -10.5 -26.3 -64.8 -35.3 -98.3 -17.5 -64 -32.8 -141 -41.3 -207.5 -5.8 -44 -9.8 -97.8 -11.5 -149.5 -1.3 -41.3 -2.5 -54.3 -4.8 -53.3 -4.5 1.5 -7.8 -48.5 -3.5 -51.3 2.3 -1.3 2.5 -8.3 1.3 -25.8 -1 -15 -0.8 -24 0.8 -24 1.5 0 2 -5 1 -12.5 -0.8 -6.8 -0.5 -12.5 0.8 -12.5 1.3 0 2.3 -9 2.5 -20.3 0 -11 1.3 -21 2.5 -21.8 1.3 -1 2.5 -9 2.5 -18 0.3 -9.3 1.8 -16.5 3.3 -17 1.5 -0.5 2.8 -6 2.8 -12.5 0 -14.5 5 -43 7.5 -43 1 0 2.5 -7.5 3.3 -16.8 1 -9.5 2.8 -17.3 4.3 -17.8 1.3 -0.5 2.5 -4.8 2.5 -9.8 0 -4.8 1.8 -10.3 3.8 -12.3 2 -2.3 3.8 -8.3 3.8 -13.8 0 -5.3 1 -9.8 2.3 -9.8 1 0 2.8 -6 3.5 -13 1 -7.3 2.8 -13.5 4.3 -14 1.3 -0.5 2.5 -3.8 2.5 -7 0 -4.3 4.3 -10 13.5 -18.8 22.3 -20.5 30 -25.8 47.3 -32.3 9.3 -3.3 16.8 -7.5 16.8 -9.3 0 -1.8 2.5 -3.3 5.8 -3.3 9.5 0 16.8 -3 16.8 -6.5 0 -2 2.5 -3.5 5.8 -3.5 9.5 0 16.8 -3 16.8 -6.5 0 -2 2.5 -3.5 6.3 -3.5 7.5 0 31.3 -11.5 31.3 -15 0 -1.5 2.3 -2.5 5 -2.5 2.8 0 5 -1 5 -2.5 0 -1.3 2.3 -2.5 5 -2.5 2.8 0 5 -1 5 -2.5 0 -1.3 2.3 -2.5 5 -2.5 2.8 0 5 -1 5 -2.5 0 -1.3 2.3 -2.5 5 -2.5 2.8 0 5 -1 5 -2.5 0 -1.3 2.3 -2.5 5 -2.5 7 0 40 -16.8 41.8 -21.3 0.8 -2 4 -3.8 7.3 -3.8 3.3 0 7.3 -2.3 9 -5 1.8 -2.8 5.5 -5 8.3 -5 2.8 0 21.3 -10 41.3 -22 48.5 -29.5 55 -33.8 55 -37 0 -1.5 3.5 -3.5 7.5 -4.3 4.5 -1 7.5 -3.3 7.5 -5.5 0 -2 1.8 -3.8 4.3 -3.8 6 0 28.3 -15 28.3 -19 0 -2.3 2.8 -3.5 7.8 -3.5 l8 0 -1.5 20.8 c-5.5 71 -7.3 90.5 -8.8 91.8 -1 0.8 -1.8 10.3 -1.8 21.3 -0.3 26.5 -4 76.3 -6 76.3 -0.8 0 -1 5.3 -0.5 11.5 0.5 6.5 -0.3 12.3 -1.3 13.3 -1.3 0.8 -1.8 9.8 -1 19.8 l1.3 18.5 38.8 -45.5 c21.3 -25.3 40 -47 41.3 -48.5 1.5 -1.5 8.8 -10 16.3 -19 7.5 -9 14.3 -16.8 15 -17.5 0.8 -0.8 7.5 -8.5 15 -17.5 7.5 -9 14.3 -16.8 15 -17.5 0.8 -0.8 7.5 -8.5 15 -17.5 7.5 -9 15 -17.5 16.5 -19 1.5 -1.8 5.5 -6.5 9.3 -11 3.8 -4.3 7.8 -7.3 9 -6.5 1.3 0.8 3 6.8 3.8 13.3 5.3 36.3 21.8 110.3 36.3 163.3 19.3 69.3 38.5 127.8 62 187.5 5.5 14.3 6.5 20.5 7 50.8 0.3 18.8 1.3 35 2.3 36 6.3 6.3 -8.8 40.8 -44.3 102 -28.8 49.5 -73.3 113.8 -78.5 113.8 -1.8 0 -3.3 1.8 -3.3 4 0 3.3 -11.5 20.3 -17.5 26 -0.8 0.8 -5.5 6.5 -10.8 13 -5.3 6.5 -10.8 13.3 -12.5 15 -1.8 1.8 -9.8 10.8 -17.8 20.3 -8 9.3 -16.3 16.8 -18 16.8 -2 0 -3.5 1.8 -3.5 3.8 0 2.3 -2.8 6.8 -6.3 10.3 -5.5 5.5 -6.3 5.8 -6.3 1.5 0 -2.5 -0.5 -5.3 -1.3 -5.8 -0.5 -0.8 -15.5 13 -33 30.3 -17.5 17.3 -41.5 39.8 -53.3 50 -11.5 10.3 -22.5 20 -24.5 21.8 -1.8 1.8 -8.5 7.3 -15 12.5 -6.5 5.3 -13.3 11 -15 12.8 -2 1.8 -7.5 6.3 -12.5 10 -5.3 3.8 -9.8 7.3 -10.5 8 -5.3 5.8 -76.3 56.8 -105 75.5 -69.8 45.3 -159.3 92 -176.3 92 -2 0 -5.3 -2.5 -7.3 -5.5z" }),
            React__default['default'].createElement("path", { d: "M3152 4111.3 c-30.8 -11.5 -102 -50 -152.5 -82.8 -29.3 -19 -72.5 -48.5 -74.5 -51 -0.8 -0.8 -5.3 -4.3 -10 -7.5 -4.8 -3.5 -10.5 -7.5 -12.5 -9.3 -2 -1.5 -16.5 -13 -31.8 -25.3 -41.5 -33 -74.5 -62.3 -116.3 -103.5 -20.5 -20 -22 -21.3 -23.5 -15.8 l-1.5 6 -7.8 -8.3 c-14.5 -14.8 -35.3 -37.5 -49.3 -53.8 -7.5 -8.8 -14.8 -17.3 -16.3 -18.8 -1.3 -1.5 -5.5 -6.8 -9.3 -12 -3.8 -5 -8.3 -10.5 -10 -12.5 -1.8 -1.8 -6.5 -7.8 -10.8 -13.3 -4 -5.5 -8.3 -11 -9.3 -12.5 -7 -8.5 -23.8 -32.3 -37.3 -53.3 -8.8 -13.3 -16.8 -24.5 -17.8 -25 -1.3 -0.5 -2 -2.5 -2 -4.5 0 -2 -1 -3.5 -2 -3.5 -1.3 0 -4 -4.3 -6.3 -9.3 -2.3 -5.3 -5.8 -11.8 -8 -14.5 -2 -2.8 -10.3 -18 -18.5 -33.8 l-14.8 -28.8 0 -26.3 c-0.3 -51.8 4.8 -124.5 8.5 -127 4.5 -3 8.5 -12.3 8.5 -20.3 0 -4 1.3 -7.8 2.5 -8.3 3.3 -1 22.5 -56 22.5 -64.3 0 -9.5 8 -36.3 11.8 -39 1.8 -1.3 4.3 -10.8 5.5 -21 1.3 -10.3 3.5 -19.3 4.8 -20 3.8 -2.5 8 -18.5 10.3 -39.3 1.3 -10.8 3.5 -20 5 -20.5 1.5 -0.5 2.8 -4.8 2.8 -9.5 0 -4.8 2.8 -22.5 6 -39.3 3.5 -16.8 7 -35.8 8 -42.3 0.8 -6.8 2.5 -12 3.8 -12 1.3 0 2.3 -3 2.3 -6.8 l0.3 -7 9 10 c17.8 19.8 27.3 30.3 43.3 48.8 9 10.3 18 20.5 20 22.5 2 2 11 12.3 20 22.5 9 10.3 16.8 19.3 17.5 20 0.8 0.8 9.8 10.8 20 22.5 10.3 11.8 19.3 21.8 20 22.5 0.8 0.8 9.8 10.8 20 22.5 10.3 11.8 22.5 25.3 27 30.3 4.5 5 10 11.3 12 13.8 4.3 5.3 4 1.3 -1.5 -54 -4.3 -43.3 -7.5 -76 -10.3 -102.5 -1.3 -14.5 -3.5 -37 -4.8 -50 -6 -58.8 -6 -62.5 -1.5 -62.5 2.5 0 21.3 11.3 42 25.3 38 25.3 94.8 60.3 105 64.8 3.3 1.3 11.5 5.8 18.3 10 18.3 11 121.3 62.5 125 62.5 1.8 0 4.5 1.5 6 3.5 1.8 2 6.8 4.5 11 5.3 4.5 1 9.8 3.3 11.8 5 2 1.8 7.3 4.3 11.8 5.5 7.3 1.8 26 17.8 66.3 55.8 14 13.3 15 14.8 22 40 28 97.8 42.3 188.8 46.5 295 1.5 36.5 1.3 40.8 -2 38.3 -3.3 -2.8 -4 4.3 -5.5 60 -0.8 34.5 -2.8 73.3 -4 85.5 -1.3 12.5 -3.5 33.8 -5 47.5 -5 45.8 -12 87.5 -27.8 162.5 -9.3 44 -34.8 127 -46.8 151.3 -7.5 15.3 -11.3 16.8 -26 11.3z" }),
            React__default['default'].createElement("path", { d: "M1396.8 3277 c2.8 -3.3 -3.5 -4 -55 -5.5 -31.8 -1 -68 -2.8 -80.5 -4 -12.3 -1.3 -33.8 -3.5 -47.5 -5 -23.8 -2.5 -35 -4 -73 -10.3 -78.3 -12.3 -168.3 -35.5 -225 -57.5 -30.8 -12 -32.5 -13.8 -28.3 -28 4 -13.8 29.5 -66.3 47 -96.5 13.3 -23.3 50.3 -82.8 53 -85.3 0.8 -0.8 8.5 -12 17.5 -25 8.8 -13 16.8 -24.3 17.5 -25 0.8 -0.8 4.3 -5.3 7.5 -10 3.5 -4.8 7.5 -10.5 9.3 -12.5 1.5 -2 13 -16.5 25.3 -31.8 35 -44.3 64 -76.5 108.8 -121.3 23.3 -23.3 26 -27 20.5 -27 -3.5 0 -6.3 -0.5 -6.3 -1.3 0 -2.3 20.3 -21 52 -48.5 8.5 -7.5 15.5 -15 15.5 -17 0 -1.8 2 -3.3 4.5 -3.3 5.3 0 20.5 -12.8 20.5 -17 0 -1.8 1.8 -3 4 -3 5.8 0 18.5 -9.8 18.5 -14 0 -2 2 -3.5 4.5 -3.5 2.3 0 11.8 -5.3 20.8 -11.8 9 -6.8 25 -17.5 35.5 -24.5 10.5 -6.8 19.3 -14 19.3 -15.5 0 -1.8 1.3 -3.3 2.8 -3.3 1.5 0 4.3 -1.8 6.3 -3.8 2.3 -2 6.3 -3.8 9.3 -3.8 6.3 -0.3 14.3 -5.5 14.3 -9.5 0 -1.8 3 -3.5 7 -4.3 7.5 -1.8 15.5 -5.5 52.8 -24.8 28.8 -15.3 31.5 -15.5 82.8 -12.8 55.8 3 65.8 4.5 77.8 10.3 6.5 3.3 13.8 6 16.5 6 2.5 0 5.8 1 7 2.3 3.3 3 57.5 20.8 81.3 26.5 10.3 2.5 21 6 23.8 7.8 2.8 1.8 12.3 4.3 20.8 5.8 8.8 1.5 17.3 3.5 18.8 4.8 4 3.3 34 10.5 43.3 10.5 4 0 10.5 1.8 14.5 3.8 3.8 2 9.8 3.8 13 3.8 3.5 0 20 2.8 36.8 6 16.8 3.5 35.8 7 42.5 8 6.5 0.8 12.5 2.5 13.3 3.8 0.8 1.3 3.5 2.3 6.3 2.3 2.5 0 4.8 0.8 4.8 2 0 1 -10.5 9.8 -23.3 19.3 -12.5 9.8 -24.8 19 -26.8 20.5 -2 1.8 -15.5 12.3 -30 23.3 -14.5 11 -29 22.5 -32.5 25 -3.3 2.8 -8 5 -10.3 5 -2.5 0 -4.8 1.8 -5.3 3.8 -1 5.3 -77 63.8 -82.5 63.8 -2.5 0 -4.5 1.5 -4.5 3.3 0 3.5 -2.3 5.5 -21.8 20.3 -7.3 5.5 -12.8 10.5 -12 11 0.5 0.5 18.3 -0.3 39.3 -1.8 46.3 -3.3 97.5 -6.8 159.5 -10.5 25.5 -1.5 57.3 -3.5 70.8 -4.5 22.3 -1.5 24.3 -1.3 24.3 2.8 0 2.5 -12.3 22.8 -27.3 45 -24.8 37.3 -54.5 85.5 -71.3 115.3 -3.5 6.5 -9.3 16.5 -12.5 22.5 -10.8 19.5 -42.8 82.8 -57.5 114.3 -12.8 27.3 -17.5 34.3 -36 54.3 -11.8 12.8 -22.3 23.3 -23.5 23.3 -3.3 0 -9.5 6.5 -9.5 10 0 1.5 -3.8 6.5 -8 11 -4.5 4.5 -15.8 16 -24.8 25.8 l-16.5 17.5 -31 7.8 c-90 22.5 -168.5 33.5 -264.8 37 -41 1.5 -46 1.3 -43.3 -2z" }),
            React__default['default'].createElement("path", { d: "M3543.8 3278.3 c-53.8 -1.8 -124.5 -10.3 -185 -22.3 -32.8 -6.5 -79 -17.3 -88.8 -20.8 -3.5 -1.3 -13.3 -4.3 -22 -6.8 -14.3 -4 -17.3 -6.3 -30 -21 -7.8 -9 -16 -18 -18 -20 -18.8 -18.3 -44.8 -50.5 -47.3 -58 -1.8 -5.3 -4 -9.5 -5 -9.5 -1 0 -3 -5 -4.8 -11.3 -1.8 -6.3 -4 -11.3 -5.5 -11.3 -1.3 0 -2.5 -1.8 -2.5 -3.8 0 -4.5 -13 -32.3 -15.5 -33.3 -1.3 -0.5 -2 -3 -2 -5.8 0 -2.5 -1 -4.8 -2.5 -4.8 -1.3 0 -2.5 -2.3 -2.5 -5 0 -2.8 -1 -5 -2.5 -5 -1.3 0 -2.5 -2.3 -2.5 -5 0 -2.8 -1 -5 -2.5 -5 -1.3 0 -2.5 -2.3 -2.5 -4.8 0 -2.8 -0.8 -5.3 -1.8 -5.8 -1.3 -0.3 -7 -10.8 -13 -23.3 -6.3 -12.3 -12 -23 -12.8 -23.8 -1 -0.8 -3.3 -5 -5.3 -9.3 -2 -4.5 -4.3 -8.3 -5.3 -8.3 -1.3 0 -2 -1.3 -2 -3 0 -4.8 -53.8 -93 -61.8 -101.5 -1.8 -1.8 -3.3 -4.3 -3.3 -5.5 0 -1.3 -1.5 -3.8 -3.3 -5.5 -1.8 -1.8 -7.5 -10.3 -13 -18.8 -5.5 -8.8 -10.8 -15.8 -11.8 -15.8 -1.3 0 -2 -3.3 -2 -7.5 0 -7.5 0.3 -7.5 13.3 -7.5 7 0 22.5 1 34.3 2.3 11.8 1.5 37 3.8 56.3 5.3 19.3 1.5 46.3 3.8 60 5 13.8 1.3 39.8 3.5 57.5 5 18 1.5 43.8 3.8 57.3 5.3 13.8 1.3 25.3 1.8 25.8 1.3 1 -0.8 -11.5 -10.8 -52.8 -42.3 -4 -3 -28.3 -21.8 -54 -41.8 -25.8 -20 -50.5 -39 -55 -42.5 -43 -32.8 -91.5 -71 -92 -72.8 -0.5 -1.3 2 -2.3 5.5 -2.3 3.5 0 6.5 -1 6.5 -2.3 0 -1.3 5.3 -3 12 -3.8 6.5 -1 25.5 -4.5 42.3 -8 16.8 -3.3 34.5 -6 39.5 -6 4.8 0 8.8 -1 8.8 -2.5 0 -1.3 4.5 -2.5 10 -2.5 12 0 48 -9.3 50.3 -12.8 0.8 -1.5 9.8 -3.8 20 -5 10.3 -1.3 19.8 -3.8 21 -5.5 2.8 -3.8 29.5 -11.8 39 -11.8 8.3 0 63.3 -19.3 64.3 -22.5 0.5 -1.3 4.3 -2.5 8.3 -2.5 8 0 17.3 -4 20.3 -8.5 1.8 -2.8 31.5 -5.5 78.3 -7.5 53.3 -2.3 51.5 -2.5 82 12.8 46.5 23.5 52.5 26.8 63 34 5.5 3.8 10.8 6.8 11.5 6.8 2.5 0 99.3 66 102.3 69.8 0.8 1 9.3 7.8 18.8 15.3 32 24.8 91.3 77.3 91.3 81 0 0.8 -2.5 1.5 -5.8 1.5 -4.8 0 0 6 25.8 32 17.3 17.5 39.8 41.3 50 53 10.3 11.8 19.3 21.8 20 22.5 0.8 0.8 6.3 7.5 12.5 15 6.3 7.5 12.8 15.3 14.5 17 1.8 2 6.3 7.5 10 12.5 3.8 5.3 7.3 9.8 8 10.5 4.5 4 52.5 70 71.8 98.8 45.5 67.8 99.5 173 94.8 185 -3.3 9 -69 32 -141.5 50 -47.5 11.8 -117 24.8 -168.8 31.3 -44.3 5.8 -97.8 9.8 -149.5 11.5 -45.3 1.5 -53.8 2.3 -51.5 5 3 3.8 -1.3 3.8 -59 1.8z" }),
            React__default['default'].createElement("path", { d: "M1720 3271.8 c0 -0.5 4 -4.5 8.8 -9 l8.8 -7.8 0 8.8 c0 8.3 -0.5 8.8 -8.8 8.8 -4.8 0 -8.8 -0.5 -8.8 -0.8z" }),
            React__default['default'].createElement("path", { d: "M3052.8 3026.3 l-7.8 -8.8 8.8 0 c8.3 0 8.8 0.5 8.8 8.8 0 4.8 -0.5 8.8 -0.8 8.8 -0.5 0 -4.5 -4 -9 -8.8z" }),
            React__default['default'].createElement("path", { d: "M3702.5 2506.3 c0 -2 1.8 -3.8 3.8 -3.8 2 0 3.8 -1 3.8 -2.5 0 -1.3 -1.8 -2.5 -3.8 -2.5 -2 0 -3.8 -1.8 -3.8 -3.8 0 -2.8 2.8 -3.8 10 -3.8 l10 0 0 10 0 10 -10 0 c-7.3 0 -10 -1 -10 -3.8z" }),
            React__default['default'].createElement("path", { d: "M1275 2498.8 c0 -8.3 0.5 -8.8 8.8 -8.8 6 0 8.8 1.3 8.8 3.8 0 2 -1.8 3.8 -3.8 3.8 -2 0 -3.8 1.3 -3.8 2.5 0 1.5 1.8 2.5 3.8 2.5 2 0 3.8 1.3 3.8 2.5 0 1.5 -4 2.5 -8.8 2.5 -8.3 0 -8.8 -0.5 -8.8 -8.8z" }),
            React__default['default'].createElement("path", { d: "M1474.5 2475.8 c-36 -18 -81 -44 -114.5 -66.5 -23.3 -15.5 -84.3 -60.3 -87.5 -64 -0.8 -1 -7.5 -6.5 -15 -12.8 -21 -17.3 -46.8 -39.8 -64.5 -56.8 -5.3 -5.3 -5.3 -5.8 -1 -5.8 2.5 0 5.3 -0.5 6 -1.3 0.5 -0.8 -13 -15.5 -30.5 -33 -17.3 -17.8 -39.8 -41.5 -50 -53.3 -10.3 -11.5 -20 -22.5 -21.8 -24.5 -1.8 -1.8 -7.3 -8.5 -12.5 -15 -5.3 -6.5 -11 -13.3 -12.8 -15 -1.8 -2 -6.3 -7.5 -10 -12.5 -3.8 -5.3 -7.3 -9.8 -8 -10.5 -4.5 -4 -52.5 -70 -71.8 -98.8 -45.5 -67.8 -99.5 -173 -94.8 -185 3.3 -9 69 -32 141.5 -50 47.5 -11.8 117 -24.8 168.8 -31.3 44.3 -5.8 97.8 -9.8 149.5 -11.5 42.5 -1.3 53.8 -2.5 51.8 -4.8 -3.8 -4.5 43.5 -8 49 -3.8 2.5 2.3 9.8 2.8 25.8 1.5 13.5 -1 23 -0.8 23.8 0.8 1 1.3 5.5 1.8 10.3 1 4.8 -0.8 10.5 -0.5 13 0.5 2.5 1 12.5 2.3 22.3 2.5 10 0.3 19.3 1.5 20.8 2.3 1.5 1 9.8 2.3 18 2.8 8.5 0.5 16.5 2 18 3.5 1.5 1.5 7.5 2.8 13.3 2.8 12 0 35 4 42.3 7.3 2.8 1.3 11.5 3.3 19.3 4 8 1 15 2.8 15.8 4 1 1.3 4.8 2.3 8.5 2.3 4 0 10.5 1.8 14.3 3.8 4 2 10.3 3.8 14 3.8 3.8 0 7.3 1 8 2.3 0.8 1 7 2.8 13.8 3.8 7 1 13.3 2.8 14 4 0.8 1.5 4 2.5 7.3 2.5 9.3 0 62.3 58.3 71.3 78.3 2.8 6.5 7.3 16.5 10 22.5 2.5 5.8 7.3 16.3 10.3 23 11.3 25 54.8 110.8 70.5 138.8 33.3 59 69.8 116.8 99.8 157.8 6.8 9.3 12.3 18.5 12.3 21 0 5 3.5 5 -63.8 -1.3 -15 -1.5 -42 -3.8 -60 -5.3 -17.8 -1.5 -33.3 -3.3 -34.3 -3.8 -1 -0.8 -11.3 -1.5 -22.5 -2 -27.3 -1.3 -84.8 -6.3 -89.5 -8 -2 -0.8 -12.3 -1.5 -22.5 -1.8 l-19 -0.5 91.5 76 c50.3 42 91.8 76.8 92.5 77.5 0.8 1 7.5 6.5 15 12.8 7.5 6.3 17.3 14.3 21.3 18 4.3 4 8.3 7 9.5 7 1 0 1.8 1 1.8 2.3 0 1.3 -4.8 3 -10.5 4 -12.8 2 -56.8 10.5 -70.8 13.8 -90.8 21 -167.5 43.5 -246.3 72.5 -18.3 6.8 -24.8 7.8 -45 7.8 -46.5 0 -69.5 1 -71.5 3 -4.5 4.5 -17.5 0.8 -44 -12.5z" }),
            React__default['default'].createElement("path", { d: "M3474.5 2488.5 c-1.5 -1.5 -47.8 -3.5 -73.3 -3.5 -10.8 0.3 -21 -2 -36.3 -7.5 -80.3 -29.3 -155.5 -51.5 -246.3 -72.5 -17 -4 -59.3 -12.3 -72 -14 -6.5 -0.8 -12.3 -2.5 -13 -3.5 -0.8 -1.3 5.8 -8 14.5 -15.3 8.5 -7.5 16 -14 16.8 -14.8 0.8 -0.8 7.5 -6.3 15 -12.5 7.5 -6.3 14.3 -11.8 15 -12.5 0.8 -0.8 8.5 -7.5 17.5 -15 9 -7.5 16.8 -14.3 17.5 -15 0.8 -0.8 6.5 -5.8 13.3 -11 6.5 -5.3 11.8 -11.3 11.8 -13 0 -2 1.8 -3.5 4 -3.5 3 0 28.3 -19.3 36 -27.5 0.8 -0.8 15.3 -13.3 32.5 -27.5 17.3 -14.5 33.5 -28.3 36.3 -31 5 -4.5 4.8 -4.5 -6 -3 -6.3 1 -22.5 2.8 -36.3 4.3 -64.5 6.5 -98.5 10 -145.3 15.3 -15 1.8 -35.3 3 -45 3.3 -9.5 0 -18.3 0.8 -19 1.8 -0.8 1.3 -10 2.8 -20.5 3.5 l-19.3 1.8 0 -9.3 c0 -5 1.3 -9 2.5 -9 1.5 0 2.5 -1.8 2.5 -3.8 0 -2 1.5 -3.8 3.5 -3.8 4 0 19 -22.3 19 -28.3 0 -2.5 1.8 -4.3 3.8 -4.3 2.3 0 4.5 -3 5.5 -7.5 0.8 -4 2.8 -7.5 4.3 -7.5 3.3 0 7.5 -6.5 37 -55 12 -20 22 -38.5 22 -41.3 0 -2.8 2.3 -6.5 5 -8.3 2.8 -1.8 5 -5.8 5 -9 0 -3.3 1.8 -6.5 3.8 -7.3 4.5 -1.8 21.3 -34.8 21.3 -41.8 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1.3 -5 2.5 -5 1.5 0 2.5 -2.3 2.5 -5 0 -2.8 1 -5 2.5 -5 3.5 0 15 -23.8 15 -31.3 0 -3.8 1.5 -6.3 3.5 -6.3 3.5 0 6.5 -7.3 6.5 -16.8 0 -3.3 1.5 -5.8 3.5 -5.8 4.3 0 7.3 -10.5 3.8 -12.8 -1.5 -1 3.8 -8.5 12.5 -17.8 8.5 -9 15.3 -17.8 15.3 -19.3 0 -3.8 6.3 -10.3 9.8 -10.3 3.5 0 17.8 -18 16.3 -20.5 -0.8 -1 1.3 -3 4.5 -4.3 3.3 -1.3 10 -6.8 15.3 -12.5 7 -7.8 11.3 -10.3 17 -10.3 10.3 0 34.8 -7.3 34.8 -10.3 0 -1.3 4.5 -2.3 10 -2.3 5.5 0 10 -1 10 -2.3 0 -1 7.5 -2.8 16.5 -3.5 9.3 -0.8 17.3 -2.3 18.3 -3.8 2 -3.3 27.5 -8 42 -8 6 0 10.8 -1 10.8 -2.5 0 -1.5 7.5 -2.5 17.3 -2.5 10.8 0 17.8 -1 18.3 -2.8 0.8 -2 11.8 -3.3 32 -3.8 19.8 -0.5 31.5 -2 32.8 -3.8 1.3 -2 8.3 -2.3 24.8 -1 16.8 1.3 23.5 1 25 -1 1.3 -2.3 9.8 -2.5 30.8 -1.3 22.3 1.3 28.8 2.5 26.8 4.8 -2 2.3 11 3.5 55.8 4.8 31.8 1 68.3 2.8 80.5 4 12.5 1.3 33.8 3.5 47.5 5 44 4.8 97 13.8 162.5 27.8 59 12.5 156.3 44.5 164 53.8 4.3 5.3 0.3 17.8 -18.3 55.8 -17.3 35.5 -41.3 77.5 -66 115.8 -19 29.3 -48.5 72.5 -51 74.5 -0.8 0.8 -4.3 5.3 -7.5 10 -3.5 4.8 -7.5 10.5 -9.3 12.5 -1.5 2 -13 16.5 -25.3 31.8 -34.8 43.8 -63.3 75.8 -108.5 121.3 -15 15 -27 27.8 -27 28.3 0 0.8 3 1.3 6.5 1.3 5.8 0 6 0.5 2.5 3.8 -2 2 -5.5 3.8 -7.5 3.8 -2.3 0 -4 1.5 -4 3.5 0 2 -8.8 11.3 -19.3 20.8 -10.8 9.3 -20 17.5 -20.8 18.3 -7.5 7.8 -27.8 22.5 -31 22.5 -2.3 0 -4 1.5 -4 3.3 0 3.5 -50.3 42.3 -82.5 63.5 -33.8 22.3 -70.8 43.8 -106.8 62.5 -28.3 14.5 -38 18.3 -46.5 18.3 -6 0 -11.5 -0.8 -12.3 -1.5z" }),
            React__default['default'].createElement("path", { d: "M2905 2045.3 c0 -7.3 0.8 -7.8 9 -7.8 9.8 0 9.5 2.3 -1.5 10 l-7.5 5.3 0 -7.5z" }),
            React__default['default'].createElement("path", { d: "M3007.5 2027.5 c7.8 -11 10 -11.3 10 -1.5 0 8.3 -0.5 9 -7.8 9 l-7.5 0 5.3 -7.5z" }),
            React__default['default'].createElement("path", { d: "M2202 2025.3 c-0.3 -1 -19.3 -14.5 -42 -29.5 -85.8 -57.3 -152.5 -94.5 -266.3 -148.5 -19.8 -9.3 -28.8 -15.3 -42.8 -28.8 -9.5 -9.5 -30.3 -29 -45.5 -43.3 -15.5 -14.3 -28 -27.8 -28 -30 0 -7 -8.5 -37.8 -10.5 -37.8 -1 0 -2 -4.5 -2 -10 0 -5.5 -1 -10 -2.3 -10 -1 0 -3 -7.8 -3.8 -17.5 -1 -9.5 -2.8 -17.5 -4 -17.5 -2.5 0 -7.5 -27.8 -7.5 -42 0 -5.8 -1 -10.5 -2.5 -10.5 -1.5 0 -2.5 -7.5 -2.5 -17.3 0 -10.3 -1 -17.8 -2.8 -18.3 -1.8 -0.5 -3 -12.5 -3.8 -32 -0.8 -18.5 -2.3 -31.5 -3.8 -32.3 -1.8 -0.5 -2 -8.8 -0.8 -24.5 1.3 -17.5 1 -24.3 -1.3 -25.8 -2.3 -1.3 -2.5 -7.5 -1.3 -23.5 1.3 -16.3 2.5 -21 4.8 -19 2.3 2 3.3 -12 4.8 -60.8 1.5 -59.3 2.8 -78 9.3 -133 5 -44.5 14.8 -105 22 -137.5 1.3 -5.5 3.5 -15.5 5 -22.5 12.8 -61 44.8 -158.5 54.3 -166.5 5.3 -4.3 17.8 -0.3 55.8 18.3 35.5 17.3 77.5 41.3 115.8 66 29.3 19 72.5 48.5 74.5 51 0.8 0.8 5.3 4.3 10 7.5 4.8 3.5 10.5 7.5 12.5 9.3 2 1.5 16.5 13 31.8 25.3 41.5 33 74.5 62.3 116.3 103.5 19 18.8 22 20.8 22 15.5 0 -3.3 0.5 -6 1.3 -6 2 0 20.3 18.8 41.3 42.5 10.3 11.8 19.3 21.8 20 22.5 6.3 6.3 30.8 36.8 49.3 61.3 39.5 52.5 68.3 97.5 95.5 149.3 l15.5 29.3 -1 29.5 c-3.3 101.5 -3.3 100.8 -11.8 123.3 -23 62 -47 141 -62.3 203.8 -14.3 58.3 -17.5 74.3 -25.5 121 -4.3 26.5 -6 32.8 -8 30 -0.5 -0.5 -32.8 -41 -71.8 -89.8 -39 -48.8 -71.5 -89.3 -72.5 -90 -0.8 -0.8 -5.3 -6.3 -10 -12.5 -4.8 -6.3 -9.3 -11.8 -10 -12.5 -0.8 -0.8 -5.3 -6.3 -10 -12.5 -4.8 -6.3 -11.3 -14 -14.5 -17.5 l-5.5 -6.3 1.8 22.5 c1 12.5 2 26.5 2 31.3 0 4.8 0.8 9.3 1.8 10 0.8 0.8 2 11.8 2.5 24.5 0.3 12.5 1.5 23 2.3 23 1.8 0 5.5 41.5 5.8 62.5 0.3 7.5 1 14.3 2 15.3 1 0.8 2.3 11.3 2.5 23.8 0.5 12.3 1.5 22.8 2.5 23.5 0.8 0.8 2.3 10.5 3.3 22 l2 20.5 -6.5 0 c-3.5 0 -6.8 -1 -7.3 -2.3z" }),
            React__default['default'].createElement("path", { d: "M2790 2019.3 c0 -1.8 1 -9.5 2.3 -17 1.3 -7.5 3.5 -23.5 5.3 -36 1.5 -12.3 5 -38.3 7.5 -57.5 2.8 -19.3 6 -44 7.5 -55 1.5 -11 3.8 -27.3 5 -36.3 1.3 -9 3.5 -25.8 5 -37.5 1.5 -11.8 3.3 -24.5 4 -28.8 l1 -7.5 -5.5 6.3 c-3.3 3.5 -17.5 20.3 -32 37.5 -14.3 17.3 -26.8 31.8 -27.5 32.5 -0.8 0.8 -6.3 7.5 -12.5 15 -6.3 7.5 -11.8 14.3 -12.5 15 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -6.3 7.5 -12.5 15 -19 23.3 -23.3 27.5 -26.8 27.5 -2 0 -2.8 1.3 -2 2.5 2 3.3 -20.5 30 -25.3 30 -1.8 0 -2.8 1.5 -2.3 3.3 0.8 1.5 -2.5 7 -6.8 11.8 l-8.3 8.5 -0.8 -9.3 c-0.5 -5 -1.8 -9.3 -2.8 -9.3 -1.3 0 -3 -5.3 -3.8 -11.8 -1 -6.8 -4.5 -25.8 -8 -42.5 -3.3 -16.8 -6 -34.5 -6 -39.3 0 -4.8 -1.3 -9 -2.5 -9.5 -1.5 -0.5 -3.8 -7.5 -4.8 -15.8 -3 -21.3 -8.5 -43.8 -10.8 -43.8 -1 0 -2.5 -4.3 -3.3 -9.3 -3 -18.5 -6.8 -33.3 -8.5 -33.3 -1 0 -3.8 -8.3 -6.3 -18 -5.8 -24.8 -24.8 -83 -27 -84 -1.3 -0.5 -2 -2.8 -2 -5 0 -5.8 -5.8 -21.3 -9.3 -25 -1.8 -1.8 -3.3 -5.5 -3.3 -8 0 -2.8 -2 -10.3 -4.8 -16.8 -4.3 -11.3 -5.8 -23.5 -9 -79.3 l-1.5 -22.3 11.5 -21.8 c6.3 -12.3 11.3 -24.3 11.3 -27 0 -2.8 1.8 -5.5 3.8 -6.5 4 -1.5 10 -13.5 12.5 -24.5 0.8 -4 2.8 -7 4.5 -7 4 0 11.8 -13 11.8 -19.8 0 -3 1.5 -5.3 3.3 -5.3 1.5 0 11 -12 20.5 -26.8 9.8 -14.8 28 -40.5 40.8 -57.5 12.5 -17 23 -32.5 23 -34.5 0 -2 1.5 -3.8 3.3 -3.8 4 0 21.8 -21 21.8 -25.5 0 -1.8 2.5 -4.5 5.8 -5.8 3 -1.5 5.8 -5 6.3 -8.3 0.5 -3.3 2.8 -6.5 5 -7.3 2.3 -0.8 11.3 -8.8 20 -17.5 14.3 -15 15.5 -15.8 15.5 -9.8 0 3.5 0.3 6.5 0.8 6.5 0.5 0 15.5 -14.5 33.3 -32 17.8 -17.5 41.8 -40.3 53.5 -50.5 11.5 -10.3 22.5 -20 24.5 -21.8 1.8 -1.8 8.5 -7.3 15 -12.5 6.5 -5.3 13.3 -11 15 -12.8 2 -1.8 7.5 -6.3 12.5 -10 5.3 -3.8 9.8 -7.3 10.5 -8 5.3 -5.8 76.3 -56.8 105 -75.5 77.3 -50 166.8 -95.8 178.8 -91 9 3.3 32 69 50 141.5 11.8 47.5 24.8 117 31.3 168.8 5.8 44 9.8 97.8 11.5 149.5 1.5 46.8 2.3 54.3 5.5 53 3.3 -1.3 3.5 4.3 2 40.5 -3 76 -9.8 135.3 -23 202 -6.5 32.8 -17.3 79 -20.8 88.8 -1.3 3.5 -3.8 11.8 -5.8 18.5 -3.3 11.8 -11.5 21.5 -18.5 21.5 -2 0 -3.5 1.5 -3.5 3.3 0 4 -18.5 21.8 -22.5 21.8 -3.5 0 -10 6.3 -10 9.5 0 6.8 -25.8 24.3 -53.8 36.5 -95.3 41.8 -191.8 95 -280.8 154.3 -38.3 25.8 -50.5 31.5 -50.5 24z" }),
            React__default['default'].createElement("path", { d: "M2526.5 1877 c-2.5 -9.5 -1.8 -12 3.5 -12 4 0 5 1.8 5 8.8 0 10 -6 12.3 -8.5 3.3z" })),
        React__default['default'].createElement("g", { fill: "#fb9ff5" },
            React__default['default'].createElement("path", { d: "M2496.5 4748.8 c-5.8 -5.8 -32.8 -62.5 -46 -96.3 -26.5 -67.8 -44 -120.3 -69.3 -206.3 -13.3 -44.5 -35.8 -132.8 -46.3 -181.3 -9.3 -42.3 -26 -130 -32.3 -168.8 -10.3 -61.5 -9.8 -59.3 -12.8 -81.3 -7 -56.3 -9.8 -79 -12.5 -105 -1.5 -15.8 -3.8 -39.5 -5 -52.5 -3.8 -36 -3.8 -60.8 -0.5 -62 1.8 -0.5 3 -3 3 -5.8 0 -2.5 1.5 -4.8 3.5 -4.8 1.8 0 10 -7.5 18 -16.8 8 -9.5 16 -18.5 17.8 -20.3 1.8 -1.8 7.3 -8.5 12.5 -15 5.3 -6.5 10 -12.3 10.8 -13 6 -5.8 17.5 -22.8 17.5 -26 0 -2.3 1.5 -4 3.3 -4 3 0 22.8 -26.3 48.5 -65 19 -28.5 46.3 -76.5 64.3 -112.5 8.8 -17.8 16.5 -31.5 17.5 -30.8 0.8 1 1.5 12.3 1.5 25.5 0 13 1 44.8 2.5 70.3 1.3 25.5 3 66.3 4 90.8 0.8 24.8 2.5 43.8 3.5 42.5 1.3 -1 3.5 -35.8 5 -77 1.8 -41.3 3.8 -88.8 4.5 -105.5 l1.8 -30.5 17.5 34.3 c9.8 18.8 18.3 34.8 19.5 35 1 0.5 1.3 2 0.3 3.3 -0.8 1.3 -0.3 2.3 1 2.3 1.3 0 4.3 4.5 7 10 2.5 5.5 5.8 10 6.8 10 1.3 0 1.3 1.3 0.5 2.5 -0.8 1.5 -0.3 2.5 1 2.5 1.5 0 2.8 1.5 2.8 3.5 0 2 0.8 4 2 4.5 1 0.5 9 11.8 17.8 25 13.5 21 30.3 44.8 37.3 53.3 1 1.5 5.3 7 9.3 12.5 4.3 5.5 9 11.5 10.8 13.3 1.8 2 6.3 7.5 10 12.5 3.8 5.3 8 10.5 9.3 12 1.5 1.5 8.8 10 16.3 18.8 16.3 19 39.3 44 46.3 50.5 4 3.8 4.8 7.3 4.3 21.3 -0.8 23.8 -7 88 -13.3 139.3 -10.8 88.8 -31.5 213.5 -45 271.3 -1.5 6.3 -3.5 15.8 -4.8 21.3 -36.5 162 -82.3 312.5 -129.3 423.8 -13.8 32.5 -27 59.3 -33 67 -4.3 5.8 -4.5 5.8 -8.8 1.8z" }),
            React__default['default'].createElement("path", { d: "M907.5 4088 c0 -13 19.8 -65.8 50.5 -135.5 7 -15.5 57.3 -116.3 66.5 -132.8 4 -7.5 13.3 -24.3 20.5 -37.3 15.3 -27.8 43.8 -76.8 58.3 -100 5.5 -9 15.3 -24.5 21.5 -34.8 22.8 -36.8 94 -142.8 112.5 -167.8 2.8 -3.5 16.8 -22.5 31.8 -42.5 14.8 -20 27.5 -36.8 28.5 -37.5 0.8 -0.8 4.3 -5.3 7.5 -10 3.5 -4.8 7.5 -10.5 9.3 -12.5 1.5 -2 10.5 -13.3 19.8 -25 9.5 -11.8 17.5 -21.8 18.5 -22.5 0.8 -0.8 6.3 -7.5 12.5 -15 6.3 -7.5 12.5 -15.3 14.3 -17 1.8 -1.8 7 -8 12 -14 l8.8 -11 39.5 -1.5 c74 -3.3 124.8 -9.3 195.5 -23 27.5 -5.5 95.5 -22 104.8 -25.5 8.5 -3.3 -1.3 9.5 -36 46 -20.5 22 -44.8 47.5 -53.8 57.3 -9 9.5 -18 19 -20 21.3 -2 2 -6 6.5 -8.8 10 -3.8 4.8 7 -3.8 18.8 -15 0.8 -0.8 10.8 -9.8 22.5 -20 11.8 -10.3 21.8 -19.3 22.5 -20 0.8 -0.8 10.8 -9.8 22.5 -20 11.8 -10.3 23 -20.5 25 -22.5 2 -2 13.3 -12.3 25 -22.5 11.8 -10.3 24.5 -21.8 28.8 -25.5 4 -3.8 8 -6.3 8.8 -5.5 0.8 0.8 -0.5 2.8 -2.5 4.3 -2 1.8 -3.5 5.5 -3 8.8 0.5 3 -0.8 6 -2.8 7 -2.3 0.8 -3 3.5 -2.3 7.3 0.8 4 -0.3 6.8 -2.8 7.8 -2.3 0.8 -3.3 3.3 -2.5 6.3 0.8 2.5 0.3 4.8 -0.8 4.8 -1.3 0 -2.5 3.5 -2.5 8 -0.3 4.5 -1.5 8.5 -3.3 9 -1.5 0.5 -2.3 2 -1.5 3.3 2 2.8 -3.3 22.3 -6 22.3 -1 0 -1.5 3.3 -0.8 7.3 0.5 4.3 -0.5 8.5 -2.5 10.5 -2 1.8 -3 5.8 -2.5 9 0.5 3.3 0 5.8 -1 5.8 -1.3 0 -2.5 4.8 -2.8 10.5 -0.3 5.8 -1.5 11 -2.8 11.5 -1.3 0.3 -2 3 -1.3 5.5 0.8 2.8 0.3 5 -1 5 -1.3 0 -2 3.5 -1.3 7.5 0.5 4.3 0 7.5 -1 7.5 -1.3 0 -2.5 6.5 -2.8 14.5 -0.5 7.8 -1.8 14.5 -2.8 15 -1.3 0.3 -1.8 3.5 -1 6.8 0.5 3.5 0 6.3 -1 6.3 -1.3 0 -2 5 -1.5 11.3 0.5 6.3 0 11.3 -1.3 11.3 -1.3 0 -2 3.5 -1.3 7.5 0.5 4.3 0 7.5 -1 7.5 -1.3 0 -1.8 6.3 -1.5 13.8 0.5 7.5 0 13.8 -1.3 13.8 -1 0 -1.5 5.5 -1.3 12.5 0.5 6.8 0 12.5 -1.3 12.5 -1 0 -1.8 11.3 -1.3 25 0.5 13.8 -0.3 25 -1.5 25 -1.3 0 -1.8 8.8 -1 19.8 l1 19.8 -9.3 8.5 c-5.3 4.5 -10.8 9.5 -12.3 10.8 -1.5 1.5 -9 7.5 -16.5 13.8 -7.5 6.3 -14.3 11.8 -15 12.5 -3 3 -53 43 -72.5 57.5 -11.8 9 -21.8 16.8 -22.5 17.5 -0.8 0.8 -5.3 4.3 -10 7.5 -4.8 3.5 -10.5 7.5 -12.5 9.3 -27.3 22.3 -122.3 87.5 -175 120.8 -11.8 7.3 -26.8 16.8 -33.8 21.3 -35.8 22.8 -111.8 67.3 -150 87.8 -12.3 6.5 -31.5 16.8 -42.5 22.8 -29.3 15.8 -127 63.3 -130 63.3 -0.8 0 -7 2.8 -14.3 6 -32.5 14.8 -78.8 31.8 -96.3 35.3 -7 1.5 -8.3 1 -8.3 -3.3z" }),
            React__default['default'].createElement("path", { d: "M4053.8 4082.8 c-27 -9.3 -54.3 -20.3 -86.3 -34.3 -21.3 -9.5 -139 -68.3 -160 -80 -9 -4.8 -22.5 -12.3 -30 -16.5 -7.5 -4 -14.8 -8.3 -16.3 -9.5 -1.3 -1 -8.8 -5.3 -16.3 -9.3 -20 -10.8 -86 -50.8 -111.8 -67.3 -12 -8 -33.3 -21.5 -47 -30.5 -13.8 -8.8 -36.3 -24 -50 -33.8 -13.8 -9.8 -36.3 -25.5 -50 -35.3 -13.8 -9.8 -25.5 -18.3 -26.3 -19 -0.8 -0.8 -5.3 -4.3 -10 -7.5 -4.8 -3.3 -9.3 -6.8 -10 -7.5 -0.8 -0.8 -5.3 -4.3 -10 -7.5 -4.8 -3.3 -9.3 -6.8 -10 -7.5 -0.8 -0.8 -10.8 -8.5 -22.5 -17.5 -11.8 -8.8 -21.8 -16.8 -22.5 -17.5 -0.8 -0.8 -5.3 -4.3 -10.5 -8 -5 -3.8 -10.5 -8.3 -12.5 -10 -1.8 -1.8 -12.3 -10.5 -23.3 -19.5 -11 -8.8 -30.3 -25 -42.8 -35.8 l-23 -19.5 -1.5 -33 c-5.8 -117 -27 -237.8 -57.3 -324.3 -2.3 -6 -3.8 -11.3 -3.5 -11.5 0.3 -0.5 7.3 5.8 15.5 13.5 8.5 7.8 28 26 43.8 40.5 15.8 14.5 30.5 28 32.5 30 2 2 16.8 15.5 32.5 30 15.8 14.5 30.8 28.5 33.3 31 2.3 2.8 4.8 4.3 5.5 3.8 0.5 -0.8 -4.3 -6.8 -10.8 -13.8 -6.5 -6.8 -21.3 -23 -33 -36 -11.8 -13 -23 -25.5 -25 -27.5 -2 -2 -13.3 -14.5 -25 -27.5 -11.8 -13 -26.8 -29.8 -33.8 -37 -6.8 -7.3 -12.8 -14.3 -13.3 -15.5 -0.5 -1 8 0.8 18.8 4.3 23.8 7.8 27 8.5 64.5 18.3 61.3 15.5 129 27 192.5 32.3 16.5 1.5 45.8 3.3 65 4 32.8 1.3 35.3 1.8 40 7.3 11 13 55.5 66.3 62.8 75.5 26.5 33 40.8 51.8 64.8 83.8 14.8 19.8 28.8 38.8 31.5 42.3 17.8 24 85.5 124.3 102.3 151.3 24.8 40.3 66 108.5 72.8 120.8 4 7 10.5 19 14.5 26.3 4 7 11.3 20.3 16.3 29.3 15.3 27.3 69.8 137 82 165 23.8 53.5 42 104 42 115.3 0 7 -7.3 6 -38.8 -5z" }),
            React__default['default'].createElement("path", { d: "M2474.5 3410 c-43.3 -111.8 -72.8 -212 -93 -315 -12.8 -66.3 -12.8 -59 -0.3 -73 4.3 -4.5 13.8 -15.5 21.3 -24.5 7.5 -9 14.3 -16.8 15 -17.5 0.8 -0.8 7.5 -8.5 15 -17.5 7.5 -9 16.3 -19.3 19.5 -22.8 3 -3.5 7.3 -8.5 9.3 -11.3 3.3 -4.5 3.5 -4.3 3.8 4 0 4.8 1 29.5 2.5 55 1.3 25.5 3.5 76 5 112.5 1.5 36.5 3.8 90.5 5 120 6.8 153 8 185 7.3 198.8 l-1 15 -9.3 -23.8z" }),
            React__default['default'].createElement("path", { d: "M2516.3 3366.3 c1.5 -40.3 2.8 -74.5 8.8 -216.3 1.3 -33.8 3.5 -90 5 -125 1.3 -35 3 -71 4 -80 l1.5 -16 8 8.8 c25 28 44.5 49.8 53 59.8 5.3 6.3 12.8 14.5 16.5 18.8 6.5 7 9.8 21.3 4.8 21.3 -1 0 -1.5 2.8 -0.8 6.3 0.5 3.5 0 6.3 -1.3 6.3 -1.3 0 -1.8 4 -1.3 8.8 0.5 5 0 8.8 -1.5 8.8 -1.5 0 -2 2.3 -1.3 5 0.8 2.8 0.3 5 -1 5 -1.3 0 -2 3.5 -1.3 7.5 0.5 4.3 0 7.5 -1.5 7.5 -1.5 0 -2 2.3 -1.3 5 0.8 2.8 0.3 5 -1 5 -1.3 0 -2 3.5 -1.3 7.5 0.5 4.3 0 7.5 -1 7.5 -1.3 0 -2.5 4.8 -2.8 10.5 -0.3 5.8 -1.5 11 -3 11.5 -1.3 0.5 -1.8 2.5 -1 4.5 0.8 2 0.3 3.5 -1.3 3.5 -1.3 0 -1.8 2.5 -1.3 5.8 1.3 6.5 -8.5 45.3 -11.8 46.3 -1.3 0.5 -1.5 2.5 -0.8 4.5 0.8 2 0 3.5 -1.8 3.5 -1.5 0 -2 1.3 -1 2.8 2.3 4 -4.3 30 -8 31.5 -1.5 0.5 -2.5 3.3 -1.8 6 0.8 2.5 0 4.8 -1.5 4.8 -1.3 0 -2 1.8 -1.3 3.8 1 2 0.5 3.8 -1 3.8 -1.5 0 -2 2.3 -1.3 5 0.8 3 0 5 -1.5 5 -1.8 0 -2.3 1.3 -1.5 2.8 2 3.3 -18.3 66.3 -22.8 71 -1.8 1.8 -2.5 3.8 -1.8 4.8 2 2 -6.8 24 -9.5 24 -1.5 0 -1.8 1.3 -1 2.5 0.8 1.5 0.5 2.5 -0.8 2.5 -1.5 0 -2 2 -1.3 4.5 0.5 2.3 -1.3 9.5 -4.3 15.5 l-5 11.3 1.3 -42.5z" }),
            React__default['default'].createElement("path", { d: "M1802.5 3197.5 c3.5 -3 10.3 -9 15 -13.3 4.8 -4.5 19.5 -17.5 32.5 -29.3 13 -11.8 24.3 -21.8 25 -22.5 0.8 -0.8 10.8 -9.8 22.5 -20 11.8 -10.3 21.8 -19.3 22.5 -20 0.8 -0.8 10.8 -9.8 22.5 -20 11.8 -10.3 23 -20.5 25 -22.5 2 -2 13.3 -12.3 25 -22.5 11.8 -10.3 21.8 -19.3 22.5 -20 0.8 -0.8 10.8 -9.8 22.5 -20 11.8 -10.3 21.8 -19.3 22.5 -20 0.8 -0.8 12 -10.8 25 -22.5 13 -11.8 24.3 -21.8 25 -22.5 0.8 -0.8 10.8 -9.8 22.5 -20 11.8 -10.3 21.8 -19.3 22.5 -20 0.8 -0.8 10.8 -9.8 22.3 -20 11.8 -10.3 25.3 -22.5 30 -26.8 4.8 -4.5 9.3 -7.8 9.8 -7.3 0.8 1 0 14.8 -7 100.3 -4 48 -5.3 56.3 -9 56.3 -2 0 -3.5 1.5 -3.5 3.5 0 4 -22.3 19 -28.3 19 -2.5 0 -4.3 1.8 -4.3 3.8 0 2.3 -3 4.5 -7.5 5.5 -4 0.8 -7.5 2.8 -7.5 4.3 0 3.3 -6.5 7.5 -55 37 -20 12 -38.5 22 -41.3 22 -2.8 0 -6.5 2.3 -8.3 5 -1.8 2.8 -5.8 5 -9 5 -3.3 0 -6.5 1.8 -7.3 3.8 -1.8 4.5 -34.8 21.3 -41.8 21.3 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1.3 -5 2.5 0 1.5 -2.3 2.5 -5 2.5 -2.8 0 -5 1 -5 2.5 0 3.5 -28 16.8 -33 15.5 -2.8 -0.5 -4.5 0.5 -4.5 2.8 0 4 -10.5 8 -18 7 -2.5 -0.3 -4.5 1 -4.5 3 0 4 -10.8 8 -18 7 -2.5 -0.3 -4.5 1 -4.5 2.8 0 1.8 -11.8 7.8 -27 13.8 -37 14.8 -38.3 15 -30.5 8.3z" }),
            React__default['default'].createElement("path", { d: "M3151.3 3183 c-5.5 -2.3 -11.8 -5.3 -13.8 -6.8 -2 -1.3 -4.3 -2.5 -5 -2.5 -5 -0.8 -14.5 -5 -18.5 -8.5 -2.5 -2.3 -5.3 -3.8 -6.3 -3.5 -2.8 1.3 -11.5 -2.3 -15.8 -6.3 -2.5 -2 -4.5 -3 -4.5 -2.3 0 1.8 -108.3 -52.5 -126.3 -63.3 -6.8 -4.3 -15 -8.8 -18.3 -10 -10.3 -4.5 -67 -39.5 -105 -64.8 -42.5 -28.5 -38.5 -22 -43 -70.3 -1.8 -15.8 -4 -38.8 -5.3 -51.3 -1.3 -12.3 -3 -30.3 -3.8 -40 l-1.8 -17.5 8.5 7.3 c4.8 4 22.5 20.3 39.8 36.3 17 16 38 35.3 46.3 42.8 8.3 7.5 16.8 15.5 18.8 17.5 2 2 16.8 15.5 32.5 30 15.8 14.5 30.5 28 32.5 30 2 2 17.8 16.8 35 32.5 17.3 15.8 33 30.5 35 32.5 2 2 16.8 15.5 32.5 30 15.8 14.5 30.5 28 32.5 30 2 2 16.8 15.5 32.5 30 37.5 34.3 35.8 32.5 33.3 32.3 -1 0 -6.5 -2 -12 -4.3z" }),
            React__default['default'].createElement("path", { d: "M3159.8 3143 c-7.5 -7.8 -24.3 -26 -37.3 -40.5 -13 -14.5 -24.3 -26.8 -25 -27.5 -0.8 -0.8 -10.8 -12 -22.5 -25 -11.8 -13 -23 -25.5 -25 -27.5 -2 -2 -13.3 -14.5 -25 -27.5 -11.8 -13 -23 -25.5 -25 -27.5 -2 -2 -13.3 -14.5 -25 -27.5 -11.8 -13 -23 -25.5 -25 -27.5 -2 -2 -13.3 -14.5 -25 -27.5 -11.8 -13 -23 -25.5 -25 -27.5 -2 -2 -13.3 -14.5 -25 -27.5 -11.8 -13 -27 -29.8 -34.3 -37.3 -7 -7.8 -12.5 -14.3 -12.3 -14.8 1.3 -1.3 121 8.3 137.3 11 5.5 0.8 9.3 2.8 9.3 5 0 2 0.8 3.5 2 3.5 1 0 6.3 7 11.8 15.8 5.5 8.5 11.3 17 13 18.8 1.8 1.8 3.3 4.3 3.3 5.5 0 1.3 1.5 3.8 3.3 5.5 8 8.5 61.8 96.8 61.8 101.5 0 1.8 0.8 3 2 3 1 0 3.3 3.8 5.3 8.3 2 4.3 4.3 8.5 5.3 9.3 0.8 0.8 6.5 11.5 12.8 23.8 6 12.5 11.8 23 13 23.3 1 0.5 1.8 3 1.8 5.8 0 2.5 1.3 4.8 2.5 4.8 1.5 0 2.5 2.3 2.5 5 0 2.8 1.3 5 2.5 5 1.5 0 2.5 2.3 2.5 5 0 2.8 1.3 5 2.5 5 1.5 0 2.5 2.3 2.5 4.8 0 2.8 0.8 5.3 2 5.8 2.5 1 17 32.3 16.3 35 -0.5 1 0.3 2 1.5 2 2.5 0 9.3 17.3 8.3 20.8 -0.3 1 0.5 1.8 1.8 1.8 2.3 0 9.3 17.5 8 19.8 -0.5 0.5 0.5 1.8 1.8 2.5 2.8 1.8 11 20.5 9.8 22 -0.5 0.3 -7 -5.8 -14.5 -13.8z" }),
            React__default['default'].createElement("path", { d: "M1826.8 3133.5 c-2.8 -4.8 53.8 -121.5 89.5 -184.8 29.8 -53 90 -146.3 99.3 -154.3 3.8 -3.5 9.5 -4.5 22.5 -4.5 9.5 0 30.5 -1 46.5 -2.3 48.8 -4 77 -5.3 74.3 -3.3 -1.3 1 -10.3 10.3 -20 20.5 -84.5 90.5 -123.8 132.5 -131.3 140 -3.5 3.5 -20.3 21.5 -37.5 40 -17.3 18.5 -34 36.5 -37.5 40 -3.5 3.5 -20.3 21.5 -37.5 40 -54 58 -66.8 70.8 -68.3 68.5z" }),
            React__default['default'].createElement("path", { d: "M1175 2730.8 c-25.5 -1.5 -75 -6 -95 -8.3 -70.5 -8.3 -80.5 -9.5 -118.8 -15.3 -18.5 -2.5 -74.5 -11.8 -112.5 -18.5 -24.5 -4.3 -66.3 -12.5 -83 -16.3 -6 -1.5 -15.5 -3.5 -21.3 -5 -6 -1.3 -21.5 -4.8 -34.5 -7.8 -133 -30.3 -289.3 -79 -390 -121.5 -52.8 -22.5 -73 -33.8 -70.8 -39.8 1.5 -4.3 62.5 -34 98.3 -48 179.5 -69.8 372.5 -119.3 611.3 -156.8 4.3 -0.8 16 -2.3 26.3 -3.8 56.3 -7 79 -9.8 105 -12.5 15.8 -1.5 39.5 -3.8 52.5 -5 13 -1.3 31.8 -2.5 41.8 -2.8 l18 -0.5 13.3 12.5 c7.3 7 17.8 16.5 23.3 21 5.5 4.8 10.5 9 11.3 9.8 0.8 0.8 7.5 6.3 15 12.5 7.5 6.3 14.3 11.8 15 12.8 0.8 0.8 14.8 11.5 31.3 24 56.8 42.5 105.5 73 167.5 104.8 19 9.8 35.3 19 35.8 20.8 0.8 2 -6.3 2.8 -22.8 2.8 -13 0 -43.3 1 -67 2.5 -24 1.3 -65.8 3 -93 4 -27.3 0.8 -48.8 2.5 -47.5 3.5 1.8 1.8 67.3 5 195 9.3 23.8 0.8 42.5 2.5 41.8 3.5 -0.8 1.3 -4.3 2.3 -7.8 2.3 -3.5 0 -7.8 1.5 -9.3 3.5 -3.5 4.5 -65.8 35.8 -74.5 37.8 -4 0.8 -7 2.5 -7 4.3 0 4 -8 9.3 -14.3 9.5 -3 0 -7 1.8 -9.3 3.8 -2 2 -4.8 3.8 -6.3 3.8 -1.5 0 -2.8 1.5 -2.8 3.3 0 1.5 -8.8 8.8 -19.3 15.5 -10.5 7 -26.5 17.8 -35.5 24.5 -9 6.5 -18.5 11.8 -20.8 11.8 -2.5 0 -4.5 1.5 -4.5 3.5 0 4.3 -12.8 14 -18.5 14 -2.3 0 -4 1.3 -4 3 0 4.3 -15.3 17 -20.5 17 -2.5 0 -4.5 1.5 -4.5 3.3 0 2 -7 9.5 -15.5 17 -13.8 11.8 -34 29.8 -44 39.3 -1.8 1.5 -6.3 2.8 -10 2.5 -3.8 -0.3 -11.8 -0.8 -18 -1.3z" }),
            React__default['default'].createElement("path", { d: "M3783.5 2716.8 c-21.8 -20.3 -47.3 -42 -69.8 -59.3 -9.5 -7.5 -18 -14.3 -18.8 -15.3 -3 -3.8 -99.8 -69.8 -102.3 -69.8 -0.8 0 -6 -3 -11.5 -6.8 -5.5 -4 -15.5 -9.8 -22.5 -13.5 -32.8 -16.5 -73 -36.8 -77.5 -38.8 -3.3 -1.3 10 -2.8 36.3 -3.8 22.8 -0.8 76.3 -3 118.8 -4.8 42.8 -1.8 78 -3.5 78.5 -4 3 -3 -1.5 -3.3 -194 -10.3 -22.5 -0.8 -40.8 -2.3 -40.5 -3 0 -0.8 16.5 -9.5 36.8 -19.5 35.3 -17.3 84.5 -45.8 118.3 -68.3 31 -20.8 79.8 -58.5 79.8 -61.8 0 -1.8 1.8 -3.3 4 -3.3 3.3 0 23.5 -14.8 31 -22.5 0.8 -0.8 10 -9 20.8 -18.3 10.5 -9.5 19.3 -18.8 19.3 -20.8 0 -6 33.3 -5 118.8 4 47.3 5 70 7.8 87.5 10.3 9.8 1.3 26 3.5 36.3 5 10.3 1.3 25 3.5 32.5 4.8 7.5 1.3 24 4 36.3 6 43.3 7.3 67.8 11.8 108.8 20.3 143.8 30 247 58.3 378.5 103.8 68.3 23.8 159.5 63.8 162.5 71.5 4 10.3 -91.5 52 -204.8 89.8 -71.8 23.8 -187 56.5 -233.8 66.3 -6.3 1.5 -20.8 4.8 -32.5 7.5 -134.5 31.8 -293.8 55.8 -460.3 68.8 l-19 1.5 -17.3 -16z" }),
            React__default['default'].createElement("path", { d: "M1958.8 2617.5 c-0.8 -1.3 -3 -1.8 -5 -1 -2 0.8 -5 0.5 -6.8 -0.5 -1.8 -1.3 -6.3 -1.8 -10 -1.3 -3.5 0.3 -7.3 -0.5 -8 -2 -1 -1.5 -3.3 -2 -5 -1.3 -2 0.8 -4.3 0.3 -5 -1 -0.8 -1.3 -4 -1.8 -7.5 -1.3 -3.3 0.8 -6.8 0 -7.5 -1.5 -1 -1.3 -3.3 -2 -5 -1.3 -2 0.8 -4.3 0.3 -5 -1.3 -1 -1.5 -3.3 -2 -5.3 -1 -2 0.8 -5.8 0.5 -8 -0.5 -2.5 -1 -8.5 -2.5 -13.3 -3 -4.8 -0.5 -10 -2.3 -11.8 -3.8 -1.8 -1.5 -3.3 -1.8 -3.3 -0.8 0 1 -1.5 0.5 -3.3 -1 -2 -1.5 -4.3 -2 -5 -1.3 -1.8 2 -44.3 -8.8 -48.5 -12.3 -1.8 -1.3 -3.3 -1.5 -3.3 -0.5 0 1 -1.5 0.5 -3.3 -1 -2 -1.5 -4 -2 -4.8 -1.3 -2 1.8 -29 -6.3 -31 -9.3 -0.8 -1.3 -2.5 -1.8 -3.8 -0.8 -1.3 0.8 -4 0 -6 -1.5 -2 -1.8 -3.8 -2.3 -3.8 -1.3 0 1 -1.5 0.5 -3.3 -1 -2 -1.5 -4.3 -2 -5 -1.3 -0.8 0.8 -3 0.5 -4.8 -0.5 -1.8 -1.3 -5.3 -2.5 -7.8 -2.8 -5.3 -0.8 -51.5 -16.3 -63 -21 -4 -1.8 -9.5 -3.5 -12.3 -4 -2.5 -0.5 -10 -3.5 -16.5 -6.8 -6.8 -3.5 -12.5 -5.5 -13.3 -5 -0.5 0.5 -6 -1.3 -12 -4 l-11 -5 45 1.3 c24.8 0.8 72 2.5 105 3.8 113.3 4.8 180.3 7.5 251.3 10 39.3 1.5 75.3 3.3 80 4 l8.8 1.5 -6.5 5.3 c-3.5 3 -10 8.3 -14.5 11.8 -4.8 3.5 -19.3 14.8 -32.8 25 -13.5 10.3 -28 21.5 -32.5 25 -4.8 3.5 -11.5 8.8 -15.3 12 -7 5.8 -18.3 7.5 -21 3z" }),
            React__default['default'].createElement("path", { d: "M3014.8 2614.3 c-3.5 -3 -9.5 -7.8 -13 -10.5 -3.5 -2.8 -24.8 -19 -47 -36.3 l-40.5 -31.3 19.8 -1.8 c11 -0.8 51.8 -2.8 91 -4.5 72.3 -2.8 135.5 -5.5 243.8 -10 33 -1.3 78 -3 100 -3.8 l40 -1.3 -10 4.8 c-5.5 2.5 -12.3 4.3 -15.3 3.5 -3 -0.5 -7 0.8 -9.3 3 -5.5 5.3 -19.8 11 -24 9.3 -1.8 -0.5 -4.3 0.3 -5.3 2 -2.5 4 -56.8 22.5 -66.8 22.8 -4.5 0.3 -8.3 1 -8.3 2 0 0.8 -3.5 1.8 -8 1.8 -4.5 0.3 -8.5 1.5 -9 3 -0.5 1.5 -2.5 2 -4.5 1.3 -2 -0.8 -5 0.3 -6.8 2.5 -3.5 4.3 -14 7.3 -28.8 8 -6 0.3 -11.8 1.8 -12.8 3.3 -2.3 3.8 -49.3 15.8 -54.3 13.8 -2.3 -0.8 -5 0 -6 1.8 -1 1.8 -6.5 3.3 -12.3 3.3 -5.8 0 -10.3 1 -10.3 2.3 0 1.3 -3.3 1.8 -7.5 0.8 -4.5 -1 -7.5 -0.5 -7.5 0.8 0 1.5 -2.3 2 -5 1.3 -3 -0.8 -5 0 -5 1.8 0 2 -2.5 2.3 -7.5 1.3 -4.5 -1 -7.5 -0.5 -7.5 0.8 0 1.5 -2.3 2 -5 1.3 -3 -0.8 -5 0 -5 1.8 0 2.3 -2.5 2.5 -8.8 1.5 -5.5 -1.3 -8.8 -0.8 -8.8 1 0 1.5 -2.5 2 -6.3 1 -3.8 -1 -6.3 -0.5 -6.3 1.3 0 5 -16 2.8 -22.8 -3z" }),
            React__default['default'].createElement("path", { d: "M1600 2481 c36.8 -17.3 157.5 -55.5 231.3 -73.3 45.3 -11 49.3 -12 77.5 -17.5 45.8 -9 46.8 -9 56.5 -1.3 4.8 4 9 7.8 9.8 8.5 0.8 0.8 7.5 6.3 15 12.5 7.5 6.3 14.3 11.8 15 12.5 0.8 0.8 7.5 6.3 15 12.5 7.5 6.3 16.8 13.8 20.3 17 3.5 3 8.5 7.3 11.3 9 4 3.3 3 3.8 -11.5 5 -9 1 -45.5 2.8 -81.3 4.3 -61.8 2.3 -100.5 4 -236.3 9.5 -134.8 5.8 -132.3 5.8 -122.5 1.3z" }),
            React__default['default'].createElement("path", { d: "M3310 2482.5 c-20 -1.3 -68.8 -3.3 -108.8 -4.8 -39.8 -1.8 -97.8 -4 -128.8 -5.3 -31 -1.3 -74.3 -3.3 -96.3 -4 l-39.8 -1.5 7.3 -6.5 c4.3 -3.3 13.3 -11 20 -16.8 7 -6 21.5 -18.5 32.8 -27.8 11 -9.5 25 -21.5 31.3 -26.5 6 -5.3 12.8 -9 14.8 -8.3 2 0.5 8.3 1.8 13.8 2.5 93.3 14.8 271.3 65 343.8 97 8.5 3.8 7.8 3.8 -22.5 3.8 -17.3 -0.3 -47.5 -1 -67.5 -2z" }),
            React__default['default'].createElement("path", { d: "M2158.8 2231 c-2.8 -0.3 -20.8 -2 -40 -3.5 -75 -6 -82 -7 -88.3 -14.5 -9.3 -10.8 -58.5 -84.5 -75.5 -113 -33 -55 -81 -145.8 -102 -192.5 -2.8 -6.3 -7.3 -16.3 -10 -22.5 -2.8 -6.3 -7.3 -16.5 -10 -22.8 -3 -6.3 -7.5 -17.5 -10.5 -25 l-5.3 -13.5 13.3 13.8 c7.3 7.5 21.8 23.3 32 35 10.3 11.8 20.5 23 22.5 25 2 2 8.3 8.8 13.5 15 5.5 6.3 18.5 20.8 29 32.5 10.5 11.8 23.5 26.3 29 32.5 5.3 6.3 11.5 13 13.5 15 2 2 12.3 13.3 22.5 25 10.3 11.8 19.3 21.8 20 22.5 0.8 0.8 10.8 12 22.5 25 11.8 13 21.8 24.3 22.5 25 0.8 0.8 9.8 10.8 20 22.5 10.3 11.8 20.5 23 22.5 25 2 2 12.3 13.3 22.5 25 10.3 11.8 19.3 21.8 20 22.5 0.8 0.8 10.8 11.8 22.3 24.5 l20.8 23 -10.8 -0.3 c-6 -0.3 -13.3 -0.8 -16 -1.3z" }),
            React__default['default'].createElement("path", { d: "M2824.3 2228 c2.5 -2.3 9.5 -10 15.8 -16.8 6.3 -7 23 -25.5 37.5 -41.3 14.5 -15.8 31.3 -34.3 37.5 -41.3 6.3 -6.8 13 -14.3 15 -16.3 2 -2 8.8 -9.5 15 -16.3 6.3 -7 23 -25.5 37.5 -41.3 14.5 -15.8 31.3 -34.3 37.5 -41.3 6.3 -6.8 13 -14.3 15 -16.3 2 -2 14.5 -15.5 27.5 -30 13 -14.5 29.5 -32.5 36.5 -40 7 -7.5 18.3 -20 25 -27.5 6.8 -7.5 14 -15.5 16 -17.5 2 -2 13.8 -14.8 26 -28.3 12.3 -13.3 22.5 -24 23 -23.5 2 2 -10.5 29.3 -13.5 29.3 -1.8 0 -2.5 1.3 -1.8 2.5 2.3 3.8 -4.3 20 -8.3 20 -1.8 0 -2.5 1.3 -1.8 2.5 2.3 3.8 -4.3 20 -8 20 -1.8 0 -2.5 1.5 -1.8 3.5 1.5 4 -13 34 -16.5 34 -1.3 0 -1.8 1.8 -1 3.8 1 2 -0.3 4.3 -2.3 5.3 -2.3 0.8 -3.3 3 -2.5 5 0.8 1.8 -0.5 4 -2.5 5 -2.3 0.8 -3.3 3 -2.5 5 0.8 1.8 -0.5 4 -2.5 5 -2.3 0.8 -3.3 3 -2.5 5 0.8 1.8 -0.5 4.3 -2.8 5 -2.3 0.8 -3.5 2.5 -2.8 3.8 2 3 -18.3 42.3 -22.5 43.8 -1.8 0.8 -2.8 3 -2 4.8 0.5 2 -1.5 6.3 -4.8 9.5 -3.3 3.3 -5.8 7 -5.3 8.3 0.5 1.5 -9.8 19.8 -22.5 41 -30.8 51.5 -35 57.5 -38.8 57.5 -1.8 0 -2.8 1 -1.8 2.5 2 3.3 -4.3 12.5 -8.3 12.5 -1.8 0 -2.8 1 -1.8 2.5 2 3.3 -16 30 -20.3 30 -2 0 -2.8 1.5 -2 3.8 1 2.3 0 3.8 -2.5 3.8 -2.3 0 -4 2 -4 4.8 0 5.3 -4.8 6.5 -32.5 9 -9 0.8 -25.3 2.5 -36.3 3.8 -11 1.3 -32.3 3.5 -47.5 5 -15 1.5 -31.3 3.3 -35.8 3.8 -8.3 1 -8.3 0.8 -3.8 -3.3z" }),
            React__default['default'].createElement("path", { d: "M2770 2172 c0 -3.3 1 -12.3 2.3 -19.8 1.3 -7.5 3.8 -24.3 5.3 -37.3 1.8 -13 4 -30 5 -37.5 1.3 -7.5 3.5 -24.5 5.3 -37.5 l3 -24 41.5 -27.8 c75.3 -50 132.5 -83 217.8 -124.8 55.5 -27.3 117.3 -54.5 119.3 -52.5 0.5 0.5 -2.8 4 -7.3 7.8 -4.5 3.8 -20.5 18.3 -35.8 32.3 -15 14 -33.8 31 -41.3 38 -7.5 6.8 -15.5 14 -17.5 16 -2 2 -16.8 15.5 -32.5 30 -15.8 14.5 -29.3 26.8 -30 27.5 -0.8 0.8 -14.3 13 -30 27.5 -15.8 14.5 -30.5 28 -32.5 30 -2 2 -15.5 14.5 -30 27.5 -14.5 13 -28 25.5 -30 27.5 -2 2 -15.5 14.5 -30 27.5 -14.5 13 -28 25.5 -30 27.5 -2 2 -14.8 13.8 -28 26 -21.5 19.5 -24.5 21.5 -24.5 16z" }),
            React__default['default'].createElement("path", { d: "M2224.5 2168.3 c-0.3 -1.3 -14.8 -15 -32 -30.8 -17.3 -15.8 -34 -31.5 -37.5 -35 -3.5 -3.5 -21.5 -20.3 -40 -37.5 -18.5 -17.3 -36.5 -34 -40 -37.5 -3.5 -3.5 -20.3 -19.3 -37.5 -35 -17.3 -15.8 -34 -31.5 -37.5 -35 -3.5 -3.5 -14.3 -13.5 -23.8 -22.5 -9.8 -9 -33.8 -31.5 -53.8 -50 -58.3 -54.3 -67.5 -63.3 -66.8 -64.3 3 -2.8 139.5 63.8 195.5 95.5 45.8 25.8 150.8 93 160.3 102.5 2.8 2.8 5.3 18.3 11 73.8 1.5 14.5 4 35.3 5.3 46 2.8 24.8 2.8 31.5 0 31.5 -1.3 0 -2.8 -0.8 -3.3 -1.8z" }),
            React__default['default'].createElement("path", { d: "M2463.8 2091.5 c-1.5 -1.5 -6.5 -7.8 -11.3 -14 -4.8 -6.3 -9.3 -11.8 -10 -12.5 -0.8 -0.8 -5.3 -6.3 -10 -12.5 -4.8 -6.3 -9.3 -11.8 -10 -12.5 -2.3 -2 -41.3 -51 -43.5 -54.3 -2.3 -4 8.3 -68.5 18.5 -112 20.8 -90.3 43.5 -167.5 72 -245 15.3 -41.8 15 -41.8 15.3 -6.3 0.3 17.3 -0.8 54.3 -2.3 82.5 -2.8 58.8 -6.3 148 -10.3 257.5 -3.8 106.3 -5.5 132.5 -8.5 129z" }),
            React__default['default'].createElement("path", { d: "M2533 2018.3 c-1.8 -38.3 -4.3 -94.3 -5.5 -124.5 -1.3 -30.3 -3.5 -80.8 -5 -112.5 -1.3 -31.5 -3.8 -86.3 -5.3 -121.3 -1.5 -35 -2.3 -70.5 -2 -78.8 l1 -15 8.8 22.5 c4.8 12.5 8.5 24 8.5 25.8 -0.3 1.5 0.5 3 2 3 1.3 0 1.5 1.3 0.8 2.5 -0.8 1.5 -0.5 2.5 0.5 2.5 2 0 9.3 20.8 8.3 24 -0.3 1 0.5 2.5 1.8 3.3 2.5 1.8 23.5 63.5 24 70.5 0.3 2.8 1.3 4.8 2.5 4.8 1.3 0 1.8 2.3 1 5 -0.8 2.8 -0.3 5 1.3 5 1.5 0 2 1.8 1 3.8 -0.8 2 0 3.8 1.3 3.8 1.5 0 2.3 2.3 1.5 5 -0.8 2.8 -0.5 5 0.5 5 2.8 0 10.8 29.8 9 32.8 -1 1.3 -0.3 2.3 1.3 2.3 1.8 0 2.5 1.5 1.8 3.5 -0.8 2 -0.8 4 0.3 4.5 2.8 1.3 13.5 46.5 11.8 49.5 -0.8 1.3 -0.3 2.5 1.3 2.5 1.8 0 2.5 1.5 1.8 3.5 -0.8 2 -0.5 4 0.8 4.5 1.3 0.5 2.8 5.5 3 11.3 0.5 6 1.8 10.8 3 10.8 1 0 1.5 3.5 1 7.5 -0.8 4.3 0 7.5 1.3 7.5 1.3 0 1.8 2.3 1 5 -0.8 2.8 -0.3 5 1.3 5 1.5 0 2 3.3 1.5 7.5 -0.8 4.3 0 7.5 1.3 7.5 1.3 0 1.8 2.3 1 5 -0.8 2.8 -0.3 5 1.3 5 1.5 0 2 3.8 1.5 8.8 -0.5 4.8 0 8.8 1.3 8.8 1.3 0 1.8 2.8 1.3 6.3 -0.8 3.5 -0.3 6.3 0.8 6.3 2.8 0 3 21.8 0.5 23 -1.3 0.5 -7 7 -13.3 14.5 -6.3 7.5 -11.8 14.3 -12.5 15 -0.8 0.8 -7.5 8.5 -15 17.5 -7.5 9 -14.3 16.8 -15 17.5 -0.8 0.8 -6.3 7.5 -12.5 15 -6.3 7.5 -14 17 -17.8 20.8 l-6.3 7 -3 -69.5z" }),
            React__default['default'].createElement("path", { d: "M1771 1786.3 c-3 -2 -6 -3 -6.8 -2.3 -0.8 0.8 -4 0 -7.3 -1.8 -3 -1.8 -6.8 -3.5 -8.3 -3.8 -1.3 0 -3 -0.5 -3.8 -0.8 -0.8 -0.3 -4 -1 -7.5 -1.8 -3.5 -0.5 -8 -1.8 -10 -2.8 -2 -0.8 -6.3 -2 -9.5 -2.5 -3 -0.5 -8.8 -2.3 -12.5 -3.8 -3.8 -1.5 -8 -2.5 -9.5 -2.3 -1.8 0.3 -6.3 -1 -10 -2.5 -4 -1.8 -8.3 -2.8 -9.5 -2.5 -1.3 0.3 -4 -0.3 -6.3 -1.3 -2.3 -1 -8 -2.3 -12.8 -2.8 -4.8 -0.5 -9.8 -2 -11 -3.3 -1.3 -1.3 -3.5 -1.5 -5.3 -1 -1.8 0.8 -4 0.3 -4.8 -1.3 -1 -1.5 -3.3 -2 -5.3 -1 -2 0.8 -5.8 0.5 -8 -0.5 -2.5 -1 -10 -2.3 -17 -3 -6.8 -0.5 -13.8 -2.3 -15.3 -3.5 -1.5 -1.3 -3.5 -1.5 -4.3 -0.8 -0.8 1 -3.5 0.8 -6 -0.3 -2.5 -1 -8.5 -1.8 -13.5 -1.5 -5.3 0.3 -10 -0.5 -10.8 -2 -1 -1.5 -3.3 -2 -5.3 -1 -2 0.8 -5.8 0.5 -8 -0.5 -2.5 -1 -9.3 -1.8 -15 -1.5 -5.8 0.5 -12 -0.3 -13.8 -1.3 -1.8 -1 -7.3 -1.8 -12.5 -1.3 -5.3 0.3 -10.8 -0.3 -12.3 -1.3 -1.5 -0.8 -13.3 -1.5 -26 -1.3 -13 0.3 -24 -0.5 -24.8 -2 -1 -1.3 -9 -1.8 -19.8 -1 l-18.3 1.5 -9.3 -11.5 c-5.3 -6.5 -10.8 -13 -12.5 -14.8 -1.8 -1.8 -8 -9.5 -14.3 -17 -6.3 -7.5 -11.8 -14.3 -12.5 -15 -0.8 -0.8 -8.5 -10.3 -17.3 -21.3 -8.5 -11 -17.8 -22.5 -20.3 -25.5 -7.8 -9 -70.3 -92.8 -90.5 -120.8 -23.3 -32.5 -88.8 -131.3 -106 -160 -7 -11.8 -18.5 -30.5 -25.8 -42 -7 -11.5 -12.8 -21.3 -12.8 -22 0 -0.5 -2.8 -5.3 -6 -10.5 -24.5 -37.5 -106.8 -197.8 -129.5 -251.8 -25.3 -60 -33.5 -82.3 -36 -98 -1.5 -9.8 -1.3 -10.8 3.5 -10.8 11.8 0 68.5 20.8 125.3 46.3 26.3 11.8 140.5 68.8 159 79.5 5.5 3.3 16.3 9.3 23.8 13.3 79.5 43.8 200.8 120 279.8 176.8 31.3 22.5 94.5 69.3 104 77 2.8 2.5 19.8 15.8 37.5 30 18 14 33 26.3 33.8 27 0.8 1 7.5 6.5 15 12.8 7.5 6.3 14.3 11.8 15 12.5 0.8 0.8 8.5 7.5 17.3 15 l15.8 13.8 -1 15.5 c-0.5 8.8 0 15.8 1.3 15.8 1.3 0 1.8 11.3 1.3 25 -0.3 13.8 0 25.3 1.3 25.8 1 0.3 2 11.5 2.5 24.8 0.3 13.5 1.5 24.5 2.8 24.5 1 0 1.5 3.3 1 7.5 -0.5 4 -0.3 7.8 0.8 8 1 0.5 2 8 2.5 17 0.5 9 1.8 16.8 2.8 17.5 1 0.8 2 7.3 2.5 14.5 0.5 7 1.8 13 3 13 1 0 1.5 3.5 1 7.5 -0.8 4.3 0 7.5 1.3 7.5 1.3 0 1.8 2.3 1 5 -0.8 2.8 -0.5 5 0.8 5 1.8 0 5.8 20.3 6.3 30 0 2 1 4.5 2 5.3 1.3 0.8 2.3 5.5 2.5 10.5 0.3 5 1 9.3 1.8 9.3 1.8 0 11.5 37.8 10.5 40.8 -0.3 1 0.8 1.8 2.3 1.8 1.5 0 2.3 2.3 1.5 5 -0.8 2.5 -0.3 5 0.8 5.5 1 0.5 2.8 3.5 3.8 7 1.8 6.3 -1.5 3.8 -26.3 -20 -2 -2 -11.8 -11 -21.3 -20 -9.8 -9 -34.5 -32 -55 -51.5 -60.3 -56.5 -65.8 -61 -43.8 -36 10.3 11.8 19.3 21.8 20 22.5 0.8 0.8 10.8 12 22.5 25 11.8 13 21.8 24.3 22.5 25 0.8 0.8 9.8 10.8 20 22.5 10.3 11.5 22 24.5 26 28.8 3.8 4 11.5 12.8 16.8 19 8 9.5 9 12 5.8 13.3 -5 2 -4 2 -10 -2.3z" }),
            React__default['default'].createElement("path", { d: "M3234 1783 c-0.8 -1.3 2.3 -6 6.8 -10.8 4.5 -4.8 18.8 -20.5 31.8 -34.8 13 -14.5 29.5 -32.5 36.5 -40 7 -7.5 18.3 -20 25 -27.5 6.8 -7.5 18.8 -20.3 26.5 -28.5 7.8 -8.5 13.8 -15.8 13 -16.3 -0.5 -0.5 -3 1 -5.3 3.8 -2.5 2.5 -16.3 15.5 -30.8 28.5 -14.5 13 -28 25.5 -30 27.5 -2 2 -15.5 14.5 -30 27.5 -14.5 13 -33.5 30.8 -42.5 39.3 -9 8.5 -17 14.8 -18.3 13.5 -1.5 -1.5 0.8 -11 10.8 -41.5 15 -47 34 -152.3 39.8 -222.5 1.5 -16.5 3.3 -45.5 4.3 -64.8 l1.5 -34.5 9 -8 c4.8 -4.3 10 -9 11.5 -10.3 1.5 -1.5 9 -7.5 16.5 -13.8 7.5 -6.3 14.3 -11.8 15 -12.5 3 -3 53 -43 72.5 -57.5 11.8 -9 21.8 -16.8 22.5 -17.5 0.8 -0.8 5.3 -4.3 10 -7.5 4.8 -3.5 10.5 -7.5 12.5 -9.3 10.3 -8.3 56.5 -41.5 77.5 -55.8 13 -9 24.3 -16.8 25 -17.5 1.5 -1.8 46.3 -31.3 80 -52.8 33.3 -21.3 104.5 -64.8 106 -64.8 0.5 0 8.5 -4.5 17.5 -10 9 -5.5 17 -10 18 -10 0.8 0 4.5 -2 8 -4.5 14 -9.8 137.3 -73.3 175.5 -90.5 54.8 -24.5 87.5 -37.8 118.5 -47.8 20.3 -6.5 24 -6.3 24 1.8 0 8.8 -14.3 50.8 -28.8 84.8 -21 49.3 -27 61.8 -59 125 -42.5 84.5 -68.3 130 -129.8 230 -26 42.3 -129.3 193.8 -137.5 201.3 -0.8 0.8 -12 15.3 -24.8 32.5 -22 28.8 -62 79.5 -65.3 82.5 -0.8 0.8 -6.3 7.5 -12.5 15 -6.3 7.5 -12.5 15.3 -14.3 17 -1.8 1.8 -7.3 8.3 -12.5 14.5 l-9.3 11.5 -23.3 -1 c-14.5 -0.8 -23.3 -0.3 -23.3 1.3 0 1.5 -9.3 2 -25 1.3 -15.3 -0.8 -25.3 -0.3 -25.8 1.3 -0.5 1.5 -11.5 2.5 -25 2.8 -13.3 0.3 -24.3 1.3 -24.3 2.5 0 1 -3 1.3 -6.8 0.5 -3.8 -1 -7.3 -0.8 -8.3 1 -0.8 1.5 -8.8 2.8 -17.8 3.3 -8.8 0.3 -16.8 1.5 -17.5 2.8 -1 1 -7.5 2.3 -14.5 2.3 -7 0 -12.8 1.3 -12.8 2.5 0 1.3 -3.3 1.5 -7.5 0.5 -4.5 -1 -7.5 -0.5 -7.5 0.8 0 1.5 -2.3 2 -5 1.3 -2.8 -0.8 -5 -0.3 -5 1 0 3 -23.8 8.5 -28.8 6.8 -2 -0.8 -5.5 0.3 -7.8 2.8 -2.8 2.8 -6.3 3.5 -11.3 2.5 -4.3 -1 -7.3 -0.5 -7.3 0.8 0 3.3 -26.3 11.3 -35.5 11 -4 0 -7 0.8 -7 2 0 1 -2 1.5 -4.8 0.8 -2.8 -0.8 -5.3 0.5 -6 2.8 -1.8 4.3 -5.8 5.3 -7.8 2z" }),
            React__default['default'].createElement("path", { d: "M2511.8 1516.5 c-1 -2.5 -1.8 -14.8 -1.8 -27.5 0 -12.8 -1 -43.3 -2.5 -68 -1.3 -24.5 -3 -64.8 -4 -89.3 -0.8 -24.8 -2.5 -43.8 -3.5 -42.5 -1.3 1 -3.5 39.3 -5 84.5 -1.8 45.5 -3.8 92.8 -4.8 105.5 l-1.5 23 -16.3 -31.5 c-29 -56.3 -58.8 -103.5 -100.8 -159.5 -18.5 -24.5 -43 -55 -49.3 -61.3 -0.8 -0.8 -9.8 -10.8 -20 -22.5 -10.3 -11.8 -22.5 -25 -27 -29.8 l-8.5 -8.5 1.5 -20.3 c3.3 -39.5 6.8 -78 9 -98.3 15 -127 28.8 -210.5 54.8 -331.5 5.8 -26.5 31.5 -130.8 35.5 -143 1.3 -4 5.8 -19.8 9.8 -35 4.3 -15 8.8 -30.3 10 -33.8 1.3 -3.5 6.3 -19.8 11.3 -36.3 29.3 -95.3 83.3 -229.5 97 -240.8 4.5 -3.8 9 1.8 21.5 26.5 20.3 40.3 37 83 66.3 169.3 26.8 78.8 35.3 107.3 60 205 25 98.8 44.8 194.8 56.3 272.5 12 81.3 18.3 128.5 22.5 176.3 1.5 15.8 4 40.3 5.3 54.5 4.3 44.3 4 46.3 -8 59.5 -6 6.3 -13.3 12.5 -16.5 13.8 -3.3 1.3 -5 3.5 -4.3 5 2 3 -5.8 12.3 -10.5 12.3 -1.8 0 -3.3 1.8 -3.3 4 0 5 -17.5 26 -21.8 26 -1.8 0 -3.3 1.8 -3.3 3.8 0 2 -10.5 17.5 -23 34.5 -12.8 17 -31 42.8 -40.8 57.5 -9.5 14.8 -19 26.8 -20.8 26.8 -1.8 0 -2.5 1.3 -1.8 2.5 2.3 3.5 -9 22.5 -13 22.5 -2 0 -2.8 1.3 -2 2.5 0.8 1.5 0.3 2.5 -1.3 2.5 -1.5 0 -2 1 -1.3 2.5 2 3.3 -8 22.5 -12.5 24.3 -2 0.8 -3.3 2.3 -2.5 3.5 2 2.8 -20.8 47.3 -24 47.3 -1.3 0 -2 1 -1.3 2.3 1 1.3 0.5 4.8 -0.5 8 -2 5 -2.3 5 -3.8 1.3z" }))));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip-pocketwatch)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z", fill: "#FFAF00" }),
            React__default['default'].createElement("path", { d: "M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z", fill: "#EB8C00" }),
            React__default['default'].createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z", fill: "#FFAF00" }),
            React__default['default'].createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z", fill: "#FFD800" }),
            React__default['default'].createElement("path", { d: "M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z", fill: "#FFE971" }),
            React__default['default'].createElement("path", { d: "M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z", fill: "#EB8C00" }),
            React__default['default'].createElement("path", { d: "M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z", fill: "#FFD800" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z", fill: "#FFE971" }),
            React__default['default'].createElement("path", { d: "M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z", fill: "#E7E8E8" }),
            React__default['default'].createElement("path", { d: "M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z", fill: "#E7E8E8" }),
            React__default['default'].createElement("path", { d: "M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z", fill: "#EB8C00" }),
            React__default['default'].createElement("path", { d: "M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z", fill: "#FFD800" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z", fill: "#FFE971" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip-pocketwatch" },
                React__default['default'].createElement("rect", { width: "48", height: "48", fill: "white", transform: "matrix(-1 0 0 1 48 0)" })))));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default['default'].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default['default'].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip-won)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.1934 10.6907C44.0412 9.92381 45.4 10.3246 45.6959 11.4288C45.9144 12.2444 45.4304 13.0827 44.6148 13.3012L38.4955 14.9409L43.1934 10.6907ZM49.112 10.5134C48.1317 6.85481 43.6295 5.52698 40.8207 8.06806L31.0187 16.9358C29.5584 18.2569 30.8604 20.6481 32.7625 20.1385L45.5302 16.7174C48.2324 15.9933 49.8361 13.2157 49.112 10.5134Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.1886 8.0841C29.8078 6.90274 28.3125 6.54189 27.4349 7.41956C26.7866 8.06782 26.7866 9.11885 27.4349 9.7671L32.2987 14.6309L30.1886 8.0841ZM24.7196 4.70427C27.6276 1.79628 32.5818 2.99187 33.8434 6.90609L38.2461 20.5658C38.902 22.6007 36.3796 24.1424 34.8677 22.6306L24.7196 12.4824C22.5717 10.3345 22.5717 6.85214 24.7196 4.70427Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M7.27624 34.0431C7.01094 35.0539 5.57594 35.054 5.31064 34.0431L4.51492 31.0112C4.42182 30.6565 4.14478 30.3794 3.79005 30.2863L0.758148 29.4906C-0.252715 29.2253 -0.252717 27.7903 0.758146 27.525L3.79005 26.7293C4.14478 26.6362 4.42182 26.3591 4.51492 26.0044L5.31064 22.9725C5.57594 21.9616 7.01094 21.9616 7.27624 22.9725L8.07196 26.0044C8.16506 26.3591 8.44209 26.6362 8.79682 26.7293L11.8287 27.525C12.8396 27.7903 12.8396 29.2253 11.8287 29.4906L8.79683 30.2863C8.44209 30.3794 8.16506 30.6565 8.07196 31.0112L7.27624 34.0431Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M9.62029 11.6637C9.62344 12.2763 8.81089 12.494 8.5073 11.9619L7.59673 10.3659C7.4902 10.1791 7.2913 10.0643 7.07631 10.0654L5.23882 10.0748C4.62619 10.078 4.40847 9.26545 4.9406 8.96185L6.53663 8.05128C6.72337 7.94475 6.8382 7.74585 6.8371 7.53087L6.82766 5.69337C6.82451 5.08074 7.63705 4.86302 7.94064 5.39515L8.85121 6.99119C8.95775 7.17792 9.15664 7.29275 9.37163 7.29165L11.2091 7.28221C11.8218 7.27906 12.0395 8.0916 11.5073 8.39519L9.91131 9.30576C9.72458 9.4123 9.60974 9.6112 9.61085 9.82618L9.62029 11.6637Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M53.8712 15.7857C53.2964 15.6348 53.2964 14.8189 53.8712 14.6681L56.9643 13.8563C57.166 13.8033 57.3235 13.6458 57.3764 13.4441L58.1882 10.351C58.3391 9.77623 59.155 9.77623 59.3058 10.351L60.1176 13.4441C60.1706 13.6458 60.3281 13.8033 60.5298 13.8563L63.6229 14.6681C64.1977 14.8189 64.1977 15.6348 63.6229 15.7857L60.5298 16.5975C60.3281 16.6504 60.1706 16.8079 60.1176 17.0096L59.3058 20.1027C59.155 20.6775 58.3391 20.6775 58.1882 20.1027L57.3764 17.0096C57.3235 16.8079 57.166 16.6504 56.9643 16.5975L53.8712 15.7857Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M51.0823 29.9055C50.3505 27.1742 47.543 25.5533 44.8116 26.2851L17.6112 33.5735C14.8798 34.3053 13.2589 37.1128 13.9908 39.8441L18.546 56.8444C19.2778 59.5758 22.0853 61.1967 24.8167 60.4648L52.0171 53.1765C54.7485 52.4446 56.3694 49.6371 55.6375 46.9058L51.0823 29.9055Z", fill: "url(#paint0_linear_won)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.2737 36.0462L45.4742 28.7579C46.8399 28.392 48.2436 29.2024 48.6095 30.5681L53.1648 47.5684C53.5307 48.934 52.7202 50.3378 51.3546 50.7037L24.1541 57.9921C22.7884 58.358 21.3847 57.5475 21.0187 56.1819L16.4635 39.1816C16.0976 37.8159 16.9081 36.4122 18.2737 36.0462ZM44.8116 26.2851C47.543 25.5533 50.3505 27.1742 51.0823 29.9055L55.6375 46.9058C56.3694 49.6371 54.7485 52.4446 52.0171 53.1765L24.8167 60.4648C22.0853 61.1967 19.2778 59.5758 18.546 56.8444L13.9908 39.8441C13.2589 37.1128 14.8798 34.3053 17.6112 33.5735L44.8116 26.2851Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M35.2297 28.8525L27.1932 31.0059L34.3987 57.8973L42.4352 55.7439L35.2297 28.8525Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M54.5173 42.4023L52.3639 34.3658L15.1113 44.3476L17.2647 52.3841L54.5173 42.4023Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9264 46.3239L31.8613 48.485L32.1926 49.7213L40.2577 47.5603L39.9264 46.3239ZM29.7019 40.4262L37.767 38.2651L37.4358 37.0287L29.3707 39.1898L29.7019 40.4262Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M54.8306 24.9448C55.3795 22.8962 54.1638 20.7906 52.1153 20.2417L17.4965 10.9657C15.448 10.4168 13.3424 11.6324 12.7935 13.681L11.8824 17.081C11.3335 19.1295 12.5492 21.2351 14.5977 21.784L49.2165 31.0601C51.265 31.609 53.3706 30.3933 53.9195 28.3448L54.8306 24.9448Z", fill: "url(#paint1_linear_won)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8339 13.4384L51.4527 22.7145C52.1355 22.8975 52.5408 23.5993 52.3578 24.2822L51.4468 27.6822C51.2638 28.3651 50.5619 28.7703 49.8791 28.5873L15.2603 19.3113C14.5775 19.1283 14.1722 18.4264 14.3552 17.7436L15.2662 14.3435C15.4492 13.6607 16.1511 13.2555 16.8339 13.4384ZM52.1153 20.2417C54.1638 20.7906 55.3795 22.8962 54.8306 24.9448L53.9195 28.3448C53.3706 30.3933 51.265 31.609 49.2165 31.0601L14.5977 21.784C12.5492 21.2351 11.3335 19.1295 11.8824 17.081L12.7935 13.681C13.3424 11.6324 15.448 10.4168 17.4965 10.9657L52.1153 20.2417Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M38.8242 16.6804L30.7877 14.527L27.8889 25.3454L35.9254 27.4988L38.8242 16.6804Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.4257 18.0799L30.4256 15.8399L30.7455 14.3999L38.8813 16.6573L38.4257 18.0799Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear_won", x1: "31.2114", y1: "29.9293", x2: "38.4169", y2: "56.8207", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear_won", x1: "34.8059", y1: "15.6037", x2: "31.9071", y2: "26.4221", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip-won" },
                React__default['default'].createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip-teamplayer)" },
            React__default['default'].createElement("path", { d: "M15.9617 4.03476C16.5597 2.82143 15.6818 1.40061 14.2254 1.22477C13.0389 1.08149 11.9708 1.84428 11.8399 2.9285L11.3896 6.65764C11.2976 7.41951 11.899 8.11875 12.7328 8.21943C13.3889 8.29864 14.0166 7.98162 14.286 7.435L15.9617 4.03476Z", fill: "#1FC7D4" }),
            React__default['default'].createElement("path", { d: "M6.27612 5.16903C5.36287 4.17118 5.80868 2.56162 7.15782 1.98574C8.25706 1.51653 9.49573 1.95041 9.92446 2.95482L11.3991 6.40949C11.7004 7.11529 11.3184 7.95473 10.546 8.28444C9.93817 8.54388 9.24684 8.41494 8.83541 7.9654L6.27612 5.16903Z", fill: "#1FC7D4" }),
            React__default['default'].createElement("path", { d: "M17.0349 9.11691C17.3916 11.6186 15.2219 13.6784 12.2437 14.1031C9.26546 14.5278 6.60649 13.1564 6.24978 10.6548C5.89307 8.15311 8.06278 6.09324 11.041 5.66857C14.0192 5.24391 16.6782 6.61525 17.0349 9.11691Z", fill: "#1FC7D4" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.53552 12.9725C8.66378 13.937 10.392 14.3672 12.2437 14.1032C14.913 13.7225 16.9328 12.0284 17.0663 9.87986C16.4991 11.4567 14.8084 12.7917 12.6007 13.3832C10.6865 13.8961 8.82955 13.7307 7.53552 12.9725Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M11.1696 9.94964C11.3325 10.6295 11.0911 10.9601 10.717 11.0497C10.343 11.1393 9.97795 10.9541 9.81504 10.2742C9.65212 9.5943 9.89356 9.26377 10.2676 9.17414C10.6417 9.08451 11.0067 9.26973 11.1696 9.94964Z", fill: "#017178" }),
            React__default['default'].createElement("path", { d: "M14.4407 9.58045C14.4649 10.2792 14.1625 10.555 13.7781 10.5684C13.3937 10.5817 13.0729 10.3275 13.0486 9.62879C13.0243 8.93005 13.3268 8.65422 13.7112 8.64087C14.0956 8.62753 14.4164 8.88172 14.4407 9.58045Z", fill: "#017178" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3337 10.8946C12.1996 10.9121 12.1051 11.0349 12.1226 11.169C12.1855 11.6513 12.654 11.9486 13.1254 11.8872C13.3584 11.8568 13.563 11.7451 13.7062 11.5832C13.7958 11.4819 13.7863 11.3272 13.685 11.2376C13.5838 11.148 13.429 11.1575 13.3395 11.2588C13.2753 11.3313 13.1788 11.3864 13.0621 11.4016C12.8142 11.4339 12.6305 11.2773 12.6082 11.1057C12.5907 10.9716 12.4678 10.8771 12.3337 10.8946Z", fill: "#017178" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3339 10.8945C12.1998 10.9119 12.1053 11.0348 12.1228 11.1689C12.1452 11.3405 12.0078 11.539 11.76 11.5713C11.6411 11.5868 11.5319 11.557 11.4508 11.5014C11.3393 11.425 11.1869 11.4535 11.1104 11.565C11.034 11.6765 11.0625 11.8289 11.174 11.9054C11.3555 12.0297 11.586 12.0878 11.8233 12.0569C12.2947 11.9954 12.6712 11.5878 12.6083 11.1056C12.5908 10.9715 12.468 10.877 12.3339 10.8945Z", fill: "#017178" }),
            React__default['default'].createElement("path", { d: "M9.50991 12.781C9.67816 11.447 8.51926 10.3246 7.21792 10.5612C6.15761 10.7539 5.45717 11.7854 5.65344 12.8651L6.32848 16.5785C6.4664 17.3372 7.1822 17.8424 7.92727 17.7069C8.51353 17.6004 8.9626 17.1204 9.0384 16.5195L9.50991 12.781Z", fill: "#9A6AFF" }),
            React__default['default'].createElement("path", { d: "M4.93123 13.9946C4.62613 12.6768 3.04713 12.1326 1.80838 12.9183C0.799086 13.5584 0.455077 14.825 1.04002 15.7472L3.05191 18.9192C3.46294 19.5673 4.37109 19.7279 5.08032 19.2781C5.63839 18.9241 5.92368 18.2814 5.78623 17.6877L4.93123 13.9946Z", fill: "#9A6AFF" }),
            React__default['default'].createElement("path", { d: "M12.3621 17.3922C13.4422 19.6768 11.9781 22.2858 9.25833 23.5716C6.53859 24.8574 3.59314 24.333 2.5131 22.0485C1.43306 19.764 2.89716 17.1549 5.6169 15.8691C8.33664 14.5833 11.2821 15.1077 12.3621 17.3922Z", fill: "#9A6AFF" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.5245 20.1686C11.9455 21.2367 10.9163 22.1811 9.58715 22.8094C6.86742 24.0952 3.92196 23.5709 2.84192 21.2863C2.41234 20.3777 2.38525 19.4177 2.67957 18.51C2.0738 19.6275 1.96092 20.8804 2.51314 22.0485C3.59318 24.333 6.53864 24.8574 9.25837 23.5716C10.8963 22.7972 12.0789 21.5429 12.5245 20.1686Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75939 18.7345C8.86973 18.6564 9.02253 18.6825 9.10068 18.7928C9.45793 19.2972 9.2815 19.9886 8.77528 20.3471C8.66494 20.4253 8.51213 20.3992 8.43398 20.2889C8.35583 20.1785 8.38193 20.0257 8.49227 19.9476C8.8145 19.7193 8.87726 19.3246 8.7011 19.0758C8.62294 18.9655 8.64904 18.8127 8.75939 18.7345Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75936 18.7345C8.86971 18.6563 9.02251 18.6824 9.10066 18.7928C9.27683 19.0415 9.67007 19.1133 9.9923 18.8851C10.1026 18.807 10.2554 18.8331 10.3336 18.9434C10.4117 19.0537 10.3856 19.2065 10.2753 19.2847C9.76908 19.6432 9.05832 19.5802 8.70107 19.0758C8.62292 18.9654 8.64902 18.8126 8.75936 18.7345Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M7.26609 18.6401C7.75355 19.1413 7.7149 19.5488 7.43915 19.8169C7.16341 20.0851 6.755 20.1124 6.26755 19.6112C5.7801 19.11 5.81875 18.7025 6.09449 18.4343C6.37023 18.1662 6.77864 18.1389 7.26609 18.6401Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M10.0286 16.8059C10.429 17.3791 10.3252 17.775 10.0099 17.9953C9.69452 18.2156 9.28705 18.1767 8.88668 17.6036C8.48632 17.0304 8.5901 16.6344 8.90543 16.4142C9.22077 16.1939 9.62825 16.2327 10.0286 16.8059Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M15.821 11.1076C15.5183 9.7976 16.5573 8.56337 17.876 8.66668C18.9503 8.75086 19.7518 9.70595 19.6661 10.7999L19.3713 14.5627C19.3111 15.3315 18.6502 15.9067 17.8953 15.8475C17.3012 15.801 16.8058 15.3691 16.6694 14.7789L15.821 11.1076Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M20.4641 11.4595C20.469 10.121 21.7611 9.16422 23.0195 9.56738C24.0448 9.89586 24.6059 11.0053 24.2727 12.0453L23.1267 15.6224C22.8925 16.3532 22.1187 16.7586 21.3982 16.5277C20.8313 16.3461 20.4482 15.8139 20.4504 15.2108L20.4641 11.4595Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M13.6364 16.264C13.1079 18.7351 15.1302 20.9398 18.072 21.569C21.0138 22.1983 23.7611 21.0137 24.2897 18.5427C24.8182 16.0716 22.7959 13.8669 19.854 13.2376C16.9122 12.6084 14.1649 13.793 13.6364 16.264Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7678 17.3277C18.638 17.2898 18.5021 17.3644 18.4643 17.4942C18.2913 18.0876 18.6839 18.6835 19.2794 18.8571C19.4092 18.8949 19.5451 18.8203 19.583 18.6905C19.6208 18.5607 19.5462 18.4248 19.4164 18.387C19.0373 18.2765 18.8491 17.9238 18.9344 17.6312C18.9722 17.5014 18.8976 17.3655 18.7678 17.3277Z", fill: "#AE5714" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7679 17.3275C18.6381 17.2897 18.5022 17.3642 18.4643 17.494C18.379 17.7867 18.0308 17.983 17.6517 17.8725C17.5219 17.8347 17.386 17.9092 17.3482 18.039C17.3103 18.1689 17.3849 18.3048 17.5147 18.3426C18.1103 18.5162 18.7615 18.2245 18.9344 17.631C18.9723 17.5012 18.8977 17.3653 18.7679 17.3275Z", fill: "#AE5714" }),
            React__default['default'].createElement("path", { d: "M17.78 16.2187C17.6338 16.9024 17.2734 17.0965 16.8973 17.016C16.5212 16.9356 16.2717 16.6111 16.4179 15.9274C16.5642 15.2437 16.9245 15.0496 17.3007 15.13C17.6768 15.2105 17.9263 15.535 17.78 16.2187Z", fill: "#AE5714" }),
            React__default['default'].createElement("path", { d: "M21.344 17.3356C21.0937 17.9884 20.7077 18.1244 20.3485 17.9867C19.9894 17.849 19.7931 17.4897 20.0434 16.8369C20.2937 16.1841 20.6798 16.0482 21.039 16.1859C21.3981 16.3236 21.5943 16.6828 21.344 17.3356Z", fill: "#AE5714" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.9627 18.7486C14.73 19.7089 15.9227 20.4634 17.3569 20.8477C20.2916 21.6341 23.1259 20.5724 23.7898 18.0947C24.0539 17.1092 23.9086 16.1461 23.4531 15.2939C24.2558 16.2986 24.5929 17.5285 24.2534 18.7954C23.5895 21.2731 20.7552 22.3347 17.8205 21.5484C16.0531 21.0748 14.6523 20.0389 13.9627 18.7486Z", fill: "#EB8C00" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip-teamplayer" },
                React__default['default'].createElement("rect", { width: "24", height: "24", fill: "white", transform: "translate(0.5 0.5)" })))));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 16" }, props),
        React__default['default'].createElement("path", { d: "M10.0002 7.33L15.0002 14H3.00018L8.00018 7.33V2H10.0002V7.33ZM12.9602 0H5.04018C4.62018 0 4.39018 0.48 4.65018 0.81L6.00018 2.5V6.67L0.200175 14.4C-0.289825 15.06 0.180175 16 1.00018 16H17.0002C17.8202 16 18.2902 15.06 17.8002 14.4L12.0002 6.67V2.5L13.3502 0.81C13.6102 0.48 13.3802 0 12.9602 0Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear_ticketround)" }),
        React__default['default'].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear_ticketround", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.8196 4.04526C17.2184 2.78478 16.2774 1.5 14.9553 1.5C13.8754 1.5 13 2.37543 13 3.45534L13 7.25679C13 8.01243 13.6126 8.625 14.3682 8.625C14.9648 8.625 15.4927 8.2384 15.6727 7.66958L16.8196 4.04526Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M8.05539 4.04526C7.65652 2.78478 8.59753 1.5 9.91962 1.5C10.9995 1.5 11.875 2.37543 11.875 3.45534L11.875 7.25679C11.875 8.01243 11.2624 8.625 10.5067 8.625C9.91013 8.625 9.3823 8.2384 9.2023 7.66958L8.05539 4.04526Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.24713 8.9375L13.4374 8.9375V17.0625H7.96396C7.92764 17.0625 7.89183 17.0625 7.85651 17.0625C7.06169 17.0627 6.51444 17.0629 6.00729 16.9494C4.88983 16.6995 3.90253 16.0491 3.23171 15.1211C2.92726 14.6999 2.71136 14.1971 2.39779 13.4667C2.38385 13.4342 2.36972 13.4013 2.35539 13.368L2.34484 13.3434C2.19078 12.9849 2.05946 12.6793 1.96737 12.4255C1.87345 12.1667 1.79043 11.8847 1.78065 11.583C1.7455 10.4988 2.39693 9.50984 3.40701 9.11409C3.68809 9.00396 3.97989 8.96895 4.25478 8.95306C4.5243 8.93749 4.85692 8.93749 5.24713 8.9375ZM4.36295 10.8249C4.15337 10.837 4.09575 10.858 4.09101 10.8599C3.82001 10.9661 3.64524 11.2314 3.65467 11.5223C3.65483 11.5274 3.65831 11.5886 3.72992 11.7859C3.80127 11.9825 3.91061 12.238 4.0781 12.6278C4.4505 13.4945 4.5838 13.791 4.75127 14.0227C5.15376 14.5795 5.74615 14.9697 6.41662 15.1197C6.6956 15.1821 7.02062 15.1875 7.96396 15.1875H11.5624V10.8125H5.27387C4.84961 10.8125 4.57176 10.8129 4.36295 10.8249Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.637 10.8249C20.4282 10.8129 20.1503 10.8125 19.7261 10.8125H13.4375V15.1875H17.036C17.9793 15.1875 18.3043 15.1821 18.5833 15.1197C19.2538 14.9697 19.8462 14.5795 20.2487 14.0227C20.4161 13.791 20.5494 13.4945 20.9218 12.6278C21.0893 12.238 21.1987 11.9825 21.27 11.7859C21.3416 11.5886 21.3451 11.5274 21.3453 11.5223C21.3547 11.2314 21.1799 10.9661 20.9089 10.8599C20.9042 10.858 20.8466 10.837 20.637 10.8249ZM20.7452 8.95306C21.0201 8.96895 21.3118 9.00396 21.5929 9.11409C22.603 9.50984 23.2544 10.4988 23.2193 11.583C23.2095 11.8847 23.1265 12.1667 23.0326 12.4255C22.9405 12.6793 22.8092 12.9849 22.6551 13.3434L22.6446 13.368C22.6302 13.4013 22.6161 13.4342 22.6022 13.4667C22.2886 14.197 22.0727 14.6999 21.7682 15.1211C21.0974 16.0491 20.1101 16.6995 18.9927 16.9494C18.4855 17.0629 17.9383 17.0627 17.1434 17.0625C17.1081 17.0625 17.0723 17.0625 17.036 17.0625H11.5625V8.9375L19.7528 8.9375C20.143 8.93749 20.4756 8.93749 20.7452 8.95306Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M8.07961 10.8125H4.6577C4.61915 10.8125 4.58174 10.8125 4.5454 10.8125C4.39673 10.5329 4.3125 10.2138 4.3125 9.875C4.3125 9.53623 4.39673 9.21713 4.54539 8.9375C4.57317 8.9375 4.60124 8.9375 4.62961 8.9375L8.07961 8.9375C8.22827 9.21713 8.3125 9.53623 8.3125 9.875C8.3125 10.2138 8.22827 10.5329 8.07961 10.8125Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M8.4231 15.1875L9.18751 17.0104L9.06332 17.0625L7.23815 17.0625C7.0893 17.0626 6.94898 17.0626 6.81591 17.0619L6.01688 15.1564C6.27346 15.1844 6.63759 15.1875 7.3468 15.1875H8.4231Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M16.9204 10.8125H20.3423C20.3809 10.8125 20.4183 10.8125 20.4546 10.8125C20.6033 10.5329 20.6875 10.2138 20.6875 9.875C20.6875 9.53623 20.6033 9.21713 20.4546 8.9375C20.4268 8.9375 20.3988 8.9375 20.3704 8.9375L16.9204 8.9375C16.7717 9.21713 16.6875 9.53623 16.6875 9.875C16.6875 10.2138 16.7717 10.5329 16.9204 10.8125Z", fill: "#EB8C00" }),
        React__default['default'].createElement("path", { d: "M16.5769 15.1875L15.8125 17.0104L15.9367 17.0625L17.7619 17.0625C17.9107 17.0626 18.051 17.0626 18.1841 17.0619L18.9831 15.1564C18.7266 15.1844 18.3624 15.1875 17.6532 15.1875H16.5769Z", fill: "#EB8C00" }),
        React__default['default'].createElement("path", { d: "M10.9347 16.6152C10.8361 15.6854 11.5651 14.875 12.5002 14.875C13.4353 14.875 14.1642 15.6853 14.0656 16.6152L13.7087 19.9805C13.6547 20.4891 13.2257 20.875 12.7142 20.875H12.2861C11.7746 20.875 11.3456 20.4891 11.2917 19.9805L10.9347 16.6152Z", fill: "#EB8C00" }),
        React__default['default'].createElement("path", { d: "M8.875 21.5312C8.875 20.5475 9.67249 19.75 10.6562 19.75H14.3438C15.3275 19.75 16.125 20.5475 16.125 21.5312C16.125 21.8592 15.8592 22.125 15.5312 22.125H9.46875C9.14083 22.125 8.875 21.8592 8.875 21.5312Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M6.88325 14.6524C5.89136 12.0714 5.39541 10.7809 5.56796 9.74082C5.75596 8.6076 6.43705 7.61619 7.42741 7.03418C8.33639 6.5 9.72434 6.5 12.5002 6.5C15.2761 6.5 16.664 6.5 17.573 7.03418C18.5634 7.61619 19.2445 8.6076 19.4325 9.74082C19.605 10.7809 19.1091 12.0714 18.1172 14.6524C17.6137 15.9625 17.362 16.6176 16.9476 17.1125C16.494 17.6543 15.9009 18.0617 15.2324 18.2908C14.6218 18.5 13.9146 18.5 12.5002 18.5C11.0858 18.5 10.3786 18.5 9.768 18.2908C9.09952 18.0617 8.5064 17.6543 8.0528 17.1125C7.63848 16.6176 7.38674 15.9625 6.88325 14.6524Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M17.903 7.86713C18.1516 8.78956 17.8918 9.94993 17.3722 12.2707L17.1257 13.372C16.8386 14.6541 16.6951 15.2952 16.4026 15.8048C15.9154 16.6532 15.1253 17.286 14.1908 17.5761C13.6297 17.7503 12.9728 17.7503 11.6589 17.7503C10.5622 17.7503 10.0139 17.7503 9.52467 17.6202C8.79145 17.4253 8.13341 17.02 7.63037 16.4569C7.76277 16.7161 7.89603 16.9258 8.05248 17.1127C8.50608 17.6545 9.0992 18.062 9.76768 18.291C10.3783 18.5002 11.0855 18.5002 12.4999 18.5002C13.9143 18.5002 14.6215 18.5002 15.2321 18.291C15.9006 18.062 16.4937 17.6545 16.9473 17.1127C17.3616 16.6178 17.6134 15.9627 18.1169 14.6526C19.1088 12.0716 19.6047 10.7811 19.4321 9.74103C19.2442 8.60781 18.5631 7.6164 17.5727 7.0344C17.572 7.034 17.5713 7.0336 17.5707 7.0332C17.7122 7.29512 17.8242 7.57465 17.903 7.86713Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M20.1942 7.55201C20.1249 7.816 19.7501 7.816 19.6808 7.55201L19.308 6.13133C19.2837 6.03869 19.2113 5.96634 19.1187 5.94202L17.698 5.56917C17.434 5.49988 17.434 5.12512 17.698 5.05584L19.1187 4.68298C19.2113 4.65867 19.2837 4.58632 19.308 4.49368L19.6808 3.073C19.7501 2.809 20.1249 2.809 20.1942 3.073L20.567 4.49368C20.5913 4.58632 20.6637 4.65867 20.7563 4.68298L22.177 5.05584C22.441 5.12512 22.441 5.49988 22.177 5.56917L20.7563 5.94202C20.6637 5.96634 20.5913 6.03869 20.567 6.13133L20.1942 7.55201Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M4.46705 4.12184C4.50969 3.95939 4.74031 3.95939 4.78295 4.12184L5.0124 4.99611C5.02736 5.05312 5.07188 5.09764 5.12889 5.1126L6.00316 5.34205C6.16561 5.38469 6.16561 5.61531 6.00316 5.65795L5.12889 5.8874C5.07188 5.90236 5.02736 5.94688 5.0124 6.00389L4.78295 6.87816C4.74031 7.04061 4.50969 7.04061 4.46705 6.87816L4.2376 6.00389C4.22264 5.94688 4.17812 5.90236 4.12111 5.8874L3.24684 5.65795C3.08439 5.61531 3.08439 5.38469 3.24684 5.34205L4.12111 5.1126C4.17812 5.09764 4.22264 5.05312 4.2376 4.99611L4.46705 4.12184Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M5.3257 21.0184C5.2884 21.1605 5.0866 21.1605 5.0493 21.0184L4.84853 20.2534C4.83543 20.2035 4.79648 20.1646 4.74659 20.1515L3.98161 19.9507C3.83946 19.9134 3.83946 19.7116 3.98161 19.6743L4.74659 19.4735C4.79648 19.4604 4.83543 19.4215 4.84853 19.3716L5.0493 18.6066C5.0866 18.4645 5.2884 18.4645 5.3257 18.6066L5.52647 19.3716C5.53957 19.4215 5.57852 19.4604 5.62841 19.4735L6.39339 19.6743C6.53554 19.7116 6.53554 19.9134 6.39339 19.9507L5.62841 20.1515C5.57852 20.1646 5.53957 20.2035 5.52647 20.2534L5.3257 21.0184Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.13603 7.98393C8.40807 8.2437 8.418 8.67482 8.15822 8.94685L8.04567 9.06471C7.79436 9.32787 7.65414 9.67776 7.65414 10.0416L7.65414 10.2898C7.65414 10.6659 7.34921 10.9708 6.97306 10.9708C6.59692 10.9708 6.29199 10.6659 6.29199 10.2898L6.29199 10.0416C6.29199 9.32735 6.56725 8.64055 7.06056 8.12398L7.17311 8.00611C7.43289 7.73408 7.864 7.72415 8.13603 7.98393Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.93527 2.21472C10.1387 2.409 10.1461 2.73142 9.95187 2.93487L9.86769 3.02302C9.67974 3.21983 9.57487 3.4815 9.57487 3.75363V3.93921C9.57487 4.22052 9.34682 4.44857 9.06551 4.44857C8.7842 4.44857 8.55615 4.22052 8.55615 3.93921V3.75363C8.55615 3.21944 8.76201 2.70579 9.13094 2.31946L9.21512 2.23131C9.4094 2.02786 9.73183 2.02044 9.93527 2.21472Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.8469 2.21472C15.0503 2.409 15.0578 2.73142 14.8635 2.93487L14.7793 3.02302C14.5914 3.21983 14.4865 3.4815 14.4865 3.75363V3.93921C14.4865 4.22052 14.2584 4.44857 13.9771 4.44857C13.6958 4.44857 13.4678 4.22052 13.4678 3.93921V3.75363C13.4678 3.21944 13.6736 2.70579 14.0426 2.31946L14.1267 2.23131C14.321 2.02786 14.6434 2.02044 14.8469 2.21472Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.61642C12.789 9.0473 13.2462 8.58594 13.8102 8.58594C14.4493 8.58594 14.9313 9.17163 14.814 9.80558L14.5186 11.4019C15.2601 11.7867 15.832 12.412 15.832 13.2088C15.832 13.9251 15.3629 14.5072 14.7441 14.8888C14.1184 15.2747 13.2798 15.5 12.375 15.5C11.4702 15.5 10.6316 15.2747 10.0059 14.8888C9.38712 14.5072 8.91797 13.9251 8.91797 13.2088C8.91797 12.4166 9.48346 11.7938 10.2182 11.4087L9.92155 9.80559C9.80423 9.17163 10.2863 8.58594 10.9254 8.58594C11.4894 8.58594 11.9466 9.04731 11.9466 9.61642L11.9466 10.9347C12.087 10.9235 12.23 10.9177 12.375 10.9177C12.515 10.9177 12.6532 10.9231 12.789 10.9336V9.61642Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.15548C12.789 8.58636 13.2462 8.125 13.8102 8.125C14.4493 8.125 14.9313 8.71069 14.814 9.34464L14.5186 10.9409C15.2601 11.3257 15.832 11.9511 15.832 12.7479C15.832 13.4642 15.3629 14.0463 14.7441 14.4279C14.1184 14.8137 13.2798 15.0391 12.375 15.0391C11.4702 15.0391 10.6316 14.8137 10.0059 14.4279C9.38712 14.0463 8.91797 13.4642 8.91797 12.7479C8.91797 11.9557 9.48346 11.3329 10.2182 10.9478L9.92155 9.34465C9.80423 8.7107 10.2863 8.12501 10.9254 8.12501C11.4894 8.12501 11.9466 8.58637 11.9466 9.15548L11.9466 10.4738C12.087 10.4625 12.23 10.4567 12.375 10.4567C12.515 10.4567 12.6532 10.4621 12.789 10.4726V9.15548ZM11.6782 12.3681C11.6782 12.73 11.4783 13.0234 11.2317 13.0234C10.9851 13.0234 10.7852 12.73 10.7852 12.3681C10.7852 12.0061 10.9851 11.7127 11.2317 11.7127C11.4783 11.7127 11.6782 12.0061 11.6782 12.3681ZM13.5861 13.0234C13.8327 13.0234 14.0326 12.73 14.0326 12.368C14.0326 12.0061 13.8327 11.7127 13.5861 11.7127C13.3395 11.7127 13.1396 12.0061 13.1396 12.368C13.1396 12.73 13.3395 13.0234 13.5861 13.0234Z", fill: "#ED8103" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        React__default['default'].createElement("path", { d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3.63 3.63C3.24 4.02 3.24 4.65 3.63 5.04L7.29 8.7L7 9H4C3.45 9 3 9.45 3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V13.41L16.18 17.59C15.69 17.96 15.16 18.27 14.58 18.5C14.22 18.65 14 19.03 14 19.42C14 20.14 14.73 20.6 15.39 20.33C16.19 20 16.94 19.56 17.61 19.02L18.95 20.36C19.34 20.75 19.97 20.75 20.36 20.36C20.75 19.97 20.75 19.34 20.36 18.95L5.05 3.63C4.66 3.24 4.03 3.24 3.63 3.63ZM19 12C19 12.82 18.85 13.61 18.59 14.34L20.12 15.87C20.68 14.7 21 13.39 21 12C21 8.17 18.6 4.89 15.22 3.6C14.63 3.37 14 3.83 14 4.46V4.65C14 5.03 14.25 5.36 14.61 5.5C17.18 6.54 19 9.06 19 12ZM10.29 5.71L10.12 5.88L12 7.76V6.41C12 5.52 10.92 5.08 10.29 5.71ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V9.76L16.48 12.24C16.49 12.16 16.5 12.08 16.5 12Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.41C12 5.52 10.92 5.07 10.29 5.7L7 9H4C3.45 9 3 9.45 3 10ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 4.45V4.65C14 5.03 14.25 5.36 14.6 5.5C17.18 6.53 19 9.06 19 12C19 14.94 17.18 17.47 14.6 18.5C14.24 18.64 14 18.97 14 19.35V19.55C14 20.18 14.63 20.62 15.21 20.4C18.6 19.11 21 15.84 21 12C21 8.16 18.6 4.89 15.21 3.6C14.63 3.37 14 3.82 14 4.45Z" })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z" })));
};

var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default['default'].createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? React__default['default'].createElement(Icon$V, { color: "invertedContrast" }) : React__default['default'].createElement(Icon$Y, { color: "invertedContrast" })));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default['default'].createElement(Button, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? React__default['default'].createElement(Icon$V, { color: "primary" }) : React__default['default'].createElement(Icon$Y, { color: "primary" }) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};

var Box = styled__default['default'].div(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.background, styledSystem.border, styledSystem.layout, styledSystem.position, styledSystem.space);
var templateObject_1$R;

var Flex = styled__default['default'](Box)(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), styledSystem.flexbox);
var templateObject_1$Q;

var variants$2 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$2.INFO : _b;
    switch (variant) {
        case variants$2.DANGER:
            return theme.colors.failure;
        case variants$2.WARNING:
            return theme.colors.warning;
        case variants$2.SUCCESS:
            return theme.colors.success;
        case variants$2.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$2.INFO; }
    switch (variant) {
        case variants$2.DANGER:
            return Icon$1e;
        case variants$2.WARNING:
            return Icon$1f;
        case variants$2.SUCCESS:
            return Icon$1g;
        case variants$2.INFO:
        default:
            return Icon$1d;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$U, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$P, templateObject_2$n, templateObject_3$a, templateObject_4$7;

var scales$5 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$5.MD : _b;
    switch (scale) {
        case scales$5.SM:
            return "32px";
        case scales$5.LG:
            return "48px";
        case scales$5.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled__default['default'].input(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$5.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$O;

var StyledBalanceInput = styled__default['default'](Box)(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme, isWarning = _a.isWarning;
    return theme.shadows[isWarning ? "warning" : "inset"];
});
var StyledInput$1 = styled__default['default'](Input$1)(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"], ["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var templateObject_1$N, templateObject_2$m;

var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onChange = _a.onChange, currencyValue = _a.currencyValue, inputProps = _a.inputProps, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, props = __rest(_a, ["value", "placeholder", "onChange", "currencyValue", "inputProps", "isWarning"]);
    return (React__default['default'].createElement(StyledBalanceInput, __assign({ isWarning: isWarning }, props),
        React__default['default'].createElement(StyledInput$1, __assign({ type: "text", value: value, onChange: onChange, placeholder: placeholder }, inputProps)),
        currencyValue && (React__default['default'].createElement(Text, { fontSize: "12px", textAlign: "right", color: "textSubtle" }, currencyValue))));
};

var Separator = styled__default['default'].div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$W, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$M, templateObject_2$l;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$3.SUBTLE ? "tertiary" : "card"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  background-color: ", ";\n  height: 48px;\n  padding: 5px;\n  display: inline-flex;\n  border-radius: 11px;\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  height: 48px;\n  padding: 5px;\n  display: inline-flex;\n  border-radius: 11px;\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$L;

var ButtonMenu$1 = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$6.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$3.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  height:38px;\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  height:38px;\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant === variants$3.PRIMARY ? theme.colors.primary : theme.colors.textSubtle);
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$3.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary" }, props));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$K;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 11px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 11px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$J;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$I;

var CardHeader = styled__default['default'].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  background: ", ";\n  ", "\n"], ["\n  background: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$H;

var CardFooter = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$G;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ", ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ",
    ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return (ribbonPosition === "right" ? 0 : "auto");
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return ribbonPosition === "right"
        ? "translateX(30%) translateY(0%) rotate(45deg)"
        : "translateX(0%) translateY(200%) rotate(-45deg)";
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text, ribbonPosition = _a.ribbonPosition;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor, ribbonPosition: ribbonPosition },
        React__default['default'].createElement("div", { title: text }, text)));
};
CardRibbon.defaultProps = {
    ribbonPosition: "right",
};
var templateObject_1$F;

var scales$4 = {
    SM: "sm",
    MD: "md",
};

var getScale$3 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$4.SM:
            return "24px";
        case scales$4.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$3, getScale$3, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$4.MD,
};
var templateObject_1$E;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled__default['default'].div(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container$4, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$D, templateObject_2$k;

var bunnyFall = styled.keyframes(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled__default['default'].div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count)).map(function (_, index) { return (React__default['default'].createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React__default['default'].createElement(Icon$K, { width: size, height: size }))); });
    return React__default['default'].createElement("div", null, bunnies);
};
var templateObject_1$C, templateObject_2$j;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style = (_a$3 = {},
    _a$3[sizes.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$3[sizes.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$3[sizes.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$3[sizes.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$3);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$B;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$3 = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$A;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$z, templateObject_2$i;

var GridLayout$1 = styled__default['default'].div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$y;

var GridLayout = styled__default['default'](GridLayout$1)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$x;

var StyledLink$1 = styled__default['default'](Text)(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$w;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$A, { color: "primary", ml: "4px" })));
};

var NotificationDotRoot = styled__default['default'].span(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled__default['default'].span(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React__default['default'].createElement(NotificationDotRoot, null,
        React.Children.map(children, function (child) { return React.cloneElement(child, props); }),
        React__default['default'].createElement(Dot, { show: show })));
};
var templateObject_1$v, templateObject_2$h;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var scaleKeyValues$1 = {
    sm: {
        pancakeSize: "16px",
        travelDistance: "16px",
        toggleHeight: "20px",
        toggleWidth: "36px",
        pancakeThickness: "1px",
        pancakeTwoOffset: "0px",
        pancakeThreeOffset: "-3px",
        butterTop: "3px",
        butterLeft: "10px",
        butterWidth: "6px",
        butterHeight: "5px",
        butterThickness: "0.5px",
        butterRadius: "2px",
        butterSmearOneTop: "10px",
        butterSmearOneLeft: "2.5px",
        butterSmearTwoTop: "11px",
        butterSmearTwoRight: "2.5px", // these values adjust the position of it
    },
    md: {
        pancakeSize: "32px",
        travelDistance: "34px",
        toggleHeight: "40px",
        toggleWidth: "72px",
        pancakeThickness: "2px",
        pancakeTwoOffset: "-3px",
        pancakeThreeOffset: "-8px",
        butterTop: "3px",
        butterLeft: "16px",
        butterWidth: "12px",
        butterHeight: "11px",
        butterThickness: "1px",
        butterRadius: "4px",
        butterSmearOneTop: "20px",
        butterSmearOneLeft: "5px",
        butterSmearTwoTop: "22px",
        butterSmearTwoRight: "5px",
    },
};
var getScale$2 = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b;
    return scaleKeyValues$1[scale][property];
}; };
var PancakeStack = styled__default['default'].div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"])), getScale$2("pancakeSize"), getScale$2("pancakeSize"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleBackground;
}, getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleShadow;
}, getScale$2("pancakeTwoOffset"), getScale$2("pancakeThreeOffset"), getScale$2("butterSmearOneTop"), getScale$2("butterSmearOneLeft"), getScale$2("butterSmearTwoTop"), getScale$2("butterSmearTwoRight"), getScale$2("butterWidth"), getScale$2("butterHeight"), getScale$2("butterTop"), getScale$2("butterLeft"), getScale$2("butterRadius"), getScale$2("butterThickness"), getScale$2("butterThickness"));
var PancakeInput = styled__default['default'].input(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"], ["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, getScale$2("travelDistance"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"));
var PancakeLabel = styled__default['default'].label(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"])), getScale$2("toggleWidth"), getScale$2("toggleHeight"), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$u, templateObject_2$g, templateObject_3$9;

var PancakeToggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b, props = __rest(_a, ["checked", "scale"]);
    return (React__default['default'].createElement(PancakeStack, { scale: scale },
        React__default['default'].createElement(PancakeInput, __assign({ id: props.id || "pancake-toggle", scale: scale, type: "checkbox", checked: checked }, props)),
        React__default['default'].createElement(PancakeLabel, { scale: scale, checked: checked, htmlFor: props.id || "pancake-toggle" },
            React__default['default'].createElement("div", { className: "pancakes" },
                React__default['default'].createElement("div", { className: "pancake" }),
                React__default['default'].createElement("div", { className: "pancake" }),
                React__default['default'].createElement("div", { className: "pancake" }),
                React__default['default'].createElement("div", { className: "butter" })))));
};
PancakeToggle.defaultProps = {
    scale: scales$3.MD,
};

var variants$1 = {
    ROUND: "round",
    FLAT: "flat",
};

var _a$2;
var styleVariants$1 = (_a$2 = {},
    _a$2[variants$1.ROUND] = {
        borderRadius: "32px",
    },
    _a$2[variants$1.FLAT] = {
        borderRadius: 0,
    },
    _a$2);

var Bar = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ",
    "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, styledSystem.variant({
    variants: styleVariants$1,
}), styledSystem.space);
var templateObject_1$t, templateObject_2$f;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$s;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$1.ROUND : _b, _c = _a.primaryStep, primaryStep = _c === void 0 ? 0 : _c, _d = _a.secondaryStep, secondaryStep = _d === void 0 ? null : _d, _e = _a.showProgressBunny, showProgressBunny = _e === void 0 ? false : _e;
    return (React__default['default'].createElement(StyledProgress, { variant: variant },
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$s, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$r;

var bunnyHeadMain = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_main%29%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%282%29%22%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_main%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyHeadMax = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_max%29%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2228%22%20height%3D%2228%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_max%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyButt = "data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2232%22%20viewBox%3D%220%200%2015%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z%22%20fill%3D%22%230098A1%22%2F%3E%3Cpath%20d%3D%22M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z%22%20fill%3D%22%2353DEE9%22%2F%3E%3Cpath%20d%3D%22M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3C%2Fsvg%3E";

var getCursorStyle = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return disabled ? "not-allowed" : "cursor";
};
var getBaseThumbStyles = function (_a) {
    var isMax = _a.isMax, disabled = _a.disabled;
    return "\n  -webkit-appearance: none;\n  background-image: url(" + (isMax ? bunnyHeadMax : bunnyHeadMain) + ");\n  cursor: " + getCursorStyle + ";\n  width: 24px;\n  height: 32px;\n  filter: " + (disabled ? "grayscale(100%)" : "none") + ";\n  transform: translate(-2px, -2px);\n  transition: 200ms transform;\n\n  &:hover {\n    transform: " + (disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)") + ";\n  }\n";
};
var SliderLabelContainer = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"], ["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"])));
var SliderLabel = styled__default['default'](Text)(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"], ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
var BunnyButt = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"], ["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"])), bunnyButt, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var BunnySlider = styled__default['default'].div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"], ["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"])));
var StyledInput = styled__default['default'].input(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n\n    background-color: transparent;\n    border: 0;\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"], ["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n\n    background-color: transparent;\n    border: 0;\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"])), getCursorStyle, getBaseThumbStyles, getBaseThumbStyles, getBaseThumbStyles);
var BarBackground = styled__default['default'].div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "inputSecondary"];
});
var BarProgress = styled__default['default'].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"], ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var templateObject_1$q, templateObject_2$e, templateObject_3$8, templateObject_4$6, templateObject_5$4, templateObject_6$1, templateObject_7;

var Slider = function (_a) {
    var name = _a.name, min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, _b = _a.step, step = _b === void 0 ? "any" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "valueLabel", "step", "disabled"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseFloat(target.value));
    };
    var progressPercentage = (value / max) * 100;
    var isMax = value === max;
    var progressWidth = isMax ? "calc(100% - 16px)" : progressPercentage + "%";
    var labelProgress = isMax ? "calc(100% - 12px)" : progressPercentage + "%";
    var displayValueLabel = isMax ? "MAX" : valueLabel;
    return (React__default['default'].createElement(Box, __assign({ position: "relative", height: "48px" }, props),
        React__default['default'].createElement(BunnyButt, { disabled: disabled }),
        React__default['default'].createElement(BunnySlider, null,
            React__default['default'].createElement(BarBackground, { disabled: disabled }),
            React__default['default'].createElement(BarProgress, { style: { width: progressWidth }, disabled: disabled }),
            React__default['default'].createElement(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })),
        valueLabel && (React__default['default'].createElement(SliderLabelContainer, null,
            React__default['default'].createElement(SliderLabel, { progress: labelProgress }, displayValueLabel)))));
};

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$p, templateObject_2$d, templateObject_3$7, templateObject_4$5, templateObject_5$3;

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 256 256" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z", fill: "#464649" }),
        React__default['default'].createElement("path", { d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z", fill: "#464649" }),
        React__default['default'].createElement("path", { d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z", fill: "#979797" }),
        React__default['default'].createElement("path", { d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z", fill: "#737373" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z", fill: "#606063" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("svg", { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z", fill: "#FEDC90", stroke: "#D1884F", strokeWidth: "2.89134" }),
            React__default['default'].createElement("path", { d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z", fill: "#D1884F", stroke: "#633001", strokeWidth: "2.89134" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z", fill: "#633001" }))));
};

var rotate = styled.keyframes(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = styled.keyframes(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$3 = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default['default'](Icon$a)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
var FloatingPanIcon = styled__default['default'](Icon$b)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$3, null,
        React__default['default'].createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" }),
        React__default['default'].createElement(FloatingPanIcon, { width: size + "px" })));
};
var templateObject_1$o, templateObject_2$c, templateObject_3$6, templateObject_4$4, templateObject_5$2;

var StepperWrapper = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"])));
var Stepper = function (_a) {
    var children = _a.children;
    var numberOfSteps = React__default['default'].Children.count(children);
    return (React__default['default'].createElement(StepperWrapper, null, React__default['default'].Children.map(children, function (child) {
        if (React__default['default'].isValidElement(child)) {
            return React__default['default'].cloneElement(child, { numberOfSteps: numberOfSteps });
        }
        return child;
    })));
};
var templateObject_1$n;

var getStepNumberFontColor = function (_a) {
    var theme = _a.theme, status = _a.status;
    if (status === "past") {
        return theme.colors.success;
    }
    if (status === "current") {
        return theme.colors.invertedContrast;
    }
    return theme.colors.textDisabled;
};
var Connector = styled__default['default'].div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "past" ? "success" : "textDisabled"];
});
var ChildrenWrapper = styled__default['default'](Box)(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  ", " {\n    visibility: ", ";\n  }\n"], ["\n  ", " {\n    visibility: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var isVisible = _a.isVisible;
    return (isVisible ? "visible" : "hidden");
});
var ChildrenLeftWrapper = styled__default['default'](ChildrenWrapper)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ChildrenRightWrapper = styled__default['default'](ChildrenWrapper)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"], ["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Wrapper$2 = styled__default['default'].div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n"])));
var StepNumber = styled__default['default'].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "current" ? "secondary" : "invertedContrast"];
}, function (_a) {
    var theme = _a.theme, status = _a.status;
    return (status === "past" ? theme.colors.success : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.circle;
}, getStepNumberFontColor, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
/**
 * ChildrenLeftWrapper and ChildrenRightWrapper are used on the non mobile version, to force the alternate layout.
 * One of the child is hidden based on the step number.
 */
var Step = function (_a) {
    var index = _a.index, status = _a.status, _b = _a.numberOfSteps, numberOfSteps = _b === void 0 ? 0 : _b, children = _a.children;
    var isIndexPair = index % 2 === 0;
    return (React__default['default'].createElement(Flex, { justifyContent: "center", mb: index < numberOfSteps - 1 ? "16px" : 0 },
        React__default['default'].createElement(ChildrenLeftWrapper, { isVisible: !isIndexPair }, children),
        React__default['default'].createElement(Wrapper$2, null,
            React__default['default'].createElement(StepNumber, { status: status }, index + 1),
            index < numberOfSteps - 1 && React__default['default'].createElement(Connector, { status: status })),
        React__default['default'].createElement(ChildrenRightWrapper, { isVisible: isIndexPair }, children)));
};
var templateObject_1$m, templateObject_2$b, templateObject_3$5, templateObject_4$3, templateObject_5$1, templateObject_6;

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArray([], action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var Wrapper$1 = styled__default['default'](Flex)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"], ["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var Inner$1 = styled__default['default'](Flex)(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"], ["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, onItemClick = _a.onItemClick, children = _a.children;
    return (React__default['default'].createElement(Wrapper$1, { p: ["0 4px", "0 16px"] },
        React__default['default'].createElement(Inner$1, null, React.Children.map(children, function (child, index) {
            return React.cloneElement(child, {
                isActive: activeIndex === index,
                onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            });
        }))));
};
var templateObject_1$l, templateObject_2$a;

var StyledTab = styled__default['default'].button(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: 8px;\n  border-radius: 16px 16px 0 0;\n  color: ", ";\n  background-color: ", ";\n  margin: 4px 0px 4px 4px;\n\n  ", " {\n    flex-grow: 0;\n    padding: 8px 12px;\n  }\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: 8px;\n  border-radius: 16px 16px 0 0;\n  color: ", ";\n  background-color: ", ";\n  margin: 4px 0px 4px 4px;\n\n  ", " {\n    flex-grow: 0;\n    padding: 8px 12px;\n  }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, bgColor = _a.bgColor;
    return theme.colors[bgColor];
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$k;

var Tab = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, onClick = _a.onClick, children = _a.children;
    return (React__default['default'].createElement(StyledTab, { onClick: onClick, bgColor: isActive ? "textSubtle" : "input", color: isActive ? "card" : "textSubtle" },
        React__default['default'].createElement(Text, { fontWeight: 600, color: isActive ? "card" : "textSubtle" }, children)));
};

var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
};
var scales$1 = {
    MD: "md",
    SM: "sm",
};

var _a$1, _b;
var scaleVariants = (_a$1 = {},
    _a$1[scales$1.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$1[scales$1.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$1);
var styleVariants = (_b = {},
    _b[variants.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants.FAILURE] = {
        backgroundColor: "failure",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: transparent;\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled__default['default'].div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n\n  ", "\n"])), styledSystem.variant({
    prop: "scale",
    variants: scaleVariants,
}), styledSystem.variant({
    variants: styleVariants,
}), styledSystem.space, getOutlineStyles);
var templateObject_1$j;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$4.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled__default['default'].div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled__default['default'].input(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$i, templateObject_2$9, templateObject_3$4;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked, scale: scale },
        React__default['default'].createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales.MD,
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    React.useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var Arrow = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
});
var StyledTooltip = styled__default['default'].div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.boxShadow;
}, Arrow, Arrow, Arrow, Arrow);
var templateObject_1$h, templateObject_2$8;

function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
var useTooltip = function (content, placement, trigger, arrowPadding, tooltipPadding, tooltipOffset) {
    if (placement === void 0) { placement = "auto"; }
    if (trigger === void 0) { trigger = "hover"; }
    var _a = React.useState(null), targetElement = _a[0], setTargetElement = _a[1];
    var _b = React.useState(null), tooltipElement = _b[0], setTooltipElement = _b[1];
    var _c = React.useState(null), arrowElement = _c[0], setArrowElement = _c[1];
    var _d = React.useState(false), visible = _d[0], setVisible = _d[1];
    var hideTooltip = React.useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(false);
    }, []);
    var showTooltip = React.useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
    }, []);
    var toggleTooltip = React.useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    React.useEffect(function () {
        if (targetElement === null || trigger !== "hover")
            return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        }
        else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [trigger, targetElement, hideTooltip, showTooltip]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    React.useEffect(function () {
        if (tooltipElement === null || trigger !== "hover")
            return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function () {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [trigger, tooltipElement, hideTooltip, showTooltip]);
    // Trigger = click
    React.useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    React.useEffect(function () {
        if (trigger !== "click")
            return undefined;
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (tooltipElement != null &&
                    targetElement != null &&
                    !tooltipElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [trigger, targetElement, tooltipElement]);
    // Trigger = focus
    React.useEffect(function () {
        if (targetElement === null || trigger !== "focus")
            return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function () {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [trigger, targetElement, showTooltip, hideTooltip]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyound the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyound the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var _e = reactPopper.usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement, padding: arrowPadding || 16 },
            },
            { name: "offset", options: { offset: tooltipOffset || [0, 10] } },
            { name: "preventOverflow", options: { padding: tooltipPadding || { left: 16, right: 16 } } },
        ],
    }), styles = _e.styles, attributes = _e.attributes;
    var tooltip = (React__default['default'].createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        content,
        React__default['default'].createElement(Arrow, { ref: setArrowElement, style: styles.arrow })));
    return {
        targetRef: setTargetElement,
        tooltip: tooltip,
        tooltipVisible: visible,
    };
};

var ModalHeader = styled__default['default'].div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"], ["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"])), function (_a) {
    var background = _a.background;
    return background || "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
});
var ModalTitle = styled__default['default'](Flex)(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var ModalBody = styled__default['default'](Flex)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  flex-direction: column;\n"], ["\n  flex-direction: column;\n"])));
var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss;
    return (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
        React__default['default'].createElement(Icon$U, { color: "primary" })));
};
var ModalBackButton = function (_a) {
    var onBack = _a.onBack;
    return (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
        React__default['default'].createElement(Icon$1b, { color: "primary" })));
};
var ModalContainer = styled__default['default'](Box)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth;
});
var templateObject_1$g, templateObject_2$7, templateObject_3$3, templateObject_4$2;

var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c, _d = _a.headerBackground, headerBackground = _d === void 0 ? "transparent" : _d, _e = _a.minWidth, minWidth = _e === void 0 ? "320px" : _e, props = __rest(_a, ["title", "onDismiss", "onBack", "children", "hideCloseButton", "bodyPadding", "headerBackground", "minWidth"]);
    return (React__default['default'].createElement(ModalContainer, __assign({ minWidth: minWidth }, props),
        React__default['default'].createElement(ModalHeader, { background: headerBackground },
            React__default['default'].createElement(ModalTitle, null,
                onBack && React__default['default'].createElement(ModalBackButton, { onBack: onBack }),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && React__default['default'].createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React__default['default'].createElement(ModalBody, { p: bodyPadding }, children)));
};

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$f;

var ModalWrapper = styled__default['default'].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$e;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Logo$2 = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 1710 360" }, props, { width: "164px" }),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("title", null, "Layer 1"),
            React__default['default'].createElement("g", { fill: "#39b102", id: "svg_1" },
                React__default['default'].createElement("path", { id: "svg_2", d: "m973.6,181.4c0,97.3 -78.9,176.2 -176.2,176.2c-32.4,0 -63.2,-8.1 -88.9,-24.1c-9.9,-6.1 -13.3,-12.2 -9.3,-20.8c9.3,-20 98,-133.2 97.3,-133.3c0,0 -89.5,71.9 -129.9,97.8c-11.9,7.7 -16.7,0.1 -17.2,-0.6c-13.2,-17.2 -28.2,-62.6 -28.2,-95.3c0,-97.3 78.9,-176.2 176.2,-176.2s176.2,78.9 176.2,176.3z" })),
            React__default['default'].createElement("g", { fill: "#FB9FF5" },
                React__default['default'].createElement("path", { id: "svg_4", d: "m816.1,101c0,13.4 -0.8,26.1 -2.3,37.1c-8.6,11.2 -14.6,21.3 -17.2,28.9c-2.7,-7.6 -8.6,-17.6 -17.1,-28.7c-1.5,-11.1 -2.3,-23.9 -2.3,-37.4c0,-43.4 19.5,-78.7 19.5,-78.7s19.4,35.4 19.4,78.8z" }),
                React__default['default'].createElement("path", { id: "svg_5", d: "m787.8,171c-7.1,-3.5 -18.4,-6.4 -32.2,-8.3c-9,-6.9 -18.7,-15.4 -28.4,-25.1c-30.7,-30.7 -41.9,-69.4 -41.9,-69.4s38.7,11.2 69.4,41.9c9.6,9.6 18.1,19.3 24.9,28.3c1.8,13.9 4.7,25.3 8.2,32.6z" }),
                React__default['default'].createElement("path", { id: "svg_6", d: "m784.3,179.7c-7.5,2.5 -17.7,8.4 -29,17l0,0c-11.2,1.5 -24.1,2.4 -37.8,2.4c-43.4,0 -78.7,-19.5 -78.7,-19.5s35.2,-19.5 78.7,-19.5c13.8,0 26.8,0.9 38.1,2.4c11.1,8.7 21.2,14.7 28.7,17.2z" }),
                React__default['default'].createElement("path", { id: "svg_7", d: "m787.6,188.5c-3.5,7.2 -6.4,18.5 -8.2,32.3c-6.9,9.1 -15.5,18.9 -25.3,28.7c-30.7,30.7 -69.4,41.9 -69.4,41.9s11.2,-38.7 41.9,-69.4c9.8,-9.8 19.6,-18.4 28.7,-25.3l0,0c13.8,-1.8 25.1,-4.7 32.3,-8.2z" }),
                React__default['default'].createElement("path", { id: "svg_8", d: "m815.9,258.7c0,43.4 -19.5,78.7 -19.5,78.7s-19.4,-35.3 -19.4,-78.7c0,-13.7 0.9,-26.6 2.4,-37.8c8.6,-11.4 14.6,-21.6 17.1,-29.1c2.5,7.6 8.4,17.8 17.1,29.1c1.4,11.2 2.3,24.1 2.3,37.8z" }),
                React__default['default'].createElement("path", { id: "svg_9", d: "m908.1,291.4c0,0 -38.7,-11.2 -69.4,-41.9c-9.8,-9.8 -18.4,-19.6 -25.3,-28.7c-1.8,-13.4 -4.6,-24.4 -7.9,-31.6c7.3,3.5 18.8,6.3 32.8,8.2c8.8,6.8 18.3,15.1 27.8,24.6c30.9,30.8 42,69.4 42,69.4z" }),
                React__default['default'].createElement("path", { id: "svg_10", d: "m954,180.3c0,0 -35.2,19.5 -78.7,19.5c-13.4,0 -25.9,-0.8 -36.9,-2.3c-11.7,-9 -22.3,-15.2 -30,-17.7c7.3,-2.4 17.2,-8.1 28.2,-16.4c0,0 0,0 0,0c11.4,-1.6 24.7,-2.5 38.8,-2.5c43.4,-0.1 78.6,19.4 78.6,19.4z" }),
                React__default['default'].createElement("path", { id: "svg_11", d: "m908.1,68c0,0 -11.2,38.7 -41.9,69.4c-10.1,10.1 -20.3,18.9 -29.6,26c0,0 0,0 0,0c-13.3,1.9 -24.2,4.7 -31.2,8c3.6,-7.3 6.6,-18.9 8.5,-33.3c6.8,-9 15.3,-18.6 24.9,-28.3c30.7,-30.6 69.3,-41.8 69.3,-41.8z" })),
            React__default['default'].createElement("g", { fill: "#FB40EE" },
                React__default['default'].createElement("path", { id: "svg_13", d: "m851.7,126c-3.7,0.7 -7.4,1.8 -11,3.3c-12.2,5.1 -22.7,11.8 -30.5,19c-0.3,-10.7 -3,-23 -8.1,-35.4c-1.4,-3.5 -3.2,-6.7 -5.2,-9.7c15.7,-23.8 46.2,-34.1 46.2,-34.1s14.3,29 8.6,56.9z" }),
                React__default['default'].createElement("path", { id: "svg_14", d: "m796.9,103.2c-2,3 -3.8,6.2 -5.2,9.7c-5,12.2 -7.7,24.2 -8.1,34.8c-7.8,-7.3 -18.3,-14 -30.5,-19.1c-3.7,-1.5 -7.4,-2.6 -11.1,-3.3c-5.3,-27.7 8.8,-56 8.8,-56s30.4,10.2 46.1,33.9z" }),
                React__default['default'].createElement("path", { id: "svg_15", d: "m763.8,166.4c-10.5,0.4 -22.6,3.1 -34.7,8.1c-3.5,1.5 -6.8,3.3 -9.9,5.3c-23.3,-15.8 -33.4,-45.8 -33.4,-45.8s28.4,-14.1 56.1,-8.7c0.7,3.8 1.8,7.5 3.3,11.2c5,11.9 11.5,22.2 18.6,29.9z" }),
                React__default['default'].createElement("path", { id: "svg_16", d: "m764.1,193.5c-7.1,7.7 -13.6,18 -18.6,30c-1.5,3.6 -2.6,7.3 -3.3,11c-27.9,5.7 -56.8,-8.6 -56.8,-8.6s10.2,-30.3 33.8,-46.1c3.2,2.2 6.6,4.1 10.3,5.6c12.1,5 24.1,7.6 34.6,8.1z" }),
                React__default['default'].createElement("path", { id: "svg_17", d: "m796.6,257.5c-15.9,23.2 -45.7,33.3 -45.7,33.3s-14.1,-28.5 -8.7,-56.3c3.5,-0.7 7,-1.8 10.4,-3.2c12.2,-5 22.6,-11.7 30.3,-18.9c0.4,10.5 3,22.6 8.1,34.8c1.6,3.7 3.5,7.1 5.6,10.3z" }),
                React__default['default'].createElement("path", { id: "svg_18", d: "m907.9,134.7c0,0 -10.1,29.9 -33.3,45.7c-3.3,-2.3 -6.9,-4.3 -10.7,-5.9c-11.9,-4.9 -23.7,-7.6 -34.1,-8.1c7.1,-7.7 13.7,-18.1 18.7,-30.1c1.4,-3.4 2.4,-6.9 3.2,-10.4c27.8,-5.3 56.2,8.8 56.2,8.8z" }),
                React__default['default'].createElement("path", { id: "svg_19", d: "m842.4,290.9c0,0 -30,-10.1 -45.8,-33.4c2.2,-3.2 4.1,-6.7 5.7,-10.4c4.9,-11.9 7.6,-23.8 8.1,-34.2c7.7,7.1 18,13.6 30,18.6c3.5,1.5 7.1,2.5 10.8,3.2c5.3,27.7 -8.8,56.2 -8.8,56.2z" }),
                React__default['default'].createElement("path", { id: "svg_20", d: "m907.7,226c0,0 -28.7,14.2 -56.5,8.7c-0.7,-3.7 -1.8,-7.4 -3.3,-11c-4.9,-11.7 -11.2,-21.8 -18.1,-29.5c10.5,-0.4 22.4,-3.1 34.5,-8.1c3.7,-1.5 7.2,-3.5 10.4,-5.7c23,16 33,45.6 33,45.6z" })),
            React__default['default'].createElement("polygon", { id: "svg_21", points: "822.7999877929688,115.5 796.9000244140625,157 767.9000244140625,115.5 781.0999755859375,164.29998779296875 729.0999755859375,153.39999389648438 774.4000244140625,180.0999755859375 729.0999755859375,207 781.0999755859375,195.9000244140625 767.9000244140625,244.79998779296875 796.9000244140625,202.5999755859375 822.7999877929688,244.79998779296875 813.2999877929688,195.9000244140625 861.5999755859375,207 820,180.0999755859375 861.5999755859375,153.39999389648438 812.7000122070312,164.29998779296875 ", fill: "#D21276" }),
            React__default['default'].createElement("polygon", { id: "svg_22", points: "796.7000122070312,93.29998779296875 793.2000122070312,170.5 736,117.89999389648438 788.7000122070312,176.20001220703125 710.7999877929688,179.70001220703125 787.5,183.0999755859375 736.5999755859375,238.5999755859375 793.2000122070312,188.29998779296875 796.7000122070312,264.9000244140625 800.0999755859375,188.79998779296875 856.2000122070312,239.70001220703125 805.2000122070312,183.0999755859375 881.2999877929688,179.70001220703125 806.4000244140625,175.70001220703125 857.2999877929688,119 800.7000122070312,170.5 ", fill: "#FF2AD8" }),
            React__default['default'].createElement("polygon", { id: "svg_23", points: "815.0999755859375,134.10000610351562 797.0999755859375,163.70001220703125 776.9000244140625,134.10000610351562 786.0999755859375,168.89999389648438 749.9000244140625,161.10000610351562 781.5,180.20001220703125 749.9000244140625,199.29998779296875 786.0999755859375,191.4000244140625 776.9000244140625,226.4000244140625 797.0999755859375,196.20001220703125 815.0999755859375,226.4000244140625 808.5,191.4000244140625 842.2000122070312,199.29998779296875 813.2000122070312,180.20001220703125 842.2000122070312,161.10000610351562 808.0999755859375,168.89999389648438 ", fill: "#F53A30" }),
            React__default['default'].createElement("path", { id: "svg_24", d: "m651.9,247.4", style: { fill: "none", stroke: "#000000" } }),
            React__default['default'].createElement("g", { id: "svg_25" },
                React__default['default'].createElement("path", { id: "svg_26", d: "m167.6,144.3c-0.2,17.2 -2.8,35.4 -15.8,47.2c-13,11.7 -33,20.8 -50.8,20.8l-56.8,-0.3l0,78l-43.5,-0.5l0,-211.5l94.3,0c20.9,0 38.3,6.3 52.2,18.8c13.9,12.6 20.7,28.4 20.4,47.5zm-39.2,-3.5c-0.6,-6.3 -4.5,-13 -10.5,-17.8c-5.4,-4.3 -21.2,-8.1 -34.2,-8.1l-39.6,-0.5l1,59.1l40.3,0c13.6,0 28.4,0.1 36.2,-9.8c6,-7.7 7.5,-15.3 6.8,-22.9z", fill: "#26D8AC" }),
                React__default['default'].createElement("path", { id: "svg_27", d: "m384,287.2l-47.7,0l-31,-64.2l-97.5,0.8l-29.3,63.4l-45.9,0l99.5,-211.8l50.5,0l101.4,211.8zm-93.5,-103.2l-32.4,-74.7l-32.4,74.9l64.8,-0.2z", fill: "#26D8AC" }),
                React__default['default'].createElement("path", { id: "svg_28", d: "m589.9,180.5c0,29 -10.4,53.8 -31.2,74.5c-20.8,20.7 -45.6,31.1 -74.4,31.1l-87.3,1.1l-2.3,-212.6l79.1,0c33.7,0 61.5,10.1 83.3,30.2c21.9,20.2 32.8,45.4 32.8,75.7zm-40.1,-1.9c-0.6,-23.5 -12.7,-38.6 -19.3,-46.6c-15.3,-18.5 -28.3,-19.7 -52.7,-19.7l-41.9,0l0,134.1l46.2,-0.7c24,0 31.3,-2.6 49.3,-18.8c9.6,-8.5 19.2,-24.2 18.4,-48.3z", fill: "#26D8AC" })),
            React__default['default'].createElement("g", { id: "svg_29" },
                React__default['default'].createElement("path", { id: "svg_30", d: "m1120.6,225.9c0.2,17.2 -5.9,31.9 -18.3,44.1c-12.4,12.2 -27.4,18.3 -45,18.3c-17.6,0 -32.5,-6 -44.8,-18.2c-12.3,-12.1 -18.5,-27.2 -18.7,-45.4l22.2,0c-0.2,11.6 3.7,21.7 11.8,30.2c8,8.5 17.7,12.8 29.1,13c11.9,0.2 22.1,-3.9 30.6,-12.1c8.5,-8.3 12.6,-18.3 12.2,-30.3c-0.6,-19.6 -13.5,-33.4 -38.8,-41.3l-22.5,-7c-11.9,-3.7 -21.2,-10 -27.8,-19.1c-6.6,-9.1 -10,-20 -10.2,-32.6c-0.2,-15.6 5.6,-28.9 17.3,-39.8c11.7,-10.9 25.6,-16.3 41.5,-16.1c15.8,0.2 29.2,5.9 40.2,17.2s16.5,24.8 16.5,40.6l-22.2,0c0.2,-10 -3.1,-18.6 -9.7,-25.8s-14.9,-11.1 -24.5,-11.6c-10.2,-0.6 -19.2,2.8 -27,10.1c-7.8,7.3 -11.5,16 -11.1,26.1c0.4,16.6 8.4,27.3 24.2,32.3l25.6,8c32.5,10.3 49,30.1 49.4,59.4z", fill: "#88D27A" }),
                React__default['default'].createElement("path", { id: "svg_31", d: "m1361.8,127.7l-58.9,156.8l-24.4,0l-34.1,-103.8l-32,103.8l-24.2,0l-59.4,-156.8l22.1,0l48.9,130.6l36.3,-111.6l17.9,0l35.7,110.6l49.5,-129.5l22.6,0l0,-0.1z", fill: "#88D27A" }),
                React__default['default'].createElement("path", { id: "svg_32", d: "m1519.6,205.8l0,1.1l0,77.6l-20.9,0l0,-24.5c-17,19.4 -37.8,28.8 -62.5,28c-21.5,-0.7 -39.9,-9.1 -55.1,-25c-15.2,-16 -22.7,-34.9 -22.7,-56.9c0,-22.9 8.2,-42.6 24.5,-59c16.3,-16.4 35.8,-24.2 58.6,-23.2c22,0.7 40.7,9.1 56.1,25.2c15.4,16 22.7,34.9 22,56.7zm-20.9,-1.5c-0.4,-16.5 -6.2,-30.7 -17.6,-42.4c-11.4,-11.8 -25.1,-17.6 -41.1,-17.6c-16.7,0 -31,5.9 -42.7,17.6c-11.8,11.8 -17.7,26 -17.9,42.7c-0.4,16.5 5.1,31 16.4,43.4c11.3,12.4 24.9,19 40.9,19.7c17.3,0.7 32,-5.3 44.2,-18.1c12.2,-12.7 18.2,-27.8 17.8,-45.3z", fill: "#88D27A" }),
                React__default['default'].createElement("path", { id: "svg_33", d: "m1703,205.8c0,22.9 -8.2,42.6 -24.5,59c-16.3,16.4 -35.8,24.2 -58.3,23.5c-23.1,-0.9 -42.4,-10.2 -58,-27.8l0,78.9l-20.4,0l0,-132.2c0,-0.5 0,-0.9 0,-1.1c0,-22.5 8.2,-42 24.6,-58.4c16.4,-16.4 35.9,-24.2 58.4,-23.5c21.8,0.5 40.3,8.8 55.4,24.8c15.3,15.9 22.8,34.8 22.8,56.8zm-20.9,1.7c0.2,-16.6 -5.3,-31.1 -16.6,-43.5c-11.2,-12.4 -25,-18.9 -41.2,-19.5c-17.3,-0.9 -32.1,5.1 -44.3,18s-18.2,28 -17.8,45.3c0.4,16.6 6.3,30.8 17.7,42.5c11.4,11.8 25.2,17.7 41.4,17.7c16.6,0 30.8,-5.9 42.5,-17.7c11.9,-11.8 18,-26 18.3,-42.8z", fill: "#88D27A" })))));
};
var LogoWithText = React__default['default'].memo(Logo$2, function (prev, next) { return prev.isDark === next.isDark; });

var blink = styled.keyframes(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  0%,  100% { transform: scaleY(1); }\n  50% { transform:  scaleY(0.1); }\n"], ["\n  0%,  100% { transform: scaleY(1); }\n  50% { transform:  scaleY(0.1); }\n"])));
var StyledLink = styled__default['default'](reactRouterDom.Link)(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 170px;\n    margin: 23px 20px 20px 17px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    display: none;\n    width: 170px;\n    margin: 23px 20px 20px 17px;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 170px;\n    margin: 23px 20px 20px 17px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    display: none;\n    width: 170px;\n    margin: 23px 20px 20px 17px;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, blink);
var Logo = function (_a) {
    var isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(LogoWithText, { className: "mobile-icon", isDark: isDark }),
        React__default['default'].createElement(LogoWithText, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null, isAbsoluteUrl ? (React__default['default'].createElement(StyledLink, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var Logo$1 = React__default['default'].memo(Logo, function (prev, next) { return prev.isDark === next.isDark; });
var templateObject_1$d, templateObject_2$6;

var status = {
    LIVE: {
        text: "LIVE",
        color: "failure",
    },
    SOON: {
        text: "SOON",
        color: "warning",
    },
    NEW: {
        text: "NEW",
        color: "success",
    },
};
var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://padswap.exchange",
            },
            {
                label: "Liquidity",
                href: "https://padswap.exchange/#/pool",
            },
        ],
    },
    {
        label: "Vault",
        icon: "VaultIcon",
        href: "/vault",
    },
    {
        label: 'Pools',
        icon: 'PoolIcon',
        href: '/pool',
    },
    {
        label: 'Farms',
        icon: 'FarmIcon',
        href: '/pool',
    },
    {
        label: 'Chart/Stats',
        icon: 'ChartIcon',
        href: '/chart',
    },
    {
        label: "TOAD",
        icon: "ToadLogo",
        items: [
            {
                label: "Farms",
                href: "https://toad.network/#/why_choose",
            },
            {
                label: "LP Farms",
                href: "https://toad.network/lpfarming.html",
            },
            {
                label: "Church",
                href: "https://toadnetwork.church",
            },
        ],
        calloutClass: "rainbow",
    },
    /*  {
        label: "Info",
        icon: "InfoIcon",
        items: [
          {
            label: "Overview",
            href: "https://info.padswap.exchange",
          },
          {
            label: "Tokens",
            href: "https://info.padswap.exchange/tokens",
          },
          {
            label: "Pairs",
            href: "https://info.padswap.exchange/pairs",
          },
          {
            label: "Accounts",
            href: "https://info.padswap.exchange/accounts",
          },
        ],
      },*/
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Github",
                href: "https://github.com/ToadNetwork",
            },
            {
                label: "Medium",
                href: "https://toadytoad.medium.com/",
            },
        ],
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 0;

var rainbowAnimation = styled.keyframes(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  color: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  color: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkStatus = styled__default['default'](Text)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var LinkLabelMemo = React__default['default'].memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$c, templateObject_2$5, templateObject_3$2, templateObject_4$1;

var Container$2 = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive },
            React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$18, null) : React__default['default'].createElement(Icon$19, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var Accordion$1 = React__default['default'].memo(Accordion, function (prev, next) { return prev.isPushed === next.isPushed && prev.isActive === next.isActive; });
var templateObject_1$b, templateObject_2$4;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Container$1 = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n   -ms-overflow-style: none;  /* Internet Explorer 10+ */\n    scrollbar-width: none;  /* Firefox */\n  border-radius: 17px 17px 0px 0px;\n  height: 100%;\n  ::-webkit-scrollbar { \n    display: none;  /* Safari and Chrome */\n}\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n   -ms-overflow-style: none;  /* Internet Explorer 10+ */\n    scrollbar-width: none;  /* Firefox */\n  border-radius: 17px 17px 0px 0px;\n  height: 100%;\n  ::-webkit-scrollbar { \n    display: none;  /* Safari and Chrome */\n}\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$1, null, links.map(function (entry) {
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React__default['default'].createElement(Accordion$1, { key: entry.label, isPushed: isPushed, pushNav: pushNav, label: entry.label, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href },
                        React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, item.label),
                        item.status && (React__default['default'].createElement(LinkStatus, { color: item.status.color, fontSize: "14px" }, item.status.text))))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label),
                entry.status && (React__default['default'].createElement(LinkStatus, { color: entry.status.color, fontSize: "14px" }, entry.status.text)))));
    })));
};
var templateObject_1$a;

var Icon$7 = function (props) {
    return (React__default['default'].createElement("div", { style: { display: "flex", justifyContent: "center",
            alignItems: "center",
            width: "24px",
            minWidth: "24px",
            height: "24px",
            marginRight: "8px",
            borderRadius: "8px",
            backgroundColor: "rgb(29, 200, 114)" } },
        React__default['default'].createElement(Svg, __assign({ style: { margin: "auto" }, viewBox: "0 0 24 24" }, props),
            React__default['default'].createElement("path", { d: "M7 6H19V9H7V6Z" }),
            React__default['default'].createElement("path", { d: "M3.17317 7.51079C3.07444 7.39497 3.07808 7.22356 3.18164 7.11203L7 3L7 12L3.17317 7.51079Z" }),
            React__default['default'].createElement("path", { d: "M18 16H5V19H18V16Z" }),
            React__default['default'].createElement("path", { d: "M20.8221 17.7336C20.9235 17.6203 20.9242 17.449 20.8236 17.335L17 13L17 22L20.8221 17.7336Z" }))));
};

var PriceLink = styled__default['default'].a(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-top: 22px;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-top: 22px;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var StatsContainer = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: block;\n  align-items: center;\n  padding: 16px;\n  border-radius: 16px;\n  background-color: rgb(42 45 49);\n  height: 143px;\n  overflow: hidden;\n  width:100%;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: -115px;\n"], ["\n  display: block;\n  align-items: center;\n  padding: 16px;\n  border-radius: 16px;\n  background-color: rgb(42 45 49);\n  height: 143px;\n  overflow: hidden;\n  width:100%;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: -115px;\n"])));
var PadPrice = function (_a) {
    var padPriceUsd = _a.padPriceUsd, padMcapUsd = _a.padMcapUsd;
    return padPriceUsd && padMcapUsd ? (React__default['default'].createElement(StatsContainer, null,
        React__default['default'].createElement("div", { style: { marginBottom: "15px", width: "100%", fontSize: "15px", color: "white" } }, "PadSwap Live Info"),
        React__default['default'].createElement(PriceLink, { href: "https://padswap.info", target: "_blank" },
            React__default['default'].createElement(Icon$7, { width: "16px", mr: "8px" }),
            React__default['default'].createElement(Text, { color: "textSubtle", style: { fontSize: "14px", flexGrow: 1 } }, "Price"),
            React__default['default'].createElement(Text, { color: "textSubtle", style: { fontSize: "14px", color: "rgb(29, 200, 114)" } }, "$" + padPriceUsd.toFixed(3) + "/K")),
        React__default['default'].createElement(PriceLink, { href: "https://padswap.info", target: "_blank" },
            React__default['default'].createElement(Icon$7, { width: "16px", mr: "8px" }),
            React__default['default'].createElement(Text, { color: "textSubtle", style: { fontSize: "14px", flexGrow: 1 } }, "Market Cap"),
            React__default['default'].createElement(Text, { color: "textSubtle", style: { fontSize: "14px", color: "rgb(29, 200, 114)" } }, "$" + padMcapUsd.toFixed(0) + "K")))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 }));
};
var CakePrice = React__default['default'].memo(PadPrice);
var templateObject_1$9, templateObject_2$3;

var Container = styled__default['default'].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: invisible;\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: invisible;\n"])));
styled__default['default'].div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav; _a.toggleTheme; _a.isDark; var padPriceUsd = _a.padPriceUsd, padMcapUsd = _a.padMcapUsd; _a.currentLang; _a.langs; _a.setLang;
    if (!isPushed) {
        return (React__default['default'].createElement(Container, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$T, null))));
    }
    return (React__default['default'].createElement(Container, null,
        React__default['default'].createElement(SocialEntry, null, React__default['default'].createElement(CakePrice, { padPriceUsd: padPriceUsd, padMcapUsd: padMcapUsd }))));
};
var templateObject_1$8, templateObject_2$2, templateObject_3$1;

var StyledPanel = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 11;\n  overflow: auto;\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    width: ", ";\n  }"], ["\n  position: fixed;\n  top: 0px;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 11;\n  overflow: auto;\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    width: ", ";\n  }"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : SIDEBAR_WIDTH_REDUCED + "px");
}, function (_a) {
    var isPushed = _a.isPushed;
    return !isPushed && "white-space: nowrap;";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu, isDark = props.isDark;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(Logo$1, { isDark: isDark, href: '/' }),
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$7;

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip-trustwallet)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip-trustwallet" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React__default['default'].createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

exports.ConnectorNames = void 0;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(exports.ConnectorNames || (exports.ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$6,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: Icon$3,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: Icon$5,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "TokenPocket",
        icon: Icon$4,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: Icon$2,
        connectorId: exports.ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1,
        connectorId: exports.ConnectorNames.BSC,
    },
    {
        title: "SafePal Wallet",
        icon: Icon,
        connectorId: exports.ConnectorNames.Injected,
    },
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { width: "100%", variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React__default['default'].createElement(Icon$P, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$6;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$R, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$5, templateObject_2$1;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { scale: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button, { scale: "xs", variant: "secondary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(Button, { scale: "xs", variant: "primary", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};
var UserBlock$1 = React__default['default'].memo(UserBlock, function (prevProps, nextProps) { return prevProps.account === nextProps.account; });

var MenuButton = styled__default['default'](Button)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$4;

var Wrapper = styled__default['default'].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  left: ", ";\n  top: 0px;\n  width: ", ";\n  transition: 0.3s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  height: ", "px;\n  background-color: transparent;\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  left: ", ";\n  top: 0px;\n  width: ", ";\n  transition: 0.3s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  height: ", "px;\n  background-color: transparent;\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100vw - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
}, MENU_HEIGHT);
var BodyWrapper = styled__default['default'].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: 0.3s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: 0.3s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + 20 : SIDEBAR_WIDTH_REDUCED + 20) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL + 20 : SIDEBAR_WIDTH_REDUCED + 20) + "px)";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, padPriceUsd = _a.padPriceUsd, padMcapUsd = _a.padMcapUsd, links = _a.links; _a.profile; var children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _b = React.useState(!isMobile), isPushed = _b[0], setIsPushed = _b[1];
    var _c = React.useState(true), showMenu = _c[0], setShowMenu = _c[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    links.find(function (link) { return link.label === "Home"; });
    var togglePush = function () { return setIsPushed(function (prevState) { return !prevState; }); };
    return (React__default['default'].createElement(Wrapper, null,
        React__default['default'].createElement(StyledNav, { isPushed: isPushed, showMenu: showMenu },
            React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React__default['default'].createElement(Icon$8, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$9, { width: "24px", color: "textSubtle" }))),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock$1, { account: account, login: login, logout: logout }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, padPriceUsd: padPriceUsd, padMcapUsd: padMcapUsd, pushNav: setIsPushed, links: links }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", scale: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, scale: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$2.INFO,
    _a[types.SUCCESS] = variants$2.SUCCESS,
    _a[types.DANGER] = variants$2.DANGER,
    _a[types.WARNING] = variants$2.WARNING,
    _a);
var StyledToast = styled__default['default'].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$2;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

var baseColors = {
    failure: "#ED4B9E",
    primary: "white",
    primaryBright: "#53DEE9",
    primaryDark: "#0098A1",
    secondary: "rgb(37, 216, 174)",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { backgroundimg: "none", background: "rgb(0 0 0/92%)", backgroundDisabled: "#3c3742", contrast: "#191326", dropdown: "#F6F6F6", invertedContrast: "#212429", input: "#ffffff0a", inputSecondary: "#d7caec", tertiary: "#212429", text: "white", textDisabled: "#666171", textSubtle: "white", borderColor: "#E9EAEB", card: "#212429", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
        cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
        blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
        violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#9A6AFF", background: "rgb(0 0 0/92%)", backgroundimg: "none", backgroundDisabled: "#3c3742", contrast: "#212429", dropdown: "#1E1D20", invertedContrast: "#191326", input: "#ffffff0a", inputSecondary: "#66578D", primaryDark: "#0098A1", tertiary: "#212429", text: "white", textDisabled: "#666171", textSubtle: "white", borderColor: "#524B63", card: "#212429", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
        cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
        blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
        violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    } });

var light$7 = {
    background: lightColors.card,
};
var dark$7 = {
    background: darkColors.card,
};

var light$6 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: lightColors.gradients.cardHeader,
        blue: lightColors.gradients.blue,
        violet: lightColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$6 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: darkColors.gradients.cardHeader,
        blue: darkColors.gradients.blue,
        violet: darkColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$5 = {
    handleBackground: lightColors.card,
    handleShadow: lightColors.textDisabled,
};
var dark$5 = {
    handleBackground: darkColors.card,
    handleShadow: darkColors.textDisabled,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$2 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$2 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$1 = {
    background: lightColors.card,
};
var dark$1 = {
    background: darkColors.card,
};

var light = {
    background: darkColors.card,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark = {
    background: lightColors.card,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$7, colors: darkColors, card: dark$6, toggle: dark$3, nav: dark$2, modal: dark$1, pancakeToggle: dark$5, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$7, colors: lightColors, card: light$6, toggle: light$3, nav: light$2, modal: light$1, pancakeToggle: light$5, radio: light$4, tooltip: light });

exports.AddIcon = Icon$1c;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$1b;
exports.ArrowDownIcon = Icon$1a;
exports.ArrowDropDownIcon = Icon$19;
exports.ArrowDropUpIcon = Icon$18;
exports.ArrowForwardIcon = Icon$17;
exports.ArrowUpIcon = Icon$16;
exports.AutoRenewIcon = Icon$15;
exports.BackgroundImage = BackgroundImage;
exports.BalanceInput = BalanceInput;
exports.BaseLayout = GridLayout$1;
exports.BinanceIcon = Icon$14;
exports.BlockIcon = Icon$1e;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$13;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu$1;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$10;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$11;
exports.Cards = Icon$12;
exports.CardsLayout = GridLayout;
exports.ChartIcon = Icon$_;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon$1g;
exports.CheckmarkIcon = Icon$Z;
exports.ChevronDownIcon = Icon$Y;
exports.ChevronLeftIcon = Icon$X;
exports.ChevronRightIcon = Icon$W;
exports.ChevronUpIcon = Icon$V;
exports.CircleOutlineIcon = Icon$$;
exports.CloseIcon = Icon$U;
exports.CogIcon = Icon$T;
exports.CommunityIcon = Icon$S;
exports.CopyIcon = Icon$R;
exports.CrownIcon = Icon$Q;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1f;
exports.ExpandableButton = ExpandableButton;
exports.ExpandableLabel = ExpandableLabel;
exports.FallingBunnies = FallingBunnies;
exports.Flex = Flex;
exports.Heading = Heading;
exports.HelpIcon = Icon$P;
exports.HistoryIcon = Icon$O;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$1d;
exports.Input = Input$1;
exports.LaurelLeftIcon = Icon$N;
exports.LaurelRightIcon = Icon$M;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$L;
exports.LogoIcon = Icon$K;
exports.LogoRoundIcon = Icon$J;
exports.MedalBronzeIcon = Icon$I;
exports.MedalGoldIcon = Icon$H;
exports.MedalPurpleIcon = Icon$G;
exports.MedalSilverIcon = Icon$F;
exports.MedalTealIcon = Icon$E;
exports.Menu = Menu;
exports.MetamaskIcon = Icon$D;
exports.MinusIcon = Icon$C;
exports.Modal = Modal;
exports.ModalBackButton = ModalBackButton;
exports.ModalBody = ModalBody;
exports.ModalCloseButton = ModalCloseButton;
exports.ModalContainer = ModalContainer;
exports.ModalHeader = ModalHeader;
exports.ModalProvider = ModalProvider;
exports.ModalTitle = ModalTitle;
exports.NoProfileAvatarIcon = Icon$B;
exports.NotificationDot = NotificationDot;
exports.OpenNewIcon = Icon$A;
exports.PancakeRoundIcon = Icon$y;
exports.PancakeToggle = PancakeToggle;
exports.PancakesIcon = Icon$z;
exports.PlayCircleOutlineIcon = Icon$w;
exports.PocketWatchIcon = Icon$x;
exports.PrizeIcon = Icon$v;
exports.Progress = Progress;
exports.ProgressBunny = Icon$s;
exports.Radio = Radio;
exports.RefreshIcon = Icon$c;
exports.RemoveIcon = Icon$u;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$i;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.Step = Step;
exports.Stepper = Stepper;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$h;
exports.SyncAltIcon = Icon$g;
exports.Tab = Tab;
exports.TabMenu = ButtonMenu;
exports.Tag = Tag;
exports.TeamPlayerIcon = Icon$p;
exports.TestnetIcon = Icon$o;
exports.Text = Text;
exports.Ticket = Icon$n;
exports.TicketRound = Icon$m;
exports.TimerIcon = Icon$l;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.TrophyGoldIcon = Icon$k;
exports.TuneIcon = Icon$j;
exports.VerifiedIcon = Icon$t;
exports.VolumeOffIcon = Icon$f;
exports.VolumeUpIcon = Icon$e;
exports.WaitIcon = Icon$r;
exports.WarningIcon = Icon$d;
exports.Won = Icon$q;
exports.alertVariants = variants$2;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.connectorLocalStorageKey = connectorLocalStorageKey;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.menuStatus = status;
exports.toastTypes = types;
exports.useKonamiCheatCode = useKonamiCheatCode;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useTooltip = useTooltip;
exports.useWalletModal = useWalletModal;

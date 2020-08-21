"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app'); // Select DOM Items

var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');
var menuNav = document.querySelector('.menu-nav');
var menuBranding = document.querySelector('.menu-branding');
var navItems = document.querySelectorAll('.nav-item'); // Set Initial State Of Menu

var showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(function (item) {
      return item.classList.add('show');
    }); // Set Menu State

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(function (item) {
      return item.classList.remove('show');
    }); // Set Menu State

    showMenu = false;
  }
}
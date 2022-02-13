/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _poke = __webpack_require__(1);
	
	var _list = __webpack_require__(2);
	
	var listFilter = '';
	var listElement = document.querySelector("#pokeList"),
	    inputElement = document.querySelector("#pokeFilter"),
	    pokeballElement = document.querySelector("#pokeballBack");
	
	inputElement.addEventListener('keyup', function () {
	    listFilter = this.value;
	    setList();
	});
	
	window.addEventListener('scroll', function () {
	    var rotation = 'rotateZ(' + this.scrollY / 15 + 'deg)';
	    pokeballElement.style.transform = rotation;
	});
	
	function setList() {
	    _poke.PokeService.listAll().then(filterList).then(_list.ListService.createList).then(function (template) {
	        return listElement.innerHTML = template;
	    });
	}
	
	function filterList(pkmList) {
	    return pkmList.filter(function (pkm) {
	        return pkm.name.includes(listFilter.toLowerCase());
	    });
	}
	
	setList();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var PokeService = exports.PokeService = {
	    get url() {
	        return 'https://pokeapi.co/api/v2/';
	    },
	    list: [],
	    listAll: function listAll() {
	        var _this = this;
	
	        if (this.list.length) {
	            return Promise.resolve(this.list);
	        } else {
	            return fetch(this.url + 'pokedex/1').then(function (response) {
	                return response.json();
	            }).then(function (result) {
	                return result.pokemon_entries;
	            }).then(function (pkmList) {
	                return pkmList.map(function (pokemon) {
	                    pokemon.number = pokemon.entry_number;
	                    pokemon.name = pokemon.pokemon_species.name;
	                    return pokemon;
	                }).filter(function (pokemon) {
	                    return pokemon.number <= 100;
	                }).sort(function (a, b) {
	                    return a.number > b.number ? 1 : -1;
	                }).map(function (pokemon) {
	                    pokemon.number = ('000' + pokemon.number).slice(-3);
	                    return pokemon;
	                });
	            }).then(function (list) {
	                _this.list = list;
	                return list;
	            });
	        }
	    }
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var ListService = exports.ListService = {
	    createList: function createList(pkmList) {
	        return pkmList.map(function (pokemon) {
	            return '<li class="poke-item-list">\n                        <img src="//serebii.net/pokedex-xy/icon/' + pokemon.number + '.png">\n                        <span>' + pokemon.number + '</span> <span>' + pokemon.name + '</span>\n                    </li>';
	        }).join('');
	    }
	};

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map
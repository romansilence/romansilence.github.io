webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "codemirror {\r\n    width: 60%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<app-ui-editor [blocks]=\"getBlocks()\" [blockTypes]=\"types\" (addBlock)=\"addBlock($event)\" (delete)=\"delete($event)\"></app-ui-editor>\n<app-code-editor [content]=\"getContent()\" (change)=\"change($event)\"></app-code-editor>"

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<div> \n  <div>\n    <a href=\"\" (click)=\"showForm($event)\" *ngIf=\"!show\">Add New Block</a> \n  </div>\n  <div  class=\"types-form\" *ngIf=\"show\">\n    <div *ngFor=\"let type of types\">\n      <label><input type=\"radio\" [(ngModel)]=\"selected\" [value]=\"type\" name=\"type\">{{ type }}</label>\n    </div>\n    <button class=\"btn\" (click)=\"addBlock()\">Add Block</button>\n    <button class=\"btn\" (click)=\"cancel()\">Cancel</button>\n  </div>\n</div> "

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<div class=\"blockType\">\n  <div class=\"block-header\">\n    <h2>BlockType #1</h2>    \n    <a href=\"\" (click)=\"onDelete($event)\">Delete</a>\n  </div>\n  <div *ngIf=\"block.title\">\n    <label>\n      {{ block.title.key }}\n    </label>\n    <input [(ngModel)]=\"block.title.value\">\n  </div>\n  <div *ngIf=\"block.description\">\n    <label>{{ block.description.key }}</label>\n    <textarea [(ngModel)]=\"block.description.value\" rows=\"10\"></textarea>\n  </div>\n</div>"

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<div class=\"blockType\">\n  <div class=\"block-header\">\n    <h2>BlockType #2</h2>    \n    <a href=\"\" (click)=\"onDelete($event)\">Delete</a>\n  </div>\n  <div *ngIf=\"block.title\">\n    <label>{{ block.title.key }}</label>\n    <input [(ngModel)]=\"block.title.value\">\n  </div>\n  <div *ngIf=\"block.description\">\n    <label>{{ block.description.key }}\n      <div *ngFor=\"let option of block.description.options; index as i\">\n         <label><input type=\"checkbox\" [checked]=\"strToBool(option.value)\" (change)=\"toggle(option.value, i)\">{{ option.title }}\n        </label> \n      </div>\n    </label>\n    \n    </div>\n</div>"

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<div class=\"blockType\">\n  <div class=\"block-header\">\n    <h2>BlockType #3</h2>    \n    <a href=\"\" (click)=\"onDelete($event)\">Delete</a>\n  </div>\n  <div *ngIf=\"block.title\">\n    <label>{{ block.title.key }}</label>\n    <input [(ngModel)]=\"block.title.value\">\n  </div>\n  <div *ngIf=\"block.description\">\n    <label>{{ block.description.key }}</label>\n    <div *ngFor=\"let option of block.description.options\">\n      <label>\n        <input type=\"radio\" name=\"radiodesc{{index}}\" [(ngModel)]=\"selected\" (ngModelChange)=\"selectedChange(option.value)\" [value]=\"option.value\" (change)=\"onChange($event)\">{{ option.title }}\n      </label>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<div>\n  <codemirror [(ngModel)]=\"content\" [config]=\"config\" (change)=\"onChange()\">\n  </codemirror>\n</div>"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngFor=\"let block of blocks; index as i\">\n    <div *ngIf=\"block.type != undefined\">\n      <div [ngSwitch]=\"block.type.toLowerCase()\">\n        <blocktype1 *ngSwitchCase=\"'blocktype1'\" [block]=\"block\" [index]=\"i\" (delete)=\"onDelete($event, i)\"></blocktype1>\n        <blocktype2 *ngSwitchCase=\"'blocktype2'\" [block]=\"block\" [index]=\"i\" (delete)=\"onDelete($event, i)\"></blocktype2>\n        <blocktype3 *ngSwitchCase=\"'blocktype3'\" [block]=\"block\" [index]=\"i\" (delete)=\"onDelete($event, i)\"></blocktype3> \n      </div>\n    </div>    \n  </div> \n  <add-block-form [types]=\"blockTypes\" (addNewBlock)=\"onAddBlock($event)\"></add-block-form>\n</div>"

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
        this.blocks = __WEBPACK_IMPORTED_MODULE_1__data__["a" /* blocks */];
        this.blockTypes = __WEBPACK_IMPORTED_MODULE_1__data__["b" /* blockTypes */];
    }
    DataService.prototype.getBlocks = function () {
        return this.blocks;
    };
    DataService.prototype.getBlockTypes = function () {
        return this.blockTypes;
    };
    DataService.prototype.getTypesOfBlocks = function () {
        return this.blockTypes.map(function (block) { return block["type"]; });
    };
    DataService.prototype.findBlockByType = function (type) {
        return this.blockTypes.find(function (block) { return block.type == type; });
    };
    DataService.prototype.addNewBlock = function (type) {
        this.blocks.push(this.findBlockByType(type));
    };
    DataService.prototype.update = function (blocks) {
        if (this.isJsonString(blocks)) {
            this.blocks = JSON.parse(blocks);
        }
    };
    DataService.prototype.delete = function (index) {
        this.blocks.splice(index, 1);
    };
    DataService.prototype.create = function (type) {
        this.blocks.push(this.findBlockByType(type));
    };
    DataService.prototype.isJsonString = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 73;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(89);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.blocksData = this.dataService.getBlocks();
        this.types = this.dataService.getTypesOfBlocks();
    };
    AppComponent.prototype.getBlocks = function () {
        return this.dataService.getBlocks();
    };
    AppComponent.prototype.getContent = function () {
        return JSON.stringify(this.getBlocks(), null, 3);
    };
    AppComponent.prototype.delete = function (index) {
        this.dataService.delete(index);
    };
    AppComponent.prototype.addBlock = function (type) {
        this.dataService.create(type);
    };
    AppComponent.prototype.change = function (content) {
        this.dataService.update(content);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(155),
        styles: [__webpack_require__(146)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_codemirror__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_codemirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_codemirror__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_code_editor_code_editor_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ui_editor_ui_editor_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_blocks_blocktype1_blocktype1_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_blocks_blocktype2_blocktype2_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_blocks_blocktype3_blocktype3_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_add_block_form_add_block_form_component__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_code_editor_code_editor_component__["a" /* CodeEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_ui_editor_ui_editor_component__["a" /* UiEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_blocks_blocktype1_blocktype1_component__["a" /* Blocktype1Component */],
            __WEBPACK_IMPORTED_MODULE_10__components_blocks_blocktype2_blocktype2_component__["a" /* Blocktype2Component */],
            __WEBPACK_IMPORTED_MODULE_11__components_blocks_blocktype3_blocktype3_component__["a" /* Blocktype3Component */],
            __WEBPACK_IMPORTED_MODULE_12__components_add_block_form_add_block_form_component__["a" /* AddBlockFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_codemirror__["CodemirrorModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBlockFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddBlockFormComponent = (function () {
    function AddBlockFormComponent() {
        this.addNewBlock = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddBlockFormComponent.prototype.ngOnInit = function () {
        this.show = false;
        this.selected = '';
    };
    AddBlockFormComponent.prototype.showForm = function (event) {
        event.preventDefault();
        this.show = !this.show;
    };
    AddBlockFormComponent.prototype.addBlock = function () {
        this.addNewBlock.emit(this.selected);
        this.selected = '';
        this.show = false;
    };
    AddBlockFormComponent.prototype.cancel = function () {
        this.selected = '';
        this.show = false;
    };
    return AddBlockFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], AddBlockFormComponent.prototype, "types", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddBlockFormComponent.prototype, "addNewBlock", void 0);
AddBlockFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-block-form',
        template: __webpack_require__(156),
        styles: [__webpack_require__(147)]
    }),
    __metadata("design:paramtypes", [])
], AddBlockFormComponent);

//# sourceMappingURL=add-block-form.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blocktype1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Blocktype1Component = (function () {
    function Blocktype1Component() {
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Blocktype1Component.prototype.ngOnInit = function () {
    };
    Blocktype1Component.prototype.onDelete = function (event) {
        event.preventDefault();
        this.delete.emit();
    };
    return Blocktype1Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Blocktype1Component.prototype, "block", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Blocktype1Component.prototype, "index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Blocktype1Component.prototype, "delete", void 0);
Blocktype1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blocktype1',
        template: __webpack_require__(157),
        styles: [__webpack_require__(148)]
    }),
    __metadata("design:paramtypes", [])
], Blocktype1Component);

//# sourceMappingURL=blocktype1.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blocktype2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Blocktype2Component = (function () {
    function Blocktype2Component() {
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Blocktype2Component.prototype.ngOnInit = function () {
    };
    Blocktype2Component.prototype.onDelete = function (event) {
        event.preventDefault();
        this.delete.emit();
    };
    Blocktype2Component.prototype.strToBool = function (str) {
        if (str == 'true') {
            return true;
        }
        else if (str == 'false') {
            return false;
        }
        else {
            return false;
        }
    };
    Blocktype2Component.prototype.toggle = function (value, index) {
        this.block.description.options[index].value = String(!this.strToBool(value));
    };
    Blocktype2Component.prototype.onChange = function (event) {
        this.change.emit();
    };
    return Blocktype2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Blocktype2Component.prototype, "block", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Blocktype2Component.prototype, "index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Blocktype2Component.prototype, "delete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Blocktype2Component.prototype, "change", void 0);
Blocktype2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blocktype2',
        template: __webpack_require__(158),
        styles: [__webpack_require__(149)]
    }),
    __metadata("design:paramtypes", [])
], Blocktype2Component);

//# sourceMappingURL=blocktype2.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blocktype3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Blocktype3Component = (function () {
    function Blocktype3Component() {
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Blocktype3Component.prototype.ngOnInit = function () {
        this.selected = this.block.description.value;
    };
    Blocktype3Component.prototype.selectedChange = function (value) {
        this.block.description.value = value;
    };
    Blocktype3Component.prototype.onDelete = function (event) {
        event.preventDefault();
        this.delete.emit();
    };
    Blocktype3Component.prototype.onChange = function (event) {
        this.change.emit();
    };
    return Blocktype3Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Blocktype3Component.prototype, "block", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Blocktype3Component.prototype, "index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Blocktype3Component.prototype, "delete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Blocktype3Component.prototype, "change", void 0);
Blocktype3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blocktype3',
        template: __webpack_require__(159),
        styles: [__webpack_require__(150)]
    }),
    __metadata("design:paramtypes", [])
], Blocktype3Component);

//# sourceMappingURL=blocktype3.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodeEditorComponent = (function () {
    function CodeEditorComponent() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.config = {
            lineNumbers: true,
            tabSize: 3,
            theme: 'monokai',
            autofocus: true
        };
    }
    CodeEditorComponent.prototype.ngOnInit = function () {
    };
    CodeEditorComponent.prototype.onChange = function () {
        this.change.emit(this.content);
    };
    return CodeEditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CodeEditorComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CodeEditorComponent.prototype, "change", void 0);
CodeEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-code-editor',
        template: __webpack_require__(160),
        styles: [__webpack_require__(151)]
    }),
    __metadata("design:paramtypes", [])
], CodeEditorComponent);

//# sourceMappingURL=code-editor.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiEditorComponent = (function () {
    function UiEditorComponent() {
        this.addBlock = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UiEditorComponent.prototype.ngOnInit = function () {
    };
    UiEditorComponent.prototype.onDelete = function (event, index) {
        this.delete.emit(index);
    };
    UiEditorComponent.prototype.onAddBlock = function (type) {
        this.addBlock.emit(type);
    };
    return UiEditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UiEditorComponent.prototype, "blocks", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UiEditorComponent.prototype, "blockTypes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UiEditorComponent.prototype, "addBlock", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UiEditorComponent.prototype, "delete", void 0);
UiEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ui-editor',
        template: __webpack_require__(161),
        styles: [__webpack_require__(152)]
    }),
    __metadata("design:paramtypes", [])
], UiEditorComponent);

//# sourceMappingURL=ui-editor.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return blockTypes; });
var blocks = [
    {
        "type": "blockType1",
        "title": {
            "key": "TextBox Label",
            "value": ""
        },
        "description": {
            "key": "TextArea Label",
            "value": ""
        }
    },
    {
        "type": "blockType2",
        "title": {
            "key": "TextBox Label",
            "value": ""
        },
        "description": {
            "key": "Checkbox Group Label",
            "options": [
                {
                    "title": "Checkbox 1 Label",
                    "value": "true"
                },
                {
                    "title": "Checkbox 2 Label",
                    "value": "false"
                },
                {
                    "title": "Checkbox 3 Label",
                    "value": "true"
                }
            ]
        }
    },
    {
        "type": "blockType2",
        "title": {
            "key": "TextBox Label",
            "value": ""
        },
        "description": {
            "key": "Checkbox Group Label",
            "options": [
                {
                    "title": "Checkbox 1 Label",
                    "value": "false"
                },
                {
                    "title": "Checkbox 2 Label",
                    "value": "true"
                },
                {
                    "title": "Checkbox 3 Label",
                    "value": "false"
                }
            ]
        }
    },
    {
        "type": "blockType3",
        "title": {
            "key": "TextBox Label",
            "value": ""
        },
        "description": {
            "key": "RadioButton Group Label",
            "value": "rb1",
            "options": [
                {
                    "title": "RadioButton 1 Label",
                    "value": "rb1"
                },
                {
                    "title": "RadioButton 2 Label",
                    "value": "rb2"
                },
                {
                    "title": "RadioButton 3 Label",
                    "value": "rb3"
                }
            ]
        }
    },
    {
        "type": "blockType3",
        "title": {
            "key": "TextBox Label",
            "value": ""
        },
        "description": {
            "key": "RadioButton Group Label",
            "value": "rb2",
            "options": [
                {
                    "title": "RadioButton 1 Label",
                    "value": "rb1"
                },
                {
                    "title": "RadioButton 2 Label",
                    "value": "rb2"
                },
                {
                    "title": "RadioButton 3 Label",
                    "value": "rb3"
                }
            ]
        }
    }
];
var blockTypes = [
    {
        "type": "blockType1",
        "title": {
            "key": "TextBox Label",
            "value": ""
        },
        "description": {
            "key": "TextArea Label",
            "value": ""
        }
    },
    {
        "type": "blockType2",
        "title": {
            "key": "TextBox Label",
            "value": ""
        },
        "description": {
            "key": "Checkbox Group Label",
            "options": [
                {
                    "title": "Checkbox 1 Label",
                    "value": "false"
                },
                {
                    "title": "Checkbox 2 Label",
                    "value": "false"
                },
                {
                    "title": "Checkbox 3 Label",
                    "value": "false"
                }
            ]
        }
    },
    {
        "type": "blockType3",
        "title": {
            "key": "TextBox Label",
            "value": ""
        },
        "description": {
            "key": "RadioButton Group Label",
            "value": "rb1",
            "options": [
                {
                    "title": "RadioButton 1 Label",
                    "value": "rb1"
                },
                {
                    "title": "RadioButton 2 Label",
                    "value": "rb2"
                },
                {
                    "title": "RadioButton 3 Label",
                    "value": "rb3"
                }
            ]
        }
    }
];
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[186]);
//# sourceMappingURL=main.bundle.js.map
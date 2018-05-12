var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Students = /** @class */ (function () {
    function Students(storage, defaults) {
        this.storage = storage;
        this._studentlist = [];
    }
    Students.prototype.setStudents = function (studentslist) {
        this._studentlist = studentslist;
    };
    Object.defineProperty(Students.prototype, "students", {
        get: function () {
            return this._studentlist;
        },
        enumerable: true,
        configurable: true
    });
    Students = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage, Object])
    ], Students);
    return Students;
}());
export { Students };
//# sourceMappingURL=students.js.map
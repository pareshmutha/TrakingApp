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
import { Api } from '../api/api';
/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
        this._studentlist = [];
        this._userId = '';
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.setCurrentUserId = function (userId) {
        this._userId = userId;
    };
    Object.defineProperty(User.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.setStudents = function (studentslist) {
        this._studentlist = studentslist;
    };
    Object.defineProperty(User.prototype, "students", {
        get: function () {
            return this._studentlist;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.GetSchoolNames = function () {
        var seq = this.api.get('GetSchoolNames').share();
        seq.subscribe(function (res) {
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.GetBusDetails = function (nameObj) {
        var seq = this.api.post('GetBusDetails', nameObj).share();
        seq.subscribe(function (res) {
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.GetBusRouteDetails = function (nameObj) {
        var seq = this.api.post('GetBusRouteDetails', nameObj).share();
        seq.subscribe(function (res) {
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.newstudentregistration = function (newStudent) {
        var seq = this.api.post('newstudentregistration', newStudent).share();
        seq.subscribe(function (res) {
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.GetCam1Data = function (name) {
        var seq = this.api.post('GetCam1Data', name).share();
        seq.subscribe(function (res) {
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.GetCam2Data = function (name) {
        var seq = this.api.post('GetCam2Data', name).share();
        seq.subscribe(function (res) {
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.buslocation = function (studentId) {
        var seq = this.api.post('GetBusNavigationDetails', studentId).share();
        seq.subscribe(function (res) {
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Api])
    ], User);
    return User;
}());
export { User };
//# sourceMappingURL=user.js.map
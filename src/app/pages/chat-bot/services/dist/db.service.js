"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DbService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var DbService = /** @class */ (function () {
    function DbService(db) {
        this.db = db;
        this.invoicesSubject$ = new rxjs_1.BehaviorSubject([]);
        this.invoices$ = this.invoicesSubject$.asObservable();
    }
    DbService.prototype.getAllInvoices = function () {
        var _this = this;
        this.db.collection('facturas').valueChanges().subscribe(function (invoice) {
            _this.invoicesSubject$.next(invoice);
        });
    };
    DbService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DbService);
    return DbService;
}());
exports.DbService = DbService;

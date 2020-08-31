"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InvoicesComponent = void 0;
var core_1 = require("@angular/core");
var InvoicesComponent = /** @class */ (function () {
    function InvoicesComponent(db) {
        this.db = db;
        this.barChartOptions = {
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    InvoicesComponent.prototype.ngOnInit = function () {
        this.db.getAllInvoices();
    };
    InvoicesComponent = __decorate([
        core_1.Component({
            selector: 'app-invoices',
            templateUrl: './invoices.component.html',
            styleUrls: ['./invoices.component.scss']
        })
    ], InvoicesComponent);
    return InvoicesComponent;
}());
exports.InvoicesComponent = InvoicesComponent;

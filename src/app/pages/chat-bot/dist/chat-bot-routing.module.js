"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatBotRoutingModule = void 0;
var invoices_component_1 = require("./pages/invoices/invoices.component");
var home_page_component_1 = require("./components/home-page/home-page.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var chat_bot_component_1 = require("./chat-bot.component");
var routes = [
    { path: '', component: chat_bot_component_1.ChatBotComponent,
        children: [
            { path: '', component: home_page_component_1.HomePageComponent },
            { path: 'facturas', component: invoices_component_1.InvoicesComponent }
        ]
    }
];
var ChatBotRoutingModule = /** @class */ (function () {
    function ChatBotRoutingModule() {
    }
    ChatBotRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ChatBotRoutingModule);
    return ChatBotRoutingModule;
}());
exports.ChatBotRoutingModule = ChatBotRoutingModule;

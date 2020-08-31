"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatBotModule = void 0;
var db_service_1 = require("./services/db.service");
var shared_module_1 = require("./../../shared/shared.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var chat_bot_routing_module_1 = require("./chat-bot-routing.module");
var chat_bot_component_1 = require("./chat-bot.component");
var speech_component_1 = require("./components/speech/speech.component");
var chat_window_component_1 = require("./components/chat-window/chat-window.component");
var http_1 = require("@angular/common/http");
var chatbot_service_1 = require("./services/chatbot.service");
var home_page_component_1 = require("./components/home-page/home-page.component");
var ng2_charts_1 = require("ng2-charts");
var invoices_component_1 = require("./pages/invoices/invoices.component");
var ChatBotModule = /** @class */ (function () {
    function ChatBotModule() {
    }
    ChatBotModule = __decorate([
        core_1.NgModule({
            declarations: [chat_bot_component_1.ChatBotComponent, speech_component_1.SpeechComponent, chat_window_component_1.ChatWindowComponent, home_page_component_1.HomePageComponent, invoices_component_1.InvoicesComponent],
            imports: [
                common_1.CommonModule,
                chat_bot_routing_module_1.ChatBotRoutingModule,
                shared_module_1.SharedModule,
                http_1.HttpClientModule,
                ng2_charts_1.ChartsModule
            ],
            providers: [
                chatbot_service_1.ChatbotService,
                db_service_1.DbService
            ]
        })
    ], ChatBotModule);
    return ChatBotModule;
}());
exports.ChatBotModule = ChatBotModule;

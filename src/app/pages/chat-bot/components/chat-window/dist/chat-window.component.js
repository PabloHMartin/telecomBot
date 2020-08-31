"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatWindowComponent = void 0;
var core_1 = require("@angular/core");
var ChatWindowComponent = /** @class */ (function () {
    function ChatWindowComponent(chatbotService) {
        this.chatbotService = chatbotService;
        this.linkUrlEvent = new core_1.EventEmitter();
        this.messages = [];
        this.loading = false;
        // Random ID to maintain session with DialogFlow server
        this.sessionId = Math.random().toString(36).slice(-5);
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
        this.addBotMessage('Bienvenido al asistente virtual de facturación 🤖. ¿ En qué te ayudo? ');
        this.subscriptions = [];
    };
    ChatWindowComponent.prototype.handleUserMessage = function (event) {
        var _this = this;
        console.log('event: ', event);
        var text = event.message;
        this.addUserMessage(text);
        this.loading = true;
        this.subscriptions.push(this.chatbotService.botGateWay(text, this.sessionId)
            .subscribe(function (res) {
            var fulfillmentText = res.fulfillmentText;
            var webhookPayload = res.webhookPayload;
            if (webhookPayload) {
                _this.handleWebhookPayload(webhookPayload);
            }
            _this.addBotMessage(fulfillmentText);
            _this.loading = false;
        }));
    };
    ChatWindowComponent.prototype.handleWebhookPayload = function (webhookPayload) {
        var webhookPayloadfields = this.processCustomPayloadMessage(webhookPayload.fields);
        if (webhookPayloadfields.linkUrl && webhookPayloadfields.linkUrl != null) {
            this.linkUrlEvent.emit(webhookPayloadfields.linkUrl);
        }
    };
    ChatWindowComponent.prototype.addUserMessage = function (text) {
        this.messages.push({
            text: text,
            sender: 'You',
            reply: true,
            date: new Date()
        });
    };
    ChatWindowComponent.prototype.addBotMessage = function (text) {
        this.messages.push({
            text: text,
            sender: 'Bot',
            avatar: '../../../../../assets/img/bot.svg',
            date: new Date()
        });
    };
    ChatWindowComponent.prototype.processCustomPayloadMessage = function (object) {
        var _this = this;
        var outputMessage = Array.isArray(object) ? [] : {};
        Object.entries(object).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (value.kind === 'structValue') {
                outputMessage[key] = _this.processCustomPayloadMessage(value.structValue.fields);
            }
            else if (value.kind === 'listValue') {
                outputMessage[key] = _this.processCustomPayloadMessage(value.listValue.values);
            }
            else if (value.kind === 'stringValue') {
                outputMessage[key] = value.stringValue;
            }
            else if (value.kind === 'boolValue') {
                outputMessage[key] = value.boolValue;
            }
            else if (value.kind === 'numberValue') {
                outputMessage[key] = value.numberValue;
            }
            else {
                outputMessage[key] = value;
            }
        });
        return outputMessage;
    };
    ChatWindowComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    __decorate([
        core_1.Output()
    ], ChatWindowComponent.prototype, "linkUrlEvent");
    ChatWindowComponent = __decorate([
        core_1.Component({
            selector: 'app-chat-window',
            templateUrl: './chat-window.component.html',
            styleUrls: ['./chat-window.component.scss']
        })
        // ChatWindowComponent has its own service because of cohesion
    ], ChatWindowComponent);
    return ChatWindowComponent;
}());
exports.ChatWindowComponent = ChatWindowComponent;

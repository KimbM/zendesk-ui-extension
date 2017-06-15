"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var OauthComponent = (function () {
    function OauthComponent(router) {
        this.router = router;
        this.tokenRE = /#access_token=(\w*)&/;
    }
    OauthComponent.prototype.ngOnInit = function () {
        var hasToken = window.location.href.match(this.tokenRE);
        localStorage.setItem('zen_token', hasToken[1]);
        this.router.navigateByUrl('/tickets');
    };
    OauthComponent = __decorate([
        core_1.Component({
            selector: 'oauth',
            template: '<div></div>',
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], OauthComponent);
    return OauthComponent;
}());
exports.OauthComponent = OauthComponent;
//# sourceMappingURL=oauth.component.js.map
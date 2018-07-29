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
var spotify_service_1 = require("../../services/spotify.service");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var MainPage = /** @class */ (function () {
    function MainPage(spotifyService) {
        this.spotifyService = spotifyService;
        // artist: string;
        this.subject = new rxjs_1.Subject();
    }
    MainPage.prototype.ngOnInit = function () {
        this.subject.pipe(operators_1.debounceTime(500)).subscribe(function (searchTextValue) {
            console.log(searchTextValue);
            // this.spotifyService.searchMusic().subscribe((data) => {
            //   console.log(data);
            // });
        });
    };
    MainPage.prototype.onInput = function ($event) {
        this.subject.next(searchTextValue);
    };
    MainPage.prototype.onCancel = function ($event) {
        console.log('hi' + $event);
    };
    MainPage = __decorate([
        core_1.Component({
            selector: 'app-main',
            templateUrl: './main.page.html',
            styleUrls: ['./main.page.scss'],
        }),
        __metadata("design:paramtypes", [spotify_service_1.SpotifyService])
    ], MainPage);
    return MainPage;
}());
exports.MainPage = MainPage;
//# sourceMappingURL=main.page.js.map
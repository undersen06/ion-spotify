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
var http_1 = require("@angular/common/http");
var SpotifyService = /** @class */ (function () {
    function SpotifyService(http) {
        this.http = http;
        this.searchUrl = 'https://api.spotify.com/v1/';
        this.headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        this.headers = new http_1.HttpHeaders().set('Authorization', 'Bearer BQAGmgEvV5J0JeK5xnyiSTrXYTTMh_rcGX2doK5zuw7fksnqbpqd16IZRf_nqVczeSeGrlQokF7uq6JpdkA2NJApNNlNMoKEquicMdVBAmAYvuBXBqEqfXiYdh0Hyk9_KwqDqnBM8B-uOkvb');
    }
    SpotifyService.prototype.searchMusic = function (_data, type) {
        if (type === void 0) { type = 'artist'; }
        var params = {};
        params.query = _data;
        params.offset = 0;
        params.limit = '20';
        params.type = type;
        return this.http.get(this.searchUrl + "search", { params: params, headers: this.headers });
    };
    SpotifyService.prototype.getArtist = function (id) {
        return this.http.get(this.searchUrl + "artists/" + id, { headers: this.headers });
    };
    SpotifyService.prototype.getAlbums = function (id) {
        return this.http.get(this.searchUrl + "artists/" + id + "/albums", { headers: this.headers });
    };
    SpotifyService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SpotifyService);
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map
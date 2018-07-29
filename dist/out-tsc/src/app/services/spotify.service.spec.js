"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var spotify_service_1 = require("./spotify.service");
describe('SpotifyService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [spotify_service_1.SpotifyService]
        });
    });
    it('should be created', testing_1.inject([spotify_service_1.SpotifyService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=spotify.service.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var staircasePattern = function (n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < i; j++) {
            process.stdout.write("#");
        }
        console.log("");
    }
};
staircasePattern(5);

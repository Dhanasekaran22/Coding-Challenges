var staircasePattern = function (n) {
    for (var i = 1; i <= n; i++) {
        for (var j = 0; j < n - i; j++) {
            process.stdout.write(" ");
        }
        for (var j = 0; j < i; j++) {
            process.stdout.write("#");
        }
        console.log("");
    }
};
staircasePattern(5);

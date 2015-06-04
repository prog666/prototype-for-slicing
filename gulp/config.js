/*jslint node:true */
'use strict';

var src  = "./src",
    dist = "./dist";

module.exports = {
    stylus: {
        base64: {
            maxWeight: 1024
        },
        minify: {
            compatibility: "ie9"
        },
        resultName: "all.css",
        src: src + "/styl/main.styl",
        dest: dist + "/css"
    },
    browserSync: {
        server: {
            baseDir: dist
        },
        port: 1337,
        open: false,
        ghostMode: {
            clicks: false,
            forms: false,
            scroll: false
        }
    },
    clean: {
        dest: dist
    },
    fonts: {
        cssDest: dist + "/css",
        fontsDest: dist + "/fonts",
        src: src + "/fonts"
    },
    tiny: {
        src: src + "/toTiny",
        dest: src + "/images",
        apikey: "CrKRqfc7Q8-r-MpAro6PhQNoukdI9wh1"
    },
    images: {
        src: src + "/images/**/*",
        dest: dist + "/images"
    },
    sftp: {
        host: "front-end.fmake.ru",
        user: "prog",
        pass: "",
        remotePath: "/var/www/fmake/data/www/front-end.fmake.ru/future_new"
    },
    jade: {
        src: src + "/jade",
        dest: dist
    },
    js: {
        src: src + "/js/main.es6",
        destName: "all.js",
        dest: dist + "/js",
        transform: ["babelify"],
        extensions: [".es6"]
    },
    watch: {
        src: src
    }
};
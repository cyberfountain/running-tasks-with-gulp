const gulp = require('gulp')
const { src, series, dest, watch, task, parallel } = gulp

const browsersync = require("browser-sync")
const server = browsersync.create()

const shell = require("gulp-shell")

task('dev:serve', () => {
    server.init({
        files: ["public/**/*"],
        watchEvents: ["add", "change", "addDir"],
        server: "public",
        port: 5000
    })
})

task('ts:compile', shell.task('npx rollup --config rollup.config.js'))
task('ts:watch', shell.task('npx rollup --config rollup.config.js --config-dev --watch'))

task('build', series(['ts:compile']))
task('dev', parallel(['dev:serve', 'ts:watch']))
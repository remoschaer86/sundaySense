
define([
    'qlik',
    'jquery',
    './definition',
    './initialProperties',
    'css!./style.css',
    'text!./template.html',
    'core.models/engine',
    'util'
], function (qlik, $, def, initProps, css, template, engine, util) {
    'use strict';
    const app = engine.currentApp;
    return {
        template: template,
        initialProperties: initProps,
        definition: def,
        controller: ['$scope', function ($scope) {
            console.log($scope.layout)


















        }]
    } // return end
}); // module end
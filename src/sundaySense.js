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
        paint: function (element, layout) {
            console.log('hello from main js');
        }, // paint end
        controller: ['$scope', function ($scope) {
            console.log('Hello from Cntrl');
        }]
    } // return end
}); // module end
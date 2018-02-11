define( [], function () {
    'use strict';
    // *****************************************************************************
    // Dimensions & Measures
    // *****************************************************************************
    var dimensions = {
        uses: 'dimensions',
        min: 0,
        max: 1
    };
    var measures = {
        uses: 'measures',
        min: 0,
        max: 1
    };

    var sorting = {
        uses: 'sorting'
    }

// *****************************************************************************
// Appearance section
// *****************************************************************************
    var appearanceSection = {
        uses: 'settings'
    };
// *****************************************************************************
// Main properties panel definition
// Only what is defined here is returned from definition.js
// *****************************************************************************
    return {
        type: 'items',
        component: 'accordion',
        items: {
            dimensions: dimensions,
            measures: measures,
            sorting: sorting,
            appearance: appearanceSection
        }
    };
});
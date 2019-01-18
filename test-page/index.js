d3.csv(
    'https://raw.githubusercontent.com/RhoInc/viz-library/master/data/safetyData/ADAE.csv',
    function(d,i) {
        return d;
    },
    function(error,data) {
        if (error)
            console.log(error);

        var settings = {};
        var instance = aeTimelines(
            '#container',
            settings
        );
        instance.init(data);
    }
);

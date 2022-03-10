export default {
    data: function () {
        return {
            settings: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 3,
                    snapAlign: "center",
                },
                // 1024 and up
                1024: {
                    itemsToShow: 4,
                    snapAlign: "start",
                },
            },
        }
    }
};
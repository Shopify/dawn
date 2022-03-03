export const store = {
    state: {
        currentTab: 0,
        v: {},
    },
    setCurrentTab(newValue) {
        this.state.currentTab = newValue;
    },
    setValidation(newValue) {
        this.state.v = newValue;
    },
};

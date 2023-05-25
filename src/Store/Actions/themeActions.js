function setTheme(theme) {
    console.log("theme inside setTheme action => ", theme);
    return {
        type: "SET_THEME",
        data: theme
    };
};

function removeTheme() {
    console.log("theme inside removeTheme action => ");
    return {
        type: "REMOVE_THEME"
    };
};

export {
    setTheme,
    removeTheme
};
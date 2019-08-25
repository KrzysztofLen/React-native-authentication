const APP = require("./App");
const PORT = process.env.PORT || 5000;

// LAUNCH ###################################################
APP.listen(PORT, () => {
    console.log(`=============App listening on port ${PORT}!=============`);
});

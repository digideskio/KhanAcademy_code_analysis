importScripts("../shared-package/es5-shim.js?cachebust=" + (new Date()).toDateString());
importScripts("jshint.js?cachebust=" + (new Date()).toDateString());

self.onmessage = function(event) {
    // Evaluate the code using JSHint
    JSHINT(event.data.code);

    // Return the JSHint results to the main code
    self.postMessage({
         type: "jshint",
         message: {
            // JSHint passes back a non-JSON object so we need to convert it
            hintData: JSON.parse(JSON.stringify(JSHINT.data())),
            hintErrors: JSHINT.errors
        }
    });
};

(function () {
  "use strict";

  exports.apiKey = process.env.GOOGLE_PLACES_API_KEY || "AIzaSyDbaq9neFNZLwne4dXgFkuLowv1buHk5zw";
  exports.outputFormat = process.env.GOOGLE_PLACES_OUTPUT_FORMAT || "json";

})();
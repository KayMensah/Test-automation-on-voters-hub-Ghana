// conf.js
exports.config = {
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["spec.js"],
  jasmine: {
    timeoutInterval: 100000,
  },
};

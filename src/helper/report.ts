const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName: "Playwright with cucumerber automation",
  pageTitle: "Automation Excercise app test",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Run info",
    data: [{ label: "Project", value: "UI and API Automation " }],
  },
});

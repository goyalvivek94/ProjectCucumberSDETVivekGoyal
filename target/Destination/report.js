$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bmi.feature");
formatter.feature({
  "line": 1,
  "name": "BMI calculations",
  "description": "BMI calculation based on Age, Height and Weight",
  "id": "bmi-calculations",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Capture the BMI Result Value",
  "description": "",
  "id": "bmi-calculations;capture-the-bmi-result-value",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTesting"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage and validate title",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User to click on BMI Calculator and verify title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter Age \u0027\u003cAge\u003e\u0027, Height \u0027\u003cHeight\u003e\u0027 and Weight \u0027\u003cWeight\u003e\u0027 and tap on calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User to capture the BMI result value and close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "bmi-calculations;capture-the-bmi-result-value;",
  "rows": [
    {
      "cells": [
        "Age",
        "Height",
        "Weight"
      ],
      "line": 12,
      "id": "bmi-calculations;capture-the-bmi-result-value;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 13,
      "id": "bmi-calculations;capture-the-bmi-result-value;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 14,
      "id": "bmi-calculations;capture-the-bmi-result-value;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 15,
      "id": "bmi-calculations;capture-the-bmi-result-value;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 16,
      "id": "bmi-calculations;capture-the-bmi-result-value;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 17,
      "id": "bmi-calculations;capture-the-bmi-result-value;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Capture the BMI Result Value",
  "description": "",
  "id": "bmi-calculations;capture-the-bmi-result-value;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTesting"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage and validate title",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User to click on BMI Calculator and verify title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter Age \u002710\u0027, Height \u0027127\u0027 and Weight \u002740\u0027 and tap on calculate BMI",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User to capture the BMI result value and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMIStepDefinition.user_is_on_the_homepage_and_validate_title()"
});
formatter.result({
  "duration": 21249685556,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.user_to_click_on_BMI_Calculator_and_verify_title()"
});
formatter.result({
  "duration": 1378956215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 11
    },
    {
      "val": "127",
      "offset": 24
    },
    {
      "val": "40",
      "offset": 41
    }
  ],
  "location": "BMIStepDefinition.enter_Age_Height_and_Weight_and_tap_on_calculate_BMI(int,int,int)"
});
formatter.result({
  "duration": 1846677607,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.user_to_capture_the_BMI_result_value_and_close_the_browser()"
});
formatter.result({
  "duration": 88661976,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Capture the BMI Result Value",
  "description": "",
  "id": "bmi-calculations;capture-the-bmi-result-value;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTesting"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage and validate title",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User to click on BMI Calculator and verify title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter Age \u002730\u0027, Height \u0027156\u0027 and Weight \u002770\u0027 and tap on calculate BMI",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User to capture the BMI result value and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMIStepDefinition.user_is_on_the_homepage_and_validate_title()"
});
formatter.result({
  "duration": 4796369889,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.user_to_click_on_BMI_Calculator_and_verify_title()"
});
formatter.result({
  "duration": 1471186839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 11
    },
    {
      "val": "156",
      "offset": 24
    },
    {
      "val": "70",
      "offset": 41
    }
  ],
  "location": "BMIStepDefinition.enter_Age_Height_and_Weight_and_tap_on_calculate_BMI(int,int,int)"
});
formatter.result({
  "duration": 1220749239,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.user_to_capture_the_BMI_result_value_and_close_the_browser()"
});
formatter.result({
  "duration": 270166362,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Capture the BMI Result Value",
  "description": "",
  "id": "bmi-calculations;capture-the-bmi-result-value;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTesting"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage and validate title",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User to click on BMI Calculator and verify title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter Age \u002725\u0027, Height \u0027152\u0027 and Weight \u002755\u0027 and tap on calculate BMI",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User to capture the BMI result value and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMIStepDefinition.user_is_on_the_homepage_and_validate_title()"
});
formatter.result({
  "duration": 4860968729,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.user_to_click_on_BMI_Calculator_and_verify_title()"
});
formatter.result({
  "duration": 2062148281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 11
    },
    {
      "val": "152",
      "offset": 24
    },
    {
      "val": "55",
      "offset": 41
    }
  ],
  "location": "BMIStepDefinition.enter_Age_Height_and_Weight_and_tap_on_calculate_BMI(int,int,int)"
});
formatter.result({
  "duration": 1874449081,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.user_to_capture_the_BMI_result_value_and_close_the_browser()"
});
formatter.result({
  "duration": 113051817,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Capture the BMI Result Value",
  "description": "",
  "id": "bmi-calculations;capture-the-bmi-result-value;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTesting"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage and validate title",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User to click on BMI Calculator and verify title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter Age \u002720\u0027, Height \u0027160\u0027 and Weight \u002745\u0027 and tap on calculate BMI",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User to capture the BMI result value and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMIStepDefinition.user_is_on_the_homepage_and_validate_title()"
});
formatter.result({
  "duration": 5311955281,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.user_to_click_on_BMI_Calculator_and_verify_title()"
});
formatter.result({
  "duration": 2380119346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 11
    },
    {
      "val": "160",
      "offset": 24
    },
    {
      "val": "45",
      "offset": 41
    }
  ],
  "location": "BMIStepDefinition.enter_Age_Height_and_Weight_and_tap_on_calculate_BMI(int,int,int)"
});
formatter.result({
  "duration": 1502646694,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.user_to_capture_the_BMI_result_value_and_close_the_browser()"
});
formatter.result({
  "duration": 257203718,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Capture the BMI Result Value",
  "description": "",
  "id": "bmi-calculations;capture-the-bmi-result-value;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTesting"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage and validate title",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User to click on BMI Calculator and verify title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter Age \u002735\u0027, Height \u0027160\u0027 and Weight \u002770\u0027 and tap on calculate BMI",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User to capture the BMI result value and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMIStepDefinition.user_is_on_the_homepage_and_validate_title()"
});
formatter.result({
  "duration": 5208111588,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.user_to_click_on_BMI_Calculator_and_verify_title()"
});
formatter.result({
  "duration": 1477462047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 11
    },
    {
      "val": "160",
      "offset": 24
    },
    {
      "val": "70",
      "offset": 41
    }
  ],
  "location": "BMIStepDefinition.enter_Age_Height_and_Weight_and_tap_on_calculate_BMI(int,int,int)"
});
formatter.result({
  "duration": 1855061846,
  "status": "passed"
});
formatter.match({
  "location": "BMIStepDefinition.user_to_capture_the_BMI_result_value_and_close_the_browser()"
});
formatter.result({
  "duration": 82109670,
  "status": "passed"
});
});
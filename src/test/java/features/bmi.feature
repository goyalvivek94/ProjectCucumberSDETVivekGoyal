Feature: BMI calculations
  BMI calculation based on Age, Height and Weight

  @RegressionTesting
  Scenario Outline: Capture the BMI Result Value
    Given User is on the homepage and validate title
    When User to click on BMI Calculator and verify title
    And Enter Age '<Age>', Height '<Height>' and Weight '<Weight>' and tap on calculate BMI
    Then User to capture the BMI result value and close the browser

    Examples: 
      | Age | Height | Weight |
      |  10 |    127 |     40 |
      |  30 |    156 |     70 |
      |  25 |    152 |     55 |
      |  20 |    160 |     45 |
      |  35 |    160 |     70 |

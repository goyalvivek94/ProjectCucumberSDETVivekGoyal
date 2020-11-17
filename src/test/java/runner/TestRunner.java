package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/features",
glue = {"stepDefinition"},
tags = {"@RegressionTesting"},
plugin = {"pretty", "html:target/Destination"})

public class TestRunner {

}

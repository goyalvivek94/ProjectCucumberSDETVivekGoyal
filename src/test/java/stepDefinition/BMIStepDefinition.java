package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BMIStepDefinition {
	WebDriver driver;
	@Given("^User is on the homepage and validate title$")
	public void user_is_on_the_homepage_and_validate_title() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Vivek\\Downloads\\chromedriver.exe");
		driver = new ChromeDriver();		
		driver.get("https://www.calculator.net/");
		driver.manage().window().maximize();
		String actualTitle = driver.getTitle();
		String expectedTitle = "Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science";
		if(actualTitle.equalsIgnoreCase(expectedTitle))
			System.out.println("Title Matched");
		else
			System.out.println("Title didn't match");
	}

	@When("^User to click on BMI Calculator and verify title$")
	public void user_to_click_on_BMI_Calculator_and_verify_title() throws Throwable {
		driver.findElement(By.xpath("//*[text()='BMI Calculator']")).click();
		String actualTitle = driver.getTitle();
		String expectedTitle = "BMI Calculator";
		if(actualTitle.equalsIgnoreCase(expectedTitle))
			System.out.println("Title Matched");
		else
			System.out.println("Title didn't match");
	}

	@When("^Enter Age '(\\d+)', Height '(\\d+)' and Weight '(\\d+)' and tap on calculate BMI$")
	public void enter_Age_Height_and_Weight_and_tap_on_calculate_BMI(int arg1, int arg2, int arg3) throws Throwable {
		driver.findElement(By.xpath("//*[@id='cage']")).clear();
		driver.findElement(By.xpath("//*[@id='cage']")).sendKeys(String.valueOf(arg1));
		driver.findElement(By.xpath("//*[@id='cheightmeter']")).clear();
		driver.findElement(By.xpath("//*[@id='cheightmeter']")).sendKeys(String.valueOf(arg2));
		driver.findElement(By.xpath("//*[@id='ckg']")).clear();
		driver.findElement(By.xpath("//*[@id='ckg']")).sendKeys(String.valueOf(arg3));
		driver.findElement(By.xpath("//*[@value='Calculate']")).click();
	}

	@Then("^User to capture the BMI result value and close the browser$")
	public void user_to_capture_the_BMI_result_value_and_close_the_browser() throws Throwable {
		String bmiResult = driver.findElement(By.xpath("//*[@id='content']/div[4]/div/b")).getText();
		System.out.println(bmiResult);
		driver.close();
	}


}

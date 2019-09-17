package tests;

import cucumber.api.testng.AbstractTestNGCucumberTests;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.Test;
import pageobjects.BasePage;

import java.util.concurrent.TimeUnit;

public class BaseTest extends AbstractTestNGCucumberTests {

    public static WebDriver driver;

    public static WebDriver startDriver() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
        return driver;
    }

    @AfterMethod
    public void teardown() {
        if (driver != null) {
            driver.quit();
        }

    }

    @Test
    public void test() throws InterruptedException {
        driver.get("https://magazintrav.ru");


    }

}
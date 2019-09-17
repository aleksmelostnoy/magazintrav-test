package runner;

import cucumber.api.CucumberOptions;
import tests.BaseTest;

@CucumberOptions(
        features = "src/test/java/features"
        ,glue={"steps"}
        ,plugin = { "pretty", "html:target/cucumber", "json:target/cucumber.json"
        //,"com.cucumber.listener.ExtentCucumberFormatter:target/extent-report/report.html"
        }
        ,monochrome = false
)

public class MainRunner extends BaseTest {

}

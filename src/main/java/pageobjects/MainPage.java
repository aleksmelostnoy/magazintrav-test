package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MainPage extends BasePage {

    @FindBy(xpath = "//*[@href=\"/vyiskazat_blagodarnost\"]/*[@alt=\"Высказать Благодарность\"]")

    WebElement thankButton;

    public MainPage(WebDriver driver) {
        super(driver);

    }

    public ThankPage openThankPage() {
        thankButton.click();
        return new ThankPage(driver);
    }

}

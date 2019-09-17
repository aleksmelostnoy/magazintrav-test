package steps;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Vacancy {
    @FindBy(xpath = "//summary[@aria-label='View profile and more']")
    WebElement avatar;
    @FindBy(xpath = "//strong[@class='css-truncate-target']")
    WebElement loginName;
    @FindBy(xpath = "//button[@class='dropdown-item dropdown-signout']")
    WebElement SignOutButton;
    @FindBy(xpath = "//span[@class='text-gray ml-2']")
    WebElement statusButton;
}

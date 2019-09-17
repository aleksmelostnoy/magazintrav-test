package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

public class Vacancy extends BasePage{

    @FindBy(xpath = "//*[text()='О компании']")
    WebElement companyButton;

    @FindBy(xpath = "//a[@href='vakansii']/*[text()='Вакансии']")
    WebElement vacancyButton;

    @FindBy(xpath = "//*[contains(text(), 'открыты вакансии:')]")
    WebElement checkString;

    @FindBy(xpath = "//div[@class='item_box question_one clearfix']")
    WebElement vacancyBlock;
    @FindBy(xpath = "//input[@name='q']")
    WebElement seachBlock;
    @FindBy(xpath = ".//*[text()='Все результаты']")
    WebElement allResultSeaching;
    @FindBy(xpath = "//input[@name='query']")
    WebElement stringSeach;
    @FindBy(xpath = "//div[@data-b24-crm-button-icon='openline']")
    WebElement messangerButton;
    @FindBy(xpath = "//a[@class='b24-widget-button-social-item b24-widget-button-openline_livechat']")
    WebElement onlineChatBtn;
    @FindBy(xpath = "//*[@placeholder='Введите сообщение...']")
    WebElement enterMessage;
    @FindBy(xpath = "//button[@title='Отправить сообщение']")
    WebElement sendMessBtn;

//    public Vacancy(){}

    WebDriver driver;

    public Vacancy(WebDriver driver) {
        super(driver);
        this.driver = driver;
    }

    public Vacancy companyBtnClick(){
        companyButton.click();
        return this;
    }
    public Vacancy vacancyBtnClick(){
        vacancyButton.click();
        return this;
    }
    public Vacancy chechingString(){
        Assert.assertTrue(checkString.isDisplayed());
        return this;
    }
    public Vacancy checkingVacancyBlock(){
        Assert.assertTrue(vacancyBlock.isDisplayed());
        return this;
    }
    public Vacancy enterAndSeachingWord(){
        seachBlock.sendKeys("сон");
        return this;
    }

    public Vacancy checkSeaching(){
        Assert.assertTrue(allResultSeaching.isDisplayed());
        return this;
    }
    public Vacancy stringSeachClick(){
        stringSeach.click();
        return this;
    }
    public Vacancy messangerClick(){
        messangerButton.click();
        return this;
    }
    public Vacancy selectMess(){
        onlineChatBtn.click();
        return this;
    }
    public Vacancy startChat(){
        enterMessage.sendKeys("Дратуте!! Ваш сайт проходит проверку. Выявлена ошибка - при попытке установить аватар в ЛК, фотография не загружается! =)");
        sendMessBtn.click();
        return this;
    }
}

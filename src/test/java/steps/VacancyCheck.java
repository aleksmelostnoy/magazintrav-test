package steps;

import cucumber.api.PendingException;
import cucumber.api.java.ru.Допустим;
import cucumber.api.java.ru.И;
import cucumber.api.java.ru.Тогда;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.Test;
import pageobjects.BasePage;
import pageobjects.Vacancy;
import tests.BaseTest;

import java.util.concurrent.TimeUnit;

public class VacancyCheck extends BaseTest {

    Vacancy vacancy = new Vacancy(driver);

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
//    public void test() throws InterruptedException {
//        startDriver();
//        driver.get("https://magazintrav.ru");
//        VacancyCheck vacancyCheck = PageFactory.initElements(driver, VacancyCheck.class);
//        Vacancy vacancy = PageFactory.initElements(driver, Vacancy.class);

//        vacancy.companyBtnClick();
//        Thread.sleep(500);
//        vacancy.vacancyBtnClick();
//        Thread.sleep(500);
//        vacancy.chechingString();
//        Thread.sleep(500);
//        vacancy.checkingVacancyBlock();
//        Thread.sleep(1000);


    @Допустим("^пользователь жмет на вклдаку 'О компании'$")

    public void пользователь_жмет_на_вклдаку_О_компании() throws Throwable {
        startDriver();
        new BasePage(driver);
//        test();
        driver.get("https://magazintrav.ru");

        Thread.sleep(1000);
        vacancy.companyBtnClick();
        Thread.sleep(1000);
        throw new PendingException();
    }

    @И("^в появившемся списке выбирает 'Вакансии'$")
    public void в_появившемся_списке_выбирает_Вакансии() throws Throwable {
        vacancy.vacancyBtnClick();
        throw new PendingException();
    }

    @Тогда("^открывается страница Вакансий$")
    public void открывается_страница_Вакансий() throws Throwable {
        vacancy.chechingString();
        throw new PendingException();
    }

    @Тогда("^можно проверить список$")
    public void можно_проверить_список() throws Throwable {
        vacancy.checkingVacancyBlock();
        throw new PendingException();
    }

}
//
//    @Test
//    public void testSeach() throws InterruptedException {
//        startDriver();
//        driver.get("https://magazintrav.ru");
//
//        Vacancy vacancy = PageFactory.initElements(driver, Vacancy.class);
//        vacancy.stringSeachClick();
//        Thread.sleep(1000);
//        vacancy.enterAndSeachingWord();
//        Thread.sleep(1000);
//        vacancy.checkSeaching();
//        Thread.sleep(1000);
//    }
//
//    @Test
//    public void testOnlineMessanger() throws InterruptedException {
//        startDriver();
//        driver.get("https://magazintrav.ru");
//
//        Vacancy vacancy = PageFactory.initElements(driver, Vacancy.class);
//
//        vacancy.messangerClick();
//        Thread.sleep(1000);
//        vacancy.selectMess();
//        Thread.sleep(1000);
//        vacancy.startChat();
//        Thread.sleep(1000);
//    }
//}
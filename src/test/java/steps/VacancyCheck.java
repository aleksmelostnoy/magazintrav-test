package steps;

import cucumber.api.java.ru.Допустим;
import cucumber.api.java.ru.И;
import cucumber.api.java.ru.Тогда;
import pageobjects.Vacancy;
import tests.BaseTest;


public class VacancyCheck extends BaseTest {

    Vacancy vacancy;

    @Допустим("^пользователь жмет на вклдаку 'О компании'$")

    public void пользователь_жмет_на_вклдаку_О_компании() throws Throwable {
        driver.get("https://magazintrav.ru");

        vacancy = new Vacancy(driver);
        vacancy.companyBtnClick();
    }
    @И("^в появившемся списке выбирает 'Вакансии'$")
    public void в_появившемся_списке_выбирает_Вакансии() throws Throwable {
        vacancy.vacancyBtnClick();
    }
    @Тогда("^открывается страница Вакансий$")
    public void открывается_страница_Вакансий() throws Throwable {
        vacancy.chechingString();
    }
    @Тогда("^можно проверить список$")
    public void можно_проверить_список() throws Throwable {
        vacancy.checkingVacancyBlock();
    }
}

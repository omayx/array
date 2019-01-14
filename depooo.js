package omay;

import java.util.ArrayList;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

public class STMTestNGClass {
	@Test

	public void SmokeTest() throws InterruptedException

	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\oznur.may\\Downloads\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.navigate().to("https://devxeonrecui.trendyol.com/#/pages/reception");

		driver.manage().window().maximize();

		driver.findElement(By.cssSelector("#username")).sendKeys("omay");
		driver.findElement(By.cssSelector("#password")).sendKeys("9293");
		driver.findElement(By.cssSelector("#login")).click();

		By Elementby = By.xpath("//a[contains(text(), 'Stok')]");
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(Elementby));
		WebElement element = driver.findElement(Elementby);
		element.click();

		// window degiştirme//
		ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs.get(1));

		By Elementstockreportby = By.xpath("//span[contains(text(), 'Raporlar')]");
		wait.until(ExpectedConditions.elementToBeClickable(Elementstockreportby));
		driver.findElement(Elementstockreportby).click();

		By Elementby1 = By.xpath("//a[contains(text(), 'Araba Sorgulama')]");

		wait.until(ExpectedConditions.elementToBeClickable(Elementby1));
		WebElement element1 = driver.findElement(Elementby1);
		element1.click();

		Thread.sleep(2000);
		
		// akasya-ft zone ait araba listeleme //

		driver.findElement(By.xpath("//div[@placeholder='Zone seçiniz']//span")).click();
		driver.findElement(By.xpath("//input[@placeholder='Zone seçiniz']")).sendKeys("AKASYA");

		driver.findElement(By.id("ui-select-choices-1")).click();
		driver.findElement(By.xpath("/html/body/main/div/div/div/ui-view/div/div/div/div/div[2]/form/div[6]/div/button[2]")).click();
		
		// erguvanda akasya-ft zone araba listelenmemelidir //
		
	

	

	}
}

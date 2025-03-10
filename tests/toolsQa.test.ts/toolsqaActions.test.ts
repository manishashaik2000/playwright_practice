import { test, expect } from '@playwright/test';


test('actions',async({page})=>
{ 
    await page.goto('https://demoqa.com/',{timeout:50000});

    const Elements=page.getByRole('heading',{name:'Elements'});
    const textBox= page.getByText('Text Box');
    const username=page.locator('#userName');
    const userEmail=page.locator('#userEmail');
    const currentAddress=page.locator('#currentAddress');
    const permAddress=page.locator('#permanentAddress');
    const submitButton=page.locator('#submit');
const verifyName=page.locator('#name');





    Elements.waitFor();
 await Elements.click();
await textBox.click();
await username.fill('Manisha');
await userEmail.fill('manisha123@gmail.com');
await currentAddress.fill('lingampalli,d.no-123');
await permAddress.fill('lingampalli,d.no-123');
await submitButton.click();

const nameText=await verifyName.textContent();
 expect(nameText).toContain('Manisha');
 
//added a line

;});

test('WebTable',async({page})=>
    { 
        await page.goto('https://demoqa.com/',{timeout:50000});
        
    const Elements=page.getByRole('heading',{name:'Elements'});
    const webTables=page.getByText('web Tables');
    const add=page.locator('#addNewRecordButton');
    const verifyText=page.locator('#registration-form-modal');
    const FirstName=page.locator('#firstName');
    const LastName=page.locator('#lastName');
    const Email=page.getByRole('textbox',{name:'name@example.com'});
    const Age=page.locator('#age');
    const Salary=page.locator('#salary');
    const Department=page.locator('#department');
    const Submit=page.getByRole('button',{name:'submit'});
    const Forms=page.getByText('Forms');
    const PracticeForm=page.getByRole('listitem').getByText('Practice Form');
    const verifyHeading=page.getByRole('heading',{name:'Student Registration Form'});
    const firstName=page.getByRole('textbox',{name:'First Name'});
    
    Elements.waitFor();
    await Elements.click();
     await webTables.click();
     await add.click();
    await expect(verifyText).toHaveText('Registration Form');
    await FirstName.fill('manisha');
    await LastName.fill('shaik');
    await Email.fill('mani321@gmail.com');
    await Age.fill('24');
    await Salary.fill('100000');
    await Department.fill('Horticulture');
    await Submit.click();
    await Forms.click();
    await PracticeForm.click();
    await expect(verifyHeading).toHaveText('Student Registration Form');
    await firstName.fill('shaik');
    
    
    ;});
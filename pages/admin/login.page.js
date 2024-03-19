import {expect} from '@playwright/test';

export class LoginPage{
    constructor(page){
       this.page = page;
    }

    async goto(base_url) {
        await this.page.goto(base_url)
        //await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async adminLogin(username,password){
       await this.page.locator('div').filter({ hasText: /^Email Address$/ }).getByRole('textbox').click();
       await this.page.locator('div').filter({ hasText: /^Email Address$/ }).getByRole('textbox').fill(username);
        await this.page.locator('input[type="password"]').click();
        await this.page.locator('input[type="password"]').fill(password);
       await this.page.getByRole('button', { name: 'Login' }).click();
    }
}
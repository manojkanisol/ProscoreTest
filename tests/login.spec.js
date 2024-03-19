// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/admin/login.page')

let emailAddress = "*********";
let password = "******"

test('adminLogin',async({page}) =>{
  const adminLog = new LoginPage(page)
  await adminLog.goto('http://testing-admin.my-proscore.com.s3-website.ap-south-1.amazonaws.com/login')
  await adminLog.adminLogin(emailAddress,password)
});
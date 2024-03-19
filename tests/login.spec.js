const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/admin/login.page')


test('adminLogin',async({page},testInfo) =>{

  const adminLog = new LoginPage(page)
  await adminLog.goto('http://testing-admin.my-proscore.com.s3-website.ap-south-1.amazonaws.com/login')
  await adminLog.adminLogin(testInfo.project.use.username,testInfo.project.use.password)
});
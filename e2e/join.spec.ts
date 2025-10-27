import { test, expect, type Page } from '@playwright/test';
import existingUser from '../test-utils/mocks/existingUser';
import { mockUser } from '../test-utils/mockGenerators/mockUser';
import { validationErrorMessages } from '../common/constants/messages';
import {
  SUCCESS_PAGE_MESSAGE,
  REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON,
  MULTI_STEP_STEP_BUTTON,
  MULTI_STEP_SUBMIT_BUTTON,
} from '../common/constants/testIDs';

const getValidUser = () => mockUser();

const getInput = (page: Page, fieldName: string) => page.locator(`input[name="${fieldName}"]`);
const getCheckbox = (page: Page, regex: RegExp) => page.getByLabel(regex);

const assertError = async (
  page: Page,
  {
    numberOfErrors = 1,
    errorMessage = validationErrorMessages.required,
  }: { numberOfErrors?: number; errorMessage?: string } = {},
) => {
  const alerts = page.locator('#__next').getByRole('alert');
  await expect(alerts).toHaveCount(numberOfErrors);
  await expect(alerts.first()).toContainText(errorMessage);
};

const assertFailedLogin = async (
  page: Page,
  {
    numberOfErrors = 1,
    errorMessage = validationErrorMessages.required,
  }: { numberOfErrors?: number; errorMessage?: string } = {},
) => {
  await page.getByTestId(REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON).click();
  await expect(page).toHaveURL(/\/join/);
  await assertError(page, { numberOfErrors, errorMessage });
  const cookies = await page.context().cookies();
  expect(cookies).toHaveLength(0);
};

test.describe('join', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/join');
    const cookies = await page.context().cookies();
    expect(cookies).toHaveLength(0);
    await expect(page.locator('h1')).toHaveText('Join');
  });

  /**
   * Test Invalid Entries
   */

  /**
   * E-mail & ConfrimEmail fields
   */
  test('should NOT be able to register when blurring past email', async ({ page }) => {
    const validUser = getValidUser();
    await getInput(page, 'email').focus();
    await getInput(page, 'email').blur();
    await assertError(page);

    await getInput(page, 'confirm-email').fill(validUser.email);
    await getInput(page, 'firstName').fill(validUser.firstName);
    await getInput(page, 'lastName').fill(validUser.lastName);
    await getInput(page, 'zipcode').fill(String(validUser.zipcode));
    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();

    await assertFailedLogin(page, { numberOfErrors: 2 });
  });

  test('should NOT be able to register when email contains only spaces', async ({ page }) => {
    const validUser = getValidUser();
    await getInput(page, 'email').fill('   ');
    await getInput(page, 'email').blur();
    await assertError(page);

    await getInput(page, 'confirm-email').fill(validUser.email);
    await getInput(page, 'firstName').fill(validUser.firstName);
    await getInput(page, 'lastName').fill(validUser.lastName);
    await getInput(page, 'zipcode').fill(String(validUser.zipcode));
    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();

    await assertFailedLogin(page, { numberOfErrors: 2 });
  });

  test('should NOT be able to register with an invalid email', async ({ page }) => {
    const invalidUser = mockUser('invalidemail@.com');

    await getInput(page, 'email').fill(invalidUser.email);
    await getInput(page, 'email').blur();
    await assertError(page, { errorMessage: validationErrorMessages.email });

    await getInput(page, 'confirm-email').fill(invalidUser.email);
    await getInput(page, 'firstName').fill(invalidUser.firstName);
    await getInput(page, 'lastName').fill(invalidUser.lastName);
    await getInput(page, 'zipcode').fill(String(invalidUser.zipcode));
    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();

    await assertFailedLogin(page, { errorMessage: validationErrorMessages.email });
  });

  test('should NOT be able to register when blurring past confirmEmail', async ({ page }) => {
    const validUser = getValidUser();
    await getInput(page, 'email').fill(validUser.email);

    await getInput(page, 'confirm-email').focus();
    await getInput(page, 'confirm-email').blur();
    await assertError(page);

    await getInput(page, 'firstName').fill(validUser.firstName);
    await getInput(page, 'lastName').fill(validUser.lastName);
    await getInput(page, 'zipcode').fill(String(validUser.zipcode));
    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();

    await assertFailedLogin(page);
  });

  test('should NOT be able to register when emails do not match', async ({ page }) => {
    const validUser = getValidUser();
    await getInput(page, 'email').fill(validUser.email);
    await getInput(page, 'confirm-email').fill(existingUser.email);

    await getInput(page, 'firstName').fill(validUser.firstName);

    await assertError(page, { errorMessage: validationErrorMessages.emailsMatch });

    await getInput(page, 'lastName').fill(validUser.lastName);
    await getInput(page, 'zipcode').fill(String(validUser.zipcode));
    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();

    await assertFailedLogin(page, { errorMessage: validationErrorMessages.emailsMatch });
  });

  test('should NOT be able to register with an existing email', async ({ page }) => {
    await getInput(page, 'email').fill(existingUser.email);
    await getInput(page, 'confirm-email').fill(existingUser.email);
    await getInput(page, 'firstName').fill(existingUser.firstName);
    await getInput(page, 'lastName').fill(existingUser.lastName);
    await getInput(page, 'zipcode').fill(String(existingUser.zipcode));
    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();

    await assertFailedLogin(page, { errorMessage: validationErrorMessages.emailExists });
  });

  /**
   * FirstName & LastName Fields
   */
  test('should NOT be able to register when blurring past firstName', async ({ page }) => {
    const validUser = getValidUser();
    await getInput(page, 'email').fill(validUser.email);
    await getInput(page, 'confirm-email').fill(validUser.email);

    await getInput(page, 'firstName').focus();
    await getInput(page, 'firstName').blur();
    await assertError(page);

    await getInput(page, 'lastName').fill(validUser.lastName);
    await getInput(page, 'zipcode').fill(String(validUser.zipcode));
    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();

    await assertFailedLogin(page);
  });

  test('should NOT be able to register when firstName contains only spaces', async ({ page }) => {
    const validUser = getValidUser();
    await getInput(page, 'email').fill(validUser.email);
    await getInput(page, 'confirm-email').fill(validUser.email);

    await getInput(page, 'firstName').fill('     ');
    await getInput(page, 'firstName').blur();
    await assertError(page);

    await getInput(page, 'lastName').fill(validUser.lastName);
    await getInput(page, 'zipcode').fill(String(validUser.zipcode));
    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();

    await assertFailedLogin(page);
  });

  test('should NOT be able to register when blurring past lastName', async ({ page }) => {
    const validUser = getValidUser();
    await getInput(page, 'email').fill(validUser.email);
    await getInput(page, 'confirm-email').fill(validUser.email);
    await getInput(page, 'firstName').fill(validUser.firstName);

    await getInput(page, 'lastName').focus();
    await getInput(page, 'lastName').blur();
    await assertError(page);

    await getInput(page, 'zipcode').fill(String(validUser.zipcode));
    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();

    await assertFailedLogin(page);
  });

  test('should NOT be able to register when lastName contains only spaces', async ({ page }) => {
    const validUser = getValidUser();
    await getInput(page, 'email').fill(validUser.email);
    await getInput(page, 'confirm-email').fill(validUser.email);
    await getInput(page, 'firstName').fill(validUser.firstName);

    await getInput(page, 'lastName').fill('     ');
    await getInput(page, 'lastName').blur();
    await assertError(page);

    await getInput(page, 'zipcode').fill(String(validUser.zipcode));
    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();

    await assertFailedLogin(page);
  });

  /**
   * Zipcode field
   */
  test('should NOT be able to register when blurring past zipcode', async ({ page }) => {
    const validUser = getValidUser();
    await getInput(page, 'email').fill(validUser.email);
    await getInput(page, 'confirm-email').fill(validUser.email);
    await getInput(page, 'firstName').fill(validUser.firstName);
    await getInput(page, 'lastName').fill(validUser.lastName);

    await getInput(page, 'zipcode').focus();
    await getInput(page, 'zipcode').blur();
    await assertError(page);

    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();

    await assertFailedLogin(page);
  });

  test('should NOT be able to register when zipcode contains only spaces', async ({ page }) => {
    const validUser = getValidUser();
    await getInput(page, 'email').fill(validUser.email);
    await getInput(page, 'confirm-email').fill(validUser.email);
    await getInput(page, 'firstName').fill(validUser.firstName);
    await getInput(page, 'lastName').fill(validUser.lastName);

    await getInput(page, 'zipcode').fill('     ');
    await getInput(page, 'zipcode').blur();
    await assertError(page);

    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();

    await assertFailedLogin(page);
  });

  test('should NOT be able to register when Code of Conduct is not agreed to', async ({ page }) => {
    const validUser = getValidUser();
    await getInput(page, 'email').fill(validUser.email);
    await getInput(page, 'confirm-email').fill(validUser.email);
    await getInput(page, 'firstName').fill(validUser.firstName);
    await getInput(page, 'lastName').fill(validUser.lastName);
    await getInput(page, 'zipcode').fill(String(validUser.zipcode));

    await getCheckbox(page, /Code of Conduct/).focus();
    await getCheckbox(page, /Code of Conduct/).blur();
    await getCheckbox(page, /Slack Community Guidelines/).check();

    await assertError(page, {
      numberOfErrors: 1,
      errorMessage: validationErrorMessages.codeOfConduct,
    });
    await assertFailedLogin(page, {
      numberOfErrors: 1,
      errorMessage: validationErrorMessages.codeOfConduct,
    });
  });

  test('should NOT be able to register when Slack Community Guidelines is not agreed to', async ({
    page,
  }) => {
    const validUser = getValidUser();
    await getInput(page, 'email').fill(validUser.email);
    await getInput(page, 'confirm-email').fill(validUser.email);
    await getInput(page, 'firstName').fill(validUser.firstName);
    await getInput(page, 'lastName').fill(validUser.lastName);
    await getInput(page, 'zipcode').fill(String(validUser.zipcode));
    await getCheckbox(page, /Code of Conduct/).check();

    await getCheckbox(page, /Slack Community Guidelines/).focus();
    await getCheckbox(page, /Slack Community Guidelines/).blur();

    await assertError(page, {
      numberOfErrors: 1,
      errorMessage: validationErrorMessages.slackGuidelines,
    });
    await assertFailedLogin(page, {
      numberOfErrors: 1,
      errorMessage: validationErrorMessages.slackGuidelines,
    });
  });

  /**
   * Registration without all fields
   */
  test('should NOT be able to register without filling all required fields', async ({ page }) => {
    await assertFailedLogin(page, { numberOfErrors: 7 });
  });

  /**
   * Test Valid User
   */
  test('should be able to register with valid data', async ({ page }) => {
    test.slow(); // this test takes a long time
    const validUser = getValidUser();
    await getInput(page, 'email').fill(validUser.email);
    await getInput(page, 'confirm-email').fill(validUser.email);
    await getInput(page, 'firstName').fill(validUser.firstName);
    await getInput(page, 'lastName').fill(validUser.lastName);
    await getInput(page, 'zipcode').fill(String(validUser.zipcode));
    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();
    await page.getByTestId(REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON).click();

    await page.waitForURL(/\/join\/form/, { timeout: 30000 });
    await expect(page.locator('h1')).toHaveText('Update Profile');

    // Professional Details
    await page.getByLabel('Employment Status*').fill('Full-Time');
    await page.keyboard.press('Enter');
    await page.getByLabel('Company Name').fill('Test Company');
    await page.getByLabel('Company Role').fill('Test Title');
    await page.getByTestId(MULTI_STEP_STEP_BUTTON).click();

    // Military Status
    await page.getByLabel('Military Affiliation*').fill('Non');
    await page.keyboard.press('Enter');
    await page.getByTestId(MULTI_STEP_STEP_BUTTON).click();

    // Assert that we see Personal Details (not Military Details)
    await expect(page.getByText('Personal Details')).toBeVisible({
      // sometimes long API response time
      timeout: 15000,
    });

    // Go back
    await page
      .locator('form')
      .getByRole('button', { name: /back|previous/i })
      .click();

    // Military Status
    await expect(page.getByText('Military Status')).toBeVisible();
    await page.getByLabel('Military Affiliation*').fill('Active');
    await page.keyboard.press('Enter');
    await page.getByTestId(MULTI_STEP_STEP_BUTTON).click();

    // Assert that we see Military Details (not Personal Details)
    await expect(page.getByText('Military Details')).toBeVisible({
      // sometimes long API response time
      timeout: 15000,
    });

    // Military Details
    await page.getByLabel('Branch Of Service*').fill('Army');
    await page.keyboard.press('Enter');
    await page.getByLabel('Pay Grade*').fill('E1-E5');
    await page.keyboard.press('Enter');
    await page.getByTestId(MULTI_STEP_STEP_BUTTON).click();

    // Assert that we see Personal Details again
    await expect(page.getByText('Personal Details')).toBeVisible({
      // sometimes long API response time
      timeout: 15000,
    });

    // Personal Details
    await page.getByLabel('Join Reason*').fill('None');
    await page.keyboard.press('Enter');
    await page.getByLabel('Gender*').fill('Male');
    await page.keyboard.press('Enter');
    await page.getByLabel('Ethnicity*').fill('Caucasian');
    await page.keyboard.press('Enter');
    await page.getByLabel('Ethnicity*').fill('Hispanic');
    await page.keyboard.press('Enter');
    await page.getByLabel('Education Level*').fill('High school');
    await page.keyboard.press('Enter');
    await page.getByTestId(MULTI_STEP_SUBMIT_BUTTON).click();

    // Success UI
    await expect(page.getByTestId(SUCCESS_PAGE_MESSAGE)).toBeVisible({
      // sometimes long API response time
      timeout: 15000,
    });
  });
});

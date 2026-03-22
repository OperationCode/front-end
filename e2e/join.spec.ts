import { test, expect, type Page } from '@playwright/test';
import existingUser from '../test-utils/mocks/existingUser';
import { mockUser } from '../test-utils/mockGenerators/mockUser';
import { validationErrorMessages } from '../common/constants/messages';
import {
  SUCCESS_PAGE_MESSAGE,
  REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON,
  MULTI_STEP_STEP_BUTTON,
  MULTI_STEP_SUBMIT_BUTTON,
  MULTI_STEP_PREVIOUS_BUTTON,
} from '../common/constants/testIDs';

const getValidUser = () => mockUser();

const getInput = (page: Page, fieldName: string) => page.locator(`input[name="${fieldName}"]`);
const getCheckbox = (page: Page, regex: RegExp) => page.getByLabel(regex);

// Programmatic .blur() doesn't reliably trigger Formik's onBlur validation in WebKit.
// "Tapping" elsewhere (like a user would on mobile) is the most cross-browser way to blur a field.
const triggerBlur = async (page: Page, fieldName: string) => {
  await getInput(page, fieldName).blur();
  await page.locator('h1').click();
};

const clickStepButton = async (page: Page) => {
  const btn = page.getByTestId(MULTI_STEP_STEP_BUTTON);
  await expect(btn).toBeEnabled();
  await btn.click();
};

const clickSubmitButton = async (page: Page) => {
  const btn = page.getByTestId(MULTI_STEP_SUBMIT_BUTTON);
  await expect(btn).toBeEnabled();
  await btn.click();
};

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
    await triggerBlur(page, 'email');
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
    await triggerBlur(page, 'email');
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
    await triggerBlur(page, 'email');
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
    await triggerBlur(page, 'confirm-email');
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
    await triggerBlur(page, 'firstName');
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
    await triggerBlur(page, 'firstName');
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
    await triggerBlur(page, 'lastName');
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
    await triggerBlur(page, 'lastName');
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
    await triggerBlur(page, 'zipcode');
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
    await triggerBlur(page, 'zipcode');
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
    await triggerBlur(page, 'codeOfConduct');
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
    await triggerBlur(page, 'slackGuidelines');

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
    await clickStepButton(page);

    // Military Status
    await page.getByLabel('Military Affiliation*').fill('Non');
    await page.keyboard.press('Enter');
    await clickStepButton(page);

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
    await clickStepButton(page);

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
    await clickStepButton(page);

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
    await clickSubmitButton(page);

    // Success UI
    await expect(page.getByTestId(SUCCESS_PAGE_MESSAGE)).toBeVisible({
      // sometimes long API response time
      timeout: 15000,
    });
  });

  test('should allow completing registration after filling the last step and going back to change earlier answers', async ({
    page,
  }) => {
    test.slow();
    const validUser = getValidUser();

    const updateResponses: { status: number }[] = [];
    page.on('response', response => {
      if (
        response.url().includes('/api/registration/update') &&
        response.request().method() === 'PATCH'
      ) {
        updateResponses.push({ status: response.status() });
      }
    });

    // --- Registration form ---
    await getInput(page, 'email').fill(validUser.email);
    await getInput(page, 'confirm-email').fill(validUser.email);
    await getInput(page, 'firstName').fill(validUser.firstName);
    await getInput(page, 'lastName').fill(validUser.lastName);
    await getInput(page, 'zipcode').fill(String(validUser.zipcode));
    await getCheckbox(page, /Code of Conduct/).check();
    await getCheckbox(page, /Slack Community Guidelines/).check();
    await page.getByTestId(REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON).click();
    await page.waitForURL(/\/join\/form/, { timeout: 30000 });

    // Step 1: Professional Details
    await page.getByLabel('Employment Status*').fill('Full-Time');
    await page.keyboard.press('Enter');
    await page.getByLabel('Company Name').fill('Test Company');
    await page.getByLabel('Company Role').fill('Engineer');
    await clickStepButton(page);

    // Step 2: Military Status (Active — ensures all payload fields exist)
    await expect(page.getByText('Military Status')).toBeVisible({ timeout: 15000 });
    await page.getByLabel('Military Affiliation*').fill('Active');
    await page.keyboard.press('Enter');
    await clickStepButton(page);

    // Step 3: Military Details
    await expect(page.getByText('Military Details')).toBeVisible({ timeout: 15000 });
    await page.getByLabel('Branch Of Service*').fill('Army');
    await page.keyboard.press('Enter');
    await page.getByLabel('Pay Grade*').fill('E1-E5');
    await page.keyboard.press('Enter');
    await clickStepButton(page);

    // Step 4: Fill Personal Details fields — but DO NOT click Submit
    await expect(page.getByText('Personal Details')).toBeVisible({ timeout: 15000 });
    await page.getByLabel('Join Reason*').fill('None');
    await page.keyboard.press('Enter');
    await page.getByLabel('Gender*').fill('Male');
    await page.keyboard.press('Enter');
    await page.getByLabel('Ethnicity*').fill('Caucasian');
    await page.keyboard.press('Enter');
    await page.getByLabel('Education Level*').fill('High school');
    await page.keyboard.press('Enter');

    // Go back to Professional Details (Formik still holds ALL filled values)
    await page.getByTestId(MULTI_STEP_PREVIOUS_BUTTON).click();
    await expect(page.getByText('Military Details')).toBeVisible();
    await page.getByTestId(MULTI_STEP_PREVIOUS_BUTTON).click();
    await expect(page.getByText('Military Status')).toBeVisible();
    await page.getByTestId(MULTI_STEP_PREVIOUS_BUTTON).click();
    await expect(page.getByText('Professional Details')).toBeVisible();

    // Change an answer and re-submit forward through every step.
    // Each "Next" sends ALL Formik values (including Personal Details) via PATCH.
    // The cookie must NOT be cleared on these intermediate steps.
    await page.getByLabel('Company Role').fill('Senior Engineer');
    await clickStepButton(page);

    await expect(page.getByText('Military Status')).toBeVisible({ timeout: 15000 });
    await clickStepButton(page);

    await expect(page.getByText('Military Details')).toBeVisible({ timeout: 15000 });
    await clickStepButton(page);

    await expect(page.getByText('Personal Details')).toBeVisible({ timeout: 15000 });
    await clickSubmitButton(page);

    await expect(page.getByTestId(SUCCESS_PAGE_MESSAGE)).toBeVisible({ timeout: 15000 });

    for (const response of updateResponses) {
      expect(response.status).toBe(200);
    }
  });
});

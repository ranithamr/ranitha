Feature: loginCheck

  Scenario: validate error message while user login with invalid credentials

    Given I launch openCart url
    And I click on login
    When I enter username
    And I enter password
    And I click on continue
    Then I validate errorMessage
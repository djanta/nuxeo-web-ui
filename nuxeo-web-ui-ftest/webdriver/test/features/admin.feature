Feature: Admin center

  As an Administrator I have an Admin center

  Background:
    When I login as "Administrator"
    And I go to the UI

  Scenario: Admin center
    When I click the "admin" tab
    Then I can see the Admin center
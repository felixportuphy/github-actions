Feature: Login test for different users

    Each user should be able to login with different experience

    Background: User should launch the site
        Given I visit the saucedemo site

    Scenario Outline: A <userType> should be able to login to saucelabs with different <experience>
        And  I enter the "<userType>" username
        And  I enter the password
        When I click on the login button
        Then I should see the "<experience>"


        Examples:
            | userType                | experience               |
            | standard_user           | products page            |
            | performance_glitch_user | delayed products page    |
            | problem_user            | duplicate product images |

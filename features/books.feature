Feature:
Scenario Outline: Validate price of a book
    Given the books website is launched
    When the user clicks on the book "<bookTitle>"
    Then the book detail page should open "<bookTitle>"
    And the price should be less than <price>

    Examples:
      | bookTitle    | price |
      | Set Me Free  | 20    |
      | Tipping the Velvet | 54 |
require "application_system_test_case"

class RecipesTest < ApplicationSystemTestCase
  test "トップページが開ける" do
    visit root_path
    assert_selector "h1, h2, h3, p, div"
  end
end
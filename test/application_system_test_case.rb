require "test_helper"
require "capybara/rails"
require "capybara/minitest"

Capybara.register_driver :chrome_headless do |app|
  Capybara::Selenium::Driver.new(
    app,
    browser: :chrome,
    options: Selenium::WebDriver::Chrome::Options.new(
      args: %w[
        headless
        disable-gpu
        no-sandbox
        disable-dev-shm-usage
        window-size=1400,1400
      ]
    )
  )
end

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :chrome_headless
end

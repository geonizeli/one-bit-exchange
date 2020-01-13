require 'test_helper'

class ExchangesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get exchanges_index_url
    assert_response :success
  end

  test "should get convert" do
    get exchanges_convert_url
    assert_response :success
  end

end

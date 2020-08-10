require 'test_helper'

class FarmsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @farm = farms(:one)
  end

  test "should get index" do
    get farms_url, as: :json
    assert_response :success
  end

  test "should create farm" do
    assert_difference('Farm.count') do
      post farms_url, params: { farm: { address: @farm.address, city: @farm.city, name: @farm.name, phone: @farm.phone, state: @farm.state, zipcode: @farm.zipcode } }, as: :json
    end

    assert_response 201
  end

  test "should show farm" do
    get farm_url(@farm), as: :json
    assert_response :success
  end

  test "should update farm" do
    patch farm_url(@farm), params: { farm: { address: @farm.address, city: @farm.city, name: @farm.name, phone: @farm.phone, state: @farm.state, zipcode: @farm.zipcode } }, as: :json
    assert_response 200
  end

  test "should destroy farm" do
    assert_difference('Farm.count', -1) do
      delete farm_url(@farm), as: :json
    end

    assert_response 204
  end
end

class FoodsController < ApplicationController
  before_action :set_food, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy, :add_farm]

  # GET /foods
  def index
    @foods = Food.all

    render json: @foods
  end

  # GET /foods/1
  def show
    render json: @food, include: :farms
  end

  # POST /foods
  def create
    @food = Food.new(food_params)
    @food.user = @current_user

    if @food.save
      render json: @food, status: :created, location: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /foods/1
  def update
    if @food.update(food_params)
      render json: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  # DELETE /foods/1
  def destroy
    @food.destroy
  end

  # PUT /farm/1/foods/2
  def add_farm
    @food = Food.find(params[:id])
    @farm = Farm.find(params[:farm_id])

    @food.farms << @farm

    render json: @food, include: :farms
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food
      @food = Food.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def food_params
      params.require(:food).permit(:name, :user_id)
    end
end

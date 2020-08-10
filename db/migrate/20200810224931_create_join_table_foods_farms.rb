class CreateJoinTableFoodsFarms < ActiveRecord::Migration[6.0]
  def change
    create_join_table :foods, :farms do |t|
      # t.index [:food_id, :farm_id]
      # t.index [:farm_id, :food_id]
    end
  end
end

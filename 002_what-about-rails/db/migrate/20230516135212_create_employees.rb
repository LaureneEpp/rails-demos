class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.string :index
      t.string :show
      t.string :new
      t.string :create
      t.string :edit
      t.string :update
      t.string :destroy

      t.timestamps
    end
  end
end

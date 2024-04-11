class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :description
      t.references :departement, null: false, foreign_key: true

      t.timestamps
    end
  end
end
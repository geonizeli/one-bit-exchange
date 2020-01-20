class CreateHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :histories do |t|
      t.string :in, null: true
      t.string :for, null: true
      t.decimal :amount, precision: 4, null: true
      t.decimal :price, precision: 4, null: true
      t.decimal :result, precision: 4, null: true
      t.timestamps
    end
  end
end

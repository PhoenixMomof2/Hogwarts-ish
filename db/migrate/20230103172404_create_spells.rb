class CreateSpells < ActiveRecord::Migration[6.1]
  def change
    create_table :spells do |t|
      t.string :spell_name
      t.string :spell_impact
      t.integer :point_value
      t.integer :wizard_id
    end
  end
end

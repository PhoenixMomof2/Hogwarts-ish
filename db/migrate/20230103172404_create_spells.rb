class CreateSpells < ActiveRecord::Migration[6.1]
  def change
    create_table :spells do |t|
      t.string :name
      t.string :spell_impact
      t.integer :wizard_id
    end
  end
end

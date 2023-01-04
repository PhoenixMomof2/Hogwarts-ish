class CreateSpells < ActiveRecord::Migration[6.1]
  def change
    create_table :spells do |t|
      t.integer id 
      t.string :name
      t.string :spell_impact
    end
  end
end

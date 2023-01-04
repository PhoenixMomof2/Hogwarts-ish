class CreateWizards < ActiveRecord::Migration[6.1]
  def change
    create_table :wizards do |t|
      t.string :name
      t.string :img_url
      t.string :house_name
      t.string :traits
    end
  end
end

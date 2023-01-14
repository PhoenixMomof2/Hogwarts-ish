# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_01_03_172404) do

  create_table "spells", force: :cascade do |t|
    t.string "spell_name"
    t.string "spell_impact"
    t.integer "point_value"
    t.integer "wizard_id"
  end

  create_table "wizards", force: :cascade do |t|
    t.string "wizard_name"
    t.string "img_url"
    t.string "house_name"
    t.string "traits"
  end

end

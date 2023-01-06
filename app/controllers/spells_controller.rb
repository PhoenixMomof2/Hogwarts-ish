class SpellsController < ApplicationController
    get '/spells' do
    spells = Spell.all.order(:name)
    spells.to_json
    end

    get 'spells/:spell_id' do
    "What the spell does."
    end

end
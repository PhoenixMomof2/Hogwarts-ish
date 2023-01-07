class SpellsController < ApplicationController
    get '/spells' do
    spells = Spell.all.order(:name)
    spells.to_json
    end
end
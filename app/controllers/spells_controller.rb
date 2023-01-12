class SpellsController < ApplicationController
    
    get '/spells' do
        spells = Spell.all.order(:name)
        spells.to_json
    end

    post '/spells' do
        spell = Spell.create(
            name: params[:name],
            spell_impact: params[:spell_impact],
            point_value: params[:point_value],
            wizard_id: params[:wizard_id]
            # how do I do the form so the user can attach 
            # the new spell to the wizard
        )
        spell.to_json 
    end
end
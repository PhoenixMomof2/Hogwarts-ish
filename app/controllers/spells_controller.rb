class SpellsController < ApplicationController
    
    get '/spells' do
        spells = Spell.all
        spells.to_json
    end

    post '/spells' do
        spell = Spell.create(
            spell_name: params[:spell_name],
            spell_impact: params[:spell_impact],
            point_value: params[:point_value],
            wizard_id: params[:wizard_id]
        )
        spell.to_json 
    end

    patch '/spells/:id' do
        # wizard = wizard.find_by(id: params[:wizard_id])
        spell.update(
            spell_name: params[:spell_name],
            spell_impact: params[:spell_impact],
            point_value: params[:point_value],
            wizard_id: params[:wizard_id]
        )
        spell.to_json
    end
end
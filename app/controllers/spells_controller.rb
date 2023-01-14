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
        )
        spell.to_json 
    end

    patch '/spells/:id' do
        spell = Spell.find(params[:id])
        spell.update(
            name: params[:name],
            spell_impact: params[:spell_impact],
            point_value: params[:point_value],
            wizard_id: params[:wizard_id]
        )
        spell.to_json
    end

    delete '/spells/:id' do
        spell = Spell.find(params[:id])
        spell.destroy
        spell.to_json
      end
  

end
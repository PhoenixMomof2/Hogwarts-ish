class SpellsController < ApplicationController
    
    get '/spells' do
        spells = Spell.all
        spells.to_json
    end

    post '/spells' do
        spell = Spell.create(spell_params)
        spell.to_json 
    end

    private
    # a method used to specify which keys are allowed through params into the controller
    # we use this method to create a list of what's permitted to be passed to .create or .update
    # within controller actions.
    def spell_params
      allowed_params = %w(spell_name spell_impact point_value wizard_id)
      params.select{|k,v| allowed_params.include?(k)}
    end

end
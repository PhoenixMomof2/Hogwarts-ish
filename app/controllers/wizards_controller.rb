class WizardsController < ApplicationController

    get '/wizards' do
      wizards = Wizard.all
      wizards.to_json
    end

    get '/wizards/:id' do
      wizard = Wizard.find(params[:id])
      if wizard
        wizard.to_json(include: :spells)
      else "Error"
      end
    end

    post '/wizards' do
      wizard = Wizard.create(wizard_params)
      wizard.to_json 
    end

    delete '/wizards/:id' do
      wizard = Wizard.find(params[:id])
      wizard.destroy
      wizard.to_json
    end

    patch '/wizards/:id' do
      wizard = Wizard.find(params[:id])
      wizard.update(wizard_params)
      wizard.to_json 
    end

    private
    # a method used to specify which keys are allowed through params into the controller
    # we use this method to create a list of what's permitted to be passed to .create or .update
    # within controller actions.
    def wizard_params
      allowed_params = %w(wizard_name house_name img_url traits)
      params.select{|k,v| allowed_params.include?(k)}
    end

end
class WizardsController < ApplicationController

    get '/wizards' do
      wizards = Wizard.all
      wizards.to_json
    end

    get '/wizards/:id' do
      wizards = Wizard.find(params[:id])
      wizards.to_json(include: :spells)
    end

    post '/wizards' do
      wizard = Wizard.create(
        wizard_name: params[:wizard_name], 
        house_name: params[:house_name], 
        img_url: params[:img_url], 
        traits: params[:traits]
      )
      wizard.to_json 
    end

    delete '/wizards/:id' do
      wizard = Wizard.find(params[:id])
      wizard.destroy
    end

    patch '/wizards/:id' do
      wizard = Wizard.find(params[:id])
      wizard.update(
        wizard_name: params[:wizard_name], 
        house_name: params[:house_name], 
        img_url: params[:img_url], 
        traits: params[:traits]
      )
      wizard.to_json
    end

end
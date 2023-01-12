class WizardsController < ApplicationController

    get '/wizards' do
      wizards = Wizard.all.order(:name)
      wizards.to_json
    end

    get '/wizards/:id' do
      wizards = Wizard.find(params[:id])
      wizards.to_json(include: :spells)
    end

    post '/wizards' do
      wizard = Wizard.create(
        name: params[:name], 
        img_url: params[:img_url], 
        house_name: params[:house_name], 
        traits: params[:traits]
      )
      wizard.to_json 
    end

    patch '/wizards/:id' do
      wizard = Wizard.find(params[:id])
      wizard.update(
        name: params[:name], 
        img_url: params[:img_url], 
        house_name: params[:house_name], 
        traits: params[:traits]
      )
      wizard.to_json
    end

    delete '/wizards/:id' do
      wizard = Wizard.find(params[:id])
      wizard.destroy
      wizard.to_json
    end

end
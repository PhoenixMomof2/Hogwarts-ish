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
      new_wizard = Wizard.create(name: params[:name]), img_url: params[:img_url], house_name: params[:house_name], traits: params[:traits])
      new_wizard.to_json 
    end
end
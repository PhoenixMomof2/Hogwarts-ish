class WizardsController < ApplicationController
  get '/wizards' do
    wizards = Wizard.all.order(:name)
    wizards.to_json
    end

    get '/wizards/:id' do
      wizards = Wizard.find(params[:id])
      wizards.to_json(include: :spells)
    end
end
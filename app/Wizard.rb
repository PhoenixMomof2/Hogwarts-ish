class Wizard < ActiveRecord::Base
  has_many :spells

  def find_by_house_name(house_name)
    self.all.where(house_name)
    #not working
  end
end
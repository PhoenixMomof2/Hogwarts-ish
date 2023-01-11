class Wizard < ActiveRecord::Base
  has_many :spells

  def get_house_wizards
    # create a method to get wizards based on the house the belong to
    # self.find_by_name
  end


end
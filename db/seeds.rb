puts "🌱 Seeding spices..."

puts "Deleting Wizard/Spell data...."
Wizard.destroy_all
Spell.destroy_all

puts "Creating wizards..."
harry = Wizard.create(name: "Harry Potter", house_name: "Gryffindor")
ron = Wizard.create(name: "Ronald Weasley", house_name: "Gryffindor")
hermione = Wizard.create(name: "Hermione Granger", house_name: "Gryffindor")
jenny = Wizard.create(name: "Jenny Weasley", house_name: "Gryffindor")
diggory = Wizard.create(name: "Cedric Diggory", house_name: "Hufflepuff")
newt = Wizard.create(name: "Newt Scamander", house_name: "Hufflepuff")
lupin = Wizard.create(name: "Teddy Lupin", house_name: "Hufflepuff")
tonks = Wizard.create(name: "Nymphadora Tonks", house_name: "Hufflepuff")
luna = Wizard.create(name: "Luna Lovegood", house_name: "Ravenclaw")
trelawney = Wizard.create(name: "Sybill Trelawney", house_name: "Ravenclaw")
cho = Wizard.create(name: "Cho Chang", house_name: "Ravenclaw")
patil = Wizard.create(name: "Padma Patil", house_name: "Ravenclaw")
malfoy = Wizard.create(name: "Draco Malfoy", house_name: "Slytherin")
crabbe = Wizard.create(name: "Vincent Crabbe", house_name: "Slytherin")
goyle = Wizard.create(name: "Gregory Goyle", house_name: "Slytherin")
riddle = Wizard.create(name: "Tom Riddle", house_name: "Slytherin")

puts "Creating spells..."
Spell.create([
  {name: "Papyrus Reparo", spell_impact: "Mends torn pieces of paper."}, 
  {name: "Deletrius", spell_impact: "Counter-charm to the Reverse Spell, vanishing the image of the last spell cast. It may also disintegrate other certain images."},
  {name: "Ascendio", spell_impact: "Lifts the caster high into the air. The charm also works underwater, propelling the caster above the surface."},
  {name: "Avada Kedavra", spell_impact: "Causes instantaneous death. It is accompanied by a flash of green light and a rushing noise."},
  {name: "Magicus Extremos", spell_impact: "Partnership-based charm that temporarily increases the casters' spell power."},
  {name: "Sectumsempra", spell_impact: "Lacerates the target, as if they have been slashed by a sword. Subsequently, the target can easily bleed to death from the wounds."},
  {name: "Lacarnum Inflamari", spell_impact: "Ignites cloaks."},
  {name: "Waddiwasi", spell_impact: "Used to shoot small, soft masses of whatever the caster so desires at the target"},
  {name: "Bat-Bogey Hex", spell_impact: "Transforms the target's bogeys into large bats that fly out of the victim's nose."},
  {name: "Calvorio", spell_impact: "Removes the victim's hair."}
])

puts "✅ Done seeding!"

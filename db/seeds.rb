puts "🌱 Seeding spices..."

puts "Deleting Wizard/Spell data...."
Wizard.destroy_all
Spell.destroy_all

puts "Creating wizards..."
harry = Wizard.create(wizard_name: "Harry Potter", img_url: "https://static.india.com/wp-content/uploads/2016/11/Harry-Potter-Main-Article-1.jpg", house_name: "Gryffindor", traits: "empathetic, awkward. stout")
ron = Wizard.create(wizard_name: "Ronald Weasley", img_url: "https://i.pinimg.com/originals/62/f8/ca/62f8ca6d85429db664a7fdd948207fb2.jpg", house_name: "Gryffindor", traits: "tempermental, awkward, cunning")
hermione = Wizard.create(wizard_name: "Hermione Granger", img_url: "https://101bags.files.wordpress.com/2015/04/hermione.jpg", house_name: "Gryffindor", traits: "clever, cognitive, devoted")
jenny = Wizard.create(wizard_name: "Jenny Weasley", img_url: "https://s2.r29static.com/bin/entry/2ed/0,0,280,336/960xbm,70/41414/image.jpg", house_name: "Gryffindor", traits: "fiesty, intelligent, ginger")
diggory = Wizard.create(wizard_name: "Cedric Diggory", img_url: "https://imgix.ranker.com/user_node_img/50129/1002579149/original/1002579149-photo-u769050169?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375", house_name: "Hufflepuff", traits: "handsome, brave, kind")
newt = Wizard.create(wizard_name: "Newt Scamander", img_url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F11%2Ffb-02133ar-2000.jpg", house_name: "Hufflepuff", traits: "nurturing, quirky, awkward")
lupin = Wizard.create(wizard_name: "Teddy Lupin", img_url: "https://i.pinimg.com/736x/cd/5c/bf/cd5cbf339392c899de04f933dc7df3c6.jpg", house_name: "Hufflepuff", traits: "dedicated, coy, mercurial")
tonks = Wizard.create(wizard_name: "Nymphadora Tonks", img_url: "https://qph.cf2.quoracdn.net/main-qimg-a6f4aeb9808183db640bd81a93751d2e-lq", house_name: "Hufflepuff", traits: "unique, skilled, funny")
luna = Wizard.create(wizard_name: "Luna Lovegood", img_url: "https://i.pinimg.com/474x/96/a3/1c/96a31c697643edf12fb1a108220760bc--harry-potter-characters-harry-potter-.jpg", house_name: "Ravenclaw", traits: "open-minded, optimistic, altruistic")
mcgonagall = Wizard.create(wizard_name: "Professor McGonagall", img_url: "https://images.ctfassets.net/usf1vwtuqyxm/6J6heLMpK9Lee0eL8faPnj/18ebb3e1a6694c1ed440bf094b02a127/mcgonagall-web-headrer.jpg?w=1200&fit=fill&f=top", house_name: "Gryffindor", traits: "stern, loyal, protective")
cho = Wizard.create(wizard_name: "Cho Chang", img_url: "http://images.fanpop.com/images/image_uploads/Cho-cho-chang-131998_300_400.jpg", house_name: "Ravenclaw", traits: "intelligent, pure, sweet")
patil = Wizard.create(wizard_name: "Padma Patil", img_url: "https://static.wikia.nocookie.net/harrypotter/images/4/45/PadmaPatil.png", house_name: "Ravenclaw", traits: "courageous, determined, loving")
malfoy = Wizard.create(wizard_name: "Draco Malfoy", img_url: "https://www.kindpng.com/picc/m/199-1999717_png-malfoy-png-malfoy-transparent-png.png", house_name: "Slytherin", traits: "spiteful, cowardly, bully")
crabbe = Wizard.create(wizard_name: "Vincent Crabbe", img_url: "https://i.ebayimg.com/images/g/U6gAAOSwq41dtOUD/s-l500.jpg", house_name: "Slytherin", traits: "greedy, gluttonous, clueless")
goyle = Wizard.create(wizard_name: "Gregory Goyle", img_url: "https://i.pinimg.com/736x/10/74/e8/1074e89bbcb3b76dd4db452a549c679b--movie-characters-harry-potter-characters.jpg", house_name: "Slytherin", traits: "lacks intelligence, magical talent, and independent thought")
riddle = Wizard.create(wizard_name: "Tom Riddle", img_url: "https://i.stack.imgur.com/4ZOPz.jpg", house_name: "Slytherin", traits: "evil, arrogant, unfearing")

puts "Creating spells..."
Spell.create([
  {spell_name: "Papyrus Reparo", spell_impact: "Mends torn pieces of paper.", point_value: 2, wizard_id: 1}, 
  {spell_name: "Deletrius", spell_impact: "Counter-charm to the Reverse Spell, vanishing the image of the last spell cast. It may also disintegrate other certain images.", point_value: 4, wizard_id: 1},
  {spell_name: "Ascendio", spell_impact: "Lifts the caster high into the air. The charm also works underwater, propelling the caster above the surface.", point_value: 3, wizard_id: 1},
  {spell_name: "Avada Kedavra", spell_impact: "Causes instantaneous death. It is accompanied by a flash of green light and a rushing noise.", point_value: 5, wizard_id: 2},
  {spell_name: "Magicus Extremos", spell_impact: "Partnership-based charm that temporarily increases the casters' spell power.", point_value: 5, wizard_id: 2},
  {spell_name: "Sectumsempra", spell_impact: "Lacerates the target, as if they have been slashed by a sword. Subsequently, the target can easily bleed to death from the wounds.", point_value: 4, wizard_id: 2},
  {spell_name: "Lacarnum Inflamari", spell_impact: "Ignites cloaks.", point_value: 3, wizard_id: 3},
  {spell_name: "Waddiwasi", spell_impact: "Used to shoot small, soft masses of whatever the caster so desires at the target", point_value: 4, wizard_id: 3},
  {spell_name: "Bat-Bogey Hex", spell_impact: "Transforms the target's bogeys into large bats that fly out of the victim's nose.", point_value: 2, wizard_id: 3},
  {spell_name: "Calvorio", spell_impact: "Removes the victim's hair.", point_value: 3, wizard_id: 4},
  {spell_name: "Carpe Retractum", spell_impact: "Produces a rope of light used to pull the caster towards the target.", point_value: 4, wizard_id: 4},
  {spell_name: "Cascading Jinx", spell_impact: "Attacks multiple opponents in close proximity to each other.", point_value: 4, wizard_id: 5},
  {spell_name: "Immobulus", spell_impact: "Immobilizes and stops the actions of the target. It works both on linving and inanimate things.", point_value: 4, wizard_id: 6},
  {spell_name: "Imperio", spell_impact: "Places the victim completely under the caster's control.  The victim is put into a tance-like state, and becomes very suggestible to the commands of the caster.", point_value: 5, wizard_id: 6},
  {spell_name: "Papyrus Reparo", spell_impact: "Mends torn pieces of paper.", point_value: 2, wizard_id: 7}, 
  {spell_name: "Deletrius", spell_impact: "Counter-charm to the Reverse Spell, vanishing the image of the last spell cast. It may also disintegrate other certain images.", point_value: 4, wizard_id: 8},
  {spell_name: "Ascendio", spell_impact: "Lifts the caster high into the air. The charm also works underwater, propelling the caster above the surface.", point_value: 3, wizard_id: 9},
  {spell_name: "Avada Kedavra", spell_impact: "Causes instantaneous death. It is accompanied by a flash of green light and a rushing noise.", point_value: 5, wizard_id: 10},
  {spell_name: "Magicus Extremos", spell_impact: "Partnership-based charm that temporarily increases the casters' spell power.", point_value: 5, wizard_id: 11},
  {spell_name: "Sectumsempra", spell_impact: "Lacerates the target, as if they have been slashed by a sword. Subsequently, the target can easily bleed to death from the wounds.", point_value: 4, wizard_id: 12},
  {spell_name: "Lacarnum Inflamari", spell_impact: "Ignites cloaks.", point_value: 3, wizard_id: 13},
  {spell_name: "Waddiwasi", spell_impact: "Used to shoot small, soft masses of whatever the caster so desires at the target", point_value: 4, wizard_id: 13},
  {spell_name: "Bat-Bogey Hex", spell_impact: "Transforms the target's bogeys into large bats that fly out of the victim's nose.", point_value: 2, wizard_id: 14},
  {spell_name: "Calvorio", spell_impact: "Removes the victim's hair.", point_value: 3, wizard_id: 14},
  {spell_name: "Carpe Retractum", spell_impact: "Produces a rope of light used to pull the caster towards the target.", point_value: 4, wizard_id: 15},
  {spell_name: "Cascading Jinx", spell_impact: "Attacks multiple opponents in close proximity to each other.", point_value: 4, wizard_id: 15},
  {spell_name: "Immobulus", spell_impact: "Immobilizes and stops the actions of the target. It works both on linving and inanimate things.", point_value: 4, wizard_id: 16},
  {spell_name: "Imperio", spell_impact: "Places the victim completely under the caster's control.  The victim is put into a tance-like state, and becomes very suggestible to the commands of the caster.", point_value: 5, wizard_id: 16}
])

puts "✅ Done seeding!"

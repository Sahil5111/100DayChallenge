extends RichTextLabel
signal unlock_ablities()

var active

# Variables
var dialog = ["You've been sent to chase down a rogue prisoner who has escaped the Empire with only a trail of cold bodies left in the wake of his escape."," As a Knight of the Empire, you've been entrusted to bring him to justice by any means necessary."
]
var snow =[ "Its been months since the last fight between you and the fugitive, the trail had gone cold, until now."," A  scout has spotted the fugitive near the ice-peaked mountains. You've been sent again to bring him to justice, this time however, he has nowhere to run."
]
var andrewg =["Knights of the Empire? To catch me? I think I must've scared all the toothless soldiers away."," You know I won't come in willingly, so bring it on punk. Hope you'll stand on your feet for more than 5 seconds!"
]
var andrews = ["They sent you again eh? I guess they really don't have anyone else. This time - we'll have a duel to death and once I win I'll make sure the Empire gets the message to not mess with the Übermensch Andraeu Taetius ever again!"
]


var dialouge=[dialog,snow,andrewg,andrews]

var page = 0

# Functions

func _input(event):
	if event is InputEventMouseButton and event.pressed:
		if get_visible_characters() > get_total_character_count():
			if page < dialog.size()-1:
				page += 1
				set_bbcode(dialouge[active][page])
				set_visible_characters(0)
			else:
				emit_signal("unlock_ablities")
				get_parent().visible= false
				page = 0
		else:
			set_visible_characters(get_total_character_count())

func setactive(a):
	active = a
	set_process_input(true)
	set_bbcode(dialouge[active][page])
	set_visible_characters(0)


func _on_Timer_timeout():
	set_visible_characters(get_visible_characters()+1)

extends Polygon2D
signal unlock_ablities()
export var world = 1
onready var label = $RichTextLabel
# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	label.setactive(world)

func text(a):
	visible = true
	label.setactive(a)
# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass


func _on_RichTextLabel_unlock_ablities():
	emit_signal("unlock_ablities")

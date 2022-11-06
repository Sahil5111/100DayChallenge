extends KinematicBody2D
const MAX_SPEED = 95
const accel = 500
const fric = 500

var velocity = Vector2.ZERO

onready var animationplayer = $AnimationPlayer
onready var animationtree = $AnimationTree
onready var animationstate = animationtree.get("parameters/playback")

func _ready():
	animationtree.active = true

func _physics_process(delta):
	var input_vector = Vector2.ZERO
	input_vector.x = Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left")
	input_vector.y = Input.get_action_strength("ui_down") - Input.get_action_strength("ui_up")
	input_vector = input_vector.normalized()
	
	if input_vector != Vector2.ZERO:
		animationtree.set("parameters/idle/blend_position",input_vector)
		animationtree.set("parameters/run/blend_position",input_vector)
		animationstate.travel("run")
		velocity = velocity.move_toward(input_vector*MAX_SPEED,accel*delta)
	else :
		animationstate.travel("idle")
		velocity = velocity.move_toward(Vector2.ZERO, fric*delta)
	
	velocity = move_and_slide(velocity)



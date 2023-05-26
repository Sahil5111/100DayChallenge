extends KinematicBody2D

const Death = preload("res://Effects/Deffect.tscn")
const heart  = preload("res://UI/pickable_Heart.tscn")
onready var label = get_parent().get_parent().get_parent().get_node("Camera2D/DialogBox")

export var ACC = 300
export var max_speed = 50
export var fric = 200
export var wander_target_range = 3
export var dialogue = 2

enum{
	idle,
	wander,
	chase
}

var yes = true
var velocity = Vector2.ZERO
onready var knockback = Vector2.ZERO
onready var stats = $stats
onready var player_detection = $player_detection
onready var hurtbox = $hurt
onready var softcollision = $softcollision 
onready var wandercontroller = $wandercontroller 
onready var health_bar =$HealthBar
onready var animationplayer = $AnimationPlayer
onready var animationtree = $AnimationTree

onready var animationstate = animationtree.get('parameters/playback')

var state = chase

func _ready():
	randomize()
	animationtree.active = true
	state = pick_random_state([idle,wander])

func _physics_process(delta):
	knockback = knockback.move_toward(Vector2.ZERO , 200*delta)
	knockback = move_and_slide(knockback)
	
	match state:
		idle:
			animationstate.travel('Idle')
			velocity = velocity.move_toward(Vector2.ZERO, fric * delta)
			seek()
			if wandercontroller.get_time_left() ==0:
				update_wander()
				
		wander:
			seek()
			if wandercontroller.get_time_left() ==0:
				update_wander()
			
			acc_towards(wandercontroller.target_position, delta , false)
			
			if global_position.distance_to(wandercontroller.target_position) <= wander_target_range :
				update_wander()
		
		chase:
			if yes:
				label.text(dialogue)
				yes = false
			var player = player_detection.isplayer
			if player != null :
				acc_towards(player.global_position , delta , true)
			else:
				state = idle
		
	
	if softcollision.is_colliding():
		velocity += softcollision.get_push_vector() * delta * 400
	velocity =  move_and_slide(velocity)

func pick_random_state(state_list):
	state_list.shuffle()
	return state_list.pop_front()
	

func update_wander():
	state= pick_random_state([idle,wander])
	wandercontroller.start_wander_timer(rand_range(1,3))

func acc_towards(point, delta , player):
	var direction = global_position.direction_to(point)
	velocity =  velocity.move_toward(direction * max_speed, ACC *delta)
	animationtree.set("parameters/attack/blend_position",direction.normalized())
	animationtree.set("parameters/Walking/blend_position",direction.normalized())
	animationtree.set("parameters/Idle/blend_position",direction.normalized())
	if player and self.global_position.distance_to(point) < 20 :
		animationstate.travel('attack')
	else:
		animationstate.travel('Walking')

func seek():
	if player_detection.can_see_player():
		state = chase


func _on_hurt_area_entered(area):
	stats.health -= 10
	health_bar.no_effect(stats.health)
	print(stats.health)
	knockback = area.knockback_vector * 120
	hurtbox.create_hit_effect()


func _on_stats_no_health():
	queue_free()
	var enemy = Death.instance()
	get_parent().add_child(enemy)
	enemy.global_position = global_position
	var des = randi()%3
	print(des)
	if not des:
		var heart_instance = heart.instance()
		heart_instance.position = global_position
		get_parent().add_child(heart_instance)

extends KinematicBody2D

var velocity :Vector2=Vector2()
var direction : Vector2=Vector2()


func read_input():
	velocity=Vector2()
	
	if Input.is_action_pressed("up"):
		velocity.y-=1
		direction=Vector2(0,-1)
	if Input.is_action_pressed("down"):
		velocity.y+=1
		direction=Vector2(0,1)
	if Input.is_action_pressed("left"):
		velocity.x-=1
		direction=Vector2(-1,0)
	if Input.is_action_pressed("right"):
		velocity.x+=1
		direction=Vector2(1,0)
	velocity=velocity.normalized()
	velocity=move_and_slide(velocity*400)
func _physics_process(delta):
	read_input()




func _on_detector_area_exited(area):
	if(area.name=="bottom_cliff"):
		pass#z_index=2


func _on_detector_area_entered(area):
	if(area.name=="bottom_cliff"):
		z_index=5

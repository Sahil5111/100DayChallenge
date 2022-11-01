public class Teacher {
    public static void main(String[] args) {
     Professor a= new Professor("sahil", "Comps", "DS")   ;
     a.displayInfo();
    }

    String name;
    String department;
    String course;
    String designation;

    public Teacher(String name, String department, String course, String designation) {
        this.name = name;
        this.department = department;
        this.course = course;
        this.designation = designation;
    }

    public void displayInfo() {
        System.out.println("Name : " + this.name);
        System.out.println("Department : " + this.department);
        System.out.println("Course : " + this.course);
        System.out.println("Designation : " + this.designation);
    }
}

class Professor extends Teacher {
    public Professor(String name, String department, String course) {
        super(name, department, course, "Professor");
    }
}

class Associate_Professor extends Teacher {

    public Associate_Professor(String name, String department, String course) {
        super(name, department, course, "Associate Professor");
    }
}

class Assistant_Professor extends Teacher {

    public Assistant_Professor(String name, String department, String course) {
        super(name, department, course, "Assistant Professor");
    }
}
package Exercise.AccessModifier.Practice_AccessModifier.Entity;

public class Circle {
    private double radius = 1.0;
    private String color = "Red";

    public Circle() {
    }

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    public double getArea(){
        return 2*Math.PI*radius*radius;
    }
}

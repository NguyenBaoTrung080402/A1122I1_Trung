package Exercise.AccessModifier.Practice_AccessModifier.main;

import Exercise.AccessModifier.Practice_AccessModifier.Entity.Circle;

public class main {
    public static void main(String[] args) {
//        double radius;
        Circle c = new Circle(2);

//        System.out.println("Radius: "c.getRadius());// không thể truy cập trực tiếp
        System.out.println("diện tích hình tròn: "+c.getArea());
    }
}

package Exercise.Ke_Thua.Circle;

import Exercise.Ke_Thua.Validatetion;

public class manager {
    public static void findV(){
        System.out.println("Nhập bán kính của hình trụ: ");
        double radius = Validatetion.checkInputDouble();
        System.out.println("Nhập chiều cao của hình trụ: ");
        double height = Validatetion.checkInputDouble();
        System.out.println("Nhập màu của hình: ");
        String color = Validatetion.checkInputString();
        Cylinder c = new Cylinder(radius, color, height);
        double Sum = Math.PI* radius*radius*height;

        System.out.println(c.toString()+ "\n"+
                "Thể tích của hình trụ là: "+Sum);

    }

    public static void main(String[] args) {
        findV();
    }
}

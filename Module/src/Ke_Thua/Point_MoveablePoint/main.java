package Exercise.Ke_Thua.Point_MoveablePoint;

public class main {
    public static void main(String[] args) {
        MoveablePoint a = new MoveablePoint();
        a.setSpeed(4,5);
        a.move();
        System.out.println(a.toString());
    }
}

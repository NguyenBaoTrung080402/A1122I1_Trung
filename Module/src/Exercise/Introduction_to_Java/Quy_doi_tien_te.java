package Exercise.Introduction_to_Java;

import java.util.Scanner;

public class Quy_doi_tien_te {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int rate = 0;
        do {
            System.out.println("------Mời chọn kiểu quy đổi tiền tệ-------");
            System.out.println("1. VND => USD");
            System.out.println("2. USD => VND");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");
            rate = Validatetion.checkInputIntLimmit(1, 3);
            switch (rate){
                case 1:
                    System.out.print("Nhập số tiền cần quy đổi: ");
                    int money = Validatetion.checkInputInt();
                    int Sum = money/23000;
                    System.out.println("Quy đổi " + money+" thành USD = "+ Sum+" USD");
                    break;
                case 2:
                    System.out.print("Nhập số tiền cần quy đổi: ");
                    int money2 = Validatetion.checkInputInt();;
                    int Sum1 = money2*23000;
                    System.out.println("Quy đổi " + money2+" thành VND = "+ Sum1+" VND");
                    break;
                case 3:
                    System.out.println("Thoát chức năng ");
                    break;
//                default:
//                    System.out.println("Nhập giá trị");
//                    break;
            }
        }while (rate < 3);

    }
}

package Exercise.Array_and_Method;

import java.util.Scanner;

public class Find_character {
    private static final Scanner sc = new Scanner(System.in);

    public static void find_charatec(){
        System.out.print("Nhập chuỗi bất kì: ");
        String str = Validatetion.checkInputString();
//        System.out.print("Nhập vào kí tự cần tìm: ");
//        String s = Validatetion.checkInputString();
        char s = 'l';
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            if(str.charAt(i) == s){
                count++;
            }
        }
        System.out.println("Số lần xuất hiện của ký tự " + s + " trong chuỗi " + str + " là " + count);
    }
    public static void main(String[] args) {
        find_charatec();
    }
}

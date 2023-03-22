package Exercise.DSA.ArrayList;

public class MyListTest {
    public static void main(String[] args) {
        MyArrayList<Integer> list = new MyArrayList<>();
        // Thêm 3 phần tử vào danh sách
        list.add(1);
        list.add(2);
        list.add(3);
        System.out.println("Danh sách ban đầu: " + list.toString());

        // Thêm phần tử vào vị trí thứ 2
        list.add(1, 5);
        System.out.println("Danh sách sau khi thêm 5 vào vị trí thứ 2: " + list.toString());

        // Lấy phần tử tại vị trí thứ 3
        int element = list.get(2);
        System.out.println("Phần tử tại vị trí thứ 3 là: " + element);

        // Xóa phần tử tại vị trí thứ 1
        list.remove(0);
        System.out.println("Danh sách sau khi xóa phần tử tại vị trí thứ 1: " + list.toString());

        // Kiểm tra danh sách chứa phần tử 2 hay không
        boolean containsElement = list.contains(2);
        System.out.println("Danh sách có chứa phần tử 2 hay không? " + containsElement);

        // Tạo bản sao của danh sách
        MyArrayList<Integer> copyList = list.clone();
        System.out.println("Bản sao của danh sách: " + copyList.toString());

        // Xóa tất cả các phần tử trong danh sách
        list.clear();
        System.out.println("Danh sách sau khi xóa tất cả các phần tử: " + list.toString());
    }

}

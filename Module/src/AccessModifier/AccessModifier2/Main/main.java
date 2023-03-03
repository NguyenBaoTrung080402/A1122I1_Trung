package Exercise.AccessModifier.AccessModifier2.Main;

import Exercise.AccessModifier.AccessModifier2.entity.Student;

public class main {
    public static void main(String[] args) {
        Student st = new Student();
        st.setName("trung");
        st.setClasses("SE17A04");
        System.out.println(st.toString());
    }
}

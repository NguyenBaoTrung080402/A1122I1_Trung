package Exercise.DSA.Map;

import java.util.HashMap;
import java.util.Map;

public class myMap {
    public static void main(String[] args) {
        String str = "The The quick quick brown fox jumps over the lazy dog quick";
        String[] words = str.split(" ");

        Map<String, Integer> wordCount = new HashMap<>();

        for (String word: words) {
            if(wordCount.containsKey(word)){
                wordCount.put(word, wordCount.get(word)+1);
            }else{
                wordCount.put(word, 1);
            }
        }
        for (HashMap.Entry<String, Integer> entry: wordCount.entrySet()) {
            System.out.println(entry.getKey()+ ": "+entry.getValue());
        }
    }
    
}

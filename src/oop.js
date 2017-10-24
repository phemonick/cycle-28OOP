public class Mobile {     
    private String manufacturer;  
    private String operating_system;  
    public String model;  
    private int cost;  
    //Constructor to set properties/characteristics of object  
    Mobile(String man, String o,String m, int c){  
        this.manufacturer = man;  
        this.operating_system=o;  
        this.model=m;  
        this.cost=c;  
    }  
    //Method to get access Model property of Object  
    public String getModel(){  
        return this.model;  
    }  
//inheritance
    public class Android extends Mobile{  
        //Constructor to set properties/characteristics of object  
        Android(String man, String o,String m, int c){  
                super(man, o, m, c);  
            }  
        //Method to get access Model property of Object  
        public String getModel(){  
            return "This is Android Mobile- " + model;  
        }  
}  
public class Blackberry extends Mobile{  
    //Constructor to set properties/characteristics of object  
    Blackberry(String man, String o,String m, int c){  
                    super(man, o, m, c);  
                }  
    public String getModel(){  
        return "This is Blackberry-"+ model;  
    }  
}  
//polymorphism
public class OverridingDemo {  
    public static void main(String[] args) {  
        //Creating Object of SuperClass and calling getModel Method  
        Mobile m = new Mobile("Nokia", "Win8", "Lumia",10000);  
        System.out.println(m.getModel());  
        //Creating Object of Sublcass and calling getModel Method  
        Android a = new Android("Samsung", "Android", "Grand",30000);  
        System.out.println(a.getModel());  
        //Creating Object of Sublcass and calling getModel Method  
        Blackberry b = new Blackberry("BlackB", "RIM", "Curve",20000);  
        System.out.println(b.getModel());  
    }  
}  
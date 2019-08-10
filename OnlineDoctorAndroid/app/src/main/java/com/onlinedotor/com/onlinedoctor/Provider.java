package com.onlinedotor.com.onlinedoctor;

public class Provider {

    private String lastname;
    private String firstname;
    private String specialty;
    private String language;
    private String provider;
    private String title;
    private String image;
    private String background1;
    private String background2;
    private String background3;
    private String address1;
    private String address2;
    private String city;
    private String state;
    private String zipcode;
    private String email;
    private String phone;

    public Provider(){

    }

    public Provider(String lastname, String firstname, String specialty, String language, String provider, String title, String image, String background1, String background2, String background3, String address1, String address2, String city, String state, String zipcode, String email, String phone){
        this.lastname = lastname;
        this.firstname = firstname;
        this.specialty = specialty;
        this.language = language;
        this.provider = provider;
        this.title = title;
        this.image = image;
        this.background1 = background1;
        this.background2 = background2;
        this.background3 = background3;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.email = email;
        this.image = image;
        this.phone = phone;
    }

    public String getLastname(){
        return lastname;
    }

    public void setLastname(String lastname){
        this.lastname = lastname;
    }

    public String getFirstname(){
        return firstname;
    }

    public void setFirstname(String firstname){
        this.firstname = firstname;
    }

    public String getSpecialty(){
        return specialty;
    }

    public void setSpecialty(String specialty){
        this.specialty = specialty;
    }

    public String getLanguage(){
        return language;
    }

    public void setLanguage(String language){
        this.language = language;
    }

    public String getProvider(){
        return provider;
    }

    public void setProvider(String provider){
        this.provider = provider;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getImage(){
        return image;
    }

    public void setImage(String image){
        this.image = image;
    }

    public String getBackground1(){
        return background1;
    }

    public void setBackground1(String background1){
        this.background1 = background1;
    }

    public String getBackground2(){
        return background2;
    }

    public void setBackground2(String background2){
        this.background2 = background2;
    }

    public String getBackground3(){
        return background3;
    }

    public void setBackground3(String background3){
        this.background3 = background3;
    }


    public String getAddress1(){
        return address1;
    }

    public void setAddress1(String address1){
        this.address1 = address1;
    }

    public String getAddress2(){
        return address2;
    }

    public void setAddress2(String address2){
        this.address2 = address2;
    }

    public String getCity(){
        return city;
    }

    public void setCity(String city){
        this.city = city;
    }

    public String getState(){
        return state;
    }

    public void setState(String state){
        this.state = state;
    }

    public String getZipcode(){
        return zipcode;
    }

    public void setZipcode(String zipcode){
        this.zipcode = zipcode;
    }


    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getPhone(){
        return phone;
    }

    public void setPhone(String phone){
        this.phone = phone;
    }

}

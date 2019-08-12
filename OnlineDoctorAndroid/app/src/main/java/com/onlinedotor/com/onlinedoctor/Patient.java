package com.onlinedotor.com.onlinedoctor;

public class Patient {

    private String address1;
    private String address2;
    private String city;
    private String dob;
    private String email;
    private String firstname;
    private String gender;
    private String lastname;
    private String mi;
    private String phone;
    private String servicecode;
    private String state;
    private String username;
    private String zipcode;

    public Patient(){

    }

    public Patient(String address1, String address2, String city, String dob, String email, String firstname, String gender, String lastname, String mi, String phone, String servicecode, String state, String username, String zipcode){
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.dob = dob;
        this.email = email;
        this.firstname = firstname;
        this.gender = gender;
        this.lastname = lastname;
        this.mi = mi;
        this.phone = phone;
        this.servicecode = servicecode;
        this.username = username;
        this.state = state;
        this.zipcode = zipcode;
    }

    public String getAddress1(){
        return address1;
    }

    public void setAddress1(String address1){
        this.address1 = address1;
    }

    public String getAdress2(){
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

    public String getDob(){
        return dob;
    }

    public void setDob(String dob){
        this.dob = dob;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getFirstname(){
        return firstname;
    }

    public void setFirstname(String firstname){
        this.firstname = firstname;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getLastname(){
        return lastname;
    }

    public void setLastname(String lastname){
        this.lastname = lastname;
    }

    public String getMi(){
                return mi;
    }

    public void setMi(String mi){
        this.mi = mi;
    }

    public String getPhone(){
        return phone;
    }

    public void setPhone(String phone){
        this.phone = phone;
    }

    public String getServicecode(){
        return servicecode;
    }

    public void setServicecode(String servicecode){
        this.servicecode = servicecode;
    }

    public String getUsername(){
        return username;
    }

    public void setUsername(String username){
        this.username = username;
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

}

package com.onlinedotor.com.onlinedoctor;

public class Appointment {

    private String patient_firstname;
    private String patient_lastname;
    private String provider_firstname;
    private String provider_lastname;
    private String timeslot;
    private String status;
    private String date;

    public Appointment(){

    }

    public Appointment(String patient_firstname, String patient_lastname, String provider_firstname, String provider_lastname, String timeslot, String date, String status){
        this.patient_firstname = patient_firstname;
        this.patient_lastname = patient_lastname;
        this.provider_firstname = provider_firstname;
        this.provider_lastname = provider_lastname;
        this.timeslot = timeslot;
        this.date = date;
        this.status = status;
    }

    public String getPatient_firstname(){
        return patient_firstname;
    }

    public void setPatient_firstname(String name){
        this.patient_firstname = patient_firstname;
    }

    public String getPatient_lastname(){
        return patient_lastname;
    }

    public void setPatient_lastname(String name){
        this.patient_lastname = patient_lastname;
    }

    public String getProvider_firstname(){
        return provider_firstname;
    }

    public void setProvider_firstname(String name){
        this.provider_firstname = provider_firstname;
    }

    public String getProvider_lastname(){
        return provider_lastname;
    }

    public void setProvider_lastname(String name){
        this.provider_lastname = provider_lastname;
    }

    public String getTimeslot(){
        return timeslot;
    }

    public void setTimeslot(String slot){
        this.timeslot = timeslot;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
